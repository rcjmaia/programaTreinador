/* Embaixadinhas: pé, pé, coxa... a bola nunca toca o chão. */

cqRegisterAnim("keepy", (box, opts) => {
  const hipX = 150;
  const hipY = CQ_GROUND - 35;
  const beat = 0.75;
  const base = { ...CQ_POSE.stand, armF: [-30, -30], armB: [30, -30] };
  const foot = { ...base, legF: [-70, 60], armF: [-45, -30], armB: [40, -30] };
  const thigh = { ...base, legF: [-90, 90], armF: [-45, -30], armB: [40, -30] };
  // Where the ball sits when it touches the foot or the thigh.
  const spot = {
    foot: { x: hipX + 24, y: hipY + 16 },
    thigh: { x: hipX + 12, y: hipY - 9 },
  };
  const kind = (i) => (i % 3 === 2 ? "thigh" : "foot");

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
    // The leg rises just before each touch and drops right after.
    const near = u < 0.5 ? i : i + 1;
    const k = Math.max(0, 1 - Math.abs(seconds / beat - near) / 0.3);
    rig.pose(hipX, 1, cqMixPose(base, kind(near) === "thigh" ? thigh : foot, k));

    const a = spot[kind(i)];
    const b = spot[kind(i + 1)];
    const p = cqArc(a.x, a.y, b.x, b.y, 42, u);
    ball(p.x, p.y, seconds * 120);
    count(i % 50);
  });
});
