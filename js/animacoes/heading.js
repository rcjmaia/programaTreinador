/* Cabeceio de defesa: joga para cima, salta e cabeceia alto e longe, acima da marca na parede. */

cqRegisterAnim("heading", (box, opts) => {
  const hipX = 170;
  const wallX = 266;
  const markY = 76;
  const tossAt = 0.3;
  const hitAt = 1.15;
  const wallT = 0.45;
  const cycle = 2.9;
  const lift = 9;
  const toss = { ...CQ_POSE.stand, armF: [-150, -10], armB: [-20, -20] };
  const headUp = { hipY: CQ_GROUND - 35, lean: -14, legF: [-20, 40], legB: [10, 50], armF: [-100, -20], armB: [-60, -20] };
  const frames = [
    { t: 0, x: hipX, pose: CQ_POSE.stand },
    { t: tossAt, x: hipX, pose: toss },
    { t: 0.8, x: hipX, pose: CQ_POSE.crouch },
    { t: hitAt, x: hipX, pose: headUp, lift },
    { t: 1.45, x: hipX, pose: headUp, lift },
    { t: 1.7, x: hipX, pose: CQ_POSE.land },
    { t: 2.3, x: hipX, pose: CQ_POSE.stand },
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqWallSvg(wallX)}
    <g class="a-hit">
      <rect x="${wallX}" y="${markY - 2}" width="${CQ_W - wallX}" height="4" fill="#facc15" />
    </g>
    ${cqNoteSvg(wallX - 30, markY + 3, "↑")}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const mark = svg.querySelector(".a-hit");
  const hand = { x: hipX + 12, y: 52 };
  // Forehead in the jump, leaning back a little so the ball goes up.
  const head = { x: hipX - 4, y: CQ_GROUND - 35 - lift - 48 };
  const hitWall = { x: wallX - 6, y: markY - 20 };

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const st = cqKeys(frames, t);
    rig.pose(hipX, 1, st.pose, st.lift);

    if (t < tossAt) ball(cqLerp(hipX + 10, hand.x, t / tossAt), cqLerp(CQ_GROUND - 40, hand.y, t / tossAt), 0);
    else if (t < hitAt) {
      const p = cqArc(hand.x, hand.y, head.x, head.y, 12, (t - tossAt) / (hitAt - tossAt));
      ball(p.x, p.y, 0);
    } else if (t < hitAt + wallT) {
      const p = cqArc(head.x, head.y, hitWall.x, hitWall.y, 8, (t - hitAt) / wallT);
      ball(p.x, p.y, (t - hitAt) * 800);
    } else {
      const u = cqClamp01((t - hitAt - wallT) / 0.7);
      ball(cqLerp(hitWall.x, hitWall.x - 40, u), cqLerp(hitWall.y, CQ_GROUND - 6, u * u), -u * 300);
    }
    count((round % 9) + (t >= hitAt + wallT ? 1 : 0), mark);
  });
});
