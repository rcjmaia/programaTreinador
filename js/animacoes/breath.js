/* Respiração do goleador (de frente): 4 segundos puxando o ar, 4 soltando, junto com a bola. */

cqRegisterAnim("breath", (box, opts) => {
  const x = 104;
  const ballX = 226;
  const ballY = 88;
  const half = 4;
  const words = [
    opts.pick(["Puxa o ar", "Breathe in", "Toma aire"]),
    opts.pick(["Solta o ar", "Breathe out", "Suelta el aire"]),
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-breath-ball">${cqBallSvg(10)}</g>
    <text x="${ballX}" y="160" text-anchor="middle" class="a-note a-breath-word"></text>
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);
  const ball = svg.querySelector(".a-breath-ball");
  const word = svg.querySelector(".a-breath-word");
  let lastWord = "";

  return cqLoop((seconds) => {
    const phase = seconds % (half * 2);
    const inhale = phase < half;
    const k = cqEase(inhale ? phase / half : 1 - (phase - half) / half);
    ball.setAttribute("transform", `translate(${ballX},${ballY}) scale(${1 + 2.2 * k})`);
    // Chest rises a little and the arms float out as the air comes in.
    rig.pose(x, {
      hipY: CQ_GROUND - 35 - 1.5 * k,
      armL: [8 + 14 * k, 0],
      armR: [8 + 14 * k, 0],
      legL: [4, 0],
      legR: [4, 0],
    });
    const w = words[inhale ? 0 : 1];
    if (w !== lastWord) word.textContent = lastWord = w;
    count(Math.floor(seconds / (half * 2)) % 20);
  });
});
