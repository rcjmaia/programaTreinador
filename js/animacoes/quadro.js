/* Quadro tático visto de cima, usado nas perguntas dos jogos de inteligência.
   Campo de 100 x 64: x = 0 é o nosso gol (o nosso time ataca para a direita), y = 0 é a lateral de cima.
   args (a cena da pergunta):
     us / them: [[papel, x, y], ...]   papel: chave de CQ_ROLES ou "" para não mostrar sigla
     ball: [x, y]
     steps: [{ d, us: { i: [x, y] }, them: { i: [x, y] }, ball: [x, y],
               arrows: [[x1, y1, x2, y2, "us" | "them" | "ball"]], zone: [x, y, w, h],
               hl: { us: [i], them: [i] }, text: [pt, en, es],
               look: ["us" | "them", i, [graus, ...]] }]   cone de visão girando pelos ângulos (0 = para a direita, 90 = para baixo)
     text: legenda inicial, antes do primeiro passo.
     view: [x, y, largura] mostra só esse pedaço do campo, ampliado (a altura segue a proporção 100 x 64). */

const CQ_ROLES = {
  gk: ["G", "GK", "P"],
  cb: ["Z", "CB", "C"],
  fb: ["L", "FB", "L"],
  wb: ["A", "WB", "C"],
  dm: ["V", "DM", "MC"],
  cm: ["M", "CM", "M"],
  am: ["M", "AM", "MP"],
  w: ["P", "W", "E"],
  st: ["9", "9", "9"],
};

const CQ_BOARD_IDS = { n: 0 };

cqRegisterAnim("quadro", (box, opts) => {
  const sc = opts.args;
  const px = (x) => 10 + x * 3;
  const py = (y) => 8 + y * 3;
  const view = sc.view || [0, 0, 100];
  const zoom = 100 / view[2];
  const clipId = (CQ_BOARD_IDS.n += 1);

  const dot = (team, role, i) => {
    const label = role ? opts.pick(CQ_ROLES[role] || [role, role, role]) : "";
    return `
      <g class="b-${team}" data-i="${i}">
        <circle class="b-ring" r="9.5" fill="none" stroke="#fff" stroke-width="2" opacity="0" />
        <circle r="6.5" fill="${team === "us" ? "#facc15" : "#ef4444"}" stroke="${team === "us" ? "#854d0e" : "#7f1d1d"}" stroke-width="1.2" />
        <text y="3" text-anchor="middle" font-size="7.5" font-weight="700" fill="${team === "us" ? "#422006" : "#fff"}">${label}</text>
      </g>`;
  };

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 320 222" role="img" aria-label="${opts.label}">
      <defs>
        <marker id="b-tip-us" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fde047" /></marker>
        <marker id="b-tip-them" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fca5a5" /></marker>
        <marker id="b-tip-ball" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fff" /></marker>
      </defs>
      <rect x="0" y="0" width="320" height="222" fill="#0b1f4d" />
      <clipPath id="b-clip-${clipId}"><rect x="0" y="0" width="320" height="203" /></clipPath>
      <g clip-path="url(#b-clip-${clipId})"><g transform="translate(10 8) scale(${zoom}) translate(${-px(view[0])} ${-py(view[1])})">
      <rect x="10" y="8" width="300" height="192" fill="#166534" />
      ${Array.from({ length: 10 }, (_, i) => (i % 2 ? `<rect x="${10 + i * 30}" y="8" width="30" height="192" fill="#15803d" />` : "")).join("")}
      <g fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.2">
        <rect x="10" y="8" width="300" height="192" />
        <line x1="160" y1="8" x2="160" y2="200" />
        <circle cx="160" cy="104" r="26" />
        <rect x="10" y="${py(14)}" width="48" height="108" />
        <rect x="262" y="${py(14)}" width="48" height="108" />
        <rect x="10" y="${py(25)}" width="16" height="42" />
        <rect x="294" y="${py(25)}" width="16" height="42" />
        <rect x="4" y="${py(28.5)}" width="6" height="21" />
        <rect x="310" y="${py(28.5)}" width="6" height="21" />
      </g>
      <rect class="b-zone" rx="4" fill="rgba(250,204,21,0.22)" stroke="#facc15" stroke-dasharray="4 3" stroke-width="1.2" opacity="0" />
      <g class="b-arrows"></g>
      <path class="b-look" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" stroke-width="1" opacity="0" />
      ${(sc.them || []).map((p, i) => dot("them", p[0], i)).join("")}
      ${(sc.us || []).map((p, i) => dot("us", p[0], i)).join("")}
      <circle class="b-ball" r="3.6" fill="#fff" stroke="#111" stroke-width="1" />
      </g></g>
      <text x="160" y="215" text-anchor="middle" class="b-text" fill="#fff" font-size="10.5"></text>
    </svg>`;

  const svg = box.querySelector("svg");
  const els = {
    us: [...svg.querySelectorAll(".b-us")],
    them: [...svg.querySelectorAll(".b-them")],
  };
  const ballEl = svg.querySelector(".b-ball");
  const zoneEl = svg.querySelector(".b-zone");
  const arrowsEl = svg.querySelector(".b-arrows");
  const textEl = svg.querySelector(".b-text");

  // Positions at the end of each step, so every step only lists what moves.
  const start = {
    us: (sc.us || []).map((p) => [p[1], p[2]]),
    them: (sc.them || []).map((p) => [p[1], p[2]]),
    ball: sc.ball || null,
  };
  const states = [start];
  (sc.steps || []).forEach((s) => {
    const prev = states[states.length - 1];
    const next = { us: prev.us.map((p) => [...p]), them: prev.them.map((p) => [...p]), ball: s.ball || prev.ball };
    ["us", "them"].forEach((team) => Object.entries(s[team] || {}).forEach(([i, p]) => { next[team][i] = p; }));
    states.push(next);
  });

  const segs = [{ dur: 1.2, idx: -1 }, ...(sc.steps || []).map((s, i) => ({ dur: s.d || 1.4, idx: i }))];
  const tl = cqTimeline(segs, 2);
  const lastSeg = segs[segs.length - 1];
  let shown = null;

  const showStep = (idx) => {
    if (shown === idx) return;
    shown = idx;
    const s = idx >= 0 ? sc.steps[idx] : { text: sc.text };
    const text = s.text || (idx > 0 ? sc.steps.slice(0, idx).reverse().find((p) => p.text)?.text : sc.text);
    textEl.textContent = text ? opts.pick(text) : "";
    if (s.zone) {
      const [x, y, w, h] = s.zone;
      zoneEl.setAttribute("x", px(x));
      zoneEl.setAttribute("y", py(y));
      zoneEl.setAttribute("width", w * 3);
      zoneEl.setAttribute("height", h * 3);
      zoneEl.setAttribute("opacity", 1);
    } else zoneEl.setAttribute("opacity", 0);
    arrowsEl.innerHTML = (s.arrows || []).map(([x1, y1, x2, y2, kind = "us"]) => {
      const color = kind === "us" ? "#fde047" : kind === "them" ? "#fca5a5" : "#fff";
      return `<line x1="${px(x1)}" y1="${py(y1)}" x2="${px(x2)}" y2="${py(y2)}" stroke="${color}" stroke-width="1.8" stroke-dasharray="${kind === "ball" ? "0" : "5 3"}" marker-end="url(#b-tip-${kind})" />`;
    }).join("");
    ["us", "them"].forEach((team) => els[team].forEach((el, i) => {
      el.querySelector(".b-ring").setAttribute("opacity", s.hl?.[team]?.includes(i) ? 1 : 0);
    }));
  };

  const lookEl = svg.querySelector(".b-look");
  const drawLook = (look, from, to, k, u) => {
    if (!look) {
      lookEl.setAttribute("opacity", 0);
      return;
    }
    const [team, i, angles] = look;
    const a = from[team][i];
    const b = to[team][i];
    const cx = px(cqLerp(a[0], b[0], k));
    const cy = py(cqLerp(a[1], b[1], k));
    const pos = u * (angles.length - 1);
    const n = Math.min(Math.floor(pos), angles.length - 2);
    const deg = angles.length > 1 ? cqLerp(angles[n], angles[n + 1], cqEase(cqClamp01(pos - n))) : angles[0];
    const r = 38;
    const half = (34 * Math.PI) / 180;
    const rad = (deg * Math.PI) / 180;
    const p = (ang) => `${(cx + r * Math.cos(ang)).toFixed(1)} ${(cy + r * Math.sin(ang)).toFixed(1)}`;
    lookEl.setAttribute("d", `M${cx} ${cy} L${p(rad - half)} A${r} ${r} 0 0 1 ${p(rad + half)} Z`);
    lookEl.setAttribute("opacity", 1);
  };

  const place = (from, to, k) => {
    ["us", "them"].forEach((team) => els[team].forEach((el, i) => {
      const a = from[team][i];
      const b = to[team][i];
      el.setAttribute("transform", `translate(${px(cqLerp(a[0], b[0], k))} ${py(cqLerp(a[1], b[1], k))})`);
    }));
    const a = from.ball;
    const b = to.ball;
    if (!b) ballEl.setAttribute("opacity", 0);
    else {
      const from2 = a || b;
      ballEl.setAttribute("opacity", 1);
      ballEl.setAttribute("cx", px(cqLerp(from2[0], b[0], k)));
      ballEl.setAttribute("cy", py(cqLerp(from2[1], b[1], k)));
    }
  };

  return cqLoop((seconds) => {
    const { seg, u, t } = tl.at(seconds);
    // During the rest at the end of the loop, hold the last picture.
    const resting = t >= lastSeg.start + lastSeg.dur;
    const idx = resting ? lastSeg.idx : seg.idx;
    showStep(idx);
    if (idx < 0) {
      place(start, start, 0);
      drawLook(null);
    } else {
      const k = resting ? 1 : cqEase(u);
      place(states[idx], states[idx + 1], k);
      drawLook(sc.steps[idx].look, states[idx], states[idx + 1], k, resting ? 1 : u);
    }
  });
});
