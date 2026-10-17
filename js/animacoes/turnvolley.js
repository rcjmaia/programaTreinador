/* Vira e acerta no ar (args.dist passos, args.kind pass | shot): de costas para o alvo, joga a bola
   por cima da cabeça, vira de frente e bate antes de ela cair. pass = parte de dentro no alvo da parede,
   shot = peito do pé no gol. Mostra o treino feito sozinho. */

cqRegisterAnim("turnvolley", (box, opts) => {
  const dist = opts.args?.dist || 5;
  const pass = opts.args?.kind === "pass";
  const targetX = pass ? 274 : 262;
  const hipX = targetX - (pass ? 50 : 60) - dist * 7;
  const aimY = CQ_GROUND - 34;
  const step = 6;
  const hipY = CQ_GROUND - 35;
  const throwAt = 0.45;
  const hitAt = 1.45;
  const flyT = pass ? 0.55 : 0.32;
  const cycle = 3.2;
  const hold = { ...CQ_POSE.stand, armF: [-150, -20], armB: [-140, -20] };
  const release = { ...CQ_POSE.stand, lean: -14, armF: [170, -10], armB: [175, -10] };
  const start = { x: hipX - 8, y: hipY - 52 };
  const contact = { x: hipX + step + 30, y: CQ_GROUND - 18 };
  const land = pass ? { x: targetX - 6, y: aimY } : { x: targetX + 12, y: CQ_GROUND - 24 };
  const frames = [
    { t: 0, x: hipX, pose: hold },
    { t: 0.3, x: hipX, pose: { ...hold, hipY: hipY + 3 } },
    { t: throwAt, x: hipX, pose: release },
    { t: 0.6, x: hipX, pose: CQ_POSE.ready },
    { t: 1.05, x: hipX + step, pose: CQ_POSE.ready },
    { t: 1.3, x: hipX + step, pose: CQ_POSE.kickBack },
    { t: hitAt, x: hipX + step, pose: CQ_POSE.kickHit },
    { t: 1.85, x: hipX + step, pose: CQ_POSE.kickHit },
    { t: 2.4, x: hipX, pose: CQ_POSE.stand },
    { t: 3.0, x: hipX, pose: hold },
    { t: cycle, x: hipX, pose: hold },
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    ${pass ? cqWallSvg(targetX) : ""}
    <g class="a-hit">${pass ? `
      <circle cx="${targetX + 4}" cy="${aimY}" r="12" fill="none" stroke="#facc15" stroke-width="3" />
      <circle cx="${targetX + 4}" cy="${aimY}" r="4" fill="#facc15" />` : cqGoalSvg(targetX, 34, 46)}</g>
    <text x="10" y="44" class="a-note a-say"></text>
    ${cqNoteSvg((hipX + targetX) / 2, 160, `← ${dist} ${opts.steps} →`)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const texts = {
    toss: opts.pick(["de costas: joga por cima da cabeça", "back turned: toss it over your head", "de espaldas: lánzalo por encima"]),
    turn: opts.pick(["vira!", "turn!", "¡gira!"]),
    hit: pass
      ? opts.pick(["passa no ar: parte de dentro do pé", "pass in the air: inside of the foot", "pasa en el aire: interior del pie"])
      : opts.pick(["chuta no ar: peito do pé", "shoot in the air: laces", "remata en el aire: empeine"]),
  };
  // Back to the target (facing left) until the toss, a quick turn, and back again for the next go.
  const dirAt = (t) => {
    if (t < 0.55) return -1;
    if (t < 0.9) return -Math.cos(Math.PI * (t - 0.55) / 0.35);
    if (t < 2.55) return 1;
    if (t < 2.9) return Math.cos(Math.PI * (t - 2.55) / 0.35);
    return -1;
  };

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const st = cqKeys(frames, t);
    rig.pose(st.x, dirAt(t), st.pose);

    if (t < throwAt || t >= 3.0) ball(start.x, start.y, 0);
    else if (t < hitAt) {
      const p = cqArc(start.x, start.y, contact.x, contact.y, 42, (t - throwAt) / (hitAt - throwAt));
      ball(p.x, p.y, (t - throwAt) * 300);
    } else if (t < hitAt + flyT) {
      const p = cqArc(contact.x, contact.y, land.x, land.y, pass ? (dist >= 10 ? 44 : 30) : 6, (t - hitAt) / flyT);
      ball(p.x, p.y, (t - hitAt) * 900);
    } else {
      // Bounces off the wall target and drops back onto the grass, or drops into the net.
      const u = cqClamp01((t - hitAt - flyT) / (pass ? 0.5 : 0.3));
      if (pass) ball(cqLerp(land.x, land.x - 36, u), cqLerp(land.y, CQ_GROUND - 6, u * u), -u * 300);
      else ball(land.x + 8 * u, cqLerp(land.y, CQ_GROUND - 6, u), 0);
    }

    const text = t < 0.55 ? texts.toss : t < 1.05 ? texts.turn : t < 2.2 ? texts.hit : "";
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (t >= hitAt + flyT ? 1 : 0), target);
  });
});
