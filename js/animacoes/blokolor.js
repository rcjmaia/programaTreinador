/* Blokolor: linhas coloridas embaixo, cada uma com um bloco da sua cor.
   O dedo toca nas linhas para levar o bloco certo até a bola e tirar o errado da frente.
   Mostra a bola arco-íris (qualquer bloco come, vale 2), a bomba (não pode encostar em nada)
   uma bola na cor errada que zera a sequência (mas o recorde fica) e, no fim, as linhas trocando de cor. */

cqRegisterAnim("blokolor", (box, opts) => {
  const colors = ["yellow", "green", "blue", "red"];
  const HEX = { red: "#ef4444", blue: "#3b82f6", yellow: "#facc15", green: "#22c55e" };
  const n = colors.length;
  const last = n - 1;
  const TOP = 34;
  const BOTTOM = 166;
  const SPEED = 45;
  const BR = 7;
  const BLOCK = { w: 34, h: 12 };
  const LOOP = 11;
  const SWAP_AT = 8.9;
  const rowY = colors.map((_, i) => 97 + ((i + 0.5) * 56) / n);
  const startX = [230, 160, 90, 200].slice(0, n);

  // Each tap slides one block to a new x.
  const taps = [
    { t: 1.2, row: 1, x: 100 },
    { t: 2.3, row: 0, x: 140 },
    { t: 3.0, row: last, x: 230 },
  ];
  // at = when the ball reaches its row (or the bottom, for the bomb).
  const balls = [
    { at: 2.2, x: 100, row: 1, kind: "color", pts: 1 },
    { at: 3.9, x: 230, row: last, kind: "color", pts: 1 },
    { at: 5.0, x: 140, row: 0, kind: "rainbow", pts: 2 },
    { at: 6.6, x: 50, row: -1, kind: "bomb", pts: 1 },
    { at: 7.8, x: 140, row: 0, kind: "color", color: colors[1], crash: true },
  ];
  balls.forEach((b) => {
    if (!b.color) b.color = b.kind === "color" ? colors[b.row] : b.kind;
    b.endY = b.row < 0 ? BOTTOM + BR : rowY[b.row] - BLOCK.h / 2 - BR;
    b.start = b.at - (b.endY - TOP + BR) / SPEED;
  });
  const crashAt = balls.find((b) => b.crash).at;

  const ballSvg = (b) => {
    if (b.kind === "bomb") return `<text y="7" text-anchor="middle" font-size="18">💣</text>`;
    const fill = b.kind === "rainbow" ? "url(#bk-rainbow)" : HEX[b.color];
    return `<circle r="${BR}" fill="${fill}" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>`;
  };
  const popText = (b) => (b.kind === "rainbow" ? "🌈 +2" : b.kind === "bomb" ? "💣 +1" : "+1");

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 ${CQ_W} 170" role="img" aria-label="${opts.label}">
      <defs>
        <linearGradient id="bk-rainbow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ef4444"/><stop offset="0.3" stop-color="#facc15"/><stop offset="0.6" stop-color="#22c55e"/><stop offset="1" stop-color="#3b82f6"/>
        </linearGradient>
        <clipPath id="bk-clip"><rect x="20" y="${TOP}" width="280" height="${BOTTOM - TOP}" rx="8"/></clipPath>
      </defs>
      <g clip-path="url(#bk-clip)">
        <rect x="20" y="${TOP}" width="280" height="${BOTTOM - TOP}" fill="#0f172a"/>
        <rect class="bk-flash" x="20" y="${TOP}" width="280" height="${BOTTOM - TOP}" fill="#ef4444" opacity="0"/>
        ${colors.map((c, i) => `<g class="bk-row">
          <rect class="bk-line" x="28" y="${rowY[i] - 1.5}" width="264" height="3" rx="1.5" fill="${HEX[c]}" opacity="0.85"/>
          <g class="bk-block"><rect x="${-BLOCK.w / 2}" y="${-BLOCK.h / 2}" width="${BLOCK.w}" height="${BLOCK.h}" rx="3" fill="${HEX[c]}" stroke="rgba(255,255,255,0.35)"/><g class="bk-eyes">${[-7, 7].map((x) => `<circle cx="${x}" cy="-2" r="3" fill="#fff"/><circle cx="${x}" cy="-3" r="1.4" fill="#111"/>`).join("")}</g><ellipse class="bk-mouth" cx="0" cy="3" rx="3.6" ry="2.2" fill="#3b0a0a"/></g>
        </g>`).join("")}
        ${balls.map((b) => `<g class="bk-ball">${ballSvg(b)}</g>`).join("")}
        ${balls.map(() => `<text class="bk-pop" text-anchor="middle" font-size="12" font-weight="800" fill="#fde047" opacity="0"></text>`).join("")}
        <circle class="bk-ring" r="8" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"/>
        <text class="bk-finger" text-anchor="middle" font-size="20" opacity="0">👆</text>
      </g>
      <rect x="20" y="${TOP}" width="280" height="${BOTTOM - TOP}" rx="8" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
      <text x="160" y="24" text-anchor="middle" class="a-count bk-count"></text>
      <text class="bk-crash" x="160" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" opacity="0">${opts.pick(["💥 Cor errada! Zerou", "💥 Wrong colour! Back to 0", "💥 ¡Color equivocado! A cero"])}</text>
      <text class="bk-keep" x="160" y="80" text-anchor="middle" font-size="11" fill="#fde047" opacity="0">${opts.pick(["mas o recorde 🏆 fica!", "but your record 🏆 stays!", "¡pero tu récord 🏆 queda!"])}</text>
      <text class="bk-swap" x="160" y="70" text-anchor="middle" font-size="16" font-weight="800" fill="#fde047" opacity="0">${opts.pick(["🔀 TROCOU! 🔀", "🔀 SWAP! 🔀", "🔀 ¡CAMBIO! 🔀"])}</text>
    </svg>`;

  const svg = box.querySelector("svg");
  const rowEls = [...svg.querySelectorAll(".bk-row")].map((g) => ({ line: g.querySelector(".bk-line"), block: g.querySelector(".bk-block"), blockRect: g.querySelector(".bk-block rect"), eyes: g.querySelector(".bk-eyes"), mouth: g.querySelector(".bk-mouth") }));
  const ballEls = [...svg.querySelectorAll(".bk-ball")];
  const popEls = [...svg.querySelectorAll(".bk-pop")];
  const ring = svg.querySelector(".bk-ring");
  const finger = svg.querySelector(".bk-finger");
  const flash = svg.querySelector(".bk-flash");
  const countEl = svg.querySelector(".bk-count");
  const crashEl = svg.querySelector(".bk-crash");
  const keepEl = svg.querySelector(".bk-keep");
  const swapEl = svg.querySelector(".bk-swap");
  balls.forEach((b, i) => (popEls[i].textContent = popText(b)));
  let lastText = "";
  let swapped = null;

  return cqLoop((seconds) => {
    const t = seconds % LOOP;

    // Blocks: each tap slides its block over 0.25 s. Eating: a bump and two chomps. Wrong ball: a scowl and a shake.
    rowEls.forEach((r, i) => {
      let x = startX[i];
      taps.forEach((tp) => {
        if (tp.row === i && t >= tp.t) x = cqLerp(x, tp.x, cqEase(cqClamp01((t - tp.t) / 0.25)));
      });
      const eat = balls.find((b) => b.row === i && !b.crash && t >= b.at && t < b.at + 0.7);
      const coming = balls.some((b) => b.row === i && !b.crash && t >= b.at - 0.6 && t < b.at);
      const yuck = balls.find((b) => b.row === i && b.crash && t >= b.at && t < b.at + 0.7);
      const de = eat ? t - eat.at : 0;
      const dy = yuck ? t - yuck.at : 0;
      const s = eat ? 1 + 0.12 * Math.sin(de * 6 * Math.PI) * (1 - de / 0.7) : 1;
      const rot = yuck && dy < 0.5 ? 10 * Math.sin(dy * 40) * (1 - dy / 0.5) : 0;
      r.block.setAttribute("transform", `translate(${x.toFixed(1)},${rowY[i].toFixed(1)}) rotate(${rot.toFixed(1)}) scale(${s.toFixed(2)})`);
      r.eyes.setAttribute("transform", eat ? "translate(0,-2) scale(1,0.3)" : yuck ? "translate(0,-1) scale(1,0.5)" : "");
      // Mouth: wide open while the ball comes, then three chews.
      r.mouth.setAttribute("ry", (eat ? 3 * Math.abs(Math.cos(de * (3 / 0.7) * Math.PI)) : yuck ? 0.8 : coming ? 3.2 : 2.2).toFixed(2));
      r.mouth.setAttribute("rx", eat || coming ? 5 : 3.6);
      r.mouth.setAttribute("cy", yuck ? 4 : 3);
    });

    // After the crash the colours rotate between the lines, as from TURBO x2 in the game.
    const swap = t >= SWAP_AT;
    if (swap !== swapped) {
      swapped = swap;
      rowEls.forEach((r, i) => {
        const c = HEX[colors[swap ? (i + 1) % n : i]];
        r.line.setAttribute("fill", c);
        r.blockRect.setAttribute("fill", c);
      });
    }
    const ds = t - SWAP_AT;
    swapEl.setAttribute("opacity", swap && ds < 1.6 ? 1 : 0);
    rowEls.forEach((r) => r.line.setAttribute("height", swap && ds < 0.6 ? 7 : 3));

    balls.forEach((b, i) => {
      const el = ballEls[i];
      const d = t - b.at;
      if (t < b.start || d > 0.3) {
        el.setAttribute("opacity", 0);
      } else {
        // An eaten ball drops into the mouth and shrinks.
        const into = d >= 0 && !b.crash && b.row >= 0 ? cqClamp01(d / 0.12) * (rowY[b.row] - b.endY) : 0;
        const y = (d < 0 ? b.endY - (b.at - t) * SPEED : b.endY) + into;
        const s = d < 0 || b.crash ? 1 : Math.max(0.1, 1 - d * 3);
        el.setAttribute("opacity", d < 0 ? 1 : b.crash ? 0.5 : (1 - d / 0.3).toFixed(2));
        el.setAttribute("transform", `translate(${b.x},${y.toFixed(1)}) scale(${s.toFixed(2)})`);
      }
      const pop = popEls[i];
      const show = !b.crash && d >= 0 && d < 0.9;
      pop.setAttribute("opacity", show ? (1 - d / 0.9).toFixed(2) : 0);
      pop.setAttribute("x", b.x);
      pop.setAttribute("y", ((b.row < 0 ? BOTTOM - 14 : b.endY - 8) - (show ? d * 22 : 0)).toFixed(1));
    });

    const tap = taps.find((tp) => t >= tp.t && t < tp.t + 0.45);
    finger.setAttribute("opacity", tap ? 1 : 0);
    ring.setAttribute("opacity", tap ? (1 - (t - tap.t) / 0.45).toFixed(2) : 0);
    if (tap) {
      finger.setAttribute("x", tap.x);
      finger.setAttribute("y", rowY[tap.row] + 20);
      ring.setAttribute("cx", tap.x);
      ring.setAttribute("cy", rowY[tap.row]);
      ring.setAttribute("r", (8 + (t - tap.t) * 40).toFixed(1));
    }

    const dc = t - crashAt;
    flash.setAttribute("opacity", dc >= 0 && dc < 0.5 ? (0.55 * (1 - dc / 0.5)).toFixed(2) : 0);
    const crashText = dc >= 0 && !swap;
    crashEl.setAttribute("opacity", crashText ? 1 : 0);
    keepEl.setAttribute("opacity", crashText && dc >= 0.8 ? 1 : 0);

    let streak = 0;
    let best = 0;
    balls.forEach((b) => {
      if (t < b.at) return;
      streak = b.crash ? 0 : streak + b.pts;
      best = Math.max(best, streak);
    });
    const text = `${opts.unit}: ${streak} · 🏆 ${best}`;
    if (text !== lastText) {
      lastText = text;
      countEl.textContent = text;
    }
  });
});
