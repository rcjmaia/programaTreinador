/* Estátua de campeão (de frente): num pé só, braços abertos, olhando um ponto fixo.
   args.blind: de olhos fechados, sem o ponto na parede. */

cqRegisterAnim("statue", (box, opts) => {
  const blind = opts.args?.blind;
  const x = blind ? 160 : 140;
  const spot = { x: 262, y: 58 };
  const statue = { hipY: CQ_GROUND - 35, armL: [70, 0], armR: [70, 0], legL: [2, 0], legR: [28, -110] };
  const headY = CQ_GROUND - 35 - 42;

  box.innerHTML = cqSceneSvg(opts.label, blind
    ? `
    ${cqFrontPlayerSvg()}
    <g class="a-closed" stroke="#1f1610" stroke-width="1.4" fill="none">
      <path d="M${x - 5} ${headY} Q${x - 3} ${headY + 1.6} ${x - 1} ${headY}" />
      <path d="M${x + 1} ${headY} Q${x + 3} ${headY + 1.6} ${x + 5} ${headY}" />
    </g>
    ${cqNoteSvg(x, 56, opts.pick(["olhos fechados", "eyes closed", "ojos cerrados"]))}
    ${cqCountSvg(opts.unit)}`
    : `
    <line class="a-look" x1="${x + 6}" y1="${headY}" x2="${spot.x - 8}" y2="${spot.y}" stroke="rgba(250, 204, 21, 0.5)" stroke-width="1.5" stroke-dasharray="3 4" />
    <circle cx="${spot.x}" cy="${spot.y}" r="7" fill="none" stroke="#ef4444" stroke-width="2.5" />
    <circle cx="${spot.x}" cy="${spot.y}" r="2.5" fill="#ef4444" />
    ${cqNoteSvg(spot.x, spot.y + 20, opts.pick(["ponto fixo", "fixed spot", "punto fijo"]))}
    ${cqFrontPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqFrontRig(svg);
  const count = cqCounter(svg, opts.unit);
  const lids = svg.querySelector(".a-closed");
  // Closed eyes: hide the eye dots; the curved lids are drawn instead.
  if (lids) svg.querySelectorAll(".a-front circle[r='1.1']").forEach((eye) => eye.setAttribute("r", "0"));

  return cqLoop((seconds) => {
    // Tiny wobbles: the arms correct the balance (a bit more with eyes closed).
    const w = Math.sin(seconds * 1.7) * Math.sin(seconds * 0.6) * (blind ? 1.8 : 1);
    rig.pose(x + w, {
      ...statue,
      armL: [70 + 10 * w, 0],
      armR: [70 - 10 * w, 0],
    });
    if (lids) lids.setAttribute("transform", `translate(${w},0)`);
    count(Math.floor(seconds) % 60);
  });
});
