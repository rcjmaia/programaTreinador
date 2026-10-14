/* Passo lateral (de frente): joelhos dobrados, desliza de lado sem cruzar os pés e toca o chinelo. */

cqRegisterAnim("sidestep", (box, opts) => {
  const left = 92;
  const right = 228;
  const legT = 0.75;
  const low = { hipY: CQ_GROUND - 30, armL: [30, 30], armR: [30, 30], legL: [16, -20], legR: [16, -20] };
  const wide = { ...low, legL: [26, -26], legR: [26, -26] };
  const reachL = { ...low, hipY: CQ_GROUND - 24, armL: [10, -10], legL: [34, -50], legR: [8, -12] };
  const reachR = { ...low, hipY: CQ_GROUND - 24, armR: [10, -10], legR: [34, -50], legL: [8, -12] };

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-mark">${cqFlipflopSvg(left - 22)}</g>
    <g class="a-mark">${cqFlipflopSvg(right + 22)}</g>
    ${cqNoteSvg(160, 160, `← 3 ${opts.steps} →`)}
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const marks = svg.querySelectorAll(".a-mark");
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / legT);
    const u = seconds / legT - n;
    const toRight = n % 2 === 0;
    const k = cqEase(cqClamp01(u / 0.8));
    const x = toRight ? cqLerp(left, right, k) : cqLerp(right, left, k);
    // Feet open and close in small shuffles; at the end, reach down to the flip-flop.
    const shuffle = Math.abs(Math.sin(u * Math.PI * 4));
    let pose = cqMixPose(low, wide, shuffle);
    if (u > 0.8) pose = cqMixPose(pose, toRight ? reachR : reachL, Math.sin(Math.PI * (u - 0.8) / 0.2));
    rig.pose(x, pose, 0);
    count((n + (u > 0.9 ? 1 : 0)) % 40, marks[toRight ? 1 : 0]);
  });
});
