/* Busca-tesouro com bola: conduz até um objeto, pega com a mão e volta conduzindo. */

cqRegisterAnim("treasure", (box, opts) => {
  const homeX = 50;
  const spots = [206, 240, 274];
  const colors = ["#ef4444", "#3b82f6", "#a855f7"];
  const speed = 120;
  const bendT = 0.6;
  const y = CQ_GROUND - 6;
  const gem = (color) => `<path d="M-6 0 L-3 -6 L3 -6 L6 0 L0 6 Z" fill="${color}" stroke="#f8fafc" stroke-width="0.8" />`;

  box.innerHTML = cqSceneSvg(opts.label, `
    <rect x="${homeX - 26}" y="${CQ_GROUND}" width="4" height="30" fill="#f8fafc" />
    ${spots.map((x, i) => `<g class="a-gem" transform="translate(${x},${CQ_GROUND - 6})">${gem(colors[i])}</g>`).join("")}
    ${spots.map((_, i) => `<g class="a-home" transform="translate(${homeX - 44 + i * 9},${CQ_GROUND - 6}) scale(0.7)">${gem(colors[i])}</g>`).join("")}
    ${cqNoteSvg(140, 160, `← 8 ${opts.steps} →`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  rig.armF.sub.insertAdjacentHTML("beforeend", `<g class="a-held" transform="translate(0,16) scale(0.8)">${gem("#000")}</g>`);
  const held = svg.querySelector(".a-held");
  const heldGem = held.querySelector("path");
  const gems = svg.querySelectorAll(".a-gem");
  const homes = svg.querySelectorAll(".a-home");

  const segs = [];
  spots.forEach((x, i) => {
    const stop = x - 26;
    segs.push({ kind: "go", a: homeX, b: stop, dur: (stop - homeX) / speed });
    segs.push({ kind: "pick", x: stop, i, dur: bendT });
    segs.push({ kind: "back", a: stop, b: homeX, dur: (stop - homeX) / speed });
    segs.push({ kind: "drop", x: homeX, i, dur: 0.3 });
  });
  const line = cqTimeline(segs, 0.6);

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    if (seg.kind === "go" || seg.kind === "back") {
      const dir = seg.kind === "go" ? 1 : -1;
      const x = cqLerp(seg.a, seg.b, u);
      rig.pose(x, dir, cqRunPose(x / 8));
      ball(x + dir * (13 + 4 * Math.abs(Math.sin(x / 16))), y);
    } else {
      const dir = seg.kind === "pick" ? 1 : -1;
      // Sole on the ball while bending down to grab the object.
      rig.pose(seg.x, dir, cqMixPose(CQ_POSE.ready, { ...CQ_POSE.bend, legF: [-45, 30] }, seg.kind === "pick" ? Math.sin(Math.PI * u) : 0));
      ball(seg.x + dir * 13, y, seg.x * 9.5);
    }

    let picked = -1;
    let dropped = -1;
    for (const s of segs) {
      if (t < s.start + s.dur / 2) break;
      if (s.kind === "pick") picked = s.i;
      if (s.kind === "drop") dropped = s.i;
    }
    gems.forEach((el, i) => { el.style.display = i <= picked ? "none" : ""; });
    homes.forEach((el, i) => { el.style.display = i <= dropped ? "" : "none"; });
    held.style.display = picked > dropped ? "" : "none";
    if (picked > dropped) heldGem.setAttribute("fill", colors[picked]);
    count(dropped + 1);
  });
});
