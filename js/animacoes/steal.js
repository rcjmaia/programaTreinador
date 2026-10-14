/* Rouba-bola: a pessoa conduz, ele chega com calma e tira a bola com o pé, sem empurrar. */

cqRegisterAnim("steal", (box, opts) => {
  const approachT = 1.4;
  const pokeAt = 1.65;
  const cycle = 3.3;
  const meStop = 140;
  const y = CQ_GROUND - 6;
  const helperX = (t) => cqLerp(292, 190, cqClamp01(t / pokeAt));
  const ballOut = 96;

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqFlipflopSvg(40, "#ef4444")}
    ${cqFlipflopSvg(300, "#ef4444")}
    ${cqNoteSvg(170, 160, `← 5 ${opts.steps} →`)}
    ${cqPlayerSvg(CQ_KIT_HELPER)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const [helperEl, meEl] = svg.querySelectorAll(".a-player");
  const helper = cqPlayerRig(helperEl);
  const me = cqPlayerRig(meEl);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const meFrames = [
    { t: approachT, x: meStop, pose: CQ_POSE.ready },
    { t: 1.55, x: meStop, pose: CQ_POSE.kickBack },
    { t: pokeAt, x: meStop + 2, pose: CQ_POSE.kickHit },
    { t: 2.0, x: meStop + 2, pose: CQ_POSE.kickHit },
    { t: 2.5, x: meStop, pose: CQ_POSE.ready },
  ];

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;

    const hx = helperX(t);
    if (t < pokeAt) helper.pose(hx, -1, cqRunPose(hx / 9));
    else helper.pose(hx, -1, cqMixPose(CQ_POSE.ready, CQ_POSE.stand, cqClamp01((t - pokeAt) / 0.4)));

    if (t < approachT) {
      // Short, careful steps: close the distance without diving in.
      const x = cqLerp(50, meStop, cqEase(t / approachT));
      me.pose(x, 1, cqMixPose(cqRunPose(x / 7), CQ_POSE.ready, 0.6));
    } else me.pose(meStop, 1, cqKeys(meFrames, t).pose);

    if (t < pokeAt) ball(hx - 16, y);
    else {
      // Poked back past the player's own feet, away from the dribbler.
      const u = cqClamp01((t - pokeAt) / 0.7);
      const from = helperX(pokeAt) - 16;
      ball(cqLerp(from, ballOut, 1 - (1 - u) ** 2), y);
    }
    count((round % 9) + (t >= pokeAt + 0.3 ? 1 : 0));
  });
});
