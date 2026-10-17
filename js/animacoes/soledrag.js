/* Puxada de sola e arrancada na lateral (vista de cima): parado junto à linha lateral, já com a sola na bola, e o marcador vem
   de lado, de dentro do campo, para cima da bola. Puxa a bola para trás com a sola, jogando o corpo
   para trás junto, e o marcador avança para roubar. Sem tirar o pé da bola, rola ela de volta para frente,
   rente à linha, arranca, deixa o marcador para trás e chuta no gol a 7 passos.
   Zoom e câmera lenta no drible. Alterna o pé a cada repetição (a cena é espelhada). */

cqRegisterAnim("soledrag", (box, opts) => {
  const k = 1.4;
  const reach = 14;
  const lineY = 18;
  const runY = 42;
  const stopX = 118;
  const backX = 111;
  const goalX = 296;
  const goalY = 120;
  const zoom = 2.1;
  const focus = { x: 130, y: 54 };
  const ballStop = { x: stopX + reach, y: runY };
  const ballBack = { x: backX + 6, y: runY - 1 };
  const pushEnd = { x: 168, y: runY - 2 };
  const burst = { x: 134, y: runY };
  const heading = 12;
  const shot = { x: 198, y: 100 };
  const shooter = { x: shot.x - reach * Math.cos((heading * Math.PI) / 180), y: shot.y - reach * Math.sin((heading * Math.PI) / 180) };
  const goCtrl = { x: 196, y: 50 };
  const corner = { x: goalX + 3, y: goalY - 22 };
  const defStart = { x: 168, y: 120 };
  const defSet = { x: 140, y: 71 };
  const defBite = { x: 125, y: 65 };
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };
  const line = cqTimeline([
    { kind: "wait", dur: 1.6 },
    { kind: "pull", dur: 0.9 },
    { kind: "push", dur: 0.8 },
    { kind: "go", dur: 0.9 },
    { kind: "fly", dur: 0.55 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam"><g class="a-mirror">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <rect x="0" y="0" width="${CQ_W}" height="${lineY}" fill="#14532d" />
      <rect x="0" y="0" width="${CQ_W}" height="7" fill="#e2e8f0" />
      <line x1="0" y1="${lineY}" x2="${goalX}" y2="${lineY}" stroke="#f8fafc" stroke-width="1.5" />
      <line x1="${goalX}" y1="${lineY}" x2="${goalX}" y2="170" stroke="#f8fafc" stroke-width="1.5" />
      <rect x="${goalX}" y="${goalY - 30}" width="10" height="60" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
      <g class="a-hit">
        <rect x="${goalX + 1}" y="${goalY - 29}" width="8" height="12" fill="rgba(250, 204, 21, 0.35)" />
      </g>
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
  const goal = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const slow = svg.querySelector(".a-slow");
  const legLabel = svg.querySelector(".a-leg");
  const count = cqCounter(svg, opts.unit);

  const ns = "http://www.w3.org/2000/svg";
  const legs = [footL, me.querySelector(".a-foot-r")].map((f, i) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", i ? 3 : -3);
    leg.setAttribute("stroke", CQ_KIT.socks);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, f };
  });
  me.prepend(...legs.map((l) => l.leg));

  // Leaning: the feet stay put while the shirt, arms and head tip forward (l > 0) or back (l < 0),
  // with an arrow showing which way the body is selling.
  const upper = [
    [me.querySelector('ellipse[rx="5"]'), 0, 2.5],
    ...[...me.querySelectorAll('circle[r="2.6"]')].map((el) => [el, 0, 2.5]),
    [me.querySelector('circle[r="5.2"]'), 0.5, 4.5],
  ];
  const arrow = document.createElementNS(ns, "path");
  arrow.setAttribute("d", "M9,0 L16,0 M13,-3 L16,0 L13,3");
  arrow.setAttribute("fill", "none");
  arrow.setAttribute("stroke", "#f8fafc");
  arrow.setAttribute("stroke-width", "1.4");
  arrow.setAttribute("stroke-linecap", "round");
  me.append(arrow);
  const leanBody = (l) => {
    for (const [el, base, amount] of upper) el.setAttribute("cx", base + amount * l);
    arrow.setAttribute("transform", l < 0 ? `translate(${5 * l},0) scale(-1,1)` : `translate(${5 * l},0)`);
    arrow.setAttribute("opacity", (Math.abs(l) * 0.9).toFixed(2));
  };

  const texts = {
    wait: opts.pick(["parado, sola na bola: o marcador vem de lado", "standing, sole on the ball: the defender comes from the side", "quieto, suela en el balón: el marcador viene de lado"]),
    pull: opts.pick(["puxa para trás e o corpo vai junto", "drag it back, body going back too", "tira hacia atrás y el cuerpo va también"]),
    push: opts.pick(["sem tirar o pé: rola para frente", "foot stays on: roll it forward", "sin quitar el pie: rueda hacia adelante"]),
    go: opts.pick(["deixou o marcador para trás!", "left the defender behind!", "¡dejaste al marcador atrás!"]),
    fly: opts.pick(["chute no gol!", "shot on goal!", "¡tiro al arco!"]),
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
  const ball = (x, y, spin) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);
  // World point to the player's own coordinates (x forward, y to his right).
  const toLocal = (px, py, angle, wx, wy) => {
    const a = (-angle * Math.PI) / 180;
    const dx = wx - px;
    const dy = wy - py;
    return [(dx * Math.cos(a) - dy * Math.sin(a)) / k, (dx * Math.sin(a) + dy * Math.cos(a)) / k];
  };
  // The sole of the foot on the line side (away from the defender) sits on top of the ball.
  const soleOn = (px, py, angle, b) => {
    const [lx, ly] = toLocal(px, py, angle, b.x, b.y);
    foot(footL, lx - 1.5, ly, 1.3);
  };
  const quad = (p0, m, p1, e) => ({
    x: (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * m.x + e * e * p1.x,
    y: (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * m.y + e * e * p1.y,
  });
  const lerpPt = (a, b, e) => ({ x: cqLerp(a.x, b.x, e), y: cqLerp(a.y, b.y, e) });
  const camera = (z, flip) => {
    const p = (z - 1) / (zoom - 1);
    const focusX = flip ? CQ_W - focus.x : focus.x;
    const fx = Math.min(Math.max(cqLerp(160, focusX, p), 160 / z), CQ_W - 160 / z);
    const fy = Math.min(Math.max(cqLerp(85, focus.y, p), 85 / z), 170 - 85 / z);
    cam.setAttribute("transform", `translate(160,85) scale(${z}) translate(${-fx},${-fy})`);
  };
  const faceTo = (from, to) => (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // Odd rounds mirror the scene left to right: he faces the other way, the sideline is on his right and the right foot does the move.
    const flip = round % 2 === 1;
    mirror.setAttribute("transform", flip ? `translate(${CQ_W},0) scale(-1,1)` : "");
    let z = 1;
    leanBody(0);

    if (seg.kind === "wait") {
      // Standing still with the sole already on the ball while the defender closes in from inside the pitch, side-on.
      z = cqLerp(1, zoom, cqEase(cqClamp01((u - 0.55) / 0.45)));
      place(me, stopX, runY, 0);
      ball(ballStop.x, ballStop.y, 0);
      soleOn(stopX, runY, 0, ballStop);
      const e = cqEase(cqClamp01(u / 0.8));
      const d = lerpPt(defStart, defSet, e);
      place(def, d.x, d.y, faceTo(d, ballStop), e * 8);
    } else if (seg.kind === "pull") {
      z = zoom;
      // The ball comes back under the sole and the whole body goes back with it, as if retreating.
      const e = cqEase(u);
      const px = cqLerp(stopX, backX, e);
      place(me, px, runY, 0);
      leanBody(-Math.sin(Math.PI * Math.min(1, u * 1.15)) * 0.9 - 0.1 * e);
      const b = lerpPt(ballStop, ballBack, e);
      ball(b.x, b.y, -e * 120);
      soleOn(px, runY, 0, b);
      // Buying it, the defender goes in on the ball, following it back.
      const bite = cqEase(cqClamp01((u - 0.25) / 0.75));
      const d = lerpPt(defSet, defBite, bite);
      place(def, d.x, d.y, faceTo(d, b), bite * 4);
    } else if (seg.kind === "push") {
      z = zoom;
      // Same sole, no lift: rolls the ball forward along the line, behind the defender's lunge.
      const e = cqEase(u);
      const b = lerpPt(ballBack, pushEnd, cqClamp01(u * 1.1));
      ball(b.x, b.y, -120 + e * 400);
      const p = lerpPt({ x: backX, y: runY }, burst, e);
      place(me, p.x, p.y, 0, u > 0.45 ? p.x / 4 : 0);
      leanBody(Math.sin(Math.PI * Math.min(1, u * 1.2)));
      if (u < 0.45) soleOn(p.x, p.y, 0, b);
      // Caught leaning in, he can only turn his head while the ball goes by.
      const a0 = faceTo(defBite, ballBack);
      place(def, defBite.x - 2 * e, defBite.y + 1 * e, cqLerp(a0, a0 + 70, cqClamp01((u - 0.35) / 0.65)), 4);
    } else if (seg.kind === "go") {
      z = cqLerp(zoom, 1, cqEase(cqClamp01(u / 0.6)));
      const e = cqEase(u);
      const b = quad(pushEnd, goCtrl, shot, e);
      ball(b.x, b.y, 280 + e * 900);
      const behind = quad(burst, { x: 178, y: runY + 4 }, shooter, e);
      const ahead = quad(burst, { x: 178, y: runY + 4 }, shooter, Math.min(1, e + 0.05));
      place(me, behind.x, behind.y, u > 0.97 ? heading : faceTo(behind, ahead), behind.x / 4);
      const a0 = faceTo(defBite, ballBack) + 70;
      place(def, defBite.x - 2 + 10 * e, defBite.y + 1 + 6 * e, cqLerp(a0, 20, e), u * 6);
    } else {
      place(me, shooter.x, shooter.y, heading);
      const bump = Math.sin(Math.PI * Math.min(1, u * 2));
      foot(me.querySelector(".a-foot-r"), 11 * bump, 4 - 2 * bump, 1 + 0.3 * bump);
      const e = cqClamp01(u * 1.3);
      ball(cqLerp(shot.x, corner.x, e), cqLerp(shot.y, corner.y, e), u * 600);
      place(def, defBite.x + 8, defBite.y + 7, 20, 0);
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
    const legNow = legTexts[flip ? 1 : 0];
    if (legLabel.textContent !== legNow) legLabel.textContent = legNow;
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), goal);
  });
});
