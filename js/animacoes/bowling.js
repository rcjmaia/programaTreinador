/* Boliche com passe: passe rasteiro, com a parte de dentro do pé, para derrubar as garrafas a 7 passos. */

cqRegisterAnim("bowling", (box, opts) => {
  const ballX = 112;
  const bottles = [250, 259, 268];
  const hitAt = 1.0;
  const flightT = 0.75;
  const bottle = (x) => `
    <g class="a-bottle" data-x="${x}">
      <rect x="${x - 3.5}" y="${CQ_GROUND - 20}" width="7" height="20" rx="2" fill="rgba(186,230,253,0.85)" stroke="#0ea5e9" stroke-width="0.8" />
      <rect x="${x - 2}" y="${CQ_GROUND - 25}" width="4" height="5" fill="rgba(186,230,253,0.85)" stroke="#0ea5e9" stroke-width="0.8" />
      <rect x="${x - 2.2}" y="${CQ_GROUND - 27}" width="4.4" height="2.5" fill="#2563eb" />
    </g>`;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      <g class="a-hit">${bottles.map(bottle).join("")}</g>
      ${cqNoteSvg((ballX + bottles[1]) / 2, 160, `← 7 ${opts.steps} → · ${opts.pick(["passe rasteiro", "ground pass", "pase rasante"])}`)}`,
    flight: (u) => ({ x: cqLerp(ballX, bottles[0] - 9, u), y: CQ_GROUND - 6 }),
    flightT,
    flash: ".a-hit",
    onFrame(svg, t) {
      const fall = cqEase(cqClamp01((t - hitAt - flightT) / 0.3));
      svg.querySelectorAll(".a-bottle").forEach((el, i) => {
        const x = Number(el.dataset.x);
        el.setAttribute("transform", `rotate(${fall * (78 - i * 12)} ${x + 3.5} ${CQ_GROUND})`);
      });
    },
  });
});
