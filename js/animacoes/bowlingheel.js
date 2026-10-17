/* Boliche de calcanhar (de lado): de costas para as garrafas, com a bola logo atrás do pé de apoio, chuta de
   calcanhar para trás nas 10 garrafas montadas em triângulo como no boliche, a 7 passos. Vale 1 se derrubar pelo menos uma. */

cqRegisterAnim("bowlingheel", (box, opts) => {
  const hipX = 128;
  const ballX = hipX + 21;
  const frontX = ballX + 100;
  const endX = frontX + 46;
  const hipY = CQ_GROUND - 35;
  const pins = cqSidePins(frontX);
  const rounds = [[0, 1, 2, 3], [0, 1, 2], [0, 1], [0, 1, 2, 3]];
  const line = cqTimeline([
    { kind: "look", dur: 0.6 },
    { kind: "wind", dur: 0.35 },
    { kind: "heel", dur: 0.14 },
    { kind: "roll", dur: 1.0 },
    { kind: "rest", dur: 0.8 },
  ], 0.3);
  const stand = { ...CQ_POSE.stand, lean: 6, armF: [-20, -20], armB: [20, -20] };
  const wind = { ...stand, lean: 4, legF: cqLegIK(12, 30), armF: [30, -20], armB: [-30, -20] };
  const heel = { ...stand, lean: 16, legF: cqLegIK(-23, 29), armF: [-50, -20], armB: [45, -20] };
  const follow = { ...heel, legF: cqLegIK(-28, 20) };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${pins.svg}
    ${cqNoteSvg((ballX + frontX) / 2, 160, `← 7 ${opts.steps} → · ${opts.pick(["de costas, de calcanhar", "back turned, with your heel", "de espaldas, de taco"])}`)}
    <text x="232" y="74" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-me">${cqPlayerSvg()}</g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg.querySelector(".a-me"));
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const hitEl = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const texts = {
    look: opts.pick(["de costas, a bola logo atrás do pé", "back turned, ball just behind your foot", "de espaldas, el balón justo detrás del pie"]),
    kick: opts.pick(["chuta de calcanhar para trás!", "back-heel it!", "¡taconazo hacia atrás!"]),
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let pose = stand;
    if (seg.kind === "wind") pose = cqMixPose(stand, wind, cqEase(u));
    else if (seg.kind === "heel") pose = cqMixPose(wind, heel, u);
    else if (seg.kind === "roll") pose = u < 0.3 ? cqMixPose(heel, follow, u / 0.3) : cqMixPose(follow, stand, cqEase((u - 0.3) / 0.7));
    rig.pose(hipX, -1, pose);

    let bx = ballX;
    if (seg.kind === "roll") bx = cqLerp(ballX, endX, 1 - (1 - u) ** 2);
    else if (seg.kind === "rest") bx = endX;
    ball(bx, CQ_GROUND - 6, bx * 9.5);
    pins.update(svg, bx, rounds[round % rounds.length]);

    const text = seg.kind === "look" || seg.kind === "wind" ? texts.look : texts.kick;
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (bx >= frontX - 6 ? 1 : 0), hitEl);
  });
});
