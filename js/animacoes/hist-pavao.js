/* Historinha do Pavão, mostrada antes da pergunta (precisa de cabine.js para as carinhas da turma).
   Primeiro o Pavão manda: o jogador tenta driblar todo mundo e perde a bola.
   Depois volta a cena e o Capitão manda: passe para o amigo livre e gol do time.
   Toca uma vez e chama opts.onEnd; a comemoração final continua até a criança responder. */

cqRegisterAnim("hist-pavao", (box, opts) => {
  const T = {
    start: 0, think: 1.4, steal: 3.6, lost: 4.1, rewind: 5.0, reset: 5.5, again: 6.0,
    capitao: 6.3, pass: 8.0, flyEnd: 9.1, shot: 9.5, goal: 10.3, party: 11.3, end: 13.5,
  };
  const { me: ME_KIT, mate: MATE_KIT } = cqMeKits(opts.me);
  const RIVAL_KIT = ["#dc2626", "#ef4444"].includes(ME_KIT.shirt)
    ? { shirt: "#f8fafc", trim: "#94a3b8", shorts: "#1e293b", socks: "#f8fafc", boots: "#111827", skin: "#8d5524", hair: "#1f1610" }
    : { shirt: "#ef4444", trim: "#7f1d1d", shorts: "#111827", socks: "#ef4444", boots: "#111827", skin: "#8d5524", hair: "#1f1610" };
  const MATE_X = 232;
  const RIVAL_X = 162;
  const BALL_Y = CQ_GROUND - 5;
  const say = {
    pavao: opts.pick(["Olhem pra mim! Vou driblar todo mundo!", "Look at me! I'll dribble past everyone!", "¡Mírenme! ¡Voy a gambetear a todos!"]),
    capitao: opts.pick(["O amigo está livre. Passa!", "Your friend is free. Pass!", "El amigo está libre. ¡Pásala!"]),
    pulinho: opts.pick(["Gol do time!", "Team goal!", "¡Gol del equipo!"]),
  };
  const captions = [
    [T.start, opts.pick(["⚽ Você pegou a bola!", "⚽ You've got the ball!", "⚽ ¡Tienes el balón!"])],
    [T.think, opts.pick(["🦚 O Pavão quer aparecer...", "🦚 Peacock wants to show off...", "🦚 El Pavo Real quiere lucirse..."])],
    [T.lost, opts.pick(["😕 Perdeu a bola...", "😕 Lost the ball...", "😕 Perdió el balón..."])],
    [T.rewind, opts.pick(["⏪ Vamos de novo?", "⏪ Let's try again?", "⏪ ¿Otra vez?"])],
    [T.capitao, opts.pick(["⭐ Agora quem manda é o Capitão", "⭐ Now the Captain is in charge", "⭐ Ahora manda el Capitán"])],
    [T.pass, opts.pick(["🤝 Passe para o amigo...", "🤝 Pass to your friend...", "🤝 Pase al amigo..."])],
    [T.goal, opts.pick(["🎉 Juntos a gente brilha mais!", "🎉 Together we shine brighter!", "🎉 ¡Juntos brillamos más!"])],
  ];
  const faces = ["pavao", "capitao", "pulinho"];

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 320 180" role="img" aria-label="${opts.label}" font-family="system-ui, sans-serif">
      <rect x="0" y="0" width="320" height="${CQ_GROUND}" fill="#7dd3fc" />
      <rect x="0" y="92" width="320" height="${CQ_GROUND - 92}" fill="#bae6fd" />
      <rect x="0" y="${CQ_GROUND}" width="320" height="${180 - CQ_GROUND}" fill="#166534" />
      <line x1="0" y1="${CQ_GROUND}" x2="320" y2="${CQ_GROUND}" stroke="#22c55e" stroke-width="2" />
      <g class="h-goal">${cqGoalSvg(284, 30, 50)}</g>
      <g class="h-rival">${cqPlayerSvg(RIVAL_KIT)}</g>
      <g class="h-mate">${cqPlayerSvg(MATE_KIT)}</g>
      <g class="h-me">${cqPlayerSvg(ME_KIT)}</g>
      <g class="h-ball">${cqBallSvg(5)}</g>
      <g class="h-think" opacity="0">
        <circle class="h-dot1" r="3" fill="#fff" stroke="#94a3b8" />
        <circle class="h-dot2" r="5" fill="#fff" stroke="#94a3b8" />
        <g class="h-cloud">
          <g fill="#fff" stroke="#94a3b8" stroke-width="1"><ellipse cx="0" cy="0" rx="27" ry="23" /></g>
          ${faces.map((id) => `<g class="h-face" data-id="${id}" opacity="0"><g transform="translate(0 -2) scale(.82)">${cqMindFace(id)}</g></g>`).join("")}
        </g>
        <g class="h-say">
          <rect class="h-say-box" rx="7" fill="#fff" stroke="#111" stroke-width="1" />
          <text class="h-say-text" text-anchor="middle" font-size="9" font-weight="700" fill="#111"></text>
        </g>
      </g>
      <rect class="h-dim" x="0" y="0" width="320" height="180" fill="#0f172a" opacity="0" />
      <text class="h-big" x="160" y="86" text-anchor="middle" font-size="34" font-weight="800" fill="#facc15" stroke="#111" stroke-width="1.5" opacity="0"></text>
      <g class="h-sparks" opacity="0" font-size="16">
        <text x="40" y="40">✨</text><text x="270" y="30">✨</text><text x="120" y="22">⭐</text><text x="210" y="60">✨</text><text x="70" y="80">⭐</text>
      </g>
      <text class="h-cap" x="160" y="167" text-anchor="middle" font-size="12" font-weight="700" fill="#fff"></text>
    </svg>`;

  const svg = box.querySelector("svg");
  const me = cqPlayerRig(svg.querySelector(".h-me"));
  const mate = cqPlayerRig(svg.querySelector(".h-mate"));
  const rival = cqPlayerRig(svg.querySelector(".h-rival"));
  const ballEl = svg.querySelector(".h-ball");
  const think = svg.querySelector(".h-think");
  const cloud = svg.querySelector(".h-cloud");
  const dot1 = svg.querySelector(".h-dot1");
  const dot2 = svg.querySelector(".h-dot2");
  const faceEls = Object.fromEntries([...svg.querySelectorAll(".h-face")].map((el) => [el.dataset.id, el]));
  const sayBox = svg.querySelector(".h-say-box");
  const sayText = svg.querySelector(".h-say-text");
  const dim = svg.querySelector(".h-dim");
  const big = svg.querySelector(".h-big");
  const sparks = svg.querySelector(".h-sparks");
  const cap = svg.querySelector(".h-cap");

  const seg = (t, a, b) => cqClamp01((t - a) / (b - a));
  const ball = (x, y, spin = x * 9) => ballEl.setAttribute("transform", `translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${spin.toFixed(0)})`);
  const wave = (t) => ({ ...CQ_POSE.stand, armF: [-150 - Math.sin(t * 8) * 18, -15] });
  const cheer = (t, phase) => {
    const up = Math.abs(Math.sin(t * 5 + phase));
    return { pose: cqMixPose(CQ_POSE.stand, { ...CQ_POSE.air, legF: [-20, 40], legB: [10, 40] }, up), lift: up * 12 };
  };
  const dribble = (t, a, b, x0, x1) => {
    const x = cqLerp(x0, x1, seg(t, a, b));
    me.pose(x, 1, cqRunPose(x / 7));
    ball(x + 13, BALL_Y - Math.abs(Math.sin(x / 7)) * 2);
    return x;
  };

  let shownSay = null;
  const setSay = (id, text, x) => {
    faces.forEach((f) => faceEls[f].setAttribute("opacity", f === id ? 1 : 0));
    if (shownSay !== text) {
      shownSay = text;
      const lines = cqWrap(text, 18).slice(0, 3);
      sayText.innerHTML = lines.map((l, i) => `<tspan x="0" dy="${i ? 10.5 : 0}">${l}</tspan>`).join("");
      sayBox.dataset.w = Math.max(...lines.map((l) => l.length)) * 5.1 + 14;
      sayBox.dataset.h = lines.length * 10.5 + 8;
    }
    const w = +sayBox.dataset.w;
    const h = +sayBox.dataset.h;
    const cx = Math.max(32, Math.min(288, x - 6));
    const right = cx + 30 + w <= 316;
    const sx = right ? cx + 30 : cx - 30 - w;
    sayBox.setAttribute("width", w);
    sayBox.setAttribute("height", h);
    sayBox.setAttribute("x", sx);
    sayBox.setAttribute("y", 10);
    sayText.setAttribute("transform", `translate(${sx + w / 2} 22)`);
    return cx;
  };
  const showThink = (id, text, headX, k, t) => {
    if (k <= 0) return think.setAttribute("opacity", 0);
    think.setAttribute("opacity", Math.min(1, k * 1.5));
    const cx = setSay(id, text, headX);
    const cy = 30 + Math.sin(t * 2.5) * 1.5;
    const s = 0.4 + 0.6 * cqEase(Math.min(1, k));
    cloud.setAttribute("transform", `translate(${cx} ${cy.toFixed(1)}) scale(${s.toFixed(3)})`);
    dot1.setAttribute("cx", cqLerp(headX, cx, 0.3));
    dot1.setAttribute("cy", 56);
    dot2.setAttribute("cx", cqLerp(headX, cx, 0.65));
    dot2.setAttribute("cy", 50);
  };

  let ended = false;
  let lastCap = "";
  return cqLoop((t) => {
    if (!ended && t >= T.end) {
      ended = true;
      opts.onEnd?.();
    }
    const capText = captions.filter(([at]) => t >= at).pop()?.[1] || "";
    if (capText !== lastCap) cap.textContent = lastCap = capText;

    dim.setAttribute("opacity", t < T.rewind ? 0 : t < T.reset ? 0.85 * seg(t, T.rewind, T.rewind + 0.35) : t < T.again ? 0.85 * (1 - seg(t, T.reset + 0.1, T.again)) : 0);
    big.setAttribute("opacity", 0);
    sparks.setAttribute("opacity", 0);

    // Part 1: Peacock in charge.
    if (t < T.reset) {
      rival.pose(RIVAL_X, -1, CQ_POSE.ready);
      mate.pose(MATE_X, -1, t < T.steal ? wave(t) : CQ_POSE.stand);
      let x;
      if (t < T.steal) x = dribble(t, T.start, T.steal, 30, 138);
      else {
        x = 138;
        me.pose(x, 1, cqMixPose(CQ_POSE.ready, { ...CQ_POSE.stand, lean: -6 }, seg(t, T.steal, T.lost)));
        const k = seg(t, T.steal, T.lost);
        rival.pose(cqLerp(RIVAL_X, 152, k), -1, cqMixPose(CQ_POSE.ready, CQ_POSE.kickHit, k));
        if (t >= T.lost) {
          const rx = cqLerp(152, -30, seg(t, T.lost, T.rewind));
          rival.pose(rx, -1, cqRunPose(rx / 7));
          ball(rx - 13, BALL_Y);
        } else ball(cqLerp(151, 141, k), BALL_Y);
      }
      const k = t < T.steal ? seg(t, T.think, T.think + 0.5) * (0.7 + 0.3 * seg(t, T.think, T.steal)) : 1 - seg(t, T.steal, T.lost + 0.4);
      showThink("pavao", say.pavao, x, k, t);
      return;
    }

    // Part 2: Captain in charge.
    if (t < T.again) {
      rival.pose(RIVAL_X, -1, CQ_POSE.ready);
      mate.pose(MATE_X, -1, CQ_POSE.stand);
      me.pose(30, 1, CQ_POSE.stand);
      ball(43, BALL_Y);
      think.setAttribute("opacity", 0);
      big.textContent = "⏪";
      big.setAttribute("opacity", seg(t, T.reset, T.reset + 0.15) * (1 - seg(t, T.again - 0.2, T.again)));
      return;
    }

    let meX = 108;
    if (t < T.pass) meX = dribble(t, T.again, T.pass, 30, 108);
    else if (t < T.goal) {
      const kk = seg(t, T.pass, T.pass + 0.35);
      me.pose(meX, 1, kk < 0.5 ? cqMixPose(CQ_POSE.ready, CQ_POSE.kickBack, kk * 2) : cqMixPose(CQ_POSE.kickBack, CQ_POSE.kickHit, kk * 2 - 1));
      if (t > T.pass + 0.8) me.pose(meX, 1, CQ_POSE.stand);
    } else {
      meX = cqLerp(108, 196, seg(t, T.goal, T.party));
      if (t < T.party) me.pose(meX, 1, cqRunPose(meX / 7));
      else {
        const c = cheer(t, 0);
        me.pose(meX, 1, c.pose, c.lift);
      }
    }

    // The rival jumps for the lofted pass and misses it.
    const jump = Math.sin(Math.PI * seg(t, T.pass + 0.45, T.pass + 0.95));
    if (t < T.goal) rival.pose(RIVAL_X, -1, jump > 0 ? CQ_POSE.air : CQ_POSE.ready, jump * 14);
    else rival.pose(RIVAL_X, 1, CQ_POSE.stand);

    if (t < T.flyEnd) mate.pose(MATE_X, -1, wave(t));
    else if (t < T.shot) mate.pose(MATE_X, 1, CQ_POSE.ready);
    else if (t < T.goal) {
      const kk = seg(t, T.shot, T.shot + 0.3);
      mate.pose(MATE_X, 1, kk < 0.5 ? cqMixPose(CQ_POSE.ready, CQ_POSE.kickBack, kk * 2) : cqMixPose(CQ_POSE.kickBack, CQ_POSE.kickHit, kk * 2 - 1));
    } else {
      const c = cheer(t, 1.3);
      mate.pose(MATE_X, -1, c.pose, c.lift);
    }

    if (t < T.pass + 0.35) {
      if (t >= T.pass) ball(120, BALL_Y);
    } else if (t < T.flyEnd) {
      const p = cqArc(120, BALL_Y, MATE_X + 10, BALL_Y, 100, seg(t, T.pass + 0.35, T.flyEnd));
      ball(p.x, p.y);
    } else if (t < T.shot + 0.3) ball(MATE_X + 12, BALL_Y, 0);
    else if (t < T.goal) {
      const p = cqArc(MATE_X + 12, BALL_Y, 302, BALL_Y - 22, 8, seg(t, T.shot + 0.3, T.goal));
      ball(p.x, p.y);
    } else ball(302, cqLerp(BALL_Y - 22, BALL_Y, seg(t, T.goal, T.goal + 0.3)), 0);

    if (t >= T.goal) {
      const pop = seg(t, T.goal, T.goal + 0.3);
      big.textContent = opts.pick(["GOOOL!", "GOAL!", "¡GOOOL!"]);
      big.setAttribute("opacity", 1 - seg(t, T.party + 0.6, T.party + 1.2));
      big.setAttribute("transform", `translate(160 70) scale(${(0.6 + 0.4 * pop).toFixed(2)}) translate(-160 -70)`);
      sparks.setAttribute("opacity", 0.6 + 0.4 * Math.sin(t * 6));
    }

    if (t < T.goal) showThink("capitao", say.capitao, meX, seg(t, T.capitao, T.capitao + 0.5) * (1 - seg(t, T.flyEnd, T.flyEnd + 0.4)), t);
    else showThink("pulinho", say.pulinho, meX, seg(t, T.party + 0.6, T.party + 1.1), t);
  });
});
