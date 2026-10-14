/* Chute colocado: de chapa, rasteiro, entre o chinelo e a trave. */

cqRegisterAnim("placed", (box, opts) => {
  const ballX = 120;
  const goalX = 262;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      ${cqGoalSvg(goalX)}
      <g class="a-hit">
        <rect x="${goalX + 2}" y="${CQ_GROUND - 3}" width="9" height="3" fill="rgba(250, 204, 21, 0.6)" />
        ${cqFlipflopSvg(goalX + 13, "#ef4444")}
      </g>
      ${cqNoteSvg((ballX + goalX) / 2, 160, `← 7 ${opts.steps} →`)}
      ${cqNoteSvg(goalX + 8, CQ_GROUND - 54, opts.pick(["entre o chinelo e a trave", "between flip-flop and post", "entre chancla y palo"]))}`,
    flight: (u) => ({ x: cqLerp(ballX, goalX + 7, u), y: CQ_GROUND - 6 }),
    flightT: 0.6,
    flash: ".a-hit",
  });
});
