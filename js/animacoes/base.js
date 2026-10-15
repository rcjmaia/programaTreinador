/* ============================================================
   Craque de Bola — base das animações das missões.
   Aqui ficam os jogadores, as poses, os objetos e o cenário.
   Cada missão tem seu próprio arquivo em js/animacoes/<id>.js,
   baixado só quando a criança clica em "Ver animação".
   Para criar uma animação nova:
     1. crie js/animacoes/<id>.js chamando cqRegisterAnim("<id>", ...);
     2. marque a missão com anim: true em js/missoes-data.js.
   Cada cena recebe (box, opts) e devolve uma função que para a animação.
   opts: unit, steps, label e pick([pt, en, es]) para textos.
   ============================================================ */

const CQ_ANIMS = {};
const CQ_ANIM_LOADING = {};

const CQ_GROUND = 140;
const CQ_W = 320;
const CQ_KIT = {
  shirt: "#facc15",
  trim: "#16a34a",
  shorts: "#1d4ed8",
  socks: "#f8fafc",
  boots: "#111827",
  skin: "#c68642",
  hair: "#1f1610",
};
const CQ_KIT_GK = {
  shirt: "#f97316",
  trim: "#7c2d12",
  shorts: "#111827",
  socks: "#f97316",
  boots: "#111827",
  skin: "#c68642",
  hair: "#1f1610",
  gloves: "#a3e635",
};
// Family member who helps in some missions.
const CQ_KIT_HELPER = {
  shirt: "#94a3b8",
  trim: "#475569",
  shorts: "#334155",
  socks: "#334155",
  boots: "#f8fafc",
  skin: "#e0ac69",
  hair: "#6b4226",
};
// The kid's own colours (shirt, skin, hair from the card) on the story hero, plus a teammate that looks different.
function cqMeKits(me = {}) {
  const shirt = me.shirt || CQ_KIT.shirt;
  const dark = ["#111827", "#2563eb", "#1d4ed8"].includes(shirt);
  const kit = { ...CQ_KIT, shirt, skin: me.skin || CQ_KIT.skin, hair: me.hair || CQ_KIT.hair, shorts: dark ? "#f8fafc" : "#111827" };
  const light = ["#f6d3b3", "#d9a273", "#f1c27d"].includes(kit.skin);
  return { me: kit, mate: { ...kit, skin: light ? "#8d5524" : "#f1c27d", hair: light ? "#1f1610" : "#6b3e1f" } };
}

function cqRegisterAnim(id, scene) {
  CQ_ANIMS[id] = scene;
}

// Animation files load with the same ?v= as this file, so a new release never mixes in a cached old scene.
const CQ_ANIM_V = (document.currentScript?.src.match(/\?v=[^&]+/) || [""])[0];

function cqLoadAnim(id) {
  if (CQ_ANIMS[id]) return Promise.resolve(CQ_ANIMS[id]);
  if (!CQ_ANIM_LOADING[id]) {
    CQ_ANIM_LOADING[id] = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `js/animacoes/${id}.js${CQ_ANIM_V}`;
      s.onload = () => (CQ_ANIMS[id] ? resolve(CQ_ANIMS[id]) : reject(new Error(`anim ${id} not registered`)));
      s.onerror = () => {
        delete CQ_ANIM_LOADING[id];
        reject(new Error(`anim ${id} failed to load`));
      };
      document.head.appendChild(s);
    });
  }
  return CQ_ANIM_LOADING[id];
}

/* ---------- Tempo ---------- */

// Calls draw(seconds) every frame and returns a function that stops the loop.
function cqLoop(draw) {
  const start = performance.now();
  let frame = 0;
  const tick = (now) => {
    draw((now - start) / 1000);
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

const cqEase = (u) => (u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2);
const cqLerp = (a, b, k) => a + (b - a) * k;
const cqClamp01 = (u) => Math.max(0, Math.min(1, u));

// Sequence of segments [{ dur, ... }] played in a loop, with `pad` seconds of rest at the end.
// at(seconds) returns the current segment, its progress u (0..1) and the loop time t.
function cqTimeline(segs, pad = 0) {
  let total = 0;
  for (const s of segs) {
    s.start = total;
    total += s.dur;
  }
  total += pad;
  return {
    total,
    at(seconds) {
      const t = seconds % total;
      const seg = segs.find((s) => t < s.start + s.dur) || segs[segs.length - 1];
      return { seg, u: cqClamp01((t - seg.start) / seg.dur), t, round: Math.floor(seconds / total) };
    },
  };
}

// Position along a jump/shot arc from (x0,y0) to (x1,y1) peaking h above the straight line.
function cqArc(x0, y0, x1, y1, h, u) {
  return { x: cqLerp(x0, x1, u), y: cqLerp(y0, y1, u) - 4 * h * u * (1 - u) };
}

/* ---------- Cenário ---------- */

function cqSceneSvg(label, inner) {
  return `
    <svg class="cq-anim-svg" viewBox="0 0 ${CQ_W} 170" role="img" aria-label="${label}">
      <rect x="0" y="${CQ_GROUND}" width="${CQ_W}" height="30" fill="#166534" />
      <line x1="0" y1="${CQ_GROUND}" x2="${CQ_W}" y2="${CQ_GROUND}" stroke="#22c55e" stroke-width="2" />
      ${inner}
    </svg>`;
}

// Bird's-eye scene: the whole box is grass.
function cqTopSceneSvg(label, inner) {
  return `
    <svg class="cq-anim-svg" viewBox="0 0 ${CQ_W} 170" role="img" aria-label="${label}">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      ${inner}
    </svg>`;
}

const cqCountSvg = (unit) => `<text x="160" y="30" text-anchor="middle" class="a-count">${unit}: 0</text>`;
const cqNoteSvg = (x, y, text) => `<text x="${x}" y="${y}" text-anchor="middle" class="a-note">${text}</text>`;

function cqConeSvg(x, h = 16) {
  const w = h * 0.55;
  return `
    <path class="a-cone" d="M${x - w} ${CQ_GROUND} L${x - 2} ${CQ_GROUND - h} L${x + 2} ${CQ_GROUND - h} L${x + w} ${CQ_GROUND} Z" fill="#fb923c" />
    <path d="M${x - w * 0.62} ${CQ_GROUND - h * 0.38} L${x + w * 0.62} ${CQ_GROUND - h * 0.38}" stroke="#f8fafc" stroke-width="${h * 0.12}" />
    <rect x="${x - w - 3}" y="${CQ_GROUND - 2}" width="${2 * w + 6}" height="3" rx="1" fill="#ea580c" />`;
}

function cqFlipflopSvg(x, color = "#ef4444", y = CQ_GROUND - 2) {
  return `
    <g transform="translate(${x},${y})">
      <rect x="-7" y="-1.5" width="14" height="3.5" rx="1.7" fill="${color}" />
      <path d="M-3 -1.5 Q0 -6 3 -1.5" stroke="#f8fafc" stroke-width="1.3" fill="none" />
    </g>`;
}

// Side view of a goal; the opening faces left.
function cqGoalSvg(x, w = 34, h = 46) {
  const top = CQ_GROUND - h;
  const net = Array.from({ length: 5 }, (_, i) => {
    const yy = top + (h / 5) * (i + 1);
    return `<line x1="${x}" y1="${yy}" x2="${x + w}" y2="${yy}" stroke="rgba(255,255,255,0.25)" stroke-width="0.8" />`;
  }).join("");
  return `
    <g class="a-goal">
      <path d="M${x} ${top} L${x + w} ${top + 10} L${x + w} ${CQ_GROUND}" stroke="rgba(255,255,255,0.45)" stroke-width="1.2" fill="rgba(255,255,255,0.06)" />
      ${net}
      <line x1="${x}" y1="${top}" x2="${x}" y2="${CQ_GROUND}" stroke="#f8fafc" stroke-width="3.5" />
      <line x1="${x - 2}" y1="${top}" x2="${x + 6}" y2="${top}" stroke="#f8fafc" stroke-width="3.5" />
    </g>`;
}

// Wall on the right side of the scene.
function cqWallSvg(x) {
  const bricks = [];
  for (let row = 0; row < 12; row++) {
    const yy = CQ_GROUND - (row + 1) * 10;
    const off = row % 2 ? 6 : 0;
    bricks.push(`<line x1="${x}" y1="${yy}" x2="${CQ_W}" y2="${yy}" stroke="#7c2d12" stroke-width="1" />`);
    for (let bx = x + off; bx < CQ_W; bx += 14) bricks.push(`<line x1="${bx}" y1="${yy}" x2="${bx}" y2="${yy + 10}" stroke="#7c2d12" stroke-width="1" />`);
  }
  return `
    <g class="a-wall">
      <rect x="${x}" y="${CQ_GROUND - 120}" width="${CQ_W - x}" height="120" fill="#b45309" />
      ${bricks.join("")}
    </g>`;
}

function cqBucketSvg(x) {
  return `
    <g class="a-bucket">
      <path d="M${x - 10} ${CQ_GROUND - 20} L${x + 10} ${CQ_GROUND - 20} L${x + 7} ${CQ_GROUND} L${x - 7} ${CQ_GROUND} Z" fill="#2563eb" />
      <ellipse cx="${x}" cy="${CQ_GROUND - 20}" rx="10" ry="2.5" fill="#1e3a8a" />
      <path d="M${x - 9} ${CQ_GROUND - 20} Q${x} ${CQ_GROUND - 34} ${x + 9} ${CQ_GROUND - 20}" stroke="#94a3b8" stroke-width="1.2" fill="none" />
    </g>`;
}

function cqChairSvg(x) {
  return `
    <g class="a-chair" stroke="#78350f" stroke-width="3" stroke-linecap="round">
      <line x1="${x - 8}" y1="${CQ_GROUND}" x2="${x - 8}" y2="${CQ_GROUND - 18}" />
      <line x1="${x + 8}" y1="${CQ_GROUND}" x2="${x + 8}" y2="${CQ_GROUND - 18}" />
      <line x1="${x - 10}" y1="${CQ_GROUND - 18}" x2="${x + 10}" y2="${CQ_GROUND - 18}" />
      <line x1="${x + 8}" y1="${CQ_GROUND - 18}" x2="${x + 8}" y2="${CQ_GROUND - 40}" />
    </g>`;
}

// Ball centred on (0,0); move it with transform="translate(x,y) rotate(spin)".
function cqBallSvg(r = 6) {
  return `
    <g class="a-ball">
      <circle r="${r}" fill="#f8fafc" stroke="#111827" stroke-width="0.8" />
      <path d="M0 ${-r * 0.42} L${r * 0.4} ${-r * 0.13} L${r * 0.25} ${r * 0.34} L${-r * 0.25} ${r * 0.34} L${-r * 0.4} ${-r * 0.13} Z" fill="#111827" />
      <path d="M0 ${-r * 0.42} L0 ${-r} M${r * 0.4} ${-r * 0.13} L${r * 0.95} ${-r * 0.3} M${r * 0.25} ${r * 0.34} L${r * 0.58} ${r * 0.8} M${-r * 0.25} ${r * 0.34} L${-r * 0.58} ${r * 0.8} M${-r * 0.4} ${-r * 0.13} L${-r * 0.95} ${-r * 0.3}" stroke="#111827" stroke-width="0.7" />
    </g>`;
}

// Wraps a ball in a movable group and returns a setter: set(x, y, spinDeg).
function cqMovableBall(svg, cls = "a-ball-pos") {
  const el = svg.querySelector(`.${cls}`);
  return (x, y = CQ_GROUND - 6, spin = x * 9.5) => {
    el.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);
  };
}

// Replays a CSS flash on an SVG element (used to highlight lines, cones, targets).
function cqFlash(el) {
  if (!el) return;
  el.classList.remove("is-hit");
  void el.getBBox();
  el.classList.add("is-hit");
}

// Updates a counter only when the value changes, flashing the given element.
function cqCounter(svg, unit) {
  const el = svg.querySelector(".a-count");
  let last = null;
  return (n, flashEl) => {
    if (n === last) return;
    if (last !== null && n > last) cqFlash(flashEl);
    last = n;
    el.textContent = `${unit}: ${n}`;
  };
}

/* ---------- Jogador de lado ---------- */

// Drawn around the hip; legs measure 35 so a standing hip sits at CQ_GROUND - 35.
function cqPlayerSvg(kit = CQ_KIT) {
  const k = kit;
  const leg = (cls) => `
    <g class="${cls}">
      <line x1="0" y1="0" x2="0" y2="18" stroke="${k.skin}" stroke-width="7" stroke-linecap="round" />
      <line x1="0" y1="0" x2="0" y2="9" stroke="${k.shorts}" stroke-width="9" stroke-linecap="round" />
      <g class="a-shin">
        <line x1="0" y1="0" x2="0" y2="16" stroke="${k.skin}" stroke-width="6" stroke-linecap="round" />
        <line x1="0" y1="5" x2="0" y2="16" stroke="${k.socks}" stroke-width="6.5" stroke-linecap="round" />
        <path d="M-3 15 L7 15 Q9 19 6 20 L-3 20 Z" fill="${k.boots}" />
      </g>
    </g>`;
  const arm = (cls) => `
    <g class="${cls}">
      <line x1="0" y1="0" x2="0" y2="13" stroke="${k.skin}" stroke-width="5.5" stroke-linecap="round" />
      <line x1="0" y1="0" x2="0" y2="6" stroke="${k.shirt}" stroke-width="7" stroke-linecap="round" />
      <line x1="-3.5" y1="6" x2="3.5" y2="6" stroke="${k.trim}" stroke-width="1.5" />
      <g class="a-fore">
        <line x1="0" y1="0" x2="0" y2="12" stroke="${k.skin}" stroke-width="5" stroke-linecap="round" />
        <circle cx="0" cy="13" r="${k.gloves ? 4.2 : 3.4}" fill="${k.gloves || k.skin}" />
      </g>
    </g>`;
  return `
    <g class="a-player">
      <g class="a-fig">
        ${leg("a-leg-b")}
        <g class="a-torso">
          ${arm("a-arm-b")}
          <path d="M-7 2 L-7 -26 Q0 -32 7 -26 L7 2 Z" fill="${k.shirt}" />
          <path d="M-7 -6 L7 -6" stroke="${k.trim}" stroke-width="2" />
          <rect x="-2.5" y="-35" width="5" height="5" fill="${k.skin}" />
          <circle cx="0" cy="-42" r="8.5" fill="${k.skin}" />
          <path d="M-8.5 -43 Q-9 -52 0 -52 Q9 -52 8.5 -43 Q6 -47 0 -47 Q-6 -47 -8.5 -43 Z" fill="${k.hair}" />
          <circle cx="4.5" cy="-42" r="1.1" fill="${k.hair}" />
          ${arm("a-arm-f")}
        </g>
        ${leg("a-leg-f")}
      </g>
    </g>`;
}

// root can be the svg (first player) or a specific .a-player group.
function cqPlayerRig(root) {
  const q = (s) => root.querySelector(s);
  const limb = (sel, top, len) => ({ el: q(sel), sub: q(`${sel} > g`), top, len });
  const rig = {
    fig: q(".a-fig"),
    torso: q(".a-torso"),
    legF: limb(".a-leg-f", 0, 18),
    legB: limb(".a-leg-b", 0, 18),
    armF: limb(".a-arm-f", -26, 13),
    armB: limb(".a-arm-b", -26, 13),
  };
  const set = (l, [a, b]) => {
    l.el.setAttribute("transform", `translate(0,${l.top}) rotate(${a})`);
    l.sub.setAttribute("transform", `translate(0,${l.len}) rotate(${b})`);
  };
  rig.pose = (x, dir, ps, lift = 0) => {
    rig.fig.setAttribute("transform", `translate(${x},${ps.hipY - lift}) scale(${dir},1)`);
    rig.torso.setAttribute("transform", `rotate(${ps.lean})`);
    set(rig.legF, ps.legF);
    set(rig.legB, ps.legB);
    set(rig.armF, ps.armF);
    set(rig.armB, ps.armB);
  };
  return rig;
}

/* ---------- Poses de lado ----------
   Angles are in degrees. Negative = towards where the player faces.
   Each limb is [upper, lower]: thigh+shin or arm+forearm.
   legF is the near leg, which is also the kicking leg. */

const CQ_POSE = {
  stand: { hipY: CQ_GROUND - 35, lean: 0, legF: [-4, 4], legB: [4, 4], armF: [-6, -10], armB: [6, -10] },
  ready: { hipY: CQ_GROUND - 33, lean: 10, legF: [-14, 22], legB: [12, 20], armF: [-20, -40], armB: [20, -40] },
  kickBack: { hipY: CQ_GROUND - 34, lean: 2, legF: [35, 85], legB: [-6, 8], armF: [-45, -20], armB: [45, -20] },
  kickHit: { hipY: CQ_GROUND - 35, lean: -8, legF: [-62, -4], legB: [6, 6], armF: [35, -20], armB: [-55, -20] },
  crouch: { hipY: CQ_GROUND - 20, lean: 38, legF: [-58, 98], legB: [-48, 92], armF: [50, -10], armB: [50, -10] },
  air: { hipY: CQ_GROUND - 35, lean: 12, legF: [-55, 75], legB: [-40, 70], armF: [-150, -10], armB: [-140, -10] },
  land: { hipY: CQ_GROUND - 22, lean: 32, legF: [-62, 96], legB: [-52, 92], armF: [-80, -10], armB: [-70, -10] },
  header: { hipY: CQ_GROUND - 35, lean: 24, legF: [-10, 22], legB: [24, 30], armF: [-70, -30], armB: [60, -30] },
  slide: { hipY: CQ_GROUND - 7, lean: -62, legF: [-84, 2], legB: [-50, 100], armF: [-30, -20], armB: [80, 10] },
  shield: { hipY: CQ_GROUND - 31, lean: -4, legF: [-18, 28], legB: [22, 26], armF: [-35, -40], armB: [80, -5] },
  bend: { hipY: CQ_GROUND - 14, lean: 60, legF: [-75, 120], legB: [30, 60], armF: [-60, 0], armB: [60, -40] },
  squat: { hipY: CQ_GROUND - 21, lean: 30, legF: [-70, 100], legB: [-62, 96], armF: [-110, 0], armB: [-105, 0] },
  knee: { hipY: CQ_GROUND - 35, lean: 4, legF: [-90, 90], legB: [6, 6], armF: [40, -80], armB: [-45, -80] },
  chest: { hipY: CQ_GROUND - 34, lean: -20, legF: [-8, 16], legB: [14, 16], armF: [-60, -20], armB: [70, -20] },
  // Lying and floor poses: the torso turns by "lean" around the hip.
  plank: { hipY: CQ_GROUND - 16, lean: 90, legF: [78, 0], legB: [80, 0], armF: [-90, -90], armB: [-90, -90] },
  lieBack: { hipY: CQ_GROUND - 6, lean: -88, legF: [-143, 113], legB: [-140, 110], armF: [-30, -130], armB: [-30, -130] },
  sitUp: { hipY: CQ_GROUND - 6, lean: 18, legF: [-143, 113], legB: [-140, 110], armF: [-30, -130], armB: [-30, -130] },
  lunge: { hipY: CQ_GROUND - 24, lean: 0, legF: [-75, 75], legB: [20, 70], armF: [10, -20], armB: [-10, -20] },
};

function cqRunPose(s) {
  const a = Math.sin(s);
  return {
    hipY: CQ_GROUND - 35 - 3 * Math.abs(Math.cos(s)),
    lean: 14,
    legF: [-38 * a, 20 + 40 * Math.max(0, a)],
    legB: [38 * a, 20 + 40 * Math.max(0, -a)],
    armF: [45 * a, -80],
    armB: [-45 * a, -80],
  };
}

function cqMixPose(a, b, k) {
  const out = {};
  for (const key of Object.keys(a)) {
    out[key] = Array.isArray(a[key])
      ? a[key].map((v, i) => v + (b[key][i] - v) * k)
      : a[key] + (b[key] - a[key]) * k;
  }
  return out;
}

// Keyframes: [{ t, x, dir, pose, lift }]. Returns the eased state at time t.
function cqKeys(frames, t) {
  let i = 0;
  while (i < frames.length - 2 && t >= frames[i + 1].t) i++;
  const a = frames[i];
  const b = frames[i + 1] || a;
  const k = b === a ? 0 : cqEase(cqClamp01((t - a.t) / (b.t - a.t)));
  return {
    x: cqLerp(a.x, b.x ?? a.x, k),
    dir: a.dir ?? 1,
    lift: cqLerp(a.lift || 0, b.lift || 0, k),
    pose: cqMixPose(a.pose, b.pose, k),
  };
}

/* ---------- Cena de chute ----------
   Run-up, kick and ball flight, repeated. cfg:
     ballX       where the ball rests before the kick
     scenery     svg drawn behind the player (goal, chair...)
     flight(u)   ball position {x, y} for u from 0 to 1 after the kick
     flightT     seconds the ball takes to arrive
     flash       selector of the element that flashes when the ball arrives
   Optional:
     runUp       false = the player waits in place (ball coming to him)
     before(t)   ball position {x, y} before the kick (t from 0 to 1 s)
     note        extra svg drawn over the scenery (labels)
     helper      svg drawn behind the player; onFrame(svg, t) animates it */
function cqKickScene(box, opts, cfg) {
  const runT = 0.7;
  const hitAt = 1.0;
  const cycle = Math.max(hitAt + cfg.flightT + 0.7, 2.2);
  const contactX = cfg.ballX - 22;
  const startX = cfg.runUp === false ? contactX - 4 : contactX - 50;
  const frames = [
    { t: runT, x: contactX - 4, pose: CQ_POSE.ready },
    { t: 0.88, x: contactX - 2, pose: CQ_POSE.kickBack },
    { t: hitAt, x: contactX, pose: CQ_POSE.kickHit },
    { t: 1.35, x: contactX + 2, pose: CQ_POSE.kickHit },
    { t: 1.8, x: contactX + 2, pose: CQ_POSE.stand },
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cfg.scenery}
    ${cfg.note || ""}
    ${cfg.helper || ""}
    <g class="a-me">${cqPlayerSvg()}</g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg.querySelector(".a-me"));
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const flashEl = cfg.flash ? svg.querySelector(cfg.flash) : null;

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    if (t < runT && cfg.runUp !== false) {
      const x = cqLerp(startX, contactX - 4, t / runT);
      rig.pose(x, 1, cqMixPose(cqRunPose(x / 8), CQ_POSE.ready, cqClamp01((t - runT + 0.2) / 0.2)));
    } else if (t < runT) rig.pose(startX, 1, CQ_POSE.ready);
    else {
      const st = cqKeys(frames, t);
      rig.pose(st.x, 1, st.pose);
    }
    if (cfg.onFrame) cfg.onFrame(svg, t);
    if (t < hitAt) {
      const p = cfg.before ? cfg.before(t) : { x: cfg.ballX, y: CQ_GROUND - 6 };
      ball(p.x, p.y, p.x * 9.5);
    } else {
      const u = cqClamp01((t - hitAt) / cfg.flightT);
      const p = cfg.flight(u);
      ball(p.x, p.y, u * 720);
    }
    count((round % 9) + (t >= hitAt + cfg.flightT ? 1 : 0), flashEl);
  });
}

/* ---------- Jogador de frente ---------- */

function cqFrontPlayerSvg(kit = CQ_KIT) {
  const k = kit;
  const leg = (cls, x) => `
    <g class="${cls}" data-x="${x}">
      <line x1="0" y1="0" x2="0" y2="18" stroke="${k.skin}" stroke-width="7" stroke-linecap="round" />
      <line x1="0" y1="0" x2="0" y2="9" stroke="${k.shorts}" stroke-width="9" stroke-linecap="round" />
      <g>
        <line x1="0" y1="0" x2="0" y2="16" stroke="${k.skin}" stroke-width="6" stroke-linecap="round" />
        <line x1="0" y1="5" x2="0" y2="16" stroke="${k.socks}" stroke-width="6.5" stroke-linecap="round" />
        <ellipse cx="0" cy="18" rx="4.5" ry="2.8" fill="${k.boots}" />
      </g>
    </g>`;
  const arm = (cls) => `
    <g class="${cls}">
      <line x1="0" y1="0" x2="0" y2="13" stroke="${k.skin}" stroke-width="5.5" stroke-linecap="round" />
      <line x1="0" y1="0" x2="0" y2="6" stroke="${k.shirt}" stroke-width="7" stroke-linecap="round" />
      <g>
        <line x1="0" y1="0" x2="0" y2="12" stroke="${k.skin}" stroke-width="5" stroke-linecap="round" />
        <circle cx="0" cy="13" r="${k.gloves ? 4.2 : 3.4}" fill="${k.gloves || k.skin}" />
      </g>
    </g>`;
  return `
    <g class="a-front">
      ${leg("a-leg-l", -5)}
      ${leg("a-leg-r", 5)}
      <rect x="-10" y="-2" width="20" height="8" rx="3" fill="${k.shorts}" />
      <path d="M-11 -2 L-11 -24 Q0 -31 11 -24 L11 -2 Z" fill="${k.shirt}" />
      <path d="M-11 -6 L11 -6" stroke="${k.trim}" stroke-width="2" />
      ${arm("a-arm-l")}
      ${arm("a-arm-r")}
      <rect x="-2.5" y="-35" width="5" height="6" fill="${k.skin}" />
      <circle cx="0" cy="-42" r="8.5" fill="${k.skin}" />
      <path d="M-8.5 -43 Q-9 -53 0 -53 Q9 -53 8.5 -43 Q4 -48 0 -48 Q-4 -48 -8.5 -43 Z" fill="${k.hair}" />
      <circle cx="-3" cy="-42" r="1.1" fill="${k.hair}" />
      <circle cx="3" cy="-42" r="1.1" fill="${k.hair}" />
      <path d="M-2.5 -38 Q0 -36 2.5 -38" stroke="${k.hair}" stroke-width="0.9" fill="none" />
    </g>`;
}

// Front pose: { hipY, armL, armR, legL, legR } with limbs as [upper, lower].
// Positive angles open the limb outwards (away from the body).
function cqFrontRig(root) {
  const q = (s) => root.querySelector(s);
  const parts = {
    legL: { el: q(".a-leg-l"), x: -5, y: 0, len: 18, side: 1 },
    legR: { el: q(".a-leg-r"), x: 5, y: 0, len: 18, side: -1 },
    armL: { el: q(".a-arm-l"), x: -12, y: -24, len: 13, side: 1 },
    armR: { el: q(".a-arm-r"), x: 12, y: -24, len: 13, side: -1 },
  };
  const fig = q(".a-front");
  return {
    pose(x, ps, lift = 0) {
      fig.setAttribute("transform", `translate(${x},${ps.hipY - lift})`);
      for (const [key, p] of Object.entries(parts)) {
        const [a, b] = ps[key];
        p.el.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${a * p.side})`);
        p.el.querySelector(":scope > g").setAttribute("transform", `translate(0,${p.len}) rotate(${b * p.side})`);
      }
    },
  };
}

const CQ_FRONT = {
  stand: { hipY: CQ_GROUND - 35, armL: [8, 0], armR: [8, 0], legL: [2, 0], legR: [2, 0] },
  star: { hipY: CQ_GROUND - 33, armL: [160, 10], armR: [160, 10], legL: [22, 0], legR: [22, 0] },
};

/* ---------- Vista de cima ---------- */

function cqTopPlayerSvg(kit = CQ_KIT, cls = "a-top") {
  return `
    <g class="${cls}">
      <ellipse class="a-foot-l" cx="0" cy="-4" rx="4" ry="2.2" fill="${kit.boots}" />
      <ellipse class="a-foot-r" cx="0" cy="4" rx="4" ry="2.2" fill="${kit.boots}" />
      <ellipse cx="0" cy="0" rx="5" ry="11" fill="${kit.shirt}" />
      <circle cx="0" cy="-10" r="2.6" fill="${kit.skin}" />
      <circle cx="0" cy="10" r="2.6" fill="${kit.skin}" />
      <circle cx="0.5" cy="0" r="5.2" fill="${kit.hair}" />
    </g>`;
}

// Places a top-view player at (x,y) facing angle (degrees, 0 = right), feet swinging with stride.
function cqTopPlace(el, x, y, angle, stride = 0) {
  el.setAttribute("transform", `translate(${x},${y}) rotate(${angle})`);
  const s = Math.sin(stride) * 5;
  el.querySelector(".a-foot-l").setAttribute("cx", s);
  el.querySelector(".a-foot-r").setAttribute("cx", -s);
}

function cqTopConeSvg(x, y, r = 6) {
  return `
    <g class="a-mark">
      <circle class="a-cone" cx="${x}" cy="${y}" r="${r}" fill="#fb923c" />
      <circle cx="${x}" cy="${y}" r="${r * 0.45}" fill="#f8fafc" />
      <circle cx="${x}" cy="${y}" r="${r * 0.2}" fill="#fb923c" />
    </g>`;
}
