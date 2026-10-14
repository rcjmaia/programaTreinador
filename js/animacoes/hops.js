/* Pula-linha (de frente): pés juntos, pula de um lado para o outro da linha. */

cqRegisterAnim("hops", (box, opts) => {
  const lineX = 160;
  const side = 22;
  const hopT = 0.42;
  const pose = { hipY: CQ_GROUND - 34, armL: [28, 40], armR: [28, 40], legL: [3, 0], legR: [3, 0] };
  const tuck = { hipY: CQ_GROUND - 34, armL: [40, 50], armR: [40, 50], legL: [-6, 30], legR: [-6, 30] };

  box.innerHTML = cqSceneSvg(opts.label, `
    <path d="M${lineX - 1.5} ${CQ_GROUND} L${lineX + 1.5} ${CQ_GROUND} L${lineX + 4} 170 L${lineX - 4} 170 Z" fill="#f8fafc" />
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / hopT);
    const u = seconds / hopT - n;
    const from = n % 2 === 0 ? -side : side;
    const x = lineX + cqLerp(from, -from, cqEase(u));
    const air = Math.sin(Math.PI * u);
    rig.pose(x, cqMixPose(pose, tuck, air), 14 * air);
    count(n % 50);
  });
});
