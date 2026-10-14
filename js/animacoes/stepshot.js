/* Pedalada e chute: conduz, faz a pedalada (a perna passa por cima da bola) e já chuta no alvo. */

cqRegisterAnim("stepshot", (box, opts) => {
  const chairX = 270;
  const stopX = 140;
  const ballOff = 20;
  const y = CQ_GROUND - 6;
  const base = { ...CQ_POSE.ready, lean: 6 };
  const over1 = { ...base, legF: [-30, 85], armF: [-60, -30], armB: [55, -30] };
  const over2 = { ...base, legF: [-65, 70], lean: 2, armF: [-70, -20], armB: [60, -20] };
  const line = cqTimeline([
    { kind: "carry", dur: 1.0 },
    { kind: "step", dur: 0.7 },
    { kind: "back", dur: 0.18 },
    { kind: "hit", dur: 0.12 },
    { kind: "fly", dur: 0.55 },
  ], 0.9);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqChairSvg(chairX)}</g>
    <text x="${stopX + 10}" y="58" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(205, 160, `← 5 ${opts.steps} →`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const words = [opts.pick(["pedalada", "step-over", "bicicleta"]), opts.pick(["chuta!", "shoot!", "¡tira!"])];
  const ballX = stopX + ballOff;

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let text = "";
    if (seg.kind === "carry") {
      const x = cqLerp(40, stopX, u);
      rig.pose(x, 1, cqRunPose(x / 8));
      ball(x + ballOff + 3 * Math.abs(Math.sin(x / 14)), y);
    } else if (seg.kind === "step") {
      // The leg circles over the ball without touching it.
      const k = Math.sin(Math.PI * u);
      rig.pose(stopX, 1, u < 0.5 ? cqMixPose(base, over1, k) : cqMixPose(base, over2, k));
      ball(ballX, y, ballX * 9.5);
      text = words[0];
    } else if (seg.kind === "back" || seg.kind === "hit") {
      rig.pose(stopX, 1, seg.kind === "back" ? cqMixPose(base, CQ_POSE.kickBack, u) : cqMixPose(CQ_POSE.kickBack, CQ_POSE.kickHit, u));
      ball(ballX, y, ballX * 9.5);
      text = words[1];
    } else {
      rig.pose(stopX, 1, cqMixPose(CQ_POSE.kickHit, CQ_POSE.stand, cqClamp01(u * 1.5 - 0.5)));
      const p = cqArc(ballX, y, chairX, CQ_GROUND - 8, 10, u);
      ball(p.x, p.y, u * 720);
    }
    if (say.textContent !== text) say.textContent = text;
    const scored = seg.kind === "fly" && u >= 1 ? 1 : 0;
    count((round % 9) + scored, target);
  });
});
