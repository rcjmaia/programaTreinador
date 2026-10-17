/* Boliche de letra (vista de cima): o pé de apoio fica ao lado da bola e o pé direito cruza por trás dele para
   chutar, nas 10 garrafas montadas em triângulo como no boliche, a 7 passos. Vale 1 se derrubar pelo menos uma.
   Na hora do chute, a câmera dá um zoom em câmera lenta no pé cruzando por trás. */

cqRegisterAnim("bowlingrabona", (box, opts) => cqTopBowlingScene(box, opts, {
  steps: 7,
  playerY: 95,
  kickT: 1.0,
  zoom: opts.pick(["o pé cruza por trás|da perna de apoio", "the foot wraps behind|the standing leg", "el pie cruza por detrás|de la pierna de apoyo"]),
  kick(player, u) {
    const path = [[-2, 4], [-12, 3], [-10, -9], [6, -10]];
    const i = Math.min(path.length - 2, Math.floor(u * (path.length - 1)));
    const k = cqEase(u * (path.length - 1) - i);
    const foot = player.querySelector(".a-foot-r");
    player.querySelector(".a-foot-l").setAttribute("cx", 7);
    player.querySelector(".a-foot-l").setAttribute("cy", -5);
    foot.setAttribute("cx", cqLerp(path[i][0], path[i + 1][0], k));
    foot.setAttribute("cy", cqLerp(path[i][1], path[i + 1][1], k));
  },
  texts: { run: opts.pick(["letra: o pé cruza por trás da perna de apoio", "rabona: your foot wraps behind the standing leg", "rabona: el pie cruza por detrás de la pierna de apoyo"]) },
}));
