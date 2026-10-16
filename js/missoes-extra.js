/* ============================================================
   Craque de Bola — segunda leva de missões.
   Mesmo formato de js/missoes-data.js (carregado antes deste).
   Famílias que só mudam a distância usam as funções abaixo.
   ============================================================ */

const CQ_UNIT_STEPS_AWAY = ["passos de distância", "steps away", "pasos de distancia"];
const CQ_UNIT_SECONDS = ["segundos", "seconds", "segundos"];
const CQ_UNIT_REPS = ["repetições", "reps", "repeticiones"];
const CQ_STEPS_TARGET = ["Alvo: balde, arco, caixa, camisa ou qualquer objeto.", "Target: a bucket, hoop, box, shirt or any object.", "Blanco: un balde, aro, caja, camiseta o cualquier objeto."];
const CQ_STEPS_LIGHT_BALL = ["Use só bola leve: de plástico ou bexiga.", "Only use a light ball: plastic or a balloon.", "Usa solo balón liviano: de plástico o un globo."];

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
      `Em 2 minutos, quantas vezes você vai ${how[0]} até perto do alvo (${dist} passos) e acerta com um passe, sem deixar a bola cair?`,
      `In 2 minutes, how many times can you walk ${dist} steps ${how[1]} and hit the target with a pass, without letting the ball drop?`,
      `En 2 minutos, ¿cuántas veces caminas ${dist} pasos ${how[2]} y aciertas el blanco con un pase, sin que caiga el balón?`,
    ],
    steps: [
      ...(mode === "head" ? [CQ_STEPS_LIGHT_BALL] : []),
      CQ_STEPS_TARGET,
      [`Comece a ${dist} passos do alvo e vá andando sem deixar a bola cair.`, `Start ${dist} steps from the target and walk without letting the ball drop.`, `Empieza a ${dist} pasos del blanco y camina sin que caiga el balón.`],
      ...(mode === "foot" ? [CQ_STEPS_BOTH_FEET] : []),
      ["Perto do alvo, passe com a bola no ar. Caiu antes? Volte ao início.", "Near the target, pass with the ball in the air. Dropped it? Back to the start.", "Cerca del blanco, pasa con el balón en el aire. ¿Se cayó? Vuelve al inicio."],
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
      ["Mire um pouco para fora e deixe a curva levar a bola ao canto, longe do goleiro. Ela pode subir um pouco, mas o chute é baixo.", "Aim a little wide and let the curve take the ball into the corner, away from the keeper. It can rise a little, but keep the shot low.", "Apunta un poco afuera y deja que la curva lleve el balón al rincón, lejos del portero. Puede subir un poco, pero el tiro es bajo."],
      CQ_STEPS_5_5,
      ["Conte as bolas que acertam o alvo.", "Count the balls that hit the target.", "Cuenta los balones que dan en el blanco."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// A single trick: 10 tries, count the clean ones.
function cqTrickMission(id, icon, title, how) {
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
      CQ_STEPS_5_5,
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

  // ---------- Passes ----------
  cqWallMission("weak", 4, [10, 16, 22, 28]),
  cqWallMission("wall6", 6, [8, 13, 18, 24]),
  cqWallMission("wall8", 8, [6, 10, 15, 20]),
  cqSoleMission("solepass1", 1, [6, 10, 14, 18]),
  cqSoleMission("solepass", 2, [5, 8, 11, 14]),
  cqMeasureMission("measure10", 10, [18, 14, 8, 4], ["short", "control"]),
  cqTwoFeetMission("twofeet", 5, [6, 10, 14, 18]),
  cqBucketMission("bucket3", 3, [2, 4, 6, 9], ["short", "control"]),
  {
    id: "orient", type: "ball", icon: "↪️", subs: ["control", "short"], tiers: [5, 9, 13, 17], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Domínio orientado", "Directional first touch", "Control orientado"],
    desc: ["Em 1 minuto, quantas vezes você passa na parede, domina com a parte de dentro do pé já levando a bola para o lado e passa de novo?", "In 1 minute, how many times can you pass against the wall, take your first touch with the inside of your foot out to the side and pass again?", "En 1 minuto, ¿cuántas veces pasas a la pared, controlas con el interior del pie llevando el balón hacia un lado y vuelves a pasar?"],
    steps: [
      ["Marque dois chinelos a 2 passos um do outro, de frente para a parede.", "Mark two flip-flops 2 steps apart, facing the wall.", "Marca dos chanclas a 2 pasos una de otra, frente a la pared."],
      ["Domine com a parte de dentro do pé, levando a bola até o outro chinelo, e passe dali.", "Control it with the inside of your foot, taking the ball across to the other flip-flop, and pass from there.", "Controla con el interior del pie, llevando el balón hasta la otra chancla, y pasa desde allí."],
      ["Indo para a direita, domine e passe com o pé direito. Indo para a esquerda, com o esquerdo.", "Going right, control and pass with your right foot. Going left, with your left.", "Hacia la derecha, controla y pasa con el pie derecho. Hacia la izquierda, con el izquierdo."],
      ["Cada passe depois de um domínio para o lado vale 1.", "Each pass after a first touch to the side counts as 1.", "Cada pase tras un control hacia el lado cuenta 1."],
    ],
    unit: ["passes", "passes", "pases"],
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

  // ---------- Técnica ----------
  {
    id: "trap", type: "ball", icon: "🪶", subs: ["control", "reactions"], tiers: [3, 4, 6, 8], max: 10, anim: true,
    title: ["Domínio do alto", "Control from the air", "Control desde arriba"],
    desc: ["Em 10 bolas jogadas para cima, quantas você domina e a bola fica a até 1 passo de você?", "Out of 10 balls tossed up, how many do you control so the ball stays within 1 step of you?", "De 10 balones lanzados arriba, ¿cuántos controlas y el balón queda a 1 paso o menos?"],
    steps: [
      ["Jogue a bola para cima com as mãos.", "Toss the ball up with your hands.", "Lanza el balón hacia arriba con las manos."],
      ["Domine 5 com o pé direito e 5 com o esquerdo, com a parte de dentro do pé.", "Control 5 with your right foot and 5 with your left, using the inside of your foot.", "Controla 5 con el pie derecho y 5 con el izquierdo, con el interior del pie."],
      ["Amorteça: o pé ou a coxa \"desce\" junto com a bola.", "Cushion it: your foot or thigh \"gives\" with the ball.", "Amortigua: el pie o el muslo \"bajan\" con el balón."],
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
      CQ_STEPS_CARRY_FEET,
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },
  cqTrickMission("elastico", "🪢", ["Elástico", "Elastico", "Elástica"],
    ["Toque a bola para fora com a parte de fora do pé e puxe de volta com a parte de dentro, rapidinho.", "Push the ball out with the outside of your foot and snap it back with the inside, quickly.", "Empuja el balón hacia afuera con el exterior del pie y tráelo de vuelta con el interior, rápido."]),
  cqWalkMission("walk10", 10, "foot", [1, 2, 3, 5], ["control", "long"]),
  cqWalkMission("walkalt", 5, "alt", [1, 2, 3, 5], ["control", "balance"]),
  cqTrickMission("roleta", "🎡", ["Roleta", "Roulette", "Ruleta"],
    ["Pise na bola com um pé, gire o corpo e puxe a bola com o outro pé, de costas para o adversário.", "Step on the ball with one foot, spin and drag it with the other foot, turning your back to the defender.", "Pisa el balón con un pie, gira y arrástralo con el otro pie, de espaldas al rival."]),
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
  cqWalkMission("walkhead", 5, "head", [1, 2, 3, 4], ["control", "headfin"]),

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

