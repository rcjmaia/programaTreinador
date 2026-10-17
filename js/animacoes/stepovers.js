/* Pedaladas seguidas e chute (vista de cima): conduz até o adversário e faz várias pedaladas,
   intercalando as pernas. A câmera dá zoom e fica lenta nas pedaladas, mostrando a perna rodando
   por cima da bola. A cada uma o adversário vai para um lado. Na última, puxa a bola com a outra
   perna para o lado contrário e chuta no gol com o peito do pé, com o adversário atordoado.
   args: { n } = número de pedaladas (ímpar, começa pela perna direita). */

cqRegisterAnim("stepovers", (box, opts) => {
  const n = opts.args?.n || 3;
  const midY = 98;
  const k = 1.4;
  const reach = 14;
  const x0 = 40;
  const stopX = 118;
  const defX = 192;
  const shootX = 180;
  const laneY = midY - 24;
  const goalX = 296;
  const commit = 18;
  const zoom = 2.1;
  const focus = { x: stopX + 14, y: midY };
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };
  // Right leg first, then alternating; the right side is down on screen when facing right.
  const sideOf = (i) => (i % 2 === 0 ? 1 : -1);
  const line = cqTimeline([
    { kind: "carry", dur: 1 },
    { kind: "zoomIn", dur: 0.45 },
    ...Array.from({ length: n }, (_, i) => ({ kind: "step", i, dur: 0.85 })),
    { kind: "pull", dur: 0.6 },
    { kind: "go", dur: 0.5 },
    { kind: "fly", dur: 0.45 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <g class="a-hit">
        <rect x="${goalX}" y="${midY - 26}" width="10" height="52" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
      </g>
      ${cqTopPlayerSvg(kitDef, "a-top a-def")}
      <g class="a-dizzy" opacity="0">
        ${[0, 1, 2].map((i) => `<text x="${15 * Math.cos((i * 2 * Math.PI) / 3)}" y="${15 * Math.sin((i * 2 * Math.PI) / 3) + 4}" text-anchor="middle" font-size="12" fill="#facc15">★</text>`).join("")}
      </g>
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g>
    <text x="8" y="20" class="a-note a-slow"></text>
    <text x="160" y="52" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const cam = svg.querySelector(".a-cam");
  const me = svg.querySelector(".a-me");
  const def = svg.querySelector(".a-def");
  const dizzy = svg.querySelector(".a-dizzy");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ball = cqMovableBall(svg);
  const goal = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const slow = svg.querySelector(".a-slow");
  const count = cqCounter(svg, opts.unit);

  // Legs from the hips to the feet, and the dashed path of the foot around the ball.
  const ns = "http://www.w3.org/2000/svg";
  const trail = document.createElementNS(ns, "path");
  trail.setAttribute("fill", "none");
  trail.setAttribute("stroke", "#facc15");
  trail.setAttribute("stroke-width", "0.9");
  trail.setAttribute("stroke-dasharray", "2 1.5");
  const legs = [footL, footR].map((f, i) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", i ? 3 : -3);
    leg.setAttribute("stroke", CQ_KIT.socks);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, f };
  });
  me.prepend(trail, ...legs.map((l) => l.leg));

  const legName = (side) => (side > 0
    ? opts.pick(["perna direita", "right leg", "pierna derecha"])
    : opts.pick(["perna esquerda", "left leg", "pierna izquierda"]));
  const texts = {
    carry: opts.pick(["conduz até o adversário", "dribble up to the defender", "conduce hasta el rival"]),
    zoomIn: "",
    step: (i) => `${opts.pick(["pedalada", "step-over", "bicicleta"])} ${i + 1}: ${legName(sideOf(i))} ${opts.pick(["por cima da bola", "over the ball", "por encima del balón"])}`,
    pull: opts.pick(["puxa com a outra perna", "take it with the other leg", "sácala con la otra pierna"]),
    go: opts.pick(["adversário atordoado!", "the defender is dizzy!", "¡rival mareado!"]),
    fly: opts.pick(["chuta com o peito do pé!", "shoot with your laces!", "¡tira con el empeine!"]),
  };
  const slowText = `🔍 ${opts.pick(["câmera lenta", "slow motion", "cámara lenta"])}`;

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
  // The leg circles the ball without touching it: inside, over the front, landing outside.
  const c = reach / k - 1;
  const arcPoint = (side, a) => [c + 7.5 * Math.cos(a), side * 7.5 * Math.sin(a)];
  const stepFoot = (side, u) => {
    const el = side > 0 ? footR : footL;
    if (u < 0.75) {
      const end = Math.PI + (u / 0.75) * 1.5 * Math.PI;
      const [fx, fy] = arcPoint(side, end);
      foot(el, fx, fy, 1.3);
      const pts = [];
      for (let a = Math.PI; a <= end; a += 0.2) pts.push(arcPoint(side, a).map((v) => v.toFixed(1)).join(","));
      pts.push(`${fx.toFixed(1)},${fy.toFixed(1)}`);
      trail.setAttribute("d", `M${pts.join(" L")}`);
      trail.setAttribute("opacity", 1);
    } else {
      const e = (u - 0.75) / 0.25;
      foot(el, cqLerp(c, 0, e), side * cqLerp(7.5, 4, e), cqLerp(1.3, 1, e));
      trail.setAttribute("opacity", (1 - e).toFixed(2));
    }
  };
  const defYAfter = (i) => (i < 0 ? midY : midY + sideOf(i) * commit);
  // Camera: z = 1 shows the whole field; the view is kept inside the field when zoomed.
  const camera = (z) => {
    const p = (z - 1) / (zoom - 1);
    const fx = Math.min(Math.max(cqLerp(160, focus.x, p), 160 / z), CQ_W - 160 / z);
    const fy = Math.min(Math.max(cqLerp(85, focus.y, p), 85 / z), 170 - 85 / z);
    cam.setAttribute("transform", `translate(160,85) scale(${z}) translate(${-fx},${-fy})`);
  };

  return cqLoop((seconds) => {
    const { seg, u } = line.at(seconds);
    let text = texts[seg.kind];
    let stun = 0;
    let z = 1;
    trail.setAttribute("opacity", 0);

    if (seg.kind === "carry") {
      const x = cqLerp(x0, stopX, u);
      place(me, x, midY, 0, x / 5);
      ball(x + reach, midY, x * 9);
      place(def, cqLerp(defX + 6, defX, u), midY, 180, u * 6);
    } else if (seg.kind === "zoomIn") {
      z = cqLerp(1, zoom, cqEase(u));
      place(me, stopX, midY, 0);
      ball(stopX + reach, midY, stopX * 9);
      place(def, defX, midY, 180);
    } else if (seg.kind === "step") {
      z = zoom;
      const side = sideOf(seg.i);
      const sway = Math.sin(Math.PI * u);
      place(me, stopX, midY + side * 5 * sway, side * 20 * sway);
      stepFoot(side, u);
      ball(stopX + reach, midY, stopX * 9);
      // The defender follows each fake a moment later, leaning that way.
      const bite = cqEase(cqClamp01((u - 0.3) / 0.7));
      place(def, defX, cqLerp(defYAfter(seg.i - 1), defYAfter(seg.i), bite), 180 - side * 14 * Math.sin(Math.PI * bite), bite * 4);
      text = texts.step(seg.i);
    } else if (seg.kind === "pull") {
      // The other foot takes the ball to the opposite side of the last fake, as the camera pulls back.
      z = cqLerp(zoom, 1, cqEase(cqClamp01((u - 0.3) / 0.7)));
      const e = cqEase(u);
      const side = -sideOf(n - 1);
      place(me, stopX + 8 * e, midY + side * 18 * e, side * 35 * e);
      const bump = Math.sin(Math.PI * Math.min(1, u * 1.3));
      foot(side > 0 ? footR : footL, 9 * bump, side * (4 + 3 * bump), 1 + 0.3 * bump);
      ball(stopX + reach + 12 * e, midY + side * 26 * e, stopX * 9 + u * 200);
      place(def, defX, defYAfter(n - 1), 180, 0);
      stun = e;
    } else if (seg.kind === "go") {
      const e = cqEase(u);
      const x = cqLerp(stopX + 8, shootX, e);
      place(me, x, cqLerp(midY - 18, laneY, e), cqLerp(-35, -4, e), x / 4);
      ball(cqLerp(stopX + reach + 12, shootX + reach, e), cqLerp(midY - 26, laneY, e), x * 9);
      place(def, defX, defYAfter(n - 1) + 2 * Math.sin(u * 14), 180 + 18 * Math.sin(u * 9), u * 3);
      stun = 1;
    } else {
      // Laces strike with the right foot, low and hard into the goal.
      const angle = (Math.atan2(midY - laneY, goalX - shootX) * 180) / Math.PI;
      place(me, shootX, laneY, angle * 0.6);
      const bump = Math.sin(Math.PI * Math.min(1, u * 2));
      foot(footR, 12 * bump, 4, 1 + 0.3 * bump);
      ball(cqLerp(shootX + reach, goalX + 4, u), cqLerp(laneY, midY - 6, u), shootX * 9 + u * 700);
      place(def, defX, defYAfter(n - 1), 180 - 40 * u, 0);
      stun = 1 - u * 0.5;
    }

    camera(z);
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
    }
    dizzy.setAttribute("opacity", stun.toFixed(2));
    dizzy.setAttribute("transform", `translate(${defX},${defYAfter(n - 1)}) rotate(${seconds * 360})`);
    // Zoomed in, the caption moves to the bottom so it doesn't cover the player.
    say.setAttribute("y", z > 1.2 ? 160 : 52);
    if (say.textContent !== text) say.textContent = text;
    const slowNow = z > 1.2 ? slowText : "";
    if (slow.textContent !== slowNow) slow.textContent = slowNow;
    count((Math.floor(seconds / line.total) % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), goal);
  });
});
