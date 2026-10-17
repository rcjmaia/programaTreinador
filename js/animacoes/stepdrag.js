/* Pedalada e puxada com o marcador nas costas (vista de cima): conduz de lado para o gol com o
   adversário colado atrás, do lado do gol. Tomba o corpo para frente com a pedalada de fora para dentro,
   o adversário se desloca junto, e a mesma perna volta puxando a bola para trás com as costas do pé,
   para o lado contrário ao do marcador.
   Gira pelo outro lado, de costas para o marcador, e termina com um chute colocado no canto.
   Zoom e câmera lenta no drible. Alterna a perna a cada repetição (a cena é espelhada). */

cqRegisterAnim("stepdrag", (box, opts) => {
  const k = 1.4;
  const reach = 14;
  const stepReach = 18;
  const runX = 150;
  const y0 = 165;
  const stopY = 100;
  const goalX = 296;
  const goalY = 85;
  const zoom = 2.1;
  const focus = { x: runX + 2, y: stopY + 2 };
  const heading = 30;
  const shot = { x: 190, y: 136 };
  const shooter = { x: shot.x - reach * Math.cos((heading * Math.PI) / 180), y: shot.y - reach * Math.sin((heading * Math.PI) / 180) };
  const corner = { x: goalX + 3, y: goalY - 23 };
  const heelEnd = { x: runX - 10, y: stopY + 24 };
  const heelCtrl = { x: runX - 26, y: stopY - 4 };
  const turnEnd = { x: runX - 6, y: stopY + 8 };
  const turnBall = { x: turnEnd.x, y: turnEnd.y + reach };
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };
  const line = cqTimeline([
    { kind: "carry", dur: 1.1 },
    { kind: "zoomIn", dur: 0.45 },
    { kind: "step", dur: 0.9 },
    { kind: "heel", dur: 0.6 },
    { kind: "turn", dur: 0.6 },
    { kind: "go", dur: 0.6 },
    { kind: "fly", dur: 0.6 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam"><g class="a-mirror">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <rect x="${goalX}" y="${goalY - 30}" width="10" height="60" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
      <g class="a-hit">
        <rect x="${goalX + 1}" y="${goalY - 29}" width="8" height="12" fill="rgba(250, 204, 21, 0.35)" />
      </g>
      <rect x="${goalX + 2}" y="${goalY - 17}" width="6" height="3" rx="1" fill="#ef4444" />
      <rect x="${goalX + 2}" y="${goalY + 14}" width="6" height="3" rx="1" fill="#ef4444" />
      <path class="a-curve" fill="none" stroke="#facc15" stroke-width="1" stroke-dasharray="3 2" opacity="0" />
      ${cqTopPlayerSvg(kitDef, "a-top a-def")}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g></g>
    <text x="8" y="20" class="a-note a-slow"></text>
    <text x="312" y="20" text-anchor="end" class="a-note a-leg"></text>
    <text x="160" y="52" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const cam = svg.querySelector(".a-cam");
  const mirror = svg.querySelector(".a-mirror");
  const me = svg.querySelector(".a-me");
  const def = svg.querySelector(".a-def");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ballEl = svg.querySelector(".a-ball-pos");
  const goal = svg.querySelector(".a-hit");
  const curve = svg.querySelector(".a-curve");
  const say = svg.querySelector(".a-say");
  const slow = svg.querySelector(".a-slow");
  const legLabel = svg.querySelector(".a-leg");
  const count = cqCounter(svg, opts.unit);

  // Legs from the hips to the feet, and the dashed path of the foot around the ball.
  const ns = "http://www.w3.org/2000/svg";
  const trail = document.createElementNS(ns, "path");
  trail.setAttribute("fill", "none");
  trail.setAttribute("stroke", "#facc15");
  trail.setAttribute("stroke-width", "0.9");
  trail.setAttribute("stroke-dasharray", "2 1.5");
  const legs = [footL, footR].map((f, i) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", i ? 3 : -3);
    leg.setAttribute("stroke", CQ_KIT.socks);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, f };
  });
  me.prepend(trail, ...legs.map((l) => l.leg));

  // Leaning: the feet stay planted while the shirt, arms and head tip forward, with an arrow ahead.
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
    arrow.setAttribute("transform", `translate(${5 * l},0)`);
    arrow.setAttribute("opacity", (l * 0.9).toFixed(2));
  };

  const texts = {
    carry: opts.pick(["adversário colado nas costas", "defender tight on your back", "rival pegado a tu espalda"]),
    zoomIn: "",
    step: opts.pick(["pedalada de fora para dentro, tombando o corpo", "outside-in step-over, tipping your body", "bicicleta de afuera hacia adentro, inclinando el cuerpo"]),
    heel: opts.pick(["a mesma perna volta: puxa com as costas do pé", "the same leg comes back: drag it with the back of your foot", "la misma pierna vuelve: tira con la parte de atrás del pie"]),
    turn: opts.pick(["gira pelo outro lado, de costas para o marcador", "turn the other way, back to the defender", "gira por el otro lado, de espaldas al marcador"]),
    go: opts.pick(["tirou o adversário da jogada!", "the defender is out of the play!", "¡sacaste al rival de la jugada!"]),
    fly: opts.pick(["colocado: parte de dentro, perto dos dedos", "placed: inside of the foot, near the toes", "colocado: interior del pie, cerca de los dedos"]),
  };
  const legTexts = [
    opts.pick(["perna esquerda", "left leg", "pierna izquierda"]),
    opts.pick(["perna direita", "right leg", "pierna derecha"]),
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
  // The left leg goes over the ball from the outside (his left) to the inside (his right).
  const c = stepReach / k - 1;
  const arcPoint = (a) => [c + 7.5 * Math.cos(a), 7.5 * Math.sin(a)];
  const quad = (p0, m, p1, e) => ({
    x: (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * m.x + e * e * p1.x,
    y: (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * m.y + e * e * p1.y,
  });
  const camera = (z, flip) => {
    const p = (z - 1) / (zoom - 1);
    const focusX = flip ? CQ_W - focus.x : focus.x;
    const fx = Math.min(Math.max(cqLerp(160, focusX, p), 160 / z), CQ_W - 160 / z);
    const fy = Math.min(Math.max(cqLerp(85, focus.y, p), 85 / z), 170 - 85 / z);
    cam.setAttribute("transform", `translate(160,85) scale(${z}) translate(${-fx},${-fy})`);
  };
  const ballStart = { x: runX, y: stopY - stepReach };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // Odd rounds mirror the scene: the right leg does the move with the defender on the left.
    const flip = round % 2 === 1;
    mirror.setAttribute("transform", flip ? `translate(${CQ_W},0) scale(-1,1)` : "");
    let z = 1;
    trail.setAttribute("opacity", 0);
    curve.setAttribute("opacity", 0);
    leanBody(0);

    if (seg.kind === "carry") {
      const y = cqLerp(y0, stopY, u);
      place(me, runX, y, -90, y / 5);
      ball(runX, y - reach, y * 9);
      place(def, runX + 17, y + 16, -90, y / 5 + 1);
    } else if (seg.kind === "zoomIn") {
      z = cqLerp(1, zoom, cqEase(u));
      place(me, runX, stopY, -90);
      ball(runX, stopY - cqLerp(reach, stepReach, cqEase(u)), u * 40);
      place(def, runX + 17, stopY + 16, -90);
    } else if (seg.kind === "step") {
      z = zoom;
      // The body tips forward as if bursting away; that is what drags the defender along.
      const lean = Math.sin(Math.PI * Math.min(1, u * 1.1));
      place(me, runX, stopY - 2 * lean, -90 + 4 * lean);
      leanBody(lean);
      if (u < 0.8) {
        const end = Math.PI + (u / 0.8) * 1.5 * Math.PI;
        const [fx, fy] = arcPoint(end);
        foot(footL, fx, fy, 1.3);
        const pts = [];
        for (let a = Math.PI; a <= end; a += 0.2) pts.push(arcPoint(a).map((v) => v.toFixed(1)).join(","));
        pts.push(`${fx.toFixed(1)},${fy.toFixed(1)}`);
        trail.setAttribute("d", `M${pts.join(" L")}`);
        trail.setAttribute("opacity", 1);
      } else {
        foot(footL, c, 7.5, 1.3);
      }
      ball(ballStart.x, ballStart.y, 40);
      const bite = cqEase(cqClamp01((u - 0.3) / 0.7));
      place(def, runX + 17 + 11 * bite, cqLerp(stopY + 16, stopY - 26, bite), -90, bite * 5);
    } else if (seg.kind === "heel") {
      z = zoom;
      // On its way back, the same foot gets in front of the ball and sweeps it back with the back of the foot.
      const angle = cqLerp(-90, -100, u);
      place(me, runX, stopY, angle);
      const e = cqEase(cqClamp01((u - 0.3) / 0.7));
      const b = quad(ballStart, heelCtrl, heelEnd, e);
      ball(b.x, b.y, 40 + e * 300);
      const [lx, ly] = toLocal(runX, stopY, angle, b.x, b.y);
      const reachFront = cqClamp01(u / 0.3);
      foot(footL, cqLerp(c, lx + 4.5, reachFront), cqLerp(7.5, ly, reachFront), 1.3);
      place(def, runX + 28, cqLerp(stopY - 26, stopY - 32, u), -90, 5 + u * 4);
    } else if (seg.kind === "turn") {
      z = cqLerp(zoom, zoom * 0.92, u);
      // Spins the other way, his back to the defender, to come out facing the ball.
      const e = cqEase(u);
      place(me, cqLerp(runX, turnEnd.x, e), cqLerp(stopY, turnEnd.y, e), cqLerp(-100, -270, e), u * 5);
      ball(cqLerp(heelEnd.x, turnBall.x, e), cqLerp(heelEnd.y, turnBall.y, e), 340 + e * 40);
      place(def, runX + 30, cqLerp(stopY - 32, stopY - 38, u), -90 + 30 * cqClamp01((u - 0.4) / 0.6), 9 + u * 4);
    } else if (seg.kind === "go") {
      z = cqLerp(zoom * 0.92, 1, cqEase(cqClamp01(u / 0.6)));
      const e = cqEase(u);
      const px = cqLerp(turnEnd.x, shooter.x, e);
      place(me, px, cqLerp(turnEnd.y, shooter.y, e), cqLerp(90, heading, e), px / 4);
      ball(cqLerp(turnBall.x, shot.x, e), cqLerp(turnBall.y, shot.y, e), px * 9);
      place(def, runX + 30 + 2 * e, stopY - 38 + 4 * e, -60 + 120 * e, u * 4);
    } else {
      // Placed shot with the inside of the right foot, near the toes, curling into the corner.
      const aim = (Math.atan2(corner.y - shot.y, corner.x - shot.x) * 180) / Math.PI;
      place(me, shooter.x, shooter.y, cqLerp(heading, aim * 0.6, cqClamp01(u * 3)));
      const bump = Math.sin(Math.PI * Math.min(1, u * 2));
      foot(footR, 11 * bump, 4 - 2 * bump, 1 + 0.3 * bump);
      const ctrl = { x: 262, y: shot.y - 8 };
      const b = quad(shot, ctrl, corner, cqClamp01(u * 1.15));
      ball(b.x, b.y, u * 500);
      curve.setAttribute("d", `M${shot.x},${shot.y} Q${ctrl.x},${ctrl.y} ${corner.x},${corner.y}`);
      curve.setAttribute("opacity", 0.7);
      place(def, runX + 32, stopY - 34, 60, 0);
    }

    camera(z, flip);
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
    }
    const text = texts[seg.kind];
    // Zoomed in, the caption moves to the bottom so it doesn't cover the player.
    say.setAttribute("y", z > 1.2 ? 160 : 52);
    if (say.textContent !== text) say.textContent = text;
    const slowNow = z > 1.2 ? slowText : "";
    if (slow.textContent !== slowNow) slow.textContent = slowNow;
    const legNow = legTexts[flip ? 1 : 0];
    if (legLabel.textContent !== legNow) legLabel.textContent = legNow;
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), goal);
  });
});
