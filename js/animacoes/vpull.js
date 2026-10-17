/* Puxada em V (vista de cima): a sola puxa a bola para trás e a parte de dentro do mesmo pé empurra ela
   na diagonal para a frente do outro pé. O caminho da bola desenha um V. Depois o outro pé faz o mesmo. */

cqRegisterAnim("vpull", (box, opts) => {
  const k = 1.6;
  const px = 140;
  const py = 88;
  const stance = 6;
  const pullT = 0.38;
  const pushT = 0.34;
  const cycle = pullT + pushT;
  // Front and back spots for each foot: down the screen is the player's right.
  const spots = {
    r: { front: { x: 168, y: 97 }, back: { x: 153, y: 98 } },
    l: { front: { x: 168, y: 79 }, back: { x: 153, y: 78 } },
  };
  const vPath = (a, b) => `M${a.front.x},${a.front.y} L${a.back.x},${a.back.y} L${b.front.x},${b.front.y}`;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <path class="a-v" d="${vPath(spots.r, spots.l)}" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 2" opacity="0.6" />
    <path class="a-v" d="${vPath(spots.l, spots.r)}" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 2" opacity="0" />
    <text x="250" y="70" text-anchor="middle" class="a-note a-say"></text>
    <text x="250" y="84" text-anchor="middle" class="a-note a-foot"></text>
    ${cqNoteSvg(160, 160, opts.pick(["⏱ 30 segundos", "⏱ 30 seconds", "⏱ 30 segundos"]))}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const footEls = { l: me.querySelector(".a-foot-l"), r: me.querySelector(".a-foot-r") };
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const footSay = svg.querySelector(".a-foot");
  const vs = svg.querySelectorAll(".a-v");
  const texts = {
    pull: opts.pick(["puxa com a sola", "pull back with the sole", "tira atrás con la suela"]),
    push: opts.pick(["empurra com a parte de dentro", "push with the inside", "empuja con el interior"]),
  };
  const names = { r: opts.pick(["pé direito", "right foot", "pie derecho"]), l: opts.pick(["pé esquerdo", "left foot", "pie izquierdo"]) };

  me.setAttribute("transform", `translate(${px},${py}) scale(${k})`);
  const place = (el, wx, wy, size = 1) => {
    el.setAttribute("cx", (wx - px) / k);
    el.setAttribute("cy", (wy - py) / k);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const home = { l: { x: px, y: py - stance * k }, r: { x: px, y: py + stance * k } };

  return cqLoop((seconds) => {
    const i = Math.floor(seconds / cycle);
    const t = seconds - i * cycle;
    const foot = i % 2 === 0 ? "r" : "l";
    const other = foot === "r" ? "l" : "r";
    const from = spots[foot];
    const to = spots[other].front;
    place(footEls[other], home[other].x, home[other].y);
    let b;
    if (t < pullT) {
      // Sole on top of the ball, rolling it back.
      const e = cqEase(t / pullT);
      b = { x: cqLerp(from.front.x, from.back.x, e), y: cqLerp(from.front.y, from.back.y, e) };
      place(footEls[foot], b.x - 4, b.y, 1.05);
      if (say.textContent !== texts.pull) say.textContent = texts.pull;
    } else {
      // Inside of the same foot, from behind and outside the ball, pushes it across the front of the other foot.
      const u = (t - pullT) / pushT;
      const e = cqEase(u);
      b = { x: cqLerp(from.back.x, to.x, e), y: cqLerp(from.back.y, to.y, e) };
      const side = foot === "r" ? 1 : -1;
      const with_ = cqClamp01(u / 0.6);
      const touch = { x: cqLerp(from.back.x - 3, to.x - 9, cqEase(with_)), y: cqLerp(from.back.y + 5 * side, to.y + 7 * side, cqEase(with_)) };
      const back = cqClamp01((u - 0.6) / 0.4);
      place(footEls[foot], cqLerp(touch.x, home[foot].x, back), cqLerp(touch.y, home[foot].y, back), 1.1);
      if (say.textContent !== texts.push) say.textContent = texts.push;
    }
    vs[0].setAttribute("opacity", foot === "r" ? 0.6 : 0);
    vs[1].setAttribute("opacity", foot === "l" ? 0.6 : 0);
    ball(b.x, b.y, b.x * 9);
    if (footSay.textContent !== names[foot]) footSay.textContent = names[foot];
    count((i % 40) + (t >= cycle - 0.05 ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
