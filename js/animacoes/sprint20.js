/* Pique cronometrado: sai no "Vai!", toca a marca a 10 passos e volta. O cronômetro conta os segundos. */

cqRegisterAnim("sprint20", (box, opts) => {
  const startX = 52;
  const coneX = 280;
  const turnX = coneX - 26;
  const goT = 1.5;
  const touchT = 0.4;
  const backT = 1.5;
  const rest = 1.4;
  const touch = { hipY: CQ_GROUND - 31, lean: 60, legF: [-60, 60], legB: [30, 40], armF: [-80, 0], armB: [40, -30] };
  const line = cqTimeline([
    { kind: "ready", dur: 0.8 },
    { kind: "go", dur: goT },
    { kind: "touch", dur: touchT },
    { kind: "back", dur: backT },
  ], rest);

  box.innerHTML = cqSceneSvg(opts.label, `
    <rect x="${startX - 20}" y="${CQ_GROUND}" width="4" height="30" fill="#f8fafc" />
    <text x="${startX - 18}" y="${CQ_GROUND - 52}" text-anchor="middle" class="a-note">📱</text>
    <g class="a-mark">${cqConeSvg(coneX, 22)}</g>
    ${cqNoteSvg(160, 160, `← 10 ${opts.steps} →`)}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const count = svg.querySelector(".a-count");
  const mark = svg.querySelector(".a-mark");
  let lastText = "";
  let flashed = false;

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    if (seg.kind === "ready") rig.pose(startX, 1, CQ_POSE.ready);
    else if (seg.kind === "go") {
      const x = cqLerp(startX, turnX, cqEase(u));
      rig.pose(x, 1, cqRunPose(x / 8));
    } else if (seg.kind === "touch") {
      rig.pose(turnX, u < 0.5 ? 1 : -1, cqMixPose(cqRunPose(turnX / 8), touch, Math.sin(Math.PI * u)));
      if (!flashed && u > 0.4) {
        cqFlash(mark);
        flashed = true;
      }
    } else if (seg.kind === "back") {
      const x = cqLerp(turnX, startX, cqEase(u));
      rig.pose(x, -1, cqRunPose(x / 8));
    }
    if (seg.kind === "ready") flashed = false;

    // Stopwatch: runs from "Go!" until the player is back at the line.
    const runEnd = line.total - rest;
    const elapsed = Math.max(0, Math.min(t, runEnd) - 0.8);
    const text = `${opts.unit}: ${elapsed.toFixed(1)}`;
    if (text !== lastText) count.textContent = lastText = text;
  });
});
