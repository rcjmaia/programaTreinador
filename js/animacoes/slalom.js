/* Slalom dos chinelos (vista de cima): conduz a bola passando entre os 5 chinelos, ida e volta.
   args.note: [pt, en, es] somado ao texto de baixo, para variações da mesma cena. */

cqRegisterAnim("slalom", (box, opts) => {
  const marks = [90, 125, 160, 195, 230];
  const midY = 92;
  const sway = 22;
  const startX = 50;
  const endX = 270;
  const legT = 2.6;
  // Weaving path: passes below the first flip-flop, above the second, and so on.
  const pathY = (x) => midY + sway * Math.sin((Math.PI * (x - marks[0] + 17.5)) / 35);
  const flip = (x, y) => `
    <g class="a-mark" transform="translate(${x},${y})">
      <ellipse class="a-cone" rx="4" ry="8" fill="#ef4444" />
      <path d="M-3 -3 Q0 -7 3 -3" stroke="#f8fafc" stroke-width="1.3" fill="none" />
    </g>`;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    ${marks.map((x) => flip(x, midY)).join("")}
    ${cqNoteSvg(160, 160, `↔ 1 ${opts.steps}${opts.args?.note ? ` · ${opts.pick(opts.args.note)}` : ""}`)}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const leg = Math.floor(seconds / legT);
    const u = cqEase((seconds - leg * legT) / legT);
    const dir = leg % 2 === 0 ? 1 : -1;
    const x = dir === 1 ? cqLerp(startX, endX, u) : cqLerp(endX, startX, u);
    const y = pathY(x);
    const ahead = x + dir * 3;
    const angle = (Math.atan2(pathY(ahead) - y, ahead - x) * 180) / Math.PI;
    cqTopPlace(player, x, y, angle, x / 5);
    const bx = x + dir * 13;
    ball(bx, pathY(bx), bx * 8);
    count(Math.floor(leg / 2) % 9);
  });
});
