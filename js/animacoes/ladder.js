/* Escada no chão (vista de cima): os dois pés entram em cada espaço, rapidinho. */

cqRegisterAnim("ladder", (box, opts) => {
  const x0 = 70;
  const gap = 30;
  const spaces = 6;
  const midY = 92;
  const stepT = 0.28;
  const rungs = Array.from({ length: spaces + 1 }, (_, i) => x0 + i * gap);
  const rung = (x) => `
    <g transform="translate(${x},${midY}) rotate(90)">
      <rect x="-14" y="-2.5" width="28" height="5" rx="2.5" fill="#ef4444" />
      <path d="M-4 -2.5 Q0 -7 4 -2.5" stroke="#f8fafc" stroke-width="1.3" fill="none" />
    </g>`;
  const run = spaces * 2 * stepT;
  const back = 1.4;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    ${rungs.map(rung).join("")}
    <g class="a-feet">
      <ellipse class="a-fl" rx="5" ry="2.6" fill="#111827" />
      <ellipse class="a-fr" rx="5" ry="2.6" fill="#111827" />
    </g>
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  // The player's own feet are hidden: big footprints show each step in the spaces.
  player.querySelectorAll(".a-foot-l, .a-foot-r").forEach((f) => f.setAttribute("rx", "0"));
  const fl = svg.querySelector(".a-fl");
  const fr = svg.querySelector(".a-fr");
  const count = cqCounter(svg, opts.unit);
  const spaceX = (i) => x0 + gap * (i + 0.5);

  return cqLoop((seconds) => {
    const cycle = run + back;
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    if (t < run) {
      // Left foot, then right foot into each space.
      const step = Math.floor(t / stepT);
      const space = Math.floor(step / 2);
      const k = cqClamp01((t - step * stepT) / stepT);
      const leftIn = space;
      const rightIn = step % 2 === 1 ? space : space - 1;
      const lx = leftIn >= 0 ? spaceX(leftIn) : x0 - 14;
      const rx = rightIn >= 0 ? spaceX(rightIn) : x0 - 14;
      fl.setAttribute("cx", lx);
      fl.setAttribute("cy", midY - 5);
      fr.setAttribute("cx", rx);
      fr.setAttribute("cy", midY + 5);
      const bodyX = cqLerp((lx + rx) / 2, Math.max(lx, rx), k * 0.3);
      cqTopPlace(player, bodyX, midY, 0, 0);
    } else {
      // Walk back along the side of the ladder.
      const u = (t - run) / back;
      const x = cqLerp(spaceX(spaces - 1) + 20, x0 - 14, u);
      const y = midY + 30 * Math.sin(Math.PI * u);
      cqTopPlace(player, x, y, 180, seconds * 12);
      fl.setAttribute("cx", -20);
      fr.setAttribute("cx", -20);
    }
    count(round % 20 + (t >= run ? 1 : 0));
  });
});
