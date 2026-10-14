/* Skipping: corre no lugar subindo os joelhos até a cintura, braços juntos. */

cqRegisterAnim("skipping", (box, opts) => {
  const x = 160;
  const beat = 0.26;
  const kneeF = CQ_POSE.knee;
  const kneeB = { ...CQ_POSE.knee, legF: [6, 6], legB: [-90, 90], armF: [-45, -80], armB: [40, -80] };

  box.innerHTML = cqSceneSvg(opts.label, `
    <line x1="${x - 24}" y1="${CQ_GROUND - 35}" x2="${x + 34}" y2="${CQ_GROUND - 35}" stroke="rgba(250, 204, 21, 0.45)" stroke-width="1.5" stroke-dasharray="4 4" />
    ${cqNoteSvg(x + 72, CQ_GROUND - 32, opts.pick(["cintura", "waist", "cintura"]))}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / beat);
    const u = seconds / beat - n;
    const up = Math.sin(Math.PI * u);
    rig.pose(x, 1, cqMixPose(CQ_POSE.stand, n % 2 ? kneeB : kneeF, up), 3 * up);
    count(n % 50);
  });
});
