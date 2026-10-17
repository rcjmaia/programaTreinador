/* Drible da lateral (vista de cima): de frente para o adversário, conduz de lado com duas puxadas de sola e na
   terceira finge que vai arrancar para o mesmo lado, jogando o corpo, e volta. Indo para a direita puxa a sola do pé
   esquerdo; voltando para a esquerda, a do direito. O adversário acompanha e cai na finta. Ida e volta vale 1. */

cqRegisterAnim("solefeint", (box, opts) => {
  const k = 1.5;
  const zoom = 1.6;
  const midY = 100;
  const oppY = midY - 42;
  const ahead = 15;
  const lat = 5;
  const markA = 50;
  const markB = 270;
  const sets = 4;
  const d = (markB - markA) / (sets * 2);
  const swap = 0.4;
  const legSegs = (kind) => Array.from({ length: sets }, (_, j) => [
    { kind, move: "drag", idx: 2 * j, dur: 0.5 },
    { kind, move: "drag", idx: 2 * j + 1, dur: 0.5 },
    { kind, move: "feint", idx: 2 * j + 2, dur: 0.75 },
  ]).flat();
  const line = cqTimeline([
    ...legSegs("go"),
    { kind: "hold", move: "swap", dur: swap },
    ...legSegs("back"),
  ], swap);
  const flipflop = (x) => `<rect x="${x - 3}" y="${midY + 9}" width="6" height="10" rx="3" fill="#ef4444" />`;
  const kitDef = { ...CQ_KIT_HELPER, shirt: "#dc2626", trim: "#7f1d1d", shorts: "#f8fafc", socks: "#dc2626", boots: "#111827" };

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-cam">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#166534" />
      ${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="20" height="170" fill="#15803d" />`).join("")}
      <rect x="0" y="${midY + 30}" width="${CQ_W}" height="1.5" fill="#f8fafc" opacity="0.8" />
      ${flipflop(markA)}
      ${flipflop(markB)}
      ${cqTopPlayerSvg(kitDef, "a-top a-def")}
      <g class="a-ball-pos">${cqBallSvg(5)}</g>
      ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    </g>
    ${cqNoteSvg(284, 30, "⏱ 1 min")}
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const cam = svg.querySelector(".a-cam");
  const me = svg.querySelector(".a-me");
  const def = svg.querySelector(".a-def");
  const footR = me.querySelector(".a-foot-r");
  const footL = me.querySelector(".a-foot-l");
  const ball = cqMovableBall(svg);
  const say = svg.querySelector(".a-say");
  const count = cqCounter(svg, opts.unit);
  const texts = {
    go: opts.pick(["para a direita: puxa com a sola do pé esquerdo", "going right: drag with your left sole", "a la derecha: arrastra con la suela izquierda"]),
    back: opts.pick(["para a esquerda: puxa com a sola do pé direito", "going left: drag with your right sole", "a la izquierda: arrastra con la suela derecha"]),
    feint: opts.pick(["finge que vai arrancar para o lado, e volta!", "fake bursting away that way, and come back!", "¡finge que arrancas hacia ese lado, y vuelve!"]),
    swap: opts.pick(["chegou no chinelo: troca de perna", "reached the flip-flop: switch legs", "llegaste a la chancla: cambia de pierna"]),
  };

  const foot = (el, x, y, size = 1) => {
    el.setAttribute("cx", x.toFixed(2));
    el.setAttribute("cy", y.toFixed(2));
    el.setAttribute("rx", 4 * size);
    el.setAttribute("ry", 2.2 * size);
  };
  // The player faces up the screen, so local forward is screen up and local right is screen right.
  const toLocal = (sx, sy) => [-sy / k, sx / k];
  const ns = "http://www.w3.org/2000/svg";
  const legs = [footL, footR].map((f, i) => {
    const leg = document.createElementNS(ns, "line");
    leg.setAttribute("x1", 0);
    leg.setAttribute("y1", i ? 3 : -3);
    leg.setAttribute("stroke-width", "2.6");
    leg.setAttribute("stroke-linecap", "round");
    return { leg, f };
  });
  me.prepend(...legs.map((l) => l.leg));
  const restX = 5;

  return cqLoop((seconds) => {
    const { seg, u, t } = line.at(seconds);
    const padU = (t - (line.total - swap)) / swap;
    const pad = padU >= 0;
    let px;
    let bx;
    let turn = 0;
    let scare = 0;
    let defX = null;
    let active = null;
    let text;
    foot(footL, restX, -5);
    foot(footR, restX, 5);
    if (seg.kind === "hold" || pad) {
      // At each flip-flop the player steps round to the other side of the ball to switch legs.
      const atB = seg.kind === "hold";
      const mark = atB ? markB : markA;
      const e = cqEase(atB ? u : padU);
      px = atB ? cqLerp(mark + lat, mark - lat, e) : cqLerp(mark - lat, mark + lat, e);
      bx = mark;
      text = texts.swap;
    } else {
      const dir = seg.kind === "go" ? 1 : -1;
      const start = dir > 0 ? markA : markB;
      const x0 = start + dir * lat + dir * seg.idx * d;
      active = dir > 0 ? footL : footR;
      const rest = dir > 0 ? -5 : 5;
      if (seg.move === "drag") {
        // The sole drags the ball across the front of the body, then the other foot steps out to the side.
        px = x0 + dir * d * cqEase(u);
        const roll = cqEase(cqClamp01((u - 0.15) / 0.45));
        bx = x0 - dir * lat + dir * d * roll;
        const [lx, ly] = toLocal(bx - px, -ahead + 3.5);
        if (u < 0.15) {
          const e = cqEase(u / 0.15);
          foot(active, cqLerp(restX, lx, e), cqLerp(rest, ly, e), cqLerp(1, 1.1, e));
        } else if (u < 0.6) {
          foot(active, lx, ly, 1.1);
        } else {
          const e = cqEase((u - 0.6) / 0.4);
          foot(active, cqLerp(lx, restX, e), cqLerp(ly, rest, e), cqLerp(1.1, 1, e));
          foot(dir > 0 ? footR : footL, restX, -rest + dir * 3 * Math.sin(Math.PI * e));
        }
        text = texts[seg.kind];
      } else {
        // Feint: the body is thrown the way the player is going, with a long step of the leading foot, as if
        // bursting away down the line; the ball stays, and the body comes back to it.
        bx = x0 - dir * lat;
        const push = Math.sin(Math.PI * cqClamp01(u / 0.8));
        px = x0 + dir * 8 * push;
        turn = dir * 14 * push;
        active = dir > 0 ? footR : footL;
        foot(active, restX + 2 * push, -rest + dir * 5 * push, 1 + 0.15 * push);
        scare = dir * Math.sin(Math.PI * cqClamp01((u - 0.12) / 0.88));
        defX = x0 + 12 * scare;
        text = texts.feint;
      }
    }
    for (const { leg, f } of legs) {
      leg.setAttribute("x2", f.getAttribute("cx"));
      leg.setAttribute("y2", f.getAttribute("cy"));
      leg.setAttribute("stroke", f === active ? "#facc15" : CQ_KIT.socks);
      f.setAttribute("stroke", f === active ? "#facc15" : "none");
      f.setAttribute("stroke-width", "0.8");
    }
    me.setAttribute("transform", `translate(${px.toFixed(2)},${midY}) rotate(${(turn - 90).toFixed(2)}) scale(${k})`);
    ball(bx, midY - ahead, bx * 9);
    // The defender mirrors the player from the front and bites on the feint, jumping the same way.
    def.setAttribute("transform", `translate(${(defX ?? px).toFixed(2)},${oppY}) rotate(${(90 - 10 * scare).toFixed(2)}) scale(${k})`);
    const fx = Math.min(Math.max(px, 160 / zoom), CQ_W - 160 / zoom);
    cam.setAttribute("transform", `translate(160,92) scale(${zoom}) translate(${(-fx).toFixed(2)},${-(midY - 18)})`);
    if (say.textContent !== text) say.textContent = text;
    count((Math.floor(seconds / line.total) % 9) + (pad ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
