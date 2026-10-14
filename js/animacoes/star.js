/* Estrela (vista de cima): sai do centro, toca uma das 4 marcas e volta ao centro. */

cqRegisterAnim("star", (box, opts) => {
  const c = { x: 160, y: 92 };
  const r = 54;
  const marks = [[0, -1], [1, 0], [0, 1], [-1, 0]].map(([dx, dy]) => ({ x: c.x + dx * r * 1.4, y: c.y + dy * r }));
  const legT = 0.55;

  box.innerHTML = cqTopSceneSvg(opts.label, `
    <circle cx="${c.x}" cy="${c.y}" r="5" fill="none" stroke="#f8fafc" stroke-width="1.5" />
    ${marks.map((m) => cqTopConeSvg(m.x, m.y, 6)).join("")}
    ${cqTopPlayerSvg()}
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const player = svg.querySelector(".a-top");
  const cones = svg.querySelectorAll(".a-mark");
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const n = Math.floor(seconds / legT);
    const u = cqEase(seconds / legT - n);
    const m = marks[Math.floor(n / 2) % marks.length];
    const out = n % 2 === 0;
    // Stop a little short of the marker: the hand reaches it.
    const tip = { x: cqLerp(c.x, m.x, 0.82), y: cqLerp(c.y, m.y, 0.82) };
    const a = out ? c : tip;
    const b = out ? tip : c;
    const x = cqLerp(a.x, b.x, u);
    const y = cqLerp(a.y, b.y, u);
    // Facing the marker on the way out; backing up to the centre on the way in.
    const angle = (Math.atan2(m.y - c.y, m.x - c.x) * 180) / Math.PI;
    cqTopPlace(player, x, y, angle, seconds * 14);
    const touches = Math.floor((n + 1) / 2);
    count(touches % 40, cones[(touches - 1 + marks.length) % marks.length]);
  });
});
