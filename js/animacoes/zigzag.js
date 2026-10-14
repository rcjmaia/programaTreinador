/* Zigue-zague (vista de cima): vai de chinelo em chinelo, usando a parte de dentro e de fora do pé. */

cqRegisterAnim("zigzag", (box, opts) => {
  const marks = [
    [80, 54], [116, 126], [152, 54], [188, 126], [224, 54], [260, 126],
  ];
  const midY = 90;
  // The player turns just inside each flip-flop.
  const points = [[40, midY], ...marks.map(([x, y]) => [x, y + (y < midY ? 14 : -14)]), [290, midY]];
  const legT = 3.2;
  const flip = (x, y) => `
    <g class="a-mark" transform="translate(${x},${y})">
      <ellipse class="a-cone" rx="4" ry="8" fill="#ef4444" />
      <path d="M-3 -3 Q0 -7 3 -3" stroke="#f8fafc" stroke-width="1.3" fill="none" />
    </g>`;

  // Catmull-Rom curve through the points, s from 0 to points.length - 1.
  const at = (s) => {
    const i = Math.min(points.length - 2, Math.floor(s));
    const k = s - i;
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c = (a, b, c2, d) =>
      0.5 * (2 * b + (c2 - a) * k + (2 * a - 5 * b + 4 * c2 - d) * k * k + (3 * b - a - 3 * c2 + d) * k * k * k);
    return { x: c(p0[0], p1[0], p2[0], p3[0]), y: c(p0[1], p1[1], p2[1], p3[1]) };
  };
  const last = points.length - 1;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    ${marks.map(([x, y]) => flip(x, y)).join("")}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const flips = svg.querySelectorAll(".a-mark");
  let lastMark = -1;

  return cqLoop((seconds) => {
    const leg = Math.floor(seconds / legT);
    const u = (seconds - leg * legT) / legT;
    const dir = leg % 2 === 0 ? 1 : -1;
    const s = dir === 1 ? u * last : (1 - u) * last;
    const p = at(s);
    const q = at(Math.max(0, Math.min(last, s + dir * 0.05)));
    const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
    cqTopPlace(player, p.x, p.y, angle, s * 6);
    const b = at(Math.max(0, Math.min(last, s + dir * 0.3)));
    ball(b.x, b.y, s * 200);

    const near = Math.round(s) - 1;
    if (near !== lastMark && near >= 0 && near < marks.length && Math.abs(s - Math.round(s)) < 0.1) cqFlash(flips[near]);
    lastMark = near;
    count(Math.floor(leg / 2) % 9);
  });
});
