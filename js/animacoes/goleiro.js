/* Missões de goleiro. args.mode escolhe a dinâmica:
   catch (encaixe na parede), tennis (bolinha na parede), shuffle (passos laterais),
   dive (queda no colchão), penalty (pênalti), high (bola alta), drop (bola caindo),
   throw (reposição com a mão), punt (bate-pronto), goalkick (tiro de meta). */

const CQ_GK_POSE = {
  ready: { hipY: CQ_GROUND - 31, lean: 10, legF: [-18, 28], legB: [14, 24], armF: [-55, -55], armB: [-45, -55] },
  load: { hipY: CQ_GROUND - 26, lean: 22, legF: [-34, 52], legB: [6, 44], armF: [-50, -50], armB: [-40, -50] },
  chest: { hipY: CQ_GROUND - 33, lean: 2, legF: [-10, 16], legB: [12, 14], armF: [-88, -42], armB: [-82, -42] },
  over: { hipY: CQ_GROUND - 34, lean: -8, legF: [-6, 8], legB: [10, 8], armF: [-172, -8], armB: [-166, -8] },
  release: { hipY: CQ_GROUND - 34, lean: 6, legF: [-10, 10], legB: [12, 10], armF: [-108, -4], armB: [-102, -4] },
  dive: { hipY: CQ_GROUND - 11, lean: 82, legF: [78, 8], legB: [88, 4], armF: [-172, -4], armB: [-164, -4] },
  jump: { hipY: CQ_GROUND - 35, lean: -4, legF: [-85, 95], legB: [8, 12], armF: [-168, -6], armB: [-160, -6] },
  scoop: { hipY: CQ_GROUND - 24, lean: 42, legF: [-62, 72], legB: [30, 40], armF: [-62, -18], armB: [-56, -18] },
  touch: { hipY: CQ_GROUND - 22, lean: 48, legF: [-40, 70], legB: [20, 60], armF: [-20, -10], armB: [10, -20] },
  hold: { hipY: CQ_GROUND - 35, lean: 4, legF: [-4, 4], legB: [4, 4], armF: [-82, -24], armB: [-76, -24] },
  bowlBack: { hipY: CQ_GROUND - 26, lean: 36, legF: [-50, 62], legB: [30, 30], armF: [62, -6], armB: [-40, -30] },
  bowlRel: { hipY: CQ_GROUND - 24, lean: 40, legF: [-56, 66], legB: [36, 36], armF: [-52, -4], armB: [-20, -30] },
  kickBack: { ...CQ_POSE.kickBack, armF: [-60, -20], armB: [50, -20] },
  kickHit: { ...CQ_POSE.kickHit },
};

// Where the hand of a limb ends up, following the same transforms as cqPlayerRig.
function cqHandPos(x, dir, ps, lift = 0, arm = "armF") {
  const rot = (deg, vx, vy) => {
    const r = (deg * Math.PI) / 180;
    return [vx * Math.cos(r) - vy * Math.sin(r), vx * Math.sin(r) + vy * Math.cos(r)];
  };
  const [a, b] = ps[arm];
  const s = rot(ps.lean, 0, -26);
  const u = rot(ps.lean + a, 0, 13);
  const f = rot(ps.lean + a + b, 0, 13);
  return { x: x + dir * (s[0] + u[0] + f[0]), y: ps.hipY - lift + s[1] + u[1] + f[1] };
}

// Ball held in both hands, a little in front of them.
function cqHandsBall(st, dir = 1) {
  const a = cqHandPos(st.x, dir, st.pose, st.lift, "armF");
  const b = cqHandPos(st.x, dir, st.pose, st.lift, "armB");
  return { x: (a.x + b.x) / 2 + 4 * dir, y: (a.y + b.y) / 2 };
}

cqRegisterAnim("goleiro", (box, opts) => {
  const mode = opts.args.mode || "catch";
  const P = CQ_GK_POSE;
  const G = CQ_GROUND;
  const say = (pt, en, es) => opts.pick([pt, en, es]);
  const at = (frames, t) => cqKeys(frames, t);
  const arc = (a, b, h, u) => cqArc(a.x, a.y, b.x, b.y, h, cqClamp01(u));
  const fall = (a, b, u) => ({ x: cqLerp(a.x, b.x, u), y: cqLerp(a.y, b.y, u * u) });

  const scenes = {
    catch: () => tossScene({ small: false, speed: 1, note: say("pegue sem deixar a bola cair", "catch it without dropping it", "atrápalo sin que se caiga") }),
    tennis: () => tossScene({ small: true, speed: 0.7, note: say("bolinha na parede: alterne as mãos", "small ball off the wall: switch hands", "pelotita a la pared: alterna las manos") }),

    shuffle: () => {
      const a = 100;
      const b = 236;
      const cycle = 2.6;
      return {
        cycle,
        scenery: `<g class="a-mark a-m1">${cqConeSvg(a - 16, 14)}</g><g class="a-mark a-m2">${cqConeSvg(b + 16, 14)}</g>`,
        note: say("passos laterais, sem cruzar as pernas", "side steps, legs never cross", "pasos laterales, sin cruzar las piernas"),
        count: (t) => (t >= 1.3 ? 1 : 0) + (t >= 2.55 ? 1 : 0),
        flash: (t) => (t >= 2.55 ? ".a-m1" : ".a-m2"),
        frame(t) {
          const move = (from, to, u) => {
            const k = Math.abs(Math.sin(u * Math.PI * 4));
            const stance = { ...P.ready, legF: [-6 - 18 * k, 14 + 14 * k], legB: [6 + 18 * k, 14 + 14 * k] };
            return { x: cqLerp(from, to, cqEase(u)), pose: stance, lift: 2 * k };
          };
          let gk;
          if (t < 0.3) gk = at([{ t: 0, x: a, pose: P.touch }, { t: 0.3, x: a, pose: P.ready }], t);
          else if (t < 1.1) gk = move(a, b, (t - 0.3) / 0.8);
          else if (t < 1.55) gk = at([{ t: 1.1, x: b, pose: P.ready }, { t: 1.3, x: b, pose: P.touch }, { t: 1.55, x: b, pose: P.ready }], t);
          else if (t < 2.35) gk = move(b, a, (t - 1.55) / 0.8);
          else gk = at([{ t: 2.35, x: a, pose: P.ready }, { t: 2.55, x: a, pose: P.touch }], t);
          return { gk };
        },
      };
    },

    dive: () => diveScene({ gkX: 140, diveX: 192, mattress: true, note: say("caia de lado, sempre no colchão", "land on your side, always on a mattress", "cae de lado, siempre sobre un colchón") }),
    penalty: () => diveScene({ gkX: 70, diveX: 118, goal: true, kicker: true, note: say("bola leve, gol pequeno", "light ball, small goal", "balón liviano, arco pequeño") }),

    high: () => {
      const gkX = 150;
      const hX = 272;
      const cycle = 2.4;
      const hFrames = [
        { t: 0, x: hX, dir: -1, pose: { ...CQ_POSE.stand, armF: [-40, -30] } },
        { t: 0.3, x: hX, dir: -1, pose: { ...CQ_POSE.stand, armF: [-150, -10] } },
        { t: 0.7, x: hX, dir: -1, pose: CQ_POSE.stand },
        { t: cycle, x: hX, dir: -1, pose: CQ_POSE.stand },
      ];
      const gFrames = [
        { t: 0, x: gkX, pose: P.ready },
        { t: 0.8, x: gkX, pose: P.ready },
        { t: 0.98, x: gkX, pose: P.load },
        { t: 1.2, x: gkX + 4, pose: P.jump, lift: 16 },
        { t: 1.5, x: gkX + 4, pose: P.chest },
        { t: cycle, x: gkX + 4, pose: P.chest },
      ];
      const catchAt = cqHandsBall({ x: gkX + 4, pose: P.jump, lift: 16 });
      return {
        cycle,
        helper: true,
        note: say("joelho para cima, pegue no ponto mais alto", "knee up, catch it at the highest point", "rodilla arriba, atrápalo en el punto más alto"),
        count: (t) => (t >= 1.2 ? 1 : 0),
        frame(t) {
          const gk = at(gFrames, t);
          const hp = at(hFrames, t);
          let ball;
          if (t < 0.3) ball = cqHandPos(hp.x, -1, hp.pose, 0, "armF");
          else if (t < 1.2) ball = arc(cqHandPos(hX, -1, hFrames[1].pose, 0, "armF"), catchAt, 12, (t - 0.3) / 0.9);
          else ball = cqHandsBall(gk);
          return { gk, hp, ball };
        },
      };
    },

    drop: () => {
      const gkX = 128;
      const hX = 252;
      const cycle = 2.4;
      const hPose = { ...CQ_POSE.stand, armF: [-90, 0] };
      const hand = cqHandPos(hX, -1, hPose, 0, "armF");
      const ground = { x: hand.x, y: G - 6 };
      const top = { x: hand.x, y: G - 22 };
      const reach = cqHandsBall({ x: 0, pose: P.scoop, lift: 0 }).x;
      const catchX = top.x - reach;
      const gFrames = [
        { t: 0, x: gkX, pose: P.ready },
        { t: 0.65, x: gkX, pose: P.ready },
        { t: 1.12, x: catchX, pose: P.scoop },
        { t: 1.25, x: catchX, pose: P.scoop },
        { t: 1.6, x: catchX, pose: P.chest },
        { t: cycle, x: catchX, pose: P.chest },
      ];
      return {
        cycle,
        helper: true,
        note: say("pegue antes do segundo quique", "catch it before the second bounce", "atrápalo antes del segundo bote"),
        count: (t) => (t >= 1.12 ? 1 : 0),
        frame(t) {
          const gk = at(gFrames, t);
          const hp = { x: hX, dir: -1, pose: hPose, lift: 0 };
          let ball;
          if (t < 0.6) ball = hand;
          else if (t < 0.9) ball = fall(hand, ground, (t - 0.6) / 0.3);
          else if (t < 1.12) {
            const u = (t - 0.9) / 0.22;
            ball = { x: top.x, y: cqLerp(ground.y, top.y, 1 - (1 - u) * (1 - u)) };
          } else ball = cqHandsBall(gk);
          return { gk, hp, ball };
        },
      };
    },

    throw: () => {
      const gkX = 70;
      const coneX = 270;
      const cycle = 2.4;
      const frames = [
        { t: 0, x: gkX, pose: P.hold },
        { t: 0.4, x: gkX, pose: P.hold },
        { t: 0.65, x: gkX, pose: P.bowlBack },
        { t: 0.85, x: gkX + 6, pose: P.bowlRel },
        { t: 1.3, x: gkX + 6, pose: P.bowlRel },
        { t: 1.8, x: gkX + 6, pose: P.ready },
        { t: cycle, x: gkX + 6, pose: P.ready },
      ];
      const rel = cqHandPos(gkX + 6, 1, P.bowlRel, 0, "armF");
      return {
        cycle,
        scenery: `<g class="a-mark">${cqConeSvg(coneX, 20)}</g>`,
        note: say("role a bola rasteira até o alvo", "roll the ball along the ground to the target", "rueda el balón por el suelo al blanco"),
        count: (t) => (t >= 1.7 ? 1 : 0),
        flash: () => ".a-mark",
        frame(t) {
          const gk = at(frames, t);
          let ball;
          if (t < 0.85) ball = t < 0.4 ? cqHandsBall(gk) : cqHandPos(gk.x, 1, gk.pose, 0, "armF");
          else {
            const u = cqClamp01((t - 0.85) / 0.85);
            ball = { x: cqLerp(rel.x, coneX - 10, 1 - (1 - u) * (1 - u)), y: cqLerp(rel.y, G - 6, Math.min(1, u * 5)) };
          }
          return { gk, ball };
        },
      };
    },

    punt: () => {
      const gkX = 70;
      const cycle = 2.8;
      const frames = [
        { t: 0, x: gkX, pose: P.hold },
        { t: 0.45, x: gkX, pose: P.hold },
        { t: 0.62, x: gkX + 2, pose: P.kickBack },
        { t: 0.78, x: gkX + 4, pose: P.kickHit },
        { t: 1.1, x: gkX + 4, pose: P.kickHit },
        { t: 1.6, x: gkX + 4, pose: CQ_POSE.stand },
        { t: cycle, x: gkX + 4, pose: CQ_POSE.stand },
      ];
      const held = cqHandsBall({ x: gkX, pose: P.hold, lift: 0 });
      const foot = { x: gkX + 26, y: G - 16 };
      const land = { x: 282, y: G - 6 };
      return {
        cycle,
        scenery: zoneSvg(),
        note: say("solte a bola e chute antes de ela tocar o chão", "drop the ball and kick it before it lands", "suelta el balón y patéalo antes de que toque el suelo"),
        count: (t) => (t >= 1.95 ? 1 : 0),
        flash: () => ".a-zone",
        frame(t) {
          const gk = at(frames, t);
          let ball;
          if (t < 0.5) ball = cqHandsBall(gk);
          else if (t < 0.78) ball = fall(held, foot, (t - 0.5) / 0.28);
          else ball = arc(foot, land, 82, (t - 0.78) / 1.17);
          return { gk, ball };
        },
      };
    },

    goalkick: () => {
      const cycle = 2.8;
      const ballX = 92;
      const frames = [
        { t: 0, x: 30, pose: CQ_POSE.stand },
        { t: 0.7, x: ballX - 26, pose: CQ_POSE.ready },
        { t: 0.88, x: ballX - 24, pose: P.kickBack },
        { t: 1.0, x: ballX - 22, pose: P.kickHit },
        { t: 1.35, x: ballX - 20, pose: P.kickHit },
        { t: 1.8, x: ballX - 20, pose: CQ_POSE.stand },
        { t: cycle, x: ballX - 20, pose: CQ_POSE.stand },
      ];
      const start = { x: ballX, y: G - 6 };
      const land = { x: 282, y: G - 6 };
      return {
        cycle,
        scenery: zoneSvg(),
        note: say("tiro de meta: bola parada, longe e na zona", "goal kick: dead ball, long, into the zone", "saque de puerta: balón parado, lejos y en la zona"),
        count: (t) => (t >= 2.15 ? 1 : 0),
        flash: () => ".a-zone",
        frame(t) {
          const gk = at(frames, t);
          if (t < 0.7) {
            const s = t * 14;
            gk.pose = cqMixPose(cqRunPose(s), CQ_POSE.ready, cqClamp01((t - 0.55) / 0.15));
          }
          const ball = t < 1.0 ? start : arc(start, land, 76, (t - 1.0) / 1.15);
          return { gk, ball };
        },
      };
    },
  };

  function zoneSvg() {
    return `
      <g class="a-zone a-hit">
        <rect x="252" y="${G - 3}" width="60" height="6" rx="2" fill="rgba(250,204,21,0.45)" />
        ${cqConeSvg(252, 12)}${cqConeSvg(312, 12)}
      </g>`;
  }

  function tossScene({ small, speed, note }) {
    const gkX = 182;
    const wallX = 262;
    const s = speed;
    const frames = [
      { t: 0, x: gkX, pose: P.chest },
      { t: 0.25 * s, x: gkX, pose: P.over },
      { t: 0.4 * s, x: gkX, pose: P.release },
      { t: 0.75 * s, x: gkX, pose: P.ready },
      { t: 1.15 * s, x: gkX, pose: P.ready },
      { t: 1.35 * s, x: gkX, pose: P.chest },
      { t: 1.7 * s, x: gkX, pose: P.chest },
    ];
    const rel = cqHandsBall({ x: gkX, pose: P.release, lift: 0 });
    const got = cqHandsBall({ x: gkX, pose: P.chest, lift: 0 });
    const wall = { x: wallX - (small ? 3 : 6), y: G - 66 };
    return {
      cycle: 1.7 * s,
      small,
      scenery: `<g class="a-hit">${cqWallSvg(wallX)}</g>`,
      note,
      count: (t) => (t >= 1.35 * s ? 1 : 0),
      flash: () => ".a-hit",
      frame(t) {
        const gk = at(frames, t);
        let ball;
        if (t < 0.4 * s || t >= 1.35 * s) ball = cqHandsBall(gk);
        else if (t < 0.75 * s) ball = arc(rel, wall, 6, (t - 0.4 * s) / (0.35 * s));
        else ball = arc(wall, got, 10, (t - 0.75 * s) / (0.6 * s));
        return { gk, ball };
      },
    };
  }

  function diveScene({ gkX, diveX, mattress, goal, kicker, note }) {
    const cycle = 2.6;
    const frames = [
      { t: 0, x: gkX, pose: P.ready },
      { t: 0.5, x: gkX, pose: P.ready },
      { t: 0.66, x: gkX + 2, pose: P.load },
      { t: 0.78, x: (gkX + diveX) / 2, pose: cqMixPose(P.load, P.dive, 0.6), lift: 12 },
      { t: 0.92, x: diveX, pose: P.dive },
      { t: cycle, x: diveX, pose: P.dive },
    ];
    const got = cqHandsBall({ x: diveX, pose: P.dive, lift: 0 });
    const kX = 292;
    const kFrames = [
      { t: 0, x: kX, dir: -1, pose: CQ_POSE.ready },
      { t: 0.12, x: kX, dir: -1, pose: CQ_POSE.kickBack },
      { t: 0.24, x: kX - 2, dir: -1, pose: CQ_POSE.kickHit },
      { t: 0.6, x: kX - 2, dir: -1, pose: CQ_POSE.stand },
      { t: cycle, x: kX - 2, dir: -1, pose: CQ_POSE.stand },
    ];
    const kick = { x: kX - 24, y: G - 6 };
    const roll = { x: 330, y: G - 6 };
    const goalSvg = goal ? `<g transform="translate(${gkX - 4 + 30},0) scale(-1,1)">${cqGoalSvg(30, 34, 50)}</g>` : "";
    const mat = mattress ? `<rect x="${gkX + 20}" y="${G - 5}" width="${300 - gkX}" height="5" rx="2" fill="#3b82f6" />` : "";
    return {
      cycle,
      helper: kicker,
      scenery: goalSvg + mat,
      note,
      count: (t) => (t >= 0.92 ? 1 : 0),
      frame(t) {
        const gk = at(frames, t);
        let ball;
        if (t >= 0.92) ball = cqHandsBall(gk);
        else if (kicker) ball = t < 0.24 ? kick : arc(kick, got, 4, (t - 0.24) / 0.68);
        else ball = arc(roll, got, 0, (t - 0.2) / 0.72);
        return { gk, hp: kicker ? at(kFrames, t) : null, ball };
      },
    };
  }

  const sc = scenes[mode]();
  box.innerHTML = cqSceneSvg(opts.label, `
    ${sc.scenery || ""}
    ${cqNoteSvg(160, 160, sc.note)}
    ${sc.helper ? `<g class="a-help">${cqPlayerSvg(CQ_KIT_HELPER)}</g>` : ""}
    <g class="a-me">${cqPlayerSvg(CQ_KIT_GK)}</g>
    <g class="a-ball-pos">${sc.small ? `<circle r="3.5" fill="#d9f99d" stroke="#365314" stroke-width="0.8" />` : cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const rig = cqPlayerRig(svg.querySelector(".a-me"));
  const helpRig = sc.helper ? cqPlayerRig(svg.querySelector(".a-help")) : null;
  const ballEl = svg.querySelector(".a-ball-pos");
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const round = Math.floor(seconds / sc.cycle);
    const t = seconds - round * sc.cycle;
    const f = sc.frame(t);
    rig.pose(f.gk.x, 1, f.gk.pose, f.gk.lift || 0);
    if (helpRig && f.hp) helpRig.pose(f.hp.x, f.hp.dir ?? -1, f.hp.pose, f.hp.lift || 0);
    if (f.ball) ballEl.setAttribute("transform", `translate(${f.ball.x.toFixed(1)},${f.ball.y.toFixed(1)}) rotate(${(f.ball.x * 9).toFixed(0)})`);
    const per = sc.count(sc.cycle);
    const flashSel = sc.flash ? sc.flash(t) : null;
    count((round * per + sc.count(t)) % 99, flashSel ? svg.querySelector(flashSel) : null);
  });
});
