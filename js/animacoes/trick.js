/* Truques separados (args.trick): elástico, roleta ou chapéu. Cada um repetido, contando os certos. */

cqRegisterAnim("trick", (box, opts) => {
  const trick = opts.args?.trick || "elastico";
  const y = CQ_GROUND - 6;
  const base = { ...CQ_POSE.ready, lean: 6 };
  const scenes = {
    // Outside of the foot pushes the ball out, inside snaps it back the other way.
    elastico: {
      dur: 1.2,
      draw(rig, ball, u) {
        const x = 150;
        const out = u < 0.4 ? cqEase(u / 0.4) : u < 0.6 ? 1 : 1 - cqEase((u - 0.6) / 0.4);
        rig.pose(x, 1, cqMixPose(base, { ...base, legF: [-40, 20], lean: -6, armF: [-70, -20], armB: [70, -20] }, Math.min(1, out * 1.5)));
        ball(x + 20 + 14 * out, y, out * 200);
      },
    },
    // Sole on the ball, spin around it and pull it away with the other foot.
    roleta: {
      dur: 1.4,
      draw(rig, ball, u) {
        const x = cqLerp(130, 170, u);
        const dir = u < 0.5 ? 1 : -1;
        const spin = Math.sin(Math.PI * u);
        rig.pose(x, dir, cqMixPose(base, { ...base, legF: [-50, 40], lean: 0, armF: [-80, -10], armB: [80, -10] }, spin));
        ball(cqLerp(150, 182, cqEase(u)), y, u * 360);
      },
    },
    // Flick the ball up over the bucket and meet it on the other side.
    chapeu: {
      dur: 1.6,
      draw(rig, ball, u) {
        const flick = cqClamp01(u / 0.25);
        if (u < 0.25) {
          rig.pose(118, 1, cqMixPose(base, { ...base, legF: [-50, -10] }, Math.sin(Math.PI * flick)));
          ball(140, y, 0);
        } else {
          const k = (u - 0.25) / 0.75;
          const x = cqLerp(118, 196, cqEase(k));
          rig.pose(x, 1, cqRunPose(x / 7));
          const p = cqArc(140, y, 218, y, 52, k);
          ball(p.x, p.y, k * 500);
        }
      },
    },
  };
  const sc = scenes[trick] || scenes.elastico;
  const names = {
    elastico: opts.pick(["Elástico", "Elastico", "Elástica"]),
    roleta: opts.pick(["Roleta", "Roulette", "Ruleta"]),
    chapeu: opts.pick(["Chapéu", "Flick over", "Sombrero"]),
  };
  const rest = 0.5;
  const cycle = sc.dur + rest;

  box.innerHTML = cqSceneSvg(opts.label, `
    ${trick === "chapeu" ? cqBucketSvg(178) : ""}
    ${cqNoteSvg(160, 56, names[trick] || names.elastico)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    sc.draw(rig, ball, cqClamp01(t / sc.dur));
    count((round % 9) + (t >= sc.dur ? 1 : 0));
  });
});
