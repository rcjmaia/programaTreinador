/* Chute de longe: chute firme de 15 passos, a bola entra alta no gol. */

cqRegisterAnim("longshot", (box, opts) => {
  const ballX = 80;
  const goalX = 270;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      <g class="a-hit">${cqGoalSvg(goalX)}</g>
      ${cqNoteSvg((ballX + goalX) / 2, 160, `← 15 ${opts.steps} →`)}`,
    flight: (u) => cqArc(ballX, CQ_GROUND - 6, goalX + 16, CQ_GROUND - 30, 30, u),
    flightT: 0.75,
    flash: ".a-hit",
  });
});
