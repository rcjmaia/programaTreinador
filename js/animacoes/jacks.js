/* Polichinelos (de frente): braços e pernas abrem e fecham juntos. */

cqRegisterAnim("jacks", (box, opts) => {
  const x = 160;
  const half = 0.38;

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / half);
    const u = seconds / half - n;
    const opening = n % 2 === 0;
    const k = cqEase(u);
    rig.pose(x, cqMixPose(CQ_FRONT.stand, CQ_FRONT.star, opening ? k : 1 - k), 6 * Math.sin(Math.PI * u));
    count(Math.floor(n / 2) % 70);
  });
});
