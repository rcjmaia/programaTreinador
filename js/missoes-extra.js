/* ============================================================
   Craque Inteligente — segunda leva de missões.
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
      `Faça 5 passes rasteiros de ${dist} passos. Some quantos passos cada bola parou longe do alvo. Quanto menos, melhor!`,
      `Make 5 ground passes from ${dist} steps. Add up how many steps away from the target each ball stopped. The fewer, the better!`,
      `Haz 5 pases rasantes desde ${dist} pasos. Suma a cuántos pasos del blanco paró cada balón. ¡Cuantos menos, mejor!`,
    ],
    steps: [
      [`Coloque um alvo a ${dist} passos: chinelo, garrafa ou cone.`, `Put a target ${dist} steps away: a flip-flop, bottle or cone.`, `Pon un blanco a ${dist} pasos: chancla, botella o cono.`],
      ["Passe com a parte de dentro do pé. O segredo é a força certa.", "Pass with the inside of your foot. The secret is the right weight.", "Pasa con el interior del pie. El secreto es la fuerza justa."],
      ["Onde a bola parou, conte os passos até o alvo. Parou no alvo? Vale 0.", "Where the ball stopped, count the steps to the target. Stopped on it? That's 0.", "Donde paró el balón, cuenta los pasos hasta el blanco. ¿Paró en el blanco? Vale 0."],
    ],
    unit: CQ_UNIT_STEPS_AWAY,
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
      ["Perto do alvo, passe com a bola no ar. Caiu antes? Volte ao início.", "Near the target, pass with the ball in the air. Dropped it? Back to the start.", "Cerca del blanco, pasa con el balón en el aire. ¿Se cayó? Vuelve al inicio."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

// A single trick: 10 tries, count the clean ones.
function cqTrickMission(id, icon, title, how) {
  return {
    id, type: "ball", icon, subs: ["dribble", "agility"], tiers: [2, 4, 6, 8], max: 10,
    anim: "trick", animArgs: { trick: id },
    title,
    desc: [
      `Em 10 tentativas, quantas vezes o truque "${title[0]}" sai certinho, com a bola dominada no final?`,
      `Out of 10 tries, how many times do you pull off the "${title[1]}" cleanly, ending with the ball under control?`,
      `De 10 intentos, ¿cuántas veces te sale bien el truco "${title[2]}", terminando con el balón controlado?`,
    ],
    steps: [
      how,
      ["Comece devagar. A velocidade vem depois.", "Start slowly. Speed comes later.", "Empieza despacio. La velocidad viene después."],
      ["Conte só as que terminam com a bola no seu pé.", "Only count the ones that end with the ball at your feet.", "Cuenta solo las que terminan con el balón en tu pie."],
    ],
    unit: CQ_UNIT_HITS,
  };
}

CQ_MISSIONS.push(
  // ---------- Ritmo ----------
  {
    id: "skipping", type: "move", icon: "🦵", subs: ["acceleration", "stamina"], tiers: [15, 25, 35, 45], timer: { mode: "down", s: 20 }, anim: true,
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
    id: "conemove", type: "move", icon: "🔁", subs: ["agility", "strength"], tiers: [4, 6, 8, 10], timer: { mode: "down", s: 60 }, anim: true,
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
    id: "treasure", type: "ball", icon: "💎", subs: ["carry", "acceleration"], tiers: [2, 3, 4, 6], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Busca-tesouro com bola", "Treasure hunt with the ball", "Busca tesoro con balón"],
    desc: ["Em 1 minuto, quantos objetos você busca conduzindo a bola e traz de volta, um por vez?", "In 1 minute, how many objects can you fetch while dribbling the ball and bring back, one at a time?", "En 1 minuto, ¿cuántos objetos buscas conduciendo el balón y traes de vuelta, uno por vez?"],
    steps: [
      ["Espalhe objetos a uns 8 passos: chinelo, meia, garrafa.", "Spread objects about 8 steps away: a flip-flop, sock, bottle.", "Reparte objetos a unos 8 pasos: chancla, media, botella."],
      ["Conduza até um objeto, pegue com a mão e volte conduzindo.", "Dribble to an object, grab it with your hand and dribble back.", "Conduce hasta un objeto, agárralo con la mano y vuelve conduciendo."],
      ["Cada objeto trazido com a bola dominada vale 1.", "Each object brought back with the ball under control counts as 1.", "Cada objeto traído con el balón controlado cuenta 1."],
    ],
    unit: ["objetos", "objects", "objetos"],
  },
  {
    id: "star", type: "move", icon: "⭐", subs: ["agility", "reactions"], tiers: [6, 9, 12, 15], timer: { mode: "down", s: 30 }, anim: true,
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
    id: "ladder", type: "move", icon: "🪜", subs: ["agility", "balance"], tiers: [2, 4, 6, 8], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Escada no chão", "Floor ladder", "Escalera en el suelo"],
    desc: ["Em 30 segundos, quantas vezes você passa pela escada pisando com os dois pés em cada espaço?", "In 30 seconds, how many times can you go through the ladder with both feet in every space?", "En 30 segundos, ¿cuántas veces pasas la escalera pisando con los dos pies en cada espacio?"],
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
    id: "weakshot", type: "ball", icon: "🦶", subs: ["finishing", "power"], tiers: [2, 4, 6, 8], max: 10, anim: "target", animArgs: { weak: true },
    title: ["Alvo com o pé fraco", "Weak-foot target", "Blanco con la pierna débil"],
    desc: ["Em 10 chutes só com o pé fraco, quantos acertam o alvo?", "Out of 10 shots with your weak foot only, how many hit the target?", "De 10 tiros solo con la pierna débil, ¿cuántos dan en el blanco?"],
    steps: [
      ["Use o mesmo alvo do Chute no alvo, a 5 passos.", "Use the same target as Target shooting, 5 steps away.", "Usa el mismo blanco del Tiro al blanco, a 5 pasos."],
      ["Chute só com o pé que você usa menos.", "Only shoot with the foot you use less.", "Dispara solo con el pie que menos usas."],
      ["Conte os acertos.", "Count the hits.", "Cuenta los aciertos."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "placed", type: "ball", icon: "📐", subs: ["finishing", "curve"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Chute colocado", "Placed finish", "Tiro colocado"],
    desc: ["Em 10 chutes de chapa (parte de dentro do pé), quantos entram entre o chinelo e a trave?", "Out of 10 side-foot shots, how many go in between the flip-flop and the post?", "De 10 tiros con el interior del pie, ¿cuántos entran entre la chancla y el palo?"],
    steps: [
      ["Coloque um chinelo dentro do gol, a 1 passo de cada trave.", "Put a flip-flop inside the goal, 1 step from each post.", "Pon una chancla dentro del arco, a 1 paso de cada palo."],
      ["Chute de 7 passos com a parte de dentro do pé: precisão, não força.", "Shoot from 7 steps with the inside of your foot: accuracy, not power.", "Dispara desde 7 pasos con el interior del pie: precisión, no fuerza."],
      ["Vale entre o chinelo e a trave, nos dois cantos.", "It counts between the flip-flop and the post, in either corner.", "Vale entre la chancla y el palo, en cualquier rincón."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "stepshot", type: "ball", icon: "🌪️", subs: ["dribble", "finishing"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Pedalada e chute", "Step-over and shoot", "Bicicleta y tiro"],
    desc: ["Em 10 tentativas, quantas vezes você faz a pedalada e já chuta acertando o alvo?", "Out of 10 tries, how many times can you do a step-over and shoot straight onto the target?", "De 10 intentos, ¿cuántas veces haces la bicicleta y disparas acertando el blanco?"],
    steps: [
      ["Conduza até 5 passos do alvo.", "Dribble up to 5 steps from the target.", "Conduce hasta 5 pasos del blanco."],
      ["Faça uma pedalada e chute logo depois, sem parar a bola.", "Do a step-over and shoot right away, without stopping the ball.", "Haz una bicicleta y dispara enseguida, sin parar el balón."],
      ["Conte os acertos.", "Count the hits.", "Cuenta los aciertos."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "firsttime", type: "ball", icon: "⚡", subs: ["volleys", "reactions"], tiers: [2, 4, 6, 8], max: 10, helper: true, anim: true,
    title: ["Chute de primeira", "First-time shot", "Tiro de primera"],
    desc: ["Em 10 bolas que alguém rola para você, quantas você chuta de primeira, sem dominar, e acerta o gol?", "Out of 10 balls someone rolls to you, how many do you hit first time, without a touch, on target?", "De 10 balones que alguien te rueda, ¿cuántos disparas de primera, sin controlar, y van al arco?"],
    steps: [
      ["Alguém da família rola a bola para você, do lado.", "A family member rolls the ball to you from the side.", "Alguien de tu familia te rueda el balón desde un lado."],
      ["Chute sem dominar, com a bola andando.", "Shoot without controlling it, with the ball moving.", "Dispara sin controlar, con el balón en movimiento."],
      ["Conte os chutes no gol.", "Count the shots on target.", "Cuenta los tiros al arco."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "controlshot", type: "ball", icon: "🎯", subs: ["control", "finishing"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Domina e finaliza", "Control and finish", "Controla y define"],
    desc: ["Em 10 tentativas, quantas vezes você joga a bola para cima, domina e chuta no alvo com no máximo 2 toques?", "Out of 10 tries, how many times can you toss the ball up, control it and hit the target in 2 touches or fewer?", "De 10 intentos, ¿cuántas veces lanzas el balón arriba, lo controlas y aciertas el blanco en 2 toques o menos?"],
    steps: [
      ["Jogue a bola para cima com as mãos.", "Toss the ball up with your hands.", "Lanza el balón hacia arriba con las manos."],
      ["Primeiro toque: domine. Segundo toque: chute.", "First touch: control. Second touch: shoot.", "Primer toque: controla. Segundo toque: dispara."],
      ["Conte os acertos no alvo, a 6 passos.", "Count the hits on the target, 6 steps away.", "Cuenta los aciertos en el blanco, a 6 pasos."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "chip", type: "ball", icon: "🥄", subs: ["finishing", "composure"], tiers: [1, 3, 5, 7], max: 10, anim: true,
    title: ["Cavadinha", "Chip shot", "Vaselina"],
    desc: ["Em 10 tentativas, quantas cavadinhas passam por cima da cadeira (o goleiro) e caem no gol?", "Out of 10 tries, how many chips go over the chair (the keeper) and drop into the goal?", "De 10 intentos, ¿cuántas vaselinas pasan sobre la silla (el portero) y caen en el arco?"],
    steps: [
      ["Coloque uma cadeira na frente do gol, como se fosse o goleiro.", "Put a chair in front of the goal, as if it were the keeper.", "Pon una silla delante del arco, como si fuera el portero."],
      ["Chute por baixo da bola, com a ponta do pé, só levantando.", "Strike under the ball with the tip of your foot, just lifting it.", "Golpea por debajo del balón con la punta del pie, solo levantándolo."],
      ["Conte as bolas que caem no gol.", "Count the balls that drop into the goal.", "Cuenta los balones que caen en el arco."],
    ],
    unit: ["gols", "goals", "goles"],
  },

  // ---------- Passes ----------
  cqMeasureMission("measure10", 10, [15, 10, 6, 3], ["short", "vision"]),
  {
    id: "twofeet", type: "ball", icon: "👣", subs: ["short", "reactions"], tiers: [10, 20, 30, 40], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Parede com os dois pés", "Two-footed wall passes", "Pared con los dos pies"],
    desc: ["Em 1 minuto, quantos passes na parede você faz alternando o pé direito e o esquerdo?", "In 1 minute, how many wall passes can you make alternating right and left foot?", "En 1 minuto, ¿cuántos pases a la pared haces alternando pie derecho e izquierdo?"],
    steps: [
      ["Fique a uns 2 passos da parede.", "Stand about 2 steps from a wall.", "Ponte a unos 2 pasos de la pared."],
      ["Um passe com o direito, o próximo com o esquerdo.", "One pass with the right, the next with the left.", "Un pase con el derecho, el siguiente con el izquierdo."],
      ["Errou a ordem? O passe não conta.", "Wrong foot? That pass doesn't count.", "¿Pie equivocado? Ese pase no cuenta."],
    ],
    unit: ["passes", "passes", "pases"],
  },
  cqBucketMission("bucket3", 3, [1, 3, 5, 8], ["short", "control"]),
  {
    id: "orient", type: "ball", icon: "↪️", subs: ["control", "short"], tiers: [5, 10, 15, 20], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Domínio orientado", "Directional first touch", "Control orientado"],
    desc: ["Em 1 minuto, quantas vezes você passa na parede, domina já levando a bola para o lado e passa de novo?", "In 1 minute, how many times can you pass against the wall, take your first touch out to the side and pass again?", "En 1 minuto, ¿cuántas veces pasas a la pared, controlas llevando el balón hacia un lado y vuelves a pasar?"],
    steps: [
      ["Marque dois chinelos a 2 passos um do outro, de frente para a parede.", "Mark two flip-flops 2 steps apart, facing the wall.", "Marca dos chanclas a 2 pasos una de otra, frente a la pared."],
      ["Domine levando a bola até o outro chinelo e passe dali.", "Control the ball across to the other flip-flop and pass from there.", "Controla llevando el balón hasta la otra chancla y pasa desde allí."],
      ["Cada passe depois de um domínio para o lado vale 1.", "Each pass after a first touch to the side counts as 1.", "Cada pase tras un control hacia el lado cuenta 1."],
    ],
    unit: ["passes", "passes", "pases"],
  },
  cqMeasureMission("measure15", 15, [20, 14, 9, 5], ["long", "vision"]),
  cqBucketMission("bucket5", 5, [1, 2, 4, 6], ["long", "control"]),
  {
    id: "altinha", type: "ball", icon: "🏐", subs: ["control", "teamplay"], tiers: [5, 15, 30, 50], timer: { mode: "down", s: 60 }, helper: true, anim: true,
    title: ["Altinha", "Keep it up together", "Pelotita en el aire"],
    desc: ["Em 1 minuto, quantos toques você e um amigo dão, um para o outro, sem deixar a bola cair?", "In 1 minute, how many touches can you and a friend make, passing to each other, without letting the ball drop?", "En 1 minuto, ¿cuántos toques dan tú y un amigo, pasándosela, sin que caiga el balón?"],
    steps: [
      ["Chame um amigo ou alguém da família. Fiquem a 3 passos.", "Get a friend or family member. Stand 3 steps apart.", "Llama a un amigo o a alguien de tu familia. Pónganse a 3 pasos."],
      ["Pode usar pé, coxa, peito e cabeça. Mão não!", "Feet, thighs, chest and head are fine. No hands!", "Vale pie, muslo, pecho y cabeza. ¡Mano no!"],
      ["Contem todos os toques. Caiu? Continuem a contagem de onde parou.", "Count every touch. Dropped it? Keep counting from where you were.", "Cuenten todos los toques. ¿Se cayó? Sigan contando desde donde iban."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  cqMeasureMission("measure20", 20, [25, 18, 12, 6], ["long", "vision"]),
  cqBucketMission("bucket8", 8, [1, 2, 3, 5], ["long", "curve"]),
  cqMeasureMission("measure25", 25, [30, 22, 15, 8], ["long", "vision"]),

  // ---------- Condução ----------
  {
    id: "trap", type: "ball", icon: "🪶", subs: ["control", "reactions"], tiers: [3, 5, 7, 9], max: 10, anim: true,
    title: ["Domínio do alto", "Control from the air", "Control desde arriba"],
    desc: ["Em 10 bolas jogadas para cima, quantas você domina e a bola fica a até 1 passo de você?", "Out of 10 balls tossed up, how many do you control so the ball stays within 1 step of you?", "De 10 balones lanzados arriba, ¿cuántos controlas y el balón queda a 1 paso o menos?"],
    steps: [
      ["Jogue a bola para cima com as mãos.", "Toss the ball up with your hands.", "Lanza el balón hacia arriba con las manos."],
      ["Varie: parte de dentro do pé, parte de fora e coxa.", "Mix it up: inside of the foot, outside of the foot and thigh.", "Varía: interior del pie, exterior del pie y muslo."],
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
    id: "trapweak", type: "ball", icon: "🦶", subs: ["control", "reactions"], tiers: [2, 4, 6, 8], max: 10, anim: "trap", animArgs: { weak: true },
    title: ["Domínio com o pé fraco", "Weak-foot control", "Control con la pierna débil"],
    desc: ["Em 10 bolas jogadas para cima, quantas você domina só com o pé fraco, deixando a bola a até 1 passo?", "Out of 10 balls tossed up, how many do you control with your weak foot only, keeping it within 1 step?", "De 10 balones lanzados arriba, ¿cuántos controlas solo con la pierna débil, dejándolo a 1 paso o menos?"],
    steps: [
      ["Jogue a bola para cima com as mãos.", "Toss the ball up with your hands.", "Lanza el balón hacia arriba con las manos."],
      ["Domine só com o pé que você usa menos.", "Only control it with the foot you use less.", "Controla solo con el pie que menos usas."],
      ["Conte os domínios certos.", "Count the good controls.", "Cuenta los controles buenos."],
    ],
    unit: ["domínios", "controls", "controles"],
  },
  {
    id: "slalomweak", type: "ball", icon: "🩴", subs: ["carry", "balance"], tiers: [1, 2, 4, 6], timer: { mode: "down", s: 60 }, anim: "slalom", animArgs: { weak: true },
    title: ["Slalom com o pé fraco", "Weak-foot slalom", "Slalom con la pierna débil"],
    desc: ["Em 1 minuto, quantas idas e voltas você faz entre os 5 chinelos tocando a bola só com o pé fraco?", "In 1 minute, how many round trips through the 5 flip-flops can you make touching the ball with your weak foot only?", "En 1 minuto, ¿cuántas idas y vueltas haces entre las 5 chanclas tocando el balón solo con la pierna débil?"],
    steps: [
      ["Mesmos 5 chinelos do Slalom, um passo entre eles.", "Same 5 flip-flops as the Slalom, one step apart.", "Las mismas 5 chanclas del Slalom, a un paso entre ellas."],
      ["Use a parte de dentro e de fora do pé fraco.", "Use the inside and outside of your weak foot.", "Usa el interior y el exterior de la pierna débil."],
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
    ["Prenda a bola entre os pés ou levante com a ponta do pé e passe por cima de um balde ou cadeira.", "Lift the ball with your toe or between your feet and flick it over a bucket or chair.", "Levanta el balón con la punta del pie o entre los pies y pásalo por encima de un balde o silla."]),
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
    id: "backrun", type: "move", icon: "🔙", subs: ["recovery", "acceleration"], tiers: [3, 5, 7, 9], timer: { mode: "down", s: 30 }, anim: true,
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
    id: "clearance", type: "ball", icon: "🧹", subs: ["awareness", "power"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Afasta de primeira", "First-time clearance", "Despeje de primera"],
    desc: ["Em 10 bolas que voltam da parede, quantas você manda de primeira acima da marca alta?", "Out of 10 balls coming back off the wall, how many do you send first time above the high mark?", "De 10 balones que vuelven de la pared, ¿cuántos mandas de primera por encima de la marca alta?"],
    steps: [
      ["Faça uma marca alta na parede, mais alta que você.", "Make a high mark on the wall, higher than you.", "Haz una marca alta en la pared, más alta que tú."],
      ["Passe na parede e, quando a bola voltar, chute sem dominar: alto e longe.", "Pass against the wall and when it comes back, kick it without a touch: high and far.", "Pasa a la pared y cuando vuelva, patea sin controlar: alto y lejos."],
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

  // ---------- Cabeça ----------
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
    id: "aftermiss", type: "quiz", quiz: "depoisErro", icon: "💪", subs: ["resilience", "confidence"], tiers: [1, 2, 3],
    title: ["Depois do erro", "After a mistake", "Después del error"],
    desc: ["3 perguntas sobre o que fazer depois de errar ou perder.", "3 questions about what to do after a mistake or a defeat.", "3 preguntas sobre qué hacer después de un error o una derrota."],
    unit: CQ_UNIT_HITS,
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
  {
    id: "pressure", type: "quiz", quiz: "pressao", icon: "🧊", subs: ["composure", "courage"], tiers: [1, 2, 3],
    title: ["Calma na pressão", "Calm under pressure", "Calma bajo presión"],
    desc: ["3 perguntas sobre nervosismo, torcida e jogos decisivos.", "3 questions about nerves, crowds and big games.", "3 preguntas sobre nervios, hinchada y partidos decisivos."],
    unit: CQ_UNIT_HITS,
  },
);

// Same format as CQ_QUIZ in missoes-data.js: the first option is the right one.
Object.assign(CQ_QUIZ, {
  contra: [
    {
      q: ["Você roubou a bola e o adversário está todo no ataque. O que faz?", "You won the ball and the opponents are all up the pitch. What do you do?", "Robaste el balón y el rival está todo en ataque. ¿Qué haces?"],
      opts: [
        ["Ataco rápido, antes de eles voltarem", "Attack fast, before they get back", "Ataco rápido, antes de que vuelvan"],
        ["Seguro a bola e espero todos voltarem", "Hold the ball and wait for everyone to get back", "Me quedo con el balón y espero que vuelvan todos"],
        ["Chuto para longe", "Kick it away", "La reviento lejos"],
      ],
      why: ["No contra-ataque, cada segundo conta: o adversário está desarrumado.", "On the counter every second counts: the opponents are out of shape.", "En el contraataque cada segundo cuenta: el rival está desordenado."],
    },
    {
      q: ["No contra-ataque, você está sem a bola. Para onde corre?", "On a counter-attack you don't have the ball. Where do you run?", "En el contraataque no tienes el balón. ¿Hacia dónde corres?"],
      opts: [
        ["Para a frente, num espaço livre, para receber", "Forward, into free space, to receive", "Hacia adelante, a un espacio libre, para recibir"],
        ["Para perto de quem está com a bola", "Right next to the player on the ball", "Al lado de quien tiene el balón"],
        ["Fico parado olhando", "Stand still and watch", "Me quedo quieto mirando"],
      ],
      why: ["Correr para o espaço abre o campo e dá uma opção de passe.", "Running into space stretches the pitch and gives a passing option.", "Correr al espacio abre el campo y da una opción de pase."],
    },
    {
      q: ["Você conduz no contra-ataque e um zagueiro vem em você. Seu colega está livre do lado. O que faz?", "You're running with the ball on a counter and a defender comes at you. A teammate is free beside you. What do you do?", "Conduces en el contraataque y un central viene hacia ti. Tu compañero está libre al lado. ¿Qué haces?"],
      opts: [
        ["Passo na hora certa, quando o zagueiro vier em mim", "Pass at the right moment, when the defender commits", "Paso en el momento justo, cuando el central venga hacia mí"],
        ["Passo logo, antes de o zagueiro chegar perto", "Pass straight away, before the defender gets close", "Paso enseguida, antes de que el central se acerque"],
        ["Paro a bola e espero ajuda", "Stop the ball and wait for help", "Paro el balón y espero ayuda"],
      ],
      why: ["Esperar o zagueiro chegar em você faz ele deixar seu colega livre.", "Drawing the defender to you leaves your teammate free.", "Esperar que el central venga hacia ti deja libre a tu compañero."],
    },
    {
      q: ["Qual passe é melhor no contra-ataque?", "Which pass is best on a counter-attack?", "¿Qué pase es mejor en el contraataque?"],
      opts: [
        ["Para a frente, no espaço, na corrida do colega", "Forward, into space, into a teammate's run", "Hacia adelante, al espacio, a la carrera del compañero"],
        ["Para trás, para o goleiro", "Back to the goalkeeper", "Atrás, al portero"],
        ["Para o lado, bem devagar", "Sideways, very slowly", "Al lado, muy despacio"],
      ],
      why: ["Passe para a frente no espaço faz o time ganhar metros rápido.", "A forward pass into space gains ground quickly.", "Un pase al espacio hacia adelante hace ganar metros rápido."],
    },
  ],

  bolaParada: [
    {
      q: ["Escanteio contra o seu time. O que você faz?", "Corner against your team. What do you do?", "Córner en contra. ¿Qué haces?"],
      opts: [
        ["Marco um adversário de perto e fico de olho na bola", "Mark an opponent closely and keep an eye on the ball", "Marco a un rival de cerca y miro el balón"],
        ["Fico olhando só para a bola, longe de todos", "Watch only the ball, away from everyone", "Miro solo el balón, lejos de todos"],
        ["Vou para o ataque esperar o contra-ataque, sempre", "Always go up front to wait for a counter", "Me voy siempre arriba a esperar el contraataque"],
      ],
      why: ["Na bola parada, cada um cuida de alguém e de um espaço.", "At set pieces, everyone looks after a player and a space.", "En el balón parado, cada uno cuida a alguien y un espacio."],
    },
    {
      q: ["Como cobrar um lateral do jeito certo?", "How do you take a throw-in correctly?", "¿Cómo se saca un saque de banda correctamente?"],
      opts: [
        ["Com as duas mãos, por trás da cabeça e os dois pés no chão", "Both hands, from behind the head, both feet on the ground", "Con las dos manos, por detrás de la cabeza y los dos pies en el suelo"],
        ["Com uma mão, como um arremesso", "With one hand, like a throw", "Con una mano, como un lanzamiento"],
        ["Pulando e jogando com força", "Jumping and throwing hard", "Saltando y tirando fuerte"],
      ],
      why: ["Duas mãos, atrás da cabeça e os pés no chão: senão o juiz volta o lateral.", "Two hands, behind the head, feet down: otherwise the referee gives it to the other team.", "Dos manos, detrás de la cabeza y pies en el suelo: si no, el árbitro da el saque al rival."],
    },
    {
      q: ["Falta perto da área para o seu time. O que os colegas fazem?", "Free kick near the box for your team. What do teammates do?", "Tiro libre cerca del área a favor. ¿Qué hacen los compañeros?"],
      opts: [
        ["Ficam atentos ao rebote e combinam quem vai bater", "Watch for the rebound and agree who takes it", "Atentos al rebote y acuerdan quién patea"],
        ["Todos querem bater e discutem", "Everyone wants to take it and they argue", "Todos quieren patear y discuten"],
        ["Viram de costas e descansam", "Turn around and rest", "Se dan vuelta y descansan"],
      ],
      why: ["Combinar antes evita confusão. E o rebote às vezes vira gol!", "Agreeing first avoids confusion. And rebounds often become goals!", "Acordar antes evita lío. ¡Y el rebote a veces es gol!"],
    },
    {
      q: ["Na barreira, o que não pode fazer?", "In the wall, what must you not do?", "En la barrera, ¿qué no puedes hacer?"],
      opts: [
        ["Virar de costas e abrir espaço", "Turn your back and open a gap", "Darte vuelta y abrir un hueco"],
        ["Ficar firme e juntinho dos colegas", "Stand firm and close to your teammates", "Quedarte firme y pegado a tus compañeros"],
        ["Proteger o rosto com as mãos", "Protect your face with your hands", "Protegerte la cara con las manos"],
      ],
      why: ["Barreira boa é unida. Se alguém abre, a bola passa.", "A good wall stays together. If someone opens up, the ball gets through.", "Una buena barrera está unida. Si alguien se abre, el balón pasa."],
    },
  ],

  semBola: [
    {
      q: ["Seu colega vai receber a bola. Onde você fica?", "Your teammate is about to get the ball. Where do you go?", "Tu compañero va a recibir. ¿Dónde te pones?"],
      opts: [
        ["Num lugar onde ele consegue me ver e passar", "Somewhere he can see me and pass to me", "Donde él pueda verme y pasarme"],
        ["Atrás de um adversário", "Behind an opponent", "Detrás de un rival"],
        ["Bem perto dele, colado", "Right next to him", "Pegado a él"],
      ],
      why: ["Linha de passe livre é o melhor presente para quem tem a bola.", "A clear passing lane is the best gift for the player on the ball.", "Una línea de pase libre es el mejor regalo para quien tiene el balón."],
    },
    {
      q: ["Seu marcador está colado em você. Como se livrar?", "Your marker is right on you. How do you get free?", "Tu marcador está pegado a ti. ¿Cómo te liberas?"],
      opts: [
        ["Finjo que vou para um lado e corro para o outro", "Fake one way and run the other", "Amago hacia un lado y corro hacia el otro"],
        ["Empurro ele", "Push him", "Lo empujo"],
        ["Fico parado esperando", "Stand still and wait", "Me quedo quieto esperando"],
      ],
      why: ["A finta sem bola também engana o marcador.", "A feint without the ball fools defenders too.", "El amague sin balón también engaña al marcador."],
    },
    {
      q: ["Você pede a bola. Qual é o melhor jeito?", "You call for the ball. What is the best way?", "Pides el balón. ¿Cuál es la mejor forma?"],
      opts: [
        ["Mostro com a mão onde quero e falo o nome do colega", "Point where I want it and call my teammate's name", "Señalo con la mano dónde la quiero y digo el nombre del compañero"],
        ["Grito \"toca!\" escondido atrás de alguém", "Shout \"pass!\" while hidden behind someone", "Grito \"¡toca!\" escondido detrás de alguien"],
        ["Fico quieto torcendo para ele ver", "Stay quiet and hope he sees me", "Me quedo callado esperando que me vea"],
      ],
      why: ["Mostrar e falar ajuda o colega a decidir rápido.", "Pointing and calling helps your teammate decide quickly.", "Señalar y hablar ayuda al compañero a decidir rápido."],
    },
    {
      q: ["Um colega correu e levou um zagueiro com ele. O que você faz?", "A teammate made a run and took a defender with him. What do you do?", "Un compañero corrió y se llevó a un central. ¿Qué haces?"],
      opts: [
        ["Ocupo o espaço que ele deixou livre", "Move into the space he left", "Ocupo el espacio que dejó libre"],
        ["Corro atrás dele também", "Run after him too", "Corro detrás de él también"],
        ["Volto para a defesa", "Go back to defend", "Vuelvo a defender"],
      ],
      why: ["Um corre, o outro aproveita o espaço: isso é jogo coletivo.", "One runs, the other uses the space: that's team play.", "Uno corre, el otro aprovecha el espacio: eso es juego colectivo."],
    },
  ],

  regras: [
    {
      q: ["Quando o atacante está impedido?", "When is an attacker offside?", "¿Cuándo está en fuera de juego el delantero?"],
      opts: [
        ["Quando o colega passa e ele está mais perto do gol que o penúltimo defensor, no campo do adversário", "When the ball is played and he's nearer the goal than the second-to-last defender, in the opponents' half", "Cuando le pasan y está más cerca del arco que el penúltimo defensor, en campo rival"],
        ["Sempre que está perto do goleiro", "Whenever he's near the goalkeeper", "Siempre que está cerca del portero"],
        ["Quando recebe a bola de um lateral", "When he gets the ball from a throw-in", "Cuando recibe de un saque de banda"],
      ],
      why: ["O que vale é a posição na hora do passe. E de lateral não existe impedimento!", "What matters is where you are when the ball is played. And there's no offside from a throw-in!", "Lo que cuenta es la posición al momento del pase. ¡Y de saque de banda no hay fuera de juego!"],
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

  zagueiro: [
    {
      q: ["O atacante recebe de costas para o gol. O que o zagueiro faz?", "The striker receives with his back to goal. What does the centre-back do?", "El delantero recibe de espaldas al arco. ¿Qué hace el central?"],
      opts: [
        ["Chega perto para não deixar ele virar", "Gets tight so he can't turn", "Se acerca para que no se dé vuelta"],
        ["Fica longe esperando", "Stays far away and waits", "Se queda lejos esperando"],
        ["Dá um carrinho por trás", "Slides in from behind", "Entra con barrida por detrás"],
      ],
      why: ["Atacante de costas é menos perigoso. Não deixe ele virar!", "A striker facing away is less dangerous. Don't let him turn!", "Un delantero de espaldas es menos peligroso. ¡No lo dejes girar!"],
    },
    {
      q: ["Bola longa vindo pelo alto. O que o zagueiro faz?", "A long ball is coming through the air. What does the centre-back do?", "Viene un pelotazo por arriba. ¿Qué hace el central?"],
      opts: [
        ["Calcula onde ela cai e cabeceia alto e longe", "Judges where it lands and heads it high and far", "Calcula dónde cae y cabecea alto y lejos"],
        ["Espera a bola quicar", "Waits for it to bounce", "Espera que bote"],
        ["Sai da frente", "Gets out of the way", "Se aparta"],
      ],
      why: ["Bola quicando dá chance ao atacante. Ataque a bola primeiro!", "A bouncing ball gives the striker a chance. Attack the ball first!", "Un balón que bota le da opciones al delantero. ¡Ataca el balón primero!"],
    },
    {
      q: ["O outro zagueiro saiu para dar o bote. O que você faz?", "Your centre-back partner steps out to tackle. What do you do?", "El otro central salió a presionar. ¿Qué haces?"],
      opts: [
        ["Fico na cobertura, um pouco atrás dele", "Cover him, a little behind", "Hago la cobertura, un poco detrás de él"],
        ["Vou dar o bote junto", "Go and tackle too", "Voy a presionar también"],
        ["Avanço para o ataque", "Push forward to attack", "Avanzo al ataque"],
      ],
      why: ["Se ele for driblado, você está lá para salvar.", "If he gets beaten, you're there to save it.", "Si lo regatean, tú estás para salvar."],
    },
    {
      q: ["Seu time está atacando. Onde ficam os zagueiros?", "Your team is attacking. Where do the centre-backs stay?", "Tu equipo ataca. ¿Dónde se quedan los centrales?"],
      opts: [
        ["Atentos, perto do meio, prontos para o contra-ataque", "Alert, near halfway, ready for a counter", "Atentos, cerca del medio, listos para el contraataque"],
        ["Dentro da área adversária", "Inside the opponents' box", "Dentro del área rival"],
        ["Sentados no gol", "Sitting in the goal", "Sentados en el arco"],
      ],
      why: ["Mesmo atacando, alguém tem que proteger a casa.", "Even when attacking, someone has to guard the house.", "Aun atacando, alguien tiene que cuidar la casa."],
    },
  ],

  lateral: [
    {
      q: ["O ponta do seu time está com a bola, marcado. O que o lateral faz?", "Your winger has the ball and is marked. What does the full-back do?", "El extremo de tu equipo tiene el balón y está marcado. ¿Qué hace el lateral?"],
      opts: [
        ["Passa por fora dele para receber (ultrapassagem)", "Runs round the outside to receive (overlap)", "Pasa por fuera para recibir (desdoble)"],
        ["Fica parado lá atrás", "Stays still at the back", "Se queda quieto atrás"],
        ["Pede para ele chutar de longe", "Tells him to shoot from far", "Le pide que dispare de lejos"],
      ],
      why: ["A ultrapassagem cria um 2 contra 1 pelo lado.", "The overlap creates a 2-v-1 on the flank.", "El desdoble crea un 2 contra 1 por la banda."],
    },
    {
      q: ["O ponta adversário vem em velocidade pelo seu lado. O que você faz?", "The opposing winger is running at you down your side. What do you do?", "El extremo rival viene rápido por tu lado. ¿Qué haces?"],
      opts: [
        ["Fico de lado e empurro ele para a linha lateral", "Stay side-on and show him down the line", "Me pongo de perfil y lo llevo hacia la banda"],
        ["Deixo ele entrar para o meio", "Let him cut inside", "Lo dejo entrar al medio"],
        ["Dou o bote correndo de longe", "Dive in from far away", "Entro corriendo desde lejos"],
      ],
      why: ["Perto da lateral ele tem menos espaço e menos ângulo para chutar.", "Near the touchline he has less space and a worse angle to shoot.", "Cerca de la banda tiene menos espacio y peor ángulo para disparar."],
    },
    {
      q: ["Você subiu ao ataque e o time perdeu a bola. O que faz?", "You went forward and the team lost the ball. What do you do?", "Subiste al ataque y el equipo perdió el balón. ¿Qué haces?"],
      opts: [
        ["Volto correndo para o meu lado", "Sprint back to my side", "Vuelvo corriendo a mi lado"],
        ["Fico lá na frente esperando", "Stay up front and wait", "Me quedo arriba esperando"],
        ["Ando devagar, já cansei", "Walk back, I'm tired", "Camino despacio, ya me cansé"],
      ],
      why: ["Lateral bom ataca e volta. Os dois são trabalho dele.", "A good full-back attacks and gets back. Both are his job.", "Un buen lateral ataca y vuelve. Las dos cosas son su trabajo."],
    },
    {
      q: ["Cruzamento do outro lado. Onde o lateral do lado de cá fica?", "A cross is coming from the other side. Where does the far-side full-back go?", "Viene un centro del otro lado. ¿Dónde se pone el lateral del lado contrario?"],
      opts: [
        ["Fecha no segundo pau, perto da área", "Tucks in at the far post, near the box", "Cierra en el segundo palo, cerca del área"],
        ["Fica colado na linha lateral", "Stays glued to the touchline", "Se queda pegado a la banda"],
        ["Vai para o meio-campo", "Goes to halfway", "Se va al medio campo"],
      ],
      why: ["Muitos gols saem no segundo pau. Alguém tem que fechar ali.", "Lots of goals come at the far post. Someone has to cover it.", "Muchos goles llegan al segundo palo. Alguien tiene que cerrar ahí."],
    },
  ],

  meio: [
    {
      q: ["Antes de a bola chegar, o que o meio-campista faz?", "Before the ball arrives, what does a midfielder do?", "Antes de que llegue el balón, ¿qué hace el mediocampista?"],
      opts: [
        ["Olha por cima do ombro para ver os dois lados", "Checks over both shoulders", "Mira por encima de los hombros a los dos lados"],
        ["Olha só para a bola", "Only looks at the ball", "Mira solo el balón"],
        ["Fica parado no mesmo lugar", "Stands in the same spot", "Se queda en el mismo lugar"],
      ],
      why: ["Quem olha antes recebe já sabendo para onde jogar.", "Look first and you receive already knowing where to play.", "Quien mira antes recibe sabiendo a dónde jugar."],
    },
    {
      q: ["Você recebe e está livre para virar. O que faz?", "You receive and you're free to turn. What do you do?", "Recibes y estás libre para girar. ¿Qué haces?"],
      opts: [
        ["Viro e jogo para a frente", "Turn and play forward", "Giro y juego hacia adelante"],
        ["Devolvo para trás sempre", "Always pass it back", "Siempre la devuelvo atrás"],
        ["Seguro a bola até alguém chegar", "Hold it until someone closes me down", "Me quedo con ella hasta que alguien llegue"],
      ],
      why: ["Livre para virar? Ataque! Jogar para a frente é o que machuca o adversário.", "Free to turn? Attack! Playing forward is what hurts opponents.", "¿Libre para girar? ¡Ataca! Jugar hacia adelante es lo que daña al rival."],
    },
    {
      q: ["O time está perdendo muitas bolas no ataque. O que o meia pode fazer?", "The team keeps losing the ball in attack. What can the midfielder do?", "El equipo pierde muchos balones en ataque. ¿Qué puede hacer el mediocampista?"],
      opts: [
        ["Acalmar o jogo com passes curtos e seguros", "Calm things down with short, safe passes", "Calmar el juego con pases cortos y seguros"],
        ["Chutar de qualquer lugar", "Shoot from anywhere", "Disparar desde cualquier lado"],
        ["Driblar todo mundo sozinho", "Dribble past everyone alone", "Regatear a todos solo"],
      ],
      why: ["O meio-campo é quem controla o ritmo do jogo.", "Midfielders control the rhythm of the game.", "El mediocampo controla el ritmo del partido."],
    },
    {
      q: ["Seu time perdeu a bola no meio. O que você faz primeiro?", "Your team lost the ball in midfield. What do you do first?", "Tu equipo perdió el balón en el medio. ¿Qué haces primero?"],
      opts: [
        ["Pressiono quem pegou a bola ou fecho o passe para a frente", "Press the player on the ball or block the forward pass", "Presiono a quien tiene el balón o cierro el pase hacia adelante"],
        ["Reclamo com quem errou", "Complain to whoever lost it", "Le reclamo a quien la perdió"],
        ["Fico olhando a jogada", "Stand and watch the play", "Me quedo mirando la jugada"],
      ],
      why: ["Reagir rápido evita o contra-ataque do adversário.", "Reacting fast stops the opponents' counter-attack.", "Reaccionar rápido evita el contraataque rival."],
    },
  ],

  atacante: [
    {
      q: ["Cruzamento vindo da direita. Onde o atacante se posiciona?", "A cross is coming from the right. Where does the striker go?", "Viene un centro desde la derecha. ¿Dónde se pone el delantero?"],
      opts: [
        ["Ataca o espaço entre os zagueiros ou o primeiro pau", "Attacks the space between the centre-backs or the near post", "Ataca el espacio entre los centrales o el primer palo"],
        ["Fica parado na marca do pênalti esperando", "Stands still on the penalty spot waiting", "Se queda quieto en el punto penal esperando"],
        ["Volta para o meio-campo", "Drops back to halfway", "Vuelve al medio campo"],
      ],
      why: ["Atacante que se mexe chega antes do zagueiro.", "A striker who moves gets there before the defender.", "El delantero que se mueve llega antes que el central."],
    },
    {
      q: ["Você está cara a cara com o goleiro. O que ajuda mais?", "You're one-on-one with the keeper. What helps most?", "Estás mano a mano con el portero. ¿Qué ayuda más?"],
      opts: [
        ["Olhar o goleiro e chutar colocado no canto", "Look at the keeper and place it in the corner", "Mirar al portero y colocarla en el rincón"],
        ["Chutar com toda a força no meio", "Blast it down the middle", "Disparar con toda la fuerza al medio"],
        ["Fechar os olhos e torcer", "Close your eyes and hope", "Cerrar los ojos y esperar"],
      ],
      why: ["Calma e precisão marcam mais gols que força.", "Calm and accuracy score more goals than power.", "Calma y precisión hacen más goles que la fuerza."],
    },
    {
      q: ["O goleiro soltou a bola depois de um chute. O que o atacante faz?", "The keeper spills a shot. What does the striker do?", "El portero soltó el balón tras un disparo. ¿Qué hace el delantero?"],
      opts: [
        ["Já estava correndo para pegar o rebote", "Was already running in for the rebound", "Ya estaba corriendo a buscar el rebote"],
        ["Comemora antes da hora", "Celebrates too early", "Festeja antes de tiempo"],
        ["Para e lamenta o chute", "Stops and regrets the shot", "Se para y lamenta el disparo"],
      ],
      why: ["Muitos gols nascem de rebote. Sempre acompanhe o chute!", "Lots of goals come from rebounds. Always follow the shot!", "Muchos goles nacen de un rebote. ¡Siempre sigue el disparo!"],
    },
    {
      q: ["Seu time perdeu a bola. O que o atacante faz?", "Your team lost the ball. What does the striker do?", "Tu equipo perdió el balón. ¿Qué hace el delantero?"],
      opts: [
        ["Pressiona o zagueiro para atrapalhar a saída", "Presses the defender to disrupt their build-up", "Presiona al central para molestar la salida"],
        ["Descansa até a bola voltar", "Rests until the ball comes back", "Descansa hasta que vuelva el balón"],
        ["Reclama que ninguém passa para ele", "Complains nobody passes to him", "Se queja de que nadie le pasa"],
      ],
      why: ["O atacante é o primeiro defensor do time.", "The striker is the team's first defender.", "El delantero es el primer defensor del equipo."],
    },
  ],

  depoisErro: [
    {
      q: ["Você perdeu um gol feito. O que faz no lance seguinte?", "You missed an open goal. What do you do on the next play?", "Fallaste un gol hecho. ¿Qué haces en la siguiente jugada?"],
      opts: [
        ["Respiro e peço a bola de novo", "Breathe and ask for the ball again", "Respiro y pido el balón otra vez"],
        ["Fico pensando no erro o jogo todo", "Keep thinking about it the whole game", "Me quedo pensando en el error todo el partido"],
        ["Peço para sair do jogo", "Ask to come off", "Pido salir del partido"],
      ],
      why: ["O próximo lance é uma nova chance. O craque esquece rápido o erro.", "The next play is a new chance. Great players forget mistakes fast.", "La próxima jugada es una nueva oportunidad. El crack olvida rápido el error."],
    },
    {
      q: ["O técnico chamou sua atenção. Como receber a bronca?", "The coach told you off. How do you take it?", "El entrenador te llamó la atención. ¿Cómo lo tomas?"],
      opts: [
        ["Escuto, entendo o que ele quer e tento fazer", "Listen, understand what he wants and try it", "Escucho, entiendo lo que quiere y lo intento"],
        ["Fico bravo e não olho para ele", "Get angry and don't look at him", "Me enojo y no lo miro"],
        ["Faço o contrário só para provocar", "Do the opposite on purpose", "Hago lo contrario para provocar"],
      ],
      why: ["A correção do técnico é para você melhorar, não para te diminuir.", "The coach's correction is to help you improve, not to put you down.", "La corrección del técnico es para que mejores, no para hacerte sentir mal."],
    },
    {
      q: ["Seu time perdeu o jogo. O que é mais importante depois?", "Your team lost. What matters most afterwards?", "Tu equipo perdió. ¿Qué es lo más importante después?"],
      opts: [
        ["Cumprimentar o adversário e pensar no que aprender", "Shake hands and think about what to learn", "Saludar al rival y pensar qué aprender"],
        ["Culpar o juiz", "Blame the referee", "Culpar al árbitro"],
        ["Desistir de jogar", "Give up playing", "Dejar de jugar"],
      ],
      why: ["Todo campeão já perdeu muitas vezes. Perder também ensina.", "Every champion has lost many times. Losing teaches you too.", "Todo campeón perdió muchas veces. Perder también enseña."],
    },
    {
      q: ["Um colega errou e o time levou gol. O que você diz?", "A teammate made a mistake and the team conceded. What do you say?", "Un compañero se equivocó y el equipo recibió gol. ¿Qué le dices?"],
      opts: [
        ["\"Tranquilo, vamos buscar!\"", "\"No worries, let's get it back!\"", "\"¡Tranquilo, vamos a buscarlo!\""],
        ["\"Você estragou tudo!\"", "\"You ruined everything!\"", "\"¡Arruinaste todo!\""],
        ["Não falo mais com ele", "Stop talking to him", "No le hablo más"],
      ],
      why: ["Apoiar o colega deixa o time mais forte.", "Backing your teammate makes the team stronger.", "Apoyar al compañero hace más fuerte al equipo."],
    },
  ],

  pressao: [
    {
      q: ["Você vai bater um pênalti decisivo e está nervoso. O que ajuda?", "You're about to take a decisive penalty and you're nervous. What helps?", "Vas a patear un penal decisivo y estás nervioso. ¿Qué ayuda?"],
      opts: [
        ["Respirar fundo e escolher o canto antes", "Breathe deeply and pick your corner first", "Respirar hondo y elegir el rincón antes"],
        ["Mudar de ideia na hora do chute", "Change your mind as you shoot", "Cambiar de idea al patear"],
        ["Bater correndo para acabar logo", "Rush it to get it over with", "Patear apurado para terminar rápido"],
      ],
      why: ["Respiração e um plano claro deixam o corpo calmo.", "Breathing and a clear plan keep your body calm.", "La respiración y un plan claro calman el cuerpo."],
    },
    {
      q: ["A torcida adversária está gritando contra você. O que faz?", "The opposing fans are shouting at you. What do you do?", "La hinchada rival te grita. ¿Qué haces?"],
      opts: [
        ["Foco no jogo e no que eu controlo", "Focus on the game and what I control", "Me concentro en el juego y en lo que controlo"],
        ["Respondo para a torcida", "Shout back at them", "Les contesto"],
        ["Me escondo e não peço mais a bola", "Hide and stop asking for the ball", "Me escondo y no pido más el balón"],
      ],
      why: ["Você não controla a torcida, mas controla o seu jogo.", "You can't control the crowd, but you control your game.", "No controlas a la hinchada, pero sí tu juego."],
    },
    {
      q: ["Antes de um jogo importante, o que é normal sentir?", "Before a big game, what is normal to feel?", "Antes de un partido importante, ¿qué es normal sentir?"],
      opts: [
        ["Um frio na barriga: é o corpo se preparando", "Butterflies: your body getting ready", "Mariposas en la panza: el cuerpo preparándose"],
        ["Nada: craque nunca fica nervoso", "Nothing: great players never get nervous", "Nada: los cracks nunca se ponen nerviosos"],
        ["Vontade de desistir sempre", "Always wanting to quit", "Siempre ganas de abandonar"],
      ],
      why: ["Até os melhores do mundo ficam nervosos. O segredo é usar essa energia.", "Even the world's best get nervous. The secret is using that energy.", "Hasta los mejores del mundo se ponen nerviosos. El secreto es usar esa energía."],
    },
    {
      q: ["Faltam 2 minutos e o jogo está empatado. Como jogar?", "Two minutes left and it's a draw. How do you play?", "Faltan 2 minutos y el partido está empatado. ¿Cómo juegas?"],
      opts: [
        ["Com calma, fazendo o simples bem feito", "Calmly, doing the simple things well", "Con calma, haciendo lo simple bien"],
        ["Chutando de qualquer lugar, desesperado", "Shooting from anywhere in a panic", "Disparando desde cualquier lado, desesperado"],
        ["Reclamando de tudo", "Complaining about everything", "Protestando por todo"],
      ],
      why: ["Nos momentos decisivos, o simples bem feito ganha jogos.", "In decisive moments, simple things done well win games.", "En los momentos decisivos, lo simple bien hecho gana partidos."],
    },
  ],
});

