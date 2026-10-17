/* Para e arranca (de lado): corredor de 15 passos com um chinelo a cada 5. Arranca conduzindo com o peito do pé,
   para a bola com a sola em cada chinelo e arranca de novo. No fim, vira e volta. Cada arrancada completa vale 1. */

cqRegisterAnim("stopgo", (box, opts) => cqShuttleScene(box, opts, {
  marks: [40, 120, 200, 280],
  start: 80,
  route: [120, 200, 280, "turn", 200, 120, 40, "turn"],
  count: "stop",
  note: "⏱ 1 min",
  texts: {
    run: opts.pick(["arranca conduzindo com o peito do pé", "burst away, dribbling with your laces", "arranca conduciendo con el empeine"]),
    stop: opts.pick(["para com a sola e joga o corpo para a frente!", "stop it with your sole and throw your body forward!", "¡para con la suela y tira el cuerpo adelante!"]),
    turn: opts.pick(["no fim, vira e volta", "at the end, turn and come back", "al final, gira y vuelve"]),
  },
}));
