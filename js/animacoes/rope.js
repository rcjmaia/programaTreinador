/* Pular corda (de frente): pulinhos na ponta dos pés, a corda passa por baixo a cada pulo. */

cqRegisterAnim("rope", (box, opts) => {
  const x = 160;
  const turn = 0.5;
  const pose = { hipY: CQ_GROUND - 35, armL: [24, -40], armR: [24, -40], legL: [2, 0], legR: [2, 0] };
  const handY = CQ_GROUND - 35 - 24 + 20;
  const handDx = 21;

  box.innerHTML = cqSceneSvg(opts.label, `
    <path class="a-rope-back" fill="none" stroke="#f472b6" stroke-width="2" />
    ${cqFrontPlayerSvg()}
    <path class="a-rope-front" fill="none" stroke="#f472b6" stroke-width="2" />
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);
  const back = svg.querySelector(".a-rope-back");
  const front = svg.querySelector(".a-rope-front");

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / turn);
    const phase = (seconds / turn - n) * Math.PI * 2;
    // phase 0: rope under the feet (jump!), phase PI: rope over the head.
    const lift = 7 * Math.max(0, Math.cos(phase)) ** 2;
    rig.pose(x, pose, lift);
    const hy = handY - lift;
    // Quadratic curve: its lowest point is halfway between the hands and the control point.
    const ctrlY = hy + 100 * Math.cos(phase) - 18;
    const d = `M${x - handDx} ${hy} Q${x} ${ctrlY} ${x + handDx} ${hy}`;
    // The rope passes in front of the body on the way down, behind on the way up.
    const inFront = Math.sin(phase) < 0;
    front.setAttribute("d", inFront ? d : "");
    back.setAttribute("d", inFront ? "" : d);
    count(n % 90);
  });
});
