/* Protege a bola: corpo entre a pessoa e a bola, braço aberto, sem empurrar. */

cqRegisterAnim("shield", (box, opts) => {
  const meX = 182;
  const helperX = 136;
  const y = CQ_GROUND - 6;
  const reach = { ...CQ_POSE.ready, lean: 16, armF: [-80, -10], armB: [-40, -30] };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqNoteSvg(160, 160, opts.pick(["braço aberto, sem empurrar", "arm out, no pushing", "brazo abierto, sin empujar"]))}
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

  return cqLoop((seconds) => {
    // The helper keeps trying to get around; the player leans back into them and keeps the ball away.
    const push = Math.sin(seconds * 2.2);
    const hx = helperX + 6 * push;
    helper.pose(hx, 1, cqMixPose(CQ_POSE.ready, reach, (push + 1) / 2));
    const mx = meX + 3 * push;
    me.pose(mx, 1, cqMixPose(CQ_POSE.shield, { ...CQ_POSE.shield, lean: -10, armB: [95, -5] }, (push + 1) / 2));
    ball(mx + 20 + 3 * Math.sin(seconds * 1.3), y, seconds * 40);
    count(Math.floor(seconds) % 60);
  });
});
