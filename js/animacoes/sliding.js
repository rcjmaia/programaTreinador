/* Carrinho na grama: corre, desliza de lado e tira a bola parada do quadrado. */

cqRegisterAnim("sliding", (box, opts) => {
  const boxL = 180;
  const boxR = 226;
  const ballX = (boxL + boxR) / 2;
  const runT = 1.0;
  const slideT = 0.55;
  const cycle = 3.2;
  const slideFrom = 118;
  const slideTo = 172;
  // In the slide pose the front foot reaches 35 ahead of the hip.
  const hitHip = ballX - 35;
  const y = CQ_GROUND - 6;

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">
      <rect x="${boxL}" y="${CQ_GROUND - 1}" width="${boxR - boxL}" height="4" fill="rgba(250, 204, 21, 0.35)" />
      ${cqFlipflopSvg(boxL, "#ef4444")}
      ${cqFlipflopSvg(boxR, "#ef4444")}
    </g>
    ${cqNoteSvg(160, 160, opts.pick(["só na grama ou na areia", "grass or sand only", "solo en pasto o arena"]))}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const square = svg.querySelector(".a-hit");

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    let x;
    if (t < runT) {
      x = cqLerp(20, slideFrom, t / runT);
      rig.pose(x, 1, cqRunPose(x / 8));
    } else if (t < runT + slideT) {
      const k = (t - runT) / slideT;
      x = cqLerp(slideFrom, slideTo, 1 - (1 - k) ** 2);
      rig.pose(x, 1, cqMixPose(cqRunPose(slideFrom / 8), CQ_POSE.slide, cqClamp01(k / 0.25)));
    } else {
      x = slideTo;
      const k = cqClamp01((t - runT - slideT - 0.4) / 0.6);
      rig.pose(x, 1, cqMixPose(CQ_POSE.slide, CQ_POSE.stand, cqEase(k)));
    }

    // Time the slide reaches the ball, found from the slide easing.
    const hitK = 1 - Math.sqrt(1 - (hitHip - slideFrom) / (slideTo - slideFrom));
    const hitAt = runT + hitK * slideT;
    if (t < hitAt) ball(ballX, y, 0);
    else {
      const u = cqClamp01((t - hitAt) / 0.7);
      ball(cqLerp(ballX, 300, 1 - (1 - u) ** 2), y);
    }
    count((round % 5) + (t >= hitAt + 0.25 ? 1 : 0), square);
  });
});
