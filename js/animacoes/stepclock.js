/* Pedaladas contra o relógio (vista de cima, com zoom): bola parada à frente, a perna passa por cima dela
   sem tocar, de dentro para fora, e o corpo vai junto para aquele lado. Intercala as pernas sem parar.
   Cada pedalada vale 1. */

cqRegisterAnim("stepclock", (box, opts) => {
  const n = 8;
  const k = 1.4;
  const reach = 14;
  const cx = 150;
  const cy = 85;
  const zoom = 2.1;
  const sideOf = (i) => (i % 2 === 0 ? 1 : -1);
  const line = cqTimeline(Array.from({ length: n }, (_, i) => ({ kind: "step", i, dur: 0.6 })), 0.8);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam" transform="translate(160,85) scale(${zoom}) translate(${-(cx + 10)},${-cy})">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g>
    ${cqNoteSvg(284, 30, "⏱ 20 s")}
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ball = cqMovableBall(svg);
  const say = svg.querySelector(".a-say");
  const count = cqCounter(svg, opts.unit);

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

  const legName = (side) => (side > 0
    ? opts.pick(["perna direita", "right leg", "pierna derecha"])
    : opts.pick(["perna esquerda", "left leg", "pierna izquierda"]));
  const over = opts.pick(["por cima da bola", "over the ball", "por encima del balón"]);

  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const place = (x, y, angle) => {
    me.setAttribute("transform", `translate(${x},${y}) rotate(${angle}) scale(${k})`);
    foot(footL, 0, -4);
    foot(footR, 0, 4);
  };
  // The leg circles the ball without touching it: inside, over the front, landing outside.
  const c = reach / k - 1;
  const arcPoint = (side, a) => [c + 7.5 * Math.cos(a), side * 7.5 * Math.sin(a)];
  const stepFoot = (side, u) => {
    const el = side > 0 ? footR : footL;
    if (u < 0.75) {
      const end = Math.PI + (u / 0.75) * 1.5 * Math.PI;
      const [fx, fy] = arcPoint(side, end);
      foot(el, fx, fy, 1.3);
      const pts = [];
      for (let a = Math.PI; a <= end; a += 0.2) pts.push(arcPoint(side, a).map((v) => v.toFixed(1)).join(","));
      pts.push(`${fx.toFixed(1)},${fy.toFixed(1)}`);
      trail.setAttribute("d", `M${pts.join(" L")}`);
      trail.setAttribute("opacity", 1);
    } else {
      const e = (u - 0.75) / 0.25;
      foot(el, cqLerp(c, 0, e), side * cqLerp(7.5, 4, e), cqLerp(1.3, 1, e));
      trail.setAttribute("opacity", (1 - e).toFixed(2));
    }
  };

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    const side = sideOf(seg.i);
    const pad = t >= line.total - 0.8;
    const sway = pad ? 0 : Math.sin(Math.PI * u);
    place(cx, cy + side * 5 * sway, side * 20 * sway);
    trail.setAttribute("opacity", 0);
    if (!pad) stepFoot(side, u);
    ball(cx + reach, cy, cx * 9);
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
    }
    const text = `${opts.pick(["pedalada", "step-over", "bicicleta"])} ${seg.i + 1}: ${legName(side)} ${over}`;
    if (say.textContent !== text) say.textContent = text;
    count(seg.i + (u >= 0.75 ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
