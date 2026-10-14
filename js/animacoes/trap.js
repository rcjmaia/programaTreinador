/* Domínio do alto: joga a bola para cima e amortece com o pé, a bola fica pertinho.
   args.weak: só com o pé fraco. */

cqRegisterAnim("trap", (box, opts) => {
  const hipX = 150;
  const hipY = CQ_GROUND - 35;
  const y = CQ_GROUND - 6;
  const hand = { x: hipX + 12, y: 52 };
  const touchSpot = { x: hipX + 24, y: hipY + 16 };
  const restX = hipX + 20;
  const toss = { ...CQ_POSE.stand, armF: [-150, -10], armB: [-20, -20] };
  const meet = { ...CQ_POSE.stand, legF: [-70, 60], armF: [-45, -30], armB: [40, -30] };
  const line = cqTimeline([
    { kind: "toss", dur: 0.35 },
    { kind: "air", dur: 0.85 },
    { kind: "cushion", dur: 0.35 },
    { kind: "rest", dur: 0.6 },
  ], 0.3);

  box.innerHTML = cqSceneSvg(opts.label, `
    <rect class="a-hit" x="${restX - 14}" y="${CQ_GROUND}" width="28" height="3" fill="rgba(250, 204, 21, 0.6)" />
    ${cqNoteSvg(restX, 160, `≤ 1 ${opts.steps}${opts.args?.weak ? ` · ${opts.pick(["pé fraco", "weak foot", "pierna débil"])}` : ""}`)}
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
      // The foot rises to meet the ball as it comes down.
      rig.pose(hipX, 1, cqMixPose(toss, meet, cqClamp01((u - 0.5) / 0.5)));
      const p = cqArc(hand.x, hand.y, touchSpot.x, touchSpot.y, 34, u);
      ball(p.x, p.y, 0);
    } else if (seg.kind === "cushion") {
      // Foot and ball go down together: no bounce.
      rig.pose(hipX, 1, cqMixPose(meet, CQ_POSE.ready, u));
      ball(cqLerp(touchSpot.x, restX, u), cqLerp(touchSpot.y, y, u), u * 60);
    } else {
      rig.pose(hipX, 1, CQ_POSE.ready);
      ball(restX, y, 60);
    }
    count((round % 9) + (seg.kind === "rest" ? 1 : 0), zone);
  });
});
