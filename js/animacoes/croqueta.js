/* Croqueta (vista de cima, de frente para cima): andando de lado entre dois chinelos, a parte de dentro de um pé
   passa a bola para o outro pé e o corpo dá um passo para o lado. Na ponta, volta para o outro lado. */

cqRegisterAnim("croqueta", (box, opts) => {
  const k = 1.6;
  const y = 96;
  const stance = 18;
  const half = 9.5;
  const step = 2 * half;
  const n = 5;
  const right = 210;
  const left = right - step * n;
  const passT = 0.22;
  const stepT = 0.24;
  const perSide = 2 * n + 1;
  const sideT = (n + 1) * passT + n * stepT;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    ${[left - 30, right + 30].map((x) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="8" fill="#ef4444" stroke="#7f1d1d" stroke-width="1" />`).join("")}
    <text x="160" y="140" text-anchor="middle" class="a-note a-say"></text>
    ${cqNoteSvg(160, 160, opts.pick(["⏱ 1 minuto", "⏱ 1 minute", "⏱ 1 minuto"]))}
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const footL = me.querySelector(".a-foot-l");
  const footR = me.querySelector(".a-foot-r");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const texts = [
    opts.pick(["parte de dentro do pé direito → pé esquerdo", "inside of the right foot → left foot", "interior del pie derecho → pie izquierdo"]),
    opts.pick(["parte de dentro do pé esquerdo → pé direito", "inside of the left foot → right foot", "interior del pie izquierdo → pie derecho"]),
  ];

  // Facing up: the player's right foot is on the screen's right. World offsets to the side become local y / k.
  const feet = (offL, offR, liftL = 1, liftR = 1) => {
    for (const [el, off, lift] of [[footL, offL, liftL], [footR, offR, liftR]]) {
      el.setAttribute("cx", 3.5);
      el.setAttribute("cy", off / k);
      el.setAttribute("rx", 4 * lift);
      el.setAttribute("ry", 2.2 * lift);
    }
  };

  return cqLoop((seconds) => {
    const trip = Math.floor(seconds / (2 * sideT));
    let t = seconds - trip * 2 * sideT;
    const side = t < sideT ? 0 : 1;
    if (side) t -= sideT;
    // Side 0 goes left (d = -1), pushing with the right foot; side 1 comes back right with the left foot.
    const d = side ? 1 : -1;
    const start = side ? left : right;
    const pair = passT + stepT;
    const j = Math.min(perSide - 1, 2 * Math.floor(t / pair) + (t % pair >= passT ? 1 : 0));
    const u = j % 2 === 0 ? cqClamp01((t - (j / 2) * pair) / passT) : cqClamp01((t - ((j - 1) / 2) * pair - passT) / stepT);
    const before = start + d * step * Math.floor(j / 2);
    let px = before;
    let bx;
    const back = -d * stance;
    const lead = d * stance;
    if (j % 2 === 0) {
      // Trailing foot passes the ball across to the leading foot.
      const e = cqEase(u);
      bx = before + d * half * (2 * e - 1);
      const reach = Math.sin(Math.PI * u) * 4;
      if (d < 0) feet(lead, back + d * reach, 1, 1 + 0.15 * Math.sin(Math.PI * u));
      else feet(back + d * reach, lead, 1 + 0.15 * Math.sin(Math.PI * u), 1);
    } else {
      // The ball waits while the body side-steps over to it: leading foot first, the other follows.
      const e = cqEase(u);
      px = before + d * step * e;
      bx = before + d * half;
      const out = Math.sin(Math.PI * u) * 3;
      if (d < 0) feet(lead + d * out, back, 1.1, 1);
      else feet(back, lead + d * out, 1, 1.1);
    }
    me.setAttribute("transform", `translate(${px},${y}) rotate(-90) scale(${k})`);
    ball(bx, y - 11, bx * 9);
    const text = texts[side];
    if (say.textContent !== text) say.textContent = text;
    const done = trip * 2 * (n + 1) + side * (n + 1) + Math.floor(j / 2) + (j % 2 === 1 || u >= 0.8 ? 1 : 0);
    count(done % 60, svg.querySelector(".a-ball"));
  });
});
