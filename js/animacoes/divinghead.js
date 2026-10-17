/* Peixinho no colchão (de lado): alguém joga a bola baixa, ele se joga para a frente no colchão
   e cabeceia no gol. Cai com os braços na frente, levanta e repete. Uma rodada sim, outra não, ele está
   sozinho e joga a bola para o alto, um pouco à frente, antes de mergulhar. */

cqRegisterAnim("divinghead", (box, opts) => {
  const startX = 100;
  const goalX = 248;
  const helperX = 276;
  const hand = { x: helperX - 20, y: 100 };
  const held = { x: 124, y: 90 };
  const diveHip = { x: 138, y: CQ_GROUND - 12 };
  const lieHip = { x: 140, y: CQ_GROUND - 8 };
  const tossAt = 0.25;
  const hitAt = 0.95;
  const goalAt = 1.35;
  const cycle = 2.8;
  const diveAngle = 78;
  const rad = (diveAngle * Math.PI) / 180;
  const meet = { x: diveHip.x + 42 * Math.sin(rad) + 3, y: diveHip.y - 42 * Math.cos(rad) - 1 };
  const corner = { x: goalX + 14, y: CQ_GROUND - 6 };
  const ready = { ...CQ_POSE.ready, hipY: CQ_GROUND - 32, armF: [-30, -40], armB: [30, -40] };
  const hold = { ...ready, lean: 4, armF: [-80, -15], armB: [-72, -15] };
  const toss = { ...ready, lean: 0, armF: [-160, -10], armB: [-150, -10] };
  const dive = { hipY: diveHip.y, lean: 0, legF: [12, 8], legB: [22, 10], armF: [-150, -10], armB: [-140, -10] };
  const lie = { ...dive, hipY: lieHip.y, armF: [-160, -20], armB: [-150, -20] };
  const isSolo = (round) => round % 2 === 1;

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-helper-wrap" transform="translate(${helperX},${CQ_GROUND}) scale(0.85) translate(${-helperX},${-CQ_GROUND})">
      <g class="a-helper" opacity="0.9">${cqFrontPlayerSvg(CQ_KIT_HELPER)}</g>
    </g>
    <g class="a-hit">${cqGoalSvg(goalX)}</g>
    <rect x="94" y="${CQ_GROUND - 6}" width="112" height="7" rx="3" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1" />
    ${cqNoteSvg(150, 160, opts.pick(["colchão", "mattress", "colchón"]))}
    <text x="110" y="56" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-dive"><g class="a-me">${cqPlayerSvg()}</g></g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const diveEl = svg.querySelector(".a-dive");
  const rig = cqPlayerRig(svg.querySelector(".a-me"));
  const helperWrap = svg.querySelector(".a-helper-wrap");
  const helper = cqFrontRig(svg.querySelector(".a-helper"));
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const goal = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const texts = {
    toss: opts.pick(["jogam a bola baixa...", "the ball is tossed low...", "te lanzan el balón bajo..."]),
    solo: opts.pick(["sozinho: joga a bola para o alto, à frente...", "on your own: toss it up, out in front...", "solo: lanza el balón arriba, adelante..."]),
    dive: opts.pick(["...se joga e cabeceia!", "...dive and head it!", "...¡lánzate y cabecea!"]),
    land: opts.pick(["cai com os braços na frente", "land with your arms out in front", "cae con los brazos delante"]),
  };

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const solo = isSolo(round);
    const nextSolo = isSolo(round + 1);
    const start = solo ? toss : ready;
    let x = startX;
    let pose = ready;
    let angle = 0;
    if (t < 0.55) {
      if (solo) pose = cqMixPose(hold, toss, cqEase(cqClamp01((t - tossAt + 0.1) / 0.2)));
    } else if (t < hitAt) {
      const e = cqEase((t - 0.55) / (hitAt - 0.55));
      x = cqLerp(startX, diveHip.x, e);
      pose = cqMixPose(start, dive, e);
      angle = diveAngle * e;
    } else if (t < 1.9) {
      const e = cqEase(cqClamp01((t - hitAt) / 0.4));
      x = cqLerp(diveHip.x, lieHip.x, e);
      pose = cqMixPose(dive, lie, e);
      angle = cqLerp(diveAngle, 88, e);
    } else if (t < 2.5) {
      const e = cqEase((t - 1.9) / 0.6);
      x = cqLerp(lieHip.x, startX, e);
      pose = cqMixPose(lie, ready, e);
      angle = cqLerp(88, 0, e);
    } else if (nextSolo) pose = cqMixPose(ready, hold, cqEase(cqClamp01((t - 2.5) / 0.2)));
    rig.pose(x, 1, pose);
    diveEl.setAttribute("transform", `rotate(${angle} ${x} ${pose.hipY})`);
    let shown = solo ? 0 : 1;
    if (!solo && nextSolo) shown = 1 - cqClamp01((t - 2.3) / 0.3);
    if (solo && !nextSolo) shown = cqClamp01((t - 2.4) / 0.3);
    helperWrap.setAttribute("opacity", shown);
    helper.pose(helperX, { ...CQ_FRONT.stand, armL: !solo && t > 0.05 && t < 0.5 ? [cqLerp(8, 70, cqClamp01((t - 0.05) / 0.2)), 0] : [8, 0] });

    const from = solo ? held : hand;
    let b;
    if (t < tossAt) b = solo ? held : { x: hand.x, y: hand.y + 18 * (1 - t / tossAt) };
    else if (t < hitAt) b = cqArc(from.x, from.y, meet.x, meet.y, solo ? 48 : 14, (t - tossAt) / (hitAt - tossAt));
    else if (t < goalAt) {
      const u = (t - hitAt) / (goalAt - hitAt);
      b = { x: cqLerp(meet.x, corner.x, u), y: cqLerp(meet.y, corner.y, u) };
    } else if (t < (nextSolo ? 2.55 : 2.3)) b = corner;
    else b = nextSolo ? held : { x: hand.x, y: hand.y + 18 };
    ball(b.x, b.y, t * 400);
    const text = t < 0.55 ? (solo ? texts.solo : texts.toss) : t < 1.3 ? texts.dive : texts.land;
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (t >= goalAt ? 1 : 0), goal);
  });
});
