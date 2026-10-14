/* Falta com efeito: a bola sobe por cima da cadeira (barreira) e cai no gol. */

cqRegisterAnim("freekick", (box, opts) => {
  const ballX = 100;
  const chairX = 180;
  const goalX = 268;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      ${cqChairSvg(chairX)}
      <g class="a-hit">${cqGoalSvg(goalX)}</g>
      ${cqNoteSvg((ballX + chairX) / 2, 160, `← 4 ${opts.steps} →`)}`,
    flight: (u) => {
      const p = cqArc(ballX, CQ_GROUND - 6, goalX + 14, CQ_GROUND - 22, 48, u);
      // Inside-foot curl: the ball drifts away and back as it flies.
      p.y -= 6 * Math.sin(Math.PI * u) * (1 - u);
      return p;
    },
    flightT: 0.85,
    flash: ".a-hit",
  });
});
