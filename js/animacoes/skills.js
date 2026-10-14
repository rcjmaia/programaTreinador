/* Truques de craque: pedalada e puxada de sola, cada um 3 vezes seguidas. */

cqRegisterAnim("skills", (box, opts) => {
  const hipX = 150;
  const rep = 0.9;
  const reps = 3;
  const y = CQ_GROUND - 6;
  const base = { ...CQ_POSE.ready, lean: 6 };
  const tricks = [
    {
      name: opts.pick(["Pedalada", "Step-over", "Bicicleta"]),
      // The leg circles over the ball, from behind to the front, without touching it.
      frames: [
        { t: 0, x: hipX, pose: base },
        { t: 0.25, x: hipX, pose: { ...base, legF: [-30, 85], armF: [-60, -30], armB: [55, -30] } },
        { t: 0.5, x: hipX + 3, pose: { ...base, legF: [-65, 70], lean: 2, armF: [-70, -20], armB: [60, -20] } },
        { t: 0.7, x: hipX + 2, pose: { ...base, legF: [-30, 10], lean: 10 } },
        { t: rep, x: hipX, pose: base },
      ],
      ball: () => hipX + 22,
    },
    {
      name: opts.pick(["Puxada de sola", "Sole drag", "Arrastre de suela"]),
      // Sole on top of the ball, pull it back, then push it out again.
      frames: [
        { t: 0, x: hipX, pose: base },
        { t: 0.2, x: hipX, pose: { ...base, legF: [-70, 60] } },
        { t: 0.5, x: hipX - 4, pose: { ...base, legF: [-15, 40], lean: 0 } },
        { t: 0.75, x: hipX, pose: { ...base, legF: [-40, 20] } },
        { t: rep, x: hipX, pose: base },
      ],
      ball: (t) => {
        if (t < 0.2) return hipX + 22;
        if (t < 0.5) return cqLerp(hipX + 22, hipX + 6, cqEase((t - 0.2) / 0.3));
        if (t < 0.75) return cqLerp(hipX + 6, hipX + 22, cqEase((t - 0.5) / 0.25));
        return hipX + 22;
      },
    },
  ];
  const block = rep * reps + 0.6;

  box.innerHTML = cqSceneSvg(opts.label, `
    <text x="160" y="56" text-anchor="middle" class="a-note a-trick"></text>
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const label = svg.querySelector(".a-trick");
  let lastLabel = "";

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / block);
    const trick = tricks[n % tricks.length];
    const tb = seconds - n * block;
    const r = Math.min(reps - 1, Math.floor(tb / rep));
    const t = tb < rep * reps ? tb - r * rep : rep;
    const st = cqKeys(trick.frames, t);
    rig.pose(st.x, 1, st.pose);
    ball(trick.ball(t), y, 0);

    const text = `${trick.name} ${"✓".repeat(tb < rep * reps ? r + (t > 0.8 ? 1 : 0) : reps)}`;
    if (text !== lastLabel) label.textContent = lastLabel = text;
    count((n % 8) + (tb >= rep * reps ? 1 : 0));
  });
});
