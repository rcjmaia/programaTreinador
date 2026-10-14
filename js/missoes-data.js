/* ============================================================
   Craque Inteligente — catálogo de missões e trilhas.
   Textos em [pt, en, es]. Para criar uma missão nova, copie
   uma ficha, troque o "id" e coloque-a numa fase de CQ_TRAILS.
   type: ball (com bola), move (movimento), quiz (perguntas),
         mind (cabeça), auto (sobe sozinha).
   tiers: metas de Bronze, Prata, Ouro e Lenda. O Bronze deve ser
          fácil: é ele que abre a próxima fase.
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
  int: ["quiz", "voltou", "leitura", "contra", "setpiece", "offball", "rules", "poscb", "posfb", "posmid", "posst"],
  cab: ["statue", "breath", "mindquiz", "blindstatue", "aftermiss", "countdown", "pressure", "streak"],
};
const CQ_TRAILS = Object.entries(CQ_CHAIN).map(([id, ids]) => ({ id, phases: ids.map((m) => [m]) }));

const CQ_STEPS_ROUND_TRIP = ["Ida e volta vale 1.", "There and back counts as 1.", "Ida y vuelta cuenta 1."];
const CQ_UNIT_HITS = ["acertos", "hits", "aciertos"];
const CQ_UNIT_TRIPS = ["voltas", "trips", "vueltas"];

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
    id: "sprintball", type: "ball", icon: "💨", subs: ["sprint", "carry"], tiers: [3, 5, 7, 9], timer: { mode: "down", s: 30 }, anim: true,
    title: ["Pique com bola", "Sprint with the ball", "Pique con balón"],
    desc: ["Em 30 segundos, quantas idas e voltas conduzindo a bola entre duas marcas a 10 passos?", "In 30 seconds, how many round trips dribbling between two markers 10 steps apart?", "En 30 segundos, ¿cuántas idas y vueltas conduciendo entre dos marcas a 10 pasos?"],
    steps: [
      ["Coloque duas marcas a 10 passos: cone, chinelo, garrafa ou qualquer objeto.", "Place two markers 10 steps apart: a cone, a flip-flop, a bottle or any object.", "Pon dos marcas a 10 pasos: un cono, una chancla, una botella o cualquier objeto."],
      ["Conduza rápido, com toques curtos. Na marca, puxe a bola com a sola e vire.", "Dribble fast with short touches. At the marker, drag the ball back with your sole and turn.", "Conduce rápido con toques cortos. En la marca, arrastra el balón con la suela y gira."],
      ["Conduza rápido, com toques curtos.", "Dribble fast with short touches.", "Conduce rápido con toques cortos."],
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },

  // Finalização
  {
    id: "target", type: "ball", icon: "🎯", subs: ["finishing", "power"], tiers: [3, 5, 7, 9], max: 10, anim: true,
    title: ["Chute no alvo", "Target shooting", "Tiro al blanco"],
    desc: ["Em 10 chutes, quantos acertam o alvo?", "Out of 10 shots, how many hit the target?", "De 10 tiros, ¿cuántos dan en el blanco?"],
    steps: [
      ["Escolha um alvo: uma cadeira, um balde ou um canto do muro.", "Pick a target: a chair, a bucket or a corner of a wall.", "Elige un blanco: una silla, un balde o una esquina del muro."],
      ["Chute de uns 5 passos, alternando os pés.", "Shoot from about 5 steps, alternating feet.", "Dispara desde unos 5 pasos, alternando pies."],
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
    id: "longshot", type: "ball", icon: "🚀", subs: ["longshots", "power"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Chute de longe", "Long shot", "Tiro lejano"],
    desc: ["Em 10 chutes de 15 passos, quantos acertam o gol?", "Out of 10 shots from 15 steps, how many are on target?", "De 10 tiros desde 15 pasos, ¿cuántos van al arco?"],
    steps: [
      ["Marque um gol com dois chinelos ou use um muro.", "Mark a goal with two flip-flops or use a wall.", "Marca un arco con dos chanclas o usa un muro."],
      ["Chute com o peito do pé, firme.", "Strike with your laces, nice and firm.", "Golpea con el empeine, firme."],
      ["Conte os chutes no gol.", "Count the shots on target.", "Cuenta los tiros al arco."],
    ],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "volley", type: "ball", icon: "🦵", subs: ["volleys", "finishing"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Bate-pronto", "Volley", "Volea"],
    desc: ["Em 10 tentativas, quantos chutes de bate-pronto acertam o alvo?", "Out of 10 tries, how many volleys hit the target?", "De 10 intentos, ¿cuántas voleas dan en el blanco?"],
    steps: [
      ["Solte a bola das mãos.", "Drop the ball from your hands.", "Suelta el balón de las manos."],
      ["Chute antes de ela tocar o chão.", "Kick it before it touches the ground.", "Patéalo antes de que toque el suelo."],
      ["Conte os acertos na parede ou no alvo.", "Count the hits on the wall or target.", "Cuenta los aciertos en la pared o el blanco."],
    ],
    unit: CQ_UNIT_HITS,
  },

  // Passes
  {
    id: "weak", type: "ball", icon: "🦶", subs: ["short", "reactions"], tiers: [10, 20, 30, 40], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Parede do pé fraco", "Weak-foot wall", "Pared de pierna débil"],
    desc: ["Em 1 minuto, quantos passes na parede só com o pé fraco?", "In 1 minute, how many wall passes with your weak foot only?", "En 1 minuto, ¿cuántos pases a la pared solo con la pierna débil?"],
    steps: [
      ["Fique a uns 2 passos da parede.", "Stand about 2 steps from a wall.", "Ponte a unos 2 pasos de la pared."],
      ["Passe e domine só com o pé fraco.", "Pass and control with your weak foot only.", "Pasa y controla solo con la pierna débil."],
      ["Conte cada passe que voltar.", "Count every pass that comes back.", "Cuenta cada pase que vuelva."],
    ],
    unit: ["passes", "passes", "pases"],
  },
  {
    id: "longpass", type: "ball", icon: "🪣", subs: ["long"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Lançamento no balde", "Bucket long pass", "Pase largo al balde"],
    desc: ["Em 10 lançamentos de 15 passos, quantos param perto do balde?", "Out of 10 long passes from 15 steps, how many stop near the bucket?", "De 10 pases largos desde 15 pasos, ¿cuántos quedan cerca del balde?"],
    steps: [
      ["Coloque um balde ou mochila a 15 passos.", "Put a bucket or backpack 15 steps away.", "Pon un balde o mochila a 15 pasos."],
      ["Lance a bola pelo alto.", "Send the ball through the air.", "Lanza el balón por arriba."],
      ["Vale se parar a até 2 passos do alvo.", "It counts if it stops within 2 steps of the target.", "Vale si queda a 2 pasos o menos del blanco."],
    ],
    unit: ["lançamentos certos", "good passes", "pases buenos"],
  },
  {
    id: "cross", type: "ball", icon: "📦", subs: ["cross"], tiers: [2, 4, 6, 8], max: 10, anim: true,
    title: ["Cruzamento na caixa", "Cross into the box", "Centro al área"],
    desc: ["Em 10 cruzamentos, quantos caem dentro da área marcada?", "Out of 10 crosses, how many land inside the marked area?", "De 10 centros, ¿cuántos caen dentro del área marcada?"],
    steps: [
      ["Marque um quadrado de 3 passos com chinelos.", "Mark a 3-step square with flip-flops.", "Marca un cuadrado de 3 pasos con chanclas."],
      ["Cruze da lateral, a 10 passos do quadrado.", "Cross from the side, 10 steps from the square.", "Centra desde la banda, a 10 pasos del cuadrado."],
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

  // Condução
  {
    id: "keepy", type: "ball", icon: "⚽", subs: ["control"], tiers: [5, 15, 30, 50], anim: true,
    title: ["Embaixadinhas", "Keep-ups", "Toques al aire"],
    desc: ["Quantas embaixadinhas seguidas sem deixar a bola cair?", "How many keep-ups in a row without dropping the ball?", "¿Cuántos toques seguidos sin que caiga el balón?"],
    steps: [
      ["Use os pés e as coxas.", "Use your feet and thighs.", "Usa los pies y los muslos."],
      ["Tente 3 vezes e marque a melhor.", "Try 3 times and log your best.", "Intenta 3 veces y anota la mejor."],
    ],
    unit: ["toques", "touches", "toques"],
  },
  {
    id: "slalom", type: "ball", icon: "🩴", subs: ["carry", "balance"], tiers: [2, 4, 6, 8], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Slalom dos chinelos", "Flip-flop slalom", "Slalom de chanclas"],
    desc: ["Em 1 minuto, quantas idas e voltas conduzindo a bola entre 5 chinelos?", "In 1 minute, how many round trips dribbling through 5 flip-flops?", "En 1 minuto, ¿cuántas idas y vueltas conduciendo entre 5 chanclas?"],
    steps: [
      ["Coloque 5 chinelos em fila, um passo entre eles.", "Line up 5 flip-flops, one step apart.", "Pon 5 chanclas en fila, a un paso entre ellas."],
      ["Passe entre todos com a bola colada no pé.", "Weave through them with the ball close to your feet.", "Pasa entre todas con el balón pegado al pie."],
      CQ_STEPS_ROUND_TRIP,
    ],
    unit: CQ_UNIT_TRIPS,
  },
  {
    id: "zigzag", type: "ball", icon: "〰️", subs: ["agility", "control"], tiers: [2, 4, 6, 8], timer: { mode: "down", s: 60 }, anim: true,
    title: ["Zigue-zague", "Zigzag", "Zigzag"],
    desc: ["Em 1 minuto, quantas idas e voltas conduzindo em zigue-zague entre 6 chinelos?", "In 1 minute, how many zigzag round trips through 6 flip-flops?", "En 1 minuto, ¿cuántas idas y vueltas en zigzag entre 6 chanclas?"],
    steps: [
      ["Coloque 6 chinelos em zigue-zague.", "Set 6 flip-flops in a zigzag.", "Pon 6 chanclas en zigzag."],
      ["Use a parte de dentro e de fora do pé.", "Use the inside and outside of your foot.", "Usa el interior y el exterior del pie."],
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
    id: "steal", type: "ball", icon: "🧲", subs: ["interceptions", "awareness"], tiers: [1, 3, 5, 7], timer: { mode: "down", s: 60 }, helper: true, anim: true,
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

  // Cabeça
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
    id: "breath", type: "mind", icon: "🫁", subs: ["composure", "resilience"], tiers: [3, 5, 8, 10], timer: { mode: "breath" }, anim: true,
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
    id: "mindquiz", type: "quiz", quiz: "cabeca", icon: "🏆", subs: ["courage", "confidence", "fairplay"], tiers: [1, 2, 3],
    title: ["Cabeça de campeão", "Champion mindset", "Cabeza de campeón"],
    desc: ["3 perguntas sobre coragem, calma e respeito.", "3 questions about courage, calm and respect.", "3 preguntas sobre valentía, calma y respeto."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "streak", type: "auto", icon: "🔥", subs: ["discipline"], tiers: [3, 7, 14, 30],
    title: ["Fogo aceso", "Keep the fire", "Fuego encendido"],
    desc: ["Treine em dias seguidos. Sobe sozinho!", "Train on consecutive days. It goes up by itself!", "Entrena días seguidos. ¡Sube solo!"],
    unit: ["dias seguidos", "days in a row", "días seguidos"],
  },
];

// Each quiz shows 3 random questions from its pool. The first option is the right one.
const CQ_QUIZ = {
  onde: [
    {
      q: ["Seu time perdeu a bola. O que o lateral deve fazer?", "Your team lost the ball. What should the full-back do?", "Tu equipo perdió el balón. ¿Qué debe hacer el lateral?"],
      opts: [
        ["Voltar correndo para marcar", "Sprint back to defend", "Volver corriendo a marcar"],
        ["Ficar no ataque esperando", "Stay up front and wait", "Quedarse arriba esperando"],
        ["Parar e reclamar", "Stop and complain", "Pararse y protestar"],
      ],
      why: ["Sem a bola, todo mundo ajuda a defender!", "Without the ball, everyone helps defend!", "¡Sin balón, todos ayudan a defender!"],
    },
    {
      q: ["No 4-3-3, onde jogam os pontas quando o time ataca?", "In a 4-3-3, where do the wingers play when attacking?", "En el 4-3-3, ¿dónde juegan los extremos al atacar?"],
      opts: [
        ["Bem abertos, perto da linha lateral", "Wide, near the touchline", "Bien abiertos, cerca de la banda"],
        ["Todos juntos no meio", "All together in the middle", "Todos juntos en el medio"],
        ["Lá atrás, perto do goleiro", "At the back, near the keeper", "Atrás, cerca del portero"],
      ],
      why: ["Abertos, eles deixam o campo grande e difícil de marcar.", "Staying wide makes the pitch big and hard to defend.", "Abiertos, hacen el campo grande y difícil de defender."],
    },
    {
      q: ["Um atacante adversário vem com a bola. Onde o zagueiro fica?", "An opponent is coming with the ball. Where does the centre-back stand?", "Un delantero rival viene con el balón. ¿Dónde se pone el central?"],
      opts: [
        ["Entre o atacante e o gol", "Between the attacker and the goal", "Entre el delantero y el arco"],
        ["Atrás do atacante", "Behind the attacker", "Detrás del delantero"],
        ["Longe, perto da lateral", "Far away, near the touchline", "Lejos, cerca de la banda"],
      ],
      why: ["Assim ele protege o gol e fecha o caminho.", "That way he protects the goal and blocks the path.", "Así protege el arco y cierra el camino."],
    },
    {
      q: ["Seu colega está com a bola e marcado. O que você faz?", "Your teammate has the ball and is marked. What do you do?", "Tu compañero tiene el balón y está marcado. ¿Qué haces?"],
      opts: [
        ["Apareço num espaço livre para receber", "Move into space to receive", "Me muevo a un espacio libre para recibir"],
        ["Fico escondido atrás do meu marcador", "Hide behind my marker", "Me escondo detrás de mi marcador"],
        ["Peço a bola gritando, parado", "Shout for the ball standing still", "Pido el balón gritando, quieto"],
      ],
      why: ["Livre de marcação, você vira uma boa opção de passe.", "Free from your marker, you become a good passing option.", "Libre de marca, eres una buena opción de pase."],
    },
    {
      q: ["O que o goleiro faz quando o time está atacando?", "What does the goalkeeper do when the team is attacking?", "¿Qué hace el portero cuando el equipo ataca?"],
      opts: [
        ["Sai um pouco do gol e ajuda a começar a jogada", "Comes off the line a bit and helps start the play", "Sale un poco del arco y ayuda a iniciar la jugada"],
        ["Senta no gol e descansa", "Sits in the goal and rests", "Se sienta en el arco y descansa"],
        ["Corre para o ataque", "Runs forward to attack", "Corre al ataque"],
      ],
      why: ["Ele vira mais uma opção de passe e fica atento.", "He becomes another passing option and stays alert.", "Se convierte en otra opción de pase y se mantiene atento."],
    },
    {
      q: ["Seu time está defendendo. Onde o volante fica?", "Your team is defending. Where does the holding midfielder stay?", "Tu equipo defiende. ¿Dónde se queda el mediocentro defensivo?"],
      opts: [
        ["Na frente dos zagueiros, protegendo", "In front of the centre-backs, protecting", "Delante de los centrales, protegiendo"],
        ["Lá na frente com os atacantes", "Up front with the strikers", "Arriba con los delanteros"],
        ["Perto da bandeirinha de escanteio", "Near the corner flag", "Cerca del banderín de córner"],
      ],
      why: ["O volante é o escudo na frente da defesa.", "The holding midfielder is the shield in front of the defence.", "Es el escudo delante de la defensa."],
    },
  ],

  bote: [
    {
      q: ["O atacante deixou a bola longe do pé. O que você faz?", "The attacker lets the ball get away from his foot. What do you do?", "El delantero se aleja el balón del pie. ¿Qué haces?"],
      opts: [
        ["Dou o bote na hora!", "Tackle right away!", "¡Entro en ese momento!"],
        ["Fico parado olhando", "Stand still and watch", "Me quedo mirando"],
        ["Viro de costas", "Turn my back", "Me doy vuelta"],
      ],
      why: ["Bola longe do pé é a melhor hora de roubar.", "A loose touch is the best moment to win the ball.", "Balón lejos del pie es el mejor momento para robar."],
    },
    {
      q: ["Como você fica para marcar um atacante?", "How do you stand to mark an attacker?", "¿Cómo te pones para marcar a un delantero?"],
      opts: [
        ["De lado, com os joelhos dobrados", "Side-on, knees bent", "De perfil, con las rodillas flexionadas"],
        ["De frente, com as pernas bem abertas", "Square, legs wide open", "De frente, con las piernas bien abiertas"],
        ["Pulando sem parar", "Jumping around", "Saltando sin parar"],
      ],
      why: ["De lado você corre rápido para qualquer direção.", "Side-on, you can move fast in any direction.", "De perfil puedes moverte rápido hacia cualquier lado."],
    },
    {
      q: ["O atacante é muito rápido e está com a bola colada. O que é melhor?", "The attacker is very fast with the ball glued to his foot. What is best?", "El delantero es muy rápido y lleva el balón pegado. ¿Qué es mejor?"],
      opts: [
        ["Acompanhar e esperar o erro dele", "Stay with him and wait for his mistake", "Acompañarlo y esperar su error"],
        ["Dar o bote correndo de longe", "Dive in from far away", "Entrar corriendo desde lejos"],
        ["Desistir da jogada", "Give up on the play", "Rendirme"],
      ],
      why: ["Com paciência, você rouba quando ele errar.", "Be patient and win it when he slips up.", "Con paciencia, robas cuando se equivoque."],
    },
    {
      q: ["Você roubou a bola! E agora?", "You won the ball! Now what?", "¡Robaste el balón! ¿Y ahora?"],
      opts: [
        ["Passo para um colega livre", "Pass to a free teammate", "Paso a un compañero libre"],
        ["Chuto para qualquer lado", "Kick it anywhere", "Pateo a cualquier lado"],
        ["Comemoro e paro", "Celebrate and stop", "Festejo y me paro"],
      ],
      why: ["Roubar e já passar começa o ataque do seu time.", "Win it and pass straight away to start your team's attack.", "Robar y pasar enseguida inicia el ataque de tu equipo."],
    },
  ],

  voltou: [
    {
      q: ["Seu time perdeu a bola no ataque. O que fazem os mais perto?", "Your team lost the ball up front. What do the closest players do?", "Tu equipo perdió el balón en ataque. ¿Qué hacen los más cerca?"],
      opts: [
        ["Pressionam na hora para recuperar", "Press straight away to win it back", "Presionan enseguida para recuperar"],
        ["Reclamam com o juiz", "Complain to the referee", "Protestan al árbitro"],
        ["Andam devagar", "Walk slowly", "Caminan despacio"],
      ],
      why: ["Os primeiros segundos são a melhor hora de recuperar.", "The first seconds are the best time to win it back.", "Los primeros segundos son el mejor momento para recuperar."],
    },
    {
      q: ["Você é o lateral e o adversário contra-ataca pelo seu lado. O que faz?", "You're the full-back and they counter down your side. What do you do?", "Eres el lateral y el rival contraataca por tu lado. ¿Qué haces?"],
      opts: [
        ["Corro de volta para o meu lugar", "Sprint back to my position", "Corro de vuelta a mi lugar"],
        ["Fico no ataque", "Stay up front", "Me quedo arriba"],
        ["Espero a bola chegar", "Wait for the ball", "Espero el balón"],
      ],
      why: ["Voltar rápido fecha o espaço do adversário.", "Getting back fast closes the space.", "Volver rápido cierra el espacio del rival."],
    },
    {
      q: ["Como avisar um colega que vem um adversário por trás?", "How do you warn a teammate that an opponent is coming from behind?", "¿Cómo avisas a un compañero que viene un rival por detrás?"],
      opts: [
        ["Grito: \"Ladrão!\" ou \"Vem gente!\"", "Shout: \"Man on!\"", "Grito: \"¡Viene uno!\""],
        ["Fico quieto", "Stay quiet", "Me quedo callado"],
        ["Aponto para o céu", "Point at the sky", "Señalo el cielo"],
      ],
      why: ["Falar com o colega ajuda o time todo.", "Talking to teammates helps the whole team.", "Hablar con el compañero ayuda a todo el equipo."],
    },
    {
      q: ["Quem defende no futebol?", "Who defends in football?", "¿Quién defiende en el fútbol?"],
      opts: [
        ["O time todo, inclusive os atacantes", "The whole team, strikers included", "Todo el equipo, también los delanteros"],
        ["Só o goleiro", "Only the goalkeeper", "Solo el portero"],
        ["Só os zagueiros", "Only the centre-backs", "Solo los centrales"],
      ],
      why: ["Quando o time perde a bola, todo mundo ajuda.", "When the team loses the ball, everyone helps.", "Cuando el equipo pierde el balón, todos ayudan."],
    },
  ],

  leitura: [
    {
      q: ["Você recebe a bola e tem um colega livre na frente do gol. O que faz?", "You get the ball and a teammate is free in front of goal. What do you do?", "Recibes el balón y un compañero está libre frente al arco. ¿Qué haces?"],
      opts: [
        ["Passo para ele", "Pass to him", "Le paso"],
        ["Driblo três adversários", "Dribble past three players", "Regateo a tres rivales"],
        ["Seguro a bola parado", "Hold the ball still", "Me quedo quieto con el balón"],
      ],
      why: ["O passe certo vale mais que o drible difícil.", "The right pass beats a hard dribble.", "El pase correcto vale más que el regate difícil."],
    },
    {
      q: ["Antes de receber a bola, o que um craque faz?", "Before receiving the ball, what does a great player do?", "Antes de recibir el balón, ¿qué hace un crack?"],
      opts: [
        ["Olha em volta para ver onde estão todos", "Looks around to see where everyone is", "Mira alrededor para ver dónde están todos"],
        ["Olha só para a bola", "Looks only at the ball", "Mira solo el balón"],
        ["Fecha os olhos", "Closes his eyes", "Cierra los ojos"],
      ],
      why: ["Quem olha antes já sabe o que fazer.", "Look first and you already know what to do.", "Quien mira antes ya sabe qué hacer."],
    },
    {
      q: ["Você está de frente para o gol, sem ninguém na frente. O que faz?", "You face the goal with nobody in front. What do you do?", "Estás de frente al arco sin nadie delante. ¿Qué haces?"],
      opts: [
        ["Chuto ou conduzo para o gol", "Shoot or run at goal", "Disparo o conduzco al arco"],
        ["Volto a bola para o goleiro", "Pass back to the keeper", "Devuelvo al portero"],
        ["Paro e espero", "Stop and wait", "Me paro y espero"],
      ],
      why: ["Espaço livre na frente do gol é hora de atacar!", "Open space in front of goal means attack!", "¡Espacio libre frente al arco es hora de atacar!"],
    },
    {
      q: ["Dois adversários vêm em você e um colega está livre. O que faz?", "Two opponents close you down and a teammate is free. What do you do?", "Dos rivales vienen hacia ti y un compañero está libre. ¿Qué haces?"],
      opts: [
        ["Toco para o colega livre", "Pass to the free teammate", "Toco al compañero libre"],
        ["Tento passar pelos dois", "Try to beat both", "Intento pasar a los dos"],
        ["Chuto para fora", "Kick it out", "La saco afuera"],
      ],
      why: ["Se tem dois em você, alguém do seu time está livre.", "If two are on you, someone on your team is free.", "Si tienes dos encima, alguien de tu equipo está libre."],
    },
  ],

  cabeca: [
    {
      q: ["Você errou um passe fácil. O que faz?", "You missed an easy pass. What do you do?", "Fallaste un pase fácil. ¿Qué haces?"],
      opts: [
        ["Respiro e peço a bola de novo", "Breathe and ask for the ball again", "Respiro y pido el balón otra vez"],
        ["Fico triste e me escondo", "Get sad and hide", "Me pongo triste y me escondo"],
        ["Culpo o colega", "Blame a teammate", "Culpo al compañero"],
      ],
      why: ["Errar faz parte. O craque volta a tentar.", "Mistakes happen. Great players try again.", "Equivocarse es parte. El crack vuelve a intentar."],
    },
    {
      q: ["Seu time está perdendo de 2 a 0. O que você pensa?", "Your team is losing 2-0. What do you think?", "Tu equipo pierde 2 a 0. ¿Qué piensas?"],
      opts: [
        ["Ainda dá tempo, vamos com tudo!", "There's still time, let's go!", "¡Todavía hay tiempo, vamos con todo!"],
        ["Já perdemos", "We've already lost", "Ya perdimos"],
        ["Quero ir embora", "I want to go home", "Me quiero ir"],
      ],
      why: ["Enquanto o jogo não acaba, dá para virar.", "Until the final whistle, you can turn it around.", "Mientras el partido no termina, se puede dar vuelta."],
    },
    {
      q: ["O adversário caiu machucado. O que um craque faz?", "An opponent is down injured. What does a great player do?", "Un rival cayó lesionado. ¿Qué hace un crack?"],
      opts: [
        ["Para a jogada e ajuda", "Stops the play and helps", "Para la jugada y ayuda"],
        ["Continua e faz o gol", "Carries on and scores", "Sigue y hace el gol"],
        ["Ri dele", "Laughs at him", "Se ríe de él"],
      ],
      why: ["Fair play: respeitar o adversário também é ser campeão.", "Fair play: respecting opponents is also being a champion.", "Juego limpio: respetar al rival también es ser campeón."],
    },
    {
      q: ["Você está com medo de pedir a bola num jogo difícil. O que fazer?", "You're scared to ask for the ball in a tough game. What should you do?", "Tienes miedo de pedir el balón en un partido difícil. ¿Qué haces?"],
      opts: [
        ["Peço mesmo assim: coragem é jogar com medo", "Ask anyway: courage is playing through fear", "La pido igual: valentía es jugar con miedo"],
        ["Me escondo atrás do adversário", "Hide behind an opponent", "Me escondo detrás del rival"],
        ["Fico parado", "Stand still", "Me quedo quieto"],
      ],
      why: ["Todo craque sente medo. Coragem é pedir a bola mesmo assim.", "Every great player feels fear. Courage is asking for the ball anyway.", "Todo crack siente miedo. Valentía es pedir el balón igual."],
    },
  ],
};
