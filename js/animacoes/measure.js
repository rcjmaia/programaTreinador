/* Passe na medida (args.dist passos): passe rasteiro que tem que parar perto do alvo.
   Depois de cada passe, conta quantos passos a bola parou longe do alvo. Quanto menos, melhor. */

cqRegisterAnim("measure", (box, opts) => {
  const dist = opts.args?.dist || 10;
  const hipX = 48;
  const ballX = hipX + 16;
  const targetX = 262;
  const stepPx = (targetX - ballX) / dist;
  const misses = [1, 0, 2, 1, 0];
  const sides = [-1, 1, -1, 1, 1];
  const y = CQ_GROUND - 6;
  const passBack = { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, legF: [22, 30], armF: [-25, -20], armB: [25, -20] };
  const passHit = { ...CQ_POSE.stand, hipY: CQ_GROUND - 34, lean: -4, legF: [-35, -5], armF: [25, -20], armB: [-25, -20] };
  const segs = [];
  misses.forEach((miss, i) => {
    segs.push({ kind: "back", i, dur: 0.3 });
    segs.push({ kind: "hit", i, dur: 0.12 });
    segs.push({ kind: "roll", i, dur: 1.5 });
    segs.push({ kind: "show", i, dur: 0.9 });
  });
  const line = cqTimeline(segs, 1.2);

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-mark">${cqConeSvg(targetX, 16)}</g>
    ${cqNoteSvg((ballX + targetX) / 2, 160, `← ${dist} ${opts.steps} →`)}
    <text x="${targetX}" y="${CQ_GROUND - 30}" text-anchor="middle" class="a-note a-away"></text>
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const away = svg.querySelector(".a-away");
  const cone = svg.querySelector(".a-mark");

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    const stopX = targetX + sides[seg.i] * misses[seg.i] * stepPx - (misses[seg.i] ? 0 : 10);
    if (seg.kind === "back") rig.pose(hipX, 1, cqMixPose(CQ_POSE.stand, passBack, u));
    else if (seg.kind === "hit") rig.pose(hipX, 1, cqMixPose(passBack, passHit, u));
    else rig.pose(hipX, 1, cqMixPose(passHit, CQ_POSE.stand, cqClamp01(u * 3)));

    if (seg.kind === "roll") {
      // The ball slows down until it stops: that's the weight of the pass.
      const k = 1 - (1 - u) ** 2;
      ball(cqLerp(ballX, stopX, k), y);
    } else if (seg.kind === "show") ball(stopX, y);
    else ball(ballX, y, 0);

    let text = "";
    if (seg.kind === "show") {
      const n = misses[seg.i];
      text = n === 0 ? opts.pick(["no alvo! 0", "on target! 0", "¡en el blanco! 0"]) : `${n} ${opts.steps}`;
      if (n === 0 && u < 0.1) cqFlash(cone);
    }
    if (away.textContent !== text) away.textContent = text;
    away.setAttribute("x", seg.kind === "show" ? stopX : targetX);

    // Running total of the 5 passes.
    let sum = 0;
    for (const s of segs) if (s.kind === "show" && t >= s.start) sum += misses[s.i];
    count(sum);
  });
});
