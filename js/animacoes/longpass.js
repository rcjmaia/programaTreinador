/* Lançamento no balde: bola pelo alto que para perto do balde. */

cqRegisterAnim("longpass", (box, opts) => {
  const ballX = 84;
  const bucketX = 284;
  const landX = 258;
  return cqKickScene(box, opts, {
    ballX,
    scenery: `
      <g class="a-hit">${cqBucketSvg(bucketX)}</g>
      ${cqNoteSvg((ballX + bucketX) / 2, 160, `← 15 ${opts.steps} →`)}`,
    flight: (u) => {
      // 80% of the time in the air, then a short roll towards the bucket.
      if (u < 0.8) return cqArc(ballX, CQ_GROUND - 6, landX, CQ_GROUND - 6, 70, u / 0.8);
      const k = (u - 0.8) / 0.2;
      return { x: cqLerp(landX, bucketX - 16, 1 - (1 - k) ** 2), y: CQ_GROUND - 6 };
    },
    flightT: 1.2,
    flash: ".a-hit",
  });
});
