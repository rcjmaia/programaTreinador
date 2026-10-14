/* Parede com os dois pés: um passe com o direito, o próximo com o esquerdo. */

cqRegisterAnim("twofeet", (box, opts) => {
  const hipX = 196;
  const wallX = 262;
  const restX = hipX + 18;
  const hitAt = 0.32;
  const wallAt = 0.62;
  const backAt = 0.95;
  const cycle = 1.25;
  const y = CQ_GROUND - 6;
  const mk = (leg, back, hit, trap) => ({
    back: { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, [leg]: back, armF: [-25, -20], armB: [25, -20] },
    hit: { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, lean: -4, [leg]: hit, armF: [25, -20], armB: [-25, -20] },
    trap: { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, [leg]: trap },
  });
  const feet = [mk("legF", [22, 30], [-35, -5], [-22, 26]), mk("legB", [22, 30], [-35, -5], [-22, 26])];
  const names = [opts.pick(["direito", "right", "derecho"]), opts.pick(["esquerdo", "left", "izquierdo"])];

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqWallSvg(wallX)}</g>
    <text x="${hipX - 46}" y="78" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(150, 160, `2 ${opts.steps}`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const wall = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const f = feet[round % 2];
    const frames = [
      { t: 0, x: hipX, pose: CQ_POSE.stand },
      { t: 0.22, x: hipX, pose: f.back },
      { t: hitAt, x: hipX, pose: f.hit },
      { t: 0.6, x: hipX, pose: CQ_POSE.stand },
      { t: 0.85, x: hipX, pose: f.trap },
      { t: backAt, x: hipX, pose: f.trap },
      { t: cycle, x: hipX, pose: CQ_POSE.stand },
    ];
    rig.pose(hipX, 1, cqKeys(frames, t).pose);

    if (t < hitAt) ball(restX, y);
    else if (t < wallAt) ball(cqLerp(restX, wallX - 6, (t - hitAt) / (wallAt - hitAt)), y);
    else if (t < backAt) ball(cqLerp(wallX - 6, restX, (t - wallAt) / (backAt - wallAt)), y);
    else ball(restX, y);
    const name = names[round % 2];
    if (say.textContent !== name) say.textContent = name;
    count(round % 40 + (t >= backAt ? 1 : 0), wall);
  });
});
