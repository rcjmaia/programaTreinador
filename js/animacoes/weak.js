/* Parede do pé fraco: passa na parede, a bola volta e ele domina com o mesmo pé. */

cqRegisterAnim("weak", (box, opts) => {
  const hipX = 196;
  const wallX = 262;
  const restX = hipX + 18;
  const hitAt = 0.32;
  const wallAt = 0.62;
  const backAt = 0.95;
  const cycle = 1.25;
  const passBack = { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, legF: [22, 30], armF: [-25, -20], armB: [25, -20] };
  const passHit = { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, lean: -4, legF: [-35, -5], armF: [25, -20], armB: [-25, -20] };
  const trap = { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, legF: [-22, 26] };
  const frames = [
    { t: 0, x: hipX, pose: CQ_POSE.stand },
    { t: 0.22, x: hipX, pose: passBack },
    { t: hitAt, x: hipX, pose: passHit },
    { t: 0.6, x: hipX, pose: CQ_POSE.stand },
    { t: 0.85, x: hipX, pose: trap },
    { t: backAt, x: hipX, pose: trap },
    { t: cycle, x: hipX, pose: CQ_POSE.stand },
  ];
  const weak = opts.pick(["pé fraco", "weak foot", "pierna débil"]);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqWallSvg(wallX)}</g>
    ${cqNoteSvg(150, 160, `${weak} · 2 ${opts.steps}`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const wall = svg.querySelector(".a-hit");
  const y = CQ_GROUND - 6;

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    rig.pose(hipX, 1, cqKeys(frames, t).pose);

    if (t < hitAt) ball(restX, y);
    else if (t < wallAt) ball(cqLerp(restX, wallX - 6, (t - hitAt) / (wallAt - hitAt)), y);
    else if (t < backAt) ball(cqLerp(wallX - 6, restX, (t - wallAt) / (backAt - wallAt)), y);
    else ball(restX, y);
    count(round % 40 + (t >= backAt ? 1 : 0), wall);
  });
});
