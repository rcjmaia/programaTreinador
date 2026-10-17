/* Lambreta (de lado): a sola do pé da frente rola a bola para trás, subindo no calcanhar do pé de trás.
   Um pulinho, o calcanhar joga a bola por cima da cabeça e ele corre para dominar do outro lado. */

cqRegisterAnim("lambreta", (box, opts) => {
  const hipX = 130;
  const hipY = CQ_GROUND - 35;
  const ballStart = { x: 152, y: CQ_GROUND - 6 };
  const heel = { x: hipX - 9, y: CQ_GROUND - 14 };
  const land = { x: 232, y: CQ_GROUND - 6 };
  const meetX = 208;
  const line = cqTimeline([
    { kind: "roll", dur: 0.6 },
    { kind: "flick", dur: 0.22 },
    { kind: "fly", dur: 0.9 },
    { kind: "trap", dur: 0.35 },
  ], 0.6);
  const base = { ...CQ_POSE.stand, lean: 4, legB: [8, 4], armF: [-30, -30], armB: [35, -30] };
  const flick = { ...base, hipY: hipY - 4, lean: 10, legF: [-20, 30], legB: [18, 115], armF: [-70, -30], armB: [70, -30] };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqNoteSvg(250, 56, opts.pick(["Lambreta", "Rainbow flick", "Lambretta"]))}
    <text x="150" y="160" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-path"><path d="" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 2" opacity="0" /></g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const trail = svg.querySelector(".a-path path");
  const texts = {
    roll: opts.pick(["a sola rola a bola para trás, até o calcanhar", "the sole rolls the ball back onto your heel", "la suela rueda el balón atrás, hasta el talón"]),
    flick: opts.pick(["pulinho: o calcanhar joga a bola para cima", "hop: your heel flicks the ball up", "saltito: el talón lanza el balón arriba"]),
    fly: opts.pick(["por cima da cabeça... corre para a frente", "over your head... run forward", "por encima de la cabeza... corre adelante"]),
    trap: opts.pick(["e domina do outro lado!", "and control it on the other side!", "¡y controla del otro lado!"]),
  };
  const arc = (u) => cqArc(heel.x, heel.y, land.x, land.y, 84, u);
  trail.setAttribute("d", `M${Array.from({ length: 25 }, (_, i) => {
    const p = arc(i / 24);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" L")}`);

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let b;
    trail.setAttribute("opacity", seg.kind === "fly" ? 0.5 : 0);
    if (seg.kind === "roll") {
      // Ball rolls back under the front sole and climbs onto the back heel.
      const e = cqEase(u);
      b = { x: cqLerp(ballStart.x, heel.x, e), y: cqLerp(ballStart.y, heel.y, e * e) };
      const sole = cqLegIK(b.x - hipX + 1, b.y - 7 - hipY);
      rig.pose(hipX, 1, { ...base, legF: sole });
    } else if (seg.kind === "flick") {
      const e = cqEase(u);
      rig.pose(hipX, 1, cqMixPose({ ...base, legF: cqLegIK(heel.x - hipX + 1, heel.y - 7 - hipY) }, flick, e), 4 * Math.sin(Math.PI * u));
      b = { x: heel.x, y: heel.y - 6 * e };
    } else if (seg.kind === "fly") {
      const x = cqLerp(hipX, meetX, cqEase(cqClamp01((u - 0.2) / 0.8)));
      rig.pose(x, 1, u < 0.2 ? cqMixPose(flick, CQ_POSE.stand, u / 0.2) : cqRunPose(x / 7));
      b = arc(u);
    } else {
      const e = cqEase(u);
      rig.pose(meetX, 1, cqMixPose(cqRunPose(meetX / 7), { ...CQ_POSE.stand, legF: [-35, 30] }, e));
      b = { x: land.x - 4 * e, y: land.y };
    }
    ball(b.x, b.y, b.x * 6);
    const text = texts[seg.kind];
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "trap" && u >= 1 ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
