/* Bate-pronto: solta a bola das mãos e chuta antes de ela tocar o chão. */

cqRegisterAnim("volley", (box, opts) => {
  const hipX = 120;
  const wallX = 274;
  const handY = 80;
  const dropAt = 0.5;
  const hitAt = 0.82;
  const wallT = 0.4;
  const cycle = 2.8;
  const gravity = 820;
  const hold = { ...CQ_POSE.stand, armF: [-80, -10], armB: [-72, -12] };
  const frames = [
    { t: 0, x: hipX, pose: hold },
    { t: dropAt, x: hipX, pose: hold },
    { t: 0.72, x: hipX, pose: CQ_POSE.kickBack },
    { t: hitAt, x: hipX, pose: CQ_POSE.kickHit },
    { t: 1.3, x: hipX, pose: CQ_POSE.kickHit },
    { t: 1.9, x: hipX, pose: CQ_POSE.stand },
    { t: 2.6, x: hipX, pose: hold },
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqWallSvg(wallX)}
    <g class="a-hit">
      <circle cx="${wallX + 4}" cy="78" r="13" fill="none" stroke="#facc15" stroke-width="3" />
      <circle cx="${wallX + 4}" cy="78" r="4" fill="#facc15" />
    </g>
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");
  const hand = { x: hipX + 27, y: handY };
  const contact = { x: hipX + 30, y: handY + 0.5 * gravity * (hitAt - dropAt) ** 2 };

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const st = cqKeys(frames, t);
    rig.pose(st.x, 1, st.pose);

    if (t < dropAt || t > 2.5) ball(hand.x, hand.y, 0);
    else if (t < hitAt) {
      const dt = t - dropAt;
      ball(cqLerp(hand.x, contact.x, dt / (hitAt - dropAt)), hand.y + 0.5 * gravity * dt * dt, 0);
    } else if (t < hitAt + wallT) {
      const p = cqArc(contact.x, contact.y, wallX - 6, 78, 8, (t - hitAt) / wallT);
      ball(p.x, p.y, (t - hitAt) * 900);
    } else {
      // Bounces off the wall and drops back onto the grass.
      const u = cqClamp01((t - hitAt - wallT) / 0.6);
      ball(cqLerp(wallX - 6, wallX - 46, u), cqLerp(78, CQ_GROUND - 6, u * u), -u * 300);
    }
    count((round % 9) + (t >= hitAt + wallT ? 1 : 0), target);
  });
});
