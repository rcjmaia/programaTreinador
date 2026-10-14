/* Pula-linha (de frente): pés juntos, pula de um lado para o outro da linha.
   args.oneFoot: num pé só, trocando de pé na metade. */

cqRegisterAnim("hops", (box, opts) => {
  const lineX = 160;
  const side = 22;
  const hopT = 0.42;
  const oneFoot = opts.args?.oneFoot;
  const pose = { hipY: CQ_GROUND - 34, armL: [28, 40], armR: [28, 40], legL: [3, 0], legR: [3, 0] };
  const tuck = { hipY: CQ_GROUND - 34, armL: [40, 50], armR: [40, 50], legL: [-6, 30], legR: [-6, 30] };
  // On one foot, the free leg stays folded up behind.
  const lifted = [24, -110];

  box.innerHTML = cqSceneSvg(opts.label, `
    <path d="M${lineX - 1.5} ${CQ_GROUND} L${lineX + 1.5} ${CQ_GROUND} L${lineX + 4} 170 L${lineX - 4} 170 Z" fill="#f8fafc" />
    ${oneFoot ? `<text x="160" y="56" text-anchor="middle" class="a-note a-foot-note"></text>` : ""}
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);
  const footNote = svg.querySelector(".a-foot-note");
  const feet = [opts.pick(["pé esquerdo", "left foot", "pie izquierdo"]), opts.pick(["pé direito", "right foot", "pie derecho"])];
  let lastFoot = -1;

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / hopT);
    const u = seconds / hopT - n;
    const from = n % 2 === 0 ? -side : side;
    const x = lineX + cqLerp(from, -from, cqEase(u));
    const air = Math.sin(Math.PI * u);
    const ps = cqMixPose(pose, tuck, air);
    if (oneFoot) {
      // Switch feet every 8 hops, like switching halfway through the 30 seconds.
      const foot = Math.floor(n / 8) % 2;
      if (foot === 0) ps.legR = lifted;
      else ps.legL = lifted;
      if (foot !== lastFoot) footNote.textContent = feet[(lastFoot = foot)];
    }
    rig.pose(x, ps, 14 * air);
    count(n % 50);
  });
});
