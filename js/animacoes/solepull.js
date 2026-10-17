/* Para, puxa e volta (de lado): conduz 5 passos com o peito do pé, para a bola com a sola, puxa ela para trás
   com a sola, vira e volta fazendo o mesmo. Cada puxada vale 1. */

cqRegisterAnim("solepull", (box, opts) => cqShuttleScene(box, opts, {
  marks: [70, 250],
  start: 110,
  route: [250, "turn", 70, "turn"],
  count: "turn",
  note: "⏱ 1 min",
  texts: {
    run: opts.pick(["conduz 5 passos com o peito do pé", "dribble 5 steps with your laces", "conduce 5 pasos con el empeine"]),
    stop: opts.pick(["para com a sola e joga o corpo para a frente", "stop it with your sole and throw your body forward", "para con la suela y tira el cuerpo adelante"]),
    turn: opts.pick(["puxa para trás com a sola e vira!", "drag it back with your sole and turn!", "¡arrastra hacia atrás con la suela y gira!"]),
  },
}));
