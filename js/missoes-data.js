/* ============================================================
   Craque de Bola — catálogo de missões e trilhas.
   Textos em [pt, en, es]. Para criar uma missão nova, copie
   uma ficha, troque o "id" e coloque-a numa fase de CQ_TRAILS.
   type: ball (com bola), move (movimento), quiz (perguntas),
         mind (cabeça), auto (sobe sozinha).
   tiers: metas de Bronze, Prata, Ouro e Lenda. O Bronze deve ser
          fácil. A próxima fase abre ao registrar qualquer resultado.
   lower: true quando quanto menor, melhor (tiers decrescentes).
   anim: true quando existe js/animacoes/<id>.js, ou o nome de uma
         cena compartilhada ("medida") com parâmetros em animArgs.
   Missões que pedem outra pessoa (👥 na descrição) nunca ficam em
   fases seguidas, para ninguém travar sem ajuda em casa.
   As missões da segunda leva ficam em js/missoes-extra.js.
   ============================================================ */

// One mission per phase: each phase is one link of the chain.
const CQ_CHAIN = {
  rit: ["shuttle", "flipflops", "skipping", "sprintball", "conemove", "treasure", "star", "ladder", "sprint20"],
  fin: ["target", "weakshot", "penalty", "placed", "stepshot", "volley", "firsttime", "header", "controlshot", "longshot", "chip", "freekick"],
  pas: ["weak", "measure10", "twofeet", "bucket3", "orient", "measure15", "longpass", "bucket5", "altinha", "measure20", "cross", "bucket8", "measure25"],
  con: ["keepy", "trap", "slalom", "keepyalt", "chest", "zigzag", "walk5", "dribble", "trapweak", "slalomweak", "skills", "elastico", "walk10", "walkalt", "roleta", "headkeepy", "chapeu", "walkhead"],
  def: ["bote", "sidestep", "steal", "backrun", "heading", "intercept", "sliding", "shadow", "clearance"],
  fis: ["hops", "jacks", "squats", "jump", "plank", "shield", "rope", "stepup", "onefoot", "situps", "lunges"],
  int: [
    "quiz", "voltou", "chuva", "tecnica", "leitura", "esquemas", "offball", "chuvanao", "contra", "espaco", "setpiece", "bloco",
    "rules", "impedimento", "chuvaconfusa", "tirometa", "chuvadupla", "lateralarea", "escanteio", "transicao", "chuvamaluca", "funcoes", "poscb", "posfb", "desvio", "posmid", "posst",
  ],
  cab: [
    "turma", "statue", "nuvens", "nuvemcount", "breath", "agora", "grade", "nomear", "termometro", "blindstatue",
    "rotina", "minharotina", "gradeinversa", "estoico", "countdown", "lanterna", "gradeduo", "sofa", "cincomin", "metas", "metasemana",
    "vigia", "gradezum", "gratidao", "cinema", "pavao", "timeunido", "vozcampo", "grade6", "porque", "descanso", "sono", "lesao", "melhor", "streak",
  ],
  gol: ["gkcatch", "gkshuffle", "gkdive", "gktennis", "gkdrop", "gkthrow", "gkquiz", "gkhigh", "gkpunt", "gkpenalty", "gkgoalkick"],
};
const CQ_TRAILS = Object.entries(CQ_CHAIN).map(([id, ids]) => ({ id, phases: ids.map((m) => [m]) }));

const CQ_STEPS_ROUND_TRIP = ["Ida e volta vale 1.", "There and back counts as 1.", "Ida y vuelta cuenta 1."];
const CQ_UNIT_HITS = ["acertos", "hits", "aciertos"];
const CQ_UNIT_TRIPS = ["voltas", "trips", "vueltas"];
// Both feet in every ball mission where the foot matters (no "weak foot" missions).
const CQ_STEPS_5_5 = ["Faça 5 com o pé direito e 5 com o esquerdo.", "Do 5 with your right foot and 5 with your left.", "Haz 5 con el pie derecho y 5 con el izquierdo."];
const CQ_STEPS_ALTERNATE = ["Alterne os pés: um com o direito, o próximo com o esquerdo.", "Switch feet: one with your right, the next with your left.", "Alterna los pies: uno con el derecho, el siguiente con el izquierdo."];
const CQ_STEPS_CARRY_FEET = ["Na ida, toque a bola só com o pé direito. Na volta, só com o esquerdo.", "On the way out, touch the ball with your right foot only. On the way back, with your left only.", "A la ida, toca el balón solo con el pie derecho. A la vuelta, solo con el izquierdo."];
const CQ_STEPS_BOTH_FEET = ["Use os dois pés, o direito e o esquerdo.", "Use both feet, right and left.", "Usa los dos pies, el derecho y el izquierdo."];

const CQ_MISSIONS = [
  // Ritmo
  {
    id: "shuttle", type: "move", icon: "🏃", subs: ["acceleration", "sprint"], tiers: [6, 9, 12, 15], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Vai e volta", "Shuttle run", "Ida y vuelta"],
    desc: ["Em 30 segundos, quantas vezes você toca as marcas correndo de uma para a outra?", "In 30 seconds, how many times can you touch the markers running from one to the other?", "En 30 segundos, ¿cuántas veces tocas las marcas corriendo de una a la otra?"],
    steps: [
      ["Coloque duas marcas a 10 passos: cone, chinelo, garrafa ou o que tiver em casa.", "Place two markers 10 steps apart: a cone, a flip-flop, a bottle or anything you have at home.", "Pon dos marcas a 10 pasos: un cono, una chancla, una botella o lo que tengas en casa."],
      ["Corra e toque a marca com a mão.", "Run and touch the marker with your hand.", "Corre y toca la marca con la mano."],
      ["Cada marca tocada vale 1.", "Each marker touched counts as 1.", "Cada marca tocada cuenta 1."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "flipflops", type: "move", icon: "👟", subs: ["acceleration", "agility"], tiers: [4, 6, 8, 10], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Busca-chinelos", "Flip-flop fetch", "Busca chanclas"],
    desc: ["Em 30 segundos, quantos chinelos ou qualquer objeto você busca e traz de volta, um por vez?", "In 30 seconds, how many flip-flops or any other objects can you fetch and bring back, one at a time?", "En 30 segundos, ¿cuántas chanclas u otros objetos buscas y traes, uno por vez?"],
    steps: [
      ["Espalhe chinelos ou qualquer objeto a 5 passos de uma linha.", "Spread flip-flops or any other objects 5 steps from a line.", "Reparte chanclas u otros objetos a 5 pasos de una línea."],
      ["Corra, pegue um e traga até a linha.", "Run, grab one and bring it back to the line.", "Corre, agarra uno y tráelo a la línea."],
      ["Cada objeto trazido vale 1.", "Each object brought back counts as 1.", "Cada objeto traído cuenta 1."],
    ],
    unit: ["objetos", "objects", "objetos"],
  },
  {
    id: "sprintball", type: "ball", icon: "💨", subs: ["sprint", "carry"], tiers: [3, 4, 6, 8], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Pique com bola", "Sprint with the ball", "Pique con balón"],
    desc: ["Em 30 segundos, quantas idas e voltas conduzindo a bola entre duas marcas a 10 passos?", "In 30 seconds, how many round trips dribbling between two markers 10 steps apart?", "En 30 segundos, ¿cuántas idas y vueltas conduciendo entre dos marcas a 10 pasos?"],
    steps: [
      ["Coloque duas marcas a 10 passos: cone, chinelo, garrafa ou qualquer objeto.", "Place two markers 10 steps apart: a cone, a flip-flop, a bottle or any object.", "Pon dos marcas a 10 pasos: un cono, una chancla, una botella o cualquier objeto."],
      ["Conduza rápido, com toques curtos. Na marca, puxe a bola com a sola e vire.", "Dribble fast with short touches. At the marker, drag the ball back with your sole and turn.", "Conduce rápido con toques cortos. En la marca, arrastra el balón con la suela y gira."],
      CQ_STEPS_CARRY_FEET,
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },

  // Finalização
  {
    id: "target", type: "ball", icon: "🎯", subs: ["finishing", "composure"], tiers: [3, 5, 7, 9], max: 10, anim: true,
    title: ["Chute no alvo", "Target shooting", "Tiro al blanco"],
    desc: ["Em 10 chutes, quantos acertam o alvo?", "Out of 10 shots, how many hit the target?", "De 10 tiros, ¿cuántos dan en el blanco?"],
    steps: [
      ["Escolha um alvo: uma cadeira, um balde ou um canto do muro.", "Pick a target: a chair, a bucket or a corner of a wall.", "Elige un blanco: una silla, un balde o una esquina del muro."],
      ["Chute de uns 5 passos.", "Shoot from about 5 steps.", "Dispara desde unos 5 pasos."],
      CQ_STEPS_5_5,
      ["Conte os acertos.", "Count the hits.", "Cuenta los aciertos."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "penalty", type: "ball", icon: "🥅", subs: ["penalties", "composure"], tiers: [3, 5, 7, 9], max: 10, anim: true,
    title: ["Pênalti no cantinho", "Corner penalty", "Penalti al rincón"],
    desc: ["Em 10 cobranças, quantas entram no canto marcado?", "Out of 10 penalties, how many go into the marked corner?", "De 10 penaltis, ¿cuántos entran en el rincón marcado?"],
    steps: [
      ["Marque um canto do gol com um chinelo.", "Mark a corner of the goal with a flip-flop.", "Marca un rincón del arco con una chancla."],
      ["Chute de 7 passos, com calma.", "Shoot from 7 steps, nice and calm.", "Dispara desde 7 pasos, con calma."],
      ["Conte as bolas no canto.", "Count the balls in the corner.", "Cuenta los balones en el rincón."],
    ],
    unit: ["gols no canto", "corner goals", "goles al rincón"],
  },
  {
    id: "header", type: "ball", icon: "💫", subs: ["headfin", "attpos"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Cabeçada no gol", "Header on goal", "Cabezazo al arco"],
    desc: ["Em 10 tentativas, quantas cabeçadas para baixo acertam o canto do gol?", "Out of 10 tries, how many downward headers hit the corner of the goal?", "De 10 intentos, ¿cuántos cabezazos hacia abajo van al rincón del arco?"],
    steps: [
      ["Use só bola leve: de plástico ou bexiga.", "Only use a light ball: plastic or a balloon.", "Usa solo balón liviano: de plástico o un globo."],
      ["Alguém joga a bola para você, ou jogue para cima.", "Someone tosses you the ball, or toss it up yourself.", "Alguien te lanza el balón, o lánzalo tú hacia arriba."],
      ["Cabeceie com a testa, de olhos abertos, para baixo e no canto: assim o goleiro não pega.", "Head it with your forehead, eyes open, down into the corner: that's how you beat the keeper.", "Cabecea con la frente, con los ojos abiertos, hacia abajo y al rincón: así el portero no llega."],
    ],
    unit: ["gols", "goals", "goles"],
  },
  {
    id: "longshot", type: "ball", icon: "🚀", subs: ["longshots", "power"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Chute de longe", "Long shot", "Tiro lejano"],
    desc: ["Em 10 chutes de 15 passos, quantos acertam o gol?", "Out of 10 shots from 15 steps, how many are on target?", "De 10 tiros desde 15 pasos, ¿cuántos van al arco?"],
    steps: [
      ["Marque um gol com dois chinelos ou use um muro.", "Mark a goal with two flip-flops or use a wall.", "Marca un arco con dos chanclas o usa un muro."],
      ["Chute com o peito do pé, firme.", "Strike with your laces, nice and firm.", "Golpea con el empeine, firme."],
      CQ_STEPS_5_5,
      ["Conte os chutes no gol.", "Count the shots on target.", "Cuenta los tiros al arco."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "volley", type: "ball", icon: "🦵", subs: ["volleys", "finishing"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Bate-pronto", "Volley", "Volea"],
    desc: ["Em 10 tentativas, quantos chutes de bate-pronto acertam o alvo?", "Out of 10 tries, how many volleys hit the target?", "De 10 intentos, ¿cuántas voleas dan en el blanco?"],
    steps: [
      ["Solte a bola das mãos.", "Drop the ball from your hands.", "Suelta el balón de las manos."],
      ["Chute antes de ela tocar o chão.", "Kick it before it touches the ground.", "Patéalo antes de que toque el suelo."],
      CQ_STEPS_5_5,
      ["Conte os acertos na parede ou no alvo.", "Count the hits on the wall or target.", "Cuenta los aciertos en la pared o el blanco."],
    ],
    unit: CQ_UNIT_HITS,
  },

  // Passes
  {
    id: "weak", type: "ball", icon: "🔂", subs: ["short", "reactions"], tiers: [10, 18, 26, 34], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Parede de primeira", "One-touch wall passes", "Pared de primera"],
    desc: ["Em 1 minuto, quantos passes na parede você faz de primeira, sem dominar a bola?", "In 1 minute, how many one-touch wall passes can you make, without controlling the ball?", "En 1 minuto, ¿cuántos pases a la pared haces de primera, sin controlar el balón?"],
    steps: [
      ["Fique a uns 2 passos da parede.", "Stand about 2 steps from a wall.", "Ponte a unos 2 pasos de la pared."],
      ["A bola voltou? Devolva na hora, sem parar a bola.", "Ball's back? Pass it straight back, without stopping it.", "¿Volvió el balón? Devuélvelo al momento, sin pararlo."],
      CQ_STEPS_ALTERNATE,
      ["Parou a bola ou ela escapou? Continue a contagem de onde estava.", "Stopped the ball or lost it? Carry on counting from where you were.", "¿Paraste el balón o se escapó? Sigue contando desde donde ibas."],
    ],
    unit: ["passes", "passes", "pases"],
  },
  {
    id: "longpass", type: "ball", icon: "🪣", subs: ["long"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Lançamento no balde", "Bucket long pass", "Pase largo al balde"],
    desc: ["Em 10 lançamentos de 15 passos, quantos param perto do balde?", "Out of 10 long passes from 15 steps, how many stop near the bucket?", "De 10 pases largos desde 15 pasos, ¿cuántos quedan cerca del balde?"],
    steps: [
      ["Coloque um balde ou mochila a 15 passos.", "Put a bucket or backpack 15 steps away.", "Pon un balde o mochila a 15 pasos."],
      ["Lance a bola pelo alto.", "Send the ball through the air.", "Lanza el balón por arriba."],
      CQ_STEPS_5_5,
      ["Vale se parar a até 2 passos do alvo.", "It counts if it stops within 2 steps of the target.", "Vale si queda a 2 pasos o menos del blanco."],
    ],
    unit: ["lançamentos certos", "good passes", "pases buenos"],
  },
  {
    id: "cross", type: "ball", icon: "📦", subs: ["cross"], tiers: [2, 3, 5, 7], max: 10, anim: true,
    title: ["Cruzamento na caixa", "Cross into the box", "Centro al área"],
    desc: ["Em 10 cruzamentos, quantos caem dentro da área marcada?", "Out of 10 crosses, how many land inside the marked area?", "De 10 centros, ¿cuántos caen dentro del área marcada?"],
    steps: [
      ["Marque um quadrado de 3 passos com chinelos.", "Mark a 3-step square with flip-flops.", "Marca un cuadrado de 3 pasos con chanclas."],
      ["Cruze da lateral, a 10 passos do quadrado.", "Cross from the side, 10 steps from the square.", "Centra desde la banda, a 10 pasos del cuadrado."],
      ["Faça 5 cruzamentos do lado direito com o pé direito e 5 do lado esquerdo com o pé esquerdo.", "Do 5 crosses from the right side with your right foot and 5 from the left side with your left foot.", "Haz 5 centros desde la derecha con el pie derecho y 5 desde la izquierda con el pie izquierdo."],
      ["Conte as bolas que caem dentro.", "Count the balls that land inside.", "Cuenta los balones que caen dentro."],
    ],
    unit: ["cruzamentos certos", "good crosses", "centros buenos"],
  },
  {
    id: "freekick", type: "ball", icon: "🌀", subs: ["freekick", "curve"], tiers: [1, 3, 5, 7], max: 10, anim: true,
    title: ["Falta com efeito", "Curled free kick", "Tiro libre con efecto"],
    desc: ["Em 10 cobranças, quantas passam pela barreira e acertam o gol?", "Out of 10 free kicks, how many get past the wall and hit the goal?", "De 10 tiros libres, ¿cuántos pasan la barrera y van al arco?"],
    steps: [
      ["Use uma cadeira como barreira, a 4 passos da bola.", "Use a chair as the wall, 4 steps from the ball.", "Usa una silla como barrera, a 4 pasos del balón."],
      ["Chute com a parte de dentro do pé para fazer a curva.", "Strike with the inside of your foot to curl it.", "Golpea con el interior del pie para darle efecto."],
      ["Conte os gols.", "Count the goals.", "Cuenta los goles."],
    ],
    unit: ["gols", "goals", "goles"],
  },

  // Técnica
  {
    id: "keepy", type: "ball", icon: "⚽", subs: ["control"], tiers: [5, 15, 30, 50], anim: true,
    title: ["Embaixadinhas", "Keep-ups", "Toques al aire"],
    desc: ["Quantas embaixadinhas seguidas sem deixar a bola cair?", "How many keep-ups in a row without dropping the ball?", "¿Cuántos toques seguidos sin que caiga el balón?"],
    steps: [
      ["Use os dois pés, o direito e o esquerdo, e as coxas.", "Use both feet, right and left, and your thighs.", "Usa los dos pies, el derecho y el izquierdo, y los muslos."],
      ["Tente 3 vezes e marque a melhor.", "Try 3 times and log your best.", "Intenta 3 veces y anota la mejor."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "slalom", type: "ball", icon: "🩴", subs: ["carry", "balance"], tiers: [2, 3, 5, 7], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Slalom dos chinelos", "Flip-flop slalom", "Slalom de chanclas"],
    desc: ["Em 1 minuto, quantas idas e voltas conduzindo a bola entre 5 chinelos?", "In 1 minute, how many round trips dribbling through 5 flip-flops?", "En 1 minuto, ¿cuántas idas y vueltas conduciendo entre 5 chanclas?"],
    steps: [
      ["Coloque 5 chinelos em fila, um passo entre eles.", "Line up 5 flip-flops, one step apart.", "Pon 5 chanclas en fila, a un paso entre ellas."],
      ["Passe entre todos com a bola colada no pé.", "Weave through them with the ball close to your feet.", "Pasa entre todas con el balón pegado al pie."],
      CQ_STEPS_CARRY_FEET,
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },
  {
    id: "zigzag", type: "ball", icon: "〰️", subs: ["agility", "carry"], tiers: [2, 3, 5, 7], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Zigue-zague", "Zigzag", "Zigzag"],
    desc: ["Em 1 minuto, quantas idas e voltas conduzindo em zigue-zague entre 6 chinelos?", "In 1 minute, how many zigzag round trips through 6 flip-flops?", "En 1 minuto, ¿cuántas idas y vueltas en zigzag entre 6 chanclas?"],
    steps: [
      ["Coloque 6 chinelos em zigue-zague.", "Set 6 flip-flops in a zigzag.", "Pon 6 chanclas en zigzag."],
      ["Use a parte de dentro e de fora do pé.", "Use the inside and outside of your foot.", "Usa el interior y el exterior del pie."],
      CQ_STEPS_CARRY_FEET,
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },

  {
    id: "dribble", type: "ball", icon: "🕺", subs: ["dribble", "agility"], tiers: [2, 4, 6, 8], timer: { mode: "down", s: 60 }, helper: true, anim: true,
    title: ["Drible 1 contra 1", "1v1 dribble", "Regate 1 contra 1"],
    desc: ["Em 1 minuto, quantas vezes você dribla alguém da família e cruza a linha dele com a bola?", "In 1 minute, how many times can you beat a family member and cross their line with the ball?", "En 1 minuto, ¿cuántas veces regateas a alguien de tu familia y cruzas su línea con el balón?"],
    steps: [
      ["A pessoa defende uma linha de 5 passos.", "The other person defends a line 5 steps wide.", "La otra persona defiende una línea de 5 pasos."],
      ["Use finta, mudança de direção e velocidade.", "Use feints, changes of direction and speed.", "Usa fintas, cambios de dirección y velocidad."],
      ["Passou a linha com a bola dominada? Vale 1.", "Crossed the line with the ball under control? That's 1.", "¿Cruzaste la línea con el balón controlado? Cuenta 1."],
    ],
    unit: ["dribles", "dribbles", "regates"],
  },
  {
    id: "skills", type: "ball", icon: "✨", subs: ["dribble", "control"], tiers: [1, 2, 4, 6], max: 8, anim: true,
    title: ["Truques de craque", "Skill tricks", "Trucos de crack"],
    desc: ["Quantos truques diferentes você faz 3 vezes seguidas sem errar?", "How many different tricks can you do 3 times in a row without a mistake?", "¿Cuántos trucos distintos haces 3 veces seguidas sin fallar?"],
    steps: [
      ["Truques: pedalada, elástico, puxada de sola, roleta, chapéu, letra, carretilha, caneta no chinelo.", "Tricks: step-over, elastico, sole drag, roulette, flick over, rabona, rainbow, nutmeg through a flip-flop gate.", "Trucos: bicicleta, elástica, arrastre de suela, ruleta, sombrero, rabona, rainbow, caño entre chanclas."],
      ["Faça cada truque 3 vezes seguidas.", "Do each trick 3 times in a row.", "Haz cada truco 3 veces seguidas."],
      ["Só conta o truque que deu certo nas 3.", "Only count tricks that worked all 3 times.", "Solo cuenta el truco que salió las 3 veces."],
    ],
    unit: ["truques", "tricks", "trucos"],
  },

  // Defesa
  {
    id: "bote", type: "quiz", quiz: "bote", icon: "🛑", subs: ["standing", "awareness"], tiers: [1, 2, 3],
    title: ["Bote na hora certa", "Tackle timing", "Entrada a tiempo"],
    desc: ["3 perguntas rápidas sobre marcação.", "3 quick questions about defending.", "3 preguntas rápidas sobre marcar."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "steal", type: "ball", icon: "🧲", subs: ["standing", "combat"], tiers: [1, 3, 5, 7], timer: { mode: "down", s: 60 }, helper: true, anim: true,
    title: ["Rouba-bola", "Ball thief", "Roba balón"],
    desc: ["Em 1 minuto, quantas vezes você rouba a bola de alguém da família?", "In 1 minute, how many times can you win the ball from a family member?", "En 1 minuto, ¿cuántas veces le robas el balón a alguien de tu familia?"],
    steps: [
      ["Marque um quadrado de 5 passos.", "Mark a 5-step square.", "Marca un cuadrado de 5 pasos."],
      ["A outra pessoa conduz a bola dentro do quadrado.", "The other person dribbles inside the square.", "La otra persona conduce dentro del cuadrado."],
      ["Roube sem empurrar. Cada roubada vale 1.", "Win it without pushing. Each steal counts as 1.", "Roba sin empujar. Cada robo cuenta 1."],
    ],
    unit: ["roubadas", "steals", "robos"],
  },
  {
    id: "heading", type: "ball", icon: "🎈", subs: ["heading"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Cabeceio de defesa", "Defensive header", "Despeje de cabeza"],
    desc: ["Em 10 tentativas, quantos cabeceios acertam a parede acima de uma marca alta? Na defesa, a bola vai para cima e para longe.", "Out of 10 tries, how many headers hit the wall above a high mark? In defence, the ball goes high and far.", "De 10 intentos, ¿cuántos cabezazos dan en la pared sobre una marca alta? En defensa, el balón va arriba y lejos."],
    steps: [
      ["Use só bola leve: de plástico ou bexiga.", "Only use a light ball: plastic or a balloon.", "Usa solo balón liviano: de plástico o un globo."],
      ["Jogue para cima e cabeceie com a testa, de olhos abertos.", "Toss it up and head it with your forehead, eyes open.", "Lánzalo arriba y cabecea con la frente, con los ojos abiertos."],
      ["Conte os acertos na parede.", "Count the hits on the wall.", "Cuenta los aciertos en la pared."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "sliding", type: "ball", icon: "🌱", subs: ["sliding"], tiers: [1, 2, 3, 5], max: 5, anim: true,
    title: ["Carrinho na grama", "Grass slide tackle", "Barrida en el pasto"],
    desc: ["Em 5 tentativas, quantas vezes o carrinho tira a bola parada de dentro do quadrado?", "Out of 5 tries, how many slide tackles knock the still ball out of the square?", "De 5 intentos, ¿cuántas barridas sacan el balón quieto del cuadrado?"],
    steps: [
      ["Só na grama ou na areia, nunca no chão duro. Use caneleira.", "Only on grass or sand, never on hard ground. Wear shin pads.", "Solo en pasto o arena, nunca en suelo duro. Usa canilleras."],
      ["Deslize de lado, com a perna de baixo dobrada.", "Slide on your side with the bottom leg bent.", "Deslízate de lado con la pierna de abajo flexionada."],
      ["Toque na bola, nunca em pessoas.", "Touch the ball, never people.", "Toca el balón, nunca a personas."],
    ],
    unit: CQ_UNIT_HITS,
  },

  // Físico
  {
    id: "hops", type: "move", icon: "⚡", subs: ["agility", "jumping"], tiers: [15, 25, 35, 45], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Pula-linha", "Line hops", "Salta la línea"],
    desc: ["Em 30 segundos, quantos pulos de um lado para o outro de uma linha?", "In 30 seconds, how many side-to-side hops over a line?", "En 30 segundos, ¿cuántos saltos de lado a lado sobre una línea?"],
    steps: [
      ["Use uma linha no chão ou uma corda esticada.", "Use a line on the floor or a rope.", "Usa una línea en el suelo o una cuerda."],
      ["Pés juntos, pule de um lado para o outro.", "Feet together, hop from side to side.", "Pies juntos, salta de un lado al otro."],
      ["Cada pulo vale 1.", "Each hop counts as 1.", "Cada salto cuenta 1."],
    ],
    unit: ["pulos", "hops", "saltos"],
  },
  {
    id: "jacks", type: "move", icon: "🤸", subs: ["stamina"], tiers: [20, 35, 50, 65], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Polichinelos", "Jumping jacks", "Saltos de tijera"],
    desc: ["Em 1 minuto, quantos polichinelos você faz?", "In 1 minute, how many jumping jacks can you do?", "En 1 minuto, ¿cuántos saltos de tijera haces?"],
    steps: [
      ["Braços e pernas abrem e fecham juntos.", "Arms and legs open and close together.", "Brazos y piernas se abren y cierran juntos."],
      ["Pode descansar e continuar.", "You can rest and keep going.", "Puedes descansar y seguir."],
      ["Cada abre e fecha vale 1.", "Each open-and-close counts as 1.", "Cada abrir y cerrar cuenta 1."],
    ],
    unit: ["polichinelos", "jumping jacks", "saltos"],
  },
  {
    id: "jump", type: "move", icon: "🦘", subs: ["jumping", "strength"], tiers: [4, 5, 6, 7], max: 15, anim: true,
    title: ["Salto do canguru", "Kangaroo jump", "Salto del canguro"],
    desc: ["Saltando parado com os dois pés, quantos pés de distância você alcança?", "With a standing two-foot jump, how many foot-lengths do you cover?", "Saltando parado con los dos pies, ¿cuántos pies de distancia alcanzas?"],
    steps: [
      ["Pés juntos atrás de uma linha.", "Feet together behind a line.", "Pies juntos detrás de una línea."],
      ["Balance os braços e salte para a frente.", "Swing your arms and jump forward.", "Balancea los brazos y salta hacia adelante."],
      ["Meça com o seu pé, um na frente do outro. Vale o melhor de 3.", "Measure heel to toe with your own foot. Best of 3.", "Mide con tu pie, uno delante del otro. Vale el mejor de 3."],
    ],
    unit: ["pés", "foot-lengths", "pies"],
  },
  {
    id: "shield", type: "ball", icon: "🛡️", subs: ["strength", "combat"], tiers: [10, 20, 30, 45], timer: { mode: "up" }, helper: true, anim: true,
    title: ["Protege a bola", "Shield the ball", "Protege el balón"],
    desc: ["Quanto tempo você protege a bola de alguém da família sem perder?", "How long can you shield the ball from a family member?", "¿Cuánto tiempo proteges el balón de alguien de tu familia?"],
    steps: [
      ["Fique entre a pessoa e a bola.", "Stay between the person and the ball.", "Ponte entre la persona y el balón."],
      ["Use o corpo, com os braços abertos, sem empurrar.", "Use your body, arms out, no pushing.", "Usa el cuerpo, con los brazos abiertos, sin empujar."],
      ["Perdeu a bola? Aperte Parar.", "Lost the ball? Press Stop.", "¿Perdiste el balón? Pulsa Parar."],
    ],
    unit: ["segundos", "seconds", "segundos"],
  },

  // Inteligência
  {
    id: "quiz", type: "quiz", quiz: "onde", icon: "🧠", subs: ["positioning", "attpos"], tiers: [1, 2, 3],
    title: ["Onde eu fico?", "Where do I stand?", "¿Dónde me pongo?"],
    desc: ["3 perguntas rápidas sobre posicionamento.", "3 quick questions about positioning.", "3 preguntas rápidas sobre posicionamiento."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "voltou", type: "quiz", quiz: "voltou", icon: "🔁", subs: ["recovery", "teamplay", "communication"], tiers: [1, 2, 3],
    title: ["Perdeu, voltou!", "Lost it? Get back!", "¡Perdiste, vuelve!"],
    desc: ["3 perguntas sobre voltar para defender.", "3 questions about getting back to defend.", "3 preguntas sobre volver a defender."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "leitura", type: "quiz", quiz: "leitura", icon: "👀", subs: ["reading", "decision", "vision"], tiers: [1, 2, 3],
    title: ["Leia a jogada", "Read the play", "Lee la jugada"],
    desc: ["3 perguntas sobre decidir rápido.", "3 questions about quick decisions.", "3 preguntas sobre decidir rápido."],
    unit: CQ_UNIT_HITS,
  },

  // Mental
  {
    id: "statue", type: "mind", icon: "🗿", subs: ["concentration", "balance"], tiers: [15, 30, 45, 60], timer: { mode: "up" }, anim: true,
    title: ["Estátua de campeão", "Champion statue", "Estatua de campeón"],
    desc: ["Quanto tempo você fica num pé só, parado e olhando um ponto fixo?", "How long can you stand on one foot, still, eyes on one spot?", "¿Cuánto aguantas en un pie, quieto y mirando un punto fijo?"],
    steps: [
      ["Escolha um ponto na parede para olhar.", "Pick a spot on the wall to look at.", "Elige un punto en la pared para mirar."],
      ["Aperte Iniciar e levante um pé.", "Press Start and lift one foot.", "Pulsa Iniciar y levanta un pie."],
      ["Apoiou o pé ou desviou o olhar? Aperte Parar.", "Foot down or looked away? Press Stop.", "¿Apoyaste el pie o miraste a otro lado? Pulsa Parar."],
    ],
    unit: ["segundos", "seconds", "segundos"],
  },
  {
    id: "breath", type: "mind", icon: "🫁", subs: ["composure", "concentration"], tiers: [3, 5, 8, 10], timer: { mode: "breath" }, anim: true,
    title: ["Respiração do goleador", "Striker's breathing", "Respiración del goleador"],
    desc: ["Respire junto com a bola: ela cresce quando o ar entra e diminui quando sai.", "Breathe with the ball: it grows as you breathe in and shrinks as you breathe out.", "Respira con el balón: crece cuando entra el aire y se achica cuando sale."],
    steps: [
      ["Sente e relaxe os ombros.", "Sit down and relax your shoulders.", "Siéntate y relaja los hombros."],
      ["Aperte Iniciar e siga a bola.", "Press Start and follow the ball.", "Pulsa Iniciar y sigue el balón."],
      ["Use antes dos jogos e depois de um erro.", "Use it before games and after a mistake.", "Úsala antes de los partidos y después de un error."],
    ],
    unit: ["respirações", "breaths", "respiraciones"],
  },
  {
    id: "streak", type: "auto", icon: "🔥", subs: ["discipline"], tiers: [3, 7, 14, 30],
    title: ["Fogo aceso", "Keep the fire", "Fuego encendido"],
    desc: ["Treine em dias seguidos. Sobe sozinho!", "Train on consecutive days. It goes up by itself!", "Entrena días seguidos. ¡Sube solo!"],
    unit: ["dias seguidos", "days in a row", "días seguidos"],
  },
];

// Each quiz shows 3 random questions from its pool. The first option is the right one.
const CQ_QUIZ = {};
