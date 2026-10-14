/* Marcação sombra (vista de cima): a pessoa tenta passar com a bola até a linha;
   ele acompanha de lado, sem dar o bote cedo, e fecha o caminho. */

cqRegisterAnim("shadow", (box, opts) => {
  const lineY = 140;
  const lineL = 90;
  const lineR = 230;
  const meY = 104;
  const attY = 56;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <line x1="${lineL}" y1="${lineY}" x2="${lineR}" y2="${lineY}" stroke="#f8fafc" stroke-width="3" stroke-dasharray="6 5" />
    ${cqFlipflopSvg(lineL, "#ef4444", lineY)}
    ${cqFlipflopSvg(lineR, "#ef4444", lineY)}
    ${cqNoteSvg(160, 160, `← 5 ${opts.steps} →`)}
    <g class="a-ball-pos">${cqBallSvg(5)}</g>
    ${cqTopPlayerSvg(CQ_KIT_HELPER, "a-top a-att")}
    ${cqTopPlayerSvg(CQ_KIT, "a-top a-me")}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const att = svg.querySelector(".a-att");
  const me = svg.querySelector(".a-me");
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    // The attacker feints left and right; the defender mirrors him a moment later.
    const ax = 160 + 55 * Math.sin(seconds * 1.6) * Math.cos(seconds * 0.7);
    const late = seconds - 0.18;
    const mx = 160 + 52 * Math.sin(late * 1.6) * Math.cos(late * 0.7);
    const ay = attY + 6 * Math.sin(seconds * 3.1);
    cqTopPlace(att, ax, ay, 90, seconds * 10);
    cqTopPlace(me, mx, meY, -90, seconds * 10);
    ball(ax, ay + 13, seconds * 300);
    // Nobody gets through: "lower is better", so the count stays at 0.
    count(0);
  });
});
