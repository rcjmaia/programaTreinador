/* Chute com curva (vista de cima): corre, chuta de 10 passos e a bola faz a curva longe do goleiro,
   até o alvo no canto. args.side: "out" = trivela (parte de fora do pé direito, curva para a direita
   dele, que é para baixo na tela); "in" = parte de dentro do pé direito (curva para cima). */

cqRegisterAnim("curva", (box, opts) => {
  const out = opts.args?.side === "out";
  const midY = 95;
  const ballX = 70;
  const goalX = 290;
  const post = 30;
  const end = { x: goalX + 6, y: out ? midY + post - 8 : midY - post + 8 };
  const ctrl = { x: 190, y: out ? midY - 62 : midY + 62 };
  const at = (u) => ({
    x: (1 - u) ** 2 * ballX + 2 * (1 - u) * u * ctrl.x + u * u * end.x,
    y: (1 - u) ** 2 * midY + 2 * (1 - u) * u * ctrl.y + u * u * end.y,
  });
  const line = cqTimeline([
    { kind: "run", dur: 0.8 },
    { kind: "kick", dur: 0.15 },
    { kind: "fly", dur: 1.0 },
  ], 1.1);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <rect x="${goalX}" y="${midY - post}" width="12" height="${post * 2}" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
    <g class="a-hit">${cqTopConeSvg(end.x, end.y, 5)}</g>
    <path d="M${ballX} ${midY} Q${ctrl.x} ${ctrl.y} ${end.x} ${end.y}" fill="none" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.45" />
    ${cqNoteSvg((ballX + goalX) / 2, 162, `← 10 ${opts.steps} →`)}
    <text x="150" y="52" text-anchor="middle" class="a-note a-say"></text>
    ${cqTopPlayerSvg(CQ_KIT_GK, "a-top a-gk")}
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const gk = svg.querySelector(".a-gk");
  const ballEl = svg.querySelector(".a-ball-pos");
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const word = opts.pick(out
    ? ["trivela: parte de fora do pé", "outside of the foot", "trivela: exterior del pie"]
    : ["parte de dentro, perto dos dedos", "inside of the foot, near the toes", "interior, cerca de los dedos"]);
  // The ball grows a little mid-flight: it rises a bit, but stays a low shot.
  const ball = (x, y, scale = 1, spin = 0) => ballEl.setAttribute("transform", `translate(${x},${y}) scale(${scale}) rotate(${spin})`);

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    if (seg.kind === "run") {
      const x = cqLerp(24, ballX - 14, u);
      cqTopPlace(me, x, midY - 6, 10, x / 4);
      ball(ballX, midY);
    } else if (seg.kind === "kick") {
      cqTopPlace(me, ballX - 14, midY - 6, 10, 0);
      ball(ballX, midY);
    } else {
      cqTopPlace(me, ballX - 12, midY - 6, 10, 0);
      const p = at(u);
      ball(p.x, p.y, 1 + 0.35 * Math.sin(Math.PI * u), u * (out ? 900 : -900));
    }
    // The keeper stays in the middle and only reacts late: the curve takes the ball away from him.
    const reach = seg.kind === "fly" ? cqClamp01((u - 0.6) / 0.4) * (out ? 10 : -10) : 0;
    cqTopPlace(gk, goalX - 6, midY + reach, 180, 0);

    const text = seg.kind === "run" ? "" : word;
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), target);
  });
});
