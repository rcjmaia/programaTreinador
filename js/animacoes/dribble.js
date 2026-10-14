/* Drible 1 contra 1: conduz, faz a finta, acelera e passa a linha que a pessoa defende. */

cqRegisterAnim("dribble", (box, opts) => {
  const lineX = 246;
  const defX = 214;
  const feintAt = 1.2;
  const goAt = 1.9;
  const endAt = 2.9;
  const cycle = 3.5;
  const feint = { ...CQ_POSE.ready, lean: -6, legF: [-30, 20], legB: [24, 18], armF: [-60, -20], armB: [70, -10] };
  const y = CQ_GROUND - 6;

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">
      <line x1="${lineX}" y1="${CQ_GROUND + 2}" x2="${lineX + 24}" y2="${CQ_GROUND + 26}" stroke="#f8fafc" stroke-width="3" stroke-dasharray="5 4" />
    </g>
    <text x="150" y="58" text-anchor="middle" class="a-note a-feint"></text>
    ${cqPlayerSvg(CQ_KIT_HELPER)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const [defEl, meEl] = svg.querySelectorAll(".a-player");
  const def = cqPlayerRig(defEl);
  const me = cqPlayerRig(meEl);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const line = svg.querySelector(".a-hit");
  const feintText = svg.querySelector(".a-feint");
  const feintWord = opts.pick(["finta!", "feint!", "¡finta!"]);

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    let x;
    if (t < feintAt) {
      x = cqLerp(40, 150, t / feintAt);
      me.pose(x, 1, cqRunPose(x / 8));
      ball(x + 14 + 4 * Math.abs(Math.sin(x / 16)), y);
    } else if (t < goAt) {
      // Body shake: weight to one side, ball dragged across, defender bites.
      const k = (t - feintAt) / (goAt - feintAt);
      const sway = Math.sin(k * Math.PI * 2);
      x = 150 + 3 * sway;
      me.pose(x, 1, cqMixPose(CQ_POSE.ready, feint, Math.abs(sway)));
      ball(x + 16 - 6 * Math.sin(k * Math.PI), y);
    } else {
      const k = cqClamp01((t - goAt) / (endAt - goAt));
      x = cqLerp(150, 300, k);
      me.pose(x, 1, cqRunPose(x / 7));
      ball(x + 14, y);
    }

    // The defender waits, leans for the feint, then turns too late.
    const fooled = t > feintAt + 0.3 && t < goAt + 0.6;
    const behind = t > goAt + 0.6;
    def.pose(defX + (fooled ? 6 : 0), behind ? 1 : -1, fooled ? cqMixPose(CQ_POSE.ready, feint, 0.8) : CQ_POSE.ready);

    feintText.textContent = t > feintAt && t < goAt + 0.3 ? feintWord : "";
    count((round % 9) + (x > lineX ? 1 : 0), line);
  });
});
