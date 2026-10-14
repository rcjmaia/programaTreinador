/* Passada: passo grande à frente, desce o joelho de trás quase até o chão, volta e troca de perna. */

cqRegisterAnim("lunges", (box, opts) => {
  const x = 150;
  const rep = 1.2;
  const other = { ...CQ_POSE.lunge, legF: CQ_POSE.lunge.legB, legB: CQ_POSE.lunge.legF };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / rep);
    const u = seconds / rep - n;
    const k = Math.sin(Math.PI * u);
    // Step forward with one leg, come back, then the other leg.
    rig.pose(x + 10 * k, 1, cqMixPose(CQ_POSE.stand, n % 2 ? other : CQ_POSE.lunge, k));
    count(n % 30);
  });
});
