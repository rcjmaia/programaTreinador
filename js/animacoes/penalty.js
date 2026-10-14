/* Pênalti no cantinho: chute rasteiro no canto marcado com um chinelo. */

cqRegisterAnim("penalty", (box, opts) => {
  const ballX = 110;
  const goalX = 262;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      <g class="a-hit">${cqGoalSvg(goalX)}${cqFlipflopSvg(goalX + 24, "#ef4444", CQ_GROUND - 3)}</g>
      ${cqNoteSvg((ballX + goalX) / 2, 160, `← 7 ${opts.steps} →`)}`,
    flight: (u) => cqArc(ballX, CQ_GROUND - 6, goalX + 22, CQ_GROUND - 8, 4, u),
    flightT: 0.5,
    flash: ".a-hit",
  });
});
