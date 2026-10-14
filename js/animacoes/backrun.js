/* Recua de costas: 5 passos de costas (olhando para a frente) e volta correndo de frente. */

cqRegisterAnim("backrun", (box, opts) => {
  const front = 236;
  const back = 84;
  const backT = 1.7;
  const runT = 0.9;
  const cycle = backT + runT + 0.2;
  const pedal = (s) => {
    const a = Math.sin(s);
    return { hipY: CQ_GROUND - 33, lean: -6, legF: [-14 * a + 6, 24], legB: [14 * a + 6, 24], armF: [-20 * a, -60], armB: [20 * a, -60] };
  };

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-mark">${cqConeSvg(back - 26, 16)}</g>
    <g class="a-mark">${cqConeSvg(front + 26, 16)}</g>
    ${cqNoteSvg(160, 160, `← 5 ${opts.steps} →`)}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const marks = svg.querySelectorAll(".a-mark");
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    if (t < backT) {
      // Short quick steps backwards, still facing the play.
      const x = cqLerp(front, back, t / backT);
      rig.pose(x, 1, pedal(x / 3));
    } else if (t < backT + runT) {
      const x = cqLerp(back, front, cqEase((t - backT) / runT));
      rig.pose(x, 1, cqRunPose(x / 8));
    } else rig.pose(front, 1, CQ_POSE.ready);
    count((round % 20) + (t >= backT + runT ? 1 : 0), marks[1]);
    if (t >= backT && t < backT + 0.05) cqFlash(marks[0]);
  });
});
