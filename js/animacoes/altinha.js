/* Altinha: dois jogadores tocando a bola pelo alto, um para o outro, sem deixar cair. */

cqRegisterAnim("altinha", (box, opts) => {
  const meX = 112;
  const friendX = 212;
  const hipY = CQ_GROUND - 35;
  const beat = 0.9;
  const base = { ...CQ_POSE.stand, armF: [-30, -30], armB: [30, -30] };
  const touches = [
    { pose: { ...base, legF: [-70, 60] }, dx: 24, y: hipY + 16 },
    { pose: { ...base, legF: [-90, 90] }, dx: 12, y: hipY - 9 },
    { pose: { ...CQ_POSE.header, lean: -10 }, dx: 4, y: hipY - 50 },
  ];
  const kind = (i) => touches[[0, 1, 0, 2][i % 4]];
  const spot = (i) => {
    const k = kind(i);
    return i % 2 === 0 ? { x: meX + k.dx, y: k.y } : { x: friendX - k.dx, y: k.y };
  };

  box.innerHTML = cqSceneSvg(opts.label, `
    ${cqNoteSvg(162, 160, `3 ${opts.steps}`)}
    ${cqPlayerSvg(CQ_KIT_HELPER)}
    ${cqPlayerSvg()}
    <g class="a-ball-pos">${cqBallSvg(6)}</g>
    ${cqCountSvg(opts.unit)}`);

  const svg = box.querySelector("svg");
  const [friendEl, meEl] = svg.querySelectorAll(".a-player");
  const friend = cqPlayerRig(friendEl);
  const me = cqPlayerRig(meEl);
  const ball = cqMovableBall(svg);
  const count = cqCounter(svg, opts.unit);

  return cqLoop((seconds) => {
    const i = Math.floor(seconds / beat);
    const u = seconds / beat - i;
    const near = u < 0.5 ? i : i + 1;
    const k = Math.max(0, 1 - Math.abs(seconds / beat - near) / 0.3);
    const myTurn = near % 2 === 0;
    me.pose(meX, 1, cqMixPose(base, kind(near).pose, myTurn ? k : 0));
    friend.pose(friendX, -1, cqMixPose(base, kind(near).pose, myTurn ? 0 : k));

    const a = spot(i);
    const b = spot(i + 1);
    const p = cqArc(a.x, a.y, b.x, b.y, 50, u);
    ball(p.x, p.y, seconds * 160);
    count(i % 60);
  });
});
