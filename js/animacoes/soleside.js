/* Sola de lado, vai e volta (vista de cima): andando de lado, indo para a direita a sola do pé esquerdo puxa
   a bola para a direita, passando na frente do corpo; na volta, para a esquerda, puxa a sola do pé direito.
   Ida e volta vale 1. */

cqRegisterAnim("soleside", (box, opts) => {
  const k = 1.5;
  const zoom = 1.8;
  const midY = 92;
  const ahead = 15;
  const lat = 5;
  const markA = 60;
  const markB = 260;
  const touches = 8;
  const d = (markB - markA) / touches;
  const swap = 0.4;
  const line = cqTimeline([
    ...Array.from({ length: touches }, (_, i) => ({ kind: "go", i, dur: 0.5 })),
    { kind: "hold", dur: swap },
    ...Array.from({ length: touches }, (_, i) => ({ kind: "back", i, dur: 0.5 })),
  ], swap);
  const flipflop = (x) => `<rect x="${x - 3}" y="${midY + 10}" width="6" height="12" rx="3" fill="#ef4444" />`;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      ${flipflop(markA)}
      ${flipflop(markB)}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
      <text class="a-which" text-anchor="middle" font-size="5.5" font-weight="700" fill="#facc15"></text>
    </g>
    ${cqNoteSvg(284, 30, "⏱ 1 min")}
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const cam = svg.querySelector(".a-cam");
  const me = svg.querySelector(".a-me");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ball = cqMovableBall(svg);
  const say = svg.querySelector(".a-say");
  const which = svg.querySelector(".a-which");
  const count = cqCounter(svg, opts.unit);
  const footName = {
    left: opts.pick(["pé esquerdo", "left foot", "pie izquierdo"]),
    right: opts.pick(["pé direito", "right foot", "pie derecho"]),
  };
  const texts = {
    go: opts.pick(["para a direita: puxa com a sola do pé esquerdo", "going right: drag with your left sole", "a la derecha: arrastra con la suela izquierda"]),
    back: opts.pick(["para a esquerda: puxa com a sola do pé direito", "going left: drag with your right sole", "a la izquierda: arrastra con la suela derecha"]),
    swap: opts.pick(["chegou no chinelo: troca de pé", "reached the flip-flop: switch feet", "llegaste a la chancla: cambia de pie"]),
  };

  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x.toFixed(2));
    el.setAttribute("cy", y.toFixed(2));
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  // The player faces up the screen, so local forward is screen up and local right is screen right.
  const toLocal = (sx, sy) => [-sy / k, sx / k];
  const ns = "http://www.w3.org/2000/svg";
  const legs = [footL, footR].map((f, i) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", i ? 3 : -3);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, f };
  });
  me.prepend(...legs.map((l) => l.leg));
  const restX = 5;

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    const padU = (t - (line.total - swap)) / swap;
    const pad = padU >= 0;
    let px;
    let bx;
    let active = null;
    foot(footL, restX, -5);
    foot(footR, restX, 5);
    if (seg.kind === "hold" || pad) {
      // At each flip-flop the player steps round to the other side of the ball to switch the dragging foot.
      const atB = seg.kind === "hold";
      const mark = atB ? markB : markA;
      const e = cqEase(atB ? u : padU);
      px = atB ? cqLerp(mark + lat, mark - lat, e) : cqLerp(mark - lat, mark + lat, e);
      bx = mark;
    } else {
      // Going right the left sole drags the ball across the front of the body; going left, the right sole.
      const dir = seg.kind === "go" ? 1 : -1;
      const x0 = (dir > 0 ? markA : markB) + dir * lat + dir * seg.i * d;
      px = x0 + dir * d * cqEase(u);
      const roll = cqEase(cqClamp01((u - 0.15) / 0.45));
      bx = x0 - dir * lat + dir * d * roll;
      active = dir > 0 ? footL : footR;
      const rest = dir > 0 ? -5 : 5;
      // The sole sits on the back half of the ball, so the ball still shows in front of it.
      const [lx, ly] = toLocal(bx - px, -ahead + 3.5);
      if (u < 0.15) {
        const e = cqEase(u / 0.15);
        foot(active, cqLerp(restX, lx, e), cqLerp(rest, ly, e), cqLerp(1, 1.1, e));
      } else if (u < 0.6) {
        foot(active, lx, ly, 1.1);
      } else {
        // The dragging foot lands and the other one steps out to the side.
        const e = cqEase((u - 0.6) / 0.4);
        foot(active, cqLerp(lx, restX, e), cqLerp(ly, rest, e), cqLerp(1.1, 1, e));
        foot(dir > 0 ? footR : footL, restX, -rest + dir * 3 * Math.sin(Math.PI * e));
      }
      which.setAttribute("x", bx.toFixed(2));
      which.setAttribute("y", midY - ahead - 8);
      const name = dir > 0 ? footName.left : footName.right;
      if (which.textContent !== name) which.textContent = name;
    }
    which.setAttribute("opacity", active ? 1 : 0);
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
      leg.setAttribute("stroke", f === active ? "#facc15" : CQ_KIT.socks);
      f.setAttribute("stroke", f === active ? "#facc15" : "none");
      f.setAttribute("stroke-width", "0.8");
    }
    me.setAttribute("transform", `translate(${px.toFixed(2)},${midY}) rotate(-90) scale(${k})`);
    ball(bx, midY - ahead, bx * 9);
    const fx = Math.min(Math.max(px, 160 / zoom), CQ_W - 160 / zoom);
    cam.setAttribute("transform", `translate(160,100) scale(${zoom}) translate(${(-fx).toFixed(2)},${-midY})`);
    const text = texts[seg.kind === "hold" || pad ? "swap" : seg.kind];
    if (say.textContent !== text) say.textContent = text;
    count((Math.floor(seconds / line.total) % 9) + (pad ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
