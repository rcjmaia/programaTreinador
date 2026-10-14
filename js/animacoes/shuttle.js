/* Vai e volta: corre entre duas marcas (cones) e toca cada uma com a mão. */

cqRegisterAnim("shuttle", (box, opts) => {
  const lines = [40, 280];
  const coneH = 22;
  const reach = 26;
  const runT = 1.3;
  const touchT = 0.55;
  const legT = runT + touchT;
  const touches = 6;
  const touchPose = {
    hipY: CQ_GROUND - 31,
    lean: 60,
    legF: [-35, 45],
    legB: [20, 25],
    armF: [-60, 0],
    armB: [60, -40],
  };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${lines.map((x) => `<g class="a-mark">${cqConeSvg(x, coneH)}</g>`).join("")}
    <text x="160" y="152" text-anchor="middle" class="a-note">← 10 ${opts.steps} →</text>
    ${cqPlayerSvg()}
    <text x="160" y="30" text-anchor="middle" class="a-count">${opts.unit}: 0</text>`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const counter = svg.querySelector(".a-count");
  const marks = svg.querySelectorAll(".a-mark");
  let lastTouch = null;

  return cqLoop((seconds) => {
    const t = seconds % (touches * legT);
    const leg = Math.floor(t / legT);
    const u = t - leg * legT;
    const dir = leg % 2 === 0 ? 1 : -1;
    const from = dir === 1 ? lines[0] + reach : lines[1] - reach;
    const to = dir === 1 ? lines[1] - reach : lines[0] + reach;

    if (u < runT) {
      const x = from + (to - from) * cqEase(u / runT);
      rig.pose(x, dir, cqRunPose((x - lines[0]) / 9));
    } else {
      const k = Math.sin(Math.PI * (u - runT) / touchT);
      rig.pose(to, dir, cqMixPose(cqRunPose((to - lines[0]) / 9), touchPose, k));
    }

    const touched = u >= runT + touchT / 2 ? leg : leg - 1;
    if (touched !== lastTouch) {
      lastTouch = touched;
      counter.textContent = `${opts.unit}: ${touched + 1}`;
      if (touched >= 0) cqFlash(marks[dir === 1 ? 1 : 0]);
    }
  });
});
