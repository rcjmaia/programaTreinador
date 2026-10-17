/* Oito com bola (vista de cima): conduz fazendo um 8 em volta de dois chinelos, cortando com a parte de dentro
   e de fora do pé. Cada 8 completo vale 1. */

cqRegisterAnim("figure8", (box, opts) => {
  const cx = 160;
  const cy = 88;
  const a = 80;
  const b = 64;
  const lap = 3.6;
  const marks = [120, 200];
  const at = (th) => ({ x: cx + a * Math.sin(th), y: cy + b * Math.sin(th) * Math.cos(th) });
  const pathD = Array.from({ length: 61 }, (_, i) => {
    const p = at((i / 60) * 2 * Math.PI);
    return `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" ");

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <path d="${pathD}" fill="none" stroke="#f8fafc" stroke-width="1" stroke-dasharray="3 3" opacity="0.35" />
    ${marks.map((x) => `<ellipse cx="${x}" cy="${cy}" rx="4" ry="8" fill="#ef4444" stroke="#7f1d1d" stroke-width="1" />`).join("")}
    ${cqNoteSvg(160, 140, `↔ 3 ${opts.steps}`)}
    ${cqNoteSvg(160, 160, opts.pick(["⏱ 1 minuto", "⏱ 1 minute", "⏱ 1 minuto"]))}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const th = (seconds / lap) * 2 * Math.PI;
    const p = at(th);
    const q = at(th + 0.05);
    const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
    cqTopPlace(player, p.x, p.y, angle, th * 9);
    const bp = at(th + 0.2);
    ball(bp.x, bp.y, th * 300);
    count(Math.floor(seconds / lap) % 20, svg.querySelector(".a-ball"));
  });
});
