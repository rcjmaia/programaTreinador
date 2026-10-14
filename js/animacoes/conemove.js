/* Muda os cones: agacha, pega um cone, leva para o outro lado (5 passos), agacha e solta. */

cqRegisterAnim("conemove", (box, opts) => {
  const from = [52, 70, 88, 106];
  const to = [214, 232, 250, 268];
  const speed = 170;
  const bendT = 0.5;
  const reach = 24;
  const cone = (x, cls) => `<g class="${cls}" transform="translate(${x},0)">${cqConeSvg(0, 14)}</g>`;

  box.innerHTML = cqSceneSvg(opts.label, `
    ${from.map((x) => cone(x, "a-from")).join("")}
    ${to.map((x) => cone(x, "a-to")).join("")}
    ${cqNoteSvg(160, 160, `← 5 ${opts.steps} →`)}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  // The cone hangs from the hand: its base sits just below the fingers.
  rig.armF.sub.insertAdjacentHTML("beforeend", `<g class="a-held" transform="translate(0,14) scale(0.8) translate(0,${-CQ_GROUND + 7})">${cqConeSvg(0, 14)}</g>`);
  const held = svg.querySelector(".a-held");
  const fromEls = svg.querySelectorAll(".a-from");
  const toEls = svg.querySelectorAll(".a-to");
  const count = cqCounter(svg, opts.unit);

  // Take the cones from the end of the row nearest the other side.
  const segs = [];
  let at = from[from.length - 1] + reach;
  from.slice().reverse().forEach((fx, k) => {
    const i = from.length - 1 - k;
    const pickX = fx + reach;
    const dropX = to[k] - reach;
    segs.push({ kind: "run", a: at, b: pickX, dur: Math.max(0.05, Math.abs(pickX - at) / speed) });
    segs.push({ kind: "pick", x: pickX, dir: -1, i, k, dur: bendT });
    segs.push({ kind: "run", a: pickX, b: dropX, dur: Math.abs(dropX - pickX) / speed });
    segs.push({ kind: "drop", x: dropX, dir: 1, i, k, dur: bendT });
    at = dropX;
  });
  const line = cqTimeline(segs, 0.8);

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    if (seg.kind === "run") {
      const x = cqLerp(seg.a, seg.b, u);
      rig.pose(x, seg.b >= seg.a ? 1 : -1, cqRunPose(x / 9));
    } else {
      rig.pose(seg.x, seg.dir, cqMixPose(CQ_POSE.stand, CQ_POSE.bend, Math.sin(Math.PI * u)));
    }

    let picked = 0;
    let dropped = 0;
    for (const s of segs) {
      if (t < s.start + s.dur / 2) break;
      if (s.kind === "pick") picked++;
      if (s.kind === "drop") dropped++;
    }
    fromEls.forEach((el, i) => { el.style.display = from.length - 1 - i < picked ? "none" : ""; });
    toEls.forEach((el, k) => { el.style.display = k < dropped ? "" : "none"; });
    held.style.display = picked > dropped ? "" : "none";
    count(dropped);
  });
});
