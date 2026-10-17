/* Tabelinha com a parede e chute (vista de cima): conduz, passa na parede em diagonal, corre para a frente,
   recebe a bola que volta e chuta de primeira no gol, a 7 passos. */

cqRegisterAnim("wallgo", (box, opts) => {
  const laneY = 100;
  const goalX = 300;
  const wallY = 16;
  const reach = 14;
  const passFrom = { x: 114, y: laneY };
  const bounce = { x: 160, y: wallY + 3 };
  const meet = { x: 204, y: 94 };
  const shotTo = { x: goalX + 2, y: 84 };
  const line = cqTimeline([
    { kind: "run", dur: 0.8 },
    { kind: "pass", dur: 0.4 },
    { kind: "back", dur: 0.45 },
    { kind: "shot", dur: 0.4 },
  ], 0.9);

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <g class="a-wall">
      <rect x="0" y="0" width="${CQ_W}" height="${wallY}" fill="#b45309" />
      ${Array.from({ length: 23 }, (_, i) => `<line x1="${i * 14}" y1="0" x2="${i * 14}" y2="${wallY}" stroke="#7c2d12" stroke-width="1" />`).join("")}
    </g>
    <rect x="${goalX}" y="62" width="12" height="46" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" />
    <g class="a-hit"><line x1="${goalX}" y1="62" x2="${goalX}" y2="108" stroke="#f8fafc" stroke-width="3" /></g>
    <path d="M${passFrom.x},${passFrom.y} L${bounce.x},${bounce.y} L${meet.x},${meet.y}" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 2" opacity="0.45" />
    ${cqNoteSvg((meet.x + goalX) / 2, 132, `← 7 ${opts.steps} →`)}
    <text x="150" y="160" text-anchor="middle" class="a-note a-say"></text>
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const goal = svg.querySelector(".a-hit");
  const wall = svg.querySelector(".a-wall");
  const say = svg.querySelector(".a-say");
  const countEl = svg.querySelector(".a-count");
  countEl.setAttribute("y", 140);
  countEl.setAttribute("x", 56);
  const texts = {
    run: opts.pick(["conduz...", "dribble...", "conduce..."]),
    pass: opts.pick(["passa na parede...", "pass off the wall...", "pasa a la pared..."]),
    back: opts.pick(["...corre para a frente e recebe...", "...run forward to meet it...", "...corre adelante y recibe..."]),
    shot: opts.pick(["...e chuta de primeira!", "...and shoot first time!", "...¡y remata de primera!"]),
  };

  return cqLoop((seconds) => {
    const { seg, u, round } = line.at(seconds);
    let b;
    if (seg.kind === "run") {
      const x = cqLerp(40, passFrom.x - reach, u);
      cqTopPlace(player, x, laneY, 0, x / 4);
      b = { x: x + reach, y: laneY };
    } else if (seg.kind === "pass") {
      const x = cqLerp(passFrom.x - reach, 140, u);
      cqTopPlace(player, x, laneY, -8 * Math.sin(Math.PI * u), x / 4);
      b = { x: cqLerp(passFrom.x, bounce.x, u), y: cqLerp(passFrom.y, bounce.y, u) };
      if (u > 0.95) cqFlash(wall);
    } else if (seg.kind === "back") {
      const x = cqLerp(140, meet.x - 12, u);
      cqTopPlace(player, x, cqLerp(laneY, meet.y + 2, u), 0, x / 4);
      b = { x: cqLerp(bounce.x, meet.x, u), y: cqLerp(bounce.y, meet.y, u) };
    } else {
      const e = cqEase(u);
      cqTopPlace(player, meet.x - 12 + 4 * e, meet.y + 2, -6 * e, 0);
      b = { x: cqLerp(meet.x, shotTo.x, u), y: cqLerp(meet.y, shotTo.y, u) };
    }
    ball(b.x, b.y, b.x * 9);
    const text = texts[seg.kind];
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (seg.kind === "shot" && u >= 1 ? 1 : 0), goal);
  });
});
