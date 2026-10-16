/* Roleta (vista de cima): conduz a bola até o cone (o adversário), pisa nela com um pé, gira de costas
   para o cone e puxa com o outro pé, passando pelo lado dele. A cada rodada troca o lado e o pé. */

cqRegisterAnim("roleta", (box, opts) => {
  const midY = 105;
  const coneX = 170;
  const k = 1.6;
  const reach = 15;
  const x0 = 40;
  const x1 = 125;
  const x2 = 215;
  const x3 = 280;
  const side = 34;
  const line = cqTimeline([
    { kind: "run", dur: 1 },
    { kind: "spin", dur: 1.3 },
    { kind: "out", dur: 0.7 },
  ], 0.5);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    ${cqTopConeSvg(coneX, midY, 9)}
    <text x="160" y="48" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ballEl = svg.querySelector(".a-ball-pos");
  const cone = svg.querySelector(".a-mark");
  const say = svg.querySelector(".a-say");
  const count = cqCounter(svg, opts.unit);
  const names = [opts.pick(["direito", "right", "derecho"]), opts.pick(["esquerdo", "left", "izquierdo"])];
  const runText = opts.pick(["conduz até o cone (o adversário)", "dribble up to the cone (the defender)", "conduce hasta el cono (el rival)"]);
  const stepWord = opts.pick(["pisa com o {f} e gira de costas", "step with the {f} and spin", "pisa con el {f} y gira de espaldas"]);
  const pullWord = opts.pick(["puxa com o {f}", "drag with the {f}", "arrastra con el {f}"]);
  const outText = opts.pick(["passou do adversário!", "past the defender!", "¡pasaste al rival!"]);
  const place = (x, y, angle, stride = 0) => {
    me.setAttribute("transform", `translate(${x},${y}) rotate(${angle}) scale(${k})`);
    const s = Math.sin(stride) * 5;
    foot(footL, s, -4);
    foot(footR, -s, 4);
  };
  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const ball = (x, y, spin) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // s = 1: goes around the top of the cone, right foot first. s = -1: bottom, left foot first.
    const s = round % 2 === 0 ? 1 : -1;
    const first = s === 1 ? footR : footL;
    const second = s === 1 ? footL : footR;
    const firstName = names[s === 1 ? 0 : 1];
    const secondName = names[s === 1 ? 1 : 0];
    let text = "";

    if (seg.kind === "run") {
      const x = cqLerp(x0, x1, u);
      place(x, midY, 0, x / 6);
      ball(x + reach, midY, x * 9);
      text = runText;
    } else if (seg.kind === "spin") {
      const e = cqEase(u);
      const x = cqLerp(x1, x2, e);
      const y = midY - side * s * Math.sin(Math.PI * e);
      const angle = -360 * s * e;
      // The ball stays on the far side from the cone, with the body between them.
      const dir = (-90 * s * Math.sin(Math.PI * e) * Math.PI) / 180;
      const bx = x + reach * Math.cos(dir);
      const by = y + reach * Math.sin(dir);
      place(x, y, angle);
      ball(bx, by, x1 * 9 + e * 360 * s);
      // The stepping foot reaches the ball: the first foot in the first half, the other one after.
      const half = u < 0.5 ? u / 0.5 : (u - 0.5) / 0.5;
      const touch = Math.sin(Math.PI * half);
      const a = (-angle * Math.PI) / 180;
      const lx = ((bx - x) * Math.cos(a) - (by - y) * Math.sin(a)) / k;
      const ly = ((bx - x) * Math.sin(a) + (by - y) * Math.cos(a)) / k;
      const el = u < 0.5 ? first : second;
      const rest = el === footL ? -4 : 4;
      foot(el, lx * 0.8 * touch, cqLerp(rest, ly * 0.8, touch), 1 + 0.4 * touch);
      text = (u < 0.5 ? stepWord : pullWord).replace("{f}", u < 0.5 ? firstName : secondName);
    } else {
      const x = cqLerp(x2, x3, u);
      place(x, midY, 0, x / 6);
      ball(x + reach, midY, x * 9);
      text = outText;
    }

    if (say.textContent !== text) say.textContent = text;
    count(round % 9 + (seg.kind === "out" && u >= 1 ? 1 : 0), cone);
  });
});
