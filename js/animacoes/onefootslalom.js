/* Slalom de uma perna só (vista de cima): cones em fila a 1 passo, 10 passos. Na ida só o pé direito, um toque
   por cone, alternando parte de fora e parte de dentro; no fim dá a volta na bola e volta só com o pé esquerdo.
   Ida e volta vale 1. */

cqRegisterAnim("onefootslalom", (box, opts) => {
  const k = 1.3;
  const zoom = 1.8;
  const midY = 92;
  const side = 14;
  const behind = 15;
  const cones = Array.from({ length: 9 }, (_, i) => 60 + i * 24);
  const startX = 36;
  const endX = 276;
  const goPts = [[startX, midY], ...cones.map((x, i) => [x, midY + (i % 2 === 0 ? side : -side)]), [endX, midY]];
  const backPts = [...goPts].reverse();
  const touchDur = 0.42;
  const turnDur = 0.6;
  const n = goPts.length - 1;
  const line = cqTimeline([
    ...Array.from({ length: n }, (_, i) => ({ kind: "go", i, dur: touchDur })),
    { kind: "turn", at: endX, from: 0, dur: turnDur },
    ...Array.from({ length: n }, (_, i) => ({ kind: "back", i, dur: touchDur })),
    { kind: "turn", at: startX, from: 180, dur: turnDur },
  ]);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      ${cones.map((x) => cqTopConeSvg(x, midY, 4)).join("")}
      <g class="a-ball-pos">${cqBallSvg(4.5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g>
    ${cqNoteSvg(284, 30, "⏱ 1 min")}
    <text x="10" y="30" class="a-note a-leg"></text>
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const cam = svg.querySelector(".a-cam");
  const me = svg.querySelector(".a-me");
  const feet = { r: me.querySelector(".a-foot-r"), l: me.querySelector(".a-foot-l") };
  const ball = cqMovableBall(svg);
  const say = svg.querySelector(".a-say");
  const legLabel = svg.querySelector(".a-leg");
  const count = cqCounter(svg, opts.unit);
  const texts = {
    out: opts.pick(["1 toque: parte de fora", "1 touch: outside", "1 toque: exterior"]),
    in: opts.pick(["1 toque: parte de dentro", "1 touch: inside", "1 toque: interior"]),
    turn: opts.pick(["dá a volta na bola e troca de pé", "go round the ball and switch feet", "rodea el balón y cambia de pie"]),
  };
  const legNames = {
    r: opts.pick(["só o pé direito", "right foot only", "solo el pie derecho"]),
    l: opts.pick(["só o pé esquerdo", "left foot only", "solo el pie izquierdo"]),
  };

  const ns = "http://www.w3.org/2000/svg";
  const legs = ["l", "r"].map((s) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", s === "r" ? 3 : -3);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, s };
  });
  me.prepend(...legs.map((l) => l.leg));
  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x.toFixed(2));
    el.setAttribute("cy", y.toFixed(2));
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const mix = (a, b, e) => [cqLerp(a[0], b[0], e), cqLerp(a[1], b[1], e)];

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let bx;
    let by;
    let px;
    let py;
    let angle;
    let active = null;
    let touchFoot = null;
    let text = texts.turn;
    if (seg.kind === "turn") {
      // Walk round the ball, passing on the outside of the line, to face back the other way.
      bx = seg.at;
      by = midY;
      const e = cqEase(u);
      const th = seg.from === 0 ? Math.PI - Math.PI * e : 2 * Math.PI - Math.PI * e;
      px = bx + behind * Math.cos(th);
      py = by + behind * Math.sin(th);
      angle = (th * 180) / Math.PI + 180;
    } else {
      const pts = seg.kind === "go" ? goPts : backPts;
      const a = pts[seg.i];
      const b = pts[seg.i + 1];
      const roll = cqEase(cqClamp01((u - 0.25) / 0.75));
      [bx, by] = mix(a, b, roll);
      const dir = seg.kind === "go" ? 1 : -1;
      // The player trails the ball, weaving with it so the body passes beside each cone.
      const t = cqEase(u);
      const lead = mix(a, b, t);
      px = lead[0] - dir * behind;
      py = midY + (lead[1] - midY) * 1.1;
      angle = (Math.atan2(lead[1] - py, lead[0] - px) * 180) / Math.PI;
      active = seg.kind === "go" ? "r" : "l";
      // Both feet sit on the lower side of the line (right foot going right, left foot coming back),
      // so moving the ball down the screen is the outside of the foot and up is the inside.
      text = b[1] > a[1] ? texts.out : texts.in;
      const mx = Math.sign(b[0] - a[0]);
      const my = Math.sign(b[1] - a[1]);
      const contact = [a[0] - mx * 3, a[1] - my * 5];
      const rad = (-angle * Math.PI) / 180;
      const toLocal = ([sx, sy]) => {
        const dx = sx - px;
        const dy = sy - py;
        return [(dx * Math.cos(rad) - dy * Math.sin(rad)) / k, (dx * Math.sin(rad) + dy * Math.cos(rad)) / k];
      };
      touchFoot = { el: feet[active], rest: [0, active === "r" ? 4 : -4], at: toLocal(contact), u };
    }
    me.setAttribute("transform", `translate(${px.toFixed(2)},${py.toFixed(2)}) rotate(${angle.toFixed(2)}) scale(${k})`);
    const stride = Math.sin(px / 4) * 4;
    foot(feet.l, stride, -4);
    foot(feet.r, -stride, 4);
    if (touchFoot) {
      const { el, rest, at, u: tu } = touchFoot;
      if (tu < 0.25) foot(el, ...mix(rest, at, cqEase(tu / 0.25)), cqLerp(1, 1.15, tu / 0.25));
      else if (tu < 0.4) foot(el, ...at, 1.15);
      else foot(el, ...mix(at, rest, cqEase(cqClamp01((tu - 0.4) / 0.35))), 1.15 - 0.15 * cqClamp01((tu - 0.4) / 0.35));
    }
    for (const { leg, s } of legs) {
      const f = feet[s];
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
      leg.setAttribute("stroke", s === active ? "#facc15" : CQ_KIT.socks);
      f.setAttribute("stroke", s === active ? "#facc15" : "none");
      f.setAttribute("stroke-width", "0.8");
    }
    ball(bx, by, bx * 8);
    const fx = Math.min(Math.max(px, 160 / zoom), CQ_W - 160 / zoom);
    cam.setAttribute("transform", `translate(160,92) scale(${zoom}) translate(${(-fx).toFixed(2)},${-midY})`);
    if (say.textContent !== text) say.textContent = text;
    const legNow = legNames[seg.kind === "back" || (seg.kind === "turn" && seg.from === 0 && u > 0.5) || (seg.kind === "turn" && seg.from === 180 && u <= 0.5) ? "l" : "r"];
    if (legLabel.textContent !== legNow) legLabel.textContent = legNow;
    const done = seg.kind === "turn" && seg.from === 180 && u >= 1 ? 1 : 0;
    count((round % 9) + done, svg.querySelector(".a-ball"));
  });
});
