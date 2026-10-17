/* Finge o chute, ginga e puxa (de lado): conduz 5 passos e, num movimento rápido, arma a perna como se fosse
   chutar enquanto ginga e balança o corpo; só no fim o pé vai para cima da bola. Puxa a bola para trás com a
   sola, vira e volta conduzindo com a outra perna para fazer o mesmo. Cada finta com puxada vale 1. */

cqRegisterAnim("fakepull", (box, opts) => {
  const ahead = 20;
  const marks = [70, 250];
  const braced = { hipY: CQ_GROUND - 34, lean: -4, legF: cqLegIK(ahead - 2, 22), legB: [12, 10], armF: [-35, -30], armB: [40, -30] };
  const overBall = { hipY: CQ_GROUND - 35, lean: -6, legF: cqLegIK(ahead + 1, 12), legB: [6, 6], armF: [40, -20], armB: [-50, -20] };
  const segs = [];
  let bx = marks[0] + 40;
  let d = 1;
  let n = 0;
  for (const to of [marks[1], marks[0]]) {
    segs.push({ kind: "run", dur: 0.3 + Math.abs(to - bx) / 120, from: bx, to, d, n });
    segs.push({ kind: "stop", dur: 0.2, to, d, n });
    segs.push({ kind: "fake", dur: 0.85, to, d, n });
    n++;
    segs.push({ kind: "turn", dur: 0.55, hip: to - d * ahead, b0: to, b1: to - 2 * d * ahead, d, n });
    bx = to - 2 * d * ahead;
    d = -d;
  }
  const line = cqTimeline(segs);

  box.innerHTML = cqSceneSvg(opts.label, `
    ${marks.map((x) => cqFlipflopSvg(x)).join("")}
    ${cqNoteSvg(284, 30, "⏱ 1 min")}
    <text x="10" y="30" class="a-note a-leg"></text>
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    <g class="a-me">${cqPlayerSvg()}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg.querySelector(".a-me"));
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const legLabel = svg.querySelector(".a-leg");
  const texts = {
    run: opts.pick(["conduz 5 passos", "dribble 5 steps", "conduce 5 pasos"]),
    fake: opts.pick(["finge o chute com ginga e balanço...", "fake the shot, swaying your body...", "finge el tiro con ginga y balanceo..."]),
    turn: opts.pick(["...pé em cima da bola, puxa com a sola e volta", "...foot on the ball, drag it back and go", "...pie encima del balón, arrastra y vuelve"]),
  };
  const legNames = {
    1: opts.pick(["perna direita", "right leg", "pierna derecha"]),
    "-1": opts.pick(["perna esquerda", "left leg", "pierna izquierda"]),
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    const touch = (x) => x + seg.d * (ahead + 4 * Math.abs(Math.sin(x / 6)));
    const runEnd = seg.to - seg.d * (ahead + 6);
    let x;
    let b;
    let dir = seg.d;
    let pose = braced;
    let lift = 0;
    if (seg.kind === "run") {
      const k = cqClamp01(u * 4);
      x = cqLerp(seg.from - seg.d * ahead, runEnd, u);
      pose = cqMixPose(braced, cqRunPose(x / 8), k);
      b = cqLerp(seg.from, touch(x), k);
    } else if (seg.kind === "stop") {
      const e = cqEase(u);
      x = cqLerp(runEnd, seg.to - seg.d * ahead, e);
      pose = cqMixPose(cqRunPose(runEnd / 8), braced, e);
      b = cqLerp(touch(runEnd), seg.to, e);
    } else if (seg.kind === "fake") {
      // One quick move: the leg winds back and swings as if to strike while the body sways (the ginga),
      // and only at the end does the foot come down on top of the ball.
      x = seg.to - seg.d * ahead;
      b = seg.to;
      const leg = u < 0.4
        ? cqMixPose(braced, CQ_POSE.kickBack, cqEase(u / 0.4))
        : u < 0.7
          ? cqMixPose(CQ_POSE.kickBack, overBall, cqEase((u - 0.4) / 0.3))
          : cqMixPose(overBall, braced, cqEase((u - 0.7) / 0.3));
      const s = Math.sin(2 * Math.PI * 1.5 * u) * (1 - cqClamp01((u - 0.7) / 0.3));
      pose = {
        ...leg,
        hipY: leg.hipY + 2 * Math.abs(s),
        lean: leg.lean + 14 * s,
        armF: [leg.armF[0] - 35 * s, leg.armF[1]],
        armB: [leg.armB[0] - 35 * s, leg.armB[1]],
      };
      x += 4 * s;
    } else {
      // Sole drag-back: the ball rolls back under the body while the player turns to go the other way.
      const e = cqEase(u);
      const c = Math.cos(Math.PI * e);
      x = seg.hip;
      b = cqLerp(seg.b0, seg.b1, e);
      dir = seg.d * Math.sign(c || 1) * Math.max(0.15, Math.abs(c));
      pose = { ...braced, legF: cqLegIK((b - x) * Math.sign(dir) - 2, 22) };
      lift = 3 * Math.sin(Math.PI * u);
    }
    rig.pose(x, dir, pose, lift);
    ball(b, CQ_GROUND - 6, b * 9.5);
    const text = texts[seg.kind === "stop" ? "run" : seg.kind];
    if (say.textContent !== text) say.textContent = text;
    const leg = legNames[seg.kind === "turn" && u > 0.5 ? -seg.d : seg.d];
    if (legLabel.textContent !== leg) legLabel.textContent = leg;
    const pending = seg.kind === "turn" && u < 1 ? 1 : 0;
    count((round % 5) * 2 + seg.n - pending, svg.querySelector(".a-ball"));
  });
});
