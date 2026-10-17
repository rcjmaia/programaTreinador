/* Boliche de trivela (vista de cima): chute com a parte de fora do pé, a bola faz a curva e entra nas 10 garrafas
   montadas em triângulo como no boliche, a 10 passos. Vale 1 se derrubar pelo menos uma. Na hora do chute, a câmera
   dá um zoom em câmera lenta no pé virado para dentro. No canto, o jeito do corpo visto de trás: joelho dobrado em
   uns 120°, pé virado para dentro, corpo inclinado e braços abertos. */

cqRegisterAnim("bowlingtrivela", (box, opts) => {
  const stop = cqTopBowlingScene(box, opts, {
    steps: 10,
    bend: 22,
    playerY: 77,
    kickT: 0.7,
    kick: cqTrivelaFoot,
    zoom: opts.pick(["pé virado para dentro|bate com a parte de fora", "foot turned in|strike with the outside", "pie hacia dentro|golpea con el exterior"]),
    texts: { run: opts.pick(["trivela: perna dobrada, pé virado para dentro, corpo inclinado", "trivela: leg bent, foot turned in, body leaning", "trivela: pierna doblada, pie hacia dentro, cuerpo inclinado"]) },
  });
  cqTrivelaTip(box.querySelector("svg"), 252, 4);
  return stop;
});
