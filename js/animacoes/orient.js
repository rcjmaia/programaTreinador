/* Domínio orientado (vista de cima): passa na parede, o primeiro toque já leva a bola
   até o outro chinelo e o próximo passe sai de lá. */

cqRegisterAnim("orient", (box, opts) => {
  const wallY = 26;
  const spots = [{ x: 120, y: 124 }, { x: 200, y: 124 }];
  const passT = 0.45;
  const backT = 0.45;
  const touchT = 0.55;
  const leg = passT + backT + touchT;
  const flip = (x, y) => `
    <g transform="translate(${x},${y + 14})">
      <ellipse rx="4" ry="8" fill="#ef4444" transform="rotate(90)" />
    </g>`;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <rect x="0" y="0" width="${CQ_W}" height="${wallY}" fill="#b45309" />
    <rect class="a-hit" x="0" y="${wallY - 3}" width="${CQ_W}" height="3" fill="#7c2d12" />
    ${spots.map((s) => flip(s.x, s.y)).join("")}
    ${cqNoteSvg(160, 160, `↔ 2 ${opts.steps}`)}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const wall = svg.querySelector(".a-hit");

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / leg);
    const t = seconds - n * leg;
    const from = spots[n % 2];
    const to = spots[(n + 1) % 2];
    // Facing the wall (up) while passing, body opening to the side on the first touch.
    const hitWall = { x: (from.x + to.x) / 2, y: wallY + 5 };
    const ballFoot = (s) => ({ x: s.x, y: s.y - 12 });
    let px = from.x;
    let py = from.y;
    if (t < passT) {
      const u = t / passT;
      const a = ballFoot(from);
      ball(cqLerp(a.x, hitWall.x, u), cqLerp(a.y, hitWall.y, u));
    } else if (t < passT + backT) {
      const u = (t - passT) / backT;
      const a = ballFoot(from);
      ball(cqLerp(hitWall.x, a.x, u), cqLerp(hitWall.y, a.y, u));
    } else {
      const u = cqEase((t - passT - backT) / touchT);
      const a = ballFoot(from);
      const b = ballFoot(to);
      ball(cqLerp(a.x, b.x, Math.min(1, u * 1.3)), a.y);
      px = cqLerp(from.x, to.x, u);
    }
    cqTopPlace(player, px, py, -90, t > passT + backT ? seconds * 14 : 0);
    count(n % 40 + (t >= passT ? 1 : 0), wall);
  });
});
