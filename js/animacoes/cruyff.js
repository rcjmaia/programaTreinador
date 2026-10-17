/* Finta de cruzamento e giro de Cruyff (vista de cima): atacante e marcador correm lado a lado pela ponta até perto
   da linha de fundo. O atacante arma o cruzamento, o marcador se joga para bloquear, e a mesma perna passa por
   cima da bola, quase como uma pedalada, e volta por trás da perna de apoio e do corpo, trazendo a bola para trás
   (giro de Cruyff). Aí sim cruza com a outra perna, para o alvo na área.
   Zoom e câmera lenta no drible. Alterna a perna a cada repetição (a cena é espelhada). */

cqRegisterAnim("cruyff", (box, opts) => {
  const k = 1.4;
  const reach = 14;
  const zoom = 2;
  const lineY = 10;
  const runY = 30;
  const defY = 68;
  const x0 = 40;
  const stopX = 222;
  const goalX = 296;
  const focus = { x: 228, y: 52 };
  const ballSet = { x: 233, y: 29 };
  const ballBack = { x: 202, y: 43 };
  const ballCtrl = { x: 208, y: 26 };
  const target = { x: 268, y: 108 };
  const aim = Math.atan2(target.y - ballBack.y, target.x - ballBack.x);
  const crosser = { x: ballBack.x - reach * Math.cos(aim), y: ballBack.y - reach * Math.sin(aim) };
  const stepCtrl = { x: 212, y: 4 };
  const defLunge = { x: 248, y: 62 };
  const defOut = { x: 256, y: 66 };
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };
  const line = cqTimeline([
    { kind: "run", dur: 1.6 },
    { kind: "zoomIn", dur: 0.4 },
    { kind: "fake", dur: 0.6 },
    { kind: "heel", dur: 0.9 },
    { kind: "set", dur: 0.5 },
    { kind: "cross", dur: 0.85 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam"><g class="a-mirror">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <rect x="0" y="0" width="${CQ_W}" height="${lineY}" fill="#14532d" />
      <line x1="0" y1="${lineY}" x2="${goalX}" y2="${lineY}" stroke="#f8fafc" stroke-width="1.5" />
      <line x1="${goalX}" y1="${lineY}" x2="${goalX}" y2="170" stroke="#f8fafc" stroke-width="1.5" />
      <path d="M${goalX},36 H226 V134 H${goalX}" fill="none" stroke="rgba(248, 250, 252, 0.45)" stroke-width="1" />
      <rect x="${goalX}" y="60" width="10" height="50" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
      <g class="a-hit">
        <circle cx="${target.x}" cy="${target.y}" r="12" fill="rgba(250, 204, 21, 0.25)" stroke="#facc15" stroke-width="1.5" />
        <circle cx="${target.x}" cy="${target.y}" r="6.5" fill="none" stroke="#f8fafc" stroke-width="1.2" />
        <circle cx="${target.x}" cy="${target.y}" r="2" fill="#facc15" />
      </g>
      <path class="a-fake" d="M${ballSet.x},${ballSet.y} Q272,52 278,104" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 2" opacity="0" />
      <path class="a-trail" fill="none" stroke="#facc15" stroke-width="1.3" stroke-dasharray="2 1.5" opacity="0" />
      ${cqTopPlayerSvg(kitDef, "a-top a-def")}
      <ellipse class="a-shadow" rx="4.5" ry="2.5" fill="rgba(0, 0, 0, 0.35)" opacity="0" />
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
  const footR = me.querySelector(".a-foot-r");
  const ballEl = svg.querySelector(".a-ball-pos");
  const goal = svg.querySelector(".a-hit");
  const fakePath = svg.querySelector(".a-fake");
  const trail = svg.querySelector(".a-trail");
  const shadow = svg.querySelector(".a-shadow");
  const say = svg.querySelector(".a-say");
  const slow = svg.querySelector(".a-slow");
  const legLabel = svg.querySelector(".a-leg");
  const countEl = svg.querySelector(".a-count");
  // The count sits low, on the side away from the box, clear of the run along the top.
  countEl.setAttribute("y", 146);
  const count = cqCounter(svg, opts.unit);

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
    run: opts.pick(["lado a lado até a linha de fundo", "side by side to the byline", "lado a lado hasta la línea de fondo"]),
    zoomIn: "",
    fake: opts.pick(["finge que vai cruzar...", "fake the cross...", "finge que vas a centrar..."]),
    heel: opts.pick(["passa o pé por cima da bola, quase uma pedalada...", "take your foot over the ball, almost a step-over...", "pasa el pie por encima del balón, casi una bicicleta..."]),
    heelBack: opts.pick(["...e puxa por trás da perna de apoio: giro de Cruyff", "...and drag it behind your standing leg: Cruyff turn", "...y tira por detrás de la pierna de apoyo: giro de Cruyff"]),
    set: opts.pick(["marcador fora da jogada: agora cruza com a outra", "defender beaten: now cross with the other one", "marcador fuera: ahora centra con la otra"]),
    cross: opts.pick(["cruzamento no alvo!", "cross on target!", "¡centro al objetivo!"]),
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
  // The defender throws himself at the cross: legs wide, the front one stretched out (o = 0 to 1).
  const lunge = (o) => {
    foot(def.querySelector(".a-foot-l"), 9 * o, -4 - 4 * o);
    foot(def.querySelector(".a-foot-r"), -6 * o, 4 + 3 * o);
  };
  const ball = (x, y, spin, size = 1) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin}) scale(${size})`);
  const quad = (p0, m, p1, e) => ({
    x: (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * m.x + e * e * p1.x,
    y: (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * m.y + e * e * p1.y,
  });
  const lerpPt = (a, b, e) => ({ x: cqLerp(a.x, b.x, e), y: cqLerp(a.y, b.y, e) });
  const faceTo = (from, to) => (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
  // The left foot's way in his own coordinates (x forward, y to his right): wound up for the cross, it goes over
  // the ball to its far side, then hooks back behind the planted right leg and behind his body, taking the ball with it.
  const plant = { x: 5, y: 5 };
  const windUp = { x: -10, y: -6 };
  const overCtrl = { x: 2, y: 4 };
  const overEnd = { x: 13, y: -4 };
  const backCtrl = { x: -4, y: -2 };
  const hookEnd = { x: -12, y: 9 };
  const footPath = (s) => (s < 0.5 ? quad(windUp, overCtrl, overEnd, s * 2) : quad(overEnd, backCtrl, hookEnd, s * 2 - 1));
  const camera = (z, flip) => {
    const p = (z - 1) / (zoom - 1);
    const focusX = flip ? CQ_W - focus.x : focus.x;
    const fx = Math.min(Math.max(cqLerp(160, focusX, p), 160 / z), CQ_W - 160 / z);
    const fy = Math.min(Math.max(cqLerp(85, focus.y, p), 85 / z), 170 - 85 / z);
    cam.setAttribute("transform", `translate(160,85) scale(${z}) translate(${-fx},${-fy})`);
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // Odd rounds mirror the scene left to right: he runs the other way and the right leg does the move.
    const flip = round % 2 === 1;
    mirror.setAttribute("transform", flip ? `translate(${CQ_W},0) scale(-1,1)` : "");
    let z = 1;
    fakePath.setAttribute("opacity", 0);
    trail.setAttribute("opacity", 0);
    shadow.setAttribute("opacity", 0);

    if (seg.kind === "run") {
      const x = cqLerp(x0, stopX, u);
      place(me, x, runY, 0, x / 5);
      ball(x + reach, runY, x * 9);
      place(def, x + 2, defY, 0, x / 5 + 1.5);
    } else if (seg.kind === "zoomIn") {
      // Last touch sets the ball a bit inside, ready for the cross.
      z = cqLerp(1, zoom, cqEase(u));
      const e = cqEase(u);
      place(me, stopX, runY, 0, (1 - e) * 2);
      const b = lerpPt({ x: stopX + reach, y: runY }, ballSet, e);
      ball(b.x, b.y, stopX * 9 + e * 40);
      place(def, stopX + 2 + 6 * e, defY, 0, (1 - e) * 2);
    } else if (seg.kind === "fake") {
      z = zoom;
      // Winds the leg up as if to cross; the defender throws himself in front of the cross.
      const e = cqEase(u);
      place(me, stopX, runY, 0);
      foot(footR, plant.x, plant.y, 1.1);
      foot(footL, cqLerp(0, windUp.x, e), cqLerp(-4, windUp.y, e), 1.2);
      ball(ballSet.x, ballSet.y, 0);
      fakePath.setAttribute("opacity", (0.8 * Math.sin(Math.PI * Math.min(1, u * 1.2))).toFixed(2));
      const g = cqEase(cqClamp01((u - 0.2) / 0.8));
      const d = lerpPt({ x: stopX + 8, y: defY }, defLunge, g);
      place(def, d.x, d.y, cqLerp(0, -70, g));
      lunge(g);
    } else if (seg.kind === "heel") {
      z = zoom;
      // Cruyff turn: the same leg goes over the ball like a step-over, then hooks back behind the standing leg
      // and brings the ball behind him.
      place(me, stopX, runY, 0);
      foot(footR, plant.x, plant.y, 1.1);
      const s = cqClamp01(u / 0.85);
      const p = footPath(s);
      foot(footL, p.x, p.y, 1.2);
      const pts = [];
      for (let i = 0; i <= 20; i++) {
        const q = footPath((i / 20) * s);
        pts.push(`${q.x.toFixed(1)},${q.y.toFixed(1)}`);
      }
      trail.setAttribute("d", `M${pts.join(" L")}`);
      trail.setAttribute("transform", me.getAttribute("transform"));
      trail.setAttribute("opacity", 1);
      const r = cqEase(cqClamp01((u - 0.45) / 0.55));
      const b = quad(ballSet, ballCtrl, ballBack, r);
      ball(b.x, b.y, -r * 300);
      const d = lerpPt(defLunge, defOut, cqEase(u));
      place(def, d.x, d.y, -70 - 10 * u);
      lunge(1);
    } else if (seg.kind === "set") {
      z = cqLerp(zoom, 1.3, cqEase(u));
      // A quick step to the ball, opening up to the box.
      const e = cqEase(u);
      const p = quad({ x: stopX, y: runY }, stepCtrl, crosser, e);
      place(me, p.x, p.y, cqLerp(0, (aim * 180) / Math.PI, e), e * 3);
      ball(ballBack.x, ballBack.y, -300);
      place(def, defOut.x, defOut.y, cqLerp(-80, -150, e));
      lunge(1 - 0.5 * e);
    } else {
      z = cqLerp(1.3, 1, cqEase(cqClamp01(u / 0.5)));
      // Crosses with the other leg: the ball goes up and drops on the target; its shadow runs along the ground.
      place(me, crosser.x, crosser.y, (aim * 180) / Math.PI);
      const bump = Math.sin(Math.PI * Math.min(1, u * 2.5));
      foot(footR, 11 * bump, 4 - 2 * bump, 1 + 0.3 * bump);
      const e = cqClamp01((u - 0.1) / 0.75);
      const g = lerpPt(ballBack, target, e);
      const h = 26 * Math.sin(Math.PI * e);
      ball(g.x, g.y - h, -300 + e * 500, 1 + h / 50);
      shadow.setAttribute("cx", g.x);
      shadow.setAttribute("cy", g.y);
      shadow.setAttribute("opacity", e > 0 && e < 1 ? 1 : 0);
      place(def, defOut.x, defOut.y, cqLerp(-150, faceTo(defOut, target), cqEase(u)));
      lunge(0.5 - 0.5 * u);
    }

    camera(z, flip);
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
    }
    const text = seg.kind === "heel" && u >= 0.45 ? texts.heelBack : texts[seg.kind];
    if (say.textContent !== text) say.textContent = text;
    const slowNow = z > 1.2 ? slowText : "";
    if (slow.textContent !== slowNow) slow.textContent = slowNow;
    countEl.setAttribute("opacity", z > 1.2 ? 0 : 1);
    countEl.setAttribute("x", flip ? CQ_W - 52 : 52);
    const legNow = legTexts[flip ? 1 : 0];
    if (legLabel.textContent !== legNow) legLabel.textContent = legNow;
    count((round % 9) + (seg.kind === "cross" && u >= 1 ? 1 : 0), goal);
  });
});
