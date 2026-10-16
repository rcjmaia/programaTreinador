/* Domina com um, passa com o outro: o pé que domina a bola na volta é o oposto do que passa. */

cqRegisterAnim("twofeet", (box, opts) => {
  const dist = opts.args?.dist || 5;
  const wallX = 262;
  const hipX = wallX - 50 - dist * 8;
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
  const passWord = opts.pick(["passa com o", "pass with the", "pasa con el"]);
  const trapWord = opts.pick(["domina com o", "control with the", "controla con el"]);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqWallSvg(wallX)}</g>
    <text x="${hipX - 66}" y="78" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(hipX - 66, 92, opts.pick(["parte de dentro do pé", "inside of the foot", "interior del pie"]))}
    ${cqNoteSvg((hipX + wallX) / 2, 160, `← ${dist} ${opts.steps} →`)}
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
    // The foot that traps on the way back is the one that just passed, so the next pass uses the other foot.
    const name = `${t < 0.6 ? passWord : trapWord} ${names[round % 2]}`;
    if (say.textContent !== name) say.textContent = name;
    count(round % 40 + (t >= backAt ? 1 : 0), wall);
  });
});
