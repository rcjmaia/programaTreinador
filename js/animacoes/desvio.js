/* Desvio duplo: dois campinhos, uma bola em cada um e obstáculos subindo.
   Um dedo toca cada lado para a bola trocar de coluna; cada obstáculo que passa soma 1.
   No fim uma batida zera a sequência, mas o recorde fica. */

cqRegisterAnim("desvio", (box, opts) => {
  const TOP = 40;
  const H = 126;
  const BALL_Y = 62;
  const SPEED = 74;
  const LOOP = 8.6;
  const lanes = [
    { x: 20, cols: [52, 118], start: 0, obs: [{ tp: 1.4, col: 0 }, { tp: 2.7, col: 0 }, { tp: 3.9, col: 1 }, { tp: 5.3, col: 0 }] },
    { x: 170, cols: [202, 268], start: 1, obs: [{ tp: 2.0, col: 1 }, { tp: 3.3, col: 1 }, { tp: 4.6, col: 0 }, { tp: 6.2, col: 1, crash: true }] },
  ];
  // Taps happen a moment before an obstacle reaches the ball's column (never before the crash).
  lanes.forEach((lane) => {
    let col = lane.start;
    lane.taps = [];
    lane.obs.forEach((o) => {
      if (!o.crash && o.col === col) {
        lane.taps.push(o.tp - 0.6);
        col = 1 - col;
      }
    });
  });
  const events = lanes.flatMap((lane, li) => lane.obs.map((o) => ({ ...o, li }))).sort((a, b) => a.tp - b.tp);
  const crashAt = events.find((e) => e.crash).tp;

  const cone = `<path d="M20 3 L32 34 H8 Z" fill="#f97316"/><path d="M14.5 19 H25.5 L27.5 25 H12.5 Z" fill="#fff"/><rect x="5" y="33" width="30" height="4" rx="2" fill="#c2410c"/>`;

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 ${CQ_W} 170" role="img" aria-label="${opts.label}">
      <defs>
        <pattern id="dg-grass" width="10" height="34" patternUnits="userSpaceOnUse"><rect width="10" height="17" fill="#15803d"/><rect y="17" width="10" height="17" fill="#166534"/></pattern>
        ${lanes.map((l, i) => `<clipPath id="dg-clip${i}"><rect x="${l.x}" y="${TOP}" width="130" height="${H}" rx="8"/></clipPath>`).join("")}
      </defs>
      ${lanes.map((l, i) => `
        <g clip-path="url(#dg-clip${i})">
          <rect x="${l.x}" y="${TOP}" width="130" height="${H}" fill="url(#dg-grass)"/>
          <rect class="dg-flash" x="${l.x}" y="${TOP}" width="130" height="${H}" fill="#ef4444" opacity="0"/>
          ${l.obs.map((o, j) => `<g class="dg-obs">${cone}</g>`).join("")}
          <g class="dg-ball">${cqBallSvg(11)}</g>
          <circle class="dg-ring" cx="${l.x + 65}" cy="${TOP + H - 26}" r="10" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"/>
          <text class="dg-finger" x="${l.x + 65}" y="${TOP + H - 18}" text-anchor="middle" font-size="22" opacity="0">👆</text>
        </g>
        <rect x="${l.x}" y="${TOP}" width="130" height="${H}" rx="8" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>`).join("")}
      <text x="160" y="26" text-anchor="middle" class="a-count dg-count"></text>
      <text class="dg-crash" x="235" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" opacity="0">${opts.pick(["💥 Bateu! Zerou", "💥 Crash! Back to 0", "💥 ¡Chocaste! A cero"])}</text>
      <text class="dg-keep" x="235" y="136" text-anchor="middle" font-size="11" fill="#fde047" opacity="0">${opts.pick(["mas o recorde 🏆 fica!", "but your record 🏆 stays!", "¡pero tu récord 🏆 queda!"])}</text>
    </svg>`;

  const svg = box.querySelector("svg");
  const pattern = svg.querySelector("#dg-grass");
  const countEl = svg.querySelector(".dg-count");
  const crashEl = svg.querySelector(".dg-crash");
  const keepEl = svg.querySelector(".dg-keep");
  const groups = [...svg.querySelectorAll("g[clip-path]")];
  lanes.forEach((lane, i) => {
    const g = groups[i];
    lane.ballEl = g.querySelector(".dg-ball");
    lane.obsEls = [...g.querySelectorAll(".dg-obs")];
    lane.ring = g.querySelector(".dg-ring");
    lane.finger = g.querySelector(".dg-finger");
    lane.flash = g.querySelector(".dg-flash");
  });
  let lastText = "";

  return cqLoop((seconds) => {
    const t = seconds % LOOP;
    pattern.setAttribute("patternTransform", `translate(0,${(-(t * SPEED) % 34).toFixed(1)})`);

    lanes.forEach((lane) => {
      // Ball column: flips at each tap, sliding across in 0.15 s.
      let col = lane.start;
      let from = lane.start;
      let since = 99;
      lane.taps.forEach((tt) => {
        if (t >= tt) {
          from = col;
          col = 1 - col;
          since = t - tt;
        }
      });
      const bx = cqLerp(lane.cols[from], lane.cols[col], cqClamp01(since / 0.15));
      lane.ballEl.setAttribute("transform", `translate(${bx.toFixed(1)},${BALL_Y})`);

      lane.obs.forEach((o, j) => {
        const el = lane.obsEls[j];
        const y = BALL_Y + (o.tp - t) * SPEED;
        const hit = o.crash && t >= o.tp;
        el.setAttribute("opacity", hit ? Math.max(0, 1 - (t - o.tp) * 3).toFixed(2) : 1);
        const s = hit ? 0.75 * (1 + (t - o.tp) * 1.5) : 0.75;
        el.setAttribute("transform", `translate(${lane.cols[o.col] - 20 * s},${(hit ? BALL_Y : y) - 20 * s}) scale(${s})`);
      });

      const tap = lane.taps.map((tt) => t - tt).filter((d) => d >= 0 && d < 0.45)[0];
      lane.finger.setAttribute("opacity", tap != null ? 1 : 0);
      lane.ring.setAttribute("opacity", tap != null ? (1 - tap / 0.45).toFixed(2) : 0);
      lane.ring.setAttribute("r", tap != null ? (8 + tap * 40).toFixed(1) : 8);

      const crash = lane.obs.find((o) => o.crash);
      const d = crash ? t - crash.tp : -1;
      lane.flash.setAttribute("opacity", d >= 0 && d < 0.5 ? (0.55 * (1 - d / 0.5)).toFixed(2) : 0);
    });

    let streak = 0;
    let best = 0;
    events.forEach((e) => {
      if (t < e.tp) return;
      streak = e.crash ? 0 : streak + 1;
      best = Math.max(best, streak);
    });
    const text = `${opts.unit}: ${streak} · 🏆 ${best}`;
    if (text !== lastText) {
      lastText = text;
      countEl.textContent = text;
    }
    crashEl.setAttribute("opacity", t >= crashAt ? 1 : 0);
    keepEl.setAttribute("opacity", t >= crashAt + 0.8 ? 1 : 0);
  });
});
