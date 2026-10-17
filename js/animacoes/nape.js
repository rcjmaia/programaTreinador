/* Bola na nuca (vista de lado): joga a bola para cima com as mãos, abaixa o tronco com a cabeça para
   baixo no mesmo ritmo em que a bola cai, ainda descendo quando ela encaixa entre a nuca e os ombros, e vai
   freando devagar, amortecendo. Segura 3 segundos. Depois a bola rola por
   cima da cabeça de volta para as mãos e ele levanta para repetir. */

cqRegisterAnim("nape", (box, opts) => {
  const hipX = 120;
  const r = 7;
  const G = CQ_GROUND;
  const poses = {
    hold: { ...CQ_POSE.stand, armF: [-70, -70], armB: [-60, -75] },
    toss: { ...CQ_POSE.stand, hipY: G - 36, lean: -4, armF: [-165, -5], armB: [-160, -5] },
    prep: { hipY: G - 34, lean: 38, legF: [-12, 18], legB: [-6, 14], armF: [-25, -20], armB: [-10, -25] },
    nape: { hipY: G - 32, lean: 80, legF: [-24, 34], legB: [-14, 28], armF: [-50, -20], armB: [-25, -30] },
    dip: { hipY: G - 29, lean: 88, legF: [-40, 58], legB: [-30, 52], armF: [-62, -20], armB: [-32, -30] },
    roll: { hipY: G - 30, lean: 98, legF: [-28, 40], legB: [-18, 34], armF: [-110, -30], armB: [-100, -30] },
    catch: { hipY: G - 30, lean: 95, legF: [-28, 40], legB: [-18, 34], armF: [-150, -30], armB: [-145, -30] },
  };
  const T = { toss: 0.5, release: 0.8, peak: 1.3, land: 1.75, dip: 2.25, cushion: 2.7, hold: 4.7, roll: 5.25, caught: 5.6, up: 6.25 };
  const cycle = 6.55;
  // The back starts going down as the ball starts falling and is still moving when it lands:
  // no keyframe at the landing, so the body never stops right under the ball.
  const frames = [
    { t: 0, x: hipX, pose: poses.hold },
    { t: T.toss, x: hipX, pose: poses.hold },
    { t: T.release, x: hipX, pose: poses.toss },
    { t: 0.95, x: hipX, pose: poses.toss },
    { t: T.peak, x: hipX, pose: poses.prep },
    { t: T.dip, x: hipX, pose: poses.dip },
    { t: T.cushion, x: hipX, pose: poses.nape },
    { t: T.hold, x: hipX, pose: poses.nape },
    { t: T.roll, x: hipX, pose: poses.roll },
    { t: T.caught, x: hipX, pose: poses.catch },
    { t: T.up, x: hipX, pose: poses.hold },
    { t: cycle, x: hipX, pose: poses.hold },
  ];

  box.innerHTML = cqSceneSvg(opts.label, `
    <text x="160" y="160" text-anchor="middle" class="a-note a-say"></text>
    <text x="${hipX + 58}" y="84" class="a-note a-tip"></text>
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(r)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg);
  const ball = cqMovableBall(svg);
  const ballEl = svg.querySelector(".a-ball-pos");
  const count = cqCounter(svg, opts.unit);
  const say = svg.querySelector(".a-say");
  const tip = svg.querySelector(".a-tip");
  // The default counter spot is right where the ball peaks.
  svg.querySelector(".a-count").setAttribute("x", 262);

  // Torso point (hip-relative, before leaning) to the scene.
  const rad = (d) => (d * Math.PI) / 180;
  const fromTorso = (ps, lx, ly) => {
    const a = rad(ps.lean);
    return { x: hipX + lx * Math.cos(a) - ly * Math.sin(a), y: ps.hipY + lx * Math.sin(a) + ly * Math.cos(a) };
  };
  // Where the near hand is, following shoulder, upper arm and forearm.
  const hand = (ps) => {
    const s = fromTorso(ps, 0, -26);
    const a1 = rad(ps.lean + ps.armF[0]);
    const a2 = rad(ps.lean + ps.armF[0] + ps.armF[1]);
    return { x: s.x - 13 * Math.sin(a1) - 12 * Math.sin(a2), y: s.y + 13 * Math.cos(a1) + 12 * Math.cos(a2) };
  };
  const inHands = (ps) => {
    const h = hand(ps);
    return { x: h.x + 2, y: h.y - r + 1 };
  };
  // The cradle between the back of the head and the shoulders.
  const nape = (ps) => fromTorso(ps, -12, -34);
  // Rolling over the head, in torso coordinates.
  const rollPath = (e) => ({
    x: (1 - e) * (1 - e) * -12 + 2 * (1 - e) * e * -15 + e * e * 5,
    y: (1 - e) * (1 - e) * -34 + 2 * (1 - e) * e * -58 + e * e * -58,
  });
  const release = inHands(poses.toss);
  const landing = nape(cqKeys(frames, T.land).pose);
  const rollOff = fromTorso(poses.roll, rollPath(1).x, rollPath(1).y);
  const caughtAt = inHands(poses.catch);

  const texts = {
    toss: opts.pick(["joga a bola para cima", "toss the ball up", "lanza el balón hacia arriba"]),
    bend: opts.pick(["prepara: começa a inclinar", "get ready: start leaning", "prepárate: empieza a inclinarte"]),
    cushion: opts.pick(["suave: as costas descem junto com a bola", "smooth: your back goes down with the ball", "suave: la espalda baja junto con el balón"]),
    hold: opts.pick(["segura", "hold it", "aguanta"]),
    tip: opts.pick(["← entre a nuca e os ombros", "← between neck and shoulders", "← entre la nuca y los hombros"]),
  };

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / cycle);
    const t = seconds - round * cycle;
    const ps = cqKeys(frames, t).pose;
    rig.pose(hipX, 1, ps);

    let text = "";
    if (t < T.release) {
      const p = inHands(ps);
      ball(p.x, p.y, 0);
      text = t >= T.toss ? texts.toss : "";
    } else if (t < T.land) {
      const u = (t - T.release) / (T.land - T.release);
      const p = cqArc(release.x, release.y, landing.x, landing.y, 38, u);
      ball(p.x, p.y, u * 240);
      text = t < T.peak ? texts.bend : texts.cushion;
    } else if (t < T.hold) {
      const p = nape(ps);
      ball(p.x, p.y, 240);
      if (t < T.cushion) text = texts.cushion;
      else text = `${texts.hold}: ${Math.min(3, Math.floor((t - T.cushion) / ((T.hold - T.cushion) / 3)) + 1)}`;
    } else if (t < T.roll) {
      const e = cqEase((t - T.hold) / (T.roll - T.hold));
      const l = rollPath(e);
      const p = fromTorso(ps, l.x, l.y);
      ball(p.x, p.y, 240 + e * 220);
    } else if (t < T.caught) {
      const u = (t - T.roll) / (T.caught - T.roll);
      ball(cqLerp(rollOff.x, caughtAt.x, u), cqLerp(rollOff.y, caughtAt.y, u * u), 460 + u * 120);
    } else {
      const p = inHands(ps);
      ball(p.x, p.y, 580);
    }

    if (say.textContent !== text) say.textContent = text;
    const tipNow = t >= T.cushion && t < T.hold ? texts.tip : "";
    if (tip.textContent !== tipNow) tip.textContent = tipNow;
    count((round % 9) + (t >= T.hold ? 1 : 0), ballEl);
  });
});
