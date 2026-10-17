/* Tique-taque (de frente): parado, a bola vai de um pé para o outro com a parte de dentro, bem rápido. */

cqRegisterAnim("tiktak", (box, opts) => {
  const x = 160;
  const beat = 0.3;
  const open = 26;
  const reach = 7.5;
  const stand = { hipY: CQ_GROUND - 34, armL: [28, -20], armR: [28, -20], legL: [open, -8], legR: [open, -8] };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqNoteSvg(250, 70, opts.pick(["parte de dentro", "inside of the foot", "interior del pie"]))}
    ${cqNoteSvg(250, 84, opts.pick(["de um pé para o outro", "from one foot to the other", "de un pie al otro"]))}
    ${cqNoteSvg(160, 160, opts.pick(["⏱ 30 segundos", "⏱ 30 seconds", "⏱ 30 segundos"]))}
    ${cqFrontPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const i = Math.floor(seconds / beat);
    const u = seconds / beat - i;
    // Even beats start at the screen-left foot and roll to the right one.
    const from = i % 2 === 0 ? -1 : 1;
    const kick = Math.max(0, 1 - u / 0.35);
    const push = open - 9 * Math.sin(Math.PI * Math.min(1, u / 0.35)) * (kick > 0 ? 1 : 0);
    rig.pose(x, {
      ...stand,
      hipY: stand.hipY - 1.2 * Math.sin(Math.PI * u),
      legL: from < 0 ? [push, -8] : stand.legL,
      legR: from > 0 ? [push, -8] : stand.legR,
    });
    ball(x + from * reach * (1 - 2 * cqEase(u)), CQ_GROUND - 6, from * u * 90);
    count((i % 80) + (u >= 0.95 ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
