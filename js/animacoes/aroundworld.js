/* Volta ao mundo (de lado): um toque levanta a bola, o pé dá uma volta inteira em volta dela no ar
   e, antes de ela cair, mais um toque para continuar. Só vale com esse toque depois da volta. */

cqRegisterAnim("aroundworld", (box, opts) => {
  const hipX = 150;
  const hipY = CQ_GROUND - 35;
  const spot = { x: hipX + 22, y: CQ_GROUND - 19 };
  const apex = { x: hipX + 20, y: 92 };
  const upT = 1.1;
  const cycle = 1.5;
  const rx = 11;
  const ry = 7;
  const rest = [2, 35];
  const base = { ...CQ_POSE.stand, lean: -4, armF: [-45, -30], armB: [50, -30] };

  box.innerHTML = cqSceneSvg(opts.label, `
    <ellipse class="a-orbit" rx="${rx}" ry="${ry}" fill="none" stroke="#facc15" stroke-width="1" stroke-dasharray="2 1.5" opacity="0" />
    <text x="250" y="70" text-anchor="middle" class="a-note a-say"></text>
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const orbit = svg.querySelector(".a-orbit");
  const texts = {
    up: opts.pick(["toque para cima...", "flick it up...", "toque hacia arriba..."]),
    round: opts.pick(["o pé dá a volta na bola...", "your foot goes round the ball...", "el pie da la vuelta al balón..."]),
    again: opts.pick(["...e mais um toque: vale!", "...and one more touch: it counts!", "...y otro toque: ¡vale!"]),
  };
  // Up from the foot to the apex and back down in upT seconds, then a small keep-up to finish.
  const ballAt = (t) => {
    if (t < upT) {
      const u = t / upT;
      return { x: cqLerp(spot.x, apex.x, Math.sin(Math.PI * u)), y: spot.y - (spot.y - apex.y) * Math.sin(Math.PI * u) };
    }
    return cqArc(spot.x, spot.y, spot.x, spot.y, 20, (t - upT) / (cycle - upT));
  };
  const reachTo = (x, y) => cqLegIK(x - hipX - 2, y + 4 - hipY);

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const b = ballAt(t);
    let leg;
    orbit.setAttribute("opacity", 0);
    if (t < 0.12) leg = reachTo(spot.x, spot.y);
    else if (t < 0.8) {
      // Full turn round the ball: under, in front, over the top, behind and back under.
      const v = cqEase((t - 0.12) / 0.68);
      const phi = ((90 - 360 * v) * Math.PI) / 180;
      leg = reachTo(b.x + rx * Math.cos(phi), b.y + ry * Math.sin(phi));
      orbit.setAttribute("cx", b.x);
      orbit.setAttribute("cy", b.y);
      orbit.setAttribute("opacity", 0.8);
    } else if (t < upT) {
      const v = cqEase((t - 0.8) / (upT - 0.8));
      const end = reachTo(b.x, b.y + ry);
      const hit = reachTo(spot.x, spot.y);
      leg = [cqLerp(end[0], hit[0], v), cqLerp(end[1], hit[1], v)];
    } else {
      const v = (t - upT) / (cycle - upT);
      const k = Math.max(Math.max(0, 1 - v / 0.25), Math.max(0, (v - 0.75) / 0.25));
      const low = cqLegIK(rest[0], rest[1]);
      const hit = reachTo(spot.x, spot.y);
      leg = [cqLerp(low[0], hit[0], k), cqLerp(low[1], hit[1], k)];
    }
    rig.pose(hipX, 1, { ...base, legF: leg, legB: [6, 4] });
    ball(b.x, b.y, seconds * 200);
    const text = t < 0.12 ? texts.up : t < upT ? texts.round : texts.again;
    if (say.textContent !== text) say.textContent = text;
    count((round % 9) + (t >= upT ? 1 : 0), svg.querySelector(".a-ball"));
  });
});
