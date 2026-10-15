/* Grade de concentração: números embaralhados e um dedo tocando 1, 2, 3... em ordem.
   Cada acerto fica verde; um toque no número errado treme em vermelho e o jogo segue.
   No fim aparece o tempo e o lembrete de que vale ir até o último número.
   opts.args: { to: 25 } — até que número vai a grade de verdade. */

cqRegisterAnim("grade", (box, opts) => {
  const to = opts.args.to || 25;
  const NUMS = [7, 2, 9, 4, 1, 8, 3, 6, 5];
  const CELL = 30;
  const GAP = 5;
  const X0 = 160 - (3 * CELL + 2 * GAP) / 2;
  const Y0 = 46;
  const STEP = 0.7;
  const LOOP = 10.5;
  const pos = (n) => {
    const i = NUMS.indexOf(n);
    return { x: X0 + (i % 3) * (CELL + GAP), y: Y0 + Math.floor(i / 3) * (CELL + GAP) };
  };
  // Taps in order; before the 4 the finger goes to the 5 by mistake.
  const taps = [];
  let at = 0.6;
  for (let n = 1; n <= 9; n++) {
    if (n === 4) {
      taps.push({ n: 5, at, wrong: true });
      at += STEP;
    }
    taps.push({ n, at });
    at += STEP;
  }
  const doneAt = at;

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 ${CQ_W} 170" role="img" aria-label="${opts.label}">
      <rect x="0" y="0" width="${CQ_W}" height="170" fill="#0b1220"/>
      ${NUMS.map((n) => {
        const p = pos(n);
        return `<g class="gr-cell" data-n="${n}">
          <rect x="${p.x}" y="${p.y}" width="${CELL}" height="${CELL}" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
          <text x="${p.x + CELL / 2}" y="${p.y + CELL / 2 + 6}" text-anchor="middle" font-size="17" font-weight="800" fill="#f8fafc">${n}</text>
        </g>`;
      }).join("")}
      <text class="gr-next" x="40" y="${Y0 + 50}" text-anchor="middle" font-size="22" font-weight="800" fill="#fde047"></text>
      <text x="40" y="${Y0 + 22}" text-anchor="middle" font-size="11" fill="#cbd5e1">${opts.pick(["procure", "find", "busca"])}</text>
      <text class="gr-time" x="280" y="${Y0 + 50}" text-anchor="middle" font-size="18" font-weight="800" fill="#f8fafc"></text>
      <text x="280" y="${Y0 + 22}" text-anchor="middle" font-size="11" fill="#cbd5e1">⏱️</text>
      <circle class="gr-ring" r="8" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"/>
      <text class="gr-finger" text-anchor="middle" font-size="22" opacity="0">👆</text>
      <text class="a-count gr-title" x="160" y="26" text-anchor="middle"></text>
      <g class="gr-end" opacity="0">
        <rect x="40" y="62" width="240" height="56" rx="12" fill="rgba(0,0,0,0.85)" stroke="#fde047" stroke-width="2"/>
        <text x="160" y="85" text-anchor="middle" font-size="14" font-weight="800" fill="#fde047">${opts.pick([`... até o ${to}! 🏁`, `... all the way to ${to}! 🏁`, `... ¡hasta el ${to}! 🏁`])}</text>
        <text x="160" y="105" text-anchor="middle" font-size="12" fill="#f8fafc">${opts.pick(["Menos segundos = melhor 🏆", "Fewer seconds = better 🏆", "Menos segundos = mejor 🏆"])}</text>
      </g>
    </svg>`;

  const svg = box.querySelector("svg");
  const cells = Object.fromEntries([...svg.querySelectorAll(".gr-cell")].map((g) => [g.dataset.n, g]));
  const nextEl = svg.querySelector(".gr-next");
  const timeEl = svg.querySelector(".gr-time");
  const titleEl = svg.querySelector(".gr-title");
  const ring = svg.querySelector(".gr-ring");
  const finger = svg.querySelector(".gr-finger");
  const endEl = svg.querySelector(".gr-end");
  titleEl.textContent = opts.pick(["1 → 2 → 3 → ...", "1 → 2 → 3 → ...", "1 → 2 → 3 → ..."]);
  let lastNext = null;
  let lastTime = null;

  return cqLoop((seconds) => {
    const t = seconds % LOOP;
    let next = 1;
    let tap = null;
    taps.forEach((k) => {
      if (t >= k.at && !k.wrong) next = k.n + 1;
      const d = t - k.at;
      if (d >= 0 && d < 0.45) tap = { ...k, d };
    });

    NUMS.forEach((n) => {
      const g = cells[n];
      const rect = g.querySelector("rect");
      const done = taps.some((k) => !k.wrong && k.n === n && t >= k.at);
      const wrong = taps.find((k) => k.wrong && k.n === n);
      const wd = wrong ? t - wrong.at : -1;
      const shaking = wd >= 0 && wd < 0.5;
      rect.setAttribute("fill", done ? "#16a34a" : shaking ? "#dc2626" : "#1e293b");
      rect.setAttribute("stroke", done ? "#86efac" : shaking ? "#fca5a5" : "#475569");
      g.setAttribute("transform", shaking ? `translate(${(Math.sin(wd * 60) * 3).toFixed(1)},0)` : "");
    });

    const finished = t >= doneAt;
    const n = finished ? "✔" : `→ ${next}`;
    if (n !== lastNext) {
      lastNext = n;
      nextEl.textContent = n;
    }
    const secs = `${Math.floor(Math.min(t, doneAt) * 1.6)} s`;
    if (secs !== lastTime) {
      lastTime = secs;
      timeEl.textContent = secs;
    }

    finger.setAttribute("opacity", tap ? 1 : 0);
    ring.setAttribute("opacity", tap ? (1 - tap.d / 0.45).toFixed(2) : 0);
    if (tap) {
      const p = pos(tap.n);
      const cx = p.x + CELL / 2;
      const cy = p.y + CELL / 2;
      finger.setAttribute("x", cx);
      finger.setAttribute("y", cy + 24);
      ring.setAttribute("cx", cx);
      ring.setAttribute("cy", cy);
      ring.setAttribute("r", (8 + tap.d * 36).toFixed(1));
      ring.setAttribute("stroke", tap.wrong ? "#fca5a5" : "#fff");
    }
    endEl.setAttribute("opacity", finished ? cqClamp01((t - doneAt) / 0.3) : 0);
  });
});
