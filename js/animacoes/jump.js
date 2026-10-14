/* Salto do canguru: pés juntos atrás da linha, balança os braços, salta e mede com o pé. */

cqRegisterAnim("jump", (box, opts) => {
  const lineX = 70;
  const startX = lineX - 8;
  const landX = 176;
  const takeoff = 1.0;
  const flightT = 0.6;
  const cycle = 4.4;
  const feet = 6;
  const footLen = (landX - 6 - lineX) / feet;
  const frames = [
    { t: 0, x: startX, pose: CQ_POSE.stand },
    { t: 0.4, x: startX, pose: CQ_POSE.stand },
    { t: 0.8, x: startX, pose: CQ_POSE.crouch },
    { t: takeoff, x: startX, pose: CQ_POSE.air },
  ];
  const after = [
    { t: takeoff + flightT, x: landX, pose: CQ_POSE.land },
    { t: 2.0, x: landX, pose: CQ_POSE.land },
    { t: 2.4, x: landX, pose: CQ_POSE.stand },
  ];
  const footprints = Array.from({ length: feet }, (_, i) => `
    <ellipse class="a-foot" cx="${lineX + footLen * (i + 0.5)}" cy="${CQ_GROUND + 9}" rx="${footLen / 2 - 1}" ry="3" fill="#facc15" opacity="0" />`).join("");

  box.innerHTML = cqSceneSvg(opts.label, `
    <line x1="${lineX}" y1="${CQ_GROUND}" x2="${lineX}" y2="${CQ_GROUND + 20}" stroke="#f8fafc" stroke-width="3" />
    ${footprints}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = cqCounter(svg, opts.unit);
  const prints = svg.querySelectorAll(".a-foot");
  const measureAt = 2.5;
  const perFoot = 0.25;

  return cqLoop((seconds) => {
    const t = seconds % cycle;
    if (t < takeoff) rig.pose(startX, 1, cqKeys(frames, t).pose);
    else if (t < takeoff + flightT) {
      const u = (t - takeoff) / flightT;
      const pose = cqMixPose(CQ_POSE.air, CQ_POSE.land, cqClamp01((u - 0.6) / 0.4));
      rig.pose(cqLerp(startX, landX, u), 1, pose, 4 * 32 * u * (1 - u));
    } else rig.pose(landX, 1, cqKeys(after, t).pose);

    const shown = t < measureAt ? 0 : Math.min(feet, 1 + Math.floor((t - measureAt) / perFoot));
    prints.forEach((p, i) => p.setAttribute("opacity", i < shown ? "0.9" : "0"));
    count(shown);
  });
});
