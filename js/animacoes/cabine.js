/* Cabine da mente: a Turma da Cabeça, usada nas perguntas dos jogos mentais.
   A janela de cima são os olhos do jogador; quem está no painel de comando decide o que ele faz.
   args (a cena da pergunta):
     anim: "cabine"
     cast: [id, ...]   ids de CQ_MIND_CAST; o primeiro começa no comando, salvo se houver boss
     boss: id inicial no comando
     text: legenda inicial, antes do primeiro passo
     steps: [{ d, boss: id, say: [id, [pt, en, es]], mood: { id: "big" | "small" | "" },
               cloud: [pt, en, es], text: [pt, en, es] }]
       cloud é um pensamento que passa pela janela como uma nuvem. */

const CQ_MIND_CAST = {
  capitao: { color: "#22d3ee", dark: "#0e7490", name: ["Capitão Agora", "Captain Now", "Capitán Ahora"] },
  pulinho: { color: "#facc15", dark: "#a16207", name: ["Pulinho", "Bouncy", "Saltito"] },
  tremelique: { color: "#a78bfa", dark: "#5b21b6", name: ["Tremelique", "Shaky", "Tembleque"] },
  faisca: { color: "#ef4444", dark: "#991b1b", name: ["Faísca", "Spark", "Chispa"] },
  nublada: { color: "#60a5fa", dark: "#1d4ed8", name: ["Nublada", "Cloudy", "Nublada"] },
  zumzum: { color: "#fb923c", dark: "#c2410c", name: ["Zum-Zum", "Buzz", "Zum-Zum"] },
  sofa: { color: "#a3a3a3", dark: "#525252", name: ["Sr. Sofá", "Mr. Couch", "Sr. Sofá"] },
  pavao: { color: "#e879f9", dark: "#a21caf", name: ["Pavão", "Peacock", "Pavo Real"] },
};

const CQ_MIND_SLOTS = [[62, 150], [258, 150], [22, 158], [298, 158]];
const CQ_MIND_BOSS = [160, 138];

function cqMindFace(id) {
  const c = CQ_MIND_CAST[id];
  const eye = (x) => {
    if (id === "sofa") return `<path d="M${x - 4} -2 q4 3 8 0" stroke="#111" stroke-width="1.6" fill="none" />`;
    const r = id === "tremelique" ? 3.6 : 2.6;
    return `<circle cx="${x}" cy="-2" r="${r}" fill="#fff" /><circle cx="${x}" cy="-1.5" r="${r * 0.5}" fill="#111" />`;
  };
  const mouths = {
    capitao: "M-5 7 q5 4 10 0",
    pulinho: "M-7 5 q7 9 14 0 z",
    tremelique: "M-2.5 8 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0",
    faisca: "M-6 9 q6 -4 12 0",
    nublada: "M-5 10 q5 -4 10 0",
    zumzum: "M-6 8 l3 -2 l3 2 l3 -2 l3 2",
    sofa: "M-4 8 h8",
    pavao: "M-5 6 q6 3 9 -1",
  };
  const extras = {
    capitao: `<path d="M-14 -16 q14 -10 28 0 v4 h-28 z" fill="#0f172a" /><rect x="-15" y="-13" width="30" height="3" fill="#facc15" />`,
    pulinho: `<path d="M0 -26 l2.5 5 5.5 .8 -4 3.8 1 5.4 -5 -2.6 -5 2.6 1 -5.4 -4 -3.8 5.5 -.8z" fill="#fde047" stroke="#a16207" stroke-width=".8" />`,
    tremelique: "",
    faisca: `<path d="M-8 -16 q2 -10 6 -6 q1 -9 5 -4 q4 -7 5 2 q4 -2 2 8 z" fill="#f97316" />`,
    nublada: `<g fill="#cbd5e1"><circle cx="-6" cy="-26" r="5" /><circle cx="1" cy="-29" r="6" /><circle cx="8" cy="-26" r="5" /></g>`,
    zumzum: `<g stroke="${c.dark}" stroke-width="1.6"><line x1="-8" y1="-15" x2="-11" y2="-22" /><line x1="0" y1="-17" x2="0" y2="-25" /><line x1="8" y1="-15" x2="11" y2="-22" /></g>`,
    sofa: `<path d="M-14 -12 q6 -12 22 -8 l8 -6 l-2 10 q-14 -2 -28 4z" fill="#64748b" /><circle cx="16" cy="-26" r="2.5" fill="#fff" />`,
    pavao: `<g opacity=".9">${[-40, -20, 0, 20, 40].map((a) => `<ellipse cx="0" cy="-22" rx="4" ry="10" fill="#c026d3" transform="rotate(${a} 0 -8)" /><circle cx="0" cy="-30" r="2" fill="#22d3ee" transform="rotate(${a} 0 -8)" />`).join("")}</g>`,
  };
  const brows = {
    faisca: `<path d="M-10 -8 l7 3 M10 -8 l-7 3" stroke="#111" stroke-width="1.8" />`,
    nublada: `<path d="M-10 -5 l7 -3 M10 -5 l-7 -3" stroke="#111" stroke-width="1.4" />`,
    pavao: `<path d="M-10 -8 l7 -1 M10 -8 l-7 -1" stroke="#111" stroke-width="1.4" />`,
  };
  return `
    ${id === "pavao" ? extras.pavao : ""}
    <ellipse cx="0" cy="4" rx="15" ry="17" fill="${c.color}" stroke="${c.dark}" stroke-width="1.5" />
    ${id === "pavao" ? "" : extras[id]}
    ${eye(-5.5)}${eye(5.5)}
    ${brows[id] || ""}
    <path d="${mouths[id]}" stroke="#111" stroke-width="1.6" fill="${id === "pulinho" ? "#7f1d1d" : "none"}" stroke-linecap="round" />
    ${id === "capitao" ? `<rect x="-15" y="12" width="30" height="5" rx="2" fill="#facc15" /><text x="0" y="16.3" text-anchor="middle" font-size="5" font-weight="700" fill="#0f172a">C</text>` : ""}`;
}

function cqWrap(text, max) {
  const lines = [];
  text.split(" ").forEach((w) => {
    const last = lines[lines.length - 1];
    if (last && (last + " " + w).length <= max) lines[lines.length - 1] = last + " " + w;
    else lines.push(w);
  });
  return lines;
}

cqRegisterAnim("cabine", (box, opts) => {
  const sc = opts.args;
  const cast = sc.cast || ["capitao"];
  const steps = sc.steps || [];

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 320 222" role="img" aria-label="${opts.label}" font-family="system-ui, sans-serif">
      <rect x="0" y="0" width="320" height="222" fill="#1e1b4b" />
      <rect x="0" y="150" width="320" height="56" fill="#312e81" />
      <g class="m-window">
        <rect x="48" y="10" width="224" height="66" rx="14" fill="#0f172a" stroke="#818cf8" stroke-width="3" />
        <clipPath id="m-win"><rect x="50" y="12" width="220" height="62" rx="12" /></clipPath>
        <g clip-path="url(#m-win)">
          <rect x="50" y="40" width="220" height="40" fill="#15803d" />
          <rect x="50" y="12" width="220" height="28" fill="#38bdf8" />
          <line x1="50" y1="52" x2="270" y2="52" stroke="rgba(255,255,255,.6)" />
          <rect x="226" y="30" width="30" height="14" fill="none" stroke="#fff" stroke-width="1.5" />
          <circle class="m-ball" cx="140" cy="60" r="4" fill="#fff" stroke="#111" />
          <g class="m-cloud" opacity="0">
            <g fill="#fff" stroke="#cbd5e1"><ellipse cx="0" cy="0" rx="46" ry="12" /><circle cx="-24" cy="-6" r="9" /><circle cx="0" cy="-10" r="11" /><circle cx="22" cy="-6" r="9" /></g>
            <text class="m-cloud-text" x="0" y="3.5" text-anchor="middle" font-size="8.5" fill="#334155"></text>
          </g>
        </g>
      </g>
      <path d="M100 180 L220 180 L236 204 L84 204 Z" fill="#4338ca" stroke="#a5b4fc" stroke-width="1.5" />
      <g><circle cx="126" cy="192" r="4" fill="#22c55e" /><circle cx="140" cy="192" r="4" fill="#facc15" /><circle cx="154" cy="192" r="4" fill="#ef4444" /><rect x="170" y="188" width="36" height="8" rx="3" fill="#0f172a" /></g>
      ${cast.map((id) => `<g class="m-char" data-id="${id}"><g class="m-body">${cqMindFace(id)}</g><text class="m-name" text-anchor="middle" font-size="7.5" fill="#e0e7ff">${opts.pick(CQ_MIND_CAST[id].name)}</text></g>`).join("")}
      <g class="m-bubble" opacity="0">
        <rect class="m-bubble-box" rx="8" fill="#fff" stroke="#111" stroke-width="1" />
        <path class="m-bubble-tail" fill="#fff" stroke="#111" stroke-width="1" />
        <text class="m-bubble-text" text-anchor="middle" font-size="9" fill="#111" font-weight="600"></text>
      </g>
      <text x="160" y="215" text-anchor="middle" class="b-text" fill="#fff" font-size="10.5"></text>
    </svg>`;

  const svg = box.querySelector("svg");
  const chars = Object.fromEntries([...svg.querySelectorAll(".m-char")].map((el) => [el.dataset.id, el]));
  const bubble = svg.querySelector(".m-bubble");
  const bubbleBox = svg.querySelector(".m-bubble-box");
  const bubbleTail = svg.querySelector(".m-bubble-tail");
  const bubbleText = svg.querySelector(".m-bubble-text");
  const cloud = svg.querySelector(".m-cloud");
  const cloudText = svg.querySelector(".m-cloud-text");
  const ball = svg.querySelector(".m-ball");
  const textEl = svg.querySelector(".b-text");

  // Layout (who sits where, and how big) at the end of each step.
  const layoutFor = (boss, mood) => {
    const out = {};
    let slot = 0;
    cast.forEach((id) => {
      const scale = mood[id] === "big" ? 1.35 : mood[id] === "small" ? 0.7 : 1;
      if (id === boss) out[id] = { x: CQ_MIND_BOSS[0], y: CQ_MIND_BOSS[1], s: 1.25 * scale };
      else {
        const [x, y] = CQ_MIND_SLOTS[slot++ % CQ_MIND_SLOTS.length];
        out[id] = { x, y, s: 0.95 * scale };
      }
    });
    return out;
  };
  let boss = sc.boss || cast[0];
  let mood = {};
  const layouts = [layoutFor(boss, mood)];
  steps.forEach((s) => {
    if (s.boss) boss = s.boss;
    if (s.mood) mood = { ...mood, ...s.mood };
    layouts.push(layoutFor(boss, mood));
  });

  const segs = [{ dur: 1.2, idx: -1 }, ...steps.map((s, i) => ({ dur: s.d || 2.4, idx: i }))];
  const tl = cqTimeline(segs, 2);
  const lastSeg = segs[segs.length - 1];
  let shown = null;

  const showStep = (idx) => {
    if (shown === idx) return;
    shown = idx;
    const s = idx >= 0 ? steps[idx] : { text: sc.text };
    const text = s.text || (idx > 0 ? steps.slice(0, idx).reverse().find((p) => p.text)?.text : sc.text);
    textEl.textContent = text ? opts.pick(text) : "";
    cloudText.textContent = s.cloud ? opts.pick(s.cloud) : "";
    bubble.setAttribute("opacity", 0);
    if (!s.say) return;
    const lines = cqWrap(opts.pick(s.say[1]), 26).slice(0, 3);
    bubbleText.innerHTML = lines.map((l, i) => `<tspan x="0" dy="${i ? 10.5 : 0}">${l}</tspan>`).join("");
    const w = Math.max(...lines.map((l) => l.length)) * 4.9 + 16;
    const h = lines.length * 10.5 + 9;
    bubble.dataset.w = w;
    bubble.dataset.h = h;
    bubble.dataset.who = s.say[0];
    bubbleBox.setAttribute("width", w);
    bubbleBox.setAttribute("height", h);
  };

  const placeBubble = (pos) => {
    const who = bubble.dataset.who;
    if (!who || !pos[who] || shown < 0 || !steps[shown]?.say) return;
    const w = +bubble.dataset.w;
    const h = +bubble.dataset.h;
    const p = pos[who];
    const bx = Math.max(6, Math.min(314 - w, p.x - w / 2));
    const by = Math.max(80, p.y - 24 * p.s - h - 10);
    bubbleBox.setAttribute("x", bx);
    bubbleBox.setAttribute("y", by);
    bubbleText.setAttribute("transform", `translate(${bx + w / 2} ${by + 13})`);
    const tx = Math.max(bx + 10, Math.min(bx + w - 10, p.x));
    bubbleTail.setAttribute("d", `M${tx - 5} ${by + h - 1} L${tx + 5} ${by + h - 1} L${p.x} ${p.y - 18 * p.s} Z`);
    bubble.setAttribute("opacity", 1);
  };

  return cqLoop((seconds) => {
    const { seg, u, t } = tl.at(seconds);
    const resting = t >= lastSeg.start + lastSeg.dur;
    const idx = resting ? lastSeg.idx : seg.idx;
    showStep(idx);
    const k = idx < 0 ? 0 : resting ? 1 : cqEase(cqClamp01(u * 2));
    const from = layouts[Math.max(0, idx)];
    const to = layouts[idx + 1] || from;
    const pos = {};
    cast.forEach((id) => {
      const a = idx < 0 ? layouts[0][id] : from[id];
      const b = idx < 0 ? layouts[0][id] : to[id];
      const talking = idx >= 0 && steps[idx]?.say?.[0] === id;
      const bob = Math.sin(seconds * (talking ? 9 : 2) + id.length) * (talking ? 2.2 : 1.2);
      const shake = id === "tremelique" ? Math.sin(seconds * 40) * 0.8 : 0;
      const p = { x: cqLerp(a.x, b.x, k) + shake, y: cqLerp(a.y, b.y, k) + bob, s: cqLerp(a.s, b.s, k) };
      pos[id] = p;
      chars[id].setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
      chars[id].firstChild.setAttribute("transform", `scale(${p.s.toFixed(3)})`);
      chars[id].lastChild.setAttribute("y", (22 * p.s + 7).toFixed(1));
    });
    placeBubble(pos);
    const cu = idx >= 0 && steps[idx]?.cloud ? (resting ? 1 : u) : -1;
    if (cu < 0) cloud.setAttribute("opacity", 0);
    else {
      cloud.setAttribute("opacity", cu > 0.85 ? (1 - cu) / 0.15 : Math.min(1, cu * 5));
      cloud.setAttribute("transform", `translate(${cqLerp(300, 20, cu).toFixed(1)} 34)`);
    }
    ball.setAttribute("cx", (140 + Math.sin(seconds * 1.3) * 40).toFixed(1));
  });
});
