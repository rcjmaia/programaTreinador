/* ============================================================
   Craque de Bola — segunda leva de missões.
   Mesmo formato de js/missoes-data.js (carregado antes deste).
   Famílias que só mudam a distância usam as funções abaixo.
   ============================================================ */

const CQ_UNIT_STEPS_AWAY = ["passos de distância", "steps away", "pasos de distancia"];
const CQ_UNIT_SECONDS = ["segundos", "seconds", "segundos"];
const CQ_UNIT_REPS = ["repetições", "reps", "repeticiones"];
// Ways to make a control-from-the-air drill harder as the kid improves.
const CQ_STEPS_TRAP_HARDER = ["Ficou fácil? Jogue a bola cada vez mais alto, ou jogue na parede para ela voltar pelo alto. Se tiver alguém, peça para jogar de frente e vá aumentando a distância.", "Too easy? Toss the ball higher each time, or throw it against a wall so it comes back high. If someone's around, have them toss it from in front of you and keep moving further back.", "¿Muy fácil? Lanza el balón cada vez más alto, o contra una pared para que vuelva por arriba. Si hay alguien, pide que te lo lance de frente y vayan aumentando la distancia."];

const CQ_STEPS_TARGET = ["Alvo: balde, arco, caixa, camisa ou qualquer objeto.", "Target: a bucket, hoop, box, shirt or any object.", "Blanco: un balde, aro, caja, camiseta o cualquier objeto."];
const CQ_STEPS_LIGHT_BALL = ["Use só bola leve: de plástico ou bexiga.", "Only use a light ball: plastic or a balloon.", "Usa solo balón liviano: de plástico o un globo."];
const CQ_STEPS_PINS = ["Monte 10 garrafas PET (ou cones) em triângulo, como no boliche: 1 na frente, depois uma fila de 2, uma de 3 e uma de 4, com um palmo entre elas. Coloque um pouco de água no fundo para elas aguentarem o chute.", "Set up 10 plastic bottles (or cones) in a triangle, like bowling pins: 1 at the front, then a row of 2, a row of 3 and a row of 4, a hand's width apart. Put a little water in the bottom so they can take the shot.", "Monta 10 botellas de plástico (o conos) en triángulo, como en los bolos: 1 delante, luego una fila de 2, una de 3 y una de 4, a un palmo entre ellas. Pon un poco de agua en el fondo para que aguanten el tiro."];
const CQ_STEPS_TRIVELA_BODY = ["O jeito do corpo ajuda a curva: dobre a perna de chute, com o joelho formando uns 120°, e vire o pé para dentro, bem esticado, para bater com a parte de fora. Incline o corpo para o lado do pé de apoio e abra os braços para se equilibrar.", "Your body shape helps the bend: bend your kicking leg, with the knee at about 120°, and turn your foot in, toes pointed, to strike with the outside. Lean your body over your standing foot and open your arms for balance.", "La postura del cuerpo ayuda a la curva: dobla la pierna de golpeo, con la rodilla en unos 120°, y gira el pie hacia dentro, bien estirado, para golpear con el exterior. Inclina el cuerpo hacia el lado del pie de apoyo y abre los brazos para equilibrarte."];
const CQ_STEPS_STRIKE = ["Derrubou todas de uma vez? É strike!", "Knocked them all down at once? That's a strike!", "¿Las tiraste todas de una vez? ¡Es strike!"];

// Pass that must stop as close as possible to a target. Lower is better.
function cqMeasureMission(id, dist, tiers, subs) {
  return {
    id, type: "ball", icon: "📏", subs, tiers, lower: true, max: 99,
    anim: "measure", animArgs: { dist },
    title: [`Passe na medida (${dist} passos)`, `Weighted pass (${dist} steps)`, `Pase a la medida (${dist} pasos)`],
    desc: [
      `Faça 6 passes rasteiros de ${dist} passos. Some quantos passos cada bola parou longe do alvo. Quanto menos, melhor!`,
      `Make 6 ground passes from ${dist} steps. Add up how many steps away from the target each ball stopped. The fewer, the better!`,
      `Haz 6 pases rasantes desde ${dist} pasos. Suma a cuántos pasos del blanco paró cada balón. ¡Cuantos menos, mejor!`,
    ],
    steps: [
      [`Coloque um alvo a ${dist} passos: chinelo, garrafa ou cone.`, `Put a target ${dist} steps away: a flip-flop, bottle or cone.`, `Pon un blanco a ${dist} pasos: chancla, botella o cono.`],
      ["Passe com a parte de dentro do pé. O segredo é a força certa.", "Pass with the inside of your foot. The secret is the right weight.", "Pasa con el interior del pie. El secreto es la fuerza justa."],
      ["Faça 3 passes com o pé direito e 3 com o esquerdo.", "Make 3 passes with your right foot and 3 with your left.", "Haz 3 pases con el pie derecho y 3 con el izquierdo."],
      ["Onde a bola parou, conte os passos até o alvo. Parou no alvo? Vale 0.", "Where the ball stopped, count the steps to the target. Stopped on it? That's 0.", "Donde paró el balón, cuenta los pasos hasta el blanco. ¿Paró en el blanco? Vale 0."],
    ],
    unit: CQ_UNIT_STEPS_AWAY,
  };
}

// One-touch passes against a wall, inside of the foot, switching feet.
function cqWallMission(id, dist, tiers) {
  return {
    id, type: "ball", icon: "🔂", subs: ["short", "reactions"], tiers, timer: { mode: "down", s: 60 },
    anim: "weak", animArgs: { dist },
    title: [`Parede de primeira (${dist} passos)`, `One-touch wall passes (${dist} steps)`, `Pared de primera (${dist} pasos)`],
    desc: [
      `Em 1 minuto, quantos passes na parede você faz de primeira, a ${dist} passos dela, sem dominar a bola?`,
      `In 1 minute, how many one-touch wall passes can you make from ${dist} steps, without controlling the ball?`,
      `En 1 minuto, ¿cuántos pases a la pared haces de primera, a ${dist} pasos de ella, sin controlar el balón?`,
    ],
    steps: [
      [`Fique a ${dist} passos da parede.`, `Stand ${dist} steps from a wall.`, `Ponte a ${dist} pasos de la pared.`],
      ["Passe com a parte de dentro do pé (a chapa, o lado do dedão): a bola vai reta e volta reta.", "Pass with the inside of your foot (the big-toe side): the ball goes straight and comes back straight.", "Pasa con el interior del pie (el lado del dedo gordo): el balón va recto y vuelve recto."],
      ["A bola voltou? Devolva na hora, sem parar a bola.", "Ball's back? Pass it straight back, without stopping it.", "¿Volvió el balón? Devuélvelo al momento, sin pararlo."],
      CQ_STEPS_ALTERNATE,
      ["Parou a bola ou ela escapou? Continue a contagem de onde estava.", "Stopped the ball or lost it? Carry on counting from where you were.", "¿Paraste el balón o se escapó? Sigue contando desde donde ibas."],
    ],
    unit: ["passes", "passes", "pases"],
  };
}

// Wall passes in 2 touches: control with one foot, pass with the other.
function cqTwoFeetMission(id, dist, tiers) {
  return {
    id, type: "ball", icon: "👣", subs: ["control", "short"], tiers, timer: { mode: "down", s: 60 },
    anim: "twofeet", animArgs: { dist },
    title: [`Domina com um, passa com o outro (${dist} passos)`, `Control with one, pass with the other (${dist} steps)`, `Controla con uno, pasa con el otro (${dist} pasos)`],
    desc: [
      `Em 1 minuto, quantas vezes você domina com a parte de dentro de um pé e passa na parede com o outro, a ${dist} passos dela?`,
      `In 1 minute, how many times can you control with the inside of one foot and pass against the wall with the other, from ${dist} steps?`,
      `En 1 minuto, ¿cuántas veces controlas con el interior de un pie y pasas a la pared con el otro, a ${dist} pasos de ella?`,
    ],
    steps: [
      [`Fique a ${dist} passos da parede.`, `Stand ${dist} steps from a wall.`, `Ponte a ${dist} pasos de la pared.`],
      ["A bola voltou? Domine com a parte de dentro de um pé, deixando a bola na frente do outro pé.", "Ball's back? Control it with the inside of one foot, leaving it in front of your other foot.", "¿Volvió el balón? Contrólalo con el interior de un pie, dejándolo delante del otro pie."],
      ["Passe com a parte de dentro do outro pé. Só 2 toques: um para dominar, um para passar.", "Pass with the inside of your other foot. Just 2 touches: one to control, one to pass.", "Pasa con el interior del otro pie. Solo 2 toques: uno para controlar, uno para pasar."],
      ["Na volta, troque: dominou com o direito e passou com o esquerdo? Agora domina com o esquerdo e passa com o direito.", "Next time, switch: controlled with the right and passed with the left? Now control with the left and pass with the right.", "A la vuelta, cambia: ¿controlaste con el derecho y pasaste con el izquierdo? Ahora controla con el izquierdo y pasa con el derecho."],
      ["Dominou e passou com o mesmo pé, ou deu mais de 2 toques? O passe não conta.", "Controlled and passed with the same foot, or took more than 2 touches? That pass doesn't count.", "¿Controlaste y pasaste con el mismo pie, o diste más de 2 toques? Ese pase no cuenta."],
    ],
    unit: ["passes", "passes", "pases"],
  };
}

// No first touch: as the ball arrives, drag it sideways with the sole (1 or 2 times), then pass with the other foot.
function cqSoleMission(id, pulls, tiers) {
  const times = pulls === 1 ? ["1 vez", "once", "1 vez"] : ["2 vezes", "twice", "2 veces"];
  const wrong = pulls === 1
    ? ["Dominou antes, puxou mais de 1 vez ou passou com o mesmo pé? O passe não conta.", "Controlled it first, dragged it more than once or passed with the same foot? That pass doesn't count.", "¿Controlaste antes, lo arrastraste más de 1 vez o pasaste con el mismo pie? Ese pase no cuenta."]
    : ["Dominou antes, puxou menos de 2 vezes ou passou com o mesmo pé? O passe não conta.", "Controlled it first, dragged it fewer than 2 times or passed with the same foot? That pass doesn't count.", "¿Controlaste antes, lo arrastraste menos de 2 veces o pasaste con el mismo pie? Ese pase no cuenta."];
  return {
    id, type: "ball", icon: "🦶", subs: ["control", "short"], tiers, timer: { mode: "down", s: 60 },
    anim: "solepass", animArgs: { pulls },
    title: [`Puxa com a sola e passa (${times[0]})`, `Sole drag and pass (${times[1]})`, `Arrastra con la suela y pasa (${times[2]})`],
    desc: [
      `Em 1 minuto, quantas vezes você puxa a bola para o lado com a sola do pé assim que ela chega (sem dominar), ${times[0]}, e passa na parede com o outro pé, a 5 passos dela?`,
      `In 1 minute, how many times can you drag the ball sideways with your sole as soon as it arrives (no first touch), ${times[1]}, and pass against the wall with your other foot, from 5 steps?`,
      `En 1 minuto, ¿cuántas veces arrastras el balón hacia el lado con la suela en cuanto llega (sin controlar), ${times[2]}, y pasas a la pared con el otro pie, a 5 pasos de ella?`,
    ],
    steps: [
      ["Fique a 5 passos da parede.", "Stand 5 steps from a wall.", "Ponte a 5 pasos de la pared."],
      [
        `Não domine: quando a bola chegar, já pise nela com a sola do pé e puxe para o lado, ${times[0]}, até ela ficar na frente do outro pé.`,
        `Don't control it: as the ball arrives, step on it with your sole and drag it sideways, ${times[1]}, until it's in front of your other foot.`,
        `No la controles: cuando llegue el balón, písalo con la suela y arrástralo hacia el lado, ${times[2]}, hasta que quede delante del otro pie.`,
      ],
      ...(pulls > 1 ? [["O corpo vai junto com a bola: a cada puxada, dê um passinho para o lado.", "Your body goes with the ball: with each drag, take a little side-step.", "El cuerpo va con el balón: en cada arrastre, da un pasito hacia el lado."]] : []),
      ["Passe com a parte de dentro do outro pé.", "Pass with the inside of your other foot.", "Pasa con el interior del otro pie."],
      ["Na volta, faça o mesmo para o outro lado: puxou com o direito? Agora puxa com o esquerdo e passa com o direito.", "Next time, do the same the other way: dragged it with the right? Now drag with the left and pass with the right.", "A la vuelta, haz lo mismo hacia el otro lado: ¿arrastraste con el derecho? Ahora arrastra con el izquierdo y pasa con el derecho."],
      wrong,
    ],
    unit: ["passes", "passes", "pases"],
  };
}

// Bouncing ball passed straight into a bucket/hoop.
function cqBucketMission(id, dist, tiers, subs) {
  return {
    id, type: "ball", icon: "🧺", subs, tiers, timer: { mode: "down", s: 60 },
    anim: "bucket", animArgs: { dist },
    title: [`Bola pingando no alvo (${dist} passos)`, `Bouncing ball on target (${dist} steps)`, `Balón botando al blanco (${dist} pasos)`],
    desc: [
      `Em 1 minuto, quantas vezes você deixa a bola quicar e passa direto para dentro do alvo a ${dist} passos?`,
      `In 1 minute, how many times can you let the ball bounce and pass it straight into the target ${dist} steps away?`,
      `En 1 minuto, ¿cuántas veces dejas botar el balón y lo pasas directo al blanco a ${dist} pasos?`,
    ],
    steps: [
      CQ_STEPS_TARGET,
      ["Solte a bola, deixe quicar uma vez e toque antes do segundo quique.", "Drop the ball, let it bounce once and hit it before the second bounce.", "Suelta el balón, déjalo botar una vez y tócalo antes del segundo bote."],
      CQ_STEPS_ALTERNATE,
      ["Caiu dentro ou bateu no alvo? Vale 1.", "Landed in or hit the target? That's 1.", "¿Cayó dentro o dio en el blanco? Cuenta 1."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// Keep-ups while walking to a target, then a pass without letting the ball drop.
function cqWalkMission(id, dist, mode, tiers, subs) {
  const how = {
    foot: ["fazendo embaixadinhas", "doing keep-ups", "haciendo toques"],
    alt: ["fazendo embaixadinhas alternando os pés", "doing keep-ups with alternate feet", "haciendo toques alternando los pies"],
    head: ["fazendo embaixadinhas de cabeça", "doing headers keep-ups", "haciendo toques de cabeza"],
  }[mode];
  const title = {
    foot: [`Embaixadinha até o alvo (${dist} passos)`, `Keep-ups to the target (${dist} steps)`, `Toques hasta el blanco (${dist} pasos)`],
    alt: [`Dois pés até o alvo (${dist} passos)`, `Both feet to the target (${dist} steps)`, `Dos pies hasta el blanco (${dist} pasos)`],
    head: [`Cabeça até o alvo (${dist} passos)`, `Head it to the target (${dist} steps)`, `De cabeza hasta el blanco (${dist} pasos)`],
  }[mode];
  return {
    id, type: "ball", icon: mode === "head" ? "🤹" : "🚶", subs, tiers, timer: { mode: "down", s: 120 },
    anim: "keepywalk", animArgs: { dist, mode },
    title,
    desc: [
      `Em 2 minutos, quantas vezes você consegue ir até perto do alvo (${dist} passos) ${how[0]} e acertar com um passe, sem deixar a bola cair?`,
      `In 2 minutes, how many times can you walk ${dist} steps ${how[1]} and hit the target with a pass, without letting the ball drop?`,
      `En 2 minutos, ¿cuántas veces caminas ${dist} pasos ${how[2]} y aciertas el blanco con un pase, sin que caiga el balón?`,
    ],
    steps: [
      ...(mode === "head" ? [CQ_STEPS_LIGHT_BALL] : []),
      CQ_STEPS_TARGET,
      [`Comece a ${dist} passos do alvo e vá andando sem deixar a bola cair.`, `Start ${dist} steps from the target and walk without letting the ball drop.`, `Empieza a ${dist} pasos del blanco y camina sin que caiga el balón.`],
      ...(mode === "foot" ? [["Pode usar o pé que quiser.", "Use whichever foot you like.", "Usa el pie que quieras."]] : []),
      ...(mode === "alt" ? [
        ["Um toque com cada pé, sempre trocando: direito, esquerdo, direito...", "One touch with each foot, always switching: right, left, right...", "Un toque con cada pie, siempre cambiando: derecho, izquierdo, derecho..."],
        ["Tocou duas vezes seguidas com o mesmo pé? Volte ao início.", "Two touches in a row with the same foot? Back to the start.", "¿Dos toques seguidos con el mismo pie? Vuelve al inicio."],
      ] : []),
      ["Perto do alvo, passe com a bola no ar. Caiu antes? Volte ao início.", "Near the target, pass with the ball in the air. Dropped it? Back to the start.", "Cerca del blanco, pasa con el balón en el aire. ¿Se cayó? Vuelve al inicio."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// Back to the target: toss the ball over your head, turn and strike it before it lands.
// kind "pass" = inside of the foot into a target, "shot" = laces into a goal.
function cqTurnMission(id, dist, kind, tiers, subs) {
  const pass = kind === "pass";
  const aim = pass ? ["o alvo", "the target", "el blanco"] : ["o gol", "the goal", "el arco"];
  return {
    id, type: "ball", icon: pass ? "🔃" : "💥", subs, tiers, max: 10,
    anim: "turnvolley", animArgs: { dist, kind },
    title: pass
      ? [`Vira e passa no ar (${dist} passos)`, `Turn and pass in the air (${dist} steps)`, `Gira y pasa en el aire (${dist} pasos)`]
      : [`Vira e chuta no ar (${dist} passos)`, `Turn and shoot in the air (${dist} steps)`, `Gira y remata en el aire (${dist} pasos)`],
    desc: [
      `Em 10 tentativas, quantas vezes você joga a bola por cima da cabeça, vira e acerta ${aim[0]} com a bola ainda no ar, a ${dist} passos?`,
      `Out of 10 tries, how many times can you toss the ball over your head, turn and hit ${aim[1]} before the ball lands, from ${dist} steps?`,
      `De 10 intentos, ¿cuántas veces lanzas el balón por encima de la cabeza, giras y aciertas ${aim[2]} con el balón todavía en el aire, a ${dist} pasos?`,
    ],
    steps: [
      pass
        ? ["Marque um alvo na parede, na altura da sua cintura: um círculo de giz, fita ou uma camisa pendurada. Sem parede? Use algo no chão: balde, caixa ou camisa.", "Mark a target on a wall at waist height: a chalk circle, tape or a hanging shirt. No wall? Use something on the ground: a bucket, box or shirt.", "Marca un blanco en la pared a la altura de tu cintura: un círculo de tiza, cinta o una camiseta colgada. ¿Sin pared? Usa algo en el suelo: un balde, caja o camiseta."]
        : ["Use um gol, ou marque um de 3 passos de largura com dois chinelos ou num muro. Sem gol nem muro? Mire em algo no chão: balde, caixa ou camisa.", "Use a goal, or mark one 3 steps wide with two flip-flops or on a wall. No goal or wall? Aim at something on the ground: a bucket, box or shirt.", "Usa un arco, o marca uno de 3 pasos de ancho con dos chanclas o en un muro. ¿Sin arco ni muro? Apunta a algo en el suelo: un balde, caja o camiseta."],
      [`Fique de costas para ${aim[0]}, a ${dist} passos.`, `Stand with your back to ${aim[1]}, ${dist} steps away.`, `Ponte de espaldas a ${aim[2]}, a ${dist} pasos.`],
      ["Jogue a bola para cima, por cima da cabeça, para ela cair um pouco atrás de você.", "Toss the ball up over your head so it lands a little behind you.", "Lanza el balón hacia arriba, por encima de la cabeza, para que caiga un poco detrás de ti."],
      ["Vire rápido de frente para a bola e acerte antes de ela tocar o chão.", "Turn quickly to face the ball and strike it before it touches the ground.", "Gira rápido hacia el balón y golpéalo antes de que toque el suelo."],
      pass
        ? ["Passe com a parte de dentro do pé, com a bola no alto, até o alvo.", "Pass with the inside of your foot, keeping the ball up, onto the target.", "Pasa con el interior del pie, con el balón por arriba, hasta el blanco."]
        : ["Chute com o peito do pé (o cadarço), firme no gol.", "Shoot with your laces, firmly at goal.", "Remata con el empeine (los cordones), firme al arco."],
      CQ_STEPS_5_5,
      ["A bola quicou antes do toque? Não vale.", "Ball bounced before you hit it? Doesn't count.", "¿El balón botó antes del golpe? No cuenta."],
      ["Se tiver alguém, a pessoa pode jogar a bola por cima de você, de trás.", "If someone's around, they can toss the ball over you from behind.", "Si hay alguien, puede lanzarte el balón por encima, desde atrás."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

function cqStepoversMission(id, n, tiers, subs) {
  return {
    id, type: "ball", icon: "🌪️", subs, tiers, max: 10,
    anim: "stepovers", animArgs: { n },
    title: [`${n} pedaladas e chute`, `${n} step-overs and shoot`, `${n} bicicletas y tiro`],
    desc: [
      `Em 10 tentativas, quantas vezes você faz ${n} pedaladas seguidas, intercalando as pernas, passa pelo adversário e acerta o gol, 7 passos depois dele?`,
      `Out of 10 tries, how many times do you do ${n} step-overs in a row, switching legs, get past the defender and hit the goal 7 steps behind them?`,
      `De 10 intentos, ¿cuántas veces haces ${n} bicicletas seguidas, alternando las piernas, pasas al rival y aciertas el arco, 7 pasos detrás de él?`,
    ],
    steps: [
      ["Coloque um cone ou uma cadeira no caminho: é o adversário. O gol ou o alvo fica 7 passos depois dele. Sem gol nem muro? Mire em algo no chão: balde, caixa ou camisa.", "Put a cone or a chair in your path: that's the defender. The goal or target is 7 steps behind it. No goal or wall? Aim at something on the ground: a bucket, box or shirt.", "Pon un cono o una silla en el camino: es el rival. El arco o el blanco queda 7 pasos detrás. ¿Sin arco ni muro? Apunta a algo en el suelo: un balde, caja o camiseta."],
      ["Conduza até perto do adversário e faça a primeira pedalada: passe a perna por cima da bola, sem tocar nela, levando o corpo junto, como se fosse sair para aquele lado.", "Dribble up close to the defender and do the first step-over: swing your leg over the ball without touching it, moving your body too, as if you were going that way.", "Conduce hasta cerca del rival y haz la primera bicicleta: pasa la pierna por encima del balón sin tocarlo, llevando el cuerpo, como si fueras a salir hacia ese lado."],
      [`Logo em seguida, pedalada com a outra perna, para o outro lado. Continue intercalando as pernas até completar ${n} pedaladas, deixando o adversário perdido.`, `Straight after, a step-over with the other leg, the other way. Keep switching legs until you've done ${n}, leaving the defender lost.`, `Enseguida, bicicleta con la otra pierna, hacia el otro lado. Sigue alternando las piernas hasta hacer ${n}, dejando al rival perdido.`],
      ["Depois da última, puxe a bola com a outra perna para o lado contrário, passe pelo adversário e chute com o peito do pé (o cadarço), sem parar a bola.", "After the last one, take the ball the opposite way with your other leg, get past the defender and shoot with your laces, without stopping the ball.", "Después de la última, saca el balón hacia el lado contrario con la otra pierna, pasa al rival y remata con el empeine (los cordones), sin parar el balón."],
      ["Faça 5 começando pela perna direita e 5 começando pela esquerda.", "Do 5 starting with your right leg and 5 starting with your left.", "Haz 5 empezando con la pierna derecha y 5 empezando con la izquierda."],
      [`Só conta se fizer as ${n} pedaladas sem perder a bola e acertar o gol.`, `It only counts if you do all ${n} step-overs without losing the ball and hit the goal.`, `Solo cuenta si haces las ${n} bicicletas sin perder el balón y aciertas el arco.`],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// Volley from the hands: the further away, the smaller the goal looks.
function cqVolleyMission(id, dist, tiers, subs) {
  return {
    id, type: "ball", icon: "🦵", subs, tiers, max: 10,
    anim: "volley", animArgs: { dist },
    title: [`Bate-pronto (${dist} passos)`, `Volley (${dist} steps)`, `Volea (${dist} pasos)`],
    desc: [
      `Em 10 chutes de bate-pronto de ${dist} passos, quantos acertam o gol?`,
      `Out of 10 volleys from ${dist} steps, how many are on target?`,
      `De 10 voleas desde ${dist} pasos, ¿cuántas van al arco?`,
    ],
    steps: [
      [`Marque um gol de 3 passos de largura com dois chinelos, ou use um muro. Fique a ${dist} passos dele.`, `Mark a goal 3 steps wide with two flip-flops, or use a wall. Stand ${dist} steps from it.`, `Marca un arco de 3 pasos de ancho con dos chanclas, o usa un muro. Ponte a ${dist} pasos.`],
      ["Solte a bola das mãos e chute antes de ela tocar o chão.", "Drop the ball from your hands and kick it before it touches the ground.", "Suelta el balón de las manos y patéalo antes de que toque el suelo."],
      CQ_STEPS_5_5,
      ["Em cada pé, alterne: um chute com o peito do pé, o próximo com a parte de dentro.", "With each foot, switch: one shot with your laces, the next with the inside of your foot.", "Con cada pie, alterna: un tiro con el empeine, el siguiente con el interior del pie."],
      ["Conte os chutes que acertam o gol.", "Count the shots on target.", "Cuenta los tiros al arco."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// Toss the ball up, control it (inside of the foot or thigh), then shoot: 2 touches at most.
function cqControlShotMission(id, dist, part, tiers) {
  const foot = part === "foot";
  return {
    id, type: "ball", icon: "🎯", subs: ["control", "finishing"], tiers, max: 10,
    anim: "controlshot", animArgs: { dist, part },
    title: foot
      ? [`Domina e finaliza (${dist} passos)`, `Control and finish (${dist} steps)`, `Controla y define (${dist} pasos)`]
      : [`Coxa e finaliza (${dist} passos)`, `Thigh control and finish (${dist} steps)`, `Muslo y define (${dist} pasos)`],
    desc: [
      `Em 10 bolas pelo alto (você joga para cima ou alguém joga para você), quantas você domina com ${foot ? "a parte de dentro do pé" : "a coxa"} e chuta no alvo a ${dist} passos, com no máximo 2 toques?`,
      `Out of 10 high balls (you toss it up or someone throws it to you), how many do you control with ${foot ? "the inside of your foot" : "your thigh"} and hit the target ${dist} steps away in 2 touches or fewer?`,
      `De 10 balones por alto (lo lanzas tú hacia arriba o alguien te lo lanza), ¿cuántos controlas con ${foot ? "el interior del pie" : "el muslo"} y aciertas el blanco a ${dist} pasos en 2 toques o menos?`,
    ],
    steps: [
      [`Coloque um alvo a ${dist} passos: cadeira, balde ou um canto do muro.`, `Put a target ${dist} steps away: a chair, a bucket or a corner of a wall.`, `Pon un blanco a ${dist} pasos: una silla, un balde o una esquina del muro.`],
      ["Jogue a bola para cima com as mãos. Tem alguém para ajudar? Ele pode jogar a bola para você.", "Toss the ball up with your hands. Got someone to help? They can throw the ball to you.", "Lanza el balón hacia arriba con las manos. ¿Tienes quien te ayude? Puede lanzarte el balón."],
      foot
        ? ["1º toque: domine com a parte de dentro do pé. Toque leve, para a bola cair perto do corpo.", "1st touch: control it with the inside of your foot. A soft touch, so the ball drops close to you.", "1er toque: controla con el interior del pie. Toque suave, para que el balón caiga cerca del cuerpo."]
        : ["1º toque: domine com a coxa. Amorteça leve, para a bola cair perto do corpo.", "1st touch: control it with your thigh. Cushion it softly, so the ball drops close to you.", "1er toque: controla con el muslo. Amortigua suave, para que el balón caiga cerca del cuerpo."],
      ["2º toque: chute. Alterne: um chute com o peito do pé, o próximo com a parte de dentro.", "2nd touch: shoot. Switch: one shot with your laces, the next with the inside of your foot.", "2º toque: dispara. Alterna: un tiro con el empeine, el siguiente con el interior del pie."],
      foot ? CQ_STEPS_5_5 : ["Faça 5 com a coxa e o pé direitos, e 5 com os esquerdos.", "Do 5 with your right thigh and foot, and 5 with your left.", "Haz 5 con el muslo y el pie derechos, y 5 con los izquierdos."],
      ["Só conta se acertar o alvo com no máximo 2 toques.", "It only counts if you hit the target in 2 touches or fewer.", "Solo cuenta si aciertas el blanco en 2 toques o menos."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// Curled shot from 10+ steps at a target in the corner: "in" = inside of the foot, "out" = trivela.
function cqCurlMission(id, side, tiers, subs) {
  const out = side === "out";
  return {
    id, type: "ball", icon: out ? "🪃" : "🍌", subs, tiers, max: 10,
    anim: "curva", animArgs: { side },
    title: out
      ? ["Chute de trivela", "Outside-foot curler", "Tiro de trivela"]
      : ["Chute com curva", "Curled shot", "Tiro con rosca"],
    desc: out
      ? ["Em 10 chutes de trivela (parte de fora do pé), de 10 passos ou mais, quantos fazem a curva e acertam o alvo no canto do gol?", "Out of 10 outside-foot shots from 10 steps or more, how many curve and hit the target in the corner of the goal?", "De 10 tiros de trivela (exterior del pie), desde 10 pasos o más, ¿cuántos hacen la curva y dan en el blanco en el rincón del arco?"]
      : ["Em 10 chutes com a parte de dentro do pé, de 10 passos ou mais, quantos fazem a curva e acertam o alvo no canto do gol?", "Out of 10 inside-foot shots from 10 steps or more, how many curve and hit the target in the corner of the goal?", "De 10 tiros con el interior del pie, desde 10 pasos o más, ¿cuántos hacen la curva y dan en el blanco en el rincón del arco?"],
    steps: [
      ["Marque um gol com dois chinelos ou use um muro. Coloque um alvo num dos cantos: garrafa, cone ou chinelo.", "Mark a goal with two flip-flops or use a wall. Put a target in one corner: a bottle, a cone or a flip-flop.", "Marca un arco con dos chanclas o usa un muro. Pon un blanco en un rincón: botella, cono o chancla."],
      ["Fique a pelo menos 10 passos: a bola precisa de espaço para fazer a curva. Se quiser, coloque uma cadeira no meio do gol: é o goleiro.", "Stand at least 10 steps away: the ball needs room to curve. If you like, put a chair in the middle of the goal: that's the keeper.", "Ponte a 10 pasos como mínimo: el balón necesita espacio para hacer la curva. Si quieres, pon una silla en el medio del arco: es el portero."],
      out
        ? ["Chute com a parte de fora do pé, perto dos dedos, passando o pé de dentro para fora na bola, para ela girar e fazer a curva.", "Strike with the outside of your foot, near the toes, brushing across the ball from inside to outside so it spins and curves.", "Golpea con el exterior del pie, cerca de los dedos, pasando el pie de adentro hacia afuera para que gire y haga la curva."]
        : ["Chute com a parte de dentro do pé, perto dos dedos, batendo no lado da bola, para ela girar e fazer a curva.", "Strike with the inside of your foot, near the toes, hitting the side of the ball so it spins and curves.", "Golpea con el interior del pie, cerca de los dedos, dándole al costado del balón para que gire y haga la curva."],
      ...(out ? [CQ_STEPS_TRIVELA_BODY] : []),
      ["Mire um pouco para fora e deixe a curva levar a bola ao canto, longe do goleiro. Ela pode subir um pouco, mas o chute é baixo.", "Aim a little wide and let the curve take the ball into the corner, away from the keeper. It can rise a little, but keep the shot low.", "Apunta un poco afuera y deja que la curva lleve el balón al rincón, lejos del portero. Puede subir un poco, pero el tiro es bajo."],
      CQ_STEPS_5_5,
      ["Conte as bolas que acertam o alvo.", "Count the balls that hit the target.", "Cuenta los balones que dan en el blanco."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// A single trick: 10 tries, count the clean ones.
function cqTrickMission(id, icon, title, how, strongFoot = false) {
  return {
    id, type: "ball", icon, subs: ["dribble", "agility"], tiers: [2, 3, 5, 7], max: 10,
    anim: "trick", animArgs: { trick: id },
    title,
    desc: [
      `Em 10 tentativas, quantas vezes o truque "${title[0]}" sai certinho, com a bola dominada no final?`,
      `Out of 10 tries, how many times do you pull off the "${title[1]}" cleanly, ending with the ball under control?`,
      `De 10 intentos, ¿cuántas veces te sale bien el truco "${title[2]}", terminando con el balón controlado?`,
    ],
    steps: [
      // "how" is one step [pt, en, es] or a list of steps.
      ...(Array.isArray(how[0]) ? how : [how]),
      strongFoot
        ? ["Faça só com o seu pé dominante, o que você tem mais confiança.", "Only use your strong foot, the one you trust most.", "Hazlo solo con tu pie dominante, el que te da más confianza."]
        : CQ_STEPS_5_5,
      ["Comece devagar. A velocidade vem depois.", "Start slowly. Speed comes later.", "Empieza despacio. La velocidad viene después."],
      ["Conte só as que terminam com a bola no seu pé.", "Only count the ones that end with the ball at your feet.", "Cuenta solo las que terminan con el balón en tu pie."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

CQ_MISSIONS.push(
  // ---------- Ritmo ----------
  {
    id: "skipping", type: "move", icon: "🦵", subs: ["acceleration", "stamina"], tiers: [10, 15, 20, 35], timer: { mode: "down", s: 20 }, anim: true,
    title: ["Skipping", "High knees", "Skipping"],
    desc: ["Em 20 segundos, quantas vezes você sobe o joelho na altura da cintura, correndo no lugar?", "In 20 seconds, how many times can you lift your knee to waist height, running on the spot?", "En 20 segundos, ¿cuántas veces subes la rodilla a la altura de la cintura, corriendo en el sitio?"],
    steps: [
      ["Corra no lugar, subindo bem os joelhos.", "Run on the spot, lifting your knees high.", "Corre en el sitio, subiendo bien las rodillas."],
      ["Mexa os braços junto, como num pique.", "Pump your arms, like in a sprint.", "Mueve los brazos, como en un pique."],
      ["Cada joelho que sobe vale 1.", "Each knee that goes up counts as 1.", "Cada rodilla que sube cuenta 1."],
    ],
    unit: ["joelhos", "knees", "rodillas"],
  },
  {
    id: "conemove", type: "move", icon: "🔁", subs: ["agility", "acceleration"], tiers: [4, 6, 8, 10], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Muda os cones", "Move the cones", "Cambia los conos"],
    desc: ["Em 1 minuto, quantos objetos você leva, um por vez, para o outro lado a 5 passos?", "In 1 minute, how many objects can you carry, one at a time, to the other side 5 steps away?", "En 1 minuto, ¿cuántos objetos llevas, uno por vez, al otro lado a 5 pasos?"],
    steps: [
      ["Enfileire cones, chinelos ou garrafas. Marque o outro lado a 5 passos.", "Line up cones, flip-flops or bottles. Mark the other side 5 steps away.", "Pon en fila conos, chanclas o botellas. Marca el otro lado a 5 pasos."],
      ["Agache para pegar, levante, corra e agache de novo para soltar.", "Squat to pick it up, stand, run and squat again to put it down.", "Agáchate para agarrarlo, levántate, corre y agáchate otra vez para soltarlo."],
      ["Cada objeto levado vale 1.", "Each object carried counts as 1.", "Cada objeto llevado cuenta 1."],
    ],
    unit: ["objetos", "objects", "objetos"],
  },
  {
    id: "treasure", type: "ball", icon: "💎", subs: ["carry", "acceleration"], tiers: [2, 3, 4, 5], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Busca-tesouro com bola", "Treasure hunt with the ball", "Busca tesoro con balón"],
    desc: ["Em 1 minuto, quantos objetos você busca conduzindo a bola e traz de volta, um por vez?", "In 1 minute, how many objects can you fetch while dribbling the ball and bring back, one at a time?", "En 1 minuto, ¿cuántos objetos buscas conduciendo el balón y traes de vuelta, uno por vez?"],
    steps: [
      ["Espalhe objetos a uns 8 passos: chinelo, meia, garrafa.", "Spread objects about 8 steps away: a flip-flop, sock, bottle.", "Reparte objetos a unos 8 pasos: chancla, media, botella."],
      ["Conduza até um objeto, pegue com a mão e volte conduzindo.", "Dribble to an object, grab it with your hand and dribble back.", "Conduce hasta un objeto, agárralo con la mano y vuelve conduciendo."],
      CQ_STEPS_CARRY_FEET,
      ["Cada objeto trazido com a bola dominada vale 1.", "Each object brought back with the ball under control counts as 1.", "Cada objeto traído con el balón controlado cuenta 1."],
    ],
    unit: ["objetos", "objects", "objetos"],
  },
  {
    id: "star", type: "move", icon: "⭐", subs: ["agility", "reactions", "acceleration"], tiers: [6, 9, 12, 15], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Estrela", "Star drill", "Estrella"],
    desc: ["Em 30 segundos, quantas marcas você toca saindo do centro e voltando, em volta de você?", "In 30 seconds, how many markers can you touch going out from the centre and back?", "En 30 segundos, ¿cuántas marcas tocas saliendo del centro y volviendo?"],
    steps: [
      ["Coloque 4 objetos em volta de você, a 3 passos do centro.", "Put 4 objects around you, 3 steps from the centre.", "Pon 4 objetos alrededor tuyo, a 3 pasos del centro."],
      ["Vá até um, toque com a mão e volte ao centro. Depois o próximo.", "Go to one, touch it with your hand and come back to the centre. Then the next.", "Ve a uno, tócalo con la mano y vuelve al centro. Después el siguiente."],
      ["Cada marca tocada vale 1.", "Each marker touched counts as 1.", "Cada marca tocada cuenta 1."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "ladder", type: "move", icon: "🪜", subs: ["agility", "balance", "acceleration"], tiers: [2, 4, 6, 8], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Escada no chão", "Floor ladder", "Escalera en el suelo"],
    desc: ["Em 1 minuto, quantas vezes você passa pela escada pisando com os dois pés em cada espaço?", "In 1 minute, how many times can you go through the ladder with both feet in every space?", "En 1 minuto, ¿cuántas veces pasas la escalera pisando con los dos pies en cada espacio?"],
    steps: [
      ["Faça uma escada com 7 chinelos ou risque no chão: 6 espaços.", "Make a ladder with 7 flip-flops or draw it on the floor: 6 spaces.", "Haz una escalera con 7 chanclas o dibújala en el suelo: 6 espacios."],
      ["Os dois pés entram em cada espaço, rapidinho, sem pisar nas marcas.", "Both feet go into every space, quickly, without stepping on the markers.", "Los dos pies entran en cada espacio, rápido, sin pisar las marcas."],
      ["Cada passagem completa vale 1. Volte andando.", "Each full run through counts as 1. Walk back.", "Cada pasada completa cuenta 1. Vuelve caminando."],
    ],
    unit: ["passagens", "runs", "pasadas"],
  },
  {
    id: "sprint20", type: "move", icon: "⏱️", subs: ["sprint", "acceleration"], tiers: [10, 8, 7, 6], lower: true, max: 60, timer: { mode: "up" }, anim: true,
    title: ["Pique cronometrado", "Timed sprint", "Pique cronometrado"],
    desc: ["Em quantos segundos você vai até uma marca a 10 passos e volta? Quanto menos, melhor!", "How many seconds does it take you to run to a marker 10 steps away and back? The fewer, the better!", "¿En cuántos segundos vas hasta una marca a 10 pasos y vuelves? ¡Cuantos menos, mejor!"],
    steps: [
      ["Coloque uma marca a 10 passos e deixe o celular na linha de saída.", "Put a marker 10 steps away and leave the phone at the start line.", "Pon una marca a 10 pasos y deja el celular en la línea de salida."],
      ["Aperte Iniciar, saia no \"Vai!\", toque a marca e volte.", "Press Start, go on \"Go!\", touch the marker and come back.", "Pulsa Iniciar, sal con el \"¡Ya!\", toca la marca y vuelve."],
      ["Chegou? Aperte Parar. Vale o melhor de 3.", "Back? Press Stop. Best of 3.", "¿Llegaste? Pulsa Parar. Vale el mejor de 3."],
    ],
    unit: CQ_UNIT_SECONDS,
  },

  {
    id: "stopgo", type: "ball", icon: "🛑", subs: ["acceleration", "carry", "control", "agility"], tiers: [6, 9, 13, 16], timer: { mode: "down", s: 60 }, anim: "stopgo",
    title: ["Para e arranca", "Stop and go", "Para y arranca"],
    desc: ["Em 1 minuto, indo e voltando num corredor de 15 passos com um chinelo a cada 5, quantas arrancadas completas você dá, conduzindo rápido e parando a bola com a sola em cada chinelo?", "In 1 minute, going up and down a 15-step lane with a flip-flop every 5 steps, how many full bursts can you make, dribbling fast and stopping the ball with your sole at each flip-flop?", "En 1 minuto, yendo y volviendo por un pasillo de 15 pasos con una chancla cada 5, ¿cuántas arrancadas completas das, conduciendo rápido y parando el balón con la suela en cada chancla?"],
    steps: [
      ["Marque um corredor de 15 passos com 4 chinelos, um a cada 5 passos: no começo, aos 5, aos 10 e aos 15.", "Mark a 15-step lane with 4 flip-flops, one every 5 steps: at the start, at 5, at 10 and at 15.", "Marca un pasillo de 15 pasos con 4 chanclas, una cada 5 pasos: al inicio, a los 5, a los 10 y a los 15."],
      ["Arranque o mais rápido que puder, conduzindo a bola com o peito do pé, a parte de cima, onde fica o cadarço.", "Burst away as fast as you can, dribbling the ball with your laces, the top of your foot.", "Arranca lo más rápido que puedas, conduciendo el balón con el empeine, la parte de arriba del pie, donde van los cordones."],
      ["Em cada chinelo, pare a bola com a sola, bem ao lado dele. Ela tem que ficar parada debaixo do seu pé.", "At each flip-flop, stop the ball with your sole, right beside it. It has to stay still under your foot.", "En cada chancla, para el balón con la suela, justo al lado. Tiene que quedar quieto bajo tu pie."],
      ["Na hora de parar, jogue o corpo para a frente, como se fosse continuar correndo. É isso que tira o adversário da sua cola: ele segue direto e você fica com a bola.", "As you stop, throw your body forward, as if you were going to keep running. That's what shakes off the defender: they carry on past and you keep the ball.", "Al parar, tira el cuerpo hacia adelante, como si fueras a seguir corriendo. Eso es lo que te quita al rival de encima: sigue de largo y tú te quedas con el balón."],
      ["Na mesma hora, arranque de novo até o próximo chinelo. No último, vire e volte fazendo igual, até acabar o tempo.", "Straight away, burst off again to the next flip-flop. At the last one, turn and come back doing the same, until time runs out.", "Al momento, arranca otra vez hasta la siguiente chancla. En la última, gira y vuelve haciendo lo mismo, hasta que se acabe el tiempo."],
      CQ_STEPS_ALTERNATE,
      ["Cada arrancada que termina com a bola parada pela sola no chinelo vale 1. Se a bola passar do chinelo, essa não conta.", "Each burst that ends with the ball stopped by your sole at the flip-flop counts as 1. If the ball rolls past the flip-flop, that one doesn't count.", "Cada arrancada que termina con el balón parado por la suela en la chancla cuenta 1. Si el balón pasa de la chancla, esa no cuenta."],
    ],
    unit: ["arrancadas", "bursts", "arrancadas"],
  },
  {
    id: "solepull", type: "ball", icon: "↩️", subs: ["carry", "agility", "control", "balance"], tiers: [8, 13, 19, 25], timer: { mode: "down", s: 60 }, anim: "solepull",
    title: ["Para, puxa e volta", "Stop, drag back and go", "Para, arrastra y vuelve"],
    desc: ["Em 1 minuto, entre dois chinelos a 5 passos, quantas vezes você para a bola com a sola, puxa ela para trás com a sola e volta conduzindo?", "In 1 minute, between two flip-flops 5 steps apart, how many times do you stop the ball with your sole, drag it back with your sole and dribble back?", "En 1 minuto, entre dos chanclas a 5 pasos, ¿cuántas veces paras el balón con la suela, lo arrastras hacia atrás con la suela y vuelves conduciendo?"],
    steps: [
      ["Coloque dois chinelos a 5 passos um do outro.", "Put two flip-flops 5 steps apart.", "Pon dos chanclas a 5 pasos una de otra."],
      ["Conduza a bola com o peito do pé, a parte de cima, onde fica o cadarço, até o outro chinelo.", "Dribble the ball with your laces, the top of your foot, up to the other flip-flop.", "Conduce el balón con el empeine, la parte de arriba del pie, donde van los cordones, hasta la otra chancla."],
      ["Lá, pare a bola com a sola e, na mesma hora, jogue o corpo para a frente, como se fosse continuar. É isso que tira o adversário da sua cola.", "There, stop the ball with your sole and, at the same moment, throw your body forward, as if you were carrying on. That's what shakes off the defender.", "Allí, para el balón con la suela y, en el mismo momento, tira el cuerpo hacia adelante, como si fueras a seguir. Eso es lo que te quita al rival de encima."],
      ["Sem tirar o pé, puxe a bola para trás com a sola, gire o corpo e volte conduzindo até o primeiro chinelo, fazendo igual.", "Without lifting your foot, drag the ball back with your sole, turn your body and dribble back to the first flip-flop, doing the same.", "Sin quitar el pie, arrastra el balón hacia atrás con la suela, gira el cuerpo y vuelve conduciendo hasta la primera chancla, haciendo lo mismo."],
      ["A cada puxada, troque o pé: uma com o direito, a próxima com o esquerdo.", "Switch feet on every drag-back: one with your right, the next with your left.", "Cambia de pie en cada arrastre: uno con el derecho, el siguiente con el izquierdo."],
      ["Cada puxada vale 1. Só conta se a bola parar debaixo da sola antes de você puxar.", "Each drag-back counts as 1. It only counts if the ball stops under your sole before you drag it.", "Cada arrastre cuenta 1. Solo cuenta si el balón se para bajo la suela antes de arrastrarlo."],
    ],
    unit: ["puxadas", "drag-backs", "arrastres"],
  },

  // ---------- Finalização ----------
  {
    id: "weakshot", type: "ball", icon: "👟", subs: ["finishing", "composure"], tiers: [2, 3, 5, 7], max: 10,
    anim: "target", animArgs: { note: ["chapa e peito do pé", "side-foot and laces", "interior y empeine"] },
    title: ["Chapa e peito do pé", "Side-foot and laces", "Interior y empeine"],
    desc: ["Em 10 chutes de 5 passos, 5 de chapa e 5 de peito do pé, quantos acertam o alvo?", "Out of 10 shots from 5 steps, 5 side-foot and 5 with your laces, how many hit the target?", "De 10 tiros desde 5 pasos, 5 con el interior y 5 con el empeine, ¿cuántos dan en el blanco?"],
    steps: [
      ["Use o mesmo alvo do Chute no alvo, a 5 passos.", "Use the same target as Target shooting, 5 steps away.", "Usa el mismo blanco del Tiro al blanco, a 5 pasos."],
      ["Chapa é a parte de dentro do pé: mais precisão. Peito do pé é onde fica o cadarço: mais força.", "Side-foot is the inside of your foot: more accuracy. Laces are where your shoelaces are: more power.", "El interior es la parte de adentro del pie: más precisión. El empeine es donde están los cordones: más fuerza."],
      CQ_STEPS_ALTERNATE,
      ["Conte os acertos.", "Count the hits.", "Cuenta los aciertos."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "placed", type: "ball", icon: "📐", subs: ["finishing", "composure"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Chute colocado", "Placed finish", "Tiro colocado"],
    desc: ["Em 10 chutes de 7 passos, de chapa (parte de dentro do pé), quantos entram entre o chinelo e a trave?", "Out of 10 side-foot shots from 7 steps, how many go in between the flip-flop and the post?", "De 10 tiros desde 7 pasos con el interior del pie, ¿cuántos entran entre la chancla y el palo?"],
    steps: [
      ["Coloque um chinelo dentro do gol, a 1 passo de cada trave.", "Put a flip-flop inside the goal, 1 step from each post.", "Pon una chancla dentro del arco, a 1 paso de cada palo."],
      ["Chute de 7 passos com a parte de dentro do pé: precisão, não força.", "Shoot from 7 steps with the inside of your foot: accuracy, not power.", "Dispara desde 7 pasos con el interior del pie: precisión, no fuerza."],
      CQ_STEPS_5_5,
      ["Vale entre o chinelo e a trave, nos dois cantos.", "It counts between the flip-flop and the post, in either corner.", "Vale entre la chancla y el palo, en cualquier rincón."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "stepshot", type: "ball", icon: "🌪️", subs: ["dribble", "finishing"], tiers: [2, 3, 4, 6], max: 10, anim: true,
    title: ["Pedalada e chute", "Step-over and shoot", "Bicicleta y tiro"],
    desc: ["Em 10 tentativas, quantas vezes você engana o oponente com a pedalada, sai para o outro lado e acerta o alvo, 4 passos depois dele?", "Out of 10 tries, how many times do you fool the defender with a step-over, go the other way and hit the target 4 steps behind them?", "De 10 intentos, ¿cuántas veces engañas al rival con la bicicleta, sales hacia el otro lado y aciertas el blanco, 4 pasos detrás de él?"],
    steps: [
      ["Coloque um cone ou uma cadeira no caminho: é o oponente. O alvo fica uns 4 passos depois dele. Se tiver alguém da família, ele pode ser o oponente.", "Put a cone or a chair in your path: that's the defender. The target is about 4 steps behind it. If someone at home can join, they can be the defender.", "Pon un cono o una silla en el camino: es el rival. El blanco queda unos 4 pasos detrás. Si alguien de tu familia puede, que haga de rival."],
      ["Conduza até perto do oponente e faça a pedalada: passe a perna por cima da bola, sem tocar nela, levando o corpo junto, como se fosse sair para aquele lado.", "Dribble up close to the defender and do the step-over: swing your leg over the ball without touching it, moving your body too, as if you were going that way.", "Conduce hasta cerca del rival y haz la bicicleta: pasa la pierna por encima del balón sin tocarlo, llevando el cuerpo, como si fueras a salir hacia ese lado."],
      ["O oponente foi para aquele lado? Com a outra perna, puxe a bola para o lado contrário e passe por ele.", "Did the defender go that way? With your other leg, take the ball the opposite way and go past.", "¿El rival se fue hacia ese lado? Con la otra pierna, saca el balón hacia el lado contrario y pásalo."],
      ["Chute logo em seguida, sem parar a bola, e tente acertar o alvo.", "Shoot straight away, without stopping the ball, and aim for the target.", "Tira enseguida, sin parar el balón, y apunta al blanco."],
      ["Faça 5 com a pedalada da perna direita, saindo para a esquerda, e 5 com a pedalada da perna esquerda, saindo para a direita.", "Do 5 with a right-leg step-over going left, and 5 with a left-leg step-over going right.", "Haz 5 con la bicicleta de la pierna derecha saliendo hacia la izquierda, y 5 con la de la pierna izquierda saliendo hacia la derecha."],
      ["Só conta se você passar pelo oponente e acertar o alvo.", "It only counts if you get past the defender and hit the target.", "Solo cuenta si pasas al rival y aciertas el blanco."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "nape", type: "ball", icon: "🙇", subs: ["control", "balance", "concentration"], tiers: [2, 4, 6, 8], max: 10, anim: "nape",
    title: ["Bola na nuca", "Ball on the neck", "Balón en la nuca"],
    desc: ["Em 10 tentativas, quantas vezes você joga a bola para cima, para ela na nuca e segura 3 segundos sem deixar cair?", "Out of 10 tries, how many times do you toss the ball up, stop it on the back of your neck and hold it for 3 seconds without dropping it?", "De 10 intentos, ¿cuántas veces lanzas el balón hacia arriba, lo paras en la nuca y lo aguantas 3 segundos sin que se caiga?"],
    steps: [
      ["Segure a bola com as duas mãos e jogue para cima, um pouco acima da cabeça e um pouco à sua frente.", "Hold the ball in both hands and toss it up, a little above your head and slightly in front of you.", "Sujeta el balón con las dos manos y lánzalo hacia arriba, un poco por encima de la cabeza y un poco delante de ti."],
      ["Enquanto ela sobe, abaixe o tronco para frente, dobrando um pouco os joelhos, com a cabeça para baixo e as costas retas.", "As it goes up, bend forward, knees slightly bent, head down and back flat.", "Mientras sube, baja el tronco hacia adelante, con las rodillas un poco dobladas, la cabeza abajo y la espalda recta."],
      ["Levante um pouco a cabeça e suba os ombros: entre a nuca e os ombros forma um encaixe para a bola.", "Lift your head a little and raise your shoulders: that makes a pocket for the ball between your neck and shoulders.", "Levanta un poco la cabeza y sube los hombros: entre la nuca y los hombros se forma un hueco para el balón."],
      ["O movimento é suave: no mesmo instante em que a bola encaixa, as costas descem junto com ela, amortecendo a queda na nuca. Se ficar dura, a bola quica e cai. Abra os braços para se equilibrar.", "Keep it smooth: the moment the ball settles, your back goes down with it, cushioning the landing on your neck. If you stay stiff, the ball bounces off. Open your arms for balance.", "El movimiento es suave: en el mismo instante en que el balón encaja, la espalda baja junto con él, amortiguando la caída en la nuca. Si te quedas rígido, el balón rebota y se cae. Abre los brazos para equilibrarte."],
      ["Só conta se a bola ficar parada na nuca por 3 segundos.", "It only counts if the ball stays on your neck for 3 seconds.", "Solo cuenta si el balón se queda en la nuca 3 segundos."],
      ["Ficou fácil? Jogue mais alto, ou levante a bola com o pé direto para a nuca.", "Too easy? Toss it higher, or flick it up with your foot straight onto your neck.", "¿Muy fácil? Lánzalo más alto, o levántalo con el pie directo a la nuca."],
    ],
    unit: CQ_UNIT_HITS,
  },
  cqStepoversMission("stepshot3", 3, [2, 3, 4, 6], ["dribble", "agility", "balance", "finishing"]),
  cqStepoversMission("stepshot5", 5, [1, 2, 3, 5], ["dribble", "agility", "balance", "finishing", "power"]),
  {
    id: "stepdrag", type: "ball", icon: "🪃", subs: ["dribble", "agility", "balance", "finishing", "curve"], tiers: [2, 3, 4, 6], max: 10, anim: "stepdrag",
    title: ["Pedalada e puxada com marcador nas costas", "Step-over and drag with a defender on your back", "Bicicleta y arrastre con marcador a la espalda"],
    desc: ["Em 10 tentativas, com o adversário colado nas suas costas, quantas vezes você finge que vai para frente com a pedalada, desloca o marcador, puxa a bola para trás com as costas do pé da mesma perna, gira pelo outro lado e acerta um chute colocado no canto, a 7 passos do gol?", "Out of 10 tries, with a defender tight on your back, how many times do you fake going forward with a step-over, move the defender, drag the ball back with the back of the same foot, turn the other way and hit a placed shot into the corner, 7 steps from goal?", "De 10 intentos, con el rival pegado a tu espalda, ¿cuántas veces finges ir hacia adelante con la bicicleta, desplazas al marcador, tiras el balón hacia atrás con la parte de atrás del pie de la misma pierna, giras por el otro lado y aciertas un tiro colocado al rincón, a 7 pasos del arco?"],
    steps: [
      ["Use um gol, ou marque um de 3 passos de largura com dois chinelos ou num muro. Coloque um chinelo dentro do gol, a 1 passo de cada trave. Sem gol nem muro? Mire em algo no chão.", "Use a goal, or mark one 3 steps wide with two flip-flops or on a wall. Put a flip-flop inside the goal, 1 step from each post. No goal or wall? Aim at something on the ground.", "Usa un arco, o marca uno de 3 pasos de ancho con dos chanclas o en un muro. Pon una chancla dentro del arco, a 1 paso de cada palo. ¿Sin arco ni muro? Apunta a algo en el suelo."],
      ["Conduza a bola de lado para o gol, a uns 7 passos dele. Se tiver alguém, peça para vir colado nas suas costas. Sozinho, passe rente a uma cadeira e imagine o marcador.", "Dribble side-on to the goal, about 7 steps from it. If someone's around, have them stay tight on your back. On your own, go close past a chair and picture the defender.", "Conduce de lado al arco, a unos 7 pasos. Si hay alguien, que vaya pegado a tu espalda. Solo, pasa rozando una silla e imagina al marcador."],
      ["Faça a pedalada de fora para dentro, por cima da bola, com a perna do lado contrário ao marcador, tombando o corpo para frente como se fosse arrancar. É o corpo tombando que convence o marcador: sem isso, ele não se desloca.", "Do an outside-in step-over with the leg away from the defender, tipping your body forward as if bursting away. Your body tipping is what sells it: without it, the defender won't move.", "Haz la bicicleta de afuera hacia adentro, con la pierna del lado contrario al marcador, inclinando el cuerpo hacia adelante como si fueras a arrancar. El cuerpo inclinado es lo que engaña al marcador: sin eso, no se desplaza."],
      ["Quando a mesma perna voltar, aproveite o movimento e já puxe a bola para trás com a parte de trás do pé, as costas do pé, para o lado contrário ao do marcador.", "As the same leg comes back, use that movement to drag the ball back with the back of your foot, away from the defender's side.", "Cuando la misma pierna vuelva, aprovecha el movimiento y tira el balón hacia atrás con la parte de atrás del pie, hacia el lado contrario al del marcador."],
      ["Gire pelo outro lado, de costas para o marcador, nunca pela frente dele. Saia com a bola de frente para o gol, com ele fora da jogada.", "Turn the other way, with your back to the defender, never across the front of them. Come out with the ball facing the goal, with them out of the play.", "Gira por el otro lado, de espaldas al marcador, nunca por delante de él. Sal con el balón de frente al arco, con él fuera de la jugada."],
      ["Chute colocado no canto: parte de dentro do pé, perto dos dedos. É diferente do passe: o pé fica firme, você bate mais na frente do pé e a bola vai fazendo curva.", "Placed shot into the corner: inside of the foot, near the toes. It's not a pass: keep the foot firm, strike with the front of the foot and let the ball curl.", "Tiro colocado al rincón: interior del pie, cerca de los dedos. No es un pase: el pie firme, golpeas con la parte delantera del pie y el balón va con curva."],
      ["Treine as duas pernas: 5 com a perna esquerda, com o marcador do seu lado direito, e 5 com a perna direita, com o marcador do seu lado esquerdo.", "Train both legs: 5 with your left leg, with the defender on your right, and 5 with your right leg, with the defender on your left.", "Entrena las dos piernas: 5 con la pierna izquierda, con el marcador a tu derecha, y 5 con la pierna derecha, con el marcador a tu izquierda."],
      ["Só conta se a bola entrar entre o chinelo e a trave.", "It only counts if the ball goes in between the flip-flop and the post.", "Solo cuenta si el balón entra entre la chancla y el palo."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "soledrag", type: "ball", icon: "👟", subs: ["dribble", "agility", "balance", "finishing"], tiers: [2, 3, 4, 6], max: 10, anim: "soledrag",
    title: ["Puxada de sola e arrancada", "Sole drag-back and go", "Arrastre con la suela y arranque"],
    desc: ["Em 10 tentativas, parado na lateral com a sola na bola e o adversário vindo de lado, quantas vezes você puxa a bola para trás com a sola do pé, engana ele com o corpo, rola a bola de volta para frente sem tirar o pé dela, deixa ele para trás e acerta o gol a 7 passos?", "Out of 10 tries, standing on the sideline with your sole on the ball and a defender coming from the side, how many times do you drag the ball back with your sole, fool them with your body, roll it forward again without taking your foot off, leave them behind and score from 7 steps?", "De 10 intentos, quieto en la banda con la suela en el balón y el rival viniendo de lado, ¿cuántas veces tiras el balón hacia atrás con la suela, lo engañas con el cuerpo, lo ruedas otra vez hacia adelante sin quitar el pie, lo dejas atrás y marcas desde 7 pasos?"],
    steps: [
      ["Use um gol, ou marque um de 3 passos de largura com dois chinelos ou num muro. Fique perto de uma linha lateral (ou de um muro, uma cerca), uns 10 passos antes do gol.", "Use a goal, or mark one 3 steps wide with two flip-flops or on a wall. Stand close to a sideline (or a wall, a fence), about 10 steps before the goal.", "Usa un arco, o marca uno de 3 pasos de ancho con dos chanclas o en un muro. Ponte cerca de una línea de banda (o de un muro, una valla), unos 10 pasos antes del arco."],
      ["Comece parado, de frente para o gol, já com a sola do pé do lado da linha em cima da bola, o pé mais longe do adversário.", "Start standing still, facing the goal, with the sole of the foot on the line side already on the ball, the foot furthest from the defender.", "Empieza quieto, de frente al arco, ya con la suela del pie del lado de la línea sobre el balón, el pie más lejos del rival."],
      ["O adversário vem de lado, de dentro do campo, para cima da bola. Quando ele chegar perto, puxe a bola para trás com a sola. Sozinho? Use uma cadeira ou um cone ao seu lado.", "The defender comes from the side, from inside the pitch, straight at the ball. When they get close, drag the ball back with your sole. On your own? Use a chair or a cone beside you.", "El rival viene de lado, desde dentro del campo, hacia el balón. Cuando se acerque, tira el balón hacia atrás con la suela. ¿Solo? Usa una silla o un cono a tu lado."],
      ["O corpo vai junto: jogue os ombros e o quadril para trás, como se fosse recuar. É isso que faz o adversário acreditar e avançar para roubar a bola.", "Your body goes with it: shoulders and hips back, as if you were retreating. That's what makes the defender believe it and step in for the ball.", "El cuerpo va también: hombros y cadera hacia atrás, como si fueras a retroceder. Eso hace que el rival se lo crea y avance a robar."],
      ["Quando ele avançar, sem tirar o pé da bola, role ela de volta para frente com a sola, rente à linha, por trás do bote dele, e arranque. Ele fica para trás, sem tempo de virar.", "When they step in, without taking your foot off, roll the ball forward again with your sole, along the line, behind their lunge, and burst away. They're left behind with no time to turn.", "Cuando avance, sin quitar el pie del balón, ruédalo otra vez hacia adelante con la suela, pegado a la línea, por detrás de su entrada, y arranca. Se queda atrás, sin tiempo para girar."],
      ["Corte para dentro, em direção ao gol, e chute a 7 passos dele, sem parar a bola.", "Cut inside towards goal and shoot from 7 steps, without stopping the ball.", "Corta hacia dentro, hacia el arco, y tira desde 7 pasos, sin parar el balón."],
      CQ_STEPS_5_5,
      ["Só conta se o pé não sair da bola entre a puxada e a volta para frente, e a bola entrar no gol.", "It only counts if your foot stays on the ball between the drag-back and rolling it forward, and the ball goes in.", "Solo cuenta si el pie no sale del balón entre el arrastre y la vuelta hacia adelante, y el balón entra."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "cruyffturns", type: "ball", icon: "🔁", subs: ["carry", "agility", "balance"], tiers: [8, 13, 19, 25], timer: { mode: "down", s: 60 }, anim: "cruyffturns",
    title: ["Vai e volta com giro de Cruyff", "Back and forth with Cruyff turns", "Ida y vuelta con giro de Cruyff"],
    desc: ["Em 1 minuto, quantos giros de Cruyff você faz conduzindo a bola 5 passos para um lado e 5 para o outro?", "In 1 minute, how many Cruyff turns can you do, dribbling 5 steps one way and 5 steps back?", "En 1 minuto, ¿cuántos giros de Cruyff haces conduciendo 5 pasos hacia un lado y 5 hacia el otro?"],
    steps: [
      ["Coloque dois chinelos a 5 passos um do outro.", "Put two flip-flops 5 steps apart.", "Pon dos chanclas a 5 pasos una de otra."],
      ["Conduza a bola com o peito do pé, a parte de cima, onde fica o cadarço, até o outro chinelo.", "Dribble the ball with your laces, the top of your foot, up to the other flip-flop.", "Conduce el balón con el empeine, la parte de arriba del pie, donde van los cordones, hasta la otra chancla."],
      ["Lá, faça o giro de Cruyff: finja que vai chutar, passe o pé pela bola e puxe ela com a parte de dentro do pé para trás, passando por trás da perna de apoio. Nada pela frente. Só então gire para o lado da bola e volte conduzindo.", "There, do the Cruyff turn: fake a kick, take your foot past the ball and drag it back with the inside of your foot, behind your standing leg. Never in front. Only then turn towards the ball and dribble back.", "Allí, haz el giro de Cruyff: finge que vas a tirar, pasa el pie por el balón y arrástralo hacia atrás con el interior del pie, por detrás de la pierna de apoyo. Nunca por delante. Solo entonces gira hacia el balón y vuelve conduciendo."],
      ["A cada giro, troque a perna: um com a esquerda, o próximo com a direita.", "Switch legs on every turn: one with your left, the next with your right.", "Cambia de pierna en cada giro: uno con la izquierda, el siguiente con la derecha."],
      ["Cada giro vale 1. Só conta se a bola não escapar de você.", "Each turn counts as 1. It only counts if the ball doesn't get away from you.", "Cada giro cuenta 1. Solo cuenta si el balón no se te escapa."],
    ],
    unit: ["giros", "turns", "giros"],
  },
  {
    id: "cruyffcross", type: "ball", icon: "🔄", subs: ["dribble", "agility", "balance", "cross"], tiers: [2, 3, 4, 6], max: 10, anim: "cruyff",
    title: ["Finta de cruzamento e giro de Cruyff", "Fake cross and Cruyff turn", "Amague de centro y giro de Cruyff"],
    desc: ["Em 10 tentativas, correndo lado a lado com o adversário até a linha de fundo, quantas vezes você finge o cruzamento, faz o giro de Cruyff com uma perna, tira ele da jogada e cruza (ou passa) com a outra, acertando o alvo na área?", "Out of 10 tries, running side by side with a defender to the byline, how many times do you fake the cross, do a Cruyff turn with one leg, take them out of the play and cross (or pass) with the other, hitting the target in the box?", "De 10 intentos, corriendo lado a lado con el rival hasta la línea de fondo, ¿cuántas veces finges el centro, haces el giro de Cruyff con una pierna, lo sacas de la jugada y centras (o pasas) con la otra, acertando el objetivo en el área?"],
    steps: [
      ["Coloque um alvo na área, a uns 7 passos de onde você vai cruzar: um bambolê, uma toalha ou um círculo de 4 chinelos. Comece pela ponta, longe da linha de fundo, perto da linha lateral.", "Put a target in the box, about 7 steps from where you will cross: a hoop, a towel or a circle of 4 flip-flops. Start out wide, far from the byline, close to the sideline.", "Pon un objetivo en el área, a unos 7 pasos de donde vas a centrar: un aro, una toalla o un círculo de 4 chanclas. Empieza por la banda, lejos de la línea de fondo, cerca de la línea lateral."],
      ["Conduza até perto da linha de fundo com o adversário correndo do seu lado, por dentro. Sozinho? Coloque um cone ou uma cadeira perto da linha de fundo e imagine o marcador.", "Dribble close to the byline with the defender running beside you, on the inside. On your own? Put a cone or a chair near the byline and picture the defender.", "Conduce hasta cerca de la línea de fondo con el rival corriendo a tu lado, por dentro. ¿Solo? Pon un cono o una silla cerca de la línea de fondo e imagina al marcador."],
      ["Perto da linha, arme a perna como se fosse cruzar na área. Capriche na finta: o marcador precisa acreditar e se jogar para bloquear o cruzamento.", "Near the line, wind your leg up as if to cross into the box. Sell it: the defender has to believe it and throw themselves at the cross.", "Cerca de la línea, arma la pierna como si fueras a centrar al área. Que sea creíble: el marcador tiene que creérselo y lanzarse a bloquear el centro."],
      ["Em vez de cruzar, a mesma perna passa por cima da bola, quase como uma pedalada, e puxa ela com a parte de dentro do pé por trás da perna de apoio e do corpo, girando para o outro lado: é o giro de Cruyff. Nada pela frente. A bola fica atrás de você, longe do marcador.", "Instead of crossing, the same leg goes over the ball, almost like a step-over, and drags it with the inside of the foot behind your standing leg and your body, turning the other way: the Cruyff turn. Nothing in front. The ball ends up behind you, away from the defender.", "En vez de centrar, la misma pierna pasa por encima del balón, casi como una bicicleta, y lo arrastra con el interior del pie por detrás de la pierna de apoyo y del cuerpo, girando hacia el otro lado: es el giro de Cruyff. Nada por delante. El balón queda detrás de ti, lejos del marcador."],
      ["Com o marcador fora da jogada, agora sim: cruze com a outra perna, alto, para a bola cair no alvo. Também pode ser um passe com a outra perna, rasteiro, até o alvo, como se fosse para um companheiro.", "With the defender out of the play, now you cross for real: use the other leg, high, so the ball drops on the target. It can also be a pass with the other leg, along the ground, to the target, as if to a teammate.", "Con el marcador fuera de la jugada, ahora sí: centra con la otra pierna, alto, para que el balón caiga en el objetivo. También puede ser un pase con la otra pierna, raso, hasta el objetivo, como si fuera para un compañero."],
      ["Treine os dois lados: 5 pela ponta esquerda (giro com a esquerda, cruzamento com a direita) e 5 pela ponta direita (giro com a direita, cruzamento com a esquerda).", "Train both sides: 5 down the left wing (turn with the left, cross with the right) and 5 down the right wing (turn with the right, cross with the left).", "Entrena los dos lados: 5 por la banda izquierda (giro con la izquierda, centro con la derecha) y 5 por la banda derecha (giro con la derecha, centro con la izquierda)."],
      ["Só conta se a bola cair dentro do alvo ou tocar nele.", "It only counts if the ball lands in or touches the target.", "Solo cuenta si el balón cae dentro del objetivo o lo toca."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "firsttime", type: "ball", icon: "⚡", subs: ["finishing", "reactions"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Chute de primeira", "First-time shot", "Tiro de primera"],
    desc: ["Em 10 bolas que chegam rolando até você, a 8 passos do gol, quantas você chuta de primeira, sem dominar, e acerta o gol?", "Out of 10 balls rolling to you, 8 steps from goal, how many do you hit first time, without a touch, on target?", "De 10 balones que te llegan rodando, a 8 pasos del arco, ¿cuántos disparas de primera, sin controlar, y van al arco?"],
    steps: [
      ["Marque um gol de 3 passos de largura com dois chinelos, ou use um muro. Fique a 8 passos dele.", "Mark a goal 3 steps wide with two flip-flops, or use a wall. Stand 8 steps from it.", "Marca un arco de 3 pasos de ancho con dos chanclas, o usa un muro. Ponte a 8 pasos."],
      ["Alguém da família rola a bola para você, do lado.", "A family member rolls the ball to you from the side.", "Alguien de tu familia te rueda el balón desde un lado."],
      ["Sozinho? Passe a bola numa parede e chute de primeira quando ela voltar.", "On your own? Pass the ball against a wall and shoot first time when it comes back.", "¿Solo? Pasa el balón contra una pared y tira de primera cuando vuelva."],
      ["5 bolas vêm pela direita e você chuta com o pé direito. As outras 5 vêm pela esquerda, para o pé esquerdo.", "5 balls come from the right and you hit them with your right foot. The other 5 come from the left, for your left foot.", "5 balones llegan por la derecha y tiras con el pie derecho. Los otros 5 llegan por la izquierda, para el pie izquierdo."],
      ["Chute sem dominar, com a bola andando.", "Shoot without controlling it, with the ball moving.", "Dispara sin controlar, con el balón en movimiento."],
      ["Conte os chutes no gol.", "Count the shots on target.", "Cuenta los tiros al arco."],
    ],
    unit: CQ_UNIT_HITS,
  },
  cqControlShotMission("controlshot", 5, "foot", [2, 3, 5, 7]),
  cqControlShotMission("controlshot10", 10, "foot", [1, 2, 4, 6]),
  cqControlShotMission("thighshot5", 5, "thigh", [1, 2, 4, 6]),
  cqControlShotMission("thighshot10", 10, "thigh", [1, 2, 3, 5]),
  {
    id: "chip", type: "ball", icon: "🥄", subs: ["finishing", "composure"], tiers: [1, 2, 4, 6], max: 10, anim: true,
    title: ["Cavadinha", "Chip shot", "Vaselina"],
    desc: ["Em 10 tentativas de 6 passos, quantas cavadinhas passam por cima da cadeira (o goleiro) e caem no gol?", "Out of 10 tries from 6 steps, how many chips go over the chair (the keeper) and drop into the goal?", "De 10 intentos desde 6 pasos, ¿cuántas vaselinas pasan sobre la silla (el portero) y caen en el arco?"],
    steps: [
      ["Coloque uma cadeira 2 passos na frente do gol, como se fosse o goleiro. Chute de 6 passos do gol.", "Put a chair 2 steps in front of the goal, as if it were the keeper. Shoot from 6 steps out.", "Pon una silla 2 pasos delante del arco, como si fuera el portero. Dispara desde 6 pasos."],
      ["Chute por baixo da bola, com a ponta do pé, só levantando.", "Strike under the ball with the tip of your foot, just lifting it.", "Golpea por debajo del balón con la punta del pie, solo levantándolo."],
      CQ_STEPS_5_5,
      ["Conte as bolas que caem no gol.", "Count the balls that drop into the goal.", "Cuenta los balones que caen en el arco."],
    ],
    unit: ["gols", "goals", "goles"],
  },
  cqCurlMission("curlshot", "in", [1, 2, 4, 6], ["curve", "longshots"]),
  cqCurlMission("trivela", "out", [1, 2, 3, 5], ["curve", "finishing"]),
  cqVolleyMission("volley", 5, [2, 3, 5, 7], ["volleys", "finishing"]),
  cqVolleyMission("volley8", 8, [2, 3, 4, 6], ["volleys", "finishing"]),
  cqVolleyMission("volley12", 12, [1, 2, 4, 5], ["volleys", "power"]),
  cqVolleyMission("volley16", 16, [1, 2, 3, 4], ["volleys", "longshots"]),
  cqTurnMission("turnshot5", 5, "shot", [2, 3, 5, 7], ["volleys", "finishing", "reactions", "decision"]),
  cqTurnMission("turnshot10", 10, "shot", [1, 2, 4, 6], ["volleys", "power", "reactions", "decision"]),

  {
    id: "bodyfeint", type: "ball", icon: "🕺", subs: ["dribble", "agility", "balance", "finishing"], tiers: [2, 3, 5, 7], max: 10, anim: "bodyfeint",
    title: ["Finta de corpo e arrancada", "Body feint and burst", "Finta de cuerpo y arranque"],
    desc: ["Em 10 tentativas, quantas vezes você engana o marcador jogando o ombro e o corpo para um lado, sai pelo outro com a bola e acerta o gol a 7 passos dele?", "Out of 10 tries, how many times do you fool the defender by dropping your shoulder and body one way, go the other way with the ball and hit the goal 7 steps behind them?", "De 10 intentos, ¿cuántas veces engañas al marcador tirando el hombro y el cuerpo hacia un lado, sales por el otro con el balón y aciertas el arco a 7 pasos de él?"],
    steps: [
      ["Coloque um cone ou uma cadeira no caminho: é o marcador. Use um gol, ou marque um de 3 passos de largura com dois chinelos ou num muro, 7 passos depois dele. Se tiver alguém da família, ele pode ser o marcador.", "Put a cone or a chair in your path: that's the defender. Use a goal, or mark one 3 steps wide with two flip-flops or on a wall, 7 steps behind it. If someone at home can join, they can be the defender.", "Pon un cono o una silla en el camino: es el marcador. Usa un arco, o marca uno de 3 pasos de ancho con dos chanclas o en un muro, 7 pasos detrás. Si alguien de tu familia puede, que haga de marcador."],
      ["Conduza até perto do marcador, com a bola bem perto do pé.", "Dribble up close to the defender, with the ball tight to your foot.", "Conduce hasta cerca del marcador, con el balón bien pegado al pie."],
      ["A finta é só com o corpo: jogue o ombro, o quadril e o peso para um lado, como se fosse sair por ali. A bola não se mexe.", "The feint is all body: drop your shoulder, hips and weight one way, as if going that way. The ball doesn't move.", "La finta es solo con el cuerpo: tira el hombro, la cadera y el peso hacia un lado, como si fueras a salir por ahí. El balón no se mueve."],
      ["O marcador foi junto? Na hora, empurre a bola para o outro lado com a parte de fora do pé e arranque.", "Did the defender go with it? Straight away, push the ball the other way with the outside of your foot and burst away.", "¿El marcador se fue con la finta? Al momento, empuja el balón hacia el otro lado con el exterior del pie y arranca."],
      ["Chute logo em seguida, sem parar a bola.", "Shoot straight away, without stopping the ball.", "Remata enseguida, sin parar el balón."],
      CQ_STEPS_5_5,
      ["Só conta se você passar pelo marcador e a bola entrar no gol.", "It only counts if you get past the defender and the ball goes in.", "Solo cuenta si pasas al marcador y el balón entra."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "wallgo", type: "ball", icon: "🧱", subs: ["short", "finishing", "reactions"], tiers: [2, 3, 5, 7], max: 10, anim: "wallgo",
    title: ["Tabelinha com a parede e chute", "Wall one-two and shot", "Pared con el muro y remate"],
    desc: ["Em 10 tentativas, quantas vezes você tabela com a parede, recebe a bola correndo e chuta de primeira no gol, a 7 passos dele?", "Out of 10 tries, how many times do you play a one-two off the wall, meet the ball on the run and shoot first time into the goal from 7 steps?", "De 10 intentos, ¿cuántas veces haces la pared con el muro, recibes el balón corriendo y rematas de primera al arco desde 7 pasos?"],
    steps: [
      ["Use um muro comprido. Mais à frente, ao lado dele, marque um gol de 3 passos de largura com dois chinelos. Sem gol? Mire em algo no chão: balde, caixa ou camisa.", "Use a long wall. Further along, beside it, mark a goal 3 steps wide with two flip-flops. No goal? Aim at something on the ground: a bucket, box or shirt.", "Usa un muro largo. Más adelante, a su lado, marca un arco de 3 pasos de ancho con dos chanclas. ¿Sin arco? Apunta a algo en el suelo: un balde, caja o camiseta."],
      ["Conduza a bola ao lado do muro, a uns 3 passos dele.", "Dribble the ball alongside the wall, about 3 steps from it.", "Conduce el balón junto al muro, a unos 3 pasos de él."],
      ["Passe na parede em diagonal, para a frente, com a parte de dentro do pé. A parede é o seu companheiro na tabelinha.", "Pass into the wall diagonally, forwards, with the inside of your foot. The wall is your teammate in the one-two.", "Pasa al muro en diagonal, hacia adelante, con el interior del pie. El muro es tu compañero en la pared."],
      ["Logo depois do passe, corra para a frente: a bola volta na diagonal e encontra você no caminho.", "Right after the pass, run forward: the ball comes back diagonally and meets you on the way.", "Justo después del pase, corre hacia adelante: el balón vuelve en diagonal y te encuentra en el camino."],
      ["Chute de primeira, sem dominar, a uns 7 passos do gol.", "Shoot first time, without a touch, about 7 steps from goal.", "Remata de primera, sin controlar, a unos 7 pasos del arco."],
      ["Faça 5 com o muro à sua esquerda e 5 com o muro à sua direita: assim você passa e chuta com os dois pés.", "Do 5 with the wall on your left and 5 with the wall on your right: that way you pass and shoot with both feet.", "Haz 5 con el muro a tu izquierda y 5 con el muro a tu derecha: así pasas y rematas con los dos pies."],
      ["Só conta se chutar de primeira e a bola entrar no gol.", "It only counts if you shoot first time and the ball goes in.", "Solo cuenta si rematas de primera y el balón entra."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "divinghead", type: "ball", icon: "🐟", subs: ["headfin", "courage", "jumping"], tiers: [2, 3, 5, 7], max: 10, anim: "divinghead",
    title: ["Peixinho no colchão", "Diving header on a mattress", "Palomita en el colchón"],
    desc: ["Em 10 bolas jogadas baixas à sua frente, quantas você cabeceia de peixinho, se jogando no colchão, e coloca no gol?", "Out of 10 low balls tossed in front of you, how many do you score with a diving header, landing on a mattress?", "De 10 balones bajos lanzados delante de ti, ¿cuántos metes en el arco de palomita, lanzándote al colchón?"],
    steps: [
      ["Só faça em cima de um colchão ou numa grama bem fofa, longe de móveis e paredes. Use bola leve: de plástico ou de borracha macia.", "Only do this on a mattress or very soft grass, away from furniture and walls. Use a light ball: plastic or soft rubber.", "Hazlo solo sobre un colchón o un césped bien blando, lejos de muebles y paredes. Usa un balón liviano: de plástico o de goma blanda."],
      ["Marque um gol do outro lado do colchão com dois chinelos, ou use uma parede.", "Mark a goal on the other side of the mattress with two flip-flops, or use a wall.", "Marca un arco al otro lado del colchón con dos chanclas, o usa una pared."],
      ["Fique agachado na beira do colchão. Alguém da família, ao lado do gol, joga a bola baixa com a mão, na altura da sua cintura. Sozinho? Jogue você mesmo a bola para o alto, um pouco à sua frente, e mergulhe nela quando ela descer.", "Crouch at the edge of the mattress. A family member, beside the goal, tosses the ball low by hand, at your waist height. On your own? Toss the ball up yourself, a little in front of you, and dive at it as it comes down.", "Ponte agachado en el borde del colchón. Alguien de tu familia, al lado del arco, te lanza el balón bajo con la mano, a la altura de tu cintura. ¿Solo? Lanza tú mismo el balón hacia arriba, un poco delante de ti, y lánzate a por él cuando baje."],
      ["Jogue-se para a frente com o corpo reto e acerte a bola com a testa, de olhos abertos, mirando o gol.", "Throw yourself forward with your body straight and hit the ball with your forehead, eyes open, aiming at the goal.", "Lánzate hacia adelante con el cuerpo recto y golpea el balón con la frente, con los ojos abiertos, apuntando al arco."],
      ["Tem que ser uma testada: na hora do contato, mexa o pescoço para a frente, como uma martelada. A impulsão das pernas já dá força, e o pescoço faz a bola sair ainda mais forte.", "It has to be a proper header: at the moment of contact, snap your neck forward, like a hammer blow. The push from your legs already gives it power, and your neck makes the ball fly off even harder.", "Tiene que ser un frentazo: en el momento del contacto, mueve el cuello hacia adelante, como un martillazo. El impulso de las piernas ya da fuerza, y el cuello hace que el balón salga todavía más fuerte."],
      ["Caia com os braços na frente para amortecer, nunca de cabeça.", "Land with your arms out in front to cushion the fall, never on your head.", "Cae con los brazos delante para amortiguar, nunca de cabeza."],
      ["Ficou fácil? Peça para jogar a bola um pouco mais longe de você.", "Too easy? Ask for the ball to be tossed a little further from you.", "¿Muy fácil? Pide que te lancen el balón un poco más lejos."],
      ["Conte as cabeçadas que entram no gol.", "Count the headers that go in.", "Cuenta los cabezazos que entran."],
    ],
    unit: ["gols", "goals", "goles"],
  },

  // ---------- Passes ----------
  cqWallMission("weak", 4, [10, 16, 22, 28]),
  cqWallMission("wall6", 6, [8, 13, 18, 24]),
  {
    id: "balloonwall", type: "ball", icon: "🎈", subs: ["short", "reactions", "concentration"], tiers: [3, 6, 10, 15], timer: { mode: "down", s: 60 },
    anim: "balloonwall", animArgs: { dist: 5 },
    title: ["Parede com bexiga (5 passos)", "Wall passes with a balloon (5 steps)", "Pared con globo (5 pasos)"],
    desc: [
      "Em 1 minuto, quantos passes de primeira na parede você faz, a 5 passos dela, mantendo uma bexiga no ar com as mãos?",
      "In 1 minute, how many one-touch wall passes can you make from 5 steps while keeping a balloon in the air with your hands?",
      "En 1 minuto, ¿cuántos pases de primera a la pared haces, a 5 pasos de ella, manteniendo un globo en el aire con las manos?",
    ],
    steps: [
      ["Encha uma bexiga e fique a 5 passos da parede.", "Blow up a balloon and stand 5 steps from a wall.", "Infla un globo y ponte a 5 pasos de la pared."],
      ["Bata na bexiga para cima com uma mão de cada vez: direita, esquerda, direita...", "Tap the balloon up with one hand at a time: right, left, right...", "Golpea el globo hacia arriba con una mano cada vez: derecha, izquierda, derecha..."],
      ["Ao mesmo tempo, passe a bola na parede com a parte de dentro do pé.", "At the same time, pass the ball against the wall with the inside of your foot.", "Al mismo tiempo, pasa el balón a la pared con el interior del pie."],
      ["Não pare a bola: quando ela voltar, devolva de primeira.", "Don't stop the ball: when it comes back, pass it first time.", "No pares el balón: cuando vuelva, devuélvelo de primera."],
      CQ_STEPS_ALTERNATE,
      ["A bexiga caiu ou você parou a bola? Recomece e continue a contagem de onde estava. Só conta o passe de primeira com a bexiga no ar.", "Balloon dropped or you stopped the ball? Restart and carry on counting from where you were. Only first-time passes with the balloon in the air count.", "¿Se cayó el globo o paraste el balón? Vuelve a empezar y sigue contando desde donde ibas. Solo cuenta el pase de primera con el globo en el aire."],
    ],
    unit: ["passes", "passes", "pases"],
  },
  cqWallMission("wall8", 8, [6, 10, 15, 20]),
  cqTurnMission("turnpass5", 5, "pass", [2, 3, 5, 7], ["volleys", "short", "reactions", "decision"]),
  cqTurnMission("turnpass10", 10, "pass", [1, 2, 4, 5], ["volleys", "long", "reactions", "decision"]),
  cqSoleMission("solepass1", 1, [6, 10, 14, 18]),
  cqSoleMission("solepass", 2, [5, 8, 11, 14]),
  cqMeasureMission("measure10", 10, [18, 14, 8, 4], ["short", "control"]),
  cqTwoFeetMission("twofeet", 5, [6, 10, 14, 18]),
  cqBucketMission("bucket3", 3, [2, 4, 6, 9], ["short", "control"]),
  {
    id: "orient", type: "ball", icon: "↪️", subs: ["control", "short"], tiers: [4, 7, 10, 14], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Domínio orientado", "Directional first touch", "Control orientado"],
    desc: ["Em 1 minuto, quantas vezes você acerta o alvo na parede, a 5 passos dela, dominando com a parte de dentro do pé já levando a bola para o lado antes de cada passe?", "In 1 minute, how many times can you hit the target on the wall from 5 steps, taking your first touch with the inside of your foot out to the side before each pass?", "En 1 minuto, ¿cuántas veces aciertas el blanco en la pared, a 5 pasos de ella, controlando con el interior del pie hacia un lado antes de cada pase?"],
    steps: [
      ["Marque um alvo na parede, de uns 2 palmos de largura: um quadrado de giz, fita ou uma camisa pendurada.", "Mark a target on the wall about 2 hand-spans wide: a chalk square, tape or a hanging shirt.", "Marca un blanco en la pared de unos 2 palmos de ancho: un cuadrado de tiza, cinta o una camiseta colgada."],
      ["Marque dois chinelos a 2 passos um do outro, a 5 passos da parede, com o alvo bem no meio deles.", "Mark two flip-flops 2 steps apart, 5 steps from the wall, with the target right between them.", "Marca dos chanclas a 2 pasos una de otra, a 5 pasos de la pared, con el blanco justo en medio."],
      ["Domine com a parte de dentro do pé, levando a bola até o outro chinelo, e passe dali.", "Control it with the inside of your foot, taking the ball across to the other flip-flop, and pass from there.", "Controla con el interior del pie, llevando el balón hasta la otra chancla, y pasa desde allí."],
      ["Indo para a direita, domine e passe com o pé direito. Indo para a esquerda, com o esquerdo.", "Going right, control and pass with your right foot. Going left, with your left.", "Hacia la derecha, controla y pasa con el pie derecho. Hacia la izquierda, con el izquierdo."],
      ["Só conta o passe que acerta o alvo, depois de um domínio para o lado.", "Only passes that hit the target, after a first touch to the side, count.", "Solo cuenta el pase que da en el blanco, después de un control hacia el lado."],
    ],
    unit: CQ_UNIT_HITS,
  },
  cqMeasureMission("measure15", 15, [24, 19, 12, 7], ["short", "control"]),
  cqBucketMission("bucket5", 5, [2, 3, 5, 7], ["short", "control"]),
  {
    id: "altinha", type: "ball", icon: "🏐", subs: ["control", "teamplay"], tiers: [5, 15, 30, 50], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Altinha", "Keep it up together", "Pelotita en el aire"],
    desc: ["Em 1 minuto, quantos toques você e um amigo dão, um para o outro, sem deixar a bola cair? Sem amigo, jogue com uma parede.", "In 1 minute, how many touches can you and a friend make, passing to each other, without letting the ball drop? No friend around? Play against a wall.", "En 1 minuto, ¿cuántos toques dan tú y un amigo, pasándosela, sin que caiga el balón? ¿Sin amigo? Juega contra una pared."],
    steps: [
      ["Chame um amigo ou alguém da família. Fiquem a 3 passos.", "Get a friend or family member. Stand 3 steps apart.", "Llama a un amigo o a alguien de tu familia. Pónganse a 3 pasos."],
      ["Sozinho? Fique a 2 passos de uma parede e mande a bola nela pelo alto. Ela volta e você toca de novo antes de cair no chão.", "On your own? Stand 2 steps from a wall and send the ball into it in the air. It comes back and you touch it again before it hits the ground.", "¿Solo? Ponte a 2 pasos de una pared y manda el balón contra ella por el aire. Vuelve y lo tocas otra vez antes de que caiga al suelo."],
      ["Pode usar pé, coxa, peito e cabeça. Mão não!", "Feet, thighs, chest and head are fine. No hands!", "Vale pie, muslo, pecho y cabeza. ¡Mano no!"],
      ["Conte todos os toques. Caiu? Continue a contagem de onde parou.", "Count every touch. Dropped it? Keep counting from where you were.", "Cuenta todos los toques. ¿Se cayó? Sigue contando desde donde ibas."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  cqMeasureMission("measure20", 20, [30, 25, 17, 8], ["long", "control"]),
  cqBucketMission("bucket8", 8, [1, 2, 4, 5], ["long", "control"]),
  cqTwoFeetMission("twofeet10", 10, [4, 7, 10, 13]),
  cqMeasureMission("measure25", 25, [36, 30, 21, 11], ["long", "control"]),

  {
    id: "bowling", type: "ball", icon: "🎳", subs: ["short", "composure", "concentration"], tiers: [3, 5, 7, 9], max: 10, anim: "bowling",
    title: ["Boliche com passe", "Passing bowling", "Bolos con pase"],
    desc: ["Em 10 passes rasteiros de 10 passos, numas 10 garrafas montadas como no boliche, quantos derrubam pelo menos uma?", "Out of 10 ground passes from 10 steps, at 10 bottles set up like bowling pins, how many knock down at least one?", "De 10 pases rasantes desde 10 pasos, a 10 botellas puestas como en los bolos, ¿cuántos tiran al menos una?"],
    steps: [
      ["Monte 10 garrafas PET vazias (ou cones) em triângulo, como no boliche: 1 na frente, depois uma fila de 2, uma de 3 e uma de 4, com um palmo entre elas. Ventou? Um pouco de água no fundo deixa elas em pé.", "Set up 10 empty plastic bottles (or cones) in a triangle, like bowling pins: 1 at the front, then a row of 2, a row of 3 and a row of 4, a hand's width apart. Windy? A little water in the bottom keeps them up.", "Monta 10 botellas de plástico vacías (o conos) en triángulo, como en los bolos: 1 delante, luego una fila de 2, una de 3 y una de 4, a un palmo entre ellas. ¿Hay viento? Un poco de agua en el fondo las mantiene de pie."],
      ["Fique a 10 passos da garrafa da frente.", "Stand 10 steps from the front bottle.", "Ponte a 10 pasos de la botella de delante."],
      ["Passe com a parte de dentro do pé, rasteiro: a bola não sai do chão.", "Pass with the inside of your foot, along the ground: the ball never leaves the floor.", "Pasa con el interior del pie, rasante: el balón no se levanta del suelo."],
      CQ_STEPS_5_5,
      ["Derrubou pelo menos uma garrafa? Vale 1. Arrume as garrafas antes do próximo passe.", "Knocked down at least one bottle? That's 1. Stand them back up before the next pass.", "¿Tiraste al menos una botella? Cuenta 1. Vuelve a ponerlas antes del próximo pase."],
      ["Derrubou todas de uma vez? É strike! Ficou fácil? Passe a contar só os passes que derrubam 5 ou mais.", "Knocked them all down at once? That's a strike! Too easy? Only count passes that knock down 5 or more.", "¿Las tiraste todas de una vez? ¡Es strike! ¿Muy fácil? Cuenta solo los pases que tiran 5 o más."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "bowlingshot", type: "ball", icon: "💥", subs: ["finishing", "power", "concentration"], tiers: [2, 3, 5, 7], max: 10, anim: "bowlingshot",
    title: ["Boliche com chute", "Shooting bowling", "Bolos con tiro"],
    desc: ["Em 10 chutes a meia altura, de 10 passos, numas 10 garrafas montadas como no boliche, quantos chegam pelo ar, sem quicar, e derrubam pelo menos uma?", "Out of 10 mid-height shots from 10 steps, at 10 bottles set up like bowling pins, how many get there through the air, without bouncing, and knock down at least one?", "De 10 tiros a media altura desde 10 pasos, a 10 botellas puestas como en los bolos, ¿cuántos llegan por el aire, sin botar, y tiran al menos una?"],
    steps: [
      CQ_STEPS_PINS,
      ["Fique a 10 passos da garrafa da frente.", "Stand 10 steps from the front bottle.", "Ponte a 10 pasos de la botella de delante."],
      ["Chute com a parte de dentro do pé. A bola vai a meia altura: pelo ar, baixinha, na altura das garrafas, sem quicar no chão antes.", "Shoot with the inside of your foot. The ball goes at mid-height: through the air, low, at the height of the bottles, without bouncing first.", "Dispara con el interior del pie. El balón va a media altura: por el aire, bajito, a la altura de las botellas, sin botar antes."],
      ["Para ela subir só um pouquinho: o pé de apoio ao lado da bola, o corpo levemente para trás e a parte de dentro do pé acertando a bola um pouco abaixo do meio.", "To lift it just a little: standing foot beside the ball, body leaning slightly back, and the inside of your foot striking the ball a little below the middle.", "Para que suba solo un poquito: el pie de apoyo al lado del balón, el cuerpo un poco hacia atrás y el interior del pie golpeando el balón un poco por debajo del centro."],
      CQ_STEPS_5_5,
      ["Só vale se a bola chegar nas garrafas pelo ar, sem quicar, e derrubar pelo menos uma. Arrume as garrafas antes do próximo chute.", "It only counts if the ball reaches the bottles through the air, without bouncing, and knocks down at least one. Stand them back up before the next shot.", "Solo cuenta si el balón llega a las botellas por el aire, sin botar, y tira al menos una. Vuelve a ponerlas antes del próximo tiro."],
      CQ_STEPS_STRIKE,
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "bowlingtrivela", type: "ball", icon: "🌀", subs: ["curve", "finishing", "composure"], tiers: [2, 3, 5, 7], max: 10, anim: "bowlingtrivela",
    title: ["Boliche de trivela", "Outside-foot bowling", "Bolos de trivela"],
    desc: ["Em 10 chutes de trivela, de 10 passos, numas 10 garrafas montadas como no boliche, quantos derrubam pelo menos uma?", "Out of 10 outside-foot shots from 10 steps, at 10 bottles set up like bowling pins, how many knock down at least one?", "De 10 tiros de trivela desde 10 pasos, a 10 botellas puestas como en los bolos, ¿cuántos tiran al menos una?"],
    steps: [
      CQ_STEPS_PINS,
      ["Fique a 10 passos da garrafa da frente.", "Stand 10 steps from the front bottle.", "Ponte a 10 pasos de la botella de delante."],
      ["Chute de trivela: com a parte de fora do pé, o lado do dedinho. O pé passa de dentro para fora e a bola sai girando, fazendo uma curva.", "Outside-foot shot: strike with the outside of your foot, the little-toe side. Your foot moves from inside to outside and the ball spins off, bending.", "Tiro de trivela: con el exterior del pie, el lado del dedo meñique. El pie pasa de dentro hacia fuera y el balón sale girando, haciendo una curva."],
      CQ_STEPS_TRIVELA_BODY,
      ["Pode ir rasteiro ou a meia altura. Mire um pouco para o lado e deixe a curva levar a bola até as garrafas.", "It can go along the ground or at mid-height. Aim a little to the side and let the bend carry the ball into the bottles.", "Puede ir rasante o a media altura. Apunta un poco hacia el lado y deja que la curva lleve el balón hasta las botellas."],
      CQ_STEPS_5_5,
      ["Só vale se for de trivela e derrubar pelo menos uma garrafa. Arrume as garrafas antes do próximo chute.", "It only counts if it's with the outside of your foot and knocks down at least one bottle. Stand them back up before the next shot.", "Solo cuenta si es de trivela y tira al menos una botella. Vuelve a ponerlas antes del próximo tiro."],
      CQ_STEPS_STRIKE,
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "bowlingheel", type: "ball", icon: "🦶", subs: ["finishing", "control", "balance"], tiers: [1, 2, 4, 6], max: 10, anim: "bowlingheel",
    title: ["Boliche de calcanhar", "Back-heel bowling", "Bolos de taco"],
    desc: ["Em 10 chutes de calcanhar, de costas, a 7 passos, numas 10 garrafas montadas como no boliche, quantos derrubam pelo menos uma?", "Out of 10 back-heels, with your back turned, from 7 steps, at 10 bottles set up like bowling pins, how many knock down at least one?", "De 10 taconazos, de espaldas, desde 7 pasos, a 10 botellas puestas como en los bolos, ¿cuántos tiran al menos una?"],
    steps: [
      CQ_STEPS_PINS,
      ["Fique de costas para as garrafas, a 7 passos da garrafa da frente. Deixe a bola um pouco atrás e ao lado do seu pé de apoio.", "Stand with your back to the bottles, 7 steps from the front one. Leave the ball a little behind and beside your standing foot.", "Ponte de espaldas a las botellas, a 7 pasos de la de delante. Deja el balón un poco detrás y al lado de tu pie de apoyo."],
      ["Olhe por cima do ombro para mirar. Leve o pé de chute um pouco para a frente e chute para trás com o calcanhar, firme, no meio da bola.", "Look over your shoulder to aim. Bring your kicking foot slightly forward, then strike backwards with your heel, firmly, through the middle of the ball.", "Mira por encima del hombro para apuntar. Lleva el pie de golpeo un poco hacia adelante y golpea hacia atrás con el talón, firme, en el centro del balón."],
      CQ_STEPS_5_5,
      ["Só vale se for de calcanhar e derrubar pelo menos uma garrafa. Arrume as garrafas antes do próximo chute.", "It only counts if it's a back-heel and knocks down at least one bottle. Stand them back up before the next one.", "Solo cuenta si es de taco y tira al menos una botella. Vuelve a ponerlas antes del próximo."],
      CQ_STEPS_STRIKE,
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "bowlingrabona", type: "ball", icon: "✍️", subs: ["curve", "finishing", "balance"], tiers: [1, 2, 4, 6], max: 10, anim: "bowlingrabona",
    title: ["Boliche de letra", "Rabona bowling", "Bolos de rabona"],
    desc: ["Em 10 chutes de letra, a 7 passos, numas 10 garrafas montadas como no boliche, quantos derrubam pelo menos uma?", "Out of 10 rabonas from 7 steps, at 10 bottles set up like bowling pins, how many knock down at least one?", "De 10 rabonas desde 7 pasos, a 10 botellas puestas como en los bolos, ¿cuántas tiran al menos una?"],
    steps: [
      CQ_STEPS_PINS,
      ["Fique a 7 passos da garrafa da frente.", "Stand 7 steps from the front bottle.", "Ponte a 7 pasos de la botella de delante."],
      ["Chute de letra: o pé de apoio fica ao lado da bola, um pouco à frente dela, e a perna de chute cruza por trás da perna de apoio para bater na bola.", "Rabona: your standing foot goes beside the ball, slightly ahead of it, and your kicking leg wraps behind the standing leg to strike the ball.", "Rabona: el pie de apoyo va al lado del balón, un poco por delante, y la pierna de golpeo cruza por detrás de la de apoyo para golpear el balón."],
      ["Comece devagar, com a bola parada, só acertando a bola. A força vem depois.", "Start slowly, with the ball still, just making clean contact. Power comes later.", "Empieza despacio, con el balón quieto, solo acertando el balón. La fuerza viene después."],
      CQ_STEPS_5_5,
      ["Só vale se for de letra e derrubar pelo menos uma garrafa. Arrume as garrafas antes do próximo chute.", "It only counts if it's a rabona and knocks down at least one bottle. Stand them back up before the next shot.", "Solo cuenta si es de rabona y tira al menos una botella. Vuelve a ponerlas antes del próximo tiro."],
      CQ_STEPS_STRIKE,
    ],
    unit: CQ_UNIT_HITS,
  },

  // ---------- Técnica ----------
  {
    id: "trap", type: "ball", icon: "🪶", subs: ["control", "reactions"], tiers: [3, 4, 6, 8], max: 10, anim: true,
    title: ["Domínio do alto", "Control from the air", "Control desde arriba"],
    desc: ["Em 10 bolas jogadas para cima, quantas você domina e a bola fica a até 1 passo de você?", "Out of 10 balls tossed up, how many do you control so the ball stays within 1 step of you?", "De 10 balones lanzados arriba, ¿cuántos controlas y el balón queda a 1 paso o menos?"],
    steps: [
      ["Jogue a bola para cima com as mãos.", "Toss the ball up with your hands.", "Lanza el balón hacia arriba con las manos."],
      ["Domine 5 com o pé direito e 5 com o esquerdo, com a parte de dentro do pé.", "Control 5 with your right foot and 5 with your left, using the inside of your foot.", "Controla 5 con el pie derecho y 5 con el izquierdo, con el interior del pie."],
      ["Amorteça: o pé ou a coxa \"desce\" junto com a bola.", "Cushion it: your foot or thigh \"gives\" with the ball.", "Amortigua: el pie o el muslo \"bajan\" con el balón."],
      CQ_STEPS_TRAP_HARDER,
    ],
    unit: ["domínios", "controls", "controles"],
  },
  {
    id: "keepyalt", type: "ball", icon: "🔄", subs: ["control", "balance"], tiers: [4, 10, 20, 35], anim: "keepy", animArgs: { alt: true },
    title: ["Embaixadinha com os dois pés", "Two-footed keep-ups", "Toques con los dos pies"],
    desc: ["Quantas embaixadinhas seguidas você faz alternando direito e esquerdo?", "How many keep-ups in a row can you do alternating right and left?", "¿Cuántos toques seguidos haces alternando derecho e izquierdo?"],
    steps: [
      ["Um toque com cada pé, sempre trocando.", "One touch with each foot, always switching.", "Un toque con cada pie, siempre cambiando."],
      ["Tocou duas vezes com o mesmo pé? Recomece a contagem.", "Two touches with the same foot? Start counting again.", "¿Dos toques con el mismo pie? Vuelve a empezar."],
      ["Tente 3 vezes e marque a melhor.", "Try 3 times and log your best.", "Intenta 3 veces y anota la mejor."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "chest", type: "ball", icon: "🫁", subs: ["control", "balance"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Domínio no peito", "Chest control", "Control de pecho"],
    desc: ["Em 10 bolas jogadas para cima, quantas você mata no peito e deixa no chão perto de você?", "Out of 10 balls tossed up, how many do you take on your chest and drop at your feet?", "De 10 balones lanzados arriba, ¿cuántos paras con el pecho y dejas en el suelo cerca tuyo?"],
    steps: [
      ["Jogue a bola alta, por cima da cabeça.", "Toss the ball high, above your head.", "Lanza el balón alto, por encima de la cabeza."],
      ["Abra os braços e arqueie o peito para trás quando a bola chegar.", "Open your arms and lean your chest back as the ball arrives.", "Abre los brazos e inclina el pecho hacia atrás cuando llegue el balón."],
      ["Vale se a bola cair a até 1 passo de você.", "It counts if the ball lands within 1 step of you.", "Vale si el balón cae a 1 paso o menos de ti."],
      CQ_STEPS_TRAP_HARDER,
    ],
    unit: ["domínios", "controls", "controles"],
  },
  cqWalkMission("walk5", 5, "foot", [1, 2, 4, 6], ["control", "short"]),
  {
    id: "trapweak", type: "ball", icon: "🦵", subs: ["control", "reactions"], tiers: [2, 3, 5, 7], max: 10,
    anim: "trap", animArgs: { note: ["fora do pé e coxa", "outside foot and thigh", "exterior y muslo"] },
    title: ["Domínio de fora e de coxa", "Outside-foot and thigh control", "Control con exterior y muslo"],
    desc: ["Em 10 bolas jogadas para cima, quantas você domina com a parte de fora do pé ou com a coxa, deixando a bola a até 1 passo?", "Out of 10 balls tossed up, how many do you control with the outside of your foot or your thigh, keeping it within 1 step?", "De 10 balones lanzados arriba, ¿cuántos controlas con el exterior del pie o con el muslo, dejándolo a 1 paso o menos?"],
    steps: [
      ["Jogue a bola para cima com as mãos.", "Toss the ball up with your hands.", "Lanza el balón hacia arriba con las manos."],
      ["Faça 5 com a parte de fora do pé e 5 com a coxa.", "Do 5 with the outside of your foot and 5 with your thigh.", "Haz 5 con el exterior del pie y 5 con el muslo."],
      CQ_STEPS_ALTERNATE,
      ["Conte os domínios que ficam a até 1 passo.", "Count the controls that stay within 1 step.", "Cuenta los controles que quedan a 1 paso o menos."],
      CQ_STEPS_TRAP_HARDER,
    ],
    unit: ["domínios", "controls", "controles"],
  },
  {
    id: "slalomweak", type: "ball", icon: "🩴", subs: ["carry", "balance"], tiers: [1, 2, 3, 5], timer: { mode: "down", s: 60 },
    anim: "slalom", animArgs: { note: ["só a parte de fora", "outside only", "solo el exterior"] },
    title: ["Slalom de parte de fora", "Outside-foot slalom", "Slalom con el exterior"],
    desc: ["Em 1 minuto, quantas idas e voltas você faz entre os 5 chinelos tocando a bola só com a parte de fora do pé?", "In 1 minute, how many round trips through the 5 flip-flops can you make touching the ball with the outside of your foot only?", "En 1 minuto, ¿cuántas idas y vueltas haces entre las 5 chanclas tocando el balón solo con el exterior del pie?"],
    steps: [
      ["Mesmos 5 chinelos do Slalom, um passo entre eles.", "Same 5 flip-flops as the Slalom, one step apart.", "Las mismas 5 chanclas del Slalom, a un paso entre ellas."],
      ["Só a parte de fora do pé toca a bola: o lado do dedinho.", "Only the outside of your foot touches the ball: the little-toe side.", "Solo el exterior del pie toca el balón: el lado del dedo chico."],
      ["Pode usar os dois pés, desde que seja sempre com a parte de fora.", "You can use both feet, as long as it's always the outside.", "Puedes usar los dos pies, siempre que sea con el exterior."],
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },
  {
    ...cqTrickMission("elastico", "🪢", ["Elástico", "Elastico", "Elástica"], [
      ["Coloque um adversário à frente: um cone, uma cadeira ou alguém da família.", "Put a defender in front of you: a cone, a chair or someone from your family.", "Pon un rival delante: un cono, una silla o alguien de tu familia."],
      ["Conduza até ele, toque a bola para fora com a parte de fora do pé, como se fosse passar por um lado, e puxe de volta com a parte de dentro, rapidinho, saindo pelo outro lado.", "Dribble up to it, push the ball out with the outside of your foot as if going one way, then snap it back with the inside, quickly, going past on the other side.", "Conduce hasta él, empuja el balón hacia afuera con el exterior del pie como si fueras a pasar por un lado, y tráelo de vuelta con el interior, rápido, saliendo por el otro lado."],
    ], true),
    anim: "elastico",
  },
  cqWalkMission("walk10", 10, "foot", [1, 2, 3, 5], ["control", "long"]),
  cqWalkMission("walkalt", 5, "alt", [1, 2, 3, 5], ["control", "balance"]),
  {
    ...cqTrickMission("roleta", "🎡", ["Roleta", "Roulette", "Ruleta"], [
      ["Coloque um cone à frente: ele é o adversário.", "Put a cone in front of you: it's the defender.", "Pon un cono delante: es el rival."],
      ["Conduza até o cone, pise na bola com um pé, gire o corpo de costas para o cone e puxe a bola com o outro pé, saindo pelo lado dele.", "Dribble up to the cone, step on the ball with one foot, spin with your back to the cone and drag the ball with the other foot, going past it.", "Conduce hasta el cono, pisa el balón con un pie, gira de espaldas al cono y arrástralo con el otro pie, saliendo por su lado."],
    ]),
    anim: "roleta",
  },
  {
    id: "headkeepy", type: "ball", icon: "🙆", subs: ["control", "concentration"], tiers: [2, 5, 10, 20], anim: true,
    title: ["Embaixadinha de cabeça", "Header keep-ups", "Toques de cabeza"],
    desc: ["Quantas embaixadinhas seguidas você faz só com a cabeça?", "How many keep-ups in a row can you do with your head only?", "¿Cuántos toques seguidos haces solo con la cabeza?"],
    steps: [
      CQ_STEPS_LIGHT_BALL,
      ["Toque com a testa, olhando para a bola, joelhos dobrados.", "Use your forehead, eyes on the ball, knees bent.", "Toca con la frente, mirando el balón, rodillas flexionadas."],
      ["Tente 3 vezes e marque a melhor.", "Try 3 times and log your best.", "Intenta 3 veces y anota la mejor."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  cqTrickMission("chapeu", "🎩", ["Chapéu", "Flick over", "Sombrero"],
    [
      ["Coloque um balde ou uma cadeira a 1 passo na sua frente. Ele é o marcador.", "Put a bucket or a chair 1 step in front of you. It is the defender.", "Pon un balde o una silla a 1 paso delante de ti. Es el defensor."],
      ["Enfie a ponta do pé por baixo da bola e levante, para ela passar por cima do balde.", "Slide your toe under the ball and lift it so it goes over the bucket.", "Mete la punta del pie debajo del balón y levántalo para que pase por encima del balde."],
      ["Passe correndo pelo lado do balde e domine a bola do outro lado.", "Run past the side of the bucket and control the ball on the other side.", "Pasa corriendo por el lado del balde y controla el balón del otro lado."],
    ]),
  {
    id: "solenutmeg", type: "ball", icon: "🦶", subs: ["dribble", "agility", "reactions", "composure"], tiers: [2, 3, 5, 7], max: 10, anim: "solenutmeg",
    title: ["Caneta com a sola", "Sole nutmeg", "Caño con la suela"],
    desc: ["Em 10 tentativas, com o adversário vindo de lado, quantas vezes você rola a bola para frente com a sola, puxa de lado quando ele tenta pegar e dá uma caneta nele?", "Out of 10 tries, with a defender coming from the side, how many times do you roll the ball forward with your sole, drag it sideways as they go for it and nutmeg them?", "De 10 intentos, con el rival viniendo de lado, ¿cuántas veces ruedas el balón hacia adelante con la suela, lo tiras de lado cuando intenta quitártelo y le haces un caño?"],
    steps: [
      ["Comece parado, com a sola do pé em cima da bola. O adversário não fica de frente: ele vem meio de lado para roubar a bola. Sozinho? Coloque dois chinelos a 1 passo um do outro, ao lado da sua frente, como as pernas dele.", "Start standing still, with your sole on the ball. The defender isn't square on: they come half from the side to win the ball. On your own? Put two flip-flops 1 step apart, just ahead and to the side, as their legs.", "Empieza quieto, con la suela sobre el balón. El rival no está de frente: viene medio de lado a robar el balón. ¿Solo? Pon dos chanclas a 1 paso una de otra, delante y a un lado, como sus piernas."],
      ["Primeiro, role a bola um pouco para frente com a sola, sem tirar o pé dela. É a isca: para pegar a bola, ele estica a perna e abre as pernas.", "First, roll the ball forward a little with your sole, without taking your foot off. It's the bait: to get it, they stretch a leg and open their legs.", "Primero, rueda el balón un poco hacia adelante con la suela, sin quitar el pie. Es el cebo: para quitarlo, estira la pierna y abre las piernas."],
      ["Depois, assim que ele fizer o movimento, puxe a bola de lado com a mesma sola, rápido, por entre as pernas dele: caneta! Se puxar antes dele se mexer, ele fecha as pernas.", "Then, as soon as they move, drag the ball sideways with the same sole, quickly, through their legs: nutmeg! Drag it before they move and they'll close their legs.", "Después, en cuanto haga el movimiento, tira el balón de lado con la misma suela, rápido, entre sus piernas: ¡caño! Si lo tiras antes de que se mueva, cierra las piernas."],
      ["Dê a volta por ele, pelo outro lado, e pegue a bola atrás dele.", "Go round them, on the other side, and pick the ball up behind them.", "Da la vuelta por el otro lado y recoge el balón detrás de él."],
      CQ_STEPS_5_5,
      ["Só conta se a bola passar entre as pernas dele (ou entre os chinelos) e você pegar ela de novo.", "It only counts if the ball goes between their legs (or the flip-flops) and you get it back.", "Solo cuenta si el balón pasa entre sus piernas (o entre las chanclas) y lo recuperas."],
    ],
    unit: CQ_UNIT_HITS,
  },
  cqWalkMission("walkhead", 5, "head", [1, 2, 3, 4], ["control", "headfin"]),

  {
    id: "toetaps", type: "ball", icon: "👣", subs: ["control", "agility", "balance"], tiers: [20, 35, 50, 65], timer: { mode: "down", s: 30 }, anim: "toetaps",
    title: ["Toquinhos de sola", "Toe taps", "Toques de suela"],
    desc: ["Em 30 segundos, quantas vezes você toca a sola em cima da bola, trocando de pé a cada toque?", "In 30 seconds, how many times can you tap the top of the ball with your sole, switching feet every touch?", "En 30 segundos, ¿cuántas veces tocas el balón por arriba con la suela, cambiando de pie en cada toque?"],
    steps: [
      ["Bola parada na sua frente. Fique na ponta dos pés, com os joelhos um pouco dobrados.", "Ball still in front of you. Stay on your toes, knees slightly bent.", "Balón quieto delante de ti. Ponte de puntillas, con las rodillas un poco flexionadas."],
      ["Toque de leve a sola em cima da bola com um pé e, enquanto ele volta, o outro já sobe: direito, esquerdo, direito...", "Tap the top of the ball lightly with one sole and, as it comes back down, the other foot is already going up: right, left, right...", "Toca suave el balón por arriba con una suela y, mientras baja, el otro pie ya sube: derecho, izquierdo, derecho..."],
      ["A bola fica parada no lugar: toque leve, sem pisar com força.", "The ball stays where it is: a light tap, don't stamp on it.", "El balón se queda en su sitio: toque suave, sin pisar fuerte."],
      ["Cada toque vale 1. A bola fugiu? Arrume e continue a contagem.", "Each tap counts as 1. Ball got away? Put it back and keep counting.", "Cada toque cuenta 1. ¿Se escapó el balón? Acomódalo y sigue contando."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "solereturn", type: "ball", icon: "🔙", subs: ["control", "carry", "balance"], tiers: [1, 2, 3, 4], timer: { mode: "down", s: 30 }, anim: "solereturn",
    title: ["Vai conduzindo, volta puxando", "Dribble out, drag back", "Ida conduciendo, vuelta arrastrando"],
    desc: ["Em 30 segundos, quantas idas e voltas você faz entre dois chinelos a 5 passos, indo conduzindo a bola e voltando de costas, puxando ela com a sola?", "In 30 seconds, how many round trips can you make between two flip-flops 5 steps apart, dribbling out and coming back walking backwards, dragging the ball with your sole?", "En 30 segundos, ¿cuántas idas y vueltas haces entre dos chanclas a 5 pasos, yendo conduciendo y volviendo de espaldas, arrastrando el balón con la suela?"],
    steps: [
      ["Coloque dois chinelos a 5 passos um do outro.", "Put two flip-flops 5 steps apart.", "Pon dos chanclas a 5 pasos una de otra."],
      ["Vá conduzindo a bola com o peito do pé, a parte de cima, onde fica o cadarço, até o outro chinelo, e pare ela com a sola.", "Dribble the ball with your laces, the top of your foot, up to the other flip-flop, and stop it with your sole.", "Ve conduciendo el balón con el empeine, la parte de arriba del pie, donde van los cordones, hasta la otra chancla, y páralo con la suela."],
      ["Volte andando de costas, sem virar, puxando a bola com a sola: pise em cima, role ela para trás, dê um passinho para trás e repita até o primeiro chinelo.", "Come back walking backwards, without turning, dragging the ball with your sole: step on it, roll it back, take a little step back and repeat until the first flip-flop.", "Vuelve caminando de espaldas, sin girar, arrastrando el balón con la suela: písalo, ruédalo hacia atrás, da un pasito atrás y repite hasta la primera chancla."],
      ["Olhe para a frente, não só para a bola. Uma volta puxando com o pé direito, a próxima com o esquerdo.", "Look ahead, not just at the ball. One trip dragging with your right foot, the next with your left.", "Mira al frente, no solo al balón. Una vuelta arrastrando con el pie derecho, la siguiente con el izquierdo."],
      ["Ida e volta vale 1. Só conta se a bola não escapar da sola na volta.", "There and back counts as 1. It only counts if the ball doesn't get away from your sole on the way back.", "Ida y vuelta cuenta 1. Solo cuenta si el balón no se escapa de la suela en la vuelta."],
    ],
    unit: CQ_UNIT_TRIPS,
  },
  {
    id: "tiktak", type: "ball", icon: "🕰️", subs: ["control", "agility"], tiers: [20, 35, 50, 65], timer: { mode: "down", s: 30 }, anim: "tiktak",
    title: ["Tique-taque", "Tick-tock", "Tic-tac"],
    desc: ["Em 30 segundos, quantas vezes você passa a bola de um pé para o outro com a parte de dentro, parado no lugar?", "In 30 seconds, how many times can you pass the ball from one foot to the other with the inside, standing on the spot?", "En 30 segundos, ¿cuántas veces pasas el balón de un pie al otro con el interior, quieto en el sitio?"],
    steps: [
      ["Pés afastados, um pouco mais que a largura dos ombros, na ponta dos pés.", "Feet apart, a little wider than your shoulders, on your toes.", "Pies separados, un poco más que el ancho de los hombros, de puntillas."],
      ["Toque a bola com a parte de dentro de um pé para o outro, e de volta. Toques curtos e rápidos: a bola anda só um palmo.", "Tap the ball with the inside of one foot across to the other, and back. Short, quick touches: the ball only moves a hand's width.", "Toca el balón con el interior de un pie hacia el otro, y de vuelta. Toques cortos y rápidos: el balón se mueve solo un palmo."],
      ["Olhe para a frente de vez em quando, não só para a bola.", "Look up every now and then, not just at the ball.", "Mira al frente de vez en cuando, no solo al balón."],
      ["Cada toque vale 1. A bola fugiu? Arrume e continue a contagem.", "Each touch counts as 1. Ball got away? Put it back and keep counting.", "Cada toque cuenta 1. ¿Se escapó el balón? Acomódalo y sigue contando."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "figure8", type: "ball", icon: "♾️", subs: ["carry", "agility", "balance"], tiers: [3, 5, 7, 9], timer: { mode: "down", s: 60 }, anim: "figure8",
    title: ["Oito com bola", "Figure of eight", "Ocho con balón"],
    desc: ["Em 1 minuto, quantos 8 você faz conduzindo a bola em volta de dois chinelos a 3 passos um do outro?", "In 1 minute, how many figures of eight can you dribble around two flip-flops 3 steps apart?", "En 1 minuto, ¿cuántos ochos haces conduciendo el balón alrededor de dos chanclas a 3 pasos una de otra?"],
    steps: [
      ["Coloque dois chinelos a 3 passos um do outro.", "Put two flip-flops 3 steps apart.", "Pon dos chanclas a 3 pasos una de otra."],
      ["Conduza em volta de um, cruze pelo meio e dê a volta no outro: o caminho desenha um 8.", "Dribble round one, cross through the middle and go round the other: your path draws an 8.", "Conduce alrededor de una, cruza por el medio y da la vuelta a la otra: el camino dibuja un 8."],
      ["Nas curvas, use a parte de dentro e a parte de fora do pé, com toques curtos e a bola sempre perto.", "On the bends, use the inside and the outside of your foot, with short touches and the ball always close.", "En las curvas, usa el interior y el exterior del pie, con toques cortos y el balón siempre cerca."],
      ["Use os dois pés.", "Use both feet.", "Usa los dos pies."],
      ["Cada 8 completo vale 1. A bola tocou no chinelo? Esse 8 não conta.", "Each full 8 counts as 1. Ball touched a flip-flop? That 8 doesn't count.", "Cada 8 completo cuenta 1. ¿El balón tocó una chancla? Ese 8 no cuenta."],
    ],
    unit: ["oitos", "eights", "ochos"],
  },
  {
    id: "vpull", type: "ball", icon: "✌️", subs: ["control", "dribble", "balance"], tiers: [8, 12, 16, 20], timer: { mode: "down", s: 30 }, anim: "vpull",
    title: ["Puxada em V", "V drag-back", "Arrastre en V"],
    desc: ["Em 30 segundos, quantos V você faz: puxa a bola para trás com a sola e empurra na diagonal com a parte de dentro do mesmo pé, trocando de pé a cada V?", "In 30 seconds, how many Vs can you do: drag the ball back with your sole and push it diagonally with the inside of the same foot, switching feet every V?", "En 30 segundos, ¿cuántas V haces: arrastras el balón hacia atrás con la suela y lo empujas en diagonal con el interior del mismo pie, cambiando de pie en cada V?"],
    steps: [
      ["Comece com a bola na frente do pé direito.", "Start with the ball in front of your right foot.", "Empieza con el balón delante del pie derecho."],
      ["Puxe a bola para trás com a sola do pé direito.", "Drag the ball back with the sole of your right foot.", "Arrastra el balón hacia atrás con la suela del pie derecho."],
      ["Com a parte de dentro do mesmo pé, empurre a bola na diagonal, para a frente do pé esquerdo. O caminho da bola desenha um V.", "With the inside of the same foot, push the ball diagonally, in front of your left foot. The ball's path draws a V.", "Con el interior del mismo pie, empuja el balón en diagonal, delante del pie izquierdo. El camino del balón dibuja una V."],
      ["Agora o pé esquerdo faz o mesmo: puxa com a sola e empurra na diagonal para a frente do direito.", "Now your left foot does the same: drag back with the sole and push diagonally in front of your right.", "Ahora el pie izquierdo hace lo mismo: arrastra con la suela y empuja en diagonal delante del derecho."],
      ["Cada V vale 1. A bola fugiu? Arrume e continue a contagem.", "Each V counts as 1. Ball got away? Put it back and keep counting.", "Cada V cuenta 1. ¿Se escapó el balón? Acomódalo y sigue contando."],
    ],
    unit: ["V", "Vs", "V"],
  },
  {
    id: "croqueta", type: "ball", icon: "🔀", subs: ["dribble", "agility", "balance"], tiers: [15, 25, 35, 45], timer: { mode: "down", s: 60 }, anim: "croqueta",
    title: ["Croqueta", "La Croqueta", "Croqueta"],
    desc: ["Em 1 minuto, quantas croquetas você faz andando de lado entre dois chinelos, passando a bola de um pé para o outro?", "In 1 minute, how many croquetas can you do moving sideways between two flip-flops, passing the ball from one foot to the other?", "En 1 minuto, ¿cuántas croquetas haces moviéndote de lado entre dos chanclas, pasando el balón de un pie al otro?"],
    steps: [
      ["Coloque dois chinelos a 5 passos um do outro. Fique entre eles, com o corpo virado para a frente e os chinelos dos seus lados.", "Put two flip-flops 5 steps apart. Stand between them, facing forward, with the flip-flops to your sides.", "Pon dos chanclas a 5 pasos una de otra. Ponte entre ellas, mirando al frente, con las chanclas a tus lados."],
      ["A croqueta é o drible do Iniesta: com a parte de dentro de um pé, passe a bola rápido para o outro pé.", "The croqueta is Iniesta's move: with the inside of one foot, pass the ball quickly to your other foot.", "La croqueta es el regate de Iniesta: con el interior de un pie, pasa el balón rápido al otro pie."],
      ["A bola chegou no outro pé? Dê um passo para o lado, passando por ela, e passe de novo. Toque, passo, toque, passo...", "Ball reached your other foot? Side-step past it and pass again. Touch, step, touch, step...", "¿El balón llegó al otro pie? Da un paso al lado, pasando por él, y pasa otra vez. Toque, paso, toque, paso..."],
      ["Chegou no chinelo? Volte para o outro lado, agora passando com o outro pé.", "Reached the flip-flop? Head back the other way, now passing with your other foot.", "¿Llegaste a la chancla? Vuelve hacia el otro lado, ahora pasando con el otro pie."],
      ["Cada passe de um pé para o outro vale 1. A bola fugiu? Arrume e continue a contagem.", "Each pass from one foot to the other counts as 1. Ball got away? Put it back and keep counting.", "Cada pase de un pie al otro cuenta 1. ¿Se escapó el balón? Acomódalo y sigue contando."],
    ],
    unit: ["croquetas", "croquetas", "croquetas"],
  },
  {
    id: "aroundworld", type: "ball", icon: "🌍", subs: ["control", "balance", "agility"], tiers: [1, 2, 4, 6], max: 10, anim: "aroundworld",
    title: ["Volta ao mundo", "Around the world", "Vuelta al mundo"],
    desc: ["Em 10 tentativas, quantas vezes você levanta a bola, dá uma volta inteira com o pé em volta dela no ar e ainda dá mais um toque antes de ela cair?", "Out of 10 tries, how many times do you flick the ball up, take your foot all the way round it in the air and still touch it again before it drops?", "De 10 intentos, ¿cuántas veces levantas el balón, das una vuelta entera con el pie alrededor de él en el aire y aún le das otro toque antes de que caiga?"],
    steps: [
      ["Comece com algumas embaixadinhas para pegar o ritmo.", "Start with a few keep-ups to get the rhythm.", "Empieza con unos toques para agarrar el ritmo."],
      ["Dê um toque um pouco mais forte, para a bola subir até a altura da cintura.", "Give it a slightly harder touch, so the ball rises to waist height.", "Dale un toque un poco más fuerte, para que el balón suba hasta la cintura."],
      ["Enquanto ela está no ar, dê uma volta inteira com o pé em volta da bola, sem tocar nela.", "While it's in the air, take your foot all the way round the ball, without touching it.", "Mientras está en el aire, da una vuelta entera con el pie alrededor del balón, sin tocarlo."],
      ["Antes de ela cair, dê mais um toque, com qualquer pé, e continue.", "Before it drops, touch it again, with either foot, and keep going.", "Antes de que caiga, dale otro toque, con cualquier pie, y sigue."],
      ["Faça só com o seu pé dominante, o que você tem mais confiança.", "Only use your strong foot, the one you trust most.", "Hazlo solo con tu pie dominante, el que te da más confianza."],
      ["Só conta se você der o toque depois da volta, sem a bola cair.", "It only counts if you touch the ball again after the turn, without it dropping.", "Solo cuenta si das el toque después de la vuelta, sin que caiga el balón."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "lambreta", type: "ball", icon: "🌈", subs: ["dribble", "agility", "control"], tiers: [1, 2, 4, 6], max: 10, anim: "lambreta",
    title: ["Lambreta", "Rainbow flick", "Lambretta"],
    desc: ["Em 10 tentativas, quantas vezes você joga a bola por cima da própria cabeça com o calcanhar e domina ela do outro lado?", "Out of 10 tries, how many times do you flick the ball over your own head with your heel and control it on the other side?", "De 10 intentos, ¿cuántas veces lanzas el balón por encima de tu cabeza con el talón y lo controlas del otro lado?"],
    steps: [
      ["Bola na sua frente. Pise nela com a sola do pé da frente.", "Ball in front of you. Put the sole of your front foot on it.", "Balón delante de ti. Písalo con la suela del pie de adelante."],
      ["Role a bola para trás com essa sola até ela subir no calcanhar do outro pé, que fica atrás.", "Roll the ball back with that sole until it rides up onto the heel of your other foot, behind it.", "Rueda el balón hacia atrás con esa suela hasta que suba al talón del otro pie, que queda atrás."],
      ["Dê um pulinho e levante o calcanhar de trás com força: a bola sobe por trás e passa por cima da sua cabeça.", "Hop and kick your back heel up hard: the ball goes up behind you and over your head.", "Da un saltito y levanta fuerte el talón de atrás: el balón sube por detrás y pasa por encima de tu cabeza."],
      ["Corra para a frente e domine a bola do outro lado.", "Run forward and control the ball on the other side.", "Corre hacia adelante y controla el balón del otro lado."],
      ["Faça só com o seu pé dominante, o que você tem mais confiança.", "Only use your strong foot, the one you trust most.", "Hazlo solo con tu pie dominante, el que te da más confianza."],
      ["Comece devagar. A velocidade vem depois.", "Start slowly. Speed comes later.", "Empieza despacio. La velocidad viene después."],
      ["Só conta se a bola passar por cima da sua cabeça e você dominar.", "It only counts if the ball goes over your head and you control it.", "Solo cuenta si el balón pasa por encima de tu cabeza y lo controlas."],
    ],
    unit: CQ_UNIT_HITS,
  },

  // ---------- Defesa ----------
  {
    id: "sidestep", type: "move", icon: "↔️", subs: ["standing", "agility"], tiers: [8, 12, 16, 20], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Passo lateral", "Defensive shuffle", "Paso lateral"],
    desc: ["Em 30 segundos, quantas vezes você toca os chinelos deslizando de lado, sem cruzar os pés?", "In 30 seconds, how many times can you touch the flip-flops shuffling sideways, without crossing your feet?", "En 30 segundos, ¿cuántas veces tocas las chanclas deslizándote de lado, sin cruzar los pies?"],
    steps: [
      ["Dois chinelos a 3 passos um do outro.", "Two flip-flops 3 steps apart.", "Dos chanclas a 3 pasos una de otra."],
      ["Joelhos dobrados, como na marcação. Deslize de lado e toque o chinelo com a mão.", "Knees bent, like when defending. Shuffle sideways and touch the flip-flop with your hand.", "Rodillas flexionadas, como al marcar. Deslízate de lado y toca la chancla con la mano."],
      ["Cada toque vale 1.", "Each touch counts as 1.", "Cada toque cuenta 1."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "backrun", type: "move", icon: "🔙", subs: ["recovery", "acceleration", "awareness"], tiers: [3, 5, 7, 9], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Recua de costas", "Backpedal and sprint", "Retrocede de espaldas"],
    desc: ["Em 30 segundos, quantas vezes você vai 5 passos de costas e volta correndo de frente?", "In 30 seconds, how many times can you backpedal 5 steps and sprint back forwards?", "En 30 segundos, ¿cuántas veces vas 5 pasos de espaldas y vuelves corriendo de frente?"],
    steps: [
      ["Duas marcas a 5 passos, num lugar sem nada no chão.", "Two markers 5 steps apart, somewhere clear.", "Dos marcas a 5 pasos, en un lugar despejado."],
      ["Vá de costas olhando para a frente, com passos curtos.", "Go backwards looking forwards, with short steps.", "Ve de espaldas mirando al frente, con pasos cortos."],
      ["Ida de costas e volta de frente vale 1.", "Back and forth counts as 1.", "Ida de espaldas y vuelta de frente cuenta 1."],
    ],
    unit: CQ_UNIT_TRIPS,
  },
  {
    id: "intercept", type: "ball", icon: "✋", subs: ["interceptions", "reactions"], tiers: [1, 3, 5, 8], timer: { mode: "down", s: 60 }, helper: true, anim: true,
    title: ["Interceptação", "Interception", "Intercepción"],
    desc: ["Em 1 minuto, quantos passes de alguém da família você corta antes de chegarem à parede?", "In 1 minute, how many of a family member's passes can you cut out before they reach the wall?", "En 1 minuto, ¿cuántos pases de alguien de tu familia cortas antes de que lleguen a la pared?"],
    steps: [
      ["A pessoa fica a 6 passos da parede e passa a bola para ela.", "The other person stands 6 steps from a wall and passes at it.", "La otra persona se pone a 6 pasos de la pared y pasa hacia ella."],
      ["Você fica do lado, a 3 passos da linha do passe, e corta com o pé.", "You stand to the side, 3 steps from the line of the pass, and cut it out with your foot.", "Tú te pones al lado, a 3 pasos de la línea del pase, y lo cortas con el pie."],
      ["Cada bola cortada vale 1.", "Each ball cut out counts as 1.", "Cada balón cortado cuenta 1."],
    ],
    unit: ["cortes", "interceptions", "cortes"],
  },
  {
    id: "shadow", type: "ball", icon: "👤", subs: ["awareness", "standing"], tiers: [6, 4, 2, 0], lower: true, max: 30, timer: { mode: "down", s: 60 }, helper: true, anim: true,
    title: ["Marcação sombra", "Shadow marking", "Marca sombra"],
    desc: ["Em 1 minuto, quantas vezes alguém da família passa por você conduzindo a bola? Quanto menos, melhor!", "In 1 minute, how many times does a family member get past you with the ball? The fewer, the better!", "En 1 minuto, ¿cuántas veces alguien de tu familia te pasa con el balón? ¡Cuantas menos, mejor!"],
    steps: [
      ["A pessoa tenta passar por você e chegar a uma linha de 5 passos.", "The other person tries to get past you to a line 5 steps wide.", "La otra persona intenta pasarte y llegar a una línea de 5 pasos."],
      ["Fique de lado, joelhos dobrados, acompanhando sem dar o bote cedo.", "Stay side-on, knees bent, tracking without diving in early.", "Quédate de perfil, rodillas flexionadas, acompañando sin entrar antes de tiempo."],
      ["Cada vez que ela passa da linha conta 1.", "Each time they cross the line counts as 1.", "Cada vez que cruza la línea cuenta 1."],
    ],
    unit: ["vezes que passou", "times beaten", "veces que pasó"],
  },
  {
    id: "clearance", type: "ball", icon: "🧹", subs: ["awareness", "power"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Afasta de primeira", "First-time clearance", "Despeje de primera"],
    desc: ["Em 10 bolas que voltam da parede, quantas você manda de primeira acima da marca alta?", "Out of 10 balls coming back off the wall, how many do you send first time above the high mark?", "De 10 balones que vuelven de la pared, ¿cuántos mandas de primera por encima de la marca alta?"],
    steps: [
      ["Faça uma marca alta na parede, mais alta que você.", "Make a high mark on the wall, higher than you.", "Haz una marca alta en la pared, más alta que tú."],
      ["Passe na parede e, quando a bola voltar, chute sem dominar: alto e longe.", "Pass against the wall and when it comes back, kick it without a touch: high and far.", "Pasa a la pared y cuando vuelva, patea sin controlar: alto y lejos."],
      CQ_STEPS_5_5,
      ["Conte as bolas acima da marca.", "Count the balls above the mark.", "Cuenta los balones por encima de la marca."],
    ],
    unit: CQ_UNIT_HITS,
  },

  // ---------- Físico ----------
  {
    id: "squats", type: "move", icon: "🏋️", subs: ["strength", "stamina"], tiers: [10, 15, 20, 25], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Agachamento", "Squats", "Sentadillas"],
    desc: ["Em 30 segundos, quantos agachamentos você faz?", "In 30 seconds, how many squats can you do?", "En 30 segundos, ¿cuántas sentadillas haces?"],
    steps: [
      ["Pés na largura dos ombros, braços para a frente.", "Feet shoulder-width apart, arms out in front.", "Pies a la anchura de los hombros, brazos al frente."],
      ["Desça como se fosse sentar numa cadeira, com as costas retas.", "Go down as if sitting on a chair, back straight.", "Baja como si te sentaras en una silla, con la espalda recta."],
      ["Desceu e subiu? Vale 1.", "Down and up? That's 1.", "¿Bajaste y subiste? Cuenta 1."],
    ],
    unit: CQ_UNIT_REPS,
  },
  {
    id: "plank", type: "move", icon: "🪵", subs: ["strength", "balance"], tiers: [15, 30, 45, 60], timer: { mode: "up" }, anim: true,
    title: ["Prancha", "Plank", "Plancha"],
    desc: ["Quanto tempo você aguenta na prancha, com o corpo reto?", "How long can you hold a plank with your body straight?", "¿Cuánto tiempo aguantas en plancha con el cuerpo recto?"],
    steps: [
      ["Apoie os antebraços e as pontas dos pés no chão.", "Rest on your forearms and toes.", "Apoya los antebrazos y las puntas de los pies."],
      ["Corpo reto como uma tábua: sem levantar nem baixar o bumbum.", "Body straight like a board: hips not too high or too low.", "Cuerpo recto como una tabla: sin subir ni bajar la cadera."],
      ["Aperte Iniciar. Saiu da posição? Aperte Parar.", "Press Start. Lost the position? Press Stop.", "Pulsa Iniciar. ¿Perdiste la posición? Pulsa Parar."],
    ],
    unit: CQ_UNIT_SECONDS,
  },
  {
    id: "rope", type: "move", icon: "🪢", subs: ["stamina", "jumping"], tiers: [20, 40, 60, 80], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Pular corda", "Jump rope", "Saltar la cuerda"],
    desc: ["Em 1 minuto, quantos pulos de corda você dá?", "In 1 minute, how many rope jumps can you do?", "En 1 minuto, ¿cuántos saltos de cuerda das?"],
    steps: [
      ["Sem corda? Pule fingindo que tem, girando os pulsos.", "No rope? Jump pretending you have one, turning your wrists.", "¿Sin cuerda? Salta como si tuvieras una, girando las muñecas."],
      ["Pulos baixinhos, na ponta dos pés.", "Small jumps, on your toes.", "Saltos bajitos, en puntas de pie."],
      ["Errou? Continue a contagem de onde parou.", "Missed? Keep counting from where you were.", "¿Fallaste? Sigue contando desde donde ibas."],
    ],
    unit: ["pulos", "jumps", "saltos"],
  },
  {
    id: "stepup", type: "move", icon: "🪜", subs: ["strength", "stamina"], tiers: [10, 15, 20, 25], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Sobe-degrau", "Step-ups", "Sube escalón"],
    desc: ["Em 30 segundos, quantas vezes você sobe e desce de um degrau?", "In 30 seconds, how many times can you step up and down a step?", "En 30 segundos, ¿cuántas veces subes y bajas un escalón?"],
    steps: [
      ["Use um degrau firme e baixo. Nada de cadeira!", "Use a low, sturdy step. No chairs!", "Usa un escalón bajo y firme. ¡Nada de sillas!"],
      ["Suba com um pé, depois o outro. Desça do mesmo jeito.", "Step up with one foot, then the other. Step down the same way.", "Sube con un pie, después el otro. Baja igual."],
      ["Subiu e desceu? Vale 1.", "Up and down? That's 1.", "¿Subiste y bajaste? Cuenta 1."],
    ],
    unit: CQ_UNIT_REPS,
  },
  {
    id: "onefoot", type: "move", icon: "🦩", subs: ["balance", "jumping"], tiers: [8, 14, 20, 26], timer: { mode: "down", s: 30 }, anim: "hops", animArgs: { oneFoot: true },
    title: ["Pula-linha num pé só", "One-foot line hops", "Salta la línea a un pie"],
    desc: ["Em 30 segundos, quantos pulos de um lado para o outro da linha você dá num pé só?", "In 30 seconds, how many side-to-side hops over a line can you do on one foot?", "En 30 segundos, ¿cuántos saltos de lado a lado de la línea das a un pie?"],
    steps: [
      ["Mesma linha do Pula-linha.", "Same line as Line hops.", "La misma línea de Salta la línea."],
      ["15 segundos num pé, 15 segundos no outro.", "15 seconds on one foot, 15 on the other.", "15 segundos en un pie, 15 en el otro."],
      ["Cada pulo vale 1.", "Each hop counts as 1.", "Cada salto cuenta 1."],
    ],
    unit: ["pulos", "hops", "saltos"],
  },
  {
    id: "situps", type: "move", icon: "🧘", subs: ["strength", "stamina"], tiers: [8, 12, 16, 20], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Abdominal", "Sit-ups", "Abdominales"],
    desc: ["Em 30 segundos, quantos abdominais você faz?", "In 30 seconds, how many sit-ups can you do?", "En 30 segundos, ¿cuántos abdominales haces?"],
    steps: [
      ["Deite com os joelhos dobrados e os pés no chão.", "Lie down with knees bent and feet on the floor.", "Acuéstate con las rodillas flexionadas y los pies en el suelo."],
      ["Mãos no peito. Suba até os cotovelos chegarem perto dos joelhos.", "Hands on your chest. Come up until your elbows get near your knees.", "Manos en el pecho. Sube hasta que los codos lleguen cerca de las rodillas."],
      ["Subiu e desceu? Vale 1.", "Up and down? That's 1.", "¿Subiste y bajaste? Cuenta 1."],
    ],
    unit: CQ_UNIT_REPS,
  },
  {
    id: "lunges", type: "move", icon: "🚶", subs: ["strength", "balance"], tiers: [8, 12, 16, 20], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Passada", "Lunges", "Zancadas"],
    desc: ["Em 30 segundos, quantas passadas você faz alternando as pernas?", "In 30 seconds, how many lunges can you do alternating legs?", "En 30 segundos, ¿cuántas zancadas haces alternando las piernas?"],
    steps: [
      ["Dê um passo grande para a frente e desça o joelho de trás quase até o chão.", "Take a big step forward and lower your back knee almost to the floor.", "Da un paso grande al frente y baja la rodilla de atrás casi hasta el suelo."],
      ["Volte e troque de perna.", "Come back and switch legs.", "Vuelve y cambia de pierna."],
      ["Cada passada vale 1.", "Each lunge counts as 1.", "Cada zancada cuenta 1."],
    ],
    unit: CQ_UNIT_REPS,
  },

  // ---------- Inteligência ----------
  {
    id: "contra", type: "quiz", quiz: "contra", icon: "🏃‍♂️", subs: ["decision", "teamplay"], tiers: [1, 2, 3],
    title: ["Contra-ataque", "Counter-attack", "Contraataque"],
    desc: ["3 perguntas sobre atacar rápido depois de roubar a bola.", "3 questions about attacking fast after winning the ball.", "3 preguntas sobre atacar rápido tras robar el balón."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "setpiece", type: "quiz", quiz: "bolaParada", icon: "🚩", subs: ["positioning", "communication"], tiers: [1, 2, 3],
    title: ["Bola parada", "Set pieces", "Balón parado"],
    desc: ["3 perguntas sobre escanteio, falta e lateral.", "3 questions about corners, free kicks and throw-ins.", "3 preguntas sobre córner, tiro libre y saque de banda."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "offball", type: "quiz", quiz: "semBola", icon: "👻", subs: ["positioning", "vision"], tiers: [1, 2, 3],
    title: ["Jogo sem bola", "Off-the-ball play", "Juego sin balón"],
    desc: ["3 perguntas sobre se desmarcar e pedir a bola.", "3 questions about getting free and asking for the ball.", "3 preguntas sobre desmarcarse y pedir el balón."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "rules", type: "quiz", quiz: "regras", icon: "📜", subs: ["reading", "fairplay"], tiers: [1, 2, 3],
    title: ["Regras do jogo", "Laws of the game", "Reglas del juego"],
    desc: ["3 perguntas sobre impedimento, mão, lateral e tiro de meta.", "3 questions about offside, handball, throw-ins and goal kicks.", "3 preguntas sobre fuera de juego, mano, saque de banda y saque de puerta."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "poscb", type: "quiz", quiz: "zagueiro", icon: "🧱", subs: ["positioning", "awareness"], tiers: [1, 2, 3],
    title: ["Pense como zagueiro", "Think like a centre-back", "Piensa como central"],
    desc: ["3 perguntas sobre o jogo do zagueiro.", "3 questions about playing centre-back.", "3 preguntas sobre jugar de central."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "posfb", type: "quiz", quiz: "lateral", icon: "🛤️", subs: ["recovery", "teamplay"], tiers: [1, 2, 3],
    title: ["Pense como lateral", "Think like a full-back", "Piensa como lateral"],
    desc: ["3 perguntas sobre o jogo do lateral.", "3 questions about playing full-back.", "3 preguntas sobre jugar de lateral."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "posmid", type: "quiz", quiz: "meio", icon: "🧭", subs: ["vision", "decision"], tiers: [1, 2, 3],
    title: ["Pense como meio-campista", "Think like a midfielder", "Piensa como mediocampista"],
    desc: ["3 perguntas sobre o jogo do meio-campo.", "3 questions about playing in midfield.", "3 preguntas sobre jugar en el medio."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "posst", type: "quiz", quiz: "atacante", icon: "🎯", subs: ["attpos", "decision"], tiers: [1, 2, 3],
    title: ["Pense como atacante", "Think like a striker", "Piensa como delantero"],
    desc: ["3 perguntas sobre o jogo do atacante.", "3 questions about playing up front.", "3 preguntas sobre jugar de delantero."],
    unit: CQ_UNIT_HITS,
  },

  // ---------- Mental ----------
  {
    id: "blindstatue", type: "mind", icon: "🙈", subs: ["balance", "concentration"], tiers: [5, 10, 20, 30], timer: { mode: "up" }, anim: "statue", animArgs: { blind: true },
    title: ["Estátua de olhos fechados", "Eyes-closed statue", "Estatua con ojos cerrados"],
    desc: ["Quanto tempo você fica num pé só, parado e de olhos fechados?", "How long can you stand on one foot, still, with your eyes closed?", "¿Cuánto aguantas en un pie, quieto y con los ojos cerrados?"],
    steps: [
      ["Fique longe de móveis e quinas.", "Keep away from furniture and sharp corners.", "Aléjate de muebles y esquinas."],
      ["Aperte Iniciar, levante um pé e feche os olhos.", "Press Start, lift one foot and close your eyes.", "Pulsa Iniciar, levanta un pie y cierra los ojos."],
      ["Apoiou o pé ou abriu os olhos? Aperte Parar.", "Foot down or eyes open? Press Stop.", "¿Apoyaste el pie o abriste los ojos? Pulsa Parar."],
    ],
    unit: CQ_UNIT_SECONDS,
  },
  {
    id: "countdown", type: "mind", icon: "🔢", subs: ["concentration", "control"], tiers: [5, 10, 20, 30], max: 30, anim: "keepy", animArgs: { countdown: true },
    title: ["Contagem com bola", "Countdown keep-ups", "Cuenta atrás con balón"],
    desc: ["Fazendo embaixadinhas, conte de 30 para trás em voz alta, um número por toque. Quantos números você fala sem errar a conta nem deixar a bola cair?", "Doing keep-ups, count down from 30 out loud, one number per touch. How many numbers can you say without a counting mistake or dropping the ball?", "Haciendo toques, cuenta de 30 hacia atrás en voz alta, un número por toque. ¿Cuántos números dices sin equivocarte ni dejar caer el balón?"],
    steps: [
      ["Um toque, um número: 30, 29, 28...", "One touch, one number: 30, 29, 28...", "Un toque, un número: 30, 29, 28..."],
      ["Errou a conta ou a bola caiu? Pare e marque quantos números falou.", "Wrong number or ball dropped? Stop and log how many numbers you said.", "¿Te equivocaste o se cayó el balón? Para y anota cuántos números dijiste."],
      ["Pode usar pés e coxas.", "Feet and thighs are fine.", "Vale pies y muslos."],
    ],
    unit: ["números", "numbers", "números"],
  },
);

// Same format as CQ_QUIZ in missoes-data.js: the first option is the right one.
Object.assign(CQ_QUIZ, {
  regras: [
    {
      q: ["Quando o atacante está impedido?", "When is an attacker offside?", "¿Cuándo está en fuera de juego el delantero?"],
      opts: [
        ["Quando o colega passa e ele está mais perto do gol que o penúltimo defensor, no campo do adversário", "When the ball is played and he's nearer the goal than the second-to-last defender, in the opponents' half", "Cuando le pasan y está más cerca del arco que el penúltimo defensor, en campo rival"],
        ["Sempre que está perto do goleiro", "Whenever he's near the goalkeeper", "Siempre que está cerca del portero"],
        ["Quando recebe a bola de um lateral", "When he gets the ball from a throw-in", "Cuando recibe de un saque de banda"],
      ],
      why: ["O que vale é a posição na hora do passe. E de lateral não existe impedimento!", "What matters is where you are when the ball is played. And there's no offside from a throw-in!", "Lo que cuenta es la posición al momento del pase. ¡Y de saque de banda no hay fuera de juego!"],
      scene: {
        us: [["cm", 56, 32], ["st", 86, 26]],
        them: [["gk", 96, 32], ["cb", 78, 22], ["cb", 75, 42]],
        ball: [58, 33],
        steps: [
          { d: 1.5, zone: [50, 3, 50, 58], text: ["Só vale no campo do adversário", "Only in the opponents' half", "Solo en campo rival"] },
          { d: 1.6, hl: { them: [1] }, zone: [77.5, 3, 1, 58], text: ["Linha do penúltimo defensor", "Second-to-last defender's line", "Línea del penúltimo defensor"] },
          { d: 1.6, ball: [86, 27], arrows: [[58, 33, 86, 27, "ball"]], hl: { us: [1] }, zone: [78, 3, 22, 58], text: ["Além dela na hora do passe: impedido!", "Beyond it when passed: offside!", "Más allá en el pase: ¡fuera de juego!"] },
        ],
      },
    },
    {
      q: ["A bola bateu sem querer no braço colado ao corpo. É mão?", "The ball hit an arm held close to the body by accident. Is it handball?", "El balón pegó sin querer en el brazo pegado al cuerpo. ¿Es mano?"],
      opts: [
        ["Normalmente não: o braço estava junto ao corpo", "Usually not: the arm was close to the body", "Normalmente no: el brazo estaba pegado al cuerpo"],
        ["Sempre é mão", "It's always handball", "Siempre es mano"],
        ["Só é mão se for o goleiro", "Only if it's the goalkeeper", "Solo si es el portero"],
      ],
      why: ["Braço aberto, aumentando o corpo, é que costuma ser mão.", "It's usually handball when the arm is out, making the body bigger.", "Suele ser mano cuando el brazo está abierto, agrandando el cuerpo."],
    },
    {
      q: ["O atacante chutou e a bola saiu pela linha de fundo. O que é marcado?", "An attacker shot and the ball went over the goal line. What is given?", "El delantero disparó y el balón salió por la línea de fondo. ¿Qué se cobra?"],
      opts: [
        ["Tiro de meta", "Goal kick", "Saque de puerta"],
        ["Escanteio", "Corner", "Córner"],
        ["Lateral", "Throw-in", "Saque de banda"],
      ],
      why: ["Saiu pelo fundo e o último toque foi do ataque: tiro de meta.", "Over the goal line, last touched by the attackers: goal kick.", "Salió por el fondo y la tocó último el ataque: saque de puerta."],
      scene: {
        us: [["st", 80, 42]],
        them: [["gk", 96, 32], ["cb", 86, 26], ["cb", 86, 44]],
        ball: [82, 42],
        steps: [
          { d: 1.4, ball: [102, 17], arrows: [[82, 42, 102, 17, "ball"]], hl: { us: [0] }, text: ["O atacante chuta para fora...", "The attacker shoots wide...", "El delantero dispara afuera..."] },
          { d: 1.4, ball: [95, 27], them: { 0: [96, 30] }, zone: [94, 23, 6, 18], text: ["Último toque do ataque: tiro de meta", "Last touch by the attack: goal kick", "Último toque del ataque: saque de puerta"] },
          { d: 1.4, ball: [62, 18], arrows: [[95, 27, 62, 18, "ball"]], hl: { them: [0] }, text: ["Bola na pequena área e o jogo segue", "Ball in the six-yard box, play on", "Balón en el área chica y sigue el juego"] },
        ],
      },
    },
    {
      q: ["Você fez falta sem querer e o adversário caiu. O que um craque faz?", "You fouled someone by accident and they fell. What does a great player do?", "Hiciste falta sin querer y el rival cayó. ¿Qué hace un crack?"],
      opts: [
        ["Ajuda a levantar e pede desculpa", "Helps them up and says sorry", "Lo ayuda a levantarse y pide disculpas"],
        ["Reclama com o juiz", "Complains to the referee", "Protesta al árbitro"],
        ["Finge que também se machucou", "Pretends to be hurt too", "Finge que también se lastimó"],
      ],
      why: ["Respeitar o adversário faz parte das regras do jogo limpo.", "Respecting opponents is part of fair play.", "Respetar al rival es parte del juego limpio."],
    },
  ],
});

