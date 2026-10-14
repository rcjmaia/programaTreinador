/* Embaixadinha até o alvo (args.dist passos, args.mode foot | alt | head):
   vai andando com a bola no ar até perto do alvo e passa sem deixar cair. */

cqRegisterAnim("keepywalk", (box, opts) => {
  const dist = opts.args?.dist || 5;
  const mode = opts.args?.mode || "foot";
  const startX = 40;
  const endX = dist >= 10 ? 214 : 190;
  const bucketX = 284;
  const hipY = CQ_GROUND - 35;
  const beat = mode === "head" ? 0.6 : 0.5;
  const walkT = (endX - startX) / 46;
  const touchesWalk = Math.round(walkT / beat);
  const walkDur = touchesWalk * beat;
  const base = { ...CQ_POSE.stand, armF: [-30, -30], armB: [30, -30] };
  const poses = {
    foot: { ...base, legF: [-70, 60], armF: [-45, -30], armB: [40, -30] },
    other: { ...base, legB: [-70, 60], armF: [40, -30], armB: [-45, -30] },
    head: { ...CQ_POSE.stand, lean: -12, legF: [-14, 20], legB: [12, 20], armF: [-40, -40], armB: [40, -40] },
  };
  const spotOf = (kind, x) => (kind === "head" ? { x: x - 7, y: hipY - 57 } : { x: x + 23, y: hipY + 16 });
  const kindOf = (i) => (mode === "head" ? "head" : mode === "alt" && i % 2 ? "other" : "foot");
  const label = {
    foot: "",
    alt: opts.pick(["alternando os pés", "alternate feet", "alternando los pies"]),
    head: opts.pick(["só de cabeça", "head only", "solo de cabeza"]),
  }[mode];
  const passT = 0.75;
  const cycle = walkDur + passT + 1.0;

  box.innerHTML = cqSceneSvg(opts.label, `
    <g class="a-hit">${cqBucketSvg(bucketX)}</g>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    <path d="M${bucketX - 10} ${CQ_GROUND - 20} L${bucketX + 10} ${CQ_GROUND - 20} L${bucketX + 7} ${CQ_GROUND} L${bucketX - 7} ${CQ_GROUND} Z" fill="#2563eb" />
    ${cqNoteSvg((startX + bucketX) / 2, 160, `← ${dist} ${opts.steps} →${label ? ` · ${label}` : ""}`)}
    ${cqPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    if (t < walkDur) {
      // Slow walk, one touch per beat; the ball travels forward with the player.
      const x = cqLerp(startX, endX, t / walkDur);
      const i = Math.floor(t / beat);
      const u = t / beat - i;
      const near = u < 0.5 ? i : i + 1;
      const k = Math.max(0, 1 - Math.abs(t / beat - near) / 0.3);
      const walk = cqMixPose(base, cqRunPose(x / 6), 0.25);
      rig.pose(x, 1, cqMixPose(walk, poses[kindOf(near)], k));
      const xa = cqLerp(startX, endX, (i * beat) / walkDur);
      const xb = cqLerp(startX, endX, Math.min(walkDur, (i + 1) * beat) / walkDur);
      const a = spotOf(kindOf(i), xa);
      const b = spotOf(kindOf(i + 1), xb);
      const p = cqArc(a.x, a.y, b.x, b.y, mode === "head" ? 12 : 34, u);
      ball(p.x, p.y, t * 120);
    } else if (t < walkDur + passT) {
      // Last touch is the pass: up and into the bucket.
      const u = (t - walkDur) / passT;
      const kind = kindOf(touchesWalk);
      rig.pose(endX, 1, cqMixPose(poses[kind], base, cqClamp01(u * 2)));
      const a = spotOf(kind, endX);
      const p = cqArc(a.x, a.y, bucketX, CQ_GROUND - 24, 40, u);
      ball(p.x, p.y, u * 400);
    } else {
      rig.pose(endX, 1, base);
      ball(bucketX, CQ_GROUND - 12, 400);
    }
    count((round % 9) + (t >= walkDur + passT ? 1 : 0), target);
  });
});
