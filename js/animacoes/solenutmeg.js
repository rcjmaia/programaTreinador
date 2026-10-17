/* Caneta com a sola (vista de cima): parado, com a sola na bola, e o adversário vem meio de lado para roubar.
   Rola a bola um pouco para frente com a sola, o adversário estica a perna e abre as pernas para pegar,
   e na hora ele puxa a bola de lado com a mesma sola, por entre as pernas dele. Dá a volta e pega a bola.
   Zoom e câmera lenta no drible. Alterna o pé a cada repetição (a cena é espelhada). */

cqRegisterAnim("solenutmeg", (box, opts) => {
  const k = 1.4;
  const reach = 14;
  const zoom = 1.9;
  const focus = { x: 132, y: 88 };
  const start = { x: 112, y: 62 };
  const stepTo = { x: 118, y: 62 };
  const ballStart = { x: start.x + reach, y: start.y };
  const ballFwd = { x: 138, y: 62 };
  const pullCtrl = { x: 136, y: 86 };
  const ballOut = { x: 142, y: 112 };
  const ballStop = { x: 158, y: 136 };
  const pickHeading = 20;
  const pick = {
    x: ballStop.x - reach * Math.cos((pickHeading * Math.PI) / 180),
    y: ballStop.y - reach * Math.sin((pickHeading * Math.PI) / 180),
  };
  const aroundCtrl = { x: 62, y: 134 };
  const away = { x: 240, y: 136 };
  const defStart = { x: 205, y: 150 };
  const defSet = { x: 164, y: 108 };
  const defBite = { x: 147, y: 93 };
  const biteAngle = -100;
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };
  const line = cqTimeline([
    { kind: "wait", dur: 1.5 },
    { kind: "roll", dur: 0.6 },
    { kind: "bite", dur: 0.4 },
    { kind: "pull", dur: 0.55 },
    { kind: "go", dur: 0.9 },
    { kind: "away", dur: 0.7 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam"><g class="a-mirror">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <path class="a-path" d="M${ballFwd.x},${ballFwd.y} Q${pullCtrl.x},${pullCtrl.y} ${ballOut.x},${ballOut.y}" fill="none" stroke="#facc15" stroke-width="1" stroke-dasharray="3 2" opacity="0" />
      ${cqTopPlayerSvg(kitDef, "a-top a-def")}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g></g>
    <text x="8" y="20" class="a-note a-slow"></text>
    <text x="312" y="20" text-anchor="end" class="a-note a-leg"></text>
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const cam = svg.querySelector(".a-cam");
  const mirror = svg.querySelector(".a-mirror");
  const me = svg.querySelector(".a-me");
  const def = svg.querySelector(".a-def");
  const footL = me.querySelector(".a-foot-l");
  const ballEl = svg.querySelector(".a-ball-pos");
  const say = svg.querySelector(".a-say");
  const slow = svg.querySelector(".a-slow");
  const legLabel = svg.querySelector(".a-leg");
  const countEl = svg.querySelector(".a-count");
  const path = svg.querySelector(".a-path");
  const count = cqCounter(svg, opts.unit);

  // Legs from the hips to the feet, for both players: the defender's open legs are the gap for the nutmeg.
  const ns = "http://www.w3.org/2000/svg";
  const addLegs = (player, color) => {
    const legs = [player.querySelector(".a-foot-l"), player.querySelector(".a-foot-r")].map((f, i) => {
      const leg = document.createElementNS(ns, "line");
      leg.setAttribute("x1", 0);
      leg.setAttribute("y1", i ? 3 : -3);
      leg.setAttribute("stroke", color);
      leg.setAttribute("stroke-width", "2.6");
      leg.setAttribute("stroke-linecap", "round");
      return { leg, f };
    });
    player.prepend(...legs.map((l) => l.leg));
    return legs;
  };
  const legs = [...addLegs(me, CQ_KIT.socks), ...addLegs(def, kitDef.socks)];

  const texts = {
    wait: opts.pick(["sola na bola: o adversário vem de lado", "sole on the ball: the defender comes from the side", "suela en el balón: el rival viene de lado"]),
    roll: opts.pick(["rola um pouco para frente com a sola", "roll it forward a little with your sole", "rueda un poco hacia adelante con la suela"]),
    bite: opts.pick(["ele estica a perna e abre as pernas...", "they stretch a leg and open their legs...", "estira la pierna y abre las piernas..."]),
    pull: opts.pick(["puxa de lado com a sola: caneta!", "drag it sideways with your sole: nutmeg!", "tira de lado con la suela: ¡caño!"]),
    go: opts.pick(["dá a volta e pega a bola", "go round and get the ball", "da la vuelta y recoge el balón"]),
    away: opts.pick(["caneta!", "nutmeg!", "¡caño!"]),
  };
  const legTexts = [
    opts.pick(["pé esquerdo", "left foot", "pie izquierdo"]),
    opts.pick(["pé direito", "right foot", "pie derecho"]),
  ];
  const slowText = `🔍 ${opts.pick(["câmera lenta", "slow motion", "cámara lenta"])}`;

  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const place = (el, x, y, angle, stride = 0) => {
    el.setAttribute("transform", `translate(${x},${y}) rotate(${angle}) scale(${k})`);
    const s = Math.sin(stride) * 5;
    foot(el.querySelector(".a-foot-l"), s, -4);
    foot(el.querySelector(".a-foot-r"), -s, 4);
  };
  // The defender opens his legs wide (o = 0 to 1), the left one reaching for the ball.
  const openLegs = (o) => {
    foot(def.querySelector(".a-foot-l"), 10 * o, -4 - 6 * o);
    foot(def.querySelector(".a-foot-r"), -1 * o, 4 + 7 * o);
  };
  const ball = (x, y, spin) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);
  // World point to the player's own coordinates (x forward, y to his right).
  const toLocal = (px, py, angle, wx, wy) => {
    const a = (-angle * Math.PI) / 180;
    const dx = wx - px;
    const dy = wy - py;
    return [(dx * Math.cos(a) - dy * Math.sin(a)) / k, (dx * Math.sin(a) + dy * Math.cos(a)) / k];
  };
  // The sole sits on top of the ball: the foot is drawn right over it, a bit bigger.
  const soleOn = (px, py, angle, b) => {
    const [lx, ly] = toLocal(px, py, angle, b.x, b.y);
    foot(footL, lx - 1.5, ly, 1.3);
  };
  const quad = (p0, m, p1, e) => ({
    x: (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * m.x + e * e * p1.x,
    y: (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * m.y + e * e * p1.y,
  });
  const lerpPt = (a, b, e) => ({ x: cqLerp(a.x, b.x, e), y: cqLerp(a.y, b.y, e) });
  const faceTo = (from, to) => (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
  const camera = (z, flip) => {
    const p = (z - 1) / (zoom - 1);
    const focusY = flip ? 170 - focus.y : focus.y;
    const fx = Math.min(Math.max(cqLerp(160, focus.x, p), 160 / z), CQ_W - 160 / z);
    const fy = Math.min(Math.max(cqLerp(85, focusY, p), 85 / z), 170 - 85 / z);
    cam.setAttribute("transform", `translate(160,85) scale(${z}) translate(${-fx},${-fy})`);
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // Odd rounds mirror the scene top to bottom: the defender comes from the other side and the right foot does the move.
    const flip = round % 2 === 1;
    mirror.setAttribute("transform", flip ? "translate(0,170) scale(1,-1)" : "");
    let z = 1;
    // Through the legs, the ball goes under the defender's body.
    const under = seg.kind === "pull" || (seg.kind === "go" && u < 0.2);
    if (under !== (def.nextElementSibling === me)) (under ? me : ballEl).before(def);
    path.setAttribute("opacity", seg.kind === "pull" ? cqClamp01(u * 3) * 0.8 : seg.kind === "go" ? 0.8 * (1 - u) : 0);

    if (seg.kind === "wait") {
      z = cqLerp(1, zoom, cqEase(cqClamp01((u - 0.55) / 0.45)));
      place(me, start.x, start.y, 0);
      ball(ballStart.x, ballStart.y, 0);
      soleOn(start.x, start.y, 0, ballStart);
      const e = cqEase(cqClamp01(u / 0.85));
      const d = lerpPt(defStart, defSet, e);
      place(def, d.x, d.y, faceTo(d, ballStart), e * 8);
    } else if (seg.kind === "roll") {
      z = zoom;
      // The bait: the sole rolls the ball forward a little without leaving it.
      const e = cqEase(u);
      const p = lerpPt(start, stepTo, e);
      const b = lerpPt(ballStart, ballFwd, e);
      place(me, p.x, p.y, 0);
      ball(b.x, b.y, e * 90);
      soleOn(p.x, p.y, 0, b);
      // Seeing the ball come out, the defender goes for it.
      const g = cqEase(cqClamp01((u - 0.3) / 0.7));
      const d = lerpPt(defSet, defBite, g * 0.6);
      place(def, d.x, d.y, cqLerp(faceTo(defSet, ballStart), biteAngle, g));
      openLegs(g * 0.5);
    } else if (seg.kind === "bite") {
      z = zoom;
      place(me, stepTo.x, stepTo.y, 0);
      ball(ballFwd.x, ballFwd.y, 90);
      soleOn(stepTo.x, stepTo.y, 0, ballFwd);
      const g = cqEase(u);
      const d = lerpPt(defSet, defBite, 0.6 + 0.4 * g);
      place(def, d.x, d.y, biteAngle);
      openLegs(0.5 + 0.5 * g);
    } else if (seg.kind === "pull") {
      z = zoom;
      // Same sole, quicker than him: drags the ball sideways, through his open legs.
      const e = cqEase(u);
      const b = quad(ballFwd, pullCtrl, ballOut, cqClamp01(u * 1.1));
      ball(b.x, b.y, 90 + e * 360);
      const angle = cqLerp(0, 30, e);
      place(me, stepTo.x, stepTo.y, angle);
      if (u < 0.4) soleOn(stepTo.x, stepTo.y, angle, b);
      place(def, defBite.x, defBite.y, biteAngle);
      openLegs(1);
    } else if (seg.kind === "go") {
      z = cqLerp(zoom, 1, cqEase(cqClamp01(u / 0.7)));
      // Goes round him, on the other side, to pick the ball up behind him.
      const e = cqEase(u);
      const p = quad(stepTo, aroundCtrl, pick, e);
      const ahead = quad(stepTo, aroundCtrl, pick, Math.min(1, e + 0.05));
      place(me, p.x, p.y, u > 0.97 ? pickHeading : faceTo(p, ahead), p.x / 4 + p.y / 4);
      const b = lerpPt(ballOut, ballStop, cqEase(cqClamp01(u * 1.3)));
      ball(b.x, b.y, 450 + u * 120);
      place(def, defBite.x, defBite.y, cqLerp(biteAngle, -190, e));
      openLegs(1 - e);
    } else {
      const e = cqEase(u);
      const p = lerpPt(pick, away, e);
      place(me, p.x, p.y, cqLerp(pickHeading, 0, e), p.x / 4);
      ball(p.x + reach, p.y, 570 + p.x * 9);
      place(def, defBite.x, defBite.y, cqLerp(-190, -320, e));
    }

    camera(z, flip);
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
    }
    const text = texts[seg.kind];
    if (say.textContent !== text) say.textContent = text;
    const slowNow = z > 1.2 ? slowText : "";
    if (slow.textContent !== slowNow) slow.textContent = slowNow;
    countEl.setAttribute("opacity", z > 1.2 ? 0 : 1);
    const legNow = legTexts[flip ? 1 : 0];
    if (legLabel.textContent !== legNow) legLabel.textContent = legNow;
    count((round % 9) + (seg.kind === "away" && u >= 1 ? 1 : 0), ballEl);
  });
});
