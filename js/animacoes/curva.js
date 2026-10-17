/* Chute com curva (vista de cima): corre, chuta de 10 passos e a bola faz a curva longe do goleiro,
   até o alvo no canto. args.side: "out" = trivela (parte de fora do pé direito, curva para a direita
   dele, que é para baixo na tela); "in" = parte de dentro do pé direito (curva para cima). Na trivela, um
   quadro no canto mostra o jeito do corpo. */

cqRegisterAnim("curva", (box, opts) => {
  const out = opts.args?.side === "out";
  const midY = 95;
  const ballX = 70;
  const goalX = 290;
  const post = 30;
  const end = { x: goalX + 6, y: out ? midY + post - 8 : midY - post + 8 };
  const ctrl = { x: 190, y: out ? midY - 62 : midY + 62 };
  const at = (u) => ({
    x: (1 - u) ** 2 * ballX + 2 * (1 - u) * u * ctrl.x + u * u * end.x,
    y: (1 - u) ** 2 * midY + 2 * (1 - u) * u * ctrl.y + u * u * end.y,
  });
  // Trivela: slow-motion close-up of the strike (the foot turned in, hitting with its outside edge).
  const line = cqTimeline([
    { kind: "run", dur: 0.8 },
    ...(out ? [{ kind: "zin", dur: 0.5 }] : []),
    { kind: "kick", dur: out ? 0.7 : 0.15 },
    ...(out ? [{ kind: "zout", dur: 0.6 }] : []),
    { kind: "fly", dur: 1.0 },
  ], 1.1);
  const stand = out ? { x: ballX - 10, y: midY - 8 } : { x: ballX - 14, y: midY - 6 };
  const zoomAt = { x: ballX - 4, y: midY - 4 };

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <rect x="${goalX}" y="${midY - post}" width="12" height="${post * 2}" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
    <g class="a-hit">${cqTopConeSvg(end.x, end.y, 5)}</g>
    <path d="M${ballX} ${midY} Q${ctrl.x} ${ctrl.y} ${end.x} ${end.y}" fill="none" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.45" />
    ${cqNoteSvg((ballX + goalX) / 2, 162, `← 10 ${opts.steps} →`)}
    <text x="150" y="52" text-anchor="middle" class="a-note a-say"></text>
    ${cqTopPlayerSvg(CQ_KIT_GK, "a-top a-gk")}
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${out ? cqZoomNoteSvg(zoomAt.x, zoomAt.y, opts.pick(["pé virado para dentro|bate com a parte de fora", "foot turned in|strike with the outside", "pie hacia dentro|golpea con el exterior"])) : ""}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const gk = svg.querySelector(".a-gk");
  const ballEl = svg.querySelector(".a-ball-pos");
  const count = cqCounter(svg, opts.unit);
  const target = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  if (out) {
    cqTrivelaTip(svg, 252, 2);
    say.setAttribute("x", 124);
  }
  const word = opts.pick(out
    ? ["trivela: pé virado para dentro, corpo inclinado", "outside of the foot: turned in, body leaning", "trivela: pie hacia dentro, cuerpo inclinado"]
    : ["parte de dentro, perto dos dedos", "inside of the foot, near the toes", "interior, cerca de los dedos"]);
  // The ball grows a little mid-flight: it rises a bit, but stays a low shot.
  const ball = (x, y, scale = 1, spin = 0) => ballEl.setAttribute("transform", `translate(${x},${y}) scale(${scale}) rotate(${spin})`);

  const zoomNote = svg.querySelector(".a-zoom");
  const feet = [me.querySelector(".a-foot-l"), me.querySelector(".a-foot-r")];

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    feet.forEach((foot, i) => {
      foot.setAttribute("cy", i ? 4 : -4);
      foot.removeAttribute("transform");
    });
    if (out) {
      const z = seg.kind === "zin" ? cqEase(u) : seg.kind === "kick" ? 1 : seg.kind === "zout" ? 1 - cqEase(u) : 0;
      cqZoomView(svg, zoomAt.x, zoomAt.y, z);
      cqZoomFoot(me, z);
      zoomNote.setAttribute("opacity", z);
    }
    if (seg.kind === "run") {
      const x = cqLerp(24, stand.x, u);
      cqTopPlace(me, x, cqLerp(midY - 6, stand.y, u), 10, x / 4);
      ball(ballX, midY);
    } else if (seg.kind !== "fly") {
      cqTopPlace(me, stand.x, stand.y, 10, 0);
      if (out) cqTrivelaFoot(me, { zin: 0, kick: u, zout: 1 }[seg.kind]);
      ball(ballX, midY);
    } else {
      cqTopPlace(me, stand.x + 2, stand.y, 10, 0);
      const p = at(u);
      ball(p.x, p.y, 1 + 0.35 * Math.sin(Math.PI * u), u * (out ? 900 : -900));
    }
    // The keeper stays in the middle and only reacts late: the curve takes the ball away from him.
    const reach = seg.kind === "fly" ? cqClamp01((u - 0.6) / 0.4) * (out ? 10 : -10) : 0;
    cqTopPlace(gk, goalX - 6, midY + reach, 180, 0);

    const text = seg.kind === "run" ? "" : word;
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), target);
  });
});
