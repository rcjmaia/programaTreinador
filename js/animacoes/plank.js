/* Prancha: antebraços e pontas dos pés no chão, corpo reto como uma tábua. O cronômetro corre. */

cqRegisterAnim("plank", (box, opts) => {
  const x = 150;
  const hipY = CQ_POSE.plank.hipY;

  box.innerHTML = cqSceneSvg(opts.label, `
    <line x1="${x - 40}" y1="${hipY - 4}" x2="${x + 46}" y2="${hipY - 4}" stroke="rgba(250, 204, 21, 0.45)" stroke-width="1.5" stroke-dasharray="4 4" />
    ${cqNoteSvg(x, 60, opts.pick(["corpo reto", "body straight", "cuerpo recto"]))}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    // Just breathing: tiny movement, the body stays straight.
    const b = Math.sin(seconds * 2) * 0.6;
    rig.pose(x, 1, { ...CQ_POSE.plank, hipY: hipY + b });
    count(Math.floor(seconds) % 60);
  });
});
