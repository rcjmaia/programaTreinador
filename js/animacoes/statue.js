/* Estátua de campeão (de frente): num pé só, braços abertos, olhando um ponto fixo. */

cqRegisterAnim("statue", (box, opts) => {
  const x = 140;
  const spot = { x: 262, y: 58 };
  const statue = { hipY: CQ_GROUND - 35, armL: [70, 0], armR: [70, 0], legL: [2, 0], legR: [28, -110] };

  box.innerHTML = cqSceneSvg(opts.label, `
    <line class="a-look" x1="${x + 6}" y1="${CQ_GROUND - 35 - 42}" x2="${spot.x - 8}" y2="${spot.y}" stroke="rgba(250, 204, 21, 0.5)" stroke-width="1.5" stroke-dasharray="3 4" />
    <circle cx="${spot.x}" cy="${spot.y}" r="7" fill="none" stroke="#ef4444" stroke-width="2.5" />
    <circle cx="${spot.x}" cy="${spot.y}" r="2.5" fill="#ef4444" />
    ${cqNoteSvg(spot.x, spot.y + 20, opts.pick(["ponto fixo", "fixed spot", "punto fijo"]))}
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    // Tiny wobbles: the arms correct the balance.
    const w = Math.sin(seconds * 1.7) * Math.sin(seconds * 0.6);
    rig.pose(x + w, {
      ...statue,
      armL: [70 + 10 * w, 0],
      armR: [70 - 10 * w, 0],
    });
    count(Math.floor(seconds) % 60);
  });
});
