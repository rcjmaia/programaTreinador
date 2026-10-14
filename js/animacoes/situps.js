/* Abdominal: deitado, joelhos dobrados, mãos no peito; sobe até perto dos joelhos e desce. */

cqRegisterAnim("situps", (box, opts) => {
  const x = 170;
  const rep = 1.3;

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / rep);
    const u = seconds / rep - n;
    rig.pose(x, 1, cqMixPose(CQ_POSE.lieBack, CQ_POSE.sitUp, Math.sin(Math.PI * u)));
    count(n % 30);
  });
});
