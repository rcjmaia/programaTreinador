/* Falta com efeito (vista de cima): bola a 10 passos do gol, cadeira (barreira) a 6 passos da bola.
   Chute com a parte de dentro do pé: a bola contorna a barreira fazendo a curva e entra no canto. */

cqRegisterAnim("freekick", (box, opts) => {
  const midY = 95;
  const step = 24;
  const ballX = 50;
  const chairX = ballX + 6 * step;
  const goalX = ballX + 10 * step;
  const post = 30;
  const end = { x: goalX + 6, y: midY - post + 8 };
  const ctrl = { x: chairX, y: midY - 72 };
  const at = (u) => ({
    x: (1 - u) ** 2 * ballX + 2 * (1 - u) * u * ctrl.x + u * u * end.x,
    y: (1 - u) ** 2 * midY + 2 * (1 - u) * u * ctrl.y + u * u * end.y,
  });
  const line = cqTimeline([
    { kind: "run", dur: 0.7 },
    { kind: "kick", dur: 0.15 },
    { kind: "fly", dur: 1.1 },
  ], 1.1);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-hit"><rect x="${goalX}" y="${midY - post}" width="12" height="${post * 2}" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" /></g>
    <rect x="${chairX - 7}" y="${midY - 9}" width="14" height="18" rx="2" fill="#92400e" />
    <rect x="${chairX + 5}" y="${midY - 9}" width="4" height="18" rx="1" fill="#78350f" />
    <path d="M${ballX} ${midY} Q${ctrl.x} ${ctrl.y} ${end.x} ${end.y}" fill="none" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.45" />
    ${cqNoteSvg((ballX + chairX) / 2, 150, `← 6 ${opts.steps} →`)}
    ${cqNoteSvg((ballX + goalX) / 2, 164, `← 10 ${opts.steps} ${opts.pick(["até o gol", "to goal", "al arco"])} →`)}
    ${cqNoteSvg(chairX, midY + 22, opts.pick(["barreira", "wall", "barrera"]))}
    <text x="150" y="40" text-anchor="middle" class="a-note a-say"></text>
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const ballEl = svg.querySelector(".a-ball-pos");
  const count = cqCounter(svg, opts.unit);
  const goal = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const word = opts.pick(["parte de dentro do pé: a bola faz a curva", "inside of the foot: the ball curls", "interior del pie: el balón hace la curva"]);
  // The ball grows mid-flight: it goes up over and around the wall.
  const ball = (x, y, scale = 1, spin = 0) => ballEl.setAttribute("transform", `translate(${x},${y}) scale(${scale}) rotate(${spin})`);

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    if (seg.kind === "run") {
      const x = cqLerp(10, ballX - 14, u);
      cqTopPlace(me, x, midY - 6, 10, x / 4);
      ball(ballX, midY);
    } else if (seg.kind === "kick") {
      cqTopPlace(me, ballX - 14, midY - 6, 10, 0);
      ball(ballX, midY);
    } else {
      cqTopPlace(me, ballX - 12, midY - 6, 10, 0);
      const p = at(u);
      ball(p.x, p.y, 1 + 0.5 * Math.sin(Math.PI * u), u * -900);
    }

    const text = seg.kind === "run" ? "" : word;
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), goal);
  });
});
