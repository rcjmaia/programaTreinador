/* Finta de corpo e arrancada (vista de cima): conduz até o marcador, joga o ombro e o corpo para um lado,
   ele vai junto, e sai com a parte de fora do pé pelo outro lado, chutando no gol a 7 passos.
   Nas voltas ímpares a cena é espelhada: a finta é para o outro lado. */

cqRegisterAnim("bodyfeint", (box, opts) => {
  const k = 1.3;
  const laneY = 85;
  const goalX = 300;
  const def = { x: 200, y: laneY };
  const defBite = { x: 198, y: 70 };
  const stopX = 150;
  const reach = 15;
  const feint = { x: 152, y: 77 };
  const ballOut = { x: 214, y: 116 };
  const runOut = { x: 200, y: 114 };
  const shotTo = { x: goalX + 2, y: 96 };
  const line = cqTimeline([
    { kind: "carry", dur: 1.1 },
    { kind: "feint", dur: 0.45 },
    { kind: "go", dur: 0.55 },
    { kind: "shot", dur: 0.45 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-mirror">
      <rect x="${goalX}" y="62" width="12" height="46" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" />
      <g class="a-hit"><line x1="${goalX}" y1="62" x2="${goalX}" y2="108" stroke="#f8fafc" stroke-width="3" /></g>
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT_HELPER, "a-top a-def")}
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g>
    ${cqNoteSvg((def.x + goalX) / 2, 140, `← 7 ${opts.steps} →`)}
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const mirror = svg.querySelector(".a-mirror");
  const me = svg.querySelector(".a-me");
  const defEl = svg.querySelector(".a-def");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const goal = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const texts = {
    carry: opts.pick(["conduz até o marcador", "dribble up to the defender", "conduce hasta el marcador"]),
    feint: opts.pick(["joga o ombro e o corpo para um lado...", "drop your shoulder and body one way...", "tira el hombro y el cuerpo hacia un lado..."]),
    go: opts.pick(["...e sai pelo outro, com a parte de fora!", "...and go the other way, with the outside!", "...¡y sal por el otro, con el exterior!"]),
    shot: opts.pick(["chute no gol!", "shoot!", "¡remate al arco!"]),
  };

  const place = (el, x, y, angle, stride = 0) => {
    el.setAttribute("transform", `translate(${x},${y}) rotate(${angle}) scale(${k})`);
    const s = Math.sin(stride) * 5;
    el.querySelector(".a-foot-l").setAttribute("cx", s);
    el.querySelector(".a-foot-r").setAttribute("cx", -s);
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    const flip = round % 2 === 1;
    mirror.setAttribute("transform", flip ? "translate(0,170) scale(1,-1)" : "");
    const e = cqEase(u);
    let b;
    if (seg.kind === "carry") {
      const x = cqLerp(50, stopX, u);
      place(me, x, laneY, 0, x / 4);
      b = { x: x + reach + 3 * Math.abs(Math.sin(x / 7)), y: laneY };
      place(defEl, def.x, def.y, 180);
    } else if (seg.kind === "feint") {
      // Shoulder and body go to his left (up the screen); the ball stays still and the defender follows the body.
      place(me, cqLerp(stopX, feint.x, e), cqLerp(laneY, feint.y, e), -22 * Math.sin(Math.PI * Math.min(1, u * 1.3)), 0);
      b = { x: stopX + reach, y: laneY };
      place(defEl, cqLerp(def.x, defBite.x, e), cqLerp(def.y, defBite.y, e), 180 + 15 * e);
    } else if (seg.kind === "go") {
      // Outside of the right foot pushes the ball the other way, past the defender's wrong-footed side.
      b = { x: cqLerp(stopX + reach, ballOut.x, e), y: cqLerp(laneY, ballOut.y, e) };
      place(me, cqLerp(feint.x, runOut.x, e), cqLerp(feint.y, runOut.y, e), 40 * Math.sin(Math.PI * Math.min(1, u * 1.2)), u * 8);
      place(defEl, defBite.x, defBite.y, 195 - 50 * e);
    } else {
      b = { x: cqLerp(ballOut.x, shotTo.x, e), y: cqLerp(ballOut.y, shotTo.y, e) };
      place(me, runOut.x + 6 * e, runOut.y, -10 * e, 0);
      place(defEl, defBite.x, defBite.y, 145);
    }
    ball(b.x, b.y, b.x * 9);
    const text = texts[seg.kind];
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "shot" && u >= 1 ? 1 : 0), goal);
  });
});
