/* Pedalada e chute (vista de cima): conduz até o oponente, faz a pedalada fingindo sair para um lado,
   o oponente vai junto, ele puxa a bola para o lado contrário com a outra perna e chuta no alvo. */

cqRegisterAnim("stepshot", (box, opts) => {
  const midY = 95;
  const stopX = 128;
  const oppX = 190;
  const oppFakeY = 70;
  const outY = 122;
  const goalX = 296;
  const shootX = 196;
  const line = cqTimeline([
    { kind: "carry", dur: 1.0 },
    { kind: "step", dur: 0.8 },
    { kind: "pull", dur: 0.45 },
    { kind: "go", dur: 0.55 },
    { kind: "fly", dur: 0.45 },
  ], 1.0);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-hit">
      <rect x="${goalX}" y="${midY - 24}" width="10" height="48" fill="rgba(248, 250, 252, 0.2)" stroke="#f8fafc" stroke-width="2" />
    </g>
    <text x="150" y="56" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg(CQ_KIT_HELPER, "a-top a-opp")}
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const me = svg.querySelector(".a-me");
  const opp = svg.querySelector(".a-opp");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const goal = svg.querySelector(".a-hit");
  const say = svg.querySelector(".a-say");
  const words = {
    step: opts.pick(["pedalada", "step-over", "bicicleta"]),
    pull: opts.pick(["puxa para o outro lado", "pull it the other way", "sácala al otro lado"]),
    fly: opts.pick(["chuta!", "shoot!", "¡tira!"]),
  };

  return cqLoop((seconds) => {
    const { seg, u } = line.at(seconds);
    let oppY = oppFakeY;
    if (seg.kind === "carry") {
      const x = cqLerp(40, stopX, u);
      cqTopPlace(me, x, midY, 0, x / 4);
      ball(x + 13, midY, x * 9);
      oppY = cqLerp(oppFakeY, midY, cqClamp01(u * 2.5));
    } else if (seg.kind === "step") {
      // The body dips to his left (up on screen) as the leg circles the ball; the opponent bites.
      const k = Math.sin(Math.PI * u);
      cqTopPlace(me, stopX, midY - 7 * k, -35 * k, u * 6);
      ball(stopX + 13, midY, 0);
      oppY = cqLerp(midY, oppFakeY, cqEase(cqClamp01((u - 0.25) / 0.75)));
    } else if (seg.kind === "pull") {
      // The other foot drags the ball to the opposite side.
      const k = cqEase(u);
      cqTopPlace(me, stopX + 6 * k, cqLerp(midY, outY - 8, k), 40 * k, u * 4);
      ball(stopX + 13 + 8 * k, cqLerp(midY, outY, k), u * 200);
    } else if (seg.kind === "go") {
      const x = cqLerp(stopX + 6, shootX - 13, u);
      cqTopPlace(me, x, outY - 8 + 4 * u, 20 * (1 - u), x / 4);
      ball(x + 14, outY, x * 9);
    } else {
      cqTopPlace(me, shootX - 13, outY - 4, -12, 0);
      ball(cqLerp(shootX + 1, goalX + 4, u), cqLerp(outY, midY + 6, u), u * 600);
    }
    cqTopPlace(opp, oppX, oppY, 180, 0);

    const text = words[seg.kind] || "";
    if (say.textContent !== text) say.textContent = text;
    const round = Math.floor(seconds / line.total);
    count((round % 9) + (seg.kind === "fly" && u >= 1 ? 1 : 0), goal);
  });
});
