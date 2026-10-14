/* Chute de primeira: alguém rola a bola e ele chuta sem dominar, direto no gol. */

cqRegisterAnim("firsttime", (box, opts) => {
  const ballX = 150;
  const goalX = 268;
  const helperX = 40;
  const roll = { from: helperX + 18, start: 0.35 };
  const rollPose = { ...CQ_POSE.bend, lean: 45, armF: [-50, 0] };
  let helperRig = null;
  return cqKickScene(box, opts, {
    ballX,
    runUp: false,
    scenery: `<g class="a-hit">${cqGoalSvg(goalX)}</g>`,
    helper: cqPlayerSvg(CQ_KIT_HELPER),
    onFrame: (svg, t) => {
      helperRig ??= cqPlayerRig(svg.querySelector(".a-player"));
      // The helper bends and rolls the ball, then stands to watch.
      const k = t < roll.start ? cqClamp01(t / roll.start) : 1 - cqClamp01((t - roll.start) / 0.5);
      helperRig.pose(helperX, 1, cqMixPose(CQ_POSE.stand, rollPose, k));
    },
    before: (t) => (t < roll.start
      ? { x: roll.from, y: CQ_GROUND - 6 }
      : { x: cqLerp(roll.from, ballX, (t - roll.start) / (1 - roll.start)), y: CQ_GROUND - 6 }),
    flight: (u) => cqArc(ballX, CQ_GROUND - 6, goalX + 18, CQ_GROUND - 20, 18, u),
    flightT: 0.5,
    flash: ".a-hit",
  });
});
