/* ============================================================
   Craque Inteligente — base das animações das missões.
   Aqui ficam o jogador padrão, as poses e o cenário.
   Cada missão tem seu próprio arquivo em js/animacoes/<id>.js,
   baixado só quando a criança clica em "Ver animação".
   Para criar uma animação nova:
     1. crie js/animacoes/<id>.js chamando cqRegisterAnim("<id>", ...);
     2. marque a missão com anim: true em js/missoes-data.js.
   ============================================================ */

const CQ_ANIMS = {};
const CQ_ANIM_LOADING = {};

const CQ_GROUND = 140;
const CQ_KIT = {
  shirt: "#facc15",
  trim: "#16a34a",
  shorts: "#1d4ed8",
  socks: "#f8fafc",
  boots: "#111827",
  skin: "#c68642",
  hair: "#1f1610",
};

function cqRegisterAnim(id, scene) {
  CQ_ANIMS[id] = scene;
}

function cqLoadAnim(id) {
  if (CQ_ANIMS[id]) return Promise.resolve(CQ_ANIMS[id]);
  if (!CQ_ANIM_LOADING[id]) {
    CQ_ANIM_LOADING[id] = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `js/animacoes/${id}.js`;
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

/* ---------- Cenário ---------- */

function cqSceneSvg(label, inner) {
  return `
    <svg class="cq-anim-svg" viewBox="0 0 320 170" role="img" aria-label="${label}">
      <rect x="0" y="${CQ_GROUND}" width="320" height="30" fill="#166534" />
      <line x1="0" y1="${CQ_GROUND}" x2="320" y2="${CQ_GROUND}" stroke="#22c55e" stroke-width="2" />
      ${inner}
    </svg>`;
}

function cqConeSvg(x, h = 16) {
  const w = h * 0.55;
  return `
    <path class="a-cone" d="M${x - w} ${CQ_GROUND} L${x - 2} ${CQ_GROUND - h} L${x + 2} ${CQ_GROUND - h} L${x + w} ${CQ_GROUND} Z" fill="#fb923c" />
    <path d="M${x - w * 0.62} ${CQ_GROUND - h * 0.38} L${x + w * 0.62} ${CQ_GROUND - h * 0.38}" stroke="#f8fafc" stroke-width="${h * 0.12}" />
    <rect x="${x - w - 3}" y="${CQ_GROUND - 2}" width="${2 * w + 6}" height="3" rx="1" fill="#ea580c" />`;
}

// Replays a CSS flash on an SVG element (used to highlight lines, cones, targets).
function cqFlash(el) {
  el.classList.remove("is-hit");
  void el.getBBox();
  el.classList.add("is-hit");
}

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

/* ---------- Jogador ---------- */

// Drawn around the hip; legs measure 35 so a standing hip sits at CQ_GROUND - 35.
function cqPlayerSvg() {
  const k = CQ_KIT;
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
        <circle cx="0" cy="13" r="3.4" fill="${k.skin}" />
      </g>
    </g>`;
  return `
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
    </g>`;
}

function cqPlayerRig(svg) {
  const q = (s) => svg.querySelector(s);
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
  rig.pose = (x, dir, ps) => {
    rig.fig.setAttribute("transform", `translate(${x},${ps.hipY}) scale(${dir},1)`);
    rig.torso.setAttribute("transform", `rotate(${ps.lean})`);
    set(rig.legF, ps.legF);
    set(rig.legB, ps.legB);
    set(rig.armF, ps.armF);
    set(rig.armB, ps.armB);
  };
  return rig;
}

/* ---------- Poses ----------
   Angles are in degrees. Negative = towards where the player faces.
   Each limb is [upper, lower]: thigh+shin or arm+forearm. */

const CQ_POSE_STAND = {
  hipY: CQ_GROUND - 35,
  lean: 0,
  legF: [-4, 4],
  legB: [4, 4],
  armF: [-6, -10],
  armB: [6, -10],
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

const cqEase = (u) => (u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2);
