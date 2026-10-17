/* Boliche com chute (de lado): chute com a parte de dentro do pé a meia altura, pelo ar e sem quicar, nas 10 garrafas
   montadas em triângulo como no boliche, a 10 passos. Vale 1 se derrubar pelo menos uma. */

cqRegisterAnim("bowlingshot", (box, opts) => {
  const ballX = 96;
  const frontX = 238;
  const midY = CQ_GROUND - 14;
  const hitAt = 1.0;
  const flightT = 0.9;
  const pins = cqSidePins(frontX);
  const rounds = [[0, 1, 2, 3], [0, 1, 2], [0, 1], [0, 1, 2, 3]];
  const path = (u) => {
    if (u < 0.7) return cqArc(ballX, CQ_GROUND - 6, frontX - 4, midY, 10, u / 0.7);
    const k = (u - 0.7) / 0.3;
    return { x: cqLerp(frontX - 4, frontX + 52, k), y: cqLerp(midY, CQ_GROUND - 6, k * k) };
  };
  let round = -1;
  let lastT = Infinity;

  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      ${pins.svg}
      ${cqNoteSvg((ballX + frontX) / 2, 160, `← 10 ${opts.steps} → · ${opts.pick(["a meia altura, sem quicar", "mid-height, no bounce", "a media altura, sin bote"])}`)}`,
    flight: path,
    flightT,
    flash: ".a-hit",
    onFrame(svg, t) {
      if (t < lastT) round++;
      lastT = t;
      pins.update(svg, path(cqClamp01((t - hitAt) / flightT)).x, t >= hitAt ? rounds[round % rounds.length] : []);
    },
  });
});
