/* Parede com bexiga: passa a bola na parede de primeira (args.dist passos), sem parar a bola, enquanto mantém
   uma bexiga no ar, batendo nela com uma mão de cada vez. A bola e a bexiga têm ritmos diferentes, como no treino. */

cqRegisterAnim("balloonwall", (box, opts) => {
  const dist = opts.args?.dist || 5;
  const wallX = 290;
  const hipX = wallX - 50 - dist * 8;
  const restX = hipX + 18;
  const hitAt = 0.2;
  const wallAt = 0.55;
  const cycle = 1;
  const tap = 1.1;
  const y = CQ_GROUND - 6;
  const hipY = CQ_GROUND - 34;
  const ready = [-60, -40];
  const up = [-165, -15];
  const mk = (leg) => ({
    back: { ...CQ_POSE.stand, hipY, [leg]: [22, 30] },
    hit: { ...CQ_POSE.stand, hipY, lean: -4, [leg]: [-35, -5] },
  });
  const feet = [mk("legF"), mk("legB")];
  const hands = [opts.pick(["mão direita", "right hand", "mano derecha"]), opts.pick(["mão esquerda", "left hand", "mano izquierda"])];
  const balloonWord = opts.pick(["bexiga", "balloon", "globo"]);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqWallSvg(wallX)}</g>
    <text x="${hipX - 100}" y="78" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(hipX - 100, 92, opts.pick(["de primeira: parte de dentro do pé", "one touch: inside of the foot", "de primera: interior del pie"]))}
    ${cqNoteSvg((hipX + wallX) / 2, 160, `← ${dist} ${opts.steps} →`)}
    ${cqPlayerSvg()}
    <g class="a-balloon">
      <path d="M0 8.5 L-2.2 12 L2.2 12 Z" fill="#b91c1c" />
      <ellipse rx="7.5" ry="9" fill="#ef4444" />
      <ellipse cx="-2.6" cy="-3.2" rx="1.8" ry="3" fill="#fecaca" opacity="0.7" />
    </g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const wall = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const balloon = svg.querySelector(".a-balloon");

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const f = feet[round % 2];
    const pose = cqKeys([
      { t: 0, x: hipX, pose: CQ_POSE.stand },
      { t: 0.1, x: hipX, pose: f.back },
      { t: hitAt, x: hipX, pose: f.hit },
      { t: 0.5, x: hipX, pose: CQ_POSE.stand },
      { t: cycle, x: hipX, pose: CQ_POSE.stand },
    ], t).pose;

    // Balloon: each tap sends it up and it floats back down to the other hand.
    const beats = seconds / tap;
    const near = Math.round(beats);
    const hand = near % 2;
    const reach = Math.max(0, 1 - Math.abs(beats - near) / 0.22);
    const lift = (k) => [cqLerp(ready[0], up[0], k), cqLerp(ready[1], up[1], k)];
    pose.armF = lift(hand === 0 ? reach : 0);
    pose.armB = lift(hand === 1 ? reach : 0);
    rig.pose(hipX, 1, pose);
    const p = beats - Math.floor(beats);
    balloon.setAttribute("transform", `translate(${hipX + 7 + 2 * Math.sin(seconds * 2.3)},${47 - 15 * Math.sin(Math.PI * p)}) rotate(${6 * Math.sin(seconds * 3)})`);

    if (t < hitAt) ball(restX, y);
    else if (t < wallAt) ball(cqLerp(restX, wallX - 6, (t - hitAt) / (wallAt - hitAt)), y);
    // The ball never stops: it arrives at the end of a round and leaves on the next kick.
    else ball(cqLerp(wallX - 6, restX, (t - wallAt) / (cycle - wallAt)), y);

    const text = `${balloonWord}: ${hands[hand]}`;
    if (say.textContent !== text) say.textContent = text;
    count(round % 40 + (t >= wallAt ? 1 : 0), wall);
  });
});
