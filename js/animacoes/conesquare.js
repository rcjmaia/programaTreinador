/* Quadrado em volta do cone (vista de cima): cone baixo à frente do corpo. Pé esquerdo toca para a frente com a
   parte de dentro, pé esquerdo puxa para a direita com a sola, pé direito puxa para trás com a sola e pé direito
   toca para a esquerda com a parte de dentro. A bola desenha um quadrado em volta do cone. O quadrado seguinte vai
   pelo outro lado, no sentido contrário, com os pés trocados. Cada quadrado vale 1. */

cqRegisterAnim("conesquare", (box, opts) => {
  const k = 1.5;
  const zoom = 2;
  const midY = 100;
  const cx = 160;
  const coneY = midY - 23;
  const s = 11;
  const corner = {
    bl: [cx - s, coneY + s],
    fl: [cx - s, coneY - s],
    fr: [cx + s, coneY - s],
    br: [cx + s, coneY + s],
  };
  const touches = [
    { foot: "l", from: "bl", to: "fl", sole: false, turn: 90, text: ["pé esquerdo, parte de dentro: para a frente", "left foot, inside: forward", "pie izquierdo, interior: hacia adelante"] },
    { foot: "l", from: "fl", to: "fr", sole: true, turn: 0, text: ["pé esquerdo, sola: puxa para a direita", "left foot, sole: drag it right", "pie izquierdo, suela: arrastra a la derecha"] },
    { foot: "r", from: "fr", to: "br", sole: true, turn: 0, text: ["pé direito, sola: puxa para trás", "right foot, sole: drag it back", "pie derecho, suela: arrastra hacia atrás"] },
    { foot: "r", from: "br", to: "bl", sole: false, turn: 0, text: ["pé direito, parte de dentro: para a esquerda", "right foot, inside: to the left", "pie derecho, interior: a la izquierda"] },
    { foot: "l", from: "bl", to: "br", sole: false, turn: 0, text: ["outro lado! pé esquerdo, parte de dentro: para a direita", "other side! left foot, inside: to the right", "¡otro lado! pie izquierdo, interior: a la derecha"] },
    { foot: "r", from: "br", to: "fr", sole: false, turn: 90, text: ["pé direito, parte de dentro: para a frente", "right foot, inside: forward", "pie derecho, interior: hacia adelante"] },
    { foot: "r", from: "fr", to: "fl", sole: true, turn: 0, text: ["pé direito, sola: puxa para a esquerda", "right foot, sole: drag it left", "pie derecho, suela: arrastra a la izquierda"] },
    { foot: "l", from: "fl", to: "bl", sole: true, turn: 0, text: ["pé esquerdo, sola: puxa para trás", "left foot, sole: drag it back", "pie izquierdo, suela: arrastra hacia atrás"] },
    { foot: "l", from: "bl", to: "br", sole: false, turn: 0, text: ["pé esquerdo, parte de dentro: para a direita", "left foot, inside: to the right", "pie izquierdo, interior: a la derecha"] },
    { foot: "r", from: "br", to: "bl", sole: false, turn: 0, text: ["pé direito, parte de dentro: volta para a esquerda", "right foot, inside: back to the left", "pie derecho, interior: vuelve a la izquierda"] },
  ];
  // Touches that close a square: the 4th on the left side and the 9th on the right side.
  const closes = [3, 8];
  const line = cqTimeline(touches.map((_, i) => ({ kind: "touch", i, dur: 0.75 })), 0.6);
  const path = ["bl", "fl", "fr", "br"].map((c) => corner[c].join(",")).join(" ");

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam" transform="translate(160,100) scale(${zoom}) translate(${-cx},${-(midY - 14)})">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <polygon points="${path}" fill="none" stroke="#facc15" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7" />
      ${cqTopConeSvg(cx, coneY, 4.5)}
      <g class="a-ball-pos">${cqBallSvg(4)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g>
    ${cqNoteSvg(284, 30, "⏱ 1 min")}
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const feet = { l: me.querySelector(".a-foot-l"), r: me.querySelector(".a-foot-r") };
  const ball = cqMovableBall(svg);
  const say = svg.querySelector(".a-say");
  const count = cqCounter(svg, opts.unit);
  const texts = touches.map((tc) => opts.pick(tc.text));

  const restX = 5;
  const rest = { l: [restX, -5], r: [restX, 5] };
  // The player faces up the screen, so local forward is screen up and local right is screen right.
  const toLocal = (sx, sy) => [-(sy - midY) / k, (sx - cx) / k];
  const foot = (el, [x, y], size = 1, turn = 0) => {
    el.setAttribute("cx", x.toFixed(2));
    el.setAttribute("cy", y.toFixed(2));
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
    el.setAttribute("transform", turn ? `rotate(${turn.toFixed(1)} ${x.toFixed(2)} ${y.toFixed(2)})` : "");
  };
  const mix = (a, b, e) => [cqLerp(a[0], b[0], e), cqLerp(a[1], b[1], e)];
  const ns = "http://www.w3.org/2000/svg";
  const legs = ["l", "r"].map((side) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", side === "r" ? 3 : -3);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, side };
  });
  me.prepend(...legs.map((l) => l.leg));
  me.setAttribute("transform", `translate(${cx},${midY}) rotate(-90) scale(${k})`);

  return cqLoop((seconds) => {
    const { seg, u, t, round } = line.at(seconds);
    const pad = t >= line.total - 0.6;
    const tc = touches[seg.i];
    const from = corner[tc.from];
    const to = corner[tc.to];
    const roll = pad ? 1 : cqEase(cqClamp01((u - 0.25) / 0.5));
    const b = mix(from, to, roll);
    foot(feet.l, rest.l);
    foot(feet.r, rest.r);
    let active = null;
    if (!pad) {
      active = tc.foot;
      const el = feet[tc.foot];
      const dx = Math.sign(to[0] - from[0]);
      const dy = Math.sign(to[1] - from[1]);
      // Sole: the foot rides on top of the ball. Inside: the foot meets the ball from behind and follows through a little.
      const contact = tc.sole
        ? toLocal(b[0], b[1] + 4.5)
        : toLocal(from[0] - dx * 6 + dx * 6 * Math.min(roll, 0.35), from[1] - dy * 6 + dy * 6 * Math.min(roll, 0.35));
      const size = tc.sole ? 1.1 : 1;
      if (u < 0.25) {
        const e = cqEase(u / 0.25);
        foot(el, mix(rest[tc.foot], contact, e), cqLerp(1, size, e), tc.turn * e);
      } else if (u < 0.75) {
        foot(el, contact, size, tc.turn);
      } else {
        const e = cqEase((u - 0.75) / 0.25);
        foot(el, mix(contact, rest[tc.foot], e), cqLerp(size, 1, e), tc.turn * (1 - e));
      }
    }
    for (const { leg, side } of legs) {
      const f = feet[side];
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
      leg.setAttribute("stroke", side === active ? "#facc15" : CQ_KIT.socks);
      f.setAttribute("stroke", side === active ? "#facc15" : "none");
      f.setAttribute("stroke-width", "0.8");
    }
    ball(b[0], b[1], b[0] * 9 + b[1] * 9);
    const text = texts[seg.i];
    if (say.textContent !== text) say.textContent = text;
    const done = closes.filter((c) => seg.i > c || (seg.i === c && u >= 0.75)).length;
    count((round * closes.length + done) % 10, svg.querySelector(".a-ball"));
  });
});
