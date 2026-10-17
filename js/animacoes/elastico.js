/* Elástico (vista de cima), com o pé dominante: conduz até o adversário, toca a bola para fora com a
   parte de fora do pé, o adversário vai junto, e puxa de volta com a parte de dentro para o outro lado,
   passando por ele. O adversário fica entortado, virando tarde. */

cqRegisterAnim("elastico", (box, opts) => {
  const midY = 100;
  const k = 1.6;
  const reach = 15;
  const defX = 205;
  const x0 = 40;
  const x1 = 135;
  const x2 = 285;
  const fake = 14;
  const snap = 22;
  const commit = 30;
  const pass = 28;
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };
  const line = cqTimeline([
    { kind: "run", dur: 0.9 },
    { kind: "fake", dur: 0.4 },
    { kind: "snap", dur: 0.25 },
    { kind: "go", dur: 1 },
  ], 0.6);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <text x="160" y="50" text-anchor="middle" class="a-note a-say"></text>
    ${cqTopPlayerSvg(kitDef, "a-top a-def")}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const def = svg.querySelector(".a-def");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ballEl = svg.querySelector(".a-ball-pos");
  const say = svg.querySelector(".a-say");
  const count = cqCounter(svg, opts.unit);
  const texts = {
    run: opts.pick(["conduz até o adversário", "dribble up to the defender", "conduce hasta el rival"]),
    fake: opts.pick(["parte de fora: finge que vai para um lado", "outside of the foot: fake one way", "exterior: amaga hacia un lado"]),
    snap: opts.pick(["parte de dentro: puxa para o outro!", "inside of the foot: snap it back!", "interior: ¡tíralo al otro lado!"]),
    go: opts.pick(["entortou o adversário!", "the defender's been fooled!", "¡dejaste al rival desparramado!"]),
  };
  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const place = (el, x, y, angle, stride = 0) => {
    el.setAttribute("transform", `translate(${x},${y}) rotate(${angle}) scale(${k})`);
    const s = Math.sin(stride) * 5;
    foot(el.querySelector(".a-foot-l"), s, -4);
    foot(el.querySelector(".a-foot-r"), -s, 4);
  };
  const ball = (x, y, spin) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);
  // The right foot (bottom of the screen when facing right) reaches the ball.
  const reachBall = (px, py, bx, by, touch) => foot(footR, ((bx - px) / k) * 0.85 * touch, cqLerp(4, ((by - py) / k) * 0.85, touch), 1 + 0.3 * touch);

  return cqLoop((seconds) => {
    const { seg, u } = line.at(seconds);
    let text = "";

    if (seg.kind === "run") {
      const x = cqLerp(x0, x1, u);
      place(me, x, midY, 0, x / 6);
      ball(x + reach, midY, x * 9);
      place(def, cqLerp(defX + 6, defX, u), midY, 180, u * 6);
      text = texts.run;
    } else if (seg.kind === "fake") {
      // Outside of the foot pushes the ball out; the defender bites a moment later.
      const e = cqEase(u);
      const bx = x1 + reach + 3 * e;
      const by = midY + fake * e;
      place(me, x1, midY + 4 * e, 0);
      reachBall(x1, midY + 4 * e, bx, by, Math.sin(Math.PI * Math.min(1, u * 1.2)));
      ball(bx, by, x1 * 9 + e * 120);
      const bite = cqEase(cqClamp01((u - 0.35) / 0.65));
      place(def, defX, midY + commit * 0.6 * bite, 180 - 12 * bite, bite * 4);
      text = texts.fake;
    } else if (seg.kind === "snap") {
      // Inside of the same foot snaps it back across, while the defender is still going the other way.
      const e = cqEase(u);
      const bx = x1 + reach + 3 + 4 * e;
      const by = cqLerp(midY + fake, midY - snap, e);
      place(me, x1, midY + 4 * (1 - e), 0);
      reachBall(x1, midY + 4 * (1 - e), bx, by, 1 - 0.5 * e);
      ball(bx, by, x1 * 9 + 120 - e * 300);
      place(def, defX, midY + commit * cqLerp(0.6, 1, e), 168 - 8 * e, 4 + e * 3);
      text = texts.snap;
    } else {
      // Burst past on the open side; the defender turns too late.
      const e = cqEase(u);
      const x = cqLerp(x1, x2, e);
      const y = midY - pass * Math.sin(Math.PI * Math.min(1, e * 1.15));
      const dx = x2 - x1;
      const dy = -pass * Math.PI * 1.15 * Math.cos(Math.PI * Math.min(1, e * 1.15));
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      place(me, x, y, angle, x / 5);
      const a = (angle * Math.PI) / 180;
      // Picks the ball up from where the snap left it.
      const grab = cqClamp01(u / 0.25);
      ball(cqLerp(x1 + reach + 7, x + reach * Math.cos(a), grab), cqLerp(midY - snap, y + reach * Math.sin(a), grab), x * 9);
      const late = cqEase(cqClamp01((u - 0.25) / 0.75));
      place(def, defX, midY + commit + 3 * Math.sin(u * 12) * (1 - late), 160 + 140 * late, 7 + late * 4);
      text = texts.go;
    }

    if (say.textContent !== text) say.textContent = text;
    count((Math.floor(seconds / line.total) % 9) + (seg.kind === "go" && u >= 1 ? 1 : 0), def);
  });
});
