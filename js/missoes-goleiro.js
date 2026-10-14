/* Craque de Bola — missões do grupo Goleiro. Carregado depois de missoes-taticas.js.
   Animações em js/animacoes/goleiro.js (animArgs.mode escolhe a dinâmica). */

const CQ_STEPS_GK_GRIP = ["Mãos atrás da bola, polegares quase se tocando (formato de W).", "Hands behind the ball, thumbs almost touching (W shape).", "Manos detrás del balón, pulgares casi tocándose (forma de W)."];
const CQ_STEPS_GK_SOFT = ["Use bola leve e um lugar macio: colchão, cama ou grama.", "Use a light ball and a soft place: a mattress, bed or grass.", "Usa un balón liviano y un lugar blando: colchón, cama o césped."];
const CQ_UNIT_SAVES = ["defesas", "saves", "atajadas"];
const CQ_UNIT_CATCHES = ["encaixes", "catches", "blocajes"];

CQ_MISSIONS.push(
  {
    id: "gkcatch", type: "ball", icon: "🧤", subs: ["gkhandling", "gkreflexes"], tiers: [8, 15, 25, 40], anim: "goleiro", animArgs: { mode: "catch" },
    title: ["Encaixe na parede", "Wall catches", "Blocaje en la pared"],
    desc: ["Jogue a bola na parede com as duas mãos e encaixe na volta. Quantas seguidas sem deixar cair?", "Throw the ball at the wall with both hands and catch the rebound. How many in a row without dropping it?", "Lanza el balón a la pared con las dos manos y atrápalo al volver. ¿Cuántos seguidos sin que se caiga?"],
    steps: [
      ["Fique a uns 3 passos da parede.", "Stand about 3 steps from the wall.", "Ponte a unos 3 pasos de la pared."],
      CQ_STEPS_GK_GRIP,
      ["Encaixe e traga a bola para o peito. Soltou ou quicou? Recomece a contagem.", "Catch it and pull it into your chest. Dropped it or let it bounce? Start counting again.", "Atrápalo y llévalo al pecho. ¿Se te cayó o botó? Empieza a contar de nuevo."],
    ],
    unit: CQ_UNIT_CATCHES,
  },
  {
    id: "gkshuffle", type: "move", icon: "🦀", subs: ["gkpositioning", "agility"], tiers: [6, 9, 12, 15], timer: { mode: "down", s: 30 }, anim: "goleiro", animArgs: { mode: "shuffle" },
    title: ["Passos laterais do goleiro", "Goalkeeper side steps", "Pasos laterales del portero"],
    desc: ["Em 30 segundos, quantas vezes você vai de lado de uma marca a outra e toca a marca com a mão?", "In 30 seconds, how many times can you side-step from one marker to the other and touch it with your hand?", "En 30 segundos, ¿cuántas veces vas de lado de una marca a otra y la tocas con la mano?"],
    steps: [
      ["Coloque duas marcas a 4 passos uma da outra, como se fossem as traves.", "Put two markers 4 steps apart, like goalposts.", "Pon dos marcas a 4 pasos una de otra, como si fueran los postes."],
      ["Vá de lado, na posição de goleiro, sem cruzar as pernas.", "Move sideways in a goalkeeper's stance, without crossing your legs.", "Muévete de lado, en posición de portero, sin cruzar las piernas."],
      ["Cada marca tocada vale 1.", "Each marker touched counts as 1.", "Cada marca tocada cuenta 1."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "gkdive", type: "ball", icon: "🤸", subs: ["gkdiving", "gkhandling"], tiers: [3, 5, 7, 9], max: 10, helper: true, anim: "goleiro", animArgs: { mode: "dive" },
    title: ["Queda no colchão", "Mattress dive", "Estirada en el colchón"],
    desc: ["Um adulto rola a bola para o seu lado. Em 10 bolas, quantas você segura caindo de lado?", "An adult rolls the ball to your side. Out of 10 balls, how many do you hold on to while diving sideways?", "Un adulto te rueda el balón a un lado. De 10 balones, ¿cuántos atrapas cayendo de lado?"],
    steps: [
      CQ_STEPS_GK_SOFT,
      ["Comece de joelhos. Quando ficar fácil, comece agachado.", "Start on your knees. When it gets easy, start from a crouch.", "Empieza de rodillas. Cuando sea fácil, empieza agachado."],
      ["Caia de lado (quadril e ombro), nunca de barriga, com as duas mãos na bola.", "Land on your side (hip and shoulder), never on your belly, with both hands on the ball.", "Cae de lado (cadera y hombro), nunca de panza, con las dos manos en el balón."],
      ["5 bolas para a direita e 5 para a esquerda.", "5 balls to the right and 5 to the left.", "5 balones a la derecha y 5 a la izquierda."],
    ],
    unit: CQ_UNIT_SAVES,
  },
  {
    id: "gktennis", type: "ball", icon: "🎾", subs: ["gkreflexes", "gkhandling"], tiers: [10, 20, 35, 50], anim: "goleiro", animArgs: { mode: "tennis" },
    title: ["Bolinha na parede", "Small ball off the wall", "Pelotita a la pared"],
    desc: ["Jogue uma bolinha (de tênis ou de meia) na parede e pegue na volta, alternando as mãos. Quantas seguidas?", "Throw a small ball (tennis ball or rolled-up sock) at the wall and catch it, switching hands. How many in a row?", "Lanza una pelotita (de tenis o de medias) a la pared y atrápala, alternando las manos. ¿Cuántas seguidas?"],
    steps: [
      ["Fique a 2 passos da parede.", "Stand 2 steps from the wall.", "Ponte a 2 pasos de la pared."],
      ["Jogue com a direita e pegue com a esquerda. Depois o contrário.", "Throw with your right and catch with your left. Then the other way.", "Lanza con la derecha y atrapa con la izquierda. Después al revés."],
      ["Caiu? Recomece a contagem.", "Dropped it? Start counting again.", "¿Se cayó? Empieza a contar de nuevo."],
    ],
    unit: CQ_UNIT_CATCHES,
  },
  {
    id: "gkdrop", type: "ball", icon: "⬇️", subs: ["gkreflexes", "reactions"], tiers: [3, 5, 7, 9], max: 10, helper: true, anim: "goleiro", animArgs: { mode: "drop" },
    title: ["Bola caindo", "Dropping ball", "Balón que cae"],
    desc: ["Um adulto solta a bola sem avisar. Em 10 bolas, quantas você pega antes do segundo quique?", "An adult drops the ball without warning. Out of 10 balls, how many do you catch before the second bounce?", "Un adulto suelta el balón sin avisar. De 10 balones, ¿cuántos atrapas antes del segundo bote?"],
    steps: [
      ["O adulto fica a 3 passos, com a bola esticada na altura do ombro.", "The adult stands 3 steps away, holding the ball out at shoulder height.", "El adulto se pone a 3 pasos, con el balón estirado a la altura del hombro."],
      ["Fique na posição de goleiro: joelhos dobrados, mãos na frente.", "Get in a goalkeeper's stance: knees bent, hands in front.", "Ponte en posición de portero: rodillas flexionadas, manos delante."],
      ["Ele solta quando quiser. Pegou antes do segundo quique? Vale 1.", "He lets go whenever he wants. Caught before the second bounce? Counts as 1.", "Lo suelta cuando quiere. ¿Lo atrapaste antes del segundo bote? Cuenta 1."],
    ],
    unit: CQ_UNIT_SAVES,
  },
  {
    id: "gkthrow", type: "ball", icon: "🎳", subs: ["gkkicking", "vision"], tiers: [2, 4, 6, 8], max: 10, anim: "goleiro", animArgs: { mode: "throw" },
    title: ["Reposição com a mão", "Throw-out to a teammate", "Saque con la mano"],
    desc: ["Em 10 tentativas, quantas vezes você rola a bola com a mão e acerta um alvo a 10 passos?", "Out of 10 tries, how many times do you roll the ball with your hand and hit a target 10 steps away?", "De 10 intentos, ¿cuántas veces ruedas el balón con la mano y aciertas un blanco a 10 pasos?"],
    steps: [
      CQ_STEPS_TARGET,
      ["Dê um passo à frente, abaixe o corpo e role a bola rasteira, como no boliche.", "Step forward, get low and roll the ball along the ground, like bowling.", "Da un paso adelante, baja el cuerpo y rueda el balón por el suelo, como en los bolos."],
      ["Alterne as mãos: uma com a direita, a próxima com a esquerda.", "Switch hands: one with your right, the next with your left.", "Alterna las manos: uno con la derecha, el siguiente con la izquierda."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "gkquiz", type: "quiz", quiz: "goleiro", icon: "🥅", subs: ["gkpositioning", "communication"], tiers: [1, 2, 3],
    title: ["Pense como goleiro", "Think like a goalkeeper", "Piensa como portero"],
    desc: ["3 perguntas sobre posição, saídas, cruzamentos e barreira.", "3 questions about positioning, coming out, crosses and the wall.", "3 preguntas sobre colocación, salidas, centros y barrera."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "gkhigh", type: "ball", icon: "🙌", subs: ["gkhandling", "jumping"], tiers: [3, 5, 7, 9], max: 10, helper: true, anim: "goleiro", animArgs: { mode: "high" },
    title: ["Bola alta", "High ball", "Balón alto"],
    desc: ["Um adulto joga a bola alta na sua direção. Em 10 bolas, quantas você segura no alto, sem soltar?", "An adult throws the ball high towards you. Out of 10 balls, how many do you hold at the highest point without dropping?", "Un adulto te lanza el balón alto. De 10 balones, ¿cuántos atrapas arriba sin soltarlo?"],
    steps: [
      ["O adulto joga a bola com as mãos, de 4 passos, por cima da sua cabeça.", "The adult throws the ball from 4 steps away, above your head.", "El adulto lanza el balón desde 4 pasos, por encima de tu cabeza."],
      ["Suba com um joelho para cima: ele protege você.", "Jump with one knee up: it protects you.", "Salta con una rodilla arriba: te protege."],
      CQ_STEPS_GK_GRIP,
    ],
    unit: CQ_UNIT_CATCHES,
  },
  {
    id: "gkpunt", type: "ball", icon: "🦶", subs: ["gkkicking", "long"], tiers: [2, 3, 5, 7], max: 10, anim: "goleiro", animArgs: { mode: "punt" },
    title: ["Bate-pronto", "Drop kick", "Patada de volea"],
    desc: ["Em 10 tentativas, quantas vezes você solta a bola das mãos, chuta antes de ela tocar o chão e acerta uma zona a 20 passos?", "Out of 10 tries, how many times do you drop the ball from your hands, kick it before it lands and hit a zone 20 steps away?", "De 10 intentos, ¿cuántas veces sueltas el balón de las manos, lo pateas antes de que toque el suelo y aciertas una zona a 20 pasos?"],
    steps: [
      ["Num lugar aberto, marque uma zona de 4 passos de largura, a 20 passos.", "In an open space, mark a zone 4 steps wide, 20 steps away.", "En un lugar abierto, marca una zona de 4 pasos de ancho, a 20 pasos."],
      ["Solte a bola, não jogue para cima. Chute com o peito do pé.", "Drop the ball, don't throw it up. Kick with your laces.", "Suelta el balón, no lo lances hacia arriba. Patea con el empeine."],
      CQ_STEPS_5_5,
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "gkpenalty", type: "ball", icon: "🙅", subs: ["gkdiving", "gkreflexes"], tiers: [1, 2, 3, 5], max: 10, helper: true, anim: "goleiro", animArgs: { mode: "penalty" },
    title: ["Defenda o pênalti", "Save the penalty", "Ataja el penal"],
    desc: ["Um adulto bate 10 pênaltis num gol pequeno. Quantos você defende?", "An adult takes 10 penalties at a small goal. How many do you save?", "Un adulto patea 10 penales a un arco pequeño. ¿Cuántos atajas?"],
    steps: [
      CQ_STEPS_GK_SOFT,
      ["Gol de uns 4 passos de largura. O adulto chuta a 7 passos, sem força total.", "A goal about 4 steps wide. The adult kicks from 7 steps, not full power.", "Arco de unos 4 pasos de ancho. El adulto patea a 7 pasos, sin fuerza total."],
      ["Espere o chute em cima da linha, sem pular antes.", "Wait on the line for the kick, don't dive early.", "Espera el disparo sobre la línea, sin tirarte antes."],
    ],
    unit: CQ_UNIT_SAVES,
  },
  {
    id: "gkgoalkick", type: "ball", icon: "🚀", subs: ["gkkicking", "long"], tiers: [2, 3, 5, 7], max: 10, anim: "goleiro", animArgs: { mode: "goalkick" },
    title: ["Tiro de meta", "Goal kick", "Saque de puerta"],
    desc: ["Em 10 tiros de meta com a bola parada, quantos caem numa zona a 25 passos?", "Out of 10 goal kicks from a dead ball, how many land in a zone 25 steps away?", "De 10 saques de puerta con el balón parado, ¿cuántos caen en una zona a 25 pasos?"],
    steps: [
      ["Num lugar aberto, marque uma zona de 5 passos de largura, a 25 passos.", "In an open space, mark a zone 5 steps wide, 25 steps away.", "En un lugar abierto, marca una zona de 5 pasos de ancho, a 25 pasos."],
      ["Corra em diagonal, pé de apoio ao lado da bola e chute com o peito do pé, embaixo do meio da bola.", "Run up at an angle, standing foot beside the ball, and strike with your laces just below the middle.", "Corre en diagonal, pie de apoyo al lado del balón y patea con el empeine, debajo del centro del balón."],
      CQ_STEPS_5_5,
    ],
    unit: CQ_UNIT_HITS,
  },
);

Object.assign(CQ_QUIZ, {
  goleiro: [
    {
      q: ["O atacante vai chutar da diagonal. Onde o goleiro se posiciona?", "The striker is about to shoot from an angle. Where does the goalkeeper stand?", "El delantero va a disparar en diagonal. ¿Dónde se coloca el portero?"],
      opts: [
        ["Na linha entre a bola e o meio do gol, um pouco à frente da linha", "On the line between the ball and the middle of the goal, a little off the line", "En la línea entre el balón y el centro del arco, un poco adelantado"],
        ["Sempre no meio do gol, em cima da linha", "Always in the middle of the goal, on the line", "Siempre en el centro del arco, sobre la línea"],
        ["Encostado na trave mais longe da bola", "Next to the post furthest from the ball", "Pegado al poste más lejano al balón"],
      ],
      why: ["Entre a bola e o centro do gol, você fica à mesma distância dos dois cantos.", "Between the ball and the centre of the goal, you're the same distance from both corners.", "Entre el balón y el centro del arco, quedas a la misma distancia de los dos rincones."],
      scene: {
        view: [-4, 12, 58],
        us: [["gk", 2, 32]],
        them: [["", 30, 15]],
        ball: [30, 15],
        steps: [
          { d: 1.4, them: { 0: [24, 16] }, ball: [24, 16], us: { 0: [5, 28] }, arrows: [[24, 16, 0, 28.5, "them"], [24, 16, 0, 35.5, "them"]], text: ["Entre a bola e o meio do gol", "Between the ball and the goal's centre", "Entre el balón y el centro del arco"] },
          { d: 1.4, hl: { us: [0] }, text: ["A mesma distância dos dois cantos", "Same distance to both corners", "Misma distancia a los dos rincones"] },
        ],
      },
    },
    {
      q: ["O atacante vem sozinho, cara a cara com você. O que faz?", "The striker is clean through, one-on-one with you. What do you do?", "El delantero viene solo, mano a mano contigo. ¿Qué haces?"],
      opts: [
        ["Saio para diminuir o ângulo e fico grande, esperando ele decidir", "Come out to narrow the angle and stay big, waiting for him to commit", "Salgo para cerrar el ángulo y me hago grande, esperando que decida"],
        ["Fico em cima da linha esperando o chute", "Stay on my line waiting for the shot", "Me quedo sobre la línea esperando el disparo"],
        ["Me jogo no chão antes de ele chegar perto", "Go to ground before he gets close", "Me tiro al suelo antes de que se acerque"],
      ],
      why: ["Saindo, o gol \"fica menor\" para o atacante. Cair antes da hora deixa ele driblar você.", "Coming out makes the goal look smaller to him. Going down too early lets him go round you.", "Al salir, el arco \"se achica\" para el delantero. Tirarse antes deja que te regatee."],
      scene: {
        view: [-4, 12, 58],
        us: [["gk", 2, 32]],
        them: [["", 42, 32]],
        ball: [42, 32],
        steps: [
          { d: 1.6, them: { 0: [24, 32] }, ball: [24, 32], us: { 0: [11, 32] }, arrows: [[2, 32, 11, 32]], text: ["Sai e fecha o ângulo", "Come out and narrow the angle", "Sal y cierra el ángulo"] },
          { d: 1.2, arrows: [[24, 32, 0, 28.5, "them"], [24, 32, 0, 35.5, "them"]], hl: { us: [0] }, text: ["Sobra pouco gol para ele", "Little goal left for him", "Le queda poco arco"] },
        ],
      },
    },
    {
      q: ["Vem um cruzamento alto na pequena área. O que o goleiro faz?", "A high cross comes into the six-yard box. What does the goalkeeper do?", "Llega un centro alto al área chica. ¿Qué hace el portero?"],
      opts: [
        ["Sai com decisão, grita \"goleiro!\" e pega no ponto mais alto", "Comes out decisively, shouts \"keeper!\" and catches it at its highest point", "Sale con decisión, grita \"¡portero!\" y la atrapa en el punto más alto"],
        ["Fica no gol esperando o cabeceio do atacante", "Stays in goal waiting for the striker's header", "Se queda en el arco esperando el cabezazo"],
        ["Sai devagar e para no meio do caminho", "Comes out slowly and stops halfway", "Sale despacio y se para a mitad de camino"],
      ],
      why: ["Na pequena área a bola é do goleiro. Gritar avisa os zagueiros para saírem da frente.", "In the six-yard box the ball belongs to the keeper. Shouting tells the defenders to get out of the way.", "En el área chica el balón es del portero. Gritar avisa a los defensores que se aparten."],
      scene: {
        view: [-4, 12, 58],
        us: [["gk", 3, 32], ["cb", 9, 28]],
        them: [["", 22, 47], ["", 12, 30]],
        ball: [22, 47],
        steps: [
          { d: 1.2, ball: [8, 33], us: { 0: [8, 34] }, arrows: [[22, 47, 8, 33, "ball"], [3, 32, 8, 34]], text: ["Sai com decisão...", "Comes out decisively...", "Sale con decisión..."] },
          { d: 1.2, hl: { us: [0] }, text: ["...grita \"goleiro!\" e pega no alto", "...shouts \"keeper!\" and catches it", "...grita \"¡portero!\" y la atrapa"] },
        ],
      },
    },
    {
      q: ["Não dá para segurar um chute muito forte. Para onde espalmar?", "You can't hold a very powerful shot. Where do you parry it?", "No puedes atrapar un disparo muy fuerte. ¿Hacia dónde lo desvías?"],
      opts: [
        ["Para os lados, longe da área", "To the sides, away from the box", "Hacia los costados, lejos del área"],
        ["Para a frente, no meio da área", "Forwards, into the middle of the box", "Hacia adelante, al centro del área"],
        ["Para cima, de volta ao centro", "Upwards, back towards the middle", "Hacia arriba, de vuelta al centro"],
      ],
      why: ["Bola espalmada para o meio vira rebote na cara do atacante.", "A ball parried into the middle becomes a rebound right at the striker's feet.", "Un balón desviado al medio es un rebote a los pies del delantero."],
      scene: {
        view: [-4, 12, 58],
        us: [["gk", 4, 32]],
        them: [["", 24, 30], ["", 18, 38]],
        ball: [24, 30],
        steps: [
          { d: 0.7, ball: [4, 28], us: { 0: [4, 29] }, arrows: [[24, 30, 4, 28, "ball"]], text: ["Chute forte demais...", "Too powerful to hold...", "Demasiado fuerte..."] },
          { d: 1.1, ball: [12, 14], arrows: [[4, 28, 12, 14, "ball"]], hl: { us: [0] }, text: ["...espalme para o lado", "...parry it wide", "...desvíalo al costado"] },
        ],
      },
    },
    {
      q: ["Falta perto da área contra o seu time. Quem organiza a barreira?", "Free kick near the box against your team. Who sets up the wall?", "Tiro libre cerca del área en contra. ¿Quién organiza la barrera?"],
      opts: [
        ["O goleiro: a barreira fecha um canto e ele cobre o outro", "The goalkeeper: the wall covers one corner and he covers the other", "El portero: la barrera cubre un rincón y él cubre el otro"],
        ["O zagueiro mais alto, sem falar com o goleiro", "The tallest defender, without talking to the keeper", "El central más alto, sin hablar con el portero"],
        ["Ninguém: cada um fica onde quiser", "Nobody: everyone stands wherever they like", "Nadie: cada uno se pone donde quiere"],
      ],
      why: ["O goleiro vê o gol inteiro. Ele manda a barreira fechar um canto e fica no outro.", "The keeper sees the whole goal. He puts the wall on one side and covers the other.", "El portero ve todo el arco. Pone la barrera en un lado y él cubre el otro."],
      scene: {
        view: [-4, 12, 58],
        us: [["gk", 3, 32], ["", 16, 24], ["", 16, 27], ["", 16, 30]],
        them: [["", 28, 22]],
        ball: [27, 23],
        steps: [
          { d: 1.4, zone: [0, 27, 4, 4], hl: { us: [1, 2, 3] }, text: ["A barreira fecha o canto mais perto", "The wall covers the near corner", "La barrera cubre el rincón cercano"] },
          { d: 1.4, us: { 0: [3, 35] }, hl: { us: [0] }, text: ["O goleiro cobre o outro canto", "The keeper covers the other corner", "El portero cubre el otro rincón"] },
        ],
      },
    },
    {
      q: ["Você fez a defesa e segurou a bola. O que faz em seguida?", "You've made the save and held the ball. What do you do next?", "Hiciste la atajada y te quedaste con el balón. ¿Qué haces después?"],
      opts: [
        ["Olho rápido e reponho num colega livre para começar o contra-ataque", "Look up quickly and release a free teammate to start a counter", "Miro rápido y saco a un compañero libre para empezar el contraataque"],
        ["Seguro a bola até todos voltarem para a defesa", "Hold the ball until everyone is back in defence", "Me quedo con el balón hasta que todos vuelvan a defender"],
        ["Chuto o mais longe possível, sem olhar", "Kick it as far as possible without looking", "La pateo lo más lejos posible sin mirar"],
      ],
      why: ["O goleiro também ataca: logo depois da defesa, o adversário está todo no ataque.", "Keepers attack too: right after a save, the opponents are all up the pitch.", "El portero también ataca: justo después de la atajada, el rival está todo arriba."],
      scene: {
        us: [["gk", 6, 32], ["fb", 30, 56], ["st", 56, 44]],
        them: [["", 14, 30], ["", 16, 40], ["", 36, 40]],
        ball: [6, 32],
        steps: [
          { d: 1.0, look: ["us", 0, [0, 50, 20]], text: ["Olha rápido...", "Look up quickly...", "Mira rápido..."] },
          { d: 0.9, ball: [30, 56], arrows: [[6, 32, 30, 56, "ball"]], text: ["...repõe no colega livre", "...release the free teammate", "...saca al compañero libre"] },
          { d: 1.0, ball: [60, 44], us: { 2: [62, 44] }, arrows: [[30, 56, 60, 44, "ball"]], text: ["Contra-ataque!", "Counter-attack!", "¡Contraataque!"] },
        ],
      },
    },
    {
      q: ["Chute rasteiro vindo direto em você. Como defender?", "A low shot is coming straight at you. How do you save it?", "Un disparo rasante viene directo hacia ti. ¿Cómo lo atajas?"],
      opts: [
        ["Corpo atrás da bola, pernas fechadas e mãos juntas na frente", "Body behind the ball, legs together and hands together in front", "Cuerpo detrás del balón, piernas juntas y manos juntas delante"],
        ["Com uma mão só, de lado para a bola", "With one hand, side-on to the ball", "Con una sola mano, de perfil al balón"],
        ["Com as pernas abertas, para a bola passar se escapar", "Legs apart, so the ball goes through if it slips", "Con las piernas abiertas, para que pase si se escapa"],
      ],
      why: ["Se a bola escapar das mãos, o corpo atrás é a segunda barreira.", "If the ball slips through your hands, your body behind it is the second barrier.", "Si el balón se escapa de las manos, el cuerpo detrás es la segunda barrera."],
    },
  ],
});
