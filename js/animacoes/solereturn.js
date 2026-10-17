/* Vai conduzindo, volta puxando (de lado): conduz 5 passos com o peito do pé, para a bola com a sola e volta de
   costas, sem virar, puxando a bola com a sola: pisa, rola para trás, passinho para trás, de novo. Ida e volta vale 1. */

cqRegisterAnim("solereturn", (box, opts) => {
  const markA = 70;
  const markB = 250;
  const ahead = 20;
  const pulls = 6;
  const reach = (markB - markA) / pulls;
  const line = cqTimeline([
    { kind: "run", dur: 1.5 },
    { kind: "stop", dur: 0.25 },
    { kind: "hold", dur: 0.25 },
    { kind: "back", dur: pulls * 0.55 },
  ], 0.3);
  const sole = (dx) => cqLegIK(dx - 2, 22);
  const braced = { hipY: CQ_GROUND - 34, lean: -4, legF: sole(ahead), legB: [12, 10], armF: [-35, -30], armB: [40, -30] };
  const touch = (x) => x + ahead + 4 * Math.abs(Math.sin(x / 6));
  const runEnd = markB - ahead - 6;

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqFlipflopSvg(markA)}
    ${cqFlipflopSvg(markB)}
    ${cqNoteSvg(284, 30, "⏱ 30 s")}
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    <g class="a-me">${cqPlayerSvg()}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg.querySelector(".a-me"));
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const texts = {
    run: opts.pick(["vai conduzindo com o peito do pé", "dribble out with your laces", "ida conduciendo con el empeine"]),
    stop: opts.pick(["para com a sola", "stop it with your sole", "para con la suela"]),
    back: opts.pick(["volta de costas, puxando com a sola", "come back walking backwards, dragging with your sole", "vuelve de espaldas, arrastrando con la suela"]),
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let x;
    let b;
    let pose = braced;
    if (seg.kind === "run") {
      const k = cqClamp01(u * 4);
      x = cqLerp(markA - ahead, runEnd, u);
      pose = cqMixPose(braced, cqRunPose(x / 8), k);
      b = cqLerp(markA, touch(x), k);
    } else if (seg.kind === "stop") {
      const e = cqEase(u);
      x = cqLerp(runEnd, markB - ahead, e);
      pose = cqMixPose(cqRunPose(runEnd / 8), braced, e);
      b = cqLerp(touch(runEnd), markB, e);
    } else if (seg.kind === "hold") {
      x = markB - ahead;
      b = markB;
    } else {
      // Each pull: the sole rolls the ball back under the body while the hips sink back, then the foot comes off
      // and a little backward step brings the ball out in front again.
      const n = Math.min(pulls - 1, Math.floor(u * pulls));
      const p = u * pulls - n;
      const start = markB - ahead - n * reach;
      if (p < 0.6) {
        const e = cqEase(p / 0.6);
        x = start - (reach / 2) * e;
        b = start + ahead - reach * e;
        pose = { ...braced, legF: sole(b - x) };
      } else {
        const e = cqEase((p - 0.6) / 0.4);
        x = start - reach / 2 - (reach / 2) * e;
        b = start + ahead - reach;
        const step = Math.sin(Math.PI * e);
        pose = { ...braced, legF: cqLegIK(b - x - 2, 22 - 4 * step), legB: [12 + 14 * step, 10 + 20 * step] };
      }
    }
    rig.pose(x, 1, pose);
    ball(b, CQ_GROUND - 6, b * 9.5);
    const text = texts[seg.kind === "hold" ? "stop" : seg.kind];
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "back" && u >= 1 ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
