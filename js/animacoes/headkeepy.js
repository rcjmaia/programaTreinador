/* Embaixadinha de cabeça: joelhos dobrados, olhando a bola, toques com a testa. */

cqRegisterAnim("headkeepy", (box, opts) => {
  const hipX = 160;
  const beat = 0.7;
  const up = { ...CQ_POSE.stand, lean: -12, legF: [-8, 10], legB: [10, 10], armF: [-40, -40], armB: [40, -40] };
  const bend = { ...up, hipY: CQ_GROUND - 31, legF: [-30, 50], legB: [-10, 45] };
  // Forehead when the head tilts back a little to look up at the ball.
  const head = { x: hipX - 7, y: CQ_GROUND - 35 - 57 };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const i = Math.floor(seconds / beat);
    const u = seconds / beat - i;
    // Knees bend before the touch and push up into it.
    const k = Math.cos(Math.PI * 2 * u) * 0.5 + 0.5;
    rig.pose(hipX, 1, cqMixPose(bend, up, k));
    const p = cqArc(head.x, head.y, head.x + (i % 2 ? -2 : 2), head.y, 14, u);
    ball(p.x, p.y, seconds * 100);
    count(i % 30);
  });
});
