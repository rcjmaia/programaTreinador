/* Craque de Bola — jogos de inteligência tática e técnica.
   Carregado depois de missoes-extra.js. Mesmo formato de CQ_QUIZ: a primeira opção é a certa.
   scene (opcional) é desenhada por js/animacoes/quadro.js: campo 100 x 64,
   o nosso time (amarelo) ataca para a direita. */

CQ_MISSIONS.push(
  {
    id: "esquemas", type: "quiz", quiz: "esquemas", icon: "📋", subs: ["positioning", "reading"], tiers: [1, 2, 3],
    title: ["Esquemas táticos", "Formations", "Esquemas tácticos"],
    desc: ["3 perguntas sobre 4-4-2, 4-3-3, 3-5-2 e 4-2-3-1.", "3 questions about 4-4-2, 4-3-3, 3-5-2 and 4-2-3-1.", "3 preguntas sobre 4-4-2, 4-3-3, 3-5-2 y 4-2-3-1."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "espaco", type: "quiz", quiz: "espaco", icon: "↔️", subs: ["positioning", "teamplay"], tiers: [1, 2, 3],
    title: ["Amplitude e profundidade", "Width and depth", "Amplitud y profundidad"],
    desc: ["3 perguntas sobre abrir o campo, atacar as costas e ultrapassar.", "3 questions about stretching the pitch, running in behind and overlapping.", "3 preguntas sobre abrir el campo, atacar la espalda y doblar."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "transicao", type: "quiz", quiz: "transicao", icon: "🔄", subs: ["recovery", "decision"], tiers: [1, 2, 3],
    title: ["Transições", "Transitions", "Transiciones"],
    desc: ["3 perguntas sobre o que fazer logo depois de perder ou roubar a bola.", "3 questions about what to do right after losing or winning the ball.", "3 preguntas sobre qué hacer justo después de perder o robar el balón."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "bloco", type: "quiz", quiz: "bloco", icon: "🧲", subs: ["awareness", "teamplay"], tiers: [1, 2, 3],
    title: ["Defender em bloco", "Defending as a unit", "Defender en bloque"],
    desc: ["3 perguntas sobre compactação, cobertura, sobra e flutuação.", "3 questions about compactness, cover and shifting across.", "3 preguntas sobre compactación, cobertura, ayuda y basculación."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "funcoes", type: "quiz", quiz: "funcoes", icon: "🧩", subs: ["reading", "teamplay"], tiers: [1, 2, 3],
    title: ["Cada um na sua função", "Know your role", "Cada uno en su función"],
    desc: ["3 perguntas sobre volantes, meias e o falso 9.", "3 questions about holding midfielders, playmakers and the false 9.", "3 preguntas sobre mediocentros, mediapuntas y el falso 9."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "tecnica", type: "quiz", quiz: "tecnica", icon: "🎓", subs: ["decision", "reading"], tiers: [1, 2, 3],
    title: ["Técnica certa", "Right technique", "Técnica correcta"],
    desc: ["3 perguntas sobre passe, domínio, chute, cabeceio e condução.", "3 questions about passing, control, shooting, heading and dribbling.", "3 preguntas sobre pase, control, disparo, cabezazo y conducción."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "impedimento", type: "quiz", quiz: "impedimento", icon: "📏", subs: ["attpos", "reading"], tiers: [1, 2, 3],
    title: ["Impedimento", "Offside", "Fuera de juego"],
    desc: ["3 perguntas sobre quando é e quando não é impedimento.", "3 questions about when it is and isn't offside.", "3 preguntas sobre cuándo es y cuándo no es fuera de juego."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "tirometa", type: "quiz", quiz: "tiroMeta", icon: "↗️", subs: ["reading", "teamplay"], tiers: [1, 2, 3],
    title: ["Tiro de meta", "Goal kicks", "Saque de puerta"],
    desc: ["3 perguntas sobre as regras e a saída de bola no tiro de meta.", "3 questions about the rules and playing out from a goal kick.", "3 preguntas sobre las reglas y la salida en el saque de puerta."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "lateralarea", type: "quiz", quiz: "lateralArea", icon: "🤾", subs: ["attpos", "teamplay"], tiers: [1, 2, 3],
    title: ["Lateral na área", "Long throw into the box", "Saque de banda al área"],
    desc: ["3 perguntas sobre cobrar o lateral na área e atacar a sobra.", "3 questions about throwing into the box and attacking the loose ball.", "3 preguntas sobre sacar de banda al área y atacar el rebote."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "escanteio", type: "quiz", quiz: "escanteio", icon: "⛳", subs: ["attpos", "decision"], tiers: [1, 2, 3],
    title: ["Escanteio a favor", "Attacking corners", "Córner a favor"],
    desc: ["3 perguntas sobre como atacar o escanteio e pegar o rebote.", "3 questions about attacking corners and winning the rebound.", "3 preguntas sobre cómo atacar el córner y ganar el rebote."],
    unit: CQ_UNIT_HITS,
  },
);

Object.assign(CQ_QUIZ, {
  escanteio: [
    {
      q: ["No escanteio, para que serve o jogador que ataca o primeiro pau?", "On a corner, what is the player attacking the near post for?", "En el córner, ¿para qué sirve el jugador que ataca el primer palo?"],
      opts: [
        ["Desvia de cabeça para trás: atrai a marcação e abre espaço para o colega no segundo pau", "He flicks it on: he draws the markers and opens space for a teammate at the far post", "La peina hacia atrás: atrae la marca y abre espacio al compañero del segundo palo"],
        ["Só serve para atrapalhar o goleiro", "Only to get in the keeper's way", "Solo para molestar al portero"],
        ["Para chutar de bicicleta sempre", "To always try an overhead kick", "Para rematar siempre de chilena"],
      ],
      why: ["Quando a bola chega no primeiro pau, todos olham para ela. O desvio para trás pega a zaga aberta e o colega chega livre no segundo pau.", "When the ball reaches the near post, everyone watches it. The flick-on catches the defence open and a teammate arrives free at the far post.", "Cuando el balón llega al primer palo, todos lo miran. El peinado hacia atrás encuentra la defensa abierta y el compañero llega solo al segundo palo."],
      scene: {
        view: [38, -2, 72],
        us: [["w", 99, 1], ["st", 88, 18], ["cb", 84, 39], ["cm", 78, 30]],
        them: [["cb", 88, 21], ["cb", 92, 38], ["gk", 99, 32]],
        ball: [98, 2],
        steps: [
          { d: 1.3, us: { 1: [93, 25] }, them: { 0: [91, 25] }, arrows: [[88, 18, 93, 25, "us"]], hl: { us: [1] }, text: ["O atacante ataca o primeiro pau", "The striker attacks the near post", "El delantero ataca el primer palo"] },
          { d: 1.2, ball: [93, 24], them: { 1: [93, 30], 2: [99, 30] }, arrows: [[98, 2, 93, 24, "ball"]], hl: { them: [0, 1, 2] }, text: ["A marcação toda vai na bola...", "All the markers go to the ball...", "Toda la marca va al balón..."] },
          { d: 1.1, ball: [96, 38], us: { 2: [96, 39] }, arrows: [[93, 24, 96, 38, "ball"], [84, 39, 96, 39, "us"]], hl: { us: [2] }, text: ["...desvio de cabeça para trás", "...flicked on behind them", "...peinada hacia atrás"] },
          { d: 1.0, ball: [100, 34.5], arrows: [[96, 38, 100, 34.5, "ball"]], text: ["Segundo pau livre: gol!", "Free at the far post: goal!", "Segundo palo libre: ¡gol!"] },
        ],
      },
    },
    {
      q: ["No escanteio a favor, por que deixar uns dois jogadores na entrada da área?", "On an attacking corner, why keep a couple of players at the edge of the box?", "En un córner a favor, ¿por qué dejar un par de jugadores en la frontal del área?"],
      opts: [
        ["Para pegar o rebote do corte e chutar de novo, sem deixar a pressão acabar", "To pick up the rebound from the clearance and shoot again, keeping the pressure on", "Para agarrar el rebote del despeje y rematar otra vez, sin soltar la presión"],
        ["Para descansar enquanto os outros disputam", "To rest while the others compete", "Para descansar mientras los demás disputan"],
        ["Porque é proibido ter mais de cinco na área", "Because more than five in the box isn't allowed", "Porque está prohibido tener más de cinco en el área"],
      ],
      why: ["O corte da defesa quase sempre sai curto, na entrada da área. Quem está ali pega a sobra de frente para o gol.", "The defence's clearance usually lands short, at the edge of the box. Whoever is there gets it facing goal.", "El despeje casi siempre sale corto, a la frontal. Quien está ahí agarra el rebote de frente al arco."],
      scene: {
        view: [38, -2, 72],
        us: [["w", 99, 1], ["st", 95, 22], ["cb", 94, 37], ["cm", 78, 24], ["cm", 78, 38]],
        them: [["gk", 99, 32], ["cb", 92, 27], ["cb", 91, 40], ["st", 86, 18]],
        ball: [98, 2],
        steps: [
          { d: 1.5, hl: { us: [3, 4] }, zone: [72, 18, 12, 26], text: ["Dois esperam na entrada da área", "Two wait at the edge of the box", "Dos esperan en la frontal"] },
          { d: 1.1, ball: [92, 26], arrows: [[98, 2, 92, 26, "ball"]], text: ["Escanteio na área...", "Corner into the box...", "Córner al área..."] },
          { d: 1.0, ball: [80, 36], arrows: [[92, 26, 80, 36, "ball"]], hl: { them: [1] }, text: ["O corte sai curto...", "The clearance is short...", "El despeje sale corto..."] },
          { d: 0.9, us: { 4: [79, 37] }, hl: { us: [4] }, text: ["...e cai no pé de quem esperava", "...right to the player waiting", "...y cae al que esperaba"] },
          { d: 1.0, ball: [100, 30.5], them: { 0: [99, 35] }, arrows: [[80, 36, 100, 30.5, "ball"]], text: ["Bate de primeira: gol!", "First-time shot: goal!", "Remate de primera: ¡gol!"] },
        ],
      },
    },
    {
      q: ["No escanteio a favor, como o time se divide?", "On an attacking corner, how does the team split up?", "En un córner a favor, ¿cómo se reparte el equipo?"],
      opts: [
        ["Os mais altos na área, dois na entrada e alguns atrás, marcando quem o adversário deixou na frente", "The tallest in the box, two at the edge and some at the back, marking whoever the opponents left up front", "Los más altos en el área, dos en la frontal y algunos atrás, marcando a quien el rival dejó arriba"],
        ["Todo mundo dentro da pequena área", "Everyone inside the six-yard box", "Todos dentro del área chica"],
        ["Todos perto de quem bate, para tabelar", "Everyone near the taker, for a one-two", "Todos cerca de quien saca, para tocar"],
      ],
      why: ["Suba para a área os mais altos e bons de cabeça, até os zagueiros: são eles que ganham no alto. Mas quem fica atrás depende do adversário: se ele deixar atacantes lá na frente, você precisa deixar jogadores marcando eles, sem subir para a área.", "Send your tallest and best headers forward, even the centre-backs: they win it in the air. But who stays back depends on the opponents: if they leave strikers up front, you must keep players marking them instead of going into the box.", "Sube al área a los más altos y buenos de cabeza, incluso los centrales: son los que ganan arriba. Pero quién se queda atrás depende del rival: si deja delanteros arriba, tienes que dejar jugadores marcándolos, sin subir al área."],
      scene: {
        view: [38, -2, 72],
        us: [["w", 99, 1], ["st", 95, 22], ["cb", 94, 37], ["cb", 90, 30], ["cm", 78, 24], ["cm", 78, 38], ["dm", 56, 30], ["fb", 54, 38]],
        them: [["gk", 99, 32], ["cb", 92, 27], ["cb", 91, 40], ["st", 86, 18], ["st", 60, 31], ["w", 58, 39]],
        ball: [98, 2],
        steps: [
          { d: 1.6, hl: { us: [1, 2, 3] }, zone: [84, 14, 16, 26], text: ["Na área: os mais altos, até os zagueiros", "In the box: the tallest, even the CBs", "En el área: los más altos, hasta centrales"] },
          { d: 1.5, hl: { us: [4, 5] }, zone: [72, 18, 12, 26], text: ["Na entrada: dois para o rebote", "At the edge: two for the rebound", "En la frontal: dos para el rebote"] },
          { d: 1.7, hl: { us: [6, 7], them: [4, 5] }, zone: [50, 26, 14, 18], text: ["Deixaram 2 na frente? 2 ficam marcando", "They left 2 up? 2 of ours mark them", "¿Dejaron 2 arriba? 2 se quedan marcando"] },
        ],
      },
    },
    {
      q: ["A bola do corte sobrou para você na entrada da área, com muita gente na frente do gol. Como chuta?", "The clearance drops to you at the edge, with lots of players in front of goal. How do you shoot?", "El despeje te cae en la frontal, con mucha gente delante del arco. ¿Cómo rematas?"],
      opts: [
        ["De primeira, rasteiro, firme e no canto", "First time, low, firm and into the corner", "De primera, rasante, firme y al rincón"],
        ["Domino e espero todo mundo sair da frente", "Control it and wait for everyone to move", "Controlo y espero que todos se aparten"],
        ["Por cobertura, bem alto", "A lob, really high", "Por encima, bien alto"],
      ],
      why: ["Com tanta gente na frente, o goleiro vê a bola tarde. Rasteiro e no canto, ela passa entre as pernas e é difícil de pegar.", "With so many bodies in front, the keeper sees it late. Low and in the corner, it goes through legs and is hard to stop.", "Con tanta gente delante, el portero ve el balón tarde. Rasante y al rincón, pasa entre piernas y es difícil de atajar."],
      scene: {
        view: [38, -2, 72],
        us: [["cm", 70, 30], ["st", 95, 22], ["cb", 94, 38]],
        them: [["gk", 99, 31], ["cb", 92, 27], ["cb", 91, 40], ["st", 88, 22]],
        ball: [92, 26],
        steps: [
          { d: 1.0, ball: [80, 31], arrows: [[92, 26, 80, 31, "ball"]], text: ["O corte sobrou...", "The clearance drops...", "El despeje queda..."] },
          { d: 1.0, us: { 0: [79, 31] }, arrows: [[70, 30, 79, 31, "us"]], hl: { them: [1, 2, 3] }, text: ["Muita gente na frente do gol...", "Lots of players in front of goal...", "Mucha gente delante del arco..."] },
          { d: 1.1, ball: [100, 34.5], them: { 0: [99, 29] }, arrows: [[80, 31, 100, 34.5, "ball"]], text: ["Rasteiro e no canto: gol!", "Low into the corner: goal!", "Rasante al rincón: ¡gol!"] },
        ],
      },
    },
    {
      q: ["O corte do escanteio caiu no pé de um adversário. O que faz quem está na entrada da área?", "The corner is cleared to an opponent. What do the players at the edge of the box do?", "El despeje del córner cae en un rival. ¿Qué hacen los de la frontal?"],
      opts: [
        ["Pressiona na hora para ele não sair no contra-ataque", "Press him straight away so he can't start a counter", "Presionan enseguida para que no salga al contraataque"],
        ["Volta correndo até a própria área", "Sprint all the way back to your own box", "Vuelven corriendo hasta su propia área"],
        ["Para e reclama que deu azar", "Stop and complain about bad luck", "Se paran a quejarse de la mala suerte"],
      ],
      why: ["Quem está na entrada é o primeiro a chegar. Pressionando na hora, o time recupera a bola e o ataque continua.", "The players at the edge are first to get there. Pressing straight away wins the ball back and the attack goes on.", "Los de la frontal son los primeros en llegar. Presionando enseguida, el equipo recupera y el ataque sigue."],
      scene: {
        view: [38, -2, 72],
        us: [["st", 95, 22], ["cb", 94, 37], ["cm", 78, 24], ["cm", 78, 38]],
        them: [["gk", 99, 32], ["cb", 92, 27], ["cm", 72, 31]],
        ball: [92, 26],
        steps: [
          { d: 1.1, ball: [73, 31], arrows: [[92, 26, 73, 31, "ball"]], hl: { them: [2] }, text: ["O corte caiu no pé deles...", "It drops to one of them...", "Cae en uno de ellos..."] },
          { d: 1.1, us: { 2: [74, 28], 3: [74, 34] }, arrows: [[78, 24, 74, 28, "us"], [78, 38, 74, 34, "us"]], hl: { us: [2, 3] }, text: ["...pressione na hora!", "...press him straight away!", "...¡presiona enseguida!"] },
          { d: 1.1, ball: [75, 29], them: { 2: [70, 33] }, hl: { us: [2] }, text: ["Roubou de novo: o ataque continua", "Won it back: the attack goes on", "Robó de nuevo: el ataque sigue"] },
        ],
      },
    },
  ],

  lateralArea: [
    {
      q: ["No lateral na área, um atacante corre para o primeiro pau. Para quê?", "On a long throw, a striker runs to the near post. What for?", "En el saque de banda al área, un delantero va al primer palo. ¿Para qué?"],
      opts: [
        ["Para desviar de cabeça para trás: ele atrai a marcação e abre espaço para um colega no segundo pau", "To flick it on with his head: he draws the markers and opens space for a teammate at the far post", "Para peinarla hacia atrás: atrae la marca y abre espacio a un compañero en el segundo palo"],
        ["Para ficar colado no goleiro e segurar o braço dele", "To stand on the keeper and hold his arm", "Para pegarse al portero y agarrarle el brazo"],
        ["Para cabecear de volta para quem cobrou o lateral", "To head it back to the thrower", "Para cabecear de vuelta a quien sacó"],
      ],
      why: ["O desvio no primeiro pau puxa a marcação e a atenção de todos para a bola. A zaga abre buraco e o colega chega livre no segundo pau.", "The near-post flick drags the markers and everyone's attention to the ball. The defence opens up and a teammate arrives free at the far post.", "El peinado en el primer palo arrastra la marca y la atención de todos hacia el balón. La defensa se abre y el compañero llega solo al segundo palo."],
      scene: {
        view: [38, -2, 72],
        us: [["fb", 86, 0], ["st", 88, 18], ["cm", 84, 39]],
        them: [["cb", 88, 21], ["cb", 92, 38], ["gk", 99, 32]],
        ball: [86, 1],
        steps: [
          { d: 1.3, us: { 1: [93, 25] }, them: { 0: [91, 25] }, arrows: [[88, 18, 93, 25, "us"]], hl: { us: [1] }, text: ["O atacante ataca o primeiro pau", "The striker attacks the near post", "El delantero ataca el primer palo"] },
          { d: 1.2, ball: [93, 24], them: { 1: [93, 30], 2: [99, 30] }, arrows: [[86, 1, 93, 24, "ball"]], hl: { them: [0, 1, 2] }, text: ["A marcação toda vai na bola...", "All the markers go to the ball...", "Toda la marca va al balón..."] },
          { d: 1.1, ball: [96, 38], us: { 2: [96, 39] }, arrows: [[93, 24, 96, 38, "ball"], [84, 39, 96, 39, "us"]], hl: { us: [2] }, text: ["...desvio de cabeça para trás", "...flicked on behind them", "...peinada hacia atrás"] },
          { d: 1.0, ball: [100, 34.5], arrows: [[96, 38, 100, 34.5, "ball"]], text: ["Segundo pau livre: gol!", "Free at the far post: goal!", "Segundo palo libre: ¡gol!"] },
        ],
      },
    },
    {
      q: ["Por que cobrar o lateral direto na área do adversário pode ser uma ótima jogada?", "Why can throwing the ball straight into the opponents' box be a great move?", "¿Por qué sacar de banda directo al área rival puede ser una gran jugada?"],
      opts: [
        ["O corte da defesa costuma sair fraco e a bola sobra na entrada da área para quem chega batendo", "The defence's clearance is often weak and the ball drops at the edge of the box for whoever arrives to shoot", "El despeje suele salir flojo y el balón queda en la frontal para quien llega a rematar"],
        ["Porque o goleiro não pode pegar bola que vem de lateral", "Because the keeper can't catch a ball from a throw-in", "Porque el portero no puede agarrar un balón de saque de banda"],
        ["Porque gol direto de lateral vale dois", "Because a goal straight from a throw-in counts double", "Porque el gol directo de saque de banda vale doble"],
      ],
      why: ["Bola na área gera confusão. Cabeceio de defesa apertado sai curto, e quem chega na entrada da área pega a sobra de frente para o gol.", "A ball in the box causes chaos. A defender's header under pressure goes short, and whoever arrives at the edge gets it facing goal.", "Un balón al área genera lío. El cabezazo del defensor apretado sale corto y quien llega a la frontal lo agarra de frente al arco."],
      scene: {
        view: [44, -3, 62],
        us: [["fb", 86, 0], ["st", 93, 25], ["cm", 68, 32]],
        them: [["cb", 91, 21], ["cb", 92, 36], ["gk", 99, 33]],
        ball: [86, 1],
        steps: [
          { d: 1.3, ball: [91, 20], arrows: [[86, 1, 91, 20, "ball"]], text: ["Lateral direto na área", "Throw straight into the box", "Saque directo al área"] },
          { d: 1.1, ball: [80, 28], arrows: [[91, 20, 80, 28, "ball"]], hl: { them: [0] }, text: ["O corte sai fraco...", "The clearance is weak...", "El despeje sale flojo..."] },
          { d: 1.1, us: { 2: [79, 29] }, arrows: [[68, 32, 79, 29, "us"]], hl: { us: [2] }, text: ["...e sobra na entrada da área", "...and drops at the edge of the box", "...y queda en la frontal"] },
          { d: 1.0, ball: [100, 29.5], them: { 2: [99, 35] }, arrows: [[80, 28, 100, 29.5, "ball"]], text: ["Chegou batendo: gol!", "Arrived and shot: goal!", "Llegó rematando: ¡gol!"] },
        ],
      },
    },
    {
      q: ["No lateral na área, como os atacantes se espalham?", "On a long throw into the box, how do the attackers spread out?", "En el saque de banda al área, ¿cómo se reparten los atacantes?"],
      opts: [
        ["Alguns dentro da área para disputar e outros na entrada, esperando a sobra", "Some in the box to compete, others at the edge waiting for the loose ball", "Algunos dentro del área para disputar y otros en la frontal esperando el rebote"],
        ["Todos dentro da pequena área", "Everyone inside the six-yard box", "Todos dentro del área chica"],
        ["Todos perto de quem vai cobrar", "Everyone close to the thrower", "Todos cerca de quien saca"],
      ],
      why: ["Quem está na área disputa e atrapalha o corte. Quem espera na entrada pega a sobra e chuta de frente.", "Those in the box compete and spoil the clearance. Those waiting at the edge pick up the loose ball and shoot facing goal.", "Los del área disputan y molestan el despeje. Los que esperan en la frontal agarran el rebote y rematan de frente."],
      scene: {
        view: [44, -3, 62],
        us: [["fb", 86, 0], ["st", 93, 25], ["am", 89, 15], ["cm", 77, 30], ["w", 75, 19]],
        them: [["cb", 91, 21], ["cb", 92, 36], ["gk", 99, 33]],
        ball: [86, 1],
        steps: [
          { d: 1.6, hl: { us: [1, 2] }, zone: [84, 12, 16, 24], text: ["Alguns na área para disputar", "Some in the box to compete", "Algunos en el área para disputar"] },
          { d: 1.6, hl: { us: [3, 4] }, zone: [70, 14, 12, 22], text: ["Outros na entrada, esperando a sobra", "Others at the edge, waiting", "Otros en la frontal, esperando"] },
          { d: 1.3, ball: [91, 20], arrows: [[86, 1, 91, 20, "ball"]], text: ["Bola na área: todo mundo atento", "Ball in: everyone alert", "Balón al área: todos atentos"] },
        ],
      },
    },
    {
      q: ["A bola sobrou na entrada da área depois do corte. Como finalizar?", "The ball drops at the edge of the box after the clearance. How do you finish?", "El balón queda en la frontal tras el despeje. ¿Cómo rematas?"],
      opts: [
        ["Chego em movimento e bato de primeira, firme e no gol", "Arrive on the move and hit it first time, firm and on target", "Llego en movimiento y le pego de primera, firme y al arco"],
        ["Domino, paro e olho com calma", "Control it, stop and look around calmly", "Controlo, paro y miro con calma"],
        ["Chuto o mais forte possível, de qualquer jeito", "Blast it as hard as I can, any old way", "Pateo lo más fuerte posible, como sea"],
      ],
      why: ["Na entrada da área o tempo é curto: se parar, a defesa fecha. De primeira e no gol, o goleiro ainda está se arrumando.", "At the edge of the box there's no time: stop and the defence closes in. First time and on target, while the keeper is still setting.", "En la frontal no hay tiempo: si paras, la defensa cierra. De primera y al arco, mientras el portero se acomoda."],
      scene: {
        view: [44, -3, 62],
        us: [["cm", 68, 32], ["st", 93, 25]],
        them: [["cb", 91, 21], ["cb", 92, 36], ["gk", 99, 33]],
        ball: [91, 20],
        steps: [
          { d: 1.1, ball: [80, 28], arrows: [[91, 20, 80, 28, "ball"]], text: ["A bola sobrou...", "The ball drops...", "El balón queda..."] },
          { d: 1.1, us: { 0: [79, 29] }, arrows: [[68, 32, 79, 29, "us"]], hl: { us: [0] }, text: ["Chegue em movimento...", "Arrive on the move...", "Llega en movimiento..."] },
          { d: 1.0, ball: [100, 29.5], them: { 2: [99, 35] }, arrows: [[80, 28, 100, 29.5, "ball"]], text: ["...e bata de primeira, no gol!", "...and hit it first time, on target!", "...¡y pégale de primera, al arco!"] },
        ],
      },
    },
    {
      q: ["No lateral, você pode ficar atrás dos zagueiros, perto do gol?", "On a throw-in, can you stand behind the defenders, near goal?", "En el saque de banda, ¿puedes quedarte detrás de los defensores, cerca del arco?"],
      opts: [
        ["Pode: recebendo direto de lateral não existe impedimento", "Yes: there's no offside straight from a throw-in", "Sí: recibiendo directo de saque de banda no hay fuera de juego"],
        ["Não: é impedimento como em qualquer passe", "No: it's offside like any pass", "No: es fuera de juego como cualquier pase"],
        ["Só se o goleiro deixar", "Only if the keeper lets you", "Solo si el portero te deja"],
      ],
      why: ["Lateral não tem impedimento. Um atacante escondido atrás da defesa pode receber livre perto do gol.", "There's no offside from a throw-in. A striker hiding behind the defence can receive free near goal.", "El saque de banda no tiene fuera de juego. Un delantero escondido detrás de la defensa puede recibir solo cerca del arco."],
      scene: {
        view: [44, -3, 62],
        us: [["fb", 86, 0], ["st", 97, 22]],
        them: [["cb", 90, 20], ["cb", 91, 30], ["gk", 99, 33]],
        ball: [86, 1],
        steps: [
          { d: 1.5, hl: { us: [1] }, zone: [92, 14, 8, 16], text: ["Atrás da defesa, perto do gol...", "Behind the defence, near goal...", "Detrás de la defensa, cerca del arco..."] },
          { d: 1.3, ball: [97, 21], arrows: [[86, 1, 97, 21, "ball"]], text: ["...de lateral pode: sem impedimento!", "...from a throw-in it's fine: no offside!", "...de saque de banda vale: ¡no hay!"] },
        ],
      },
    },
    {
      q: ["Enquanto a bola vai para a área no lateral, o que o resto do time faz?", "While the throw goes into the box, what does the rest of the team do?", "Mientras el saque va al área, ¿qué hace el resto del equipo?"],
      opts: [
        ["Alguns ficam atrás, prontos para cortar o contra-ataque", "Some stay back, ready to stop the counter", "Algunos se quedan atrás, listos para cortar el contraataque"],
        ["Todos vão para a área ajudar", "Everyone goes into the box to help", "Todos van al área a ayudar"],
        ["Ficam parados assistindo a jogada", "Stand still and watch", "Se quedan quietos mirando la jugada"],
      ],
      why: ["Se a defesa deles der um chutão, precisa ter alguém atrás. Quantos ficam depende do adversário: se ele deixar atacantes lá na frente, você deixa jogadores marcando eles. Os outros, principalmente os mais altos, sobem para a área.", "If their defence boots it clear, someone must be back. How many depends on the opponents: if they leave strikers up front, keep players marking them. The rest, especially the tallest, go into the box.", "Si su defensa revienta el balón, tiene que haber alguien atrás. Cuántos depende del rival: si deja delanteros arriba, dejas jugadores marcándolos. Los demás, sobre todo los más altos, suben al área."],
      scene: {
        us: [["fb", 86, 0], ["st", 93, 25], ["am", 89, 15], ["cm", 77, 30], ["dm", 60, 32], ["cb", 50, 22], ["cb", 50, 40]],
        them: [["cb", 91, 21], ["cb", 92, 36], ["gk", 99, 33], ["st", 58, 42]],
        ball: [86, 1],
        steps: [
          { d: 1.6, hl: { us: [4, 5, 6] }, zone: [46, 16, 18, 30], text: ["Atrás, 3 de olho no contra-ataque", "At the back, 3 watch for the counter", "Atrás, 3 atentos al contraataque"] },
          { d: 1.1, ball: [91, 20], arrows: [[86, 1, 91, 20, "ball"]], text: ["Lateral na área...", "Throw into the box...", "Saque al área..."] },
          { d: 1.3, ball: [57, 41], us: { 6: [56, 41] }, arrows: [[91, 20, 57, 41, "ball"]], hl: { us: [6] }, text: ["Chutão deles? O zagueiro corta", "They boot it? The centre-back cuts it", "¿Pelotazo? El central lo corta"] },
        ],
      },
    },
  ],

  tiroMeta: [
    {
      q: ["No tiro de meta, onde os adversários precisam ficar até a bola entrar em jogo?", "On a goal kick, where must opponents stay until the ball is in play?", "En el saque de puerta, ¿dónde deben quedarse los rivales hasta que el balón esté en juego?"],
      opts: [
        ["Fora da grande área", "Outside the penalty area", "Fuera del área grande"],
        ["Fora da pequena área", "Outside the six-yard box", "Fuera del área chica"],
        ["Onde quiserem, até perto do goleiro", "Anywhere, even next to the keeper", "Donde quieran, hasta cerca del portero"],
      ],
      why: ["Adversário só entra na grande área depois que a bola é chutada. Seus colegas podem ficar dentro.", "Opponents only enter the penalty area once the ball is kicked. Your teammates can be inside.", "El rival solo entra al área grande después de que se patea el balón. Tus compañeros pueden estar dentro."],
      scene: {
        view: [-4, 10, 69],
        us: [["gk", 3, 32], ["cb", 12, 20], ["cb", 12, 44]],
        them: [["st", 11, 30], ["w", 9, 40]],
        ball: [4, 30],
        steps: [
          { d: 1.5, hl: { them: [0, 1] }, text: ["Adversário dentro da área? Não pode!", "Opponents in the box? Not allowed!", "¿Rivales dentro del área? ¡No se puede!"] },
          { d: 1.6, them: { 0: [20, 28], 1: [20, 40] }, zone: [0, 14, 16, 36], arrows: [[11, 30, 20, 28, "them"], [9, 40, 20, 40, "them"]], text: ["Todos fora da grande área", "Everyone out of the penalty area", "Todos fuera del área grande"] },
          { d: 1.4, ball: [12, 21], arrows: [[4, 30, 12, 21, "ball"]], hl: { us: [1] }, text: ["Agora o goleiro pode bater", "Now the keeper can take it", "Ahora el portero puede sacar"] },
        ],
      },
    },
    {
      q: ["No tiro de meta, o goleiro pode tocar curto para um colega dentro da própria área?", "On a goal kick, can the keeper pass short to a teammate inside the box?", "En el saque de puerta, ¿puede el portero tocar corto a un compañero dentro del área?"],
      opts: [
        ["Pode: a bola entra em jogo assim que é chutada e se move", "Yes: the ball is in play as soon as it's kicked and moves", "Sí: el balón está en juego en cuanto se patea y se mueve"],
        ["Não: a bola precisa sair da área primeiro", "No: the ball must leave the box first", "No: el balón tiene que salir del área primero"],
        ["Só se o juiz autorizar", "Only if the referee allows it", "Solo si el árbitro lo autoriza"],
      ],
      why: ["Desde 2019 a bola não precisa sair da área. Dá para sair jogando curto, com calma.", "Since 2019 the ball doesn't have to leave the box. You can play out short, calmly.", "Desde 2019 el balón no tiene que salir del área. Se puede salir jugando corto, con calma."],
      scene: {
        view: [-4, 10, 69],
        us: [["gk", 3, 32], ["cb", 12, 18], ["cb", 12, 46]],
        them: [["st", 20, 26], ["w", 20, 42], ["cm", 32, 32]],
        ball: [4, 33],
        steps: [
          { d: 1.5, zone: [0, 14, 16, 36], hl: { them: [0, 1] }, text: ["Adversários esperam fora da área", "Opponents wait outside the box", "Los rivales esperan fuera del área"] },
          { d: 1.4, ball: [12, 45], arrows: [[4, 33, 12, 45, "ball"]], hl: { us: [2] }, text: ["Toque curto dentro da área: vale!", "Short pass inside the box: allowed!", "Toque corto dentro del área: ¡vale!"] },
          { d: 1.4, them: { 1: [16, 44] }, arrows: [[20, 42, 16, 44, "them"]], text: ["Agora sim eles podem pressionar", "Now they're allowed to press", "Ahora sí pueden presionar"] },
        ],
      },
    },
    {
      q: ["Em que momento os adversários podem entrar na área no tiro de meta?", "When can opponents enter the box on a goal kick?", "¿En qué momento pueden los rivales entrar al área en el saque de puerta?"],
      opts: [
        ["Assim que a bola é chutada e se move", "As soon as the ball is kicked and moves", "En cuanto el balón se patea y se mueve"],
        ["Só quando a bola sai da área", "Only when the ball leaves the box", "Solo cuando el balón sale del área"],
        ["Só depois do segundo toque", "Only after the second touch", "Solo después del segundo toque"],
      ],
      why: ["Bola chutada é bola em jogo. Aí eles podem entrar, mesmo que o passe seja dentro da área.", "A kicked ball is in play. Then they can come in, even if the pass stays in the box.", "Balón pateado es balón en juego. Ahí pueden entrar, aunque el pase sea dentro del área."],
      scene: {
        view: [-4, 10, 69],
        us: [["gk", 3, 32], ["cb", 11, 22], ["cb", 11, 42]],
        them: [["st", 18, 28], ["w", 18, 38]],
        ball: [4, 31],
        steps: [
          { d: 1.5, hl: { them: [0, 1] }, zone: [15.5, 14, 1, 36], text: ["Esperando na linha da área...", "Waiting on the edge of the box...", "Esperando en la línea del área..."] },
          { d: 1.5, ball: [10, 23], them: { 0: [13, 25] }, arrows: [[4, 31, 10, 23, "ball"], [18, 28, 13, 25, "them"]], text: ["Bola chutada: já podem entrar", "Ball kicked: they can come in", "Balón pateado: ya pueden entrar"] },
        ],
      },
    },
    {
      q: ["O adversário entrou na área antes do goleiro bater e atrapalhou a saída. O que acontece?", "An opponent ran into the box before the kick and got in the way. What happens?", "Un rival entró al área antes del saque y molestó la salida. ¿Qué pasa?"],
      opts: [
        ["O tiro de meta é batido de novo", "The goal kick is retaken", "Se repite el saque de puerta"],
        ["Vira pênalti para o time dele", "It's a penalty to his team", "Es penal para su equipo"],
        ["O jogo segue normalmente", "Play goes on as normal", "El juego sigue normal"],
      ],
      why: ["Quem entra antes da hora e atrapalha faz o juiz mandar repetir. Se insistir, pode levar cartão.", "If someone comes in early and interferes, the referee orders a retake. Keep doing it and it's a card.", "Si alguien entra antes y molesta, el árbitro manda repetir. Si insiste, puede ver tarjeta."],
      scene: {
        view: [-4, 10, 69],
        us: [["gk", 3, 32], ["cb", 12, 20], ["cb", 12, 44]],
        them: [["st", 20, 26], ["w", 20, 40]],
        ball: [4, 31],
        steps: [
          { d: 1.5, them: { 0: [10, 24] }, arrows: [[20, 26, 10, 24, "them"]], hl: { them: [0] }, text: ["Entrou antes da bola rolar...", "He came in before the kick...", "Entró antes del saque..."] },
          { d: 1.2, ball: [10, 23], arrows: [[4, 31, 10, 23, "ball"]], text: ["...e roubou a bola na área", "...and stole it in the box", "...y robó el balón en el área"] },
          { d: 1.5, ball: [4, 31], them: { 0: [20, 26] }, zone: [0, 25, 5.4, 14], text: ["Não vale: o tiro de meta é repetido", "Not allowed: the goal kick is retaken", "No vale: se repite el saque de puerta"] },
        ],
      },
    },
    {
      q: ["Onde a bola pode ser colocada para bater o tiro de meta?", "Where can the ball be placed for a goal kick?", "¿Dónde se puede poner el balón para el saque de puerta?"],
      opts: [
        ["Em qualquer ponto da pequena área", "Anywhere in the six-yard box", "En cualquier punto del área chica"],
        ["Só no canto do lado em que a bola saiu", "Only in the corner on the side it went out", "Solo en la esquina del lado por donde salió"],
        ["Na marca do pênalti", "On the penalty spot", "En el punto penal"],
      ],
      why: ["Qualquer lugar da pequena área vale. Escolha o lado que facilita o passe.", "Anywhere in the six-yard box is fine. Pick the side that makes the pass easier.", "Cualquier lugar del área chica vale. Elige el lado que facilite el pase."],
      scene: {
        view: [-4, 10, 69],
        us: [["gk", 3, 30], ["cb", 12, 20], ["cb", 12, 44]],
        them: [["st", 22, 28], ["w", 22, 40]],
        ball: [2, 27],
        steps: [
          { d: 1.5, zone: [0, 25, 5.4, 14], text: ["Qualquer ponto da pequena área", "Anywhere in the six-yard box", "Cualquier punto del área chica"] },
          { d: 1.4, ball: [5, 37], us: { 0: [3, 36] }, zone: [0, 25, 5.4, 14], text: ["Deste lado também vale", "This side is fine too", "De este lado también vale"] },
          { d: 1.4, ball: [12, 43], arrows: [[5, 37, 12, 43, "ball"]], hl: { us: [2] }, text: ["Escolha o lado do passe mais fácil", "Pick the side of the easier pass", "Elige el lado del pase más fácil"] },
        ],
      },
    },
    {
      q: ["Por que muitos times saem jogando curto no tiro de meta?", "Why do many teams play short from goal kicks?", "¿Por qué muchos equipos salen jugando corto en el saque de puerta?"],
      opts: [
        ["Para ficar com a bola e atrair a pressão, abrindo espaço lá na frente", "To keep the ball and draw the press, opening space further up", "Para quedarse con el balón y atraer la presión, abriendo espacio arriba"],
        ["Porque é proibido chutar longe", "Because kicking long is not allowed", "Porque está prohibido patear largo"],
        ["Para gastar tempo, sempre", "To waste time, always", "Para perder tiempo, siempre"],
      ],
      why: ["Chutão é cara ou coroa. Saindo curto, o time atrai o adversário e acha o colega livre.", "A long ball is a coin toss. Playing short draws the opponent in and finds the free teammate.", "El pelotazo es cara o cruz. Saliendo corto, el equipo atrae al rival y encuentra al libre."],
      scene: {
        view: [-4, 10, 69],
        us: [["gk", 3, 32], ["cb", 12, 46], ["dm", 26, 32], ["w", 46, 14]],
        them: [["st", 20, 40], ["cm", 30, 26], ["fb", 50, 30]],
        ball: [4, 33],
        steps: [
          { d: 1.3, ball: [12, 45], arrows: [[4, 33, 12, 45, "ball"]], text: ["Toque curto atrai a pressão", "A short pass draws the press", "El toque corto atrae la presión"] },
          { d: 1.3, them: { 0: [16, 50], 1: [8, 41] }, arrows: [[20, 40, 16, 50, "them"], [30, 26, 8, 41, "them"]], text: ["Eles sobem para roubar...", "They push up to win it...", "Suben para robar..."] },
          { d: 1.6, ball: [52, 15], us: { 3: [52, 14] }, arrows: [[12, 45, 52, 15, "ball"]], hl: { us: [3] }, zone: [36, 10, 24, 14], text: ["...e sobra espaço lá na frente", "...leaving space further up", "...y queda espacio arriba"] },
        ],
      },
    },
  ],

  impedimento: [
    {
      q: ["Para saber se está impedido, você compara sua posição com quem?", "To know if you're offside, who do you compare your position with?", "Para saber si estás en fuera de juego, ¿con quién comparas tu posición?"],
      opts: [
        ["Com o penúltimo adversário (o goleiro costuma ser o último)", "The second-to-last opponent (the keeper is usually the last)", "Con el penúltimo rival (el portero suele ser el último)"],
        ["Com o goleiro, sempre", "Always with the goalkeeper", "Siempre con el portero"],
        ["Com o colega que vai passar a bola", "With the teammate passing the ball", "Con el compañero que va a pasar"],
      ],
      why: ["Conta o penúltimo adversário. Como o goleiro quase sempre é o último, olhe o zagueiro mais atrás.", "It's the second-to-last opponent. The keeper is almost always last, so watch the deepest defender.", "Cuenta el penúltimo rival. Como el portero casi siempre es el último, mira al defensor más atrasado."],
      scene: {
        us: [["cm", 55, 34], ["st", 84, 28]],
        them: [["gk", 96, 32], ["cb", 78, 22], ["cb", 74, 42]],
        ball: [57, 35],
        steps: [
          { d: 1.5, hl: { them: [0] }, text: ["Último adversário: o goleiro", "Last opponent: the goalkeeper", "Último rival: el portero"] },
          { d: 1.6, hl: { them: [1] }, zone: [77.5, 3, 1, 58], text: ["Penúltimo: o zagueiro mais atrás", "Second-to-last: the deepest defender", "Penúltimo: el defensor más atrasado"] },
          { d: 1.6, ball: [84, 29], arrows: [[57, 35, 84, 29, "ball"]], hl: { us: [1] }, zone: [78, 3, 22, 58], text: ["Passou dele na hora do passe: impedido", "Beyond him when passed: offside", "Más allá de él en el pase: fuera de juego"] },
        ],
      },
    },
    {
      q: ["Na hora do passe, você estava na mesma linha do penúltimo defensor. É impedimento?", "When the ball was played, you were level with the second-to-last defender. Offside?", "En el momento del pase estabas en línea con el penúltimo defensor. ¿Es fuera de juego?"],
      opts: [
        ["Não: na mesma linha está valendo", "No: level is onside", "No: en línea está habilitado"],
        ["Sim: empatou, é impedimento", "Yes: level means offside", "Sí: en línea es fuera de juego"],
        ["Depende de quem chegar primeiro na bola", "It depends who reaches the ball first", "Depende de quién llegue primero al balón"],
      ],
      why: ["Só é impedimento se você estiver mais perto do gol que ele. Na mesma linha, o lance segue.", "It's only offside if you're nearer the goal than him. Level, play goes on.", "Solo es fuera de juego si estás más cerca del arco que él. En línea, la jugada sigue."],
      scene: {
        us: [["cm", 56, 32], ["st", 76, 20]],
        them: [["gk", 96, 32], ["cb", 76, 28], ["cb", 72, 42]],
        ball: [58, 33],
        steps: [
          { d: 1.6, hl: { us: [1], them: [1] }, zone: [75.5, 3, 1, 58], text: ["Mesma linha na hora do passe", "Level when the ball is played", "En línea en el momento del pase"] },
          { d: 1.5, us: { 1: [90, 22] }, ball: [89, 23], arrows: [[58, 33, 89, 23, "ball"], [76, 20, 90, 22, "us"]], text: ["Na mesma linha está valendo!", "Level is onside!", "¡En línea está habilitado!"] },
        ],
      },
    },
    {
      q: ["Você recebe a bola ainda no seu campo de defesa, já atrás dos zagueiros deles. É impedimento?", "You get the ball in your own half, already behind their defenders. Offside?", "Recibes el balón en tu propio campo, ya detrás de sus defensores. ¿Es fuera de juego?"],
      opts: [
        ["Não: no seu próprio campo não existe impedimento", "No: there's no offside in your own half", "No: en tu propio campo no hay fuera de juego"],
        ["Sim: passou dos zagueiros, é impedimento", "Yes: you're past the defenders, it's offside", "Sí: pasaste a los defensores, es fuera de juego"],
        ["Só se o goleiro estiver adiantado", "Only if the keeper is off his line", "Solo si el portero está adelantado"],
      ],
      why: ["Impedimento só existe no campo do adversário. Time que marca lá em cima corre esse risco.", "Offside only exists in the opponents' half. Teams that press high take that risk.", "El fuera de juego solo existe en campo rival. El equipo que presiona arriba corre ese riesgo."],
      scene: {
        us: [["cb", 28, 32], ["st", 46, 30]],
        them: [["gk", 96, 32], ["cb", 40, 22], ["cb", 40, 40]],
        ball: [30, 33],
        steps: [
          { d: 1.6, hl: { us: [1] }, zone: [0, 3, 50, 58], text: ["No seu campo não existe impedimento", "No offside in your own half", "En tu campo no hay fuera de juego"] },
          { d: 1.6, us: { 1: [70, 30] }, ball: [69, 31], arrows: [[30, 33, 69, 31, "ball"], [46, 30, 70, 30, "us"]], text: ["Recebe e parte para o gol", "Take it and run at goal", "Recibe y sale hacia el arco"] },
        ],
      },
    },
    {
      q: ["Em quais lances não existe impedimento?", "In which situations is there no offside?", "¿En qué jugadas no existe el fuera de juego?"],
      opts: [
        ["Lateral, tiro de meta e escanteio", "Throw-ins, goal kicks and corners", "Saque de banda, saque de puerta y córner"],
        ["Cobrança de falta e cabeceio", "Free kicks and headers", "Tiros libres y cabezazos"],
        ["Só em chutes de longe", "Only on long-range shots", "Solo en disparos de lejos"],
      ],
      why: ["Recebeu direto de lateral, tiro de meta ou escanteio: não tem impedimento. De falta, tem!", "Straight from a throw-in, goal kick or corner: no offside. From a free kick, there is!", "Directo de saque de banda, saque de puerta o córner: no hay fuera de juego. ¡De tiro libre, sí!"],
      scene: {
        us: [["fb", 70, 62], ["st", 88, 40]],
        them: [["gk", 96, 32], ["cb", 80, 30], ["cb", 80, 46]],
        ball: [70, 61],
        steps: [
          { d: 1.5, hl: { us: [1] }, zone: [80, 3, 20, 58], text: ["Ele está além dos zagueiros...", "He's beyond the defenders...", "Está más allá de los defensores..."] },
          { d: 1.5, ball: [87, 41], arrows: [[70, 61, 87, 41, "ball"]], text: ["...mas veio de lateral: sem impedimento", "...but from a throw-in: not offside", "...pero de saque de banda: no hay"] },
        ],
      },
    },
    {
      q: ["Um colega está impedido, mas a bola vai para você, que está em posição legal. O gol vale?", "A teammate is offside, but the ball comes to you and you're onside. Does the goal count?", "Un compañero está en fuera de juego, pero el balón te llega a ti, que estás habilitado. ¿Vale el gol?"],
      opts: [
        ["Vale: estar impedido sem participar da jogada não é falta", "Yes: being offside without taking part isn't an offence", "Sí: estar en fuera de juego sin participar no es infracción"],
        ["Não vale: se alguém está impedido, o lance para", "No: if anyone is offside, play stops", "No: si alguien está en fuera de juego, se para"],
        ["Só vale se o impedido sair do campo", "Only if the offside player leaves the pitch", "Solo si el que está en fuera de juego sale del campo"],
      ],
      why: ["Só é marcado se o impedido participar: tocar na bola, atrapalhar o goleiro ou um defensor.", "It's only given if the offside player gets involved: touching the ball or blocking the keeper or a defender.", "Solo se pita si el que está en fuera de juego participa: tocar el balón o molestar al portero o a un defensor."],
      scene: {
        us: [["cm", 60, 30], ["w", 72, 14], ["st", 86, 52]],
        them: [["gk", 95, 32], ["cb", 78, 30], ["cb", 78, 42]],
        ball: [62, 31],
        steps: [
          { d: 1.5, hl: { us: [2] }, zone: [78, 3, 22, 58], text: ["Ele está impedido...", "He's offside...", "Está en fuera de juego..."] },
          { d: 1.5, us: { 1: [86, 18] }, ball: [85, 19], arrows: [[62, 31, 85, 19, "ball"], [72, 14, 86, 18, "us"]], hl: { us: [1] }, text: ["...mas o passe foi para o colega", "...but the pass went to a teammate", "...pero el pase fue al compañero"] },
          { d: 1.2, ball: [99, 26], them: { 0: [95, 37] }, arrows: [[85, 19, 99, 26, "ball"]], text: ["Não participou: gol valendo!", "He wasn't involved: goal stands!", "No participó: ¡gol válido!"] },
        ],
      },
    },
    {
      q: ["O juiz olha sua posição em qual momento?", "At what moment does the referee judge your position?", "¿En qué momento mira el árbitro tu posición?"],
      opts: [
        ["Quando o colega toca na bola", "When your teammate plays the ball", "Cuando el compañero toca el balón"],
        ["Quando você recebe a bola", "When you receive the ball", "Cuando recibes el balón"],
        ["Quando você chuta para o gol", "When you shoot at goal", "Cuando disparas al arco"],
      ],
      why: ["Vale a foto do momento do passe. Depois dele, você pode correr para trás dos zagueiros.", "What counts is the snapshot when the ball is played. After that, you can run in behind.", "Vale la foto del momento del pase. Después puedes correr a la espalda de los defensores."],
      scene: {
        us: [["cm", 56, 32], ["st", 72, 30]],
        them: [["gk", 96, 32], ["cb", 76, 22], ["cb", 76, 40]],
        ball: [58, 33],
        steps: [
          { d: 1.5, hl: { us: [1] }, zone: [75.5, 3, 1, 58], text: ["No passe ele está em posição legal", "At the pass he's onside", "En el pase está habilitado"] },
          { d: 1.5, us: { 1: [90, 30] }, ball: [89, 31], arrows: [[58, 33, 89, 31, "ball"], [72, 30, 90, 30, "us"]], text: ["Correr depois do passe está valendo", "Running in after the pass is fine", "Correr después del pase es válido"] },
        ],
      },
    },
    {
      q: ["Você passou dos zagueiros, mas o colega toca a bola para trás, para você. É impedimento?", "You're past the defenders, but your teammate passes back to you. Offside?", "Pasaste a los defensores, pero el compañero te la pasa hacia atrás. ¿Es fuera de juego?"],
      opts: [
        ["Não: quem está atrás da bola não fica impedido", "No: you can't be offside behind the ball", "No: quien está detrás del balón no está en fuera de juego"],
        ["Sim: passou dos zagueiros, é impedimento", "Yes: past the defenders means offside", "Sí: pasaste a los defensores, es fuera de juego"],
        ["Só se o passe for de cabeça", "Only if the pass is a header", "Solo si el pase es de cabeza"],
      ],
      why: ["Atrás da linha da bola você está sempre em posição legal. Passe para trás é seguro.", "Behind the ball you're always onside. A pass backwards is safe.", "Detrás del balón siempre estás habilitado. El pase hacia atrás es seguro."],
      scene: {
        us: [["cm", 86, 18], ["st", 82, 38]],
        them: [["gk", 96, 32], ["cb", 78, 26], ["cb", 78, 46]],
        ball: [87, 19],
        steps: [
          { d: 1.5, hl: { us: [1] }, zone: [78, 3, 22, 58], text: ["Ele passou dos zagueiros...", "He's past the defenders...", "Pasó a los defensores..."] },
          { d: 1.5, ball: [83, 39], arrows: [[87, 19, 83, 39, "ball"]], text: ["...mas está atrás da bola: legal", "...but behind the ball: onside", "...pero detrás del balón: válido"] },
        ],
      },
    },
    {
      q: ["Você estava impedido quando o colega chutou. O goleiro defende e a bola sobra para você. E aí?", "You were offside when your teammate shot. The keeper saves and the ball falls to you. Then?", "Estabas en fuera de juego cuando tu compañero disparó. El portero ataja y el balón te cae. ¿Y?"],
      opts: [
        ["É impedimento: você já estava impedido no chute", "Offside: you were already offside at the shot", "Fuera de juego: ya lo estabas en el disparo"],
        ["Está valendo: a bola veio do goleiro", "It's fine: the ball came off the keeper", "Vale: el balón vino del portero"],
        ["Está valendo, porque foi rebote", "It's fine, because it was a rebound", "Vale, porque fue un rebote"],
      ],
      why: ["Defesa do goleiro não te deixa em posição legal. Fique atrás da linha esperando o rebote.", "A save by the keeper doesn't make you onside. Stay level and wait for the rebound.", "Una atajada del portero no te habilita. Quédate en línea esperando el rebote."],
      scene: {
        us: [["cm", 66, 30], ["st", 88, 46]],
        them: [["gk", 96, 32], ["cb", 80, 24], ["cb", 80, 38]],
        ball: [68, 31],
        steps: [
          { d: 1.4, hl: { us: [1] }, zone: [80, 3, 20, 58], text: ["No chute ele está impedido", "At the shot he's offside", "En el disparo está en fuera de juego"] },
          { d: 1.0, ball: [95, 33], arrows: [[68, 31, 95, 33, "ball"]], hl: { them: [0] }, text: ["O goleiro defende...", "The keeper saves...", "El portero ataja..."] },
          { d: 1.2, ball: [88, 45], arrows: [[95, 33, 88, 45, "ball"]], hl: { us: [1] }, text: ["Pegou o rebote: impedimento!", "He takes the rebound: offside!", "Toma el rebote: ¡fuera de juego!"] },
        ],
      },
    },
    {
      q: ["O goleiro saiu do gol e ficou à frente da bola. Entre você e o gol só tem um zagueiro. Seu colega passa. É impedimento?", "The keeper has come out, ahead of the ball. Only one defender is between you and goal. Your teammate passes. Offside?", "El portero salió y quedó por delante del balón. Entre tú y el arco solo hay un defensor. Tu compañero pasa. ¿Es fuera de juego?"],
      opts: [
        ["Sim: precisa ter dois adversários entre você e a linha do gol", "Yes: you need two opponents between you and the goal line", "Sí: tiene que haber dos rivales entre tú y la línea de gol"],
        ["Não: o goleiro saiu, então não existe impedimento", "No: the keeper is out, so there's no offside", "No: el portero salió, así que no hay fuera de juego"],
        ["Não: ainda tem um zagueiro na sua frente", "No: there's still a defender ahead of you", "No: todavía hay un defensor delante de ti"],
      ],
      why: ["Contam os dois adversários mais perto do gol, seja goleiro ou não. Com o goleiro fora, o penúltimo passa a ser ele.", "It's the two opponents nearest the goal, keeper or not. With the keeper out, he becomes the second-to-last.", "Cuentan los dos rivales más cerca del arco, sea el portero o no. Con el portero fuera, el penúltimo pasa a ser él."],
      scene: {
        view: [40, 4, 64],
        us: [["cm", 74, 34], ["st", 88, 22]],
        them: [["gk", 66, 30], ["cb", 93, 34]],
        ball: [76, 34],
        steps: [
          { d: 1.5, hl: { them: [0] }, zone: [65.5, 3, 1, 58], text: ["Goleiro saiu e ficou à frente da bola", "Keeper came out, ahead of the ball", "El portero salió por delante del balón"] },
          { d: 1.6, hl: { us: [1], them: [1] }, text: ["Entre o atacante e o gol, só o zagueiro", "Only the defender between him and goal", "Entre él y el arco, solo el defensor"] },
          { d: 1.6, ball: [88, 23], arrows: [[76, 34, 88, 23, "ball"]], zone: [76, 3, 24, 58], hl: { us: [1] }, text: ["Precisa de 2 adversários: impedido!", "He needs 2 opponents: offside!", "Hacen falta 2 rivales: ¡fuera de juego!"] },
        ],
      },
    },
  ],

  esquemas: [
    {
      q: ["No 4-4-2, o que quer dizer cada número?", "In a 4-4-2, what does each number mean?", "En el 4-4-2, ¿qué significa cada número?"],
      opts: [
        ["4 defensores, 4 meio-campistas e 2 atacantes", "4 defenders, 4 midfielders and 2 strikers", "4 defensores, 4 mediocampistas y 2 delanteros"],
        ["4 atacantes, 4 meio-campistas e 2 zagueiros", "4 strikers, 4 midfielders and 2 centre-backs", "4 delanteros, 4 mediocampistas y 2 centrales"],
        ["4 jogadores de cada lado e 2 no meio", "4 players on each side and 2 in the middle", "4 jugadores en cada banda y 2 en el medio"],
      ],
      why: ["Conta-se de trás para a frente: defesa, meio e ataque. O goleiro não entra na conta.", "You count from the back: defence, midfield, attack. The goalkeeper isn't counted.", "Se cuenta de atrás hacia adelante: defensa, medio y ataque. El portero no cuenta."],
      scene: {
        us: [["gk", 4, 32], ["fb", 20, 8], ["cb", 17, 24], ["cb", 17, 40], ["fb", 20, 56], ["cm", 40, 9], ["cm", 38, 25], ["cm", 38, 39], ["cm", 40, 55], ["st", 58, 26], ["st", 58, 38]],
        text: ["4-4-2", "4-4-2", "4-4-2"],
        steps: [
          { d: 1.6, hl: { us: [1, 2, 3, 4] }, zone: [13, 3, 11, 58], text: ["4 defensores", "4 defenders", "4 defensores"] },
          { d: 1.6, hl: { us: [5, 6, 7, 8] }, zone: [34, 3, 10, 58], text: ["4 no meio-campo", "4 in midfield", "4 en el medio"] },
          { d: 1.6, hl: { us: [9, 10] }, zone: [54, 20, 8, 24], text: ["2 atacantes", "2 strikers", "2 delanteros"] },
        ],
      },
    },
    {
      q: ["Qual a principal diferença entre o 4-3-3 e o 4-4-2?", "What is the main difference between a 4-3-3 and a 4-4-2?", "¿Cuál es la principal diferencia entre el 4-3-3 y el 4-4-2?"],
      opts: [
        ["O 4-3-3 tem um centroavante e dois pontas abertos; o 4-4-2 tem dois atacantes por dentro", "The 4-3-3 has a centre-forward and two wide wingers; the 4-4-2 has two central strikers", "El 4-3-3 tiene un 9 y dos extremos abiertos; el 4-4-2 tiene dos delanteros por dentro"],
        ["O 4-3-3 tem três zagueiros e o 4-4-2 tem quatro", "The 4-3-3 has three centre-backs and the 4-4-2 has four", "El 4-3-3 tiene tres centrales y el 4-4-2 tiene cuatro"],
        ["No 4-3-3 os pontas defendem dentro da área o jogo todo", "In a 4-3-3 the wingers defend inside the box all game", "En el 4-3-3 los extremos defienden dentro del área todo el partido"],
      ],
      why: ["No 4-3-3 os pontas dão amplitude lá na frente, com 3 no meio: um volante e dois meias.", "In a 4-3-3 the wingers give width up front, with 3 in midfield: one holding player and two midfielders.", "En el 4-3-3 los extremos dan amplitud arriba, con 3 en el medio: un pivote y dos interiores."],
      scene: {
        us: [["gk", 4, 32], ["fb", 20, 8], ["cb", 17, 24], ["cb", 17, 40], ["fb", 20, 56], ["dm", 32, 32], ["cm", 44, 20], ["cm", 44, 44], ["w", 56, 16], ["st", 66, 32], ["w", 56, 48]],
        text: ["4-3-3", "4-3-3", "4-3-3"],
        steps: [
          { d: 1.6, us: { 8: [70, 5], 10: [70, 59] }, hl: { us: [8, 10] }, arrows: [[56, 16, 70, 5], [56, 48, 70, 59]], text: ["Pontas abertos, perto da lateral", "Wingers wide, near the touchline", "Extremos abiertos, cerca de la banda"] },
          { d: 1.6, hl: { us: [9] }, text: ["Um centroavante no meio", "One centre-forward in the middle", "Un 9 en el centro"] },
          { d: 1.6, hl: { us: [5, 6, 7] }, zone: [28, 14, 20, 36], text: ["3 no meio: 1 volante e 2 meias", "3 in midfield: 1 holding, 2 central", "3 en el medio: 1 pivote y 2 interiores"] },
        ],
      },
    },
    {
      q: ["No 3-5-2, quem joga aberto pelos lados do campo?", "In a 3-5-2, who plays wide on the flanks?", "En el 3-5-2, ¿quién juega abierto por las bandas?"],
      opts: [
        ["Os alas, que sobem para atacar e descem para formar uma linha de 5", "The wing-backs, who push up to attack and drop back to make a back five", "Los carrileros, que suben a atacar y bajan para formar una línea de 5"],
        ["Os dois zagueiros dos lados, que viram pontas", "The two outside centre-backs, who become wingers", "Los dos centrales de los lados, que pasan a ser extremos"],
        ["Ninguém: no 3-5-2 o time só joga por dentro", "Nobody: in a 3-5-2 the team only plays through the middle", "Nadie: en el 3-5-2 el equipo solo juega por dentro"],
      ],
      why: ["Os alas cuidam do lado inteiro: atacam como pontas e defendem como laterais.", "Wing-backs cover the whole flank: they attack like wingers and defend like full-backs.", "Los carrileros cubren toda la banda: atacan como extremos y defienden como laterales."],
      scene: {
        us: [["gk", 4, 32], ["cb", 17, 18], ["cb", 15, 32], ["cb", 17, 46], ["wb", 40, 6], ["dm", 32, 24], ["dm", 32, 40], ["am", 46, 32], ["wb", 40, 58], ["st", 60, 26], ["st", 60, 38]],
        text: ["3-5-2", "3-5-2", "3-5-2"],
        steps: [
          { d: 1.6, us: { 4: [68, 5], 8: [68, 59] }, hl: { us: [4, 8] }, arrows: [[40, 6, 68, 5], [40, 58, 68, 59]], text: ["Atacando: os alas sobem", "Attacking: wing-backs push up", "Atacando: los carrileros suben"] },
          { d: 1.8, us: { 4: [20, 5], 8: [20, 59] }, hl: { us: [4, 8] }, zone: [12, 2, 12, 60], text: ["Defendendo: linha de 5", "Defending: a back five", "Defendiendo: línea de 5"] },
        ],
      },
    },
    {
      q: ["No 4-2-3-1, quem são os \"2\"?", "In a 4-2-3-1, who are the \"2\"?", "En el 4-2-3-1, ¿quiénes son los \"2\"?"],
      opts: [
        ["Dois volantes, protegendo a frente da zaga", "Two holding midfielders, shielding the back line", "Dos mediocentros defensivos, protegiendo delante de la zaga"],
        ["Dois centroavantes, um ao lado do outro", "Two centre-forwards side by side", "Dos delanteros centro, uno al lado del otro"],
        ["Os dois laterais, que ficam na frente dos zagueiros", "The two full-backs, standing in front of the centre-backs", "Los dos laterales, que se ponen delante de los centrales"],
      ],
      why: ["Com dois volantes, um pode sair para pressionar enquanto o outro cobre.", "With two holding players, one can step out to press while the other covers.", "Con dos mediocentros, uno puede salir a presionar mientras el otro cubre."],
      scene: {
        us: [["gk", 4, 32], ["fb", 20, 8], ["cb", 17, 24], ["cb", 17, 40], ["fb", 20, 56], ["dm", 32, 24], ["dm", 32, 40], ["w", 50, 10], ["am", 50, 32], ["w", 50, 54], ["st", 66, 32]],
        text: ["4-2-3-1", "4-2-3-1", "4-2-3-1"],
        steps: [
          { d: 1.6, hl: { us: [5, 6] }, zone: [27, 18, 10, 28], text: ["2 volantes na frente da zaga", "2 holding mids in front of the defence", "2 pivotes delante de la zaga"] },
          { d: 1.6, us: { 5: [40, 26] }, arrows: [[32, 24, 40, 26]], text: ["Um sai para pressionar...", "One steps out to press...", "Uno sale a presionar..."] },
          { d: 1.4, us: { 6: [30, 32] }, hl: { us: [6] }, text: ["...e o outro cobre", "...and the other covers", "...y el otro cubre"] },
        ],
      },
    },
  ],

  espaco: [
    {
      q: ["Seu time tem a bola. Por que os pontas ficam bem abertos, perto da lateral?", "Your team has the ball. Why do the wingers stay really wide, near the touchline?", "Tu equipo tiene el balón. ¿Por qué los extremos se abren cerca de la banda?"],
      opts: [
        ["Para esticar a defesa adversária e abrir espaço por dentro (amplitude)", "To stretch the opponents' defence and open space inside (width)", "Para estirar la defensa rival y abrir espacio por dentro (amplitud)"],
        ["Para ficar perto do lateral e trocar passes curtos com ele", "To stay close to the full-back and swap short passes", "Para estar cerca del lateral e intercambiar pases cortos"],
        ["Para já estarem perto da linha de fundo e cruzar sempre", "So they're already near the byline and can always cross", "Para estar cerca de la línea de fondo y centrar siempre"],
      ],
      why: ["Se os defensores vão atrás dos pontas, sobra espaço no meio. Se não vão, o ponta fica livre.", "If defenders follow the wingers, space opens in the middle. If they don't, the winger is free.", "Si los defensores siguen a los extremos, queda espacio en el medio. Si no, el extremo queda libre."],
      scene: {
        us: [["w", 62, 24], ["w", 62, 40], ["am", 56, 32]],
        them: [["", 82, 18], ["", 84, 28], ["", 84, 36], ["", 82, 46]],
        ball: [56, 32],
        text: ["Pontas fechados: meio congestionado", "Wingers narrow: the middle is crowded", "Extremos cerrados: medio congestionado"],
        steps: [
          { d: 1.6, us: { 0: [80, 4], 1: [80, 60] }, them: { 0: [82, 9], 3: [82, 55], 1: [84, 22], 2: [84, 42] }, arrows: [[62, 24, 80, 4], [62, 40, 80, 60]], text: ["Pontas abrem o campo", "The wingers stretch the pitch", "Los extremos abren el campo"] },
          { d: 1.2, zone: [76, 25, 16, 14], text: ["Espaço no meio da defesa", "Space opens in the middle", "Se abre espacio en el centro"] },
          { d: 1.1, us: { 2: [84, 32] }, ball: [84, 32], arrows: [[56, 32, 84, 32, "ball"]], text: ["Passe e infiltração por dentro", "Pass and run through the middle", "Pase y entrada por dentro"] },
        ],
      },
    },
    {
      q: ["Para que serve o centroavante correr nas costas da defesa, mesmo sem receber a bola?", "Why does the striker run in behind the defence, even when he doesn't get the ball?", "¿Para qué sirve que el 9 corra a la espalda de la defensa, aunque no reciba?"],
      opts: [
        ["Empurra a linha de defesa para trás e abre espaço entre a defesa e o meio (profundidade)", "It pushes the back line deeper and opens space between defence and midfield (depth)", "Empuja la línea defensiva hacia atrás y abre espacio entre defensa y medio (profundidad)"],
        ["Só para cansar os zagueiros até o fim do jogo", "Only to tire out the centre-backs by the end of the game", "Solo para cansar a los centrales hasta el final"],
        ["Para ficar em impedimento e parar o jogo", "To be offside and stop the game", "Para quedar en fuera de juego y parar el juego"],
      ],
      why: ["Com medo da bola nas costas, os zagueiros recuam. Aí o meia recebe livre entre as linhas.", "Afraid of the ball in behind, the defenders drop. Then the playmaker gets the ball free between the lines.", "Con miedo al balón a la espalda, los centrales retroceden. Entonces el mediapunta recibe libre entre líneas."],
      scene: {
        us: [["st", 74, 32], ["am", 58, 30], ["cm", 50, 42]],
        them: [["", 80, 14], ["", 78, 26], ["", 78, 38], ["", 80, 50], ["", 64, 22], ["", 64, 42]],
        ball: [50, 42],
        steps: [
          { d: 1.6, us: { 0: [92, 26] }, them: { 0: [90, 14], 1: [88, 26], 2: [88, 38], 3: [90, 50] }, arrows: [[74, 32, 92, 26]], text: ["O 9 ataca as costas: a linha recua", "The 9 runs in behind: the line drops", "El 9 ataca la espalda: la línea recula"] },
          { d: 1.2, us: { 1: [76, 32] }, zone: [68, 18, 16, 28], text: ["Abre espaço entre as linhas", "Space opens between the lines", "Se abre espacio entre líneas"] },
          { d: 1.0, ball: [76, 32], arrows: [[50, 42, 76, 32, "ball"]], text: ["O meia recebe livre", "The playmaker receives free", "El mediapunta recibe libre"] },
        ],
      },
    },
    {
      q: ["Quando é a melhor hora de passar a bola nas costas da defesa?", "When is the best moment to play the ball in behind the defence?", "¿Cuándo es el mejor momento para pasar a la espalda de la defensa?"],
      opts: [
        ["Quando um colega já está correndo para o espaço, sem estar impedido", "When a teammate is already running into the space, onside", "Cuando un compañero ya está corriendo al espacio, sin estar en fuera de juego"],
        ["Sempre que eu receber, o mais rápido possível, mesmo sem ninguém correr", "Every time I get it, as fast as possible, even if nobody is running", "Siempre que reciba, lo más rápido posible, aunque nadie corra"],
        ["Quando o colega está parado de frente para mim, pedindo no pé", "When my teammate is standing still facing me, asking for it to feet", "Cuando el compañero está quieto de frente, pidiéndola al pie"],
      ],
      why: ["O passe vai no espaço, na corrida do colega. Sem corrida, a bola fica com o zagueiro ou o goleiro.", "The pass goes into space, onto the teammate's run. Without a run, the defender or keeper collects it.", "El pase va al espacio, a la carrera del compañero. Sin carrera, se la queda el central o el portero."],
      scene: {
        us: [["cm", 56, 30], ["st", 73, 42]],
        them: [["", 78, 14], ["", 76, 26], ["", 76, 38], ["", 78, 50]],
        ball: [56, 30],
        steps: [
          { d: 1.3, us: { 1: [88, 48] }, arrows: [[73, 42, 88, 48]], zone: [80, 38, 16, 20], text: ["O colega arranca para o espaço", "Your teammate bursts into space", "El compañero arranca al espacio"] },
          { d: 1.0, ball: [89, 48], arrows: [[56, 30, 89, 48, "ball"]], text: ["Passe na corrida dele", "Pass onto his run", "Pase a su carrera"] },
          { d: 0.8, us: { 1: [95, 38] }, ball: [99, 34], text: ["Cara a cara com o goleiro!", "One-on-one with the keeper!", "¡Mano a mano con el portero!"] },
        ],
      },
    },
    {
      q: ["O ponta está com a bola, marcado, e o lateral passa correndo por fora dele. O que isso cria?", "The winger has the ball, marked, and the full-back runs round the outside. What does that create?", "El extremo tiene el balón, marcado, y el lateral pasa por fuera. ¿Qué crea eso?"],
      opts: [
        ["Um 2 contra 1: o marcador tem que escolher quem marcar (ultrapassagem)", "A 2-v-1: the defender has to choose who to mark (overlap)", "Un 2 contra 1: el marcador tiene que elegir a quién marcar (desdoble)"],
        ["Uma falta, porque o lateral bloqueia o marcador", "A foul, because the full-back blocks the defender", "Una falta, porque el lateral bloquea al marcador"],
        ["Nada: o lateral só deve passar por fora quando o ponta não tem marcação", "Nothing: the full-back should only overlap when the winger is unmarked", "Nada: el lateral solo debe doblar cuando el extremo no tiene marca"],
      ],
      why: ["Se o marcador acompanha o lateral, o ponta fica livre. Se fica no ponta, o lateral recebe sozinho.", "If the defender follows the full-back, the winger is free. If he stays, the full-back gets it alone.", "Si el marcador sigue al lateral, el extremo queda libre. Si se queda, el lateral recibe solo."],
      scene: {
        us: [["w", 72, 10], ["fb", 56, 10]],
        them: [["", 80, 10], ["", 76, 24]],
        ball: [72, 10],
        steps: [
          { d: 1.4, us: { 1: [84, 4] }, arrows: [[56, 10, 84, 4]], text: ["O lateral passa por fora", "The full-back overlaps", "El lateral dobla por fuera"] },
          { d: 1.0, them: { 0: [82, 6] }, hl: { them: [0] }, text: ["O marcador vai no lateral...", "The defender goes with the full-back...", "El marcador va con el lateral..."] },
          { d: 1.2, us: { 0: [84, 20] }, ball: [84, 20], arrows: [[72, 10, 84, 20]], text: ["...e o ponta entra livre", "...and the winger cuts in free", "...y el extremo entra libre"] },
        ],
      },
    },
  ],

  transicao: [
    {
      q: ["Seu time acabou de perder a bola no ataque. O que fazem os jogadores mais perto dela?", "Your team just lost the ball in attack. What do the players closest to it do?", "Tu equipo acaba de perder el balón en ataque. ¿Qué hacen los más cercanos?"],
      opts: [
        ["Pressionam na hora quem pegou, enquanto os outros fecham espaços e recompõem", "Press the player on the ball straight away, while the others close spaces and recover", "Presionan enseguida al que la tiene, mientras los demás cierran espacios y recomponen"],
        ["Todos correm direto para a própria área, sem ninguém atrasar a jogada", "Everyone sprints straight back to their own box, nobody slows the play", "Todos corren directo a su área, sin que nadie retrase la jugada"],
        ["Esperam o adversário passar do meio-campo para começar a marcar", "Wait for the opponent to cross halfway before marking", "Esperan que el rival pase el medio campo para empezar a marcar"],
      ],
      why: ["É a transição defensiva: quem está perto ataca a bola e os outros arrumam a defesa.", "That's the defensive transition: the closest players attack the ball and the rest reorganise.", "Es la transición defensiva: los más cercanos atacan el balón y los demás ordenan la defensa."],
      scene: {
        us: [["st", 78, 30], ["am", 70, 42], ["cm", 62, 24], ["dm", 54, 32], ["cb", 42, 24], ["cb", 42, 40]],
        them: [["", 75, 36], ["", 60, 12], ["", 52, 52]],
        ball: [70, 42],
        steps: [
          { d: 0.8, ball: [75, 36], text: ["Perdeu a bola!", "Ball lost!", "¡Perdió el balón!"] },
          { d: 1.4, us: { 0: [76, 33], 1: [74, 39], 2: [70, 30] }, hl: { us: [0, 1] }, arrows: [[78, 30, 76, 33], [70, 42, 74, 39]], text: ["Os mais perto pressionam", "The closest players press", "Los más cercanos presionan"] },
          { d: 1.4, us: { 3: [46, 32], 4: [34, 24], 5: [34, 40] }, text: ["Os outros fecham e recompõem", "The others close up and recover", "Los demás cierran y recomponen"] },
        ],
      },
    },
    {
      q: ["Seu time acabou de roubar a bola no meio-campo. Qual a primeira ideia?", "Your team just won the ball in midfield. What is the first idea?", "Tu equipo acaba de robar el balón en el medio. ¿Cuál es la primera idea?"],
      opts: [
        ["Tirar a bola da zona de pressão e, se der, jogar rápido para a frente", "Get the ball out of the pressure zone and, if possible, play forward fast", "Sacar el balón de la zona de presión y, si se puede, jugar rápido hacia adelante"],
        ["Driblar ali mesmo quem perdeu a bola, para mostrar que é melhor", "Dribble past the player who lost it, right there, to show you're better", "Regatear ahí mismo al que la perdió, para mostrar que eres mejor"],
        ["Voltar sempre a bola para o goleiro e recomeçar com calma", "Always pass back to the goalkeeper and start again calmly", "Devolver siempre al portero y empezar de nuevo con calma"],
      ],
      why: ["É a transição ofensiva: logo depois de perder, o adversário está desarrumado. Saia da pressão e ataque esse espaço.", "That's the attacking transition: right after losing it, the opponents are out of shape. Escape the press and attack the space.", "Es la transición ofensiva: justo después de perderla, el rival está desordenado. Sal de la presión y ataca ese espacio."],
      scene: {
        us: [["dm", 36, 34], ["cm", 50, 46], ["st", 64, 28], ["w", 62, 56]],
        them: [["", 40, 30], ["", 44, 22], ["", 46, 36]],
        ball: [40, 30],
        steps: [
          { d: 0.9, us: { 0: [39, 31] }, ball: [39, 31], text: ["Roubou!", "Won it!", "¡Robó!"] },
          { d: 1.0, ball: [50, 46], arrows: [[39, 31, 50, 46, "ball"]], them: { 0: [42, 34], 2: [46, 40] }, text: ["Tira da zona de pressão", "Out of the pressure zone", "Fuera de la zona de presión"] },
          { d: 1.3, us: { 2: [82, 36] }, ball: [80, 36], arrows: [[64, 28, 82, 36], [50, 46, 80, 36, "ball"]], text: ["E verticaliza rápido!", "And go forward fast!", "¡Y vertical, rápido!"] },
        ],
      },
    },
    {
      q: ["Por que os primeiros segundos depois de perder a bola são tão importantes?", "Why are the first seconds after losing the ball so important?", "¿Por qué los primeros segundos tras perder el balón son tan importantes?"],
      opts: [
        ["Porque quem roubou ainda está saindo da pressão e o time dele ainda não se organizou para atacar", "Because the player who won it is still escaping the pressure and his team isn't set to attack yet", "Porque quien robó todavía está saliendo de la presión y su equipo aún no se organizó para atacar"],
        ["Porque nesses segundos o juiz não costuma marcar falta", "Because the referee doesn't usually give fouls in those seconds", "Porque en esos segundos el árbitro no suele pitar falta"],
        ["Porque o time que perdeu a bola fica com um jogador a mais", "Because the team that lost the ball gets an extra player", "Porque el equipo que perdió el balón tiene un jugador más"],
      ],
      why: ["Pressionar logo pode recuperar a bola perto do gol adversário. Se demorar, eles se arrumam e contra-atacam.", "Pressing straight away can win it back near their goal. Wait, and they organise and counter.", "Presionar enseguida puede recuperarla cerca del arco rival. Si tardas, se ordenan y contraatacan."],
      scene: {
        us: [["am", 76, 38], ["st", 82, 28], ["cm", 66, 30]],
        them: [["", 80, 36], ["", 72, 14], ["", 88, 48]],
        ball: [76, 38],
        steps: [
          { d: 0.7, ball: [80, 36], text: ["Perdeu...", "Lost it...", "La perdió..."] },
          { d: 1.0, us: { 0: [79, 38], 1: [81, 33], 2: [76, 32] }, them: { 0: [82, 38] }, ball: [82, 38], arrows: [[76, 38, 79, 38], [82, 28, 81, 33]], text: ["...pressiona na hora!", "...press right away!", "...¡presiona enseguida!"] },
          { d: 0.9, us: { 1: [83, 36] }, ball: [83, 36], hl: { us: [1] }, text: ["Recuperou perto do gol!", "Won back near goal!", "¡Recuperó cerca del arco!"] },
        ],
      },
    },
    {
      q: ["Seu time ataca com muita gente. Por que alguns jogadores ficam atrás?", "Your team is attacking with lots of players. Why do some stay back?", "Tu equipo ataca con muchos jugadores. ¿Por qué algunos se quedan atrás?"],
      opts: [
        ["Para proteger o time se a bola for perdida: é o balanço defensivo", "To protect the team if the ball is lost: that's rest defence", "Para proteger al equipo si se pierde el balón: es el equilibrio defensivo"],
        ["Porque zagueiro e volante não podem passar do meio-campo", "Because centre-backs and holding mids aren't allowed past halfway", "Porque centrales y pivote no pueden pasar del medio campo"],
        ["Para descansar e guardar energia para o segundo tempo", "To rest and save energy for the second half", "Para descansar y guardar energía para el segundo tiempo"],
      ],
      why: ["Atacar com todos deixa o gol aberto no contra-ataque. Quem fica atrás corta a bola longa.", "Attacking with everyone leaves the goal open to a counter. Those who stay back cut out the long ball.", "Atacar con todos deja el arco abierto al contraataque. Los que se quedan cortan el pelotazo."],
      scene: {
        us: [["st", 86, 30], ["w", 84, 10], ["w", 84, 54], ["am", 76, 38], ["cm", 72, 22], ["dm", 58, 32], ["cb", 48, 24], ["cb", 48, 40]],
        them: [["", 90, 38], ["", 56, 18], ["", 56, 48]],
        ball: [76, 38],
        steps: [
          { d: 1.4, us: { 3: [82, 37] }, ball: [83, 37], arrows: [[76, 38, 82, 37, "us"]], hl: { us: [5, 6, 7] }, zone: [44, 18, 18, 28], text: ["Atacando, 3 ficam de balanço", "Attacking, 3 stay back", "Atacando, 3 se quedan atrás"] },
          { d: 1.0, them: { 0: [85, 37] }, ball: [86, 38], arrows: [[90, 38, 85, 37, "them"]], hl: { them: [0] }, text: ["Roubaram a bola!", "Ball stolen!", "¡Les robaron el balón!"] },
          { d: 1.3, them: { 2: [62, 48] }, us: { 7: [62, 46] }, ball: [62, 47], arrows: [[86, 38, 62, 47, "ball"]], hl: { us: [7] }, text: ["O balanço corta o contra-ataque", "Rest defence stops the counter", "El equilibrio corta el contraataque"] },
        ],
      },
    },
  ],

  bloco: [
    {
      q: ["Por que o time deve defender compacto, com as linhas perto umas das outras?", "Why should the team defend compactly, with the lines close together?", "¿Por qué el equipo debe defender compacto, con las líneas juntas?"],
      opts: [
        ["Para sobrar pouco espaço entre os jogadores e entre as linhas", "So there's little space between players and between the lines", "Para que quede poco espacio entre jugadores y entre líneas"],
        ["Para que cada um marque só o seu adversário pelo campo todo", "So everyone marks only their own opponent all over the pitch", "Para que cada uno marque solo a su rival por todo el campo"],
        ["Para ficar sempre colado na própria área", "To always stay right on the edge of your own box", "Para estar siempre pegado a tu área"],
      ],
      why: ["Linhas próximas tiram o espaço entre elas: o adversário não consegue receber de frente para o gol.", "Close lines take away the space between them: the opponent can't receive facing goal.", "Líneas juntas quitan el espacio entre ellas: el rival no puede recibir de frente al arco."],
      scene: {
        us: [["fb", 16, 12], ["cb", 14, 26], ["cb", 14, 38], ["fb", 16, 52], ["cm", 42, 12], ["cm", 40, 26], ["cm", 40, 38], ["cm", 42, 52]],
        them: [["", 58, 32], ["", 28, 30]],
        ball: [58, 32],
        text: ["Linhas longe: sobra espaço no meio", "Lines apart: space in between", "Líneas lejos: queda espacio en medio"],
        steps: [
          { d: 1.3, zone: [18, 18, 20, 28], text: ["Linhas longe: sobra espaço no meio", "Lines apart: space in between", "Líneas lejos: queda espacio en medio"] },
          { d: 1.6, us: { 0: [22, 14], 1: [20, 26], 2: [20, 38], 3: [22, 50], 4: [33, 14], 5: [32, 26], 6: [32, 38], 7: [33, 50] }, them: { 1: [36, 22] }, text: ["Compacto: não sobra espaço", "Compact: no space left", "Compacto: no queda espacio"] },
          { d: 0.8, ball: [40, 31], us: { 5: [38, 30] }, arrows: [[58, 32, 40, 31, "ball"]], text: ["Passe cortado!", "Pass cut out!", "¡Pase cortado!"] },
        ],
      },
    },
    {
      q: ["A bola foi para um lado do campo. O que o bloco defensivo faz?", "The ball has gone to one side of the pitch. What does the defensive block do?", "El balón se fue a una banda. ¿Qué hace el bloque defensivo?"],
      opts: [
        ["Desliza junto para o lado da bola, sem abrir buracos (flutuação)", "Slides across together towards the ball, without leaving gaps (shifting)", "Se desliza junto hacia el lado del balón, sin abrir huecos (basculación)"],
        ["Só o jogador mais perto vai; os outros ficam no lugar", "Only the closest player goes; the others stay where they are", "Solo va el más cercano; los demás se quedan en su lugar"],
        ["Todos correm para cima da bola ao mesmo tempo", "Everyone rushes at the ball at the same time", "Todos van al balón al mismo tiempo"],
      ],
      why: ["O time se move como um bloco: fecha o lado da bola e deixa longe só o que é menos perigoso.", "The team moves as one block: it closes the ball side and only leaves the least dangerous area open.", "El equipo se mueve como un bloque: cierra el lado del balón y solo deja lo menos peligroso."],
      scene: {
        us: [["fb", 18, 12], ["cb", 16, 26], ["cb", 16, 38], ["fb", 18, 52], ["cm", 34, 12], ["cm", 32, 26], ["cm", 32, 38], ["cm", 34, 52]],
        them: [["", 52, 32], ["", 46, 6], ["", 46, 58]],
        ball: [52, 32],
        steps: [
          { d: 1.0, ball: [46, 6], arrows: [[52, 32, 46, 6, "ball"]], text: ["A bola foi para o lado", "The ball goes wide", "El balón va a la banda"] },
          { d: 1.6, us: { 0: [22, 6], 1: [18, 18], 2: [18, 30], 3: [20, 42], 4: [38, 6], 5: [34, 18], 6: [34, 30], 7: [36, 42] }, arrows: [[34, 52, 36, 42], [18, 52, 20, 42]], text: ["Todos deslizam juntos", "Everyone slides across together", "Todos se deslizan juntos"] },
          { d: 1.2, zone: [14, 0, 30, 30], text: ["Lado da bola fechado", "Ball side closed off", "Lado del balón cerrado"] },
        ],
      },
    },
    {
      q: ["Um zagueiro saiu para dar o bote no atacante. O que o outro zagueiro faz?", "One centre-back steps out to tackle the striker. What does the other centre-back do?", "Un central sale a presionar al delantero. ¿Qué hace el otro central?"],
      opts: [
        ["Fica na sobra: um pouco atrás e por dentro, pronto se o colega for driblado", "Provides cover: a bit behind and inside, ready if his partner is beaten", "Hace la cobertura: un poco detrás y por dentro, listo si regatean al compañero"],
        ["Vai junto dar o bote para fazer 2 contra 1", "Goes in to tackle too, to make it 2-v-1", "Va también a presionar para hacer 2 contra 1"],
        ["Fica na mesma linha do colega, lado a lado", "Stays level with his partner, side by side", "Se queda en la misma línea que el compañero, uno al lado del otro"],
      ],
      why: ["É a cobertura. Se os dois saem ou ficam lado a lado, um drible deixa o atacante sozinho com o goleiro.", "That's cover. If both go, or stay level, one dribble leaves the striker alone with the keeper.", "Es la cobertura. Si salen los dos o se quedan en línea, un regate deja al delantero solo con el portero."],
      scene: {
        us: [["cb", 22, 28], ["cb", 22, 40]],
        them: [["", 38, 28]],
        ball: [38, 28],
        steps: [
          { d: 1.2, us: { 0: [32, 28], 1: [20, 34] }, arrows: [[22, 28, 32, 28], [22, 40, 20, 34]], text: ["Um sai no bote, o outro cobre", "One presses, the other covers", "Uno presiona, el otro cubre"] },
          { d: 1.2, them: { 0: [26, 34] }, ball: [25, 34], us: { 0: [31, 26] }, text: ["Driblou o primeiro...", "He beats the first one...", "Regateó al primero..."] },
          { d: 0.8, us: { 1: [24, 34] }, ball: [24, 34], hl: { us: [1] }, text: ["...e a sobra salva!", "...and the cover saves it!", "...¡y la cobertura salva!"] },
        ],
      },
    },
    {
      q: ["O ponta adversário está aberto e o seu lateral sai lá na frente para pressionar o meia. Qual o risco?", "The opposing winger is wide and your full-back steps up to press their midfielder. What's the risk?", "El extremo rival está abierto y tu lateral sale a presionar al mediocampista. ¿Cuál es el riesgo?"],
      opts: [
        ["Deixar espaço nas costas para um passe ao ponta", "Leaving space behind him for a pass to the winger", "Dejar espacio a su espalda para un pase al extremo"],
        ["Nenhum: o ponta aberto, longe do gol, não é perigoso", "None: a winger out wide, far from goal, isn't dangerous", "Ninguno: un extremo abierto, lejos del arco, no es peligroso"],
        ["O meia adversário ficar impedido", "The opposing midfielder being offside", "Que el mediocampista rival quede en fuera de juego"],
      ],
      why: ["Lateral só sai se alguém cobrir o espaço dele. Senão, a bola vai nas costas e o ponta entra livre.", "A full-back only steps out if someone covers his space. Otherwise the ball goes in behind and the winger runs through.", "El lateral solo sale si alguien cubre su espacio. Si no, el balón va a su espalda y el extremo entra libre."],
      scene: {
        us: [["fb", 24, 8], ["cb", 18, 24], ["cb", 18, 40], ["dm", 32, 32]],
        them: [["", 40, 4], ["", 44, 20]],
        ball: [44, 20],
        steps: [
          { d: 1.3, us: { 0: [38, 16] }, arrows: [[24, 8, 38, 16]], text: ["O lateral sai no meia...", "The full-back steps up...", "El lateral sale al medio..."] },
          { d: 1.0, zone: [8, 0, 26, 14], text: ["...e deixa as costas livres", "...leaving space behind", "...y deja la espalda libre"] },
          { d: 1.2, them: { 0: [20, 5] }, ball: [20, 5], arrows: [[44, 20, 20, 5, "ball"], [40, 4, 20, 5, "them"]], text: ["Bola nas costas!", "Ball in behind!", "¡Balón a la espalda!"] },
        ],
      },
    },
    {
      q: ["A bola está do lado esquerdo da sua defesa. O que faz o lateral do lado direito, longe da bola?", "The ball is on the left side of your defence. What does the right-back, far from the ball, do?", "El balón está en el lado izquierdo de tu defensa. ¿Qué hace el lateral derecho, lejos del balón?"],
      opts: [
        ["Fecha para dentro, alinhado com os zagueiros, protegendo a área", "Tucks inside, in line with the centre-backs, protecting the box", "Cierra hacia dentro, alineado con los centrales, protegiendo el área"],
        ["Fica colado na lateral, marcando o ponta que está longe", "Stays on the touchline marking the far winger", "Se queda pegado a la banda marcando al extremo lejano"],
        ["Sobe para o ataque esperando o contra-ataque", "Pushes up to wait for the counter-attack", "Sube al ataque esperando el contraataque"],
      ],
      why: ["Longe da bola, o perigo é a área. Ele fecha por dentro e deixa livre só o lado mais distante.", "Far from the ball, the danger is the box. He tucks in and only leaves the far side open.", "Lejos del balón, el peligro es el área. Cierra por dentro y solo deja libre el lado más lejano."],
      scene: {
        us: [["fb", 22, 8], ["cb", 16, 22], ["cb", 16, 34], ["fb", 22, 56]],
        them: [["", 32, 6], ["", 22, 30], ["", 34, 58]],
        ball: [32, 6],
        steps: [
          { d: 1.5, us: { 3: [18, 44] }, arrows: [[22, 56, 18, 44]], hl: { us: [3] }, text: ["O lateral oposto fecha por dentro", "The far full-back tucks in", "El lateral lejano cierra por dentro"] },
          { d: 1.1, ball: [17, 40], arrows: [[32, 6, 17, 40, "ball"]], us: { 3: [17, 41] }, text: ["E corta o cruzamento!", "And cuts out the cross!", "¡Y corta el centro!"] },
        ],
      },
    },
    {
      q: ["Você é o último defensor e vem um 2 contra 1. O que faz?", "You're the last defender and it's 2-v-1. What do you do?", "Eres el último defensor y viene un 2 contra 1. ¿Qué haces?"],
      opts: [
        ["Recuo devagar, fico entre os dois e atraso a jogada até a ajuda chegar", "Back off slowly, stay between the two and delay until help arrives", "Retrocedo despacio, me quedo entre los dos y retraso la jugada hasta que llegue la ayuda"],
        ["Dou o bote na hora em quem está com a bola", "Tackle the player on the ball straight away", "Entro enseguida al que tiene el balón"],
        ["Vou marcar o jogador sem bola, colado nele", "Mark the player without the ball, tight", "Marco al que no tiene el balón, pegado a él"],
      ],
      why: ["É o retardamento: ganhar tempo sem se jogar. Um bote errado é gol; esperar traz o colega de volta.", "That's delaying: buy time without diving in. A missed tackle is a goal; waiting brings a teammate back.", "Es el repliegue con temporización: ganar tiempo sin tirarse. Una entrada fallada es gol; esperar trae ayuda."],
      scene: {
        us: [["cb", 32, 32], ["dm", 58, 30]],
        them: [["", 52, 24], ["", 52, 42]],
        ball: [52, 24],
        steps: [
          { d: 1.6, us: { 0: [26, 32], 1: [44, 30] }, them: { 0: [38, 25], 1: [38, 41] }, ball: [38, 25], text: ["Recua e fica entre os dois", "Back off, stay between them", "Recula y quédate entre los dos"] },
          { d: 1.5, us: { 0: [22, 32], 1: [32, 28] }, them: { 0: [31, 26], 1: [31, 40] }, ball: [31, 26], arrows: [[44, 30, 32, 28]], hl: { us: [1] }, text: ["Ganhou tempo: a ajuda chegou", "Time bought: help arrives", "Ganó tiempo: llegó la ayuda"] },
        ],
      },
    },
  ],

  funcoes: [
    {
      q: ["Qual é a principal função do primeiro volante?", "What is the main job of the defensive (holding) midfielder?", "¿Cuál es la principal función del pivote defensivo?"],
      opts: [
        ["Proteger a frente da zaga, cobrir quem sai e ajudar a sair jogando", "Shield the back line, cover for teammates who push on and help build play", "Proteger delante de la zaga, cubrir a quien sale y ayudar a salir jugando"],
        ["Ficar perto da área adversária para finalizar", "Stay near the opponents' box to finish chances", "Quedarse cerca del área rival para definir"],
        ["Jogar aberto na lateral, cruzando para a área", "Play wide on the touchline, crossing into the box", "Jugar abierto por la banda, centrando al área"],
      ],
      why: ["Ele é o equilíbrio do time: quando um lateral sobe, é o volante quem cobre o espaço.", "He keeps the team balanced: when a full-back goes forward, he covers the space.", "Es el equilibrio del equipo: cuando un lateral sube, el pivote cubre ese espacio."],
      scene: {
        us: [["cb", 18, 24], ["cb", 18, 40], ["fb", 50, 6], ["fb", 22, 58], ["dm", 30, 32]],
        them: [["", 46, 18], ["", 24, 32]],
        ball: [46, 18],
        steps: [
          { d: 1.3, hl: { us: [4] }, zone: [24, 22, 12, 20], text: ["Protege a frente da zaga", "Shields the back line", "Protege delante de la zaga"] },
          { d: 1.4, us: { 4: [30, 12] }, arrows: [[30, 32, 30, 12]], zone: [22, 2, 18, 16], hl: { us: [4] }, text: ["Cobre o lateral que subiu", "Covers for the full-back", "Cubre al lateral que subió"] },
        ],
      },
    },
    {
      q: ["E o segundo volante, o que ele faz a mais que o primeiro?", "And the box-to-box midfielder, what does he do on top of that?", "¿Y el segundo volante (mediocentro llegador), qué hace además?"],
      opts: [
        ["Também defende, mas chega ao ataque de surpresa, aparecendo na área", "Also defends, but arrives in attack by surprise, getting into the box", "También defiende, pero llega al ataque por sorpresa, apareciendo en el área"],
        ["Fica sempre entre os zagueiros, sem nunca passar do meio-campo", "Always stays between the centre-backs, never crossing halfway", "Se queda siempre entre los centrales, sin pasar nunca del medio"],
        ["Só cobra as faltas e os escanteios do time", "Only takes the team's free kicks and corners", "Solo patea los tiros libres y córners del equipo"],
      ],
      why: ["Volante de chegada: marca, mas corre de trás para dentro da área, onde ninguém está marcando.", "A box-to-box midfielder defends, but runs from deep into the box, where nobody is marking.", "El volante llegador marca, pero corre desde atrás hasta el área, donde nadie lo marca."],
      scene: {
        us: [["dm", 34, 26], ["dm", 36, 40], ["st", 82, 30], ["w", 82, 8]],
        them: [["", 90, 26], ["", 90, 36], ["", 74, 34]],
        ball: [82, 8],
        steps: [
          { d: 1.6, us: { 1: [86, 42] }, arrows: [[36, 40, 86, 42]], hl: { us: [1] }, text: ["O 2º volante chega de trás", "The second midfielder arrives late", "El segundo volante llega de atrás"] },
          { d: 0.9, ball: [86, 42], arrows: [[82, 8, 86, 42, "ball"]], text: ["Ninguém marcou: livre na área!", "Nobody tracked him: free in the box!", "¡Nadie lo marcó: libre en el área!"] },
        ],
      },
    },
    {
      q: ["Qual a diferença entre o meia armador e o meia atacante (o camisa 10)?", "What's the difference between a deep playmaker and an attacking midfielder (the number 10)?", "¿Cuál es la diferencia entre el mediocentro organizador y el mediapunta (el 10)?"],
      opts: [
        ["O armador organiza o jogo mais atrás; o meia atacante joga entre as linhas, perto da área, dando o último passe", "The playmaker runs the game from deeper; the number 10 plays between the lines near the box, giving the final pass", "El organizador maneja el juego desde atrás; el mediapunta juega entre líneas cerca del área, dando el último pase"],
        ["Não tem diferença: muda só o número da camisa", "There's no difference: only the shirt number changes", "No hay diferencia: solo cambia el número de la camiseta"],
        ["O armador joga na zaga e o meia atacante na lateral", "The playmaker plays at centre-back and the 10 plays at full-back", "El organizador juega de central y el mediapunta de lateral"],
      ],
      why: ["Os dois pensam o jogo, mas em lugares diferentes: um começa a jogada, o outro termina.", "Both are thinkers, but in different areas: one starts the move, the other finishes it.", "Los dos piensan el juego, pero en zonas distintas: uno empieza la jugada, el otro la termina."],
      scene: {
        us: [["dm", 34, 32], ["cm", 48, 40], ["am", 70, 30], ["st", 84, 34]],
        them: [["", 82, 22], ["", 82, 40], ["", 64, 18], ["", 64, 44]],
        ball: [48, 40],
        steps: [
          { d: 1.5, hl: { us: [1] }, zone: [42, 32, 14, 16], text: ["Armador: organiza de trás", "Playmaker: runs it from deep", "Organizador: juega desde atrás"] },
          { d: 1.4, ball: [70, 30], arrows: [[48, 40, 70, 30, "ball"]], hl: { us: [2] }, zone: [66, 20, 13, 22], text: ["Meia atacante: entre as linhas", "Number 10: between the lines", "Mediapunta: entre líneas"] },
          { d: 1.0, us: { 3: [92, 30] }, ball: [92, 30], arrows: [[70, 30, 92, 30, "ball"]], text: ["E dá o último passe", "And plays the final pass", "Y da el último pase"] },
        ],
      },
    },
    {
      q: ["O que é um falso 9?", "What is a false 9?", "¿Qué es un falso 9?"],
      opts: [
        ["Um centroavante que sai da área e recua para o meio, puxando o zagueiro e abrindo espaço", "A centre-forward who drops out of the box into midfield, pulling a defender and opening space", "Un delantero centro que sale del área y baja al medio, arrastrando al central y abriendo espacio"],
        ["Um centroavante que fica sempre parado entre os zagueiros esperando o cruzamento", "A centre-forward who always waits between the centre-backs for crosses", "Un delantero centro que siempre espera quieto entre los centrales el centro"],
        ["Um ponta que joga do lado do pé contrário para cortar para dentro", "A winger who plays on the opposite side to his foot to cut inside", "Un extremo que juega a pierna cambiada para meterse hacia dentro"],
      ],
      why: ["Se o zagueiro segue o falso 9, abre um buraco na defesa. Se não segue, ele recebe livre no meio.", "If the defender follows the false 9, a hole opens at the back. If not, he gets the ball free in midfield.", "Si el central sigue al falso 9, se abre un hueco atrás. Si no, recibe libre en el medio."],
      scene: {
        us: [["st", 82, 32], ["w", 70, 12], ["w", 70, 52], ["cm", 56, 34]],
        them: [["", 86, 26], ["", 86, 38], ["", 82, 10], ["", 82, 54]],
        ball: [56, 34],
        steps: [
          { d: 1.4, us: { 0: [68, 32] }, them: { 0: [74, 30] }, arrows: [[82, 32, 68, 32]], hl: { us: [0] }, text: ["O 9 recua e o zagueiro vai junto", "The 9 drops and the defender follows", "El 9 baja y el central lo sigue"] },
          { d: 1.3, us: { 1: [90, 26] }, arrows: [[70, 12, 90, 26]], zone: [80, 18, 14, 14], text: ["Abre espaço para quem chega", "Space opens for a runner", "Se abre espacio para quien llega"] },
          { d: 0.9, ball: [90, 26], arrows: [[56, 34, 90, 26, "ball"]], text: ["Passe no buraco!", "Pass into the gap!", "¡Pase al hueco!"] },
        ],
      },
    },
    {
      q: ["Seu time defende no 4-4-2 e a bola está do lado direito. O que faz o meia do lado esquerdo?", "Your team defends in a 4-4-2 and the ball is on the right. What does the left midfielder do?", "Tu equipo defiende en 4-4-2 y el balón está a la derecha. ¿Qué hace el volante izquierdo?"],
      opts: [
        ["Fecha para o meio, para o time ficar compacto e equilibrado", "Tucks into the middle so the team stays compact and balanced", "Cierra hacia el medio para que el equipo quede compacto y equilibrado"],
        ["Fica bem aberto na lateral, esperando uma inversão", "Stays wide on the touchline, waiting for a switch", "Se queda abierto en la banda esperando un cambio de juego"],
        ["Corre para o ataque para receber o contra-ataque", "Runs forward to receive the counter-attack", "Corre al ataque para recibir el contraataque"],
      ],
      why: ["Longe da bola, o meia fecha por dentro: o perigo está no meio, não na lateral distante.", "Away from the ball, the midfielder tucks in: the danger is in the middle, not on the far touchline.", "Lejos del balón, el volante cierra por dentro: el peligro está en el medio, no en la banda lejana."],
      scene: {
        us: [["fb", 20, 8], ["cb", 17, 22], ["cb", 17, 36], ["fb", 20, 50], ["cm", 38, 8], ["cm", 36, 22], ["cm", 36, 36], ["cm", 40, 56], ["gk", 4, 30], ["st", 56, 24], ["st", 56, 40]],
        them: [["", 48, 6], ["", 46, 30]],
        ball: [48, 6],
        text: ["4-4-2 defendendo", "4-4-2 defending", "4-4-2 defendiendo"],
        steps: [
          { d: 1.5, us: { 7: [36, 46] }, arrows: [[40, 56, 36, 46]], hl: { us: [7] }, text: ["O meia do lado oposto fecha", "The far-side midfielder tucks in", "El volante del lado opuesto cierra"] },
          { d: 1.0, ball: [37, 34], us: { 6: [37, 33] }, arrows: [[48, 6, 37, 34, "ball"]], text: ["Meio fechado: passe cortado", "Middle closed: pass cut out", "Medio cerrado: pase cortado"] },
        ],
      },
    },
  ],

  tecnica: [
    {
      q: ["Para um passe curto e preciso, qual parte do pé você usa?", "For a short, accurate pass, which part of the foot do you use?", "Para un pase corto y preciso, ¿qué parte del pie usas?"],
      opts: [
        ["A parte de dentro (chapa), com o pé de apoio ao lado da bola", "The inside of the foot, with the standing foot next to the ball", "El interior del pie, con el pie de apoyo al lado del balón"],
        ["O bico do pé, porque a bola sai mais rápido", "The toe, because the ball goes faster", "La punta del pie, porque el balón sale más rápido"],
        ["O peito do pé, com o corpo inclinado para trás", "The laces, leaning back", "El empeine, con el cuerpo inclinado hacia atrás"],
      ],
      why: ["A chapa tem a maior área de contato com a bola: é a parte mais precisa do pé.", "The inside of the foot has the biggest contact area: it's the most accurate part.", "El interior tiene la mayor superficie de contacto: es la parte más precisa del pie."],
    },
    {
      q: ["Para chutar forte sem a bola subir, o que ajuda?", "To shoot hard without the ball flying up, what helps?", "Para patear fuerte sin que el balón se eleve, ¿qué ayuda?"],
      opts: [
        ["Pé de apoio ao lado da bola, corpo por cima dela e bater com o peito do pé", "Standing foot beside the ball, body over it, strike with the laces", "Pie de apoyo al lado del balón, cuerpo encima y golpear con el empeine"],
        ["Inclinar o corpo para trás na hora do chute", "Lean back as you strike", "Inclinar el cuerpo hacia atrás al patear"],
        ["Bater embaixo da bola com a ponta do pé", "Hit under the ball with your toe", "Golpear por debajo del balón con la punta"],
      ],
      why: ["Corpo para trás e pé embaixo da bola fazem ela subir. Corpo por cima deixa o chute baixo e forte.", "Leaning back and hitting under the ball sends it up. Body over the ball keeps the shot low and hard.", "Echarse atrás y golpear por debajo la eleva. El cuerpo encima deja el disparo bajo y fuerte."],
    },
    {
      q: ["O que é um domínio orientado?", "What is a directional first touch?", "¿Qué es un control orientado?"],
      opts: [
        ["Receber a bola já levando para o lado onde você vai jogar", "Receiving the ball and moving it straight towards where you'll play next", "Recibir el balón llevándolo ya hacia donde vas a jugar"],
        ["Parar a bola totalmente embaixo da sola antes de decidir", "Stopping the ball dead under your sole before deciding", "Parar el balón por completo con la suela antes de decidir"],
        ["Dominar sempre de costas para o gol adversário", "Always controlling with your back to the opponents' goal", "Controlar siempre de espaldas al arco rival"],
      ],
      why: ["O primeiro toque já tira o marcador da jogada e você ganha tempo.", "The first touch already takes the marker out of the play and buys you time.", "El primer toque ya deja atrás al marcador y te da tiempo."],
      scene: {
        us: [["cb", 20, 40], ["cm", 42, 32]],
        them: [["", 54, 24]],
        ball: [20, 40],
        steps: [
          { d: 1.0, ball: [41, 33], arrows: [[20, 40, 41, 33, "ball"]], them: { 0: [48, 28] }, text: ["A bola chega e o marcador vem...", "The ball arrives, the marker closes...", "Llega el balón y viene el marcador..."] },
          { d: 1.1, ball: [50, 44], us: { 1: [48, 42] }, arrows: [[41, 33, 50, 44, "ball"]], text: ["...o 1º toque já vai para o espaço", "...the first touch goes into space", "...el primer toque va al espacio"] },
          { d: 1.0, ball: [66, 46], us: { 1: [64, 45] }, them: { 0: [50, 32] }, text: ["Livre para jogar!", "Free to play!", "¡Libre para jugar!"] },
        ],
      },
    },
    {
      q: ["Como posicionar o corpo para receber um passe vindo da defesa?", "How should you position your body to receive a pass from the defence?", "¿Cómo pones el cuerpo para recibir un pase que viene de la defensa?"],
      opts: [
        ["De lado (corpo aberto), vendo quem passa e o campo à frente", "Side-on (open body), seeing both the passer and the pitch ahead", "De perfil (cuerpo abierto), viendo a quien pasa y el campo por delante"],
        ["De costas para o campo adversário, olhando só o passador", "Back to the opponents' half, looking only at the passer", "De espaldas al campo rival, mirando solo a quien pasa"],
        ["De frente para o passador, com os pés juntos", "Square to the passer, feet together", "De frente al que pasa, con los pies juntos"],
      ],
      why: ["Corpo aberto deixa você ver mais e virar com um toque só.", "An open body lets you see more and turn with a single touch.", "El cuerpo abierto te deja ver más y girar con un solo toque."],
    },
    {
      q: ["Cabeceio para fazer gol: para onde mandar a bola?", "Heading at goal: where should you send the ball?", "Cabezazo para hacer gol: ¿hacia dónde mandas el balón?"],
      opts: [
        ["Para baixo, com a testa, quicando antes do goleiro", "Downwards, with your forehead, bouncing before the keeper", "Hacia abajo, con la frente, botando antes del portero"],
        ["Para cima, por cima do goleiro", "Upwards, over the keeper", "Hacia arriba, por encima del portero"],
        ["Com o topo da cabeça, só desviando", "With the top of your head, just flicking it", "Con la coronilla, solo desviando"],
      ],
      why: ["Bola no chão é a mais difícil de defender. Para afastar da defesa é o contrário: alto e longe.", "A ball at the keeper's feet is hardest to save. To clear at the back it's the opposite: high and far.", "El balón al suelo es el más difícil de atajar. Para despejar es al revés: alto y lejos."],
    },
    {
      q: ["Você conduz a bola em velocidade com muito espaço livre. Como tocar nela?", "You're running with the ball at speed with lots of space. How do you touch it?", "Conduces el balón a velocidad con mucho espacio libre. ¿Cómo lo tocas?"],
      opts: [
        ["Com a parte de fora ou o peito do pé, empurrando a bola um pouco mais longe", "With the outside of the foot or laces, pushing it a bit further ahead", "Con el exterior o el empeine, empujándolo un poco más lejos"],
        ["Com a sola, parando a bola a cada passo", "With the sole, stopping the ball every step", "Con la suela, parando el balón a cada paso"],
        ["Com toques curtinhos, colados no pé, olhando só para a bola", "With tiny touches glued to your foot, looking only at the ball", "Con toques cortitos, pegados al pie, mirando solo el balón"],
      ],
      why: ["Com espaço, toques mais longos deixam você correr no máximo. Toque curto é para quando o marcador está perto.", "With space, longer touches let you run flat out. Short touches are for when a defender is close.", "Con espacio, toques más largos te dejan correr al máximo. Los toques cortos son para cuando hay un marcador cerca."],
    },
  ],

  onde: [
    {
      q: ["Um atacante adversário vem com a bola. Onde o zagueiro se coloca?", "An opposing striker is coming with the ball. Where does the centre-back stand?", "Un delantero rival viene con el balón. ¿Dónde se pone el central?"],
      opts: [
        ["Entre o atacante e o gol, a uma distância que dê para reagir", "Between the striker and the goal, at a distance where he can react", "Entre el delantero y el arco, a una distancia para poder reaccionar"],
        ["Colado nas costas do atacante, para roubar por trás", "Right behind the striker, to steal it from behind", "Pegado a la espalda del delantero, para robar por detrás"],
        ["Ao lado do atacante, para correr junto com ele", "Alongside the striker, to run with him", "Al lado del delantero, para correr junto a él"],
      ],
      why: ["Entre a bola e o gol, você fecha o caminho. Perto demais, ele passa com um toque.", "Between the ball and the goal, you block the path. Too close and he's past you with one touch.", "Entre el balón y el arco cierras el camino. Demasiado cerca, te pasa con un toque."],
      scene: {
        us: [["cb", 28, 36]],
        them: [["", 46, 20]],
        ball: [46, 20],
        steps: [
          { d: 1.6, them: { 0: [34, 24] }, ball: [34, 24], us: { 0: [24, 29] }, text: ["Zagueiro entre o atacante e o gol", "Defender between striker and goal", "Central entre el delantero y el arco"] },
          { d: 1.4, arrows: [[34, 24, 2, 32, "them"]], hl: { us: [0] }, text: ["Caminho do gol fechado", "Path to goal blocked", "Camino al arco cerrado"] },
        ],
      },
    },
    {
      q: ["No 4-3-3, com a bola, onde ficam os pontas?", "In a 4-3-3, with the ball, where do the wingers go?", "En el 4-3-3, con el balón, ¿dónde se ponen los extremos?"],
      opts: [
        ["Abertos e altos, perto da lateral, esticando a defesa", "Wide and high, near the touchline, stretching the defence", "Abiertos y altos, cerca de la banda, estirando la defensa"],
        ["Por dentro, colados no centroavante", "Narrow, right next to the centre-forward", "Por dentro, pegados al 9"],
        ["Recuados, na mesma linha dos laterais", "Deep, level with the full-backs", "Retrasados, en la misma línea de los laterales"],
      ],
      why: ["Pontas abertos dão amplitude: obrigam a defesa a se espalhar.", "Wide wingers give width: they force the defence to spread out.", "Extremos abiertos dan amplitud: obligan a la defensa a abrirse."],
      scene: {
        us: [["dm", 34, 32], ["cm", 46, 22], ["cm", 46, 42], ["w", 58, 20], ["st", 68, 32], ["w", 58, 44], ["gk", 6, 32], ["fb", 34, 8], ["cb", 20, 24], ["cb", 20, 40], ["fb", 34, 56]],
        them: [["", 82, 16], ["", 84, 27], ["", 84, 37], ["", 82, 48]],
        ball: [46, 22],
        text: ["4-3-3 com a bola", "4-3-3 in possession", "4-3-3 con balón"],
        steps: [
          { d: 1.6, us: { 3: [74, 4], 5: [74, 60] }, them: { 0: [80, 8], 3: [80, 56] }, arrows: [[58, 20, 74, 4], [58, 44, 74, 60]], hl: { us: [3, 5] }, text: ["Abertos e altos", "Wide and high", "Abiertos y altos"] },
          { d: 1.2, zone: [78, 18, 12, 28], text: ["A defesa se espalha", "The defence spreads out", "La defensa se abre"] },
        ],
      },
    },
    {
      q: ["Seu time está defendendo. Onde o volante se coloca?", "Your team is defending. Where does the holding midfielder stand?", "Tu equipo defiende. ¿Dónde se pone el pivote?"],
      opts: [
        ["Na frente dos zagueiros, fechando o passe para o centroavante", "In front of the centre-backs, blocking the pass to the striker", "Delante de los centrales, cerrando el pase al delantero"],
        ["Colado no meia adversário onde ele for, até na lateral", "Glued to the opposing playmaker wherever he goes, even out wide", "Pegado al mediapunta rival donde vaya, incluso a la banda"],
        ["Entre os zagueiros, como um terceiro zagueiro, o tempo todo", "Between the centre-backs, as a third centre-back, all the time", "Entre los centrales, como un tercer central, todo el tiempo"],
      ],
      why: ["O volante é o escudo da zaga: corta o passe antes de chegar no atacante.", "The holding midfielder is the defence's shield: he cuts the pass before it reaches the striker.", "El pivote es el escudo de la zaga: corta el pase antes de que llegue al delantero."],
      scene: {
        us: [["cb", 16, 26], ["cb", 16, 40], ["dm", 30, 22]],
        them: [["", 24, 33], ["", 46, 32]],
        ball: [46, 32],
        steps: [
          { d: 1.4, us: { 2: [32, 33] }, arrows: [[30, 22, 32, 33]], hl: { us: [2] }, text: ["Fecha a linha de passe", "Blocks the passing lane", "Cierra la línea de pase"] },
          { d: 0.9, ball: [33, 33], arrows: [[46, 32, 33, 33, "ball"]], text: ["Passe cortado!", "Pass cut out!", "¡Pase cortado!"] },
        ],
      },
    },
    {
      q: ["Seu time está atacando no campo adversário. Onde fica o goleiro?", "Your team is attacking in the opponents' half. Where is the goalkeeper?", "Tu equipo ataca en campo rival. ¿Dónde está el portero?"],
      opts: [
        ["Adiantado, perto da entrada da área, pronto para cortar uma bola longa", "Off his line, near the edge of the box, ready to sweep a long ball", "Adelantado, cerca del borde del área, listo para cortar un pelotazo"],
        ["Em cima da linha do gol, sem sair", "On the goal line, not moving", "Sobre la línea de gol, sin salir"],
        ["No meio-campo, ajudando a atacar", "At halfway, helping the attack", "En el medio campo, ayudando a atacar"],
      ],
      why: ["Com o time lá na frente, sobra espaço nas costas da zaga. O goleiro adiantado protege esse espaço.", "With the team pushed up, there's space behind the defence. A goalkeeper off his line protects it.", "Con el equipo arriba, queda espacio a la espalda de la zaga. El portero adelantado lo protege."],
      scene: {
        us: [["gk", 4, 32], ["cb", 44, 24], ["cb", 44, 40]],
        them: [["", 54, 30], ["", 76, 30]],
        ball: [76, 30],
        steps: [
          { d: 1.2, us: { 0: [15, 32] }, arrows: [[4, 32, 15, 32]], text: ["Time no ataque: goleiro adiantado", "Team up: keeper off his line", "Equipo arriba: portero adelantado"] },
          { d: 1.4, ball: [20, 31], them: { 0: [26, 31] }, arrows: [[76, 30, 20, 31, "ball"]], text: ["Bola longa nas costas...", "Long ball over the top...", "Pelotazo a la espalda..."] },
          { d: 0.6, us: { 0: [19, 31] }, ball: [19, 31], hl: { us: [0] }, text: ["...o goleiro corta antes!", "...the keeper gets there first!", "...¡el portero llega antes!"] },
        ],
      },
    },
    {
      q: ["Seu colega está com a bola e você está atrás do seu marcador. O que faz?", "Your teammate has the ball and you're behind your marker. What do you do?", "Tu compañero tiene el balón y estás detrás de tu marcador. ¿Qué haces?"],
      opts: [
        ["Saio da sombra do marcador para ter uma linha de passe livre", "Step out of the marker's shadow to open a clear passing lane", "Salgo de la sombra del marcador para tener una línea de pase libre"],
        ["Fico parado e grito para ele passar mesmo assim", "Stand still and shout for the pass anyway", "Me quedo quieto y le grito que pase igual"],
        ["Chego bem perto do colega para ele me entregar a bola", "Run right up to my teammate so he can hand it to me", "Me acerco mucho al compañero para que me la entregue"],
      ],
      why: ["Se tem um adversário entre você e a bola, o passe não chega. Um passo para o lado já resolve.", "If an opponent is between you and the ball, the pass won't get through. One step sideways fixes it.", "Si hay un rival entre tú y el balón, el pase no llega. Un paso al costado lo resuelve."],
      scene: {
        us: [["cm", 40, 32], ["am", 58, 32]],
        them: [["", 50, 32], ["", 44, 42]],
        ball: [40, 32],
        text: ["Escondido atrás do marcador", "Hidden behind the marker", "Escondido detrás del marcador"],
        steps: [
          { d: 1.2, us: { 1: [58, 19] }, arrows: [[58, 32, 58, 19]], text: ["Saia da sombra", "Step out of the shadow", "Sal de la sombra"] },
          { d: 0.9, ball: [57, 20], arrows: [[40, 32, 57, 20, "ball"]], text: ["Linha de passe livre", "Clear passing lane", "Línea de pase libre"] },
        ],
      },
    },
  ],

  voltou: [
    {
      q: ["Você foi driblado. Para onde corre?", "You've been dribbled past. Where do you run?", "Te regatearon. ¿Hacia dónde corres?"],
      opts: [
        ["Em direção ao meu gol, para ficar de novo entre a bola e o gol", "Towards my own goal, to get between the ball and the goal again", "Hacia mi arco, para volver a ponerme entre el balón y el arco"],
        ["Atrás do atacante, para dar um carrinho por trás", "After the attacker, to slide in from behind", "Detrás del delantero, para barrerlo por detrás"],
        ["Fico onde estou: a jogada já passou", "Stay where I am: the play has gone", "Me quedo donde estoy: la jugada ya pasó"],
      ],
      why: ["Correr direto para o gol é o caminho mais curto para voltar a defender. Por trás é falta e às vezes cartão.", "Running straight towards goal is the shortest way back into the play. From behind is a foul and maybe a card.", "Correr directo al arco es el camino más corto para volver a defender. Por detrás es falta y a veces tarjeta."],
      scene: {
        us: [["cm", 38, 30], ["cb", 14, 36]],
        them: [["", 46, 30]],
        ball: [46, 30],
        steps: [
          { d: 1.0, them: { 0: [34, 26] }, ball: [34, 26], us: { 0: [40, 34] }, text: ["Foi driblado...", "Beaten...", "Te regatearon..."] },
          { d: 1.5, us: { 0: [22, 30] }, them: { 0: [27, 25] }, ball: [27, 25], arrows: [[40, 34, 22, 30]], hl: { us: [0] }, text: ["...corra para ficar na frente da bola", "...sprint back goal-side", "...corre para quedar delante del balón"] },
        ],
      },
    },
    {
      q: ["O lateral subiu ao ataque e o time perdeu a bola. Quem cobre o espaço dele?", "The full-back went forward and the team lost the ball. Who covers his space?", "El lateral subió al ataque y el equipo perdió el balón. ¿Quién cubre su espacio?"],
      opts: [
        ["O volante ou o zagueiro mais perto, até o lateral voltar", "The holding midfielder or nearest centre-back, until the full-back gets back", "El pivote o el central más cercano, hasta que vuelva el lateral"],
        ["Ninguém: o espaço é do lateral e ele que volte", "Nobody: it's the full-back's space, he has to get back", "Nadie: el espacio es del lateral y que vuelva él"],
        ["O ponta do outro lado do campo", "The winger on the other side of the pitch", "El extremo del otro lado del campo"],
      ],
      why: ["É a cobertura: um colega ocupa o espaço vazio e o lateral volta correndo para a posição.", "That's cover: a teammate fills the empty space while the full-back sprints back.", "Es la cobertura: un compañero ocupa el espacio vacío y el lateral vuelve corriendo."],
      scene: {
        us: [["fb", 62, 8], ["cb", 20, 24], ["cb", 20, 40], ["dm", 36, 32]],
        them: [["", 64, 16], ["", 52, 6]],
        ball: [64, 16],
        steps: [
          { d: 0.9, ball: [52, 6], arrows: [[64, 16, 52, 6, "ball"]], text: ["O lateral subiu e perdemos a bola", "Full-back up and ball lost", "Lateral arriba y balón perdido"] },
          { d: 1.4, us: { 3: [32, 10] }, them: { 1: [42, 6] }, ball: [42, 6], arrows: [[36, 32, 32, 10]], hl: { us: [3] }, text: ["O volante cobre o espaço", "The holding mid covers", "El pivote cubre el espacio"] },
          { d: 1.3, us: { 0: [36, 6] }, arrows: [[62, 8, 36, 6]], text: ["Até o lateral voltar", "Until the full-back is back", "Hasta que vuelve el lateral"] },
        ],
      },
    },
    {
      q: ["Como avisar um colega que vem um adversário por trás?", "How do you warn a teammate that an opponent is coming from behind?", "¿Cómo avisas a un compañero que viene un rival por detrás?"],
      opts: [
        ["Falo alto e curto, antes de a bola chegar: \"Ladrão!\" ou \"Vem!\"", "Shout short and loud before the ball arrives: \"Man on!\"", "Grito corto y fuerte antes de que llegue el balón: \"¡Viene uno!\""],
        ["Espero ele receber e depois aviso", "Wait for him to receive, then warn him", "Espero a que reciba y después le aviso"],
        ["Aponto para o adversário sem falar nada", "Point at the opponent without saying anything", "Señalo al rival sin decir nada"],
      ],
      why: ["Ele está olhando para a bola, não para você. O aviso tem que ser de voz e antes do passe.", "He's watching the ball, not you. The warning must be spoken, and before the pass.", "Él mira el balón, no a ti. El aviso tiene que ser de voz y antes del pase."],
    },
    {
      q: ["Quem defende quando o time perde a bola?", "Who defends when the team loses the ball?", "¿Quién defiende cuando el equipo pierde el balón?"],
      opts: [
        ["Todos: os atacantes pressionam a saída, o meio fecha e a defesa protege", "Everyone: strikers press the build-up, midfield closes up, the defence protects", "Todos: los delanteros presionan la salida, el medio cierra y la defensa protege"],
        ["Os defensores e o goleiro; os atacantes esperam o contra-ataque", "The defenders and keeper; the strikers wait for the counter", "Los defensores y el portero; los delanteros esperan el contraataque"],
        ["Só quem perdeu a bola tem que voltar", "Only the player who lost it has to get back", "Solo quien la perdió tiene que volver"],
      ],
      why: ["Cada setor tem uma tarefa sem a bola. Um time que defende com 11 fica muito difícil de passar.", "Each unit has a job without the ball. A team defending with 11 is very hard to break down.", "Cada línea tiene una tarea sin balón. Un equipo que defiende con 11 es muy difícil de superar."],
    },
  ],

  leitura: [
    {
      q: ["Dois adversários vêm em você e um colega ficou livre. O que faz?", "Two opponents close you down and a teammate is free. What do you do?", "Dos rivales vienen hacia ti y un compañero quedó libre. ¿Qué haces?"],
      opts: [
        ["Toco para o colega livre", "Pass to the free teammate", "Toco al compañero libre"],
        ["Tento passar pelos dois com um drible", "Try to dribble past both", "Intento regatear a los dos"],
        ["Protejo a bola e espero a falta", "Shield the ball and wait for a foul", "Protejo el balón y espero la falta"],
      ],
      why: ["Se dois vêm em você, alguém do seu time ficou sem marcação.", "If two come at you, someone on your team is unmarked.", "Si vienen dos, alguien de tu equipo quedó sin marca."],
      scene: {
        us: [["cm", 50, 32], ["w", 58, 52]],
        them: [["", 60, 30], ["", 48, 22]],
        ball: [50, 32],
        steps: [
          { d: 1.2, them: { 0: [53, 32], 1: [49, 28] }, arrows: [[60, 30, 53, 32, "them"], [48, 22, 49, 28, "them"]], text: ["Dois vêm em você...", "Two close you down...", "Vienen dos..."] },
          { d: 0.9, ball: [58, 52], arrows: [[50, 32, 58, 52, "ball"]], hl: { us: [1] }, text: ["...alguém ficou livre: toque!", "...someone is free: pass!", "...alguien quedó libre: ¡toca!"] },
        ],
      },
    },
    {
      q: ["Antes de receber a bola, o que um bom jogador faz?", "Before receiving the ball, what does a good player do?", "Antes de recibir el balón, ¿qué hace un buen jugador?"],
      opts: [
        ["Olha em volta (escaneia) para saber onde estão colegas e adversários", "Looks around (scans) to know where teammates and opponents are", "Mira alrededor (escanea) para saber dónde están compañeros y rivales"],
        ["Olha só para a bola para não errar o domínio", "Looks only at the ball so he doesn't miscontrol", "Mira solo el balón para no fallar el control"],
        ["Corre na direção da bola sem olhar para os lados", "Runs towards the ball without looking around", "Corre hacia el balón sin mirar a los lados"],
      ],
      why: ["Quem lê o jogo antes de pegar a bola já recebe sabendo o que fazer: ganha pelo menos 1 segundo de raciocínio e de decisão.", "Reading the game before the ball arrives means you receive already knowing what to do: you gain at least 1 second of thinking and decision time.", "Quien lee el juego antes de recibir ya sabe qué hacer: gana al menos 1 segundo de razonamiento y de decisión."],
      scene: {
        us: [["cb", 22, 42], ["cm", 46, 30], ["w", 72, 46]],
        them: [["", 57, 23], ["", 36, 16]],
        ball: [22, 42],
        steps: [
          { d: 3.4, look: ["us", 1, [153, 90, 32, -39, -110, -207]], them: { 0: [52, 26] }, text: ["Olha em volta antes de a bola chegar", "Scans before the ball arrives", "Mira alrededor antes de que llegue"] },
          { d: 1.0, ball: [45, 31], arrows: [[22, 42, 45, 31, "ball"]], look: ["us", 1, [153]], text: ["Já sabe: marcador atrás, colega livre", "He knows: marker behind, mate free", "Ya sabe: marcador detrás, compañero libre"] },
          { d: 1.0, ball: [71, 46], arrows: [[45, 31, 71, 46, "ball"]], hl: { us: [2] }, text: ["Recebe e joga de primeira!", "Receives and plays first time!", "¡Recibe y juega de primera!"] },
        ],
      },
    },
    {
      q: ["Você está na entrada da área com um zagueiro na frente e um colega livre do lado. O que faz?", "You're at the edge of the box with a defender in front and a teammate free beside you. What do you do?", "Estás en la frontal del área con un central delante y un compañero libre al lado. ¿Qué haces?"],
      opts: [
        ["Passo para o colega, que está em melhor posição", "Pass to my teammate, who's in a better position", "Paso al compañero, que está mejor ubicado"],
        ["Chuto assim mesmo, com o zagueiro na frente", "Shoot anyway, with the defender in front", "Disparo igual, con el central delante"],
        ["Volto a bola para o meio-campo", "Play it back to midfield", "Devuelvo el balón al medio campo"],
      ],
      why: ["O chute com o zagueiro na frente quase sempre é bloqueado. O colega livre tem o gol aberto.", "A shot with a defender in front is almost always blocked. Your free teammate has an open goal.", "Un disparo con el central delante casi siempre se bloquea. El compañero libre tiene el arco abierto."],
      scene: {
        us: [["am", 74, 28], ["st", 82, 44]],
        them: [["", 80, 28], ["", 88, 22]],
        ball: [74, 28],
        steps: [
          { d: 1.1, hl: { them: [0] }, text: ["Zagueiro na frente", "Defender in front", "Central delante"] },
          { d: 0.9, ball: [82, 44], arrows: [[74, 28, 82, 44, "ball"]], hl: { us: [1] }, text: ["Colega em melhor posição", "Teammate in a better spot", "Compañero mejor ubicado"] },
          { d: 0.6, ball: [99, 35], text: ["Gol!", "Goal!", "¡Gol!"] },
        ],
      },
    },
    {
      q: ["Seu time está ganhando e faltam 3 minutos. O que é mais inteligente?", "Your team is winning with 3 minutes left. What's the smartest thing to do?", "Tu equipo gana y faltan 3 minutos. ¿Qué es lo más inteligente?"],
      opts: [
        ["Manter a posse com passes seguros, longe do nosso gol", "Keep possession with safe passes, away from our goal", "Mantener la posesión con pases seguros, lejos de nuestro arco"],
        ["Chutar a bola para fora toda vez que ela chegar", "Kick the ball out every time it comes to you", "Sacar el balón afuera cada vez que llegue"],
        ["Atacar com todos para fazer mais um gol", "Attack with everyone to score another", "Atacar con todos para hacer otro gol"],
      ],
      why: ["Bola no pé, longe do seu gol, é bola que o adversário não tem.", "The ball at your feet, far from your goal, is a ball the opponents don't have.", "Balón en tus pies, lejos de tu arco, es balón que el rival no tiene."],
    },
  ],

  contra: [
    {
      q: ["Você roubou a bola e o adversário está todo no ataque. O que faz?", "You won the ball and the opponents are all up the pitch. What do you do?", "Robaste el balón y el rival está todo en ataque. ¿Qué haces?"],
      opts: [
        ["Ataco rápido, antes de eles voltarem", "Attack fast, before they get back", "Ataco rápido, antes de que vuelvan"],
        ["Seguro a bola e espero todos voltarem", "Hold the ball and wait for everyone to get back", "Me quedo con el balón y espero que vuelvan todos"],
        ["Dou um chutão para a frente, sem olhar", "Hoof it forward without looking", "Doy un pelotazo hacia adelante sin mirar"],
      ],
      why: ["No contra-ataque, cada segundo conta: o adversário está desarrumado.", "On the counter every second counts: the opponents are out of shape.", "En el contraataque cada segundo cuenta: el rival está desordenado."],
      scene: {
        us: [["dm", 26, 30], ["st", 56, 22], ["w", 52, 50]],
        them: [["", 30, 20], ["", 28, 42], ["", 38, 32], ["", 72, 32]],
        ball: [26, 30],
        text: ["Roubou! Eles estão todos no ataque", "Won it! They're all up the pitch", "¡Robó! Están todos en ataque"],
        steps: [
          { d: 1.4, ball: [62, 22], us: { 1: [64, 22] }, them: { 0: [36, 22], 1: [34, 40], 2: [44, 32] }, arrows: [[26, 30, 62, 22, "ball"]], text: ["Passe rápido para a frente", "Quick pass forward", "Pase rápido hacia adelante"] },
          { d: 1.2, ball: [86, 30], us: { 1: [86, 30], 2: [80, 46] }, them: { 3: [80, 32] }, text: ["Ataque antes de eles voltarem!", "Attack before they get back!", "¡Ataca antes de que vuelvan!"] },
        ],
      },
    },
    {
      q: ["No contra-ataque, você está sem a bola. Para onde corre?", "On a counter-attack you don't have the ball. Where do you run?", "En el contraataque no tienes el balón. ¿Hacia dónde corres?"],
      opts: [
        ["Para a frente, num espaço livre, para receber", "Forward, into free space, to receive", "Hacia adelante, a un espacio libre, para recibir"],
        ["Para perto de quem está com a bola", "Right next to the player on the ball", "Al lado de quien tiene el balón"],
        ["Volto para defender, caso a bola seja perdida", "Back to defend, in case the ball is lost", "Vuelvo a defender, por si se pierde el balón"],
      ],
      why: ["Correr para o espaço estica a defesa e dá uma opção de passe para a frente.", "Running into space stretches the defence and gives a forward passing option.", "Correr al espacio estira la defensa y da una opción de pase hacia adelante."],
      scene: {
        us: [["cm", 50, 32], ["w", 50, 52]],
        them: [["", 72, 30], ["", 68, 18]],
        ball: [50, 32],
        steps: [
          { d: 1.4, us: { 0: [60, 32], 1: [76, 52] }, ball: [60, 32], arrows: [[50, 52, 76, 52]], zone: [70, 44, 16, 14], text: ["Corra para o espaço livre", "Run into free space", "Corre al espacio libre"] },
          { d: 0.9, ball: [76, 52], arrows: [[60, 32, 76, 52, "ball"]], text: ["Opção de passe na frente", "A forward passing option", "Opción de pase hacia adelante"] },
        ],
      },
    },
    {
      q: ["Você conduz no contra-ataque, um zagueiro vem em você e um colega está livre do lado. O que faz?", "You're running with the ball on a counter, a defender comes at you and a teammate is free beside you. What do you do?", "Conduces en el contraataque, un central viene hacia ti y un compañero está libre al lado. ¿Qué haces?"],
      opts: [
        ["Passo na hora certa, quando o zagueiro vier em mim", "Pass at the right moment, when the defender commits", "Paso en el momento justo, cuando el central venga hacia mí"],
        ["Passo logo, antes de o zagueiro chegar perto", "Pass straight away, before the defender gets close", "Paso enseguida, antes de que el central se acerque"],
        ["Chuto de longe, antes de ele chegar", "Shoot from distance before he arrives", "Disparo de lejos antes de que llegue"],
      ],
      why: ["Esperar o zagueiro vir em você faz ele deixar seu colega livre.", "Drawing the defender to you leaves your teammate free.", "Esperar que el central venga hacia ti deja libre a tu compañero."],
      scene: {
        us: [["cm", 58, 30], ["st", 60, 48]],
        them: [["", 82, 38]],
        ball: [58, 30],
        steps: [
          { d: 1.4, us: { 0: [72, 32], 1: [74, 48] }, them: { 0: [76, 35] }, ball: [72, 32], text: ["Leve a bola até o zagueiro vir", "Carry it until the defender commits", "Lleva el balón hasta que venga el central"] },
          { d: 0.8, ball: [82, 48], us: { 1: [82, 48] }, arrows: [[72, 32, 82, 48, "ball"]], text: ["Ele veio? Passe!", "He's committed? Pass!", "¿Vino? ¡Pasa!"] },
          { d: 0.6, ball: [99, 34], text: ["Gol!", "Goal!", "¡Gol!"] },
        ],
      },
    },
    {
      q: ["Qual passe é melhor no contra-ataque?", "Which pass is best on a counter-attack?", "¿Qué pase es mejor en el contraataque?"],
      opts: [
        ["Para a frente, no espaço, na corrida do colega", "Forward, into space, onto a teammate's run", "Hacia adelante, al espacio, a la carrera del compañero"],
        ["Para trás, para recomeçar com calma", "Backwards, to start again calmly", "Hacia atrás, para empezar con calma"],
        ["Para o lado, para quem estiver mais perto", "Sideways, to whoever is closest", "Al lado, a quien esté más cerca"],
      ],
      why: ["Passe para a frente no espaço faz o time ganhar metros antes de a defesa voltar.", "A forward pass into space gains ground before the defence gets back.", "Un pase al espacio hacia adelante gana metros antes de que vuelva la defensa."],
    },
  ],

  bolaParada: [
    {
      q: ["Escanteio contra o seu time. O que você faz?", "Corner against your team. What do you do?", "Córner en contra. ¿Qué haces?"],
      opts: [
        ["Cuido do meu adversário ou da minha zona, sem perder a bola de vista", "Take care of my man or my zone, keeping an eye on the ball", "Me ocupo de mi rival o de mi zona, sin perder de vista el balón"],
        ["Olho só para a bola, longe de todos", "Watch only the ball, away from everyone", "Miro solo el balón, lejos de todos"],
        ["Fico na entrada da área esperando o rebote, sem marcar ninguém", "Wait on the edge of the box for the rebound, marking nobody", "Me quedo en la frontal esperando el rebote, sin marcar a nadie"],
      ],
      why: ["Na bola parada, cada um cuida de alguém ou de um espaço. Um livre é o suficiente para levar gol.", "At set pieces, everyone looks after a player or a space. One free man is enough to concede.", "En el balón parado, cada uno cuida a alguien o un espacio. Uno libre basta para recibir gol."],
    },
    {
      q: ["Como cobrar um lateral do jeito certo?", "How do you take a throw-in correctly?", "¿Cómo se saca un saque de banda correctamente?"],
      opts: [
        ["Com as duas mãos, por trás da cabeça e os dois pés no chão", "Both hands, from behind the head, both feet on the ground", "Con las dos manos, por detrás de la cabeza y los dos pies en el suelo"],
        ["Com as duas mãos, mas pode tirar um pé do chão", "Both hands, but one foot can leave the ground", "Con las dos manos, pero se puede levantar un pie"],
        ["Com as duas mãos, saindo da frente do peito", "Both hands, from in front of the chest", "Con las dos manos, desde delante del pecho"],
      ],
      why: ["Duas mãos, atrás da cabeça e os dois pés no chão: senão o juiz dá o lateral para o outro time.", "Two hands, behind the head, both feet down: otherwise the referee gives it to the other team.", "Dos manos, detrás de la cabeza y los dos pies en el suelo: si no, el árbitro da el saque al rival."],
    },
    {
      q: ["Falta perto da área para o seu time. O que os colegas fazem?", "Free kick near the box for your team. What do teammates do?", "Tiro libre cerca del área a favor. ¿Qué hacen los compañeros?"],
      opts: [
        ["Combinam quem vai bater e ficam atentos ao rebote", "Agree who takes it and watch for the rebound", "Acuerdan quién patea y están atentos al rebote"],
        ["Todos querem bater e discutem", "Everyone wants to take it and they argue", "Todos quieren patear y discuten"],
        ["Ficam parados olhando a cobrança", "Stand still and watch the kick", "Se quedan quietos mirando el tiro"],
      ],
      why: ["Combinar antes evita confusão. E o rebote às vezes vira gol!", "Agreeing first avoids confusion. And rebounds often become goals!", "Acordar antes evita lío. ¡Y el rebote a veces es gol!"],
    },
    {
      q: ["Na barreira, o que você não pode fazer?", "In the wall, what must you not do?", "En la barrera, ¿qué no puedes hacer?"],
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
      q: ["Seu colega vai receber a bola. Onde você se coloca?", "Your teammate is about to get the ball. Where do you go?", "Tu compañero va a recibir. ¿Dónde te pones?"],
      opts: [
        ["Num lugar onde ele me veja e consiga passar, sem adversário no caminho", "Somewhere he can see me and pass, with no opponent in the way", "Donde me vea y pueda pasarme, sin rival en el camino"],
        ["Bem perto dele, para ele me entregar a bola", "Right next to him, so he can hand it to me", "Pegado a él, para que me la entregue"],
        ["Lá na frente, sempre atrás da linha dos zagueiros", "Up front, always behind the defensive line", "Arriba, siempre detrás de la línea de los centrales"],
      ],
      why: ["Linha de passe livre é o melhor presente para quem tem a bola. Atrás da linha é impedimento.", "A clear passing lane is the best gift for the player on the ball. Behind the line is offside.", "Una línea de pase libre es el mejor regalo para quien tiene el balón. Detrás de la línea es fuera de juego."],
      scene: {
        us: [["cm", 42, 32], ["st", 58, 32]],
        them: [["cm", 50, 32], ["cb", 70, 22], ["cb", 70, 42]],
        ball: [44, 33],
        steps: [
          { d: 1.6, hl: { us: [1], them: [0] }, text: ["Atrás do marcador: o passe não chega", "Behind the marker: the pass can't get there", "Detrás del marcador: el pase no llega"] },
          { d: 1.4, us: { 1: [60, 16] }, hl: { us: [1] }, arrows: [[58, 32, 60, 16, "us"]], text: ["Saio da sombra e fico livre", "I leave his shadow and get free", "Salgo de su sombra y quedo libre"] },
          { d: 1.3, ball: [59, 17], arrows: [[44, 33, 59, 17, "ball"]], text: ["Linha de passe livre!", "Clear passing lane!", "¡Línea de pase libre!"] },
          { d: 1.6, hl: { them: [1, 2] }, zone: [70, 3, 28, 58], text: ["Nunca atrás da linha dos zagueiros", "Never behind the last defenders", "Nunca detrás de los últimos defensores"] },
        ],
      },
    },
    {
      q: ["Seu marcador está colado em você. Como se livrar dele?", "Your marker is right on you. How do you get free?", "Tu marcador está pegado a ti. ¿Cómo te liberas?"],
      opts: [
        ["Finjo que vou para um lado e arranco para o outro", "Fake one way and burst the other", "Amago hacia un lado y arranco hacia el otro"],
        ["Corro em linha reta na direção da bola", "Run in a straight line towards the ball", "Corro en línea recta hacia el balón"],
        ["Fico parado para ele se distrair", "Stand still so he gets distracted", "Me quedo quieto para que se distraiga"],
      ],
      why: ["A finta sem bola também engana: ganha um metro de vantagem para receber.", "A feint without the ball fools defenders too: it wins you a yard to receive.", "El amague sin balón también engaña: te da un metro de ventaja para recibir."],
    },
    {
      q: ["Você pede a bola. Qual é o melhor jeito?", "You call for the ball. What is the best way?", "Pides el balón. ¿Cuál es la mejor forma?"],
      opts: [
        ["Mostro com a mão onde quero e falo o nome do colega", "Point where I want it and call my teammate's name", "Señalo dónde la quiero y digo el nombre del compañero"],
        ["Grito \"toca!\" mesmo estando atrás de um adversário", "Shout \"pass!\" even though I'm behind an opponent", "Grito \"¡toca!\" aunque esté detrás de un rival"],
        ["Fico quieto torcendo para ele me ver", "Stay quiet and hope he sees me", "Me quedo callado esperando que me vea"],
      ],
      why: ["Mostrar e falar ajuda o colega a decidir rápido.", "Pointing and calling helps your teammate decide quickly.", "Señalar y hablar ayuda al compañero a decidir rápido."],
    },
    {
      q: ["Um colega correu e levou um zagueiro com ele. O que você faz?", "A teammate made a run and took a defender with him. What do you do?", "Un compañero corrió y se llevó a un central. ¿Qué haces?"],
      opts: [
        ["Ocupo o espaço que ele deixou livre", "Move into the space he left", "Ocupo el espacio que dejó libre"],
        ["Corro atrás dele também, para ajudar", "Run after him too, to help", "Corro detrás de él también, para ayudar"],
        ["Fico no meu lugar, esperando a bola", "Stay where I am, waiting for the ball", "Me quedo en mi lugar, esperando el balón"],
      ],
      why: ["Um corre, o outro aproveita o espaço: isso é mobilidade, jogo coletivo.", "One runs, the other uses the space: that's movement and team play.", "Uno corre, el otro aprovecha el espacio: eso es movilidad, juego colectivo."],
      scene: {
        us: [["st", 80, 32], ["am", 64, 40], ["cm", 54, 24]],
        them: [["", 85, 32], ["", 86, 46]],
        ball: [54, 24],
        steps: [
          { d: 1.4, us: { 0: [88, 12] }, them: { 0: [88, 16] }, arrows: [[80, 32, 88, 12]], text: ["O colega leva o zagueiro", "Teammate drags the defender away", "El compañero se lleva al central"] },
          { d: 1.2, us: { 1: [82, 32] }, arrows: [[64, 40, 82, 32]], zone: [76, 24, 14, 16], text: ["Ocupe o espaço que ficou", "Fill the space he left", "Ocupa el espacio que quedó"] },
          { d: 0.8, ball: [82, 32], arrows: [[54, 24, 82, 32, "ball"]], text: ["Livre na área!", "Free in the box!", "¡Libre en el área!"] },
        ],
      },
    },
  ],

  zagueiro: [
    {
      q: ["O atacante recebe de costas para o gol. O que o zagueiro faz?", "The striker receives with his back to goal. What does the centre-back do?", "El delantero recibe de espaldas al arco. ¿Qué hace el central?"],
      opts: [
        ["Chega perto para não deixar ele virar e rouba a bola sem fazer falta", "Gets tight so he can't turn, then wins the ball without fouling", "Se acerca para que no gire y roba el balón sin hacer falta"],
        ["Fica longe esperando ele virar", "Stays off and waits for him to turn", "Se queda lejos esperando que gire"],
        ["Dá o bote por trás na hora", "Tackles from behind straight away", "Entra por detrás enseguida"],
      ],
      why: ["Atacante de costas é menos perigoso. Fique colado para ele não virar e, quando a bola escapar do pé dele, roube sem falta: nada de empurrar ou entrar por trás.", "A striker facing away is less dangerous. Stay tight so he can't turn and, when the ball gets away from him, win it cleanly: no pushing or tackling from behind.", "Un delantero de espaldas es menos peligroso. Quédate pegado para que no gire y, cuando se le escape el balón, róbalo sin falta: nada de empujar ni entrar por detrás."],
      scene: {
        view: [6, 14, 52],
        us: [["cb", 20, 32], ["dm", 38, 41]],
        them: [["", 30, 32], ["", 50, 32]],
        ball: [50, 32],
        steps: [
          { d: 1.0, ball: [31, 32], arrows: [[50, 32, 31, 32, "ball"]], text: ["Recebe de costas...", "Receives with back to goal...", "Recibe de espaldas..."] },
          { d: 1.0, us: { 0: [27, 32] }, hl: { us: [0] }, text: ["...chegue perto: ele não vira", "...get tight: he can't turn", "...acércate: no puede girar"] },
          { d: 1.0, them: { 0: [30, 30] }, ball: [28, 36], hl: { them: [0] }, text: ["Tentou girar e a bola escapou...", "He tries to turn, the ball gets away...", "Intenta girar y se le escapa..."] },
          { d: 1.0, us: { 0: [27, 36] }, ball: [26, 37], hl: { us: [0] }, text: ["...rouba na bola, sem falta!", "...win the ball cleanly, no foul!", "...roba el balón, ¡sin falta!"] },
          { d: 1.0, ball: [38, 41], arrows: [[26, 37, 38, 41, "ball"]], hl: { us: [1] }, text: ["E já sai jogando", "And play out straight away", "Y sale jugando enseguida"] },
        ],
      },
    },
    {
      q: ["Bola longa vindo pelo alto. O que o zagueiro faz?", "A long ball is coming through the air. What does the centre-back do?", "Viene un pelotazo por arriba. ¿Qué hace el central?"],
      opts: [
        ["Calcula onde ela cai e chega antes: cabeceia para um colega ou, se der tempo, domina e sai jogando", "Judges where it lands and gets there first: heads it to a teammate or, if there's time, controls it and plays out", "Calcula dónde cae y llega antes: cabecea a un compañero o, si hay tiempo, controla y sale jugando"],
        ["Espera a bola quicar para dominar com calma", "Waits for it to bounce, then controls it calmly", "Espera que bote para controlar con calma"],
        ["Deixa para o goleiro sair, mesmo longe da área", "Leaves it for the keeper, even far from the box", "La deja para el portero, aunque esté lejos del área"],
      ],
      scene: {
        view: [8, 10, 66],
        us: [["cb", 30, 24], ["cb", 30, 40], ["dm", 44, 46]],
        them: [["cm", 70, 28], ["st", 38, 28]],
        ball: [69, 28],
        steps: [
          { d: 1.3, ball: [44, 27], arrows: [[69, 28, 24, 26, "ball"]], zone: [20, 22, 8, 8], text: ["Bola longa: calcule onde ela cai", "Long ball: judge where it lands", "Pelotazo: calcula dónde cae"] },
          { d: 1.1, us: { 0: [24, 26] }, them: { 1: [28, 28] }, ball: [24, 26], hl: { us: [0] }, text: ["Chegue antes do atacante", "Get there before the striker", "Llega antes que el delantero"] },
          { d: 1.3, ball: [44, 46], arrows: [[24, 26, 44, 46, "ball"]], hl: { us: [2] }, text: ["Cabeceie para um colega", "Head it to a teammate", "Cabecea a un compañero"] },
          { d: 1.4, us: { 2: [56, 44] }, ball: [57, 44], arrows: [[44, 46, 56, 44, "us"]], text: ["Livre? Domine e saia jogando", "Free? Control it and play out", "¿Libre? Controla y sal jugando"] },
        ],
      },
      why: ["Bola quicando dá chance ao atacante: ataque a bola primeiro. De preferência, cabeceie para um companheiro. Se estiver livre, domine e saia jogando. Só se estiver apertado, afaste alto e longe.", "A bouncing ball gives the striker a chance: attack the ball first. Ideally, head it to a teammate. If you're free, control it and play out. Only when under pressure, clear it high and far.", "Un balón que bota le da opciones al delantero: ataca el balón primero. Mejor cabecea a un compañero. Si estás libre, controla y sal jugando. Solo si estás apretado, despeja alto y lejos."],
    },
    {
      q: ["A linha de 4 vai subir para deixar o atacante impedido. Como ela deve se mover?", "The back four steps up to catch the striker offside. How should it move?", "La línea de 4 sube para dejar en fuera de juego al delantero. ¿Cómo se debe mover?"],
      opts: [
        ["Todos juntos, alinhados e na mesma hora", "All together, in line and at the same time", "Todos juntos, alineados y al mismo tiempo"],
        ["Cada um sobe quando achar melhor", "Each one steps up whenever he thinks best", "Cada uno sube cuando le parezca mejor"],
        ["Só os zagueiros sobem; os laterais ficam atrás", "Only the centre-backs step up; the full-backs stay back", "Solo suben los centrales; los laterales se quedan atrás"],
      ],
      why: ["Se um fica para trás, ele deixa o atacante em condição de jogo. A linha só funciona alinhada.", "If one stays back, he plays the striker onside. The line only works when it's level.", "Si uno se queda atrás, habilita al delantero. La línea solo funciona alineada."],
      scene: {
        us: [["fb", 26, 10], ["cb", 24, 24], ["cb", 24, 40], ["fb", 26, 54]],
        them: [["", 28, 30], ["", 52, 32]],
        ball: [52, 32],
        steps: [
          { d: 1.3, us: { 0: [34, 10], 1: [34, 24], 2: [34, 40], 3: [34, 54] }, arrows: [[24, 24, 34, 24], [24, 40, 34, 40]], text: ["Linha alinhada sobe junto", "The line steps up together", "La línea sube junta"] },
          { d: 0.9, ball: [22, 30], arrows: [[52, 32, 22, 30, "ball"]], hl: { them: [0] }, text: ["Atacante impedido!", "Striker offside!", "¡Delantero en fuera de juego!"] },
        ],
      },
    },
    {
      q: ["Seu time está atacando. Onde ficam os zagueiros?", "Your team is attacking. Where do the centre-backs stay?", "Tu equipo ataca. ¿Dónde se quedan los centrales?"],
      opts: [
        ["Atentos, perto do meio-campo, de olho nos atacantes deles", "Alert, near halfway, watching their strikers", "Atentos, cerca del medio campo, vigilando a sus delanteros"],
        ["Dentro da área adversária, para cabecear", "Inside the opponents' box, to head the ball", "Dentro del área rival, para cabecear"],
        ["Dentro da própria área, perto do goleiro", "Inside their own box, next to the goalkeeper", "Dentro de su propia área, junto al portero"],
      ],
      why: ["Mesmo atacando, alguém protege a casa. Lá atrás demais, o time fica partido no meio.", "Even when attacking, someone guards the house. Too deep, and the team is split in two.", "Aun atacando, alguien cuida la casa. Demasiado atrás, el equipo queda partido."],
      scene: {
        us: [["gk", 6, 32], ["cb", 44, 24], ["cb", 44, 40], ["fb", 72, 8], ["fb", 72, 56], ["dm", 58, 32], ["cm", 74, 24], ["am", 80, 40], ["st", 88, 30]],
        them: [["gk", 96, 32], ["cb", 88, 42], ["st", 52, 26], ["st", 53, 40]],
        ball: [81, 41],
        steps: [
          { d: 1.6, hl: { us: [1, 2] }, zone: [38, 16, 14, 32], text: ["Atacando, zagueiros perto do meio", "Attacking, centre-backs near halfway", "Atacando, centrales cerca del medio"] },
          { d: 1.4, hl: { us: [1, 2], them: [2, 3] }, text: ["De olho nos atacantes deles", "Watching their strikers", "Vigilando a sus delanteros"] },
          { d: 1.0, them: { 1: [83, 41] }, ball: [84, 41], hl: { them: [1] }, text: ["Perdeu a bola: lá vem o chutão...", "Ball lost: here comes the long ball...", "Perdió el balón: viene el pelotazo..."] },
          { d: 1.4, us: { 2: [51, 40] }, ball: [50, 40], arrows: [[84, 41, 50, 40, "ball"]], hl: { us: [2] }, text: ["...o zagueiro perto corta antes!", "...the close centre-back cuts it out!", "...¡el central cercano lo corta!"] },
        ],
      },
    },
  ],

  lateral: [
    {
      q: ["O ponta do seu time está com a bola, marcado. O que o lateral faz?", "Your winger has the ball and is marked. What does the full-back do?", "El extremo de tu equipo tiene el balón y está marcado. ¿Qué hace el lateral?"],
      opts: [
        ["Passa por fora dele para receber (ultrapassagem)", "Runs round the outside to receive (overlap)", "Pasa por fuera para recibir (desdoble)"],
        ["Fica parado atrás dele, sempre", "Always stays still behind him", "Se queda siempre quieto detrás de él"],
        ["Pede para ele chutar de longe", "Tells him to shoot from distance", "Le pide que dispare de lejos"],
      ],
      why: ["A ultrapassagem cria um 2 contra 1 pelo lado.", "The overlap creates a 2-v-1 on the flank.", "El desdoble crea un 2 contra 1 por la banda."],
      scene: {
        view: [48, -4, 58],
        us: [["w", 68, 12], ["fb", 56, 8], ["st", 86, 24]],
        them: [["fb", 73, 12], ["cb", 95, 29]],
        ball: [69, 13],
        steps: [
          { d: 1.4, hl: { us: [0], them: [0] }, text: ["Ponta marcado, sem espaço", "Winger marked, no space", "Extremo marcado, sin espacio"] },
          { d: 1.6, us: { 0: [74, 19], 1: [76, 3] }, them: { 0: [73, 17] }, ball: [75, 20], arrows: [[56, 8, 76, 3, "us"], [68, 12, 74, 19, "us"]], hl: { us: [1] }, text: ["Ele vai para dentro, o lateral por fora", "He cuts in, the full-back overlaps", "Él va adentro y el lateral pasa por fuera"] },
          { d: 1.3, us: { 1: [86, 4] }, ball: [86, 5], arrows: [[75, 20, 86, 5, "ball"]], hl: { them: [0] }, text: ["2 contra 1: o marcador não dá conta", "2 v 1: the defender can't cover both", "2 contra 1: el marcador no llega"] },
          { d: 1.5, us: { 1: [93, 6], 2: [89, 25] }, ball: [89, 25], arrows: [[93, 6, 89, 25, "ball"]], hl: { us: [2] }, text: ["Chega à linha de fundo e cruza", "Reaches the byline and crosses", "Llega a la línea de fondo y centra"] },
        ],
      },
    },
    {
      q: ["O ponta deles parte para cima de você em velocidade, no 1 contra 1. Como você defende?", "Their winger runs at you at speed, one against one. How do you defend?", "Su extremo te encara a toda velocidad, uno contra uno. ¿Cómo defiendes?"],
      opts: [
        ["Recuo de lado, sem pular no bote, levo ele para a linha lateral e roubo quando a bola escapar", "Back off side-on, don't dive in, show him down the line and win it when the ball gets away", "Retrocedo de perfil, sin tirarme, lo llevo hacia la banda y robo cuando se le escape el balón"],
        ["Dou o bote na hora, para resolver rápido", "Dive in straight away to get it over with", "Me tiro enseguida para resolverlo rápido"],
        ["Fico parado de frente, esperando ele driblar", "Stand still, square on, waiting for him to dribble", "Me quedo quieto de frente, esperando que regatee"],
      ],
      why: ["Bote apressado é drible fácil. Recuando de lado você ganha tempo para o time voltar, tira o ponta do caminho do gol e rouba na hora certa.", "Diving in makes it an easy dribble. Backing off side-on buys time for the team to recover, keeps him away from goal and lets you win it at the right moment.", "Tirarse apurado es un regate fácil. Retrocediendo de perfil ganas tiempo para que el equipo vuelva, lo alejas del arco y robas en el momento justo."],
      scene: {
        view: [4, -4, 60],
        us: [["fb", 32, 13], ["cb", 14, 28], ["dm", 44, 26]],
        them: [["w", 52, 9]],
        ball: [51, 9],
        steps: [
          { d: 1.3, them: { 0: [42, 9] }, ball: [41, 9], arrows: [[52, 9, 42, 9, "them"]], hl: { them: [0] }, text: ["Ele vem em velocidade...", "He's coming at speed...", "Viene a toda velocidad..."] },
          { d: 1.5, us: { 0: [26, 12] }, them: { 0: [33, 8] }, ball: [32, 8], arrows: [[32, 13, 26, 12, "us"]], hl: { us: [0] }, text: ["Recue de lado, sem pular no bote", "Back off side-on, don't dive in", "Retrocede de perfil, sin tirarte"] },
          { d: 1.5, us: { 0: [21, 9], 2: [28, 16] }, them: { 0: [25, 5] }, ball: [24, 4], zone: [12, 0, 26, 7], arrows: [[44, 26, 28, 16, "us"]], text: ["Leve ele para a linha lateral", "Show him down the touchline", "Llévalo hacia la banda"] },
          { d: 1.3, us: { 0: [22, 5] }, ball: [22, 6], hl: { us: [0] }, text: ["A bola escapou: agora é o bote!", "Ball got away: now win it!", "Se le escapó: ¡ahora a robar!"] },
          { d: 1.2, ball: [28, 16], arrows: [[22, 6, 28, 16, "ball"]], hl: { us: [2] }, text: ["Recuperou e sai jogando", "Won it, now play out", "Recuperó y sale jugando"] },
        ],
      },
    },
    {
      q: ["Você subiu ao ataque e o time perdeu a bola. O que faz?", "You went forward and the team lost the ball. What do you do?", "Subiste al ataque y el equipo perdió el balón. ¿Qué haces?"],
      opts: [
        ["Volto correndo para o meu lado", "Sprint back to my side", "Vuelvo corriendo a mi lado"],
        ["Fico lá na frente esperando a bola voltar", "Stay up front waiting for the ball to come back", "Me quedo arriba esperando que vuelva el balón"],
        ["Volto andando: o volante sempre cobre", "Walk back: the holding mid always covers", "Vuelvo caminando: el pivote siempre cubre"],
      ],
      why: ["Lateral bom ataca e volta. A cobertura do volante é só até você chegar.", "A good full-back attacks and gets back. The midfielder only covers until you arrive.", "Un buen lateral ataca y vuelve. La cobertura del pivote es solo hasta que llegues."],
    },
    {
      q: ["Cruzamento vindo do outro lado. Onde o lateral do lado de cá fica?", "A cross is coming from the other side. Where does the far-side full-back go?", "Viene un centro del otro lado. ¿Dónde se pone el lateral del lado contrario?"],
      opts: [
        ["Fecha no segundo pau, perto da área", "Tucks in at the far post, near the box", "Cierra en el segundo palo, cerca del área"],
        ["Fica colado na linha lateral", "Stays glued to the touchline", "Se queda pegado a la banda"],
        ["Sobe para esperar o contra-ataque", "Pushes up to wait for the counter", "Sube a esperar el contraataque"],
      ],
      why: ["Muitos gols saem no segundo pau. Alguém tem que fechar ali.", "Lots of goals come at the far post. Someone has to cover it.", "Muchos goles llegan al segundo palo. Alguien tiene que cerrar ahí."],
      scene: {
        us: [["fb", 24, 8], ["cb", 10, 28], ["cb", 10, 38]],
        them: [["", 18, 58], ["", 14, 24]],
        ball: [18, 58],
        steps: [
          { d: 1.4, us: { 0: [8, 22] }, arrows: [[24, 8, 8, 22]], hl: { us: [0] }, text: ["Fecha no segundo pau", "Tucks in at the far post", "Cierra el segundo palo"] },
          { d: 1.0, ball: [9, 22], arrows: [[18, 58, 9, 22, "ball"]], text: ["E afasta o cruzamento!", "And clears the cross!", "¡Y despeja el centro!"] },
        ],
      },
    },
  ],

  meio: [
    {
      q: ["Antes de a bola chegar, o que o meio-campista faz?", "Before the ball arrives, what does a midfielder do?", "Antes de que llegue el balón, ¿qué hace el mediocampista?"],
      opts: [
        ["Olha por cima dos ombros para ver os dois lados", "Checks over both shoulders", "Mira por encima de los hombros a los dos lados"],
        ["Olha só para a bola, para dominar bem", "Watches only the ball, to control it well", "Mira solo el balón, para controlarlo bien"],
        ["Corre até a bola o mais rápido possível", "Runs to the ball as fast as possible", "Corre hacia el balón lo más rápido posible"],
      ],
      why: ["Quem faz a leitura do jogo antes de pegar a bola recebe já sabendo para onde jogar: ganha pelo menos 1 segundo de raciocínio e de decisão.", "Reading the game before you get the ball means you know where to play: you gain at least 1 second of thinking and decision time.", "Quien lee el juego antes de recibir ya sabe a dónde jugar: gana al menos 1 segundo de razonamiento y de decisión."],
      scene: {
        us: [["dm", 30, 30], ["cm", 50, 32], ["st", 76, 26]],
        them: [["", 58, 40], ["", 62, 22]],
        ball: [30, 30],
        steps: [
          { d: 3.0, look: ["us", 1, [178, 250, 300, 360, 420, 538]], them: { 0: [55, 38] }, text: ["Olha por cima dos dois ombros", "Checks over both shoulders", "Mira por encima de los dos hombros"] },
          { d: 1.0, ball: [49, 32], arrows: [[30, 30, 49, 32, "ball"]], look: ["us", 1, [178]], text: ["Viu o espaço entre os dois", "Spots the gap between them", "Vio el hueco entre los dos"] },
          { d: 1.0, ball: [76, 26], arrows: [[49, 32, 76, 26, "ball"]], hl: { us: [2] }, text: ["Vira e joga para a frente", "Turns and plays forward", "Gira y juega hacia adelante"] },
        ],
      },
    },
    {
      q: ["Você recebe no meio e está livre para virar. O que faz?", "You receive in midfield and you're free to turn. What do you do?", "Recibes en el medio y estás libre para girar. ¿Qué haces?"],
      opts: [
        ["Viro e jogo para a frente", "Turn and play forward", "Giro y juego hacia adelante"],
        ["Devolvo para o zagueiro, por segurança", "Play it back to the centre-back, to be safe", "Devuelvo al central, por seguridad"],
        ["Seguro a bola até alguém chegar", "Hold it until someone closes me down", "Me quedo con ella hasta que alguien llegue"],
      ],
      why: ["Livre para virar? Ataque! Jogar para a frente é o que machuca o adversário.", "Free to turn? Attack! Playing forward is what hurts opponents.", "¿Libre para girar? ¡Ataca! Jugar hacia adelante es lo que daña al rival."],
      scene: {
        us: [["cb", 24, 32], ["cm", 46, 30], ["st", 74, 26]],
        them: [["", 60, 44], ["", 80, 34]],
        ball: [24, 32],
        steps: [
          { d: 1.0, ball: [45, 30], arrows: [[24, 32, 45, 30, "ball"]], text: ["Recebe livre...", "Receives free...", "Recibe libre..."] },
          { d: 1.0, ball: [74, 26], arrows: [[45, 30, 74, 26, "ball"]], hl: { us: [2] }, text: ["...vira e joga para a frente", "...turns and plays forward", "...gira y juega hacia adelante"] },
        ],
      },
    },
    {
      q: ["O time está perdendo muitas bolas no ataque. O que o meia pode fazer?", "The team keeps losing the ball in attack. What can the midfielder do?", "El equipo pierde muchos balones en ataque. ¿Qué puede hacer el mediocampista?"],
      opts: [
        ["Acalmar o jogo com passes curtos e seguros", "Calm things down with short, safe passes", "Calmar el juego con pases cortos y seguros"],
        ["Arriscar ainda mais lançamentos longos", "Try even more long balls", "Arriesgar todavía más pases largos"],
        ["Tentar resolver sozinho no drible", "Try to sort it out alone by dribbling", "Intentar resolverlo solo con regates"],
      ],
      why: ["O meio-campo controla o ritmo: às vezes acelerar, às vezes segurar a bola.", "Midfield controls the tempo: sometimes speed it up, sometimes keep the ball.", "El medio controla el ritmo: a veces acelerar, a veces guardar el balón."],
    },
    {
      q: ["Seu time perdeu a bola no meio. O que você faz primeiro?", "Your team lost the ball in midfield. What do you do first?", "Tu equipo perdió el balón en el medio. ¿Qué haces primero?"],
      opts: [
        ["Pressiono quem pegou a bola ou fecho o passe para a frente", "Press the player on the ball or block the forward pass", "Presiono a quien tiene el balón o cierro el pase hacia adelante"],
        ["Corro direto para a minha área", "Sprint straight back to my box", "Corro directo a mi área"],
        ["Espero o adversário chegar no meu setor", "Wait for the opponent to reach my zone", "Espero que el rival llegue a mi zona"],
      ],
      why: ["Reagir na hora evita o contra-ataque: ou rouba, ou faz ele jogar para trás.", "Reacting at once stops the counter: either you win it or he has to play backwards.", "Reaccionar enseguida evita el contraataque: o robas o tiene que jugar hacia atrás."],
      scene: {
        us: [["cm", 60, 28], ["dm", 50, 40]],
        them: [["", 55, 32], ["", 36, 32]],
        ball: [55, 32],
        steps: [
          { d: 1.3, us: { 0: [57, 30], 1: [46, 33] }, arrows: [[60, 28, 57, 30], [50, 40, 46, 33]], text: ["Um pressiona, o outro fecha o passe", "One presses, one blocks the pass", "Uno presiona, otro cierra el pase"] },
          { d: 0.9, ball: [66, 34], arrows: [[55, 32, 66, 34, "ball"]], text: ["Ele teve que jogar para trás", "He has to play backwards", "Tuvo que jugar hacia atrás"] },
        ],
      },
    },
  ],

  atacante: [
    {
      q: ["Cruzamento vindo da lateral. Onde o centroavante ataca?", "A cross is coming from the flank. Where does the centre-forward attack?", "Viene un centro desde la banda. ¿Dónde ataca el 9?"],
      opts: [
        ["O espaço entre os zagueiros ou o primeiro pau, chegando em movimento", "The gap between the centre-backs or the near post, arriving on the move", "El espacio entre los centrales o el primer palo, llegando en movimiento"],
        ["Fica parado na marca do pênalti esperando", "Stands still on the penalty spot waiting", "Se queda quieto en el punto penal esperando"],
        ["Fica fora da área, esperando o rebote", "Stays outside the box for the rebound", "Se queda fuera del área esperando el rebote"],
      ],
      why: ["Atacante que chega em movimento ganha do zagueiro, que está parado olhando a bola.", "A striker arriving on the move beats the defender, who is standing still watching the ball.", "El delantero que llega en movimiento le gana al central, que está quieto mirando el balón."],
      scene: {
        us: [["st", 76, 34], ["w", 88, 58]],
        them: [["", 90, 28], ["", 90, 40]],
        ball: [88, 58],
        steps: [
          { d: 1.3, us: { 0: [92, 34] }, arrows: [[76, 34, 92, 34]], zone: [88, 30, 8, 8], text: ["Ataca o espaço entre os zagueiros", "Attacks the gap between the CBs", "Ataca el hueco entre los centrales"] },
          { d: 0.8, ball: [93, 34], arrows: [[88, 58, 93, 34, "ball"]], text: ["Chega antes!", "Gets there first!", "¡Llega antes!"] },
          { d: 0.5, ball: [99, 30], text: ["Gol!", "Goal!", "¡Gol!"] },
        ],
      },
    },
    {
      q: ["Você está cara a cara com o goleiro. O que ajuda mais?", "You're one-on-one with the keeper. What helps most?", "Estás mano a mano con el portero. ¿Qué ayuda más?"],
      opts: [
        ["Olhar o goleiro e tocar colocado no canto", "Look at the keeper and place it in the corner", "Mirar al portero y colocarla en el rincón"],
        ["Chutar com toda a força, no meio do gol", "Blast it as hard as you can, down the middle", "Disparar con toda la fuerza, al medio"],
        ["Tentar sempre driblar o goleiro", "Always try to dribble round the keeper", "Intentar siempre regatear al portero"],
      ],
      why: ["Calma e precisão marcam mais gols que força. Driblar o goleiro às vezes é bom, mas não sempre.", "Calm and accuracy score more goals than power. Rounding the keeper sometimes works, not always.", "Calma y precisión hacen más goles que la fuerza. Regatear al portero a veces sirve, no siempre."],
    },
    {
      q: ["O goleiro soltou a bola depois de um chute. O que o atacante faz?", "The keeper spills a shot. What does the striker do?", "El portero soltó el balón tras un disparo. ¿Qué hace el delantero?"],
      opts: [
        ["Já estava correndo para pegar o rebote", "Was already running in for the rebound", "Ya estaba corriendo a buscar el rebote"],
        ["Para e levanta o braço pedindo escanteio", "Stops and raises an arm asking for a corner", "Se para y levanta el brazo pidiendo córner"],
        ["Espera para ver se a bola sai", "Waits to see if the ball goes out", "Espera a ver si el balón sale"],
      ],
      why: ["Muitos gols nascem de rebote. Sempre acompanhe o chute!", "Lots of goals come from rebounds. Always follow the shot!", "Muchos goles nacen de un rebote. ¡Siempre sigue el disparo!"],
    },
    {
      q: ["Seu time perdeu a bola. O que o centroavante faz?", "Your team lost the ball. What does the centre-forward do?", "Tu equipo perdió el balón. ¿Qué hace el 9?"],
      opts: [
        ["Pressiona o zagueiro com a bola, fechando o passe para o outro zagueiro", "Presses the defender on the ball, blocking the pass to the other centre-back", "Presiona al central con balón, cerrando el pase al otro central"],
        ["Volta correndo para a própria área", "Sprints back to his own box", "Vuelve corriendo a su propia área"],
        ["Fica parado esperando a próxima bola", "Stands still waiting for the next ball", "Se queda quieto esperando el próximo balón"],
      ],
      why: ["O atacante é o primeiro defensor: correndo em curva, ele pressiona e ainda fecha um passe.", "The striker is the first defender: curving his run, he presses and blocks a pass at the same time.", "El delantero es el primer defensor: corriendo en curva, presiona y además cierra un pase."],
      scene: {
        us: [["st", 70, 34]],
        them: [["", 86, 24], ["", 86, 42], ["", 96, 32]],
        ball: [86, 24],
        steps: [
          { d: 1.4, us: { 0: [83, 30] }, arrows: [[70, 34, 83, 30]], text: ["Pressiona e fecha o outro zagueiro", "Press and cut off the other CB", "Presiona y tapa al otro central"] },
          { d: 0.9, ball: [96, 32], arrows: [[86, 24, 96, 32, "ball"]], text: ["Ele teve que voltar ao goleiro", "He has to go back to the keeper", "Tuvo que volver al portero"] },
        ],
      },
    },
  ],

  bote: [
    {
      q: ["O atacante deixou a bola escapar do pé. O que você faz?", "The attacker takes a heavy touch. What do you do?", "El delantero se alarga el balón. ¿Qué haces?"],
      opts: [
        ["Dou o bote na hora!", "Tackle right away!", "¡Entro en ese momento!"],
        ["Espero ele dominar de novo", "Wait for him to control it again", "Espero que la controle de nuevo"],
        ["Recuo até a minha área", "Back off to my box", "Retrocedo hasta mi área"],
      ],
      why: ["Bola longe do pé é a melhor hora de roubar.", "A loose touch is the best moment to win the ball.", "Balón lejos del pie es el mejor momento para robar."],
    },
    {
      q: ["Como você fica para marcar um atacante com a bola?", "How do you stand to mark an attacker on the ball?", "¿Cómo te pones para marcar a un delantero con balón?"],
      opts: [
        ["De lado, com os joelhos dobrados", "Side-on, knees bent", "De perfil, con las rodillas flexionadas"],
        ["De frente, com as pernas bem abertas", "Square on, legs wide open", "De frente, con las piernas bien abiertas"],
        ["Bem em pé, com as pernas esticadas", "Standing tall, legs straight", "Bien erguido, con las piernas rectas"],
      ],
      why: ["De lado e com joelhos dobrados você reage rápido. Pernas abertas de frente viram caneta.", "Side-on with knees bent you react fast. Square with legs apart, you get nutmegged.", "De perfil y con las rodillas flexionadas reaccionas rápido. De frente y abierto, te hacen un caño."],
    },
    {
      q: ["O atacante é muito rápido e está com a bola colada. O que é melhor?", "The attacker is very fast with the ball glued to his foot. What is best?", "El delantero es muy rápido y lleva el balón pegado. ¿Qué es mejor?"],
      opts: [
        ["Acompanhar de lado e esperar o toque mais longo", "Jockey him side-on and wait for a longer touch", "Acompañarlo de perfil y esperar un toque más largo"],
        ["Dar o bote correndo de longe", "Dive in from far away", "Entrar corriendo desde lejos"],
        ["Puxar a camisa dele", "Pull his shirt", "Agarrarle la camiseta"],
      ],
      why: ["Com paciência você rouba quando ele errar. Puxar é falta e pode dar cartão.", "Be patient and win it when he slips up. Pulling is a foul and can be a card.", "Con paciencia robas cuando se equivoque. Agarrar es falta y puede ser tarjeta."],
    },
    {
      q: ["Você roubou a bola! E agora?", "You won the ball! Now what?", "¡Robaste el balón! ¿Y ahora?"],
      opts: [
        ["Levanto a cabeça e passo para um colega livre", "Look up and pass to a free teammate", "Levanto la cabeza y paso a un compañero libre"],
        ["Chuto para longe para não ter risco", "Kick it away to be safe", "La reviento lejos para no arriesgar"],
        ["Tento driblar mais um para mostrar", "Try to dribble past another to show off", "Intento regatear a otro para lucirme"],
      ],
      why: ["Roubar e já passar começa o ataque do seu time.", "Win it and pass straight away to start your team's attack.", "Robar y pasar enseguida inicia el ataque de tu equipo."],
    },
  ],
});
