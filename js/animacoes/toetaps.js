/* Toquinhos de sola: parado, toca a sola em cima da bola alternando os pés, num ritmo rápido. */

cqRegisterAnim("toetaps", (box, opts) => {
  const hipX = 150;
  const hipY = CQ_GROUND - 35;
  const ballX = 168;
  const beat = 0.34;
  const rest = [2, 35];
  const top = [ballX - hipX - 2, CQ_GROUND - 13 - hipY];
  const feet = [opts.pick(["direito", "right", "derecho"]), opts.pick(["esquerdo", "left", "izquierdo"])];

  box.innerHTML = cqSceneSvg(opts.label, `
    <text x="${hipX + 70}" y="70" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(hipX + 70, 84, opts.pick(["sola em cima da bola", "sole on top of the ball", "suela encima del balón"]))}
    ${cqNoteSvg(160, 160, opts.pick(["⏱ 30 segundos", "⏱ 30 seconds", "⏱ 30 segundos"]))}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  ball(ballX, CQ_GROUND - 6, 0);

  return cqLoop((seconds) => {
    const i = Math.floor(seconds / beat);
    const u = seconds / beat - i;
    const up = Math.sin(Math.PI * u);
    const tap = cqLegIK(cqLerp(rest[0], top[0], up), cqLerp(rest[1], top[1], up));
    const still = cqLegIK(rest[0] - 4, rest[1]);
    const near = i % 2 === 0;
    const swing = near ? -1 : 1;
    rig.pose(hipX, 1, {
      ...CQ_POSE.stand,
      hipY: hipY - 1.5 * up,
      lean: 6,
      legF: near ? tap : still,
      legB: near ? still : tap,
      armF: [25 * swing, -40],
      armB: [-25 * swing, -40],
    });
    const name = feet[i % 2];
    if (say.textContent !== name) say.textContent = name;
    count((i % 60) + (u >= 0.5 ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
