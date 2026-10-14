/* Parede de primeira: a bola volta da parede e ele devolve sem dominar, trocando de pé a cada passe. */

cqRegisterAnim("weak", (box, opts) => {
  const hipX = 196;
  const wallX = 262;
  const restX = hipX + 18;
  const hitAt = 0.2;
  const wallAt = 0.48;
  const cycle = 0.8;
  const y = CQ_GROUND - 6;
  const mk = (leg) => ({
    back: { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, [leg]: [18, 26], armF: [-25, -20], armB: [25, -20] },
    hit: { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, lean: -4, [leg]: [-32, -5], armF: [25, -20], armB: [-25, -20] },
  });
  const feet = [mk("legF"), mk("legB")];
  const names = [opts.pick(["direito", "right", "derecho"]), opts.pick(["esquerdo", "left", "izquierdo"])];

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqWallSvg(wallX)}</g>
    <text x="${hipX - 46}" y="78" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(150, 160, `${opts.pick(["de primeira", "one touch", "de primera"])} · 2 ${opts.steps}`)}
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
    rig.pose(hipX, 1, cqKeys([
      { t: 0, x: hipX, pose: CQ_POSE.stand },
      { t: 0.1, x: hipX, pose: f.back },
      { t: hitAt, x: hipX, pose: f.hit },
      { t: 0.45, x: hipX, pose: CQ_POSE.stand },
      { t: cycle, x: hipX, pose: CQ_POSE.stand },
    ], t).pose);

    // The ball never stops: it arrives at the end of a round and leaves on the next kick.
    if (t < hitAt) ball(restX, y);
    else if (t < wallAt) ball(cqLerp(restX, wallX - 6, (t - hitAt) / (wallAt - hitAt)), y);
    else ball(cqLerp(wallX - 6, restX, (t - wallAt) / (cycle - wallAt)), y);

    const name = names[round % 2];
    if (say.textContent !== name) say.textContent = name;
    count(round % 40 + (t >= wallAt ? 1 : 0), wall);
  });
});
