/* Puxa com a sola e passa (vista de cima): sem dominar, assim que a bola chega ele pisa nela e puxa
   para o lado com a sola (args.pulls = 1 ou 2 vezes), até a frente do outro pé, e passa na parede com ele.
   Cada puxada: pisa na bola, arrasta e solta o pé. Com 2 puxadas o corpo vai junto, de lado.
   Na volta, o mesmo para o outro lado. */

cqRegisterAnim("solepass", (box, opts) => {
  const pulls = opts.args?.pulls || 2;
  const midY = 95;
  const px = 90;
  const k = 1.8;
  const bx = px + 20;
  const wallX = 290;
  const shift = 16;
  const move = pulls > 1 ? 16 : 0;
  const segs = [{ kind: "arrive", dur: 0.55 }];
  for (let i = 0; i < pulls; i++) {
    segs.push({ kind: "pull", i, dur: 0.7 });
    if (i < pulls - 1) segs.push({ kind: "gap", i, dur: 0.25 });
  }
  segs.push({ kind: "pass", dur: 0.2 }, { kind: "fly", dur: 0.5 });
  const line = cqTimeline(segs);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-hit"><rect x="${wallX}" y="44" width="12" height="104" fill="#c2410c" stroke="#7c2d12" stroke-width="2" /></g>
    ${cqNoteSvg((px + wallX) / 2, 162, `← 5 ${opts.steps} →`)}
    <text x="${px + 40}" y="50" text-anchor="middle" class="a-note a-say"></text>
    <text class="a-num" text-anchor="middle" font-size="16" font-weight="700" fill="#facc15"></text>
    <g class="a-ball-pos">${cqBallSvg(7)}</g>
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const body = (y) => me.setAttribute("transform", `translate(${px},${y}) scale(${k})`);
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ballEl = svg.querySelector(".a-ball-pos");
  const count = cqCounter(svg, opts.unit);
  const wall = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const num = svg.querySelector(".a-num");
  const names = [opts.pick(["direito", "right", "derecho"]), opts.pick(["esquerdo", "left", "izquierdo"])];
  const passWord = opts.pick(["passa com o", "pass with the", "pasa con el"]);
  const soleWord = opts.pick(["sola do", "sole:", "suela del"]);
  const ball = (x, y, spin = 0) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);
  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // s = 1: the right foot (bottom of the screen) drags the ball, the left one passes.
    const s = round % 2 === 0 ? 1 : -1;
    const work = s === 1 ? footR : footL;
    const kick = s === 1 ? footL : footR;
    const workName = names[s === 1 ? 0 : 1];
    const kickName = names[s === 1 ? 1 : 0];
    const startY = midY + move * s;
    const endY = midY - move * s;
    const y0 = startY + shift * s;
    const y2 = endY - shift * s;
    const at = (p) => ({ by: cqLerp(y0, y2, p), py: cqLerp(startY, endY, p) });
    foot(work, 0, 4 * s);
    foot(kick, 0, -4 * s);
    let text = "";
    let mark = "";

    if (seg.kind === "arrive") {
      body(startY);
      ball(cqLerp(wallX - 8, bx, u), y0, u * -500);
    } else if (seg.kind === "pull") {
      // 0-30%: lifts the foot and steps on the ball. 30-80%: drags it. 80-100%: lets go.
      const drag = cqEase(cqClamp01((u - 0.3) / 0.5));
      const { by, py } = at((seg.i + drag) / pulls);
      body(py);
      const reach = u < 0.3 ? u / 0.3 : u > 0.8 ? 1 - (u - 0.8) / 0.2 : 1;
      const lifted = u < 0.3 ? Math.sin(Math.PI * reach) : u > 0.8 ? Math.sin(Math.PI * (1 - reach)) : 0;
      foot(work, cqLerp(0, (bx - px) / k, reach), cqLerp(4 * s, (by - py) / k, reach), 1 + 0.45 * lifted);
      if (move) foot(kick, 0, -4 * s + 3 * s * Math.sin(Math.PI * drag));
      ball(bx, by, (seg.i + drag) * 180 * s);
      num.setAttribute("x", bx + 20);
      num.setAttribute("y", by + 5);
      mark = pulls > 1 ? String(seg.i + 1) : "";
      text = `${soleWord} ${workName}${pulls > 1 ? ` · ${seg.i + 1}` : ""}`;
    } else if (seg.kind === "gap") {
      const { by, py } = at((seg.i + 1) / pulls);
      body(py);
      ball(bx, by, (seg.i + 1) * 180 * s);
      text = `${soleWord} ${workName} · ${seg.i + 1}`;
    } else if (seg.kind === "pass") {
      body(endY);
      foot(kick, 10 * Math.sin(Math.PI * u), -8 * s);
      ball(bx, y2);
      text = `${passWord} ${kickName}`;
    } else {
      body(endY);
      ball(cqLerp(bx, wallX - 8, u), y2, u * 500);
      text = `${passWord} ${kickName}`;
    }

    if (say.textContent !== text) say.textContent = text;
    if (num.textContent !== mark) num.textContent = mark;
    count(round % 40 + (seg.kind === "fly" && u >= 1 ? 1 : 0), wall);
  });
});
