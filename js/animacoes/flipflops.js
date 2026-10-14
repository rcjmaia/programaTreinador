/* Busca-chinelos: corre até um chinelo, pega, traz até atrás da linha e larga. Um por vez. */

cqRegisterAnim("flipflops", (box, opts) => {
  const line = 84;
  const reach = 24;
  const speed = 190;
  const bendT = 0.5;
  const colors = ["#ef4444", "#3b82f6", "#22c55e", "#a855f7", "#f97316"];
  const spots = [184, 211, 238, 265, 292];
  const pile = (i) => 46 + i * 7;
  const bendPose = {
    hipY: CQ_GROUND - 14,
    lean: 60,
    legF: [-75, 120],
    legB: [30, 60],
    armF: [-60, 0],
    armB: [60, -40],
  };

  const flipflop = (color, cls, x) => `
    <g class="${cls}" ${x == null ? "" : `transform="translate(${x},${CQ_GROUND - 2})"`}>
      <rect x="-7" y="-1.5" width="14" height="3.5" rx="1.7" fill="${color}" />
      <path d="M-3 -1.5 Q0 -6 3 -1.5" stroke="#f8fafc" stroke-width="1.3" fill="none" />
    </g>`;

  box.innerHTML = cqSceneSvg(opts.label, `
    <rect x="${line - 2}" y="${CQ_GROUND}" width="4" height="30" fill="#f8fafc" />
    ${spots.map((x, i) => flipflop(colors[i], "a-spot", x)).join("")}
    ${spots.map((_, i) => flipflop(colors[i], "a-pile", pile(i))).join("")}
    <text x="${(line + spots[2]) / 2}" y="160" text-anchor="middle" class="a-note">← 5 ${opts.steps} →</text>
    ${cqPlayerSvg()}
    <text x="160" y="30" text-anchor="middle" class="a-count">${opts.unit}: 0</text>`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  rig.armF.sub.insertAdjacentHTML("beforeend", `<g class="a-held" transform="translate(0,15) rotate(90) scale(1.3)">${flipflop("#000", "a-held-ff")}</g>`);
  const held = svg.querySelector(".a-held");
  const heldSole = held.querySelector("rect");
  const groundFF = svg.querySelectorAll(".a-spot");
  const pileFF = svg.querySelectorAll(".a-pile");
  const counter = svg.querySelector(".a-count");

  // One trip per flip-flop: run out, bend to pick, run back, bend to drop.
  const home = line + reach;
  const segs = [];
  spots.forEach((x, i) => {
    const pickX = x - reach;
    const dropX = pile(i) + reach;
    segs.push({ kind: "run", from: home, to: pickX, dir: 1 });
    segs.push({ kind: "pick", at: pickX, dir: 1, i });
    segs.push({ kind: "run", from: pickX, to: dropX, dir: -1 });
    segs.push({ kind: "drop", at: dropX, dir: -1, i });
    segs.push({ kind: "run", from: dropX, to: home, dir: 1 });
  });
  let total = 0;
  for (const s of segs) {
    s.start = total;
    s.dur = s.kind === "run" ? Math.abs(s.to - s.from) / speed : bendT;
    total += s.dur;
  }
  total += 0.8;

  return cqLoop((seconds) => {
    const t = seconds % total;
    const seg = segs.find((s) => t >= s.start && t < s.start + s.dur) || segs[segs.length - 1];
    const u = Math.min(1, (t - seg.start) / seg.dur);

    if (seg.kind === "run") {
      const x = seg.from + (seg.to - seg.from) * u;
      rig.pose(x, seg.dir, cqRunPose(x / 9));
    } else {
      rig.pose(seg.at, seg.dir, cqMixPose(cqRunPose(seg.at / 9), bendPose, Math.sin(Math.PI * u)));
    }

    // Which flip-flops have been picked up and dropped by now.
    let picked = -1;
    let dropped = -1;
    for (const s of segs) {
      const mid = s.start + s.dur / 2;
      if (t < mid) continue;
      if (s.kind === "pick") picked = s.i;
      if (s.kind === "drop") dropped = s.i;
    }
    groundFF.forEach((el, i) => { el.style.display = i <= picked ? "none" : ""; });
    pileFF.forEach((el, i) => { el.style.display = i <= dropped ? "" : "none"; });
    const carrying = picked > dropped;
    held.style.display = carrying ? "" : "none";
    if (carrying) heldSole.setAttribute("fill", colors[picked]);
    counter.textContent = `${opts.unit}: ${dropped + 1}`;
  });
});
