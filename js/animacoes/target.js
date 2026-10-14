/* Chute no alvo: de 5 passos, a bola passa entre os pés da cadeira. */

cqRegisterAnim("target", (box, opts) => {
  const ballX = 130;
  const chairX = 266;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      <g class="a-hit">${cqChairSvg(chairX)}</g>
      ${cqNoteSvg((ballX + chairX) / 2, 160, `← 5 ${opts.steps} →`)}`,
    flight: (u) => cqArc(ballX, CQ_GROUND - 6, chairX, CQ_GROUND - 8, 10, u),
    flightT: 0.55,
    flash: ".a-hit",
  });
});
