/* Afasta de primeira: a bola volta da parede e ele chuta sem dominar, alto, acima da marca. */

cqRegisterAnim("clearance", (box, opts) => {
  const ballX = 170;
  const wallX = 266;
  const markY = 70;
  const y = CQ_GROUND - 6;
  return cqKickScene(box, opts, {
    ballX,
    runUp: false,
    scenery: `
      ${cqWallSvg(wallX)}
      <g class="a-hit"><rect x="${wallX}" y="${markY - 2}" width="${CQ_W - wallX}" height="4" fill="#facc15" /></g>`,
    // Rolling back off the wall towards his feet.
    before: (t) => ({ x: cqLerp(wallX - 6, ballX, cqClamp01(t / 1.0)), y }),
    flight: (u) => cqArc(ballX, y, wallX - 6, markY - 24, 40, u),
    flightT: 0.55,
    flash: ".a-hit",
  });
});
