/* Cavadinha: a bola sobe por cima da cadeira (o goleiro) e cai dentro do gol. */

cqRegisterAnim("chip", (box, opts) => {
  const ballX = 130;
  const chairX = 228;
  const goalX = 262;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      ${cqChairSvg(chairX)}
      ${cqNoteSvg(chairX, CQ_GROUND - 48, opts.pick(["goleiro", "keeper", "portero"]))}
      <g class="a-hit">${cqGoalSvg(goalX)}</g>`,
    // Soft and high: the ball drops just behind the "keeper".
    flight: (u) => cqArc(ballX, CQ_GROUND - 6, goalX + 18, CQ_GROUND - 6, 62, u),
    flightT: 1.0,
    flash: ".a-hit",
  });
});
