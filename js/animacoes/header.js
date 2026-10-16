/* Cabeçada no gol: joga a bola para cima e cabeceia para baixo, no canto do gol. */

cqRegisterAnim("header", (box, opts) => {
  const hipX = 186;
  const goalX = 262;
  const tossAt = 0.3;
  const hitAt = 1.15;
  const goalT = 0.4;
  const cycle = 2.7;
  const toss = { ...CQ_POSE.stand, armF: [-150, -10], armB: [-20, -20] };
  const loadUp = { ...CQ_POSE.ready, lean: -12, armF: [-60, -40], armB: [50, -30] };
  const frames = [
    { t: 0, x: hipX, pose: CQ_POSE.stand },
    { t: tossAt, x: hipX, pose: toss },
    { t: 0.65, x: hipX, pose: CQ_POSE.ready },
    { t: 0.95, x: hipX, pose: loadUp },
    { t: hitAt, x: hipX, pose: CQ_POSE.header },
    { t: 1.7, x: hipX, pose: CQ_POSE.header },
    { t: 2.3, x: hipX, pose: CQ_POSE.stand },
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqGoalSvg(goalX)}</g>
    ${cqNoteSvg((hipX + goalX) / 2, 160, `← 5 ${opts.steps} →`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const goal = svg.querySelector(".a-hit");
  const hand = { x: hipX + 12, y: 52 };
  // Forehead in the header pose (torso leaning forward 24 degrees).
  const head = { x: hipX + 25, y: CQ_GROUND - 35 - 38 };
  const corner = { x: goalX + 22, y: CQ_GROUND - 6 };

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    rig.pose(hipX, 1, cqKeys(frames, t).pose);

    if (t < tossAt) ball(cqLerp(hipX + 10, hand.x, t / tossAt), cqLerp(CQ_GROUND - 40, hand.y, t / tossAt), 0);
    else if (t < hitAt) {
      const p = cqArc(hand.x, hand.y, head.x, head.y, 22, (t - tossAt) / (hitAt - tossAt));
      ball(p.x, p.y, 0);
    } else if (t < hitAt + goalT) {
      const u = (t - hitAt) / goalT;
      ball(cqLerp(head.x, corner.x, u), cqLerp(head.y, corner.y, u), u * 500);
    } else ball(corner.x, corner.y, 500);
    count((round % 9) + (t >= hitAt + goalT ? 1 : 0), goal);
  });
});
