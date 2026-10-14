/* Interceptação: a pessoa passa a bola na parede e ele entra na frente para cortar com o pé. */

cqRegisterAnim("intercept", (box, opts) => {
  const helperX = 50;
  const wallX = 280;
  const meX = 200;
  const y = CQ_GROUND - 6;
  const startBall = helperX + 18;
  // Facing the passer, his front foot reaches about 30 ahead of the hip.
  const cutX = meX - 30;
  const passBack = { ...CQ_POSE.stand, legF: [22, 30] };
  const passHit = { ...CQ_POSE.stand, lean: -4, legF: [-35, -5] };
  const wait = { ...CQ_POSE.ready, lean: 14 };
  const block = { ...CQ_POSE.ready, legF: [-55, 10], lean: -4, armF: [-40, -20], armB: [50, -20] };
  const line = cqTimeline([
    { kind: "load", dur: 0.3 },
    { kind: "pass", dur: 0.12 },
    { kind: "roll", dur: 0.55 },
    { kind: "away", dur: 0.6 },
  ], 0.6);

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqWallSvg(wallX)}
    ${cqPlayerSvg(CQ_KIT_HELPER)}
    <g class="a-me">${cqPlayerSvg()}</g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const helper = cqPlayerRig(svg.querySelector(".a-player"));
  const me = cqPlayerRig(svg.querySelector(".a-me"));
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    if (seg.kind === "load") helper.pose(helperX, 1, cqMixPose(CQ_POSE.stand, passBack, u));
    else if (seg.kind === "pass") helper.pose(helperX, 1, cqMixPose(passBack, passHit, u));
    else helper.pose(helperX, 1, cqMixPose(passHit, CQ_POSE.stand, cqClamp01(u * 2)));

    if (seg.kind === "roll") me.pose(meX, -1, cqMixPose(wait, block, cqClamp01((u - 0.4) / 0.6)));
    else if (seg.kind === "away") me.pose(meX, -1, cqMixPose(block, CQ_POSE.ready, u));
    else me.pose(meX, -1, wait);

    if (seg.kind === "load" || seg.kind === "pass") ball(startBall, y, 0);
    else if (seg.kind === "roll") ball(cqLerp(startBall, cutX, u), y);
    else ball(cqLerp(cutX, cutX - 24, 1 - (1 - u) ** 2), y, -u * 200);
    count((round % 9) + (seg.kind === "away" && u > 0.2 ? 1 : 0));
  });
});
