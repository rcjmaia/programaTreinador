/* Cenas do "Você decide" (js/missoes-decide.js): um lance de jogo que para no momento da decisão.
   opts.args.story é o roteiro do lance; com opts.args.then, junta as cenas de then ao roteiro
   e começa do fim do lance (a consequência da escolha). Toca uma vez, chama opts.onEnd e segue animando a última cena.

   Roteiro:
     bg       "pitch" | "stadium" | "room" | "night"
     hud      { score: [nós, eles], min } liga o placar (min número vira 70'; texto aparece como está)
     props    objetos visíveis no início: goal, goalL, crowd, sofa, bed, stairs, bird, spot, zzz, phone, ice, card, rain,
              breathe (círculo que cresce e encolhe em volta da criança, como uma respiração),
              icon: [emoji, x, y] ou [emoji, ator] (o emoji flutua sobre a cabeça do ator)
     cast     { ator: { kit, x, dir, pose, lift, hide } }; "me" é a criança e veste a camisa da carta dela.
              kits: me, mate, rival, keeper, ref, coach (outros atores podem repetir um kit: rival2: { kit: "rival" })
     ball     dono | [x, y] | null
     beats    [{ d, cap, think: [carinha, texto, ator] | null, say: [ator, texto], big, bigAt, bigFor,
                 fx: "rewind" | "cut", sparks, bg, props, score, clouds: [texto, ...],
                 a: { ator: { x, dir, pose, lift, hop, glide, hide, t0, t1 } },
                 ball: { to: ator | "goal" | "goalL" | "over" | "wide" | [x, y], h, t0, t1 } | { give: ator, t0 } | { juggle: ator } }]
   O chão fica em y 140. Textos são [pt, en, es]. cap, think, bg, props, sparks e score continuam valendo nas cenas seguintes.
   "rewind" volta tudo ao começo (com o ⏪); "cut" pula direto para a nova posição (troca de cena).
   props.card mostra o cartão amarelo na mão do juiz (pose "card"). think precisa de cabine.js (carinhas da turma). */

const CQS_JUMP = { ...CQ_POSE.air, legF: [-20, 40], legB: [10, 40] };
const CQS_POSES = {
  sad: { ...CQ_POSE.stand, lean: 14, armF: [4, 0], armB: [-4, 0] },
  sit: { hipY: CQ_GROUND - 9, lean: -6, legF: [-82, 10], legB: [-78, 14], armF: [30, -20], armB: [40, -20] },
  pain: { hipY: CQ_GROUND - 30, lean: 28, legF: [-50, 80], legB: [8, 8], armF: [30, -70], armB: [36, -70] },
  shout: { ...CQ_POSE.stand, lean: -6, armF: [-115, -60], armB: [-100, -60] },
  think: { ...CQ_POSE.stand, lean: -10, armF: [-30, -130], armB: [6, -10] },
  lie: CQ_POSE.lieBack,
  juggleUp: { ...CQ_POSE.stand, legF: [-60, 30], armF: [-30, -20], armB: [30, -20] },
  card: { ...CQ_POSE.stand, armF: [-172, -6] },
  push: { ...CQ_POSE.stand, lean: 14, legF: [-22, 10], legB: [18, 8], armF: [-88, -4], armB: [-82, -4] },
  hands: { ...CQ_POSE.stand, armF: [-128, -50], armB: [-118, -50] },
  point: { ...CQ_POSE.stand, armF: [-92, -4] },
};

cqRegisterAnim("historia", (box, opts) => {
  // Beats with thought clouds get stretched so each cloud stays long enough to be read.
  const readable = (sc) => sc && { ...sc, beats: sc.beats.map((b) => (b.clouds ? { ...b, d: Math.max(b.d, 1.2 + b.clouds.length * 1.3) } : b)) };
  const src = readable(opts.args.story);
  const then = readable(opts.args.then);
  const st = then ? { ...src, beats: [...src.beats, ...then.beats] } : src;
  const skip = then ? src.beats.reduce((s, b) => s + b.d, 0) : 0;
  const G = CQ_GROUND;
  const P = CQ_POSE;
  const uid = "hs" + Math.random().toString(36).slice(2, 8);
  const txt = (v) => (v == null ? "" : typeof v === "string" ? v : opts.pick(v));

  const team = cqMeKits(opts.me);
  const redShirt = ["#dc2626", "#ef4444"].includes(team.me.shirt);
  const kits = {
    ...team,
    rival: redShirt
      ? { shirt: "#f8fafc", trim: "#94a3b8", shorts: "#1e293b", socks: "#f8fafc", boots: "#111827", skin: "#8d5524", hair: "#1f1610" }
      : { shirt: "#ef4444", trim: "#7f1d1d", shorts: "#111827", socks: "#ef4444", boots: "#111827", skin: "#8d5524", hair: "#1f1610" },
    keeper: { ...CQ_KIT_GK, shirt: "#a855f7", trim: "#581c87", socks: "#a855f7", skin: "#e0ac69" },
    ref: { shirt: "#111827", trim: "#facc15", shorts: "#111827", socks: "#111827", boots: "#111827", skin: "#c68642", hair: "#3f3f46" },
    coach: CQ_KIT_HELPER,
  };
  const ids = Object.keys(st.cast);
  const crew = [...new Set(st.beats.map((b) => b.think?.[0]).filter(Boolean))];

  const crowd = Array.from({ length: 27 }, (_, i) => {
    const c = ["#f87171", "#facc15", "#60a5fa", "#a78bfa", "#34d399", "#fb923c"][i % 6];
    const y = 86 + (i % 2) * 4;
    return `<rect x="${i * 12 + 1}" y="${y + 3}" width="10" height="10" rx="3" fill="${c}" /><circle cx="${i * 12 + 6}" cy="${y}" r="4" fill="${["#f6d3b3", "#a86b3c", "#d9a273"][i % 3]}" />`;
  }).join("");
  const fans = Array.from({ length: 80 }, (_, i) => {
    const row = i % 4;
    const x = (Math.floor(i / 4) * 16 + row * 5 + 3) % 322;
    const c = ["#64748b", "#94a3b8", "#475569", "#7f1d1d", "#1e3a8a", "#a16207"][(i * 7) % 6];
    return `<circle cx="${x}" cy="${58 + row * 9}" r="3.2" fill="${c}" />`;
  }).join("");
  const stripes = Array.from({ length: 10 }, (_, i) => `<rect x="${i * 32}" y="104" width="32" height="${180 - 104}" fill="${i % 2 ? "#15803d" : "#16a34a"}" />`).join("");
  const light = (x) => `<rect x="${x - 1.5}" y="14" width="3" height="40" fill="#334155" /><rect x="${x - 11}" y="6" width="22" height="9" rx="2" fill="#e2e8f0" /><circle cx="${x}" cy="10" r="20" fill="#fef9c3" opacity=".12" />`;
  // Each drop is drawn twice, 180 apart, so the falling loop has no seam.
  const drops = Array.from({ length: 36 }, (_, i) => {
    const x = (i * 47) % 336 + 4;
    const y = (i * 71) % 180;
    return [y, y - 180].map((v) => `<line x1="${x}" y1="${v}" x2="${x - 4}" y2="${v + 11}" />`).join("");
  }).join("");
  const stairs = [0, 1, 2, 3].map((i) => {
    const h = 12 * (i + 1);
    return `<rect x="${190 + i * 30}" y="${G - h}" width="30" height="${h}" fill="#d97706" stroke="#92400e" /><text x="${205 + i * 30}" y="${G - h + 10}" text-anchor="middle" font-size="8" font-weight="700" fill="#fff">${i + 1}</text>`;
  }).join("");

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 320 180" role="img" aria-label="${opts.label}" font-family="system-ui, sans-serif">
      <defs><mask id="${uid}-m"><rect width="320" height="180" fill="#fff" /><circle class="s-hole" r="30" fill="#000" /></mask></defs>
      <g class="s-bg" data-bg="pitch">
        <rect width="320" height="${G}" fill="#7dd3fc" /><rect y="92" width="320" height="${G - 92}" fill="#bae6fd" />
        <rect y="${G}" width="320" height="${180 - G}" fill="#166534" /><line x1="0" y1="${G}" x2="320" y2="${G}" stroke="#22c55e" stroke-width="2" />
      </g>
      <g class="s-bg" data-bg="room">
        <rect width="320" height="${G}" fill="#fde68a" /><rect y="${G - 6}" width="320" height="6" fill="#f59e0b" />
        <rect x="222" y="22" width="70" height="52" rx="4" fill="#7dd3fc" stroke="#fff" stroke-width="4" /><line x1="257" y1="22" x2="257" y2="74" stroke="#fff" stroke-width="3" />
        <rect y="${G}" width="320" height="${180 - G}" fill="#92400e" />
      </g>
      <g class="s-bg" data-bg="night">
        <rect width="320" height="${G}" fill="#312e81" /><rect y="${G - 6}" width="320" height="6" fill="#4338ca" />
        <rect x="222" y="22" width="70" height="52" rx="4" fill="#0f172a" stroke="#c7d2fe" stroke-width="4" />
        <circle cx="270" cy="40" r="9" fill="#fef9c3" /><circle cx="274" cy="37" r="8" fill="#0f172a" />
        <g fill="#fff"><circle cx="235" cy="35" r="1.2" /><circle cx="248" cy="60" r="1" /><circle cx="282" cy="64" r="1.2" /></g>
        <rect y="${G}" width="320" height="${180 - G}" fill="#1e1b4b" />
      </g>
      <g class="s-bg" data-bg="stadium">
        <rect width="320" height="104" fill="#0b1324" />
        ${light(40)}${light(280)}
        <rect y="50" width="320" height="42" fill="#1e293b" />${fans}
        <rect y="92" width="320" height="12" fill="#0f172a" />
        <g font-size="7" font-weight="800" fill="#e2e8f0" opacity=".7">${[20, 120, 220].map((x) => `<text x="${x}" y="100.5">CRAQUE DE BOLA</text>`).join("")}</g>
        ${stripes}
        <line x1="0" y1="106" x2="320" y2="106" stroke="#f8fafc" stroke-width="1.2" opacity=".7" />
      </g>
      <g class="s-prop" data-p="crowd">${crowd}</g>
      <g class="s-clouds">${[0, 1, 2].map(() => `<g class="s-cloud" opacity="0"><g fill="#fff" stroke="#cbd5e1"><ellipse rx="42" ry="11" /><circle cx="-20" cy="-6" r="9" /><circle cx="2" cy="-9" r="11" /><circle cx="22" cy="-5" r="8" /></g><text y="3.5" text-anchor="middle" font-size="9" font-weight="700" fill="#334155"></text></g>`).join("")}</g>
      <g class="s-prop" data-p="goal">${cqGoalSvg(284, 30, 50)}</g>
      <g class="s-prop" data-p="goalL"><g transform="translate(36 0) scale(-1 1)">${cqGoalSvg(0, 30, 50)}</g></g>
      <g class="s-prop" data-p="stairs">${stairs}<text x="306" y="${G - 52}" text-anchor="middle" font-size="16">🏆</text></g>
      <g class="s-prop" data-p="sofa">
        <rect x="40" y="${G - 52}" width="112" height="30" rx="9" fill="#7c3aed" />
        <rect x="36" y="${G - 26}" width="120" height="18" rx="6" fill="#8b5cf6" />
        <rect x="28" y="${G - 40}" width="16" height="32" rx="6" fill="#6d28d9" /><rect x="148" y="${G - 40}" width="16" height="32" rx="6" fill="#6d28d9" />
        <rect x="40" y="${G - 8}" width="6" height="8" fill="#4c1d95" /><rect x="146" y="${G - 8}" width="6" height="8" fill="#4c1d95" />
      </g>
      <g class="s-prop" data-p="bed">
        <rect x="22" y="${G - 58}" width="10" height="58" rx="3" fill="#a16207" />
        <rect x="30" y="${G - 24}" width="134" height="14" rx="4" fill="#f8fafc" />
        <rect x="96" y="${G - 27}" width="68" height="12" rx="4" fill="#60a5fa" />
        <ellipse cx="48" cy="${G - 28}" rx="14" ry="6" fill="#e2e8f0" />
        <rect x="30" y="${G - 10}" width="134" height="10" fill="#a16207" />
      </g>
      ${["ref", "coach", "keeper", "rival", "mate", "me"].filter((id) => ids.includes(id)).concat(ids.filter((id) => !["ref", "coach", "keeper", "rival", "mate", "me"].includes(id)))
        .map((id) => `<g class="s-act" data-id="${id}">${cqPlayerSvg(kits[st.cast[id].kit || id] || kits.mate)}</g>`).join("")}
      <g class="s-ball">${cqBallSvg(5)}</g>
      <text class="s-prop s-dyn" data-p="ice" font-size="13" text-anchor="middle">🧊</text>
      <g class="s-prop s-dyn" data-p="phone"><circle r="13" fill="#67e8f9" opacity=".35" /><text y="5" font-size="13" text-anchor="middle">📱</text></g>
      <text class="s-prop s-dyn" data-p="zzz" font-size="15" text-anchor="middle">💤</text>
      <text class="s-prop s-dyn" data-p="bird" font-size="16" text-anchor="middle">🐦</text>
      <rect class="s-prop s-dyn" data-p="card" width="7" height="10" rx="1" fill="#facc15" stroke="#a16207" stroke-width=".6" />
      <circle class="s-prop s-dyn" data-p="breathe" r="28" fill="#67e8f9" fill-opacity=".14" stroke="#67e8f9" stroke-width="1.4" />
      <text class="s-prop s-dyn" data-p="icon" font-size="18" text-anchor="middle"></text>
      <g class="s-prop" data-p="rain"><rect width="320" height="180" fill="#475569" opacity=".3" /><g class="s-rain" stroke="#cbd5e1" stroke-width="1.1" opacity=".75">${drops}</g></g>
      <rect class="s-prop s-dyn" data-p="spot" width="320" height="180" fill="#020617" opacity=".6" mask="url(#${uid}-m)" />
      <g class="s-sparks" opacity="0" font-size="16">
        <text x="40" y="40">✨</text><text x="270" y="30">✨</text><text x="120" y="22">⭐</text><text x="210" y="60">✨</text><text x="70" y="80">⭐</text>
      </g>
      <g class="s-think" opacity="0">
        <circle class="s-dot1" r="3" fill="#fff" stroke="#94a3b8" />
        <circle class="s-dot2" r="5" fill="#fff" stroke="#94a3b8" />
        <g class="s-cloudface">
          <ellipse rx="27" ry="23" fill="#fff" stroke="#94a3b8" />
          ${crew.map((id) => `<g class="s-face" data-id="${id}" opacity="0"><g transform="translate(0 -2) scale(.82)">${cqMindFace(id)}</g></g>`).join("")}
        </g>
        <rect class="s-think-box" rx="7" fill="#fff" stroke="#111" stroke-width="1" />
        <text class="s-think-text" text-anchor="middle" font-size="9" font-weight="700" fill="#111"></text>
      </g>
      <g class="s-say" opacity="0">
        <rect class="s-say-box" rx="7" fill="#fff" stroke="#111" stroke-width="1.2" />
        <path class="s-say-tail" fill="#fff" stroke="#111" stroke-width="1.2" />
        <text class="s-say-text" text-anchor="middle" font-size="12" font-weight="800" fill="#b91c1c"></text>
      </g>
      <rect class="s-dim" width="320" height="180" fill="#0f172a" opacity="0" />
      <text class="s-big" x="160" y="86" text-anchor="middle" font-size="34" font-weight="800" fill="#facc15" stroke="#111" stroke-width="1.5" opacity="0"></text>
      <text class="s-cap" x="160" y="167" text-anchor="middle" font-size="12" font-weight="700" fill="#fff"></text>
      ${st.hud ? `<g class="s-hud" font-size="9" font-weight="800" fill="#f8fafc">
        <rect x="6" y="6" width="132" height="17" rx="3" fill="#020617" opacity=".88" />
        <rect x="11" y="10.5" width="8" height="8" rx="1.5" fill="${kits.me.shirt}" stroke="#f8fafc" stroke-width=".6" />
        <text x="23" y="17.5">${txt(["NÓS", "US", "NOS"])}</text>
        <text class="s-hud-score" x="68" y="17.5" text-anchor="middle"></text>
        <text x="113" y="17.5" text-anchor="end">${txt(["ELES", "THEM", "ELLOS"])}</text>
        <rect x="117" y="10.5" width="8" height="8" rx="1.5" fill="${kits.rival.shirt}" stroke="#f8fafc" stroke-width=".6" />
        <rect x="140" y="6" width="${typeof st.hud.min === "number" ? 28 : 46}" height="17" rx="3" fill="#16a34a" />
        <text x="${typeof st.hud.min === "number" ? 154 : 163}" y="17.5" text-anchor="middle">${typeof st.hud.min === "number" ? `${st.hud.min}'` : txt(st.hud.min)}</text>
      </g>` : ""}
    </svg>`;

  const svg = box.querySelector("svg");
  const q = (s) => svg.querySelector(s);
  const qa = (s) => [...svg.querySelectorAll(s)];
  const actEls = Object.fromEntries(qa(".s-act").map((el) => [el.dataset.id, el]));
  const rigs = Object.fromEntries(ids.map((id) => [id, cqPlayerRig(actEls[id])]));
  const bgEls = qa(".s-bg");
  const propEls = qa(".s-prop");
  const dyn = Object.fromEntries(qa(".s-dyn").map((el) => [el.dataset.p, el]));
  const ballEl = q(".s-ball");
  const hole = q(".s-hole");
  const cloudEls = qa(".s-cloud");
  const think = q(".s-think");
  const cloudFace = q(".s-cloudface");
  const faceEls = Object.fromEntries(qa(".s-face").map((el) => [el.dataset.id, el]));
  const thinkBox = q(".s-think-box");
  const thinkText = q(".s-think-text");
  const say = q(".s-say");
  const sayBox = q(".s-say-box");
  const sayTail = q(".s-say-tail");
  const sayText = q(".s-say-text");
  const dim = q(".s-dim");
  const big = q(".s-big");
  const sparks = q(".s-sparks");
  const cap = q(".s-cap");

  /* ---------- Timeline: the state at the start and end of each beat ---------- */
  const ballOf = (b) => (b == null ? { hide: true } : typeof b === "string" ? { owner: b } : { x: b[0], y: b[1] });
  const SPOTS = { goal: [303, G - 8], goalL: [16, G - 8], over: [340, -14], wide: [338, G - 76] };
  const ballEnd = (to) => (Array.isArray(to) ? { x: to[0], y: to[1] } : SPOTS[to] ? { x: SPOTS[to][0], y: SPOTS[to][1] } : { owner: to });
  const init = {
    actors: Object.fromEntries(ids.map((id) => {
      const c = st.cast[id];
      return [id, { x: c.x, dir: c.dir || 1, pose: c.pose || "stand", lift: c.lift || 0, hide: !!c.hide }];
    })),
    ball: ballOf(st.ball),
    props: { ...(st.props || {}) },
    bg: st.bg || "pitch",
    think: null,
    cap: null,
    sparks: false,
    score: st.hud?.score || [0, 0],
  };
  const REWIND_CAP = ["⏪ Vamos de novo?", "⏪ Let's try again?", "⏪ ¿Otra vez?"];
  const next = (s, b) => {
    if (b.fx === "rewind") return { ...init, cap: b.cap || REWIND_CAP };
    const actors = Object.fromEntries(Object.entries(s.actors).map(([id, a]) => [id, a.pose === "kick" ? { ...a, pose: "stand" } : a]));
    Object.entries(b.a || {}).forEach(([id, m]) => {
      const a = actors[id];
      const moved = m.x != null && Math.abs(m.x - a.x) > 1;
      actors[id] = { x: m.x ?? a.x, dir: m.dir ?? a.dir, pose: m.pose ?? (moved ? "stand" : a.pose), lift: m.lift ?? a.lift, hide: m.hide ?? a.hide };
    });
    let ball = s.ball;
    if (b.ball) ball = b.ball.juggle ? { owner: b.ball.juggle, juggle: true } : b.ball.give ? { owner: b.ball.give } : ballEnd(b.ball.to);
    return {
      actors,
      ball,
      props: b.props ? { ...s.props, ...b.props } : s.props,
      bg: b.bg ?? s.bg,
      think: b.think !== undefined ? b.think : s.think,
      cap: b.cap ?? s.cap,
      sparks: b.sparks ?? s.sparks,
      score: b.score ?? s.score,
    };
  };
  const T = [];
  const starts = [];
  const ends = [];
  const bigs = [];
  let total = 0;
  let cur = init;
  st.beats.forEach((b) => {
    T.push(total);
    starts.push(cur);
    cur = next(cur, b);
    ends.push(cur);
    if (b.fx === "rewind") bigs.push({ at: total + 0.15, dur: b.d - 0.3, text: "⏪" });
    else if (b.big) bigs.push({ at: total + (b.bigAt || 0) * b.d, dur: b.bigFor || 1.4, text: b.big });
    total += b.d;
  });

  /* ---------- Drawing ---------- */
  const poseOf = (name, tt, k, ph) => {
    switch (name) {
      case "wave": return { pose: { ...P.stand, armF: [-150 - Math.sin(tt * 8) * 18, -15] } };
      case "cheer": {
        const up = Math.abs(Math.sin(tt * 5 + ph));
        return { pose: cqMixPose(P.stand, CQS_JUMP, up), lift: up * 12 };
      }
      case "kick": return { pose: k < 0.5 ? cqMixPose(P.ready, P.kickBack, k * 2) : cqMixPose(P.kickBack, P.kickHit, k * 2 - 1) };
      case "argue": {
        const s = Math.sin(tt * 9);
        return { pose: { ...P.stand, lean: -4, armF: [-80 - s * 40, -40], armB: [-60 + s * 40, -40] } };
      }
      case "juggle": return { pose: cqMixPose(P.stand, CQS_POSES.juggleUp, (1 - Math.abs(Math.sin(tt * 4))) ** 3) };
      default: return { pose: CQS_POSES[name] || P[name] || P.stand };
    }
  };

  const drawActor = (id, b, a0, a1, lt, tt, mode, ph) => {
    const m = b.a?.[id];
    const moves = Math.abs(a1.x - a0.x) > 1;
    let k;
    if (mode === "rewind") k = lt >= b.d / 2 ? 1 : 0;
    else if (mode === "cut") k = 1;
    else {
      const t0 = (m?.t0 || 0) * b.d;
      const dur = m?.t1 != null ? (m.t1 - (m.t0 || 0)) * b.d : moves || m?.hop || Math.abs(a1.lift - a0.lift) > 1 ? b.d - t0 : Math.min(0.3, b.d);
      k = cqClamp01((lt - t0) / Math.max(0.01, dur));
    }
    const e = cqEase(k);
    const hide = k >= 0.5 ? a1.hide : a0.hide;
    actEls[id].style.display = hide ? "none" : "";
    const x = cqLerp(a0.x, a1.x, e);
    const dir = k > 0 ? a1.dir : a0.dir;
    let lift = cqLerp(a0.lift, a1.lift, e);
    let pose;
    if (m?.hop && k > 0 && k < 1) {
      lift += 4 * m.hop * k * (1 - k);
      pose = CQS_JUMP;
    } else if (moves && k > 0 && k < 1 && !m?.glide) pose = cqRunPose(x / 7);
    else {
      const p1 = poseOf(a1.pose, tt, m ? k : 1, ph);
      if (a0.pose === a1.pose || k >= 1 || moves) {
        pose = p1.pose;
        lift += p1.lift || 0;
      } else {
        const p0 = poseOf(a0.pose, tt, 1, ph);
        pose = a1.pose === "kick" ? p1.pose : cqMixPose(p0.pose, p1.pose, e);
        lift += cqLerp(p0.lift || 0, p1.lift || 0, e);
      }
    }
    const shake = a1.pose === "pain" && k >= 1 ? Math.sin(tt * 40) * 0.7 : 0;
    rigs[id].pose(x + shake, dir, pose, lift);
    return { x, dir, lift, hide, pose: k >= 0.5 ? a1.pose : a0.pose };
  };

  const ballAt = (bs, pos, tt) => {
    if (!bs || bs.hide) return null;
    if (bs.owner) {
      const o = pos[bs.owner];
      if (bs.juggle) return { x: o.x + 10 * o.dir, y: G - 12 - Math.abs(Math.sin(tt * 4)) * 38 - o.lift };
      return { x: o.x + 12 * o.dir, y: G - 5 };
    }
    return { x: bs.x, y: bs.y };
  };

  let thinkShown = "";
  const setThink = (th, k, pos, tt) => {
    if (!th || k <= 0) return think.setAttribute("opacity", 0);
    const anchor = pos[th[2] || "me"];
    const text = txt(th[1]);
    if (thinkShown !== th[0] + text) {
      thinkShown = th[0] + text;
      crew.forEach((id) => faceEls[id].setAttribute("opacity", id === th[0] ? 1 : 0));
      const lines = cqWrap(text, 18).slice(0, 3);
      thinkText.innerHTML = lines.map((l, i) => `<tspan x="0" dy="${i ? 10.5 : 0}">${l}</tspan>`).join("");
      thinkBox.dataset.w = Math.max(...lines.map((l) => l.length)) * 5.1 + 14;
      thinkBox.dataset.h = lines.length * 10.5 + 8;
    }
    const w = +thinkBox.dataset.w;
    const h = +thinkBox.dataset.h;
    const cx = Math.max(32, Math.min(288, anchor.x - 6));
    const sx = cx + 30 + w <= 316 ? cx + 30 : cx - 30 - w;
    thinkBox.setAttribute("width", w);
    thinkBox.setAttribute("height", h);
    thinkBox.setAttribute("x", sx);
    thinkBox.setAttribute("y", 10);
    thinkText.setAttribute("transform", `translate(${sx + w / 2} 22)`);
    const s = 0.4 + 0.6 * cqEase(Math.min(1, k));
    cloudFace.setAttribute("transform", `translate(${cx} ${(30 + Math.sin(tt * 2.5) * 1.5).toFixed(1)}) scale(${s.toFixed(3)})`);
    const headY = Math.min(76, G - 92 - anchor.lift);
    const d1 = q(".s-dot1");
    const d2 = q(".s-dot2");
    d1.setAttribute("cx", cqLerp(anchor.x, cx, 0.3));
    d1.setAttribute("cy", Math.max(52, headY));
    d2.setAttribute("cx", cqLerp(anchor.x, cx, 0.65));
    d2.setAttribute("cy", Math.max(48, headY - 6));
    think.setAttribute("opacity", Math.min(1, k * 1.5));
  };

  let sayShown = "";
  const setSay = (sy, k, pos) => {
    if (!sy || k <= 0) return say.setAttribute("opacity", 0);
    const p = pos[sy[0]];
    const text = txt(sy[1]);
    if (sayShown !== text) {
      sayShown = text;
      sayText.textContent = text;
      sayBox.dataset.w = text.length * 7.2 + 16;
    }
    const w = +sayBox.dataset.w;
    const h = 22;
    let by = Math.max(4, G - 112 - p.lift - h);
    let bx = Math.max(4, Math.min(316 - w, p.x - w / 2 + 20));
    // Keep the bubble off the scoreboard (top-left, up to x 186).
    if (st.hud && by < 26 && bx < 190) {
      if (w <= 126) bx = 190;
      else by = 26;
    }
    sayBox.setAttribute("x", bx);
    sayBox.setAttribute("y", by);
    sayBox.setAttribute("width", w);
    sayBox.setAttribute("height", h);
    sayText.setAttribute("x", bx + w / 2);
    sayText.setAttribute("y", by + 15.5);
    const tx = Math.max(bx + 8, Math.min(bx + w - 8, p.x + 6));
    sayTail.setAttribute("d", `M${tx - 5} ${by + h - 1} L${tx + 5} ${by + h - 1} L${p.x + 4} ${G - 96 - p.lift} Z`);
    say.setAttribute("opacity", Math.min(1, k * 3));
  };

  let ended = false;
  let lastCap = null;
  const hudScore = q(".s-hud-score");
  const rainEl = q(".s-rain");
  return cqLoop((t) => {
    const tt = t + skip;
    if (!ended && tt >= total) {
      ended = true;
      opts.onEnd?.();
    }
    let i = st.beats.length - 1;
    for (let j = 0; j < st.beats.length; j++) {
      if (tt < T[j] + st.beats[j].d) {
        i = j;
        break;
      }
    }
    const b = st.beats[i];
    const lt = Math.min(b.d, tt - T[i]);
    const u = lt / b.d;
    const s0 = starts[i];
    const s1 = ends[i];
    const mode = b.fx || "";
    const view = mode === "rewind" && u < 0.5 ? s0 : s1;

    bgEls.forEach((el) => { el.style.display = el.dataset.bg === view.bg ? "" : "none"; });
    propEls.forEach((el) => { el.style.display = view.props[el.dataset.p] ? "" : "none"; });

    const pos = {};
    ids.forEach((id, n) => { pos[id] = drawActor(id, b, s0.actors[id], s1.actors[id], lt, tt, mode, n * 1.3); });

    // Ball: flies during the beat's window, otherwise sits with its owner or where it stopped.
    let bp;
    const bb = b.ball;
    if (mode !== "rewind" && bb && bb.to != null) {
      const w0 = (bb.t0 || 0) * b.d;
      const w1 = (bb.t1 ?? 1) * b.d;
      const fu = cqClamp01((lt - w0) / Math.max(0.01, w1 - w0));
      const from = ballAt(s0.ball, pos, tt) || ballAt(s1.ball, pos, tt);
      const to = ballAt(s1.ball, pos, tt);
      const p = cqArc(from.x, from.y, to.x, to.y, bb.h || 0, fu);
      bp = { x: p.x, y: p.y, spin: fu * 720 };
    } else if (mode !== "rewind" && bb?.give && lt < (bb.t0 || 0) * b.d) bp = ballAt(s0.ball, pos, tt);
    else bp = ballAt(view.ball, pos, tt);
    ballEl.style.display = bp ? "" : "none";
    if (bp) ballEl.setAttribute("transform", `translate(${bp.x.toFixed(1)},${bp.y.toFixed(1)}) rotate(${(bp.spin ?? bp.x * 9).toFixed(0)})`);

    // Props that follow someone.
    const me = pos.me;
    if (view.props.zzz) {
      const lying = me.pose === "lie";
      dyn.zzz.setAttribute("x", lying ? me.x - 30 * me.dir : me.x + 10);
      dyn.zzz.setAttribute("y", (lying ? G - 40 - me.lift : G - 100 - me.lift) + Math.sin(tt * 2) * 3);
    }
    if (view.props.phone) dyn.phone.setAttribute("transform", `translate(${me.x + 16 * me.dir} ${G - 46 - me.lift})`);
    if (view.props.ice) {
      dyn.ice.setAttribute("x", me.x + 12 * me.dir);
      dyn.ice.setAttribute("y", G - 4 - me.lift);
    }
    if (view.props.bird) {
      dyn.bird.setAttribute("x", (340 - ((tt * 55) % 400)).toFixed(1));
      dyn.bird.setAttribute("y", (64 + Math.sin(tt * 3) * 6).toFixed(1));
    }
    if (view.props.card && pos.ref) {
      dyn.card.setAttribute("x", (pos.ref.x - 2 + 3 * pos.ref.dir).toFixed(1));
      dyn.card.setAttribute("y", (G - 100 - pos.ref.lift).toFixed(1));
    }
    if (view.props.breathe) {
      dyn.breathe.setAttribute("cx", me.x);
      dyn.breathe.setAttribute("cy", G - 50 - me.lift);
      dyn.breathe.setAttribute("r", (34 + Math.sin(tt * 1.8) * 9).toFixed(1));
    }
    if (view.props.icon) {
      const [emo, x, y] = view.props.icon;
      const who = pos[x];
      dyn.icon.textContent = emo;
      dyn.icon.setAttribute("x", who ? who.x : x);
      dyn.icon.setAttribute("y", (who ? G - 104 - who.lift + Math.sin(tt * 3) * 2 : y).toFixed(1));
    }
    if (view.props.rain) rainEl.setAttribute("transform", `translate(0 ${((tt * 220) % 180).toFixed(1)})`);
    if (hudScore) hudScore.textContent = view.score.join(" x ");
    if (view.props.spot) {
      const c = bp || me;
      hole.setAttribute("cx", c.x);
      hole.setAttribute("cy", c.y ?? G - 5);
    }

    // Thought clouds fly in one by one, stay put in the sky and fade out together at the end of the beat.
    // Each cloud is as wide as its text; side by side when they fit, staggered in steps when they don't.
    const clouds = mode === "rewind" ? [] : (b.clouds || []).map(txt);
    const cw = clouds.map((s) => Math.max(84, s.length * 5.4 + 20));
    let acc = 0;
    const cx = cw.map((w) => {
      const c = acc + w / 2;
      acc += w + 6;
      return c;
    });
    const span = acc - 6;
    const tight = span > 312;
    const first = cw[0] / 2;
    const last = cw[cw.length - 1] / 2;
    cloudEls.forEach((el, j) => {
      const enter = 0.15 + j * 0.9;
      if (j >= clouds.length || lt < enter) return el.setAttribute("opacity", 0);
      const cu = cqClamp01((lt - enter) / 0.6);
      const rest = tight ? 4 + first + (cx[j] - first) * ((312 - first - last) / (span - first - last)) : 160 - span / 2 + cx[j];
      const x = cqLerp(370, rest, cqEase(cu));
      const y = (st.hud ? 44 : 24) + (tight ? (j % 2) * 26 : 0) + Math.sin(tt * 2 + j) * 1.5;
      el.firstElementChild.setAttribute("transform", `scale(${(cw[j] / 84).toFixed(3)} 1)`);
      el.querySelector("text").textContent = clouds[j];
      el.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
      el.setAttribute("opacity", Math.min(1, cu * 3, cqClamp01((b.d - lt) / 0.35)));
    });

    // Thought bubble: pops in when the one in charge changes, fades out when it goes away.
    const th0 = s0.think;
    const th1 = mode === "rewind" ? null : s1.think;
    if (th1 && th1 === th0) setThink(th1, 1, pos, tt);
    else if (th1) setThink(th1, cqClamp01(lt / 0.45), pos, tt);
    else setThink(th0, 1 - cqClamp01(lt / 0.35), pos, tt);
    setSay(mode === "rewind" ? null : b.say, cqClamp01((lt - 0.05) / 0.2), pos);

    dim.setAttribute("opacity", mode === "rewind" ? (0.85 * Math.sin(Math.PI * u)).toFixed(2) : 0);
    sparks.setAttribute("opacity", view.sparks ? (0.6 + 0.4 * Math.sin(tt * 6)).toFixed(2) : 0);
    const ev = bigs.filter((e) => tt >= e.at && tt < e.at + e.dur).pop();
    if (ev) {
      const pop = cqClamp01((tt - ev.at) / 0.3);
      big.textContent = txt(ev.text);
      big.setAttribute("opacity", Math.min(1, (ev.at + ev.dur - tt) / 0.25).toFixed(2));
      big.setAttribute("transform", `translate(160 72) scale(${(0.6 + 0.4 * pop).toFixed(2)}) translate(-160 -72)`);
    } else big.setAttribute("opacity", 0);

    const capText = txt(view.cap);
    if (capText !== lastCap) cap.textContent = lastCap = capText;
  });
});
