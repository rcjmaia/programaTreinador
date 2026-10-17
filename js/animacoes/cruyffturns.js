/* Vai e volta com giro de Cruyff (vista de cima): conduz com o peito do pé de um chinelo ao outro, 5 passos,
   e no fim faz o giro de Cruyff: finge o chute, o pé passa pela bola e puxa ela com a parte de dentro por trás
   da perna de apoio, girando para voltar. Cada giro vale 1 e a perna troca a cada giro (a cena é espelhada). */

cqRegisterAnim("cruyffturns", (box, opts) => {
  const k = 1.6;
  const reach = 14;
  const laneY = 90;
  const x0 = 84;
  const x1 = 236;
  const ballEnd = { x: x1 + reach, y: laneY };
  // Behind the standing (right) leg, which is planted at about (244,98).
  const ballCtrl = { x: 238, y: 94 };
  const ballBehind = { x: 217, y: 100 };
  // Where the mirrored carry starts, so the next round picks the ball up without a jump.
  const ballBack = { x: CQ_W - (x0 + reach + 3 * Math.abs(Math.sin(x0 / 7))), y: laneY };
  const line = cqTimeline([
    { kind: "carry", dur: 1.4 },
    { kind: "fake", dur: 0.45 },
    { kind: "drag", dur: 0.6 },
    { kind: "turn", dur: 0.5 },
  ]);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-mirror">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      ${[58, CQ_W - 58].map((x) => `<ellipse cx="${x}" cy="${laneY}" rx="4" ry="8" fill="#38bdf8" stroke="#0c4a6e" stroke-width="1" />`).join("")}
      <path class="a-trail" fill="none" stroke="#facc15" stroke-width="1.1" stroke-dasharray="2 1.5" opacity="0" />
      <path class="a-drag" d="M${ballEnd.x},${ballEnd.y} Q${ballCtrl.x},${ballCtrl.y} ${ballBehind.x},${ballBehind.y}" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 2" opacity="0" />
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
    </g>
    <line x1="64" y1="124" x2="${CQ_W - 64}" y2="124" stroke="#f8fafc" stroke-width="1" opacity="0.6" />
    <line x1="64" y1="119" x2="64" y2="129" stroke="#f8fafc" stroke-width="1" opacity="0.6" />
    <line x1="${CQ_W - 64}" y1="119" x2="${CQ_W - 64}" y2="129" stroke="#f8fafc" stroke-width="1" opacity="0.6" />
    <text x="160" y="138" text-anchor="middle" class="a-note">${opts.pick(["5 passos", "5 steps", "5 pasos"])}</text>
    <text x="8" y="20" class="a-note">⏱ ${opts.pick(["1 minuto", "1 minute", "1 minuto"])}</text>
    <text x="312" y="20" text-anchor="end" class="a-note a-leg"></text>
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const mirror = svg.querySelector(".a-mirror");
  const me = svg.querySelector(".a-me");
  const footL = me.querySelector(".a-foot-l");
  const ballEl = svg.querySelector(".a-ball-pos");
  const trail = svg.querySelector(".a-trail");
  const dragPath = svg.querySelector(".a-drag");
  const say = svg.querySelector(".a-say");
  const legLabel = svg.querySelector(".a-leg");
  const count = cqCounter(svg, opts.unit);

  const ns = "http://www.w3.org/2000/svg";
  const legs = [footL, me.querySelector(".a-foot-r")].map((f, i) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", i ? 3 : -3);
    leg.setAttribute("stroke", CQ_KIT.socks);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, f };
  });
  me.prepend(...legs.map((l) => l.leg));

  const texts = {
    carry: opts.pick(["conduz com o peito do pé", "dribble with your laces", "conduce con el empeine"]),
    fake: opts.pick(["finge o chute e o pé passa pela bola...", "fake the kick, foot goes past the ball...", "finge el tiro y el pie pasa por el balón..."]),
    drag: opts.pick(["...e puxa a bola por trás da perna de apoio", "...and drags the ball behind the standing leg", "...y tira el balón por detrás de la pierna de apoyo"]),
    turn: opts.pick(["gira para o lado da bola e volta!", "turn towards the ball and go back!", "¡gira hacia el balón y vuelve!"]),
  };
  const legTexts = [
    opts.pick(["perna esquerda", "left leg", "pierna izquierda"]),
    opts.pick(["perna direita", "right leg", "pierna derecha"]),
  ];

  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x);
    el.setAttribute("cy", y);
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  const place = (x, y, angle, stride = 0) => {
    me.setAttribute("transform", `translate(${x},${y}) rotate(${angle}) scale(${k})`);
    const s = Math.sin(stride) * 5;
    foot(footL, s, -4);
    foot(me.querySelector(".a-foot-r"), -s, 4);
  };
  const ball = (x, y, spin) => ballEl.setAttribute("transform", `translate(${x},${y}) rotate(${spin})`);
  const quad = (p0, m, p1, e) => ({
    x: (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * m.x + e * e * p1.x,
    y: (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * m.y + e * e * p1.y,
  });
  // World point to the player's own coordinates (x forward, y to his right).
  const toLocal = (px, py, angle, wx, wy) => {
    const a = (-angle * Math.PI) / 180;
    const dx = wx - px;
    const dy = wy - py;
    return [(dx * Math.cos(a) - dy * Math.sin(a)) / k, (dx * Math.sin(a) + dy * Math.cos(a)) / k];
  };
  // The left foot winds up as if to kick, then goes round to the front of the ball, ready to drag it back.
  const windUp = { x: -8, y: -5 };
  const roundCtrl = { x: 6, y: -9 };
  const front = { x: 12, y: -3 };
  // During the drag the foot stays just past the ball, pulling it back with the inside.
  const grip = { x: front.x - reach / k, y: front.y };
  const fakePath = (s) => (s < 0.4 ? { x: cqLerp(0, windUp.x, s / 0.4), y: cqLerp(-4, windUp.y, s / 0.4) } : quad(windUp, roundCtrl, front, (s - 0.4) / 0.6));

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    // Every turn switches leg: odd rounds run the mirror image, going back the other way with the right leg.
    const flip = round % 2 === 1;
    mirror.setAttribute("transform", flip ? `translate(${CQ_W},0) scale(-1,1)` : "");
    trail.setAttribute("opacity", 0);
    dragPath.setAttribute("opacity", 0);

    if (seg.kind === "carry") {
      const x = cqLerp(x0, x1, u);
      place(x, laneY, 0, x / 4);
      // Little pushes with the laces: the ball runs ahead and the foot catches up.
      ball(x + reach + 3 * Math.abs(Math.sin(x / 7)), laneY, x * 9);
    } else if (seg.kind === "fake") {
      place(x1, laneY, 0);
      foot(me.querySelector(".a-foot-r"), 5, 5, 1.1);
      const e = cqEase(u);
      const p = fakePath(e);
      foot(footL, p.x, p.y, 1.2);
      const pts = [];
      for (let i = 0; i <= 16; i++) {
        const q = fakePath((i / 16) * e);
        pts.push(`${q.x.toFixed(1)},${q.y.toFixed(1)}`);
      }
      trail.setAttribute("d", `M${pts.join(" L")}`);
      trail.setAttribute("transform", me.getAttribute("transform"));
      trail.setAttribute("opacity", 1);
      ball(ballEnd.x, ballEnd.y, 0);
    } else if (seg.kind === "drag") {
      // Still facing forward, the inside of the foot drags the ball back under the body, behind the standing leg.
      const e = cqEase(u);
      const b = quad(ballEnd, ballCtrl, ballBehind, e);
      ball(b.x, b.y, -e * 300);
      place(x1, laneY, 0);
      foot(me.querySelector(".a-foot-r"), 5, 5, 1.1);
      const [lx, ly] = toLocal(x1, laneY, 0, b.x, b.y);
      foot(footL, lx + grip.x, ly + grip.y, 1.2);
      dragPath.setAttribute("opacity", 0.8);
    } else {
      // Only once the ball is behind him does he turn round, towards the side the ball went, and go back.
      const e = cqEase(u);
      place(x1, laneY, cqLerp(0, 180, e));
      ball(cqLerp(ballBehind.x, ballBack.x, e), cqLerp(ballBehind.y, ballBack.y, e), -300 - e * 120);
      dragPath.setAttribute("opacity", (0.8 * (1 - u)).toFixed(2));
    }

    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
    }
    const text = texts[seg.kind];
    if (say.textContent !== text) say.textContent = text;
    const legNow = legTexts[flip ? 1 : 0];
    if (legLabel.textContent !== legNow) legLabel.textContent = legNow;
    count((round % 20) + (seg.kind === "turn" && u >= 1 ? 1 : 0), ballEl);
  });
});
