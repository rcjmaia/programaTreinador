/* Sobe-degrau: sobe com um pé, depois o outro; desce do mesmo jeito. */

cqRegisterAnim("stepup", (box, opts) => {
  const stepX = 170;
  const stepH = 16;
  const rep = 1.4;
  const below = 140;
  const onTop = stepX + 4;
  const climb = { ...CQ_POSE.stand, lean: 10, legF: [-60, 60], armF: [30, -30], armB: [-30, -30] };

  box.innerHTML = cqSceneSvg(opts.label, `
    <rect x="${stepX - 16}" y="${CQ_GROUND - stepH}" width="60" height="${stepH}" fill="#a8a29e" stroke="#78716c" />
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / rep);
    const u = seconds / rep - n;
    if (u < 0.5) {
      // Up: front foot on the step, then the body rises onto it.
      const k = u / 0.5;
      const x = cqLerp(below, onTop, cqEase(k));
      rig.pose(x, 1, cqMixPose(CQ_POSE.stand, climb, Math.sin(Math.PI * k)), stepH * cqEase(k));
    } else {
      const k = (u - 0.5) / 0.5;
      const x = cqLerp(onTop, below, cqEase(k));
      rig.pose(x, -1, cqMixPose(CQ_POSE.stand, climb, Math.sin(Math.PI * k) * 0.6), stepH * (1 - cqEase(k)));
    }
    count(n % 30);
  });
});
