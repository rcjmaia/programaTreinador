/* Domina e finaliza: joga a bola para cima, amortece (1º toque) e chuta no alvo (2º toque).
   args: { dist, part: "foot" (parte de dentro do pé) | "thigh" (coxa) }. */

cqRegisterAnim("controlshot", (box, opts) => {
  const dist = opts.args?.dist || 5;
  const foot = opts.args?.part === "foot";
  const hipX = 130;
  const hipY = CQ_GROUND - 35;
  const chairX = 270;
  const y = CQ_GROUND - 6;
  const hand = { x: hipX + 12, y: 52 };
  const thighSpot = foot ? { x: hipX + 24, y: CQ_GROUND - 16 } : { x: hipX + 12, y: hipY - 9 };
  const groundX = hipX + 20;
  const toss = { ...CQ_POSE.stand, armF: [-150, -10], armB: [-20, -20] };
  const thigh = foot
    ? { ...CQ_POSE.stand, legF: [-50, 20], armF: [-45, -30], armB: [40, -30] }
    : { ...CQ_POSE.stand, legF: [-90, 90], armF: [-45, -30], armB: [40, -30] };
  const line = cqTimeline([
    { kind: "toss", dur: 0.35 },
    { kind: "air", dur: 0.8 },
    { kind: "cushion", dur: 0.4 },
    { kind: "back", dur: 0.22 },
    { kind: "hit", dur: 0.12 },
    { kind: "fly", dur: 0.55 },
  ], 0.9);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqChairSvg(chairX)}</g>
    <text x="${hipX}" y="40" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(205, 160, `← ${dist} ${opts.steps} →`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const touches = [opts.pick(foot
    ? ["1º toque: domina com o pé", "1st touch: control with the foot", "1er toque: controla con el pie"]
    : ["1º toque: domina na coxa", "1st touch: control on the thigh", "1er toque: controla con el muslo"]), opts.pick(["2º toque: chuta", "2nd touch: shoot", "2º toque: tira"])];

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let text = "";
    if (seg.kind === "toss") {
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.stand, toss, u));
      ball(cqLerp(hipX + 10, hand.x, u), cqLerp(CQ_GROUND - 40, hand.y, u), 0);
    } else if (seg.kind === "air") {
      rig.pose(hipX, 1, cqMixPose(toss, thigh, cqClamp01((u - 0.4) / 0.6)));
      const p = cqArc(hand.x, hand.y, thighSpot.x, thighSpot.y, 30, u);
      ball(p.x, p.y, 0);
    } else if (seg.kind === "cushion") {
      // The thigh drops with the ball to kill its speed.
      rig.pose(hipX, 1, cqMixPose(thigh, CQ_POSE.ready, u));
      ball(cqLerp(thighSpot.x, groundX, u), cqLerp(thighSpot.y, y, u * u), u * 90);
      text = touches[0];
    } else if (seg.kind === "back" || seg.kind === "hit") {
      rig.pose(hipX, 1, seg.kind === "back" ? cqMixPose(CQ_POSE.ready, CQ_POSE.kickBack, u) : cqMixPose(CQ_POSE.kickBack, CQ_POSE.kickHit, u));
      ball(groundX, y, 90);
      text = touches[1];
    } else {
      rig.pose(hipX, 1, cqMixPose(CQ_POSE.kickHit, CQ_POSE.stand, cqClamp01(u * 1.5 - 0.5)));
      const p = cqArc(groundX, y, chairX, CQ_GROUND - 8, 10, u);
      ball(p.x, p.y, u * 720);
      text = touches[1];
    }
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), target);
  });
});
