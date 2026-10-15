/* Chuvas de cores: bolas caem e um dedo toca só nas certas, deixando as outras passarem.
   No meio a regra troca de cor (o aviso pisca) e, perto do fim, um toque errado custa 1 ❤️.
   opts.args: { mode: "only" | "avoid" | "stroop" } ou { sides: [mode, mode] } para a tela dividida. */

cqRegisterAnim("chuva", (box, opts) => {
  const COLORS = { red: "#ef4444", blue: "#3b82f6", yellow: "#facc15", green: "#22c55e" };
  const NAMES = {
    red: ["VERMELHAS", "RED", "ROJOS"],
    blue: ["AZUIS", "BLUE", "AZULES"],
    yellow: ["AMARELAS", "YELLOW", "AMARILLOS"],
    green: ["VERDES", "GREEN", "VERDES"],
  };
  const modes = opts.args.sides || [opts.args.mode || "only"];
  const duo = modes.length > 1;
  const LOOP = 9.5;
  const TOP = 40;
  const H = 126;
  const SPEED = 62;
  const TAP_Y = TOP + 74;
  const TAP_AFTER = (TAP_Y - TOP + 10) / SPEED;
  const SWITCH = 4.8;
  const TAP_SHOW = 0.4;

  const geo = duo ? [{ x: 20, w: 130 }, { x: 170, w: 130 }] : [{ x: 70, w: 180 }];
  // Which balls are "right" (G) or "wrong" (B), in falling order; the one marked X is the mistake.
  const PATTERN = duo ? ["G", "B", "G", "G", "B", "G", "X"] : ["G", "B", "G", "G", "B", "G", "B", "G", "X", "G"];
  const STEP = duo ? 1.05 : 0.72;

  const lanes = geo.map((g, li) => {
    const mode = modes[li];
    const rules = [li ? "red" : "blue", li ? "yellow" : "green"];
    const ruleAt = (t) => (t < SWITCH ? rules[0] : rules[1]);
    const others = (c) => Object.keys(COLORS).filter((k) => k !== c);
    const balls = PATTERN.map((kind, i) => {
      const t0 = 0.3 + i * STEP + li * 0.45;
      const target = ruleAt(t0 + TAP_AFTER);
      const good = kind === "G";
      const pick = others(target)[(i + li) % 3];
      // "avoid": every colour but the target is right, so a right ball is any other colour.
      const color = mode === "avoid" ? (good ? pick : target) : good ? target : pick;
      const fx = [0.25, 0.7, 0.45, 0.2, 0.8, 0.55, 0.35, 0.75, 0.5, 0.3][i];
      return { t0, color, tapped: kind !== "B", oops: kind === "X", x: g.x + g.w * fx };
    });
    return { ...g, mode, rules, ruleAt, balls };
  });

  const say = {
    only: ["✅ Só {c}", "✅ Only {c}", "✅ Solo {c}"],
    avoid: ["🚫 Menos {c}", "🚫 Not {c}", "🚫 Menos {c}"],
  };
  const ruleHtml = (lane, target) => {
    const ink = lane.mode === "stroop" ? lane.rules.find((c) => c !== target) : target;
    const text = opts.pick(lane.mode === "avoid" ? say.avoid : say.only);
    const [before, after] = text.split("{c}");
    return `${before}<tspan fill="${COLORS[ink]}" font-weight="800">${opts.pick(NAMES[target])}</tspan>${after}`;
  };

  const uid = `ch${Math.random().toString(36).slice(2, 8)}`;
  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 ${CQ_W} 170" role="img" aria-label="${opts.label}">
      <defs>${lanes.map((l, i) => `<clipPath id="${uid}-${i}"><rect x="${l.x}" y="${TOP}" width="${l.w}" height="${H}" rx="8"/></clipPath>`).join("")}</defs>
      ${lanes.map((l, i) => `
        <g clip-path="url(#${uid}-${i})">
          <rect x="${l.x}" y="${TOP}" width="${l.w}" height="${H}" fill="#0f2a1a"/>
          <rect class="ch-flash" x="${l.x}" y="${TOP}" width="${l.w}" height="${H}" fill="#ef4444" opacity="0"/>
          ${l.balls.map(() => `<circle class="ch-ball" r="9" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>`).join("")}
          ${l.balls.map(() => `<text class="ch-pop" text-anchor="middle" font-size="13" font-weight="800" opacity="0"></text>`).join("")}
          <circle class="ch-ring" r="8" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"/>
          <text class="ch-finger" text-anchor="middle" font-size="22" opacity="0">👆</text>
        </g>
        <rect x="${l.x}" y="${TOP}" width="${l.w}" height="${H}" rx="8" fill="none" stroke="${l.mode === "avoid" ? "#ef4444" : "#22c55e"}" stroke-width="2.5"/>
        <g class="ch-rule">
          <rect x="${l.x + 6}" y="${TOP + 5}" width="${l.w - 12}" height="20" rx="10" fill="rgba(0,0,0,0.75)"/>
          <text x="${l.x + l.w / 2}" y="${TOP + 19}" text-anchor="middle" font-size="${duo ? 10 : 12}" font-weight="700" fill="#fff"></text>
        </g>`).join("")}
      <text x="160" y="26" text-anchor="middle" class="a-count ch-count"></text>
    </svg>`;

  const svg = box.querySelector("svg");
  const countEl = svg.querySelector(".ch-count");
  const groups = [...svg.querySelectorAll("g[clip-path]")];
  const ruleGroups = [...svg.querySelectorAll(".ch-rule")];
  lanes.forEach((lane, i) => {
    const g = groups[i];
    lane.ballEls = [...g.querySelectorAll(".ch-ball")];
    lane.popEls = [...g.querySelectorAll(".ch-pop")];
    lane.ring = g.querySelector(".ch-ring");
    lane.finger = g.querySelector(".ch-finger");
    lane.flash = g.querySelector(".ch-flash");
    lane.ruleText = ruleGroups[i].querySelector("text");
    lane.ruleRect = ruleGroups[i].querySelector("rect");
    lane.shown = "";
    lane.balls.forEach((b, j) => lane.ballEls[j].setAttribute("fill", COLORS[b.color]));
  });
  let lastText = "";

  return cqLoop((seconds) => {
    const t = seconds % LOOP;
    let points = 0;
    let hearts = 3;

    lanes.forEach((lane) => {
      const target = lane.ruleAt(t);
      if (lane.shown !== target) {
        lane.shown = target;
        lane.ruleText.innerHTML = ruleHtml(lane, target);
      }
      // The rule pill pulses for a moment right after the colour changes.
      const since = t - SWITCH;
      const pulse = since >= 0 && since < 0.6 ? 1 + 0.12 * Math.sin((since / 0.6) * Math.PI) : 1;
      const cx = lane.x + lane.w / 2;
      const cy = TOP + 15;
      lane.ruleText.parentNode.setAttribute("transform", `translate(${cx},${cy}) scale(${pulse.toFixed(3)}) translate(${-cx},${-cy})`);
      lane.ruleRect.setAttribute("stroke", since >= 0 && since < 0.6 ? "#fde047" : "none");
      lane.ruleRect.setAttribute("stroke-width", 2);

      let tap = null;
      let flash = 0;
      lane.balls.forEach((b, j) => {
        const el = lane.ballEls[j];
        const pop = lane.popEls[j];
        const tt = b.t0 + TAP_AFTER;
        const y = TOP - 10 + (t - b.t0) * SPEED;
        const gone = b.tapped && t >= tt;
        el.setAttribute("opacity", t < b.t0 || gone ? 0 : 1);
        el.setAttribute("cx", b.x.toFixed(1));
        el.setAttribute("cy", Math.min(y, TOP + H + 20).toFixed(1));
        if (b.tapped && t >= tt) {
          if (b.oops) {
            hearts--;
            flash = Math.max(flash, t - tt < 0.5 ? 0.55 * (1 - (t - tt) / 0.5) : 0);
          } else points++;
        }
        const d = t - tt;
        if (b.tapped && d >= 0 && d < TAP_SHOW) tap = { x: b.x, y: TAP_Y, d };
        const show = b.tapped && d >= 0 && d < 0.8;
        pop.setAttribute("opacity", show ? (1 - d / 0.8).toFixed(2) : 0);
        if (show) {
          pop.textContent = b.oops ? "❌" : "+1";
          pop.setAttribute("fill", b.oops ? "#fca5a5" : "#86efac");
          pop.setAttribute("x", b.x.toFixed(1));
          pop.setAttribute("y", (TAP_Y - 14 - d * 26).toFixed(1));
        }
      });
      lane.finger.setAttribute("opacity", tap ? 1 : 0);
      lane.ring.setAttribute("opacity", tap ? (1 - tap.d / TAP_SHOW).toFixed(2) : 0);
      if (tap) {
        lane.finger.setAttribute("x", tap.x.toFixed(1));
        lane.finger.setAttribute("y", (tap.y + 26).toFixed(1));
        lane.ring.setAttribute("cx", tap.x.toFixed(1));
        lane.ring.setAttribute("cy", tap.y.toFixed(1));
        lane.ring.setAttribute("r", (8 + tap.d * 40).toFixed(1));
      }
      lane.flash.setAttribute("opacity", flash.toFixed(2));
    });

    const text = `${opts.unit}: ${points} · ${"❤️".repeat(hearts)}${"🤍".repeat(3 - hearts)}`;
    if (text !== lastText) {
      lastText = text;
      countEl.textContent = text;
    }
  });
});
