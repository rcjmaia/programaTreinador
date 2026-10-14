/* Agachamento: desce como se fosse sentar numa cadeira, costas retas, braços para a frente. */

cqRegisterAnim("squats", (box, opts) => {
  const x = 160;
  const rep = 1.1;
  const top = { ...CQ_POSE.stand, armF: [-90, 0], armB: [-85, 0] };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / rep);
    const u = seconds / rep - n;
    rig.pose(x, 1, cqMixPose(top, CQ_POSE.squat, Math.sin(Math.PI * u)));
    count(n % 30);
  });
});
