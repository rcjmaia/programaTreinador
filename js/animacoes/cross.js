/* Cruzamento na caixa: bola alta que cai dentro do quadrado marcado com chinelos. */

cqRegisterAnim("cross", (box, opts) => {
  const ballX = 84;
  const boxL = 230;
  const boxR = 290;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      <g class="a-hit">
        <rect x="${boxL}" y="${CQ_GROUND - 1}" width="${boxR - boxL}" height="4" fill="rgba(250, 204, 21, 0.35)" />
        ${cqFlipflopSvg(boxL, "#ef4444")}
        ${cqFlipflopSvg(boxR, "#ef4444")}
      </g>
      ${cqNoteSvg((ballX + boxL) / 2, 160, `← 10 ${opts.steps} →`)}
      ${cqNoteSvg((boxL + boxR) / 2, 160, `3 ${opts.steps}`)}`,
    flight: (u) => cqArc(ballX, CQ_GROUND - 6, (boxL + boxR) / 2, CQ_GROUND - 6, 62, u),
    flightT: 1.0,
    flash: ".a-hit",
  });
});
