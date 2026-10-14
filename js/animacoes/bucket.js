/* Bola pingando no alvo (args.dist passos): solta a bola, deixa quicar uma vez
   e passa antes do segundo quique, direto para dentro do balde. */

cqRegisterAnim("bucket", (box, opts) => {
  const dist = opts.args?.dist || 3;
  const hipX = 70;
  const bucketX = Math.min(290, 150 + dist * 17);
  const hand = { x: hipX + 27, y: 80 };
  const contact = { x: hipX + 30, y: CQ_GROUND - 20 };
  const bounceX = hipX + 30;
  const y = CQ_GROUND - 6;
  const hold = { ...CQ_POSE.stand, armF: [-80, -10], armB: [-72, -12] };
  const line = cqTimeline([
    { kind: "hold", dur: 0.5 },
    { kind: "drop", dur: 0.32 },
    { kind: "bounce", dur: 0.36 },
    { kind: "fly", dur: 0.75 },
    { kind: "in", dur: 0.25 },
  ], 0.9);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqBucketSvg(bucketX)}</g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    <path d="M${bucketX - 10} ${CQ_GROUND - 20} L${bucketX + 10} ${CQ_GROUND - 20} L${bucketX + 7} ${CQ_GROUND} L${bucketX - 7} ${CQ_GROUND} Z" fill="#2563eb" />
    ${cqNoteSvg((hipX + bucketX) / 2, 160, `← ${dist} ${opts.steps} →`)}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    if (seg.kind === "hold") {
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.stand, hold, cqClamp01(u * 2)));
      ball(hand.x, hand.y, 0);
    } else if (seg.kind === "drop") {
      rig.pose(hipX, 1, cqMixPose(hold, CQ_POSE.kickBack, u));
      ball(cqLerp(hand.x, bounceX, u), cqLerp(hand.y, y, u * u), 0);
    } else if (seg.kind === "bounce") {
      // One bounce, then the foot meets it on the way down.
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.kickBack, CQ_POSE.kickHit, cqClamp01((u - 0.6) / 0.4)));
      const p = cqArc(bounceX, y, contact.x, contact.y, 22, u);
      ball(p.x, p.y, 0);
    } else if (seg.kind === "fly") {
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.kickHit, CQ_POSE.stand, cqClamp01(u * 1.5 - 0.5)));
      const p = cqArc(contact.x, contact.y, bucketX, CQ_GROUND - 26, 30 + dist * 3, u);
      ball(p.x, p.y, u * 500);
    } else {
      rig.pose(hipX, 1, CQ_POSE.stand);
      ball(bucketX, cqLerp(CQ_GROUND - 26, CQ_GROUND - 10, u), 500);
    }
    count((round % 9) + (seg.kind === "in" && u > 0.3 ? 1 : 0), target);
  });
});
