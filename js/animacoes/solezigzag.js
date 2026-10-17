/* Puxadas de sola para os lados (vista de cima): de frente para o outro chinelo, a sola do pé direito rola a
   bola para a direita e a do esquerdo para a esquerda, sempre alternando. Vai andando para a frente e volta
   de costas, sem virar, fazendo o mesmo. Ida e volta vale 1. */

cqRegisterAnim("solezigzag", (box, opts) => {
  const k = 1.5;
  const zoom = 1.8;
  const midY = 92;
  const ahead = 16;
  const side = 7;
  const markA = 60;
  const markB = 260;
  const touches = 8;
  const d = (markB - markA) / touches;
  const line = cqTimeline([
    ...Array.from({ length: touches }, (_, i) => ({ kind: "go", i, dur: 0.45 })),
    { kind: "hold", dur: 0.3 },
    ...Array.from({ length: touches }, (_, i) => ({ kind: "back", i, dur: 0.5 })),
  ], 0.6);
  const flipflop = (x) => `<rect x="${x - 3}" y="${midY - 30}" width="6" height="12" rx="3" fill="#ef4444" />`;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      ${flipflop(markA)}
      ${flipflop(markB)}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
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
  const count = cqCounter(svg, opts.unit);
  const texts = {
    go: opts.pick(["vai de frente, rolando de lado com a sola", "go forwards, rolling it sideways with your sole", "ve de frente, rodando de lado con la suela"]),
    hold: opts.pick(["chegou no chinelo", "reached the flip-flop", "llegaste a la chancla"]),
    back: opts.pick(["volta de costas, puxando de lado com a sola", "come back walking backwards, rolling it sideways with your sole", "vuelve de espaldas, arrastrando de lado con la suela"]),
  };

  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x.toFixed(2));
    el.setAttribute("cy", y.toFixed(2));
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    const pad = t >= line.total - 0.6;
    let px;
    let bx;
    let by = midY - side;
    let lean = 0;
    foot(footL, 0, -4);
    foot(footR, 0, 4);
    if (seg.kind === "hold" || pad) {
      px = (seg.kind === "hold" ? markB : markA) - ahead;
      bx = px + ahead;
    } else {
      // Ball starting on the left (up on screen) is rolled right by the right sole, and the other way round.
      const dir = seg.kind === "go" ? 1 : -1;
      const from = seg.i % 2 === 0 ? -side : side;
      const x0 = (dir > 0 ? markA : markB) - ahead + dir * seg.i * d;
      px = x0 + dir * d * cqEase(u);
      const roll = cqEase(cqClamp01((u - 0.2) / 0.6));
      bx = x0 + ahead + dir * d * roll;
      by = midY + cqLerp(from, -from, roll);
      lean = Math.sin(Math.PI * u) * (from < 0 ? 1 : -1);
      const el = from < 0 ? footR : footL;
      const rest = from < 0 ? 4 : -4;
      const onBall = [(bx - px) / k, (by - midY - 2 * lean) / k];
      if (u < 0.2) {
        const e = cqEase(u / 0.2);
        foot(el, cqLerp(0, onBall[0], e), cqLerp(rest, onBall[1], e), cqLerp(1, 1.2, e));
      } else if (u < 0.8) {
        foot(el, onBall[0], onBall[1], 1.2);
      } else {
        const e = cqEase((u - 0.8) / 0.2);
        foot(el, cqLerp(onBall[0], 0, e), cqLerp(onBall[1], rest, e), cqLerp(1.2, 1, e));
      }
    }
    me.setAttribute("transform", `translate(${px.toFixed(2)},${(midY + 2 * lean).toFixed(2)}) rotate(${(6 * lean).toFixed(2)}) scale(${k})`);
    ball(bx, by, bx * 6 + by * 9);
    const fx = Math.min(Math.max(px + ahead / 2, 160 / zoom), CQ_W - 160 / zoom);
    cam.setAttribute("transform", `translate(160,92) scale(${zoom}) translate(${(-fx).toFixed(2)},${-midY})`);
    const text = texts[pad ? "hold" : seg.kind];
    if (say.textContent !== text) say.textContent = text;
    count((Math.floor(seconds / line.total) % 9) + (pad ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
