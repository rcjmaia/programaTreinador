/* Domínio no peito: bola alta, abre os braços, arqueia o peito para trás e a bola cai nos pés. */

cqRegisterAnim("chest", (box, opts) => {
  const hipX = 150;
  const y = CQ_GROUND - 6;
  const hand = { x: hipX + 12, y: 52 };
  // Chest in the leaning-back pose, a little in front of the body.
  const chestSpot = { x: hipX + 4, y: CQ_GROUND - 35 - 24 };
  const restX = hipX + 18;
  const toss = { ...CQ_POSE.stand, armF: [-170, -10], armB: [-150, -10] };
  const line = cqTimeline([
    { kind: "toss", dur: 0.35 },
    { kind: "air", dur: 1.0 },
    { kind: "drop", dur: 0.45 },
    { kind: "rest", dur: 0.6 },
  ], 0.3);

  box.innerHTML = cqSceneSvg(opts.label, `
    <rect class="a-hit" x="${restX - 14}" y="${CQ_GROUND}" width="28" height="3" fill="rgba(250, 204, 21, 0.6)" />
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const zone = svg.querySelector(".a-hit");

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    if (seg.kind === "toss") {
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.stand, toss, u));
      ball(cqLerp(hipX + 10, hand.x, u), cqLerp(CQ_GROUND - 40, hand.y, u), 0);
    } else if (seg.kind === "air") {
      rig.pose(hipX, 1, cqMixPose(toss, CQ_POSE.chest, cqClamp01((u - 0.3) / 0.6)));
      const p = cqArc(hand.x, hand.y, chestSpot.x + 6, chestSpot.y, 60, u);
      ball(p.x, p.y, 0);
    } else if (seg.kind === "drop") {
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.chest, CQ_POSE.ready, u));
      ball(cqLerp(chestSpot.x + 6, restX, u), cqLerp(chestSpot.y, y, u * u), u * 90);
    } else {
      rig.pose(hipX, 1, CQ_POSE.ready);
      ball(restX, y, 90);
    }
    count((round % 9) + (seg.kind === "rest" ? 1 : 0), zone);
  });
});
