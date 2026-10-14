/* Pique com bola: conduz a bola até perto da marca, puxa a bola com a sola, vira e volta. */

cqRegisterAnim("sprintball", (box, opts) => {
  const cones = [40, 280];
  const ballR = 6;
  const gap = 34;
  const runT = 1.6;
  const turnT = 0.7;
  const legT = runT + turnT;
  const trips = 3;
  const turnPose = {
    hipY: CQ_GROUND - 33,
    lean: 6,
    legF: [-28, 18],
    legB: [10, 12],
    armF: [-20, -40],
    armB: [25, -40],
  };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cones.map((x) => `<g class="a-mark">${cqConeSvg(x, 22)}</g>`).join("")}
    <text x="160" y="160" text-anchor="middle" class="a-note">← 10 ${opts.steps} →</text>
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(ballR)}</g>
    <text x="160" y="30" text-anchor="middle" class="a-count">${opts.unit}: 0</text>`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = svg.querySelector(".a-ball-pos");
  const counter = svg.querySelector(".a-count");
  const marks = svg.querySelectorAll(".a-mark");
  const ballY = CQ_GROUND - ballR;
  let lastTurn = null;

  const placeBall = (bx, by = ballY) => {
    ball.setAttribute("transform", `translate(${bx},${by}) rotate(${(bx / ballR) * 57.3})`);
  };

  return cqLoop((seconds) => {
    const t = seconds % (trips * 2 * legT);
    const leg = Math.floor(t / legT);
    const u = t - leg * legT;
    const dir = leg % 2 === 0 ? 1 : -1;
    // The player stops before the far cone; the ball stays a step ahead of his feet.
    const from = dir === 1 ? cones[0] + gap : cones[1] - gap;
    const to = dir === 1 ? cones[1] - gap - 8 : cones[0] + gap + 8;

    if (u < runT) {
      const x = from + (to - from) * cqEase(u / runT);
      const s = (x - cones[0]) / 8;
      rig.pose(x, dir, cqRunPose(s));
      // Short touches: the ball rolls slightly ahead, then the foot catches up.
      placeBall(x + dir * (12 + 5 * Math.abs(Math.sin(s / 2))));
    } else {
      const k = (u - runT) / turnT;
      const bend = Math.sin(Math.PI * k);
      // Sole drag: the ball is pulled back past the feet while the player turns around.
      const reachX = 12 + 5 * Math.abs(Math.sin((to - cones[0]) / 16));
      placeBall(to + dir * reachX * Math.cos(Math.PI * k), ballY - Math.sin(Math.PI * k) * 3);
      const facing = k < 0.5 ? dir : -dir;
      rig.pose(to, facing, cqMixPose(cqRunPose((to - cones[0]) / 8), turnPose, bend));
    }

    const turned = u >= runT + turnT / 2 ? leg : leg - 1;
    if (turned !== lastTurn) {
      lastTurn = turned;
      if (turned >= 0) cqFlash(marks[turned % 2 === 0 ? 1 : 0]);
      counter.textContent = `${opts.unit}: ${Math.floor((turned + 1) / 2)}`;
    }
  });
});
