/* Boliche com passe (vista de cima): passe rasteiro, com a parte de dentro do pé, em 10 garrafas montadas em
   triângulo como no boliche (1, 2, 3 e 4), a 10 passos. Vale 1 se derrubar pelo menos uma. */

cqRegisterAnim("bowling", (box, opts) => cqTopBowlingScene(box, opts, {
  steps: 10,
  texts: { run: opts.pick(["passe rasteiro, com a parte de dentro do pé", "ground pass, with the inside of your foot", "pase rasante, con el interior del pie"]) },
}));
