const LAB_TEXT = {
  pt: {
    kicker: "Escolinha",
    title: "Formações e Posicionamentos",
    lead: "Escolha uma formação e veja como o time se organiza.",
    formation: "Formação",
    view: "Ação",
    views: { shape: "Ver a formação", zones: "Onde cada posição joga" },
    position: "Posição",
    phases: { attack: "Atacando", defend: "Defendendo" },
    soon: "em breve",
    tapHint: "Dica: toque num jogador no campo para escolher.",
    groups: { def: "Defesa", mid: "Meio", am: "Criação", att: "Ataque" },
    toggles: { lines: "Linhas", roles: "Posições", opp: "Adversário" },
    formations: {
      "4-3-3": { say: "4 defendem, 3 no meio e 3 atacam.", tip: "Os pontas ficam bem abertos, perto da linha lateral." },
      "4-4-2": { say: "4 defendem, 4 no meio e 2 atacam.", tip: "Duas linhas de 4 bem juntinhas: difícil de passar!" },
      "4-2-3-1": { say: "4 defendem, 2 protegem, 3 criam e 1 faz o gol.", tip: "O camisa 10 joga no meio, pertinho do atacante." },
      "4-2-2-2": { say: "4 defendem, 2 protegem, 2 criam e 2 atacam.", tip: "O quadrado mágico: dois volantes atrás e dois meias na frente!" },
      "3-5-2": { say: "3 defendem, 5 no meio e 2 atacam.", tip: "Os alas correm o campo todo, de uma ponta à outra!" },
    },
    roles: { gk: "GOL", rb: "LD", lb: "LE", cb: "ZAG", dm: "VOL", cm: "MC", am: "MEI", rm: "MD", lm: "ME", rw: "PD", lw: "PE", st: "ATA", wb: "ALA" },
  },
  en: {
    kicker: "Youth academy",
    title: "Formations and Positioning",
    lead: "Pick a formation and see how the team is organised.",
    formation: "Formation",
    view: "Action",
    views: { shape: "See the formation", zones: "Where each position plays" },
    position: "Position",
    phases: { attack: "Attacking", defend: "Defending" },
    soon: "coming soon",
    tapHint: "Tip: tap a player on the pitch to choose.",
    groups: { def: "Defence", mid: "Midfield", am: "Creators", att: "Attack" },
    toggles: { lines: "Lines", roles: "Positions", opp: "Opponent" },
    formations: {
      "4-3-3": { say: "4 defend, 3 in midfield and 3 attack.", tip: "The wingers stay wide, close to the touchline." },
      "4-4-2": { say: "4 defend, 4 in midfield and 2 attack.", tip: "Two tight lines of 4: hard to get through!" },
      "4-2-3-1": { say: "4 defend, 2 protect, 3 create and 1 scores.", tip: "The number 10 plays in the middle, close to the striker." },
      "4-2-2-2": { say: "4 defend, 2 protect, 2 create and 2 attack.", tip: "The magic square: two holding midfielders behind, two playmakers ahead!" },
      "3-5-2": { say: "3 defend, 5 in midfield and 2 attack.", tip: "The wing-backs run the whole pitch, end to end!" },
    },
    roles: { gk: "GK", rb: "RB", lb: "LB", cb: "CB", dm: "DM", cm: "CM", am: "AM", rm: "RM", lm: "LM", rw: "RW", lw: "LW", st: "ST", wb: "WB" },
  },
  es: {
    kicker: "Escuelita",
    title: "Formaciones y Posicionamiento",
    lead: "Elige una formación y mira cómo se organiza el equipo.",
    formation: "Formación",
    view: "Acción",
    views: { shape: "Ver la formación", zones: "Dónde juega cada posición" },
    position: "Posición",
    phases: { attack: "Atacando", defend: "Defendiendo" },
    soon: "próximamente",
    tapHint: "Consejo: toca un jugador en el campo para elegirlo.",
    groups: { def: "Defensa", mid: "Medio", am: "Creación", att: "Ataque" },
    toggles: { lines: "Líneas", roles: "Posiciones", opp: "Rival" },
    formations: {
      "4-3-3": { say: "4 defienden, 3 en el medio y 3 atacan.", tip: "Los extremos se quedan bien abiertos, cerca de la banda." },
      "4-4-2": { say: "4 defienden, 4 en el medio y 2 atacan.", tip: "Dos líneas de 4 bien juntas: ¡difícil de pasar!" },
      "4-2-3-1": { say: "4 defienden, 2 protegen, 3 crean y 1 hace el gol.", tip: "El 10 juega en el medio, cerca del delantero." },
      "4-2-2-2": { say: "4 defienden, 2 protegen, 2 crean y 2 atacan.", tip: "El cuadrado mágico: dos mediocentros atrás y dos mediapuntas adelante." },
      "3-5-2": { say: "3 defienden, 5 en el medio y 2 atacan.", tip: "¡Los carrileros corren todo el campo, de punta a punta!" },
    },
    roles: { gk: "POR", rb: "LD", lb: "LI", cb: "DFC", dm: "MCD", cm: "MC", am: "MP", rm: "MD", lm: "MI", rw: "ED", lw: "EI", st: "DC", wb: "CAR" },
  },
};

const LAB_NUMBERS = [1, 2, 3, 4, 6, 5, 8, 10, 7, 9, 11];

const LAB_FORMATIONS = {
  "4-3-3": {
    groups: ["def", "mid", "att"],
    spots: [
      [50, 5, "gk", "gk"], [84, 24, "def", "rb"], [62, 18, "def", "cb"], [38, 18, "def", "cb"], [16, 24, "def", "lb"],
      [50, 34, "mid", "dm"], [68, 46, "mid", "cm"], [32, 46, "mid", "cm"],
      [84, 68, "att", "rw"], [50, 74, "att", "st"], [16, 68, "att", "lw"],
    ],
  },
  "4-4-2": {
    groups: ["def", "mid", "att"],
    spots: [
      [50, 5, "gk", "gk"], [84, 22, "def", "rb"], [62, 18, "def", "cb"], [38, 18, "def", "cb"], [16, 22, "def", "lb"],
      [40, 40, "mid", "cm"], [60, 40, "mid", "cm"], [42, 68, "att", "st"],
      [84, 44, "mid", "rm"], [58, 70, "att", "st"], [16, 44, "mid", "lm"],
    ],
  },
  "4-2-3-1": {
    groups: ["def", "mid", "am", "att"],
    spots: [
      [50, 5, "gk", "gk"], [84, 22, "def", "rb"], [62, 18, "def", "cb"], [38, 18, "def", "cb"], [16, 22, "def", "lb"],
      [40, 34, "mid", "dm"], [60, 34, "mid", "dm"], [50, 54, "am", "am"],
      [82, 58, "am", "rw"], [50, 74, "att", "st"], [18, 58, "am", "lw"],
    ],
  },
  "4-2-2-2": {
    groups: ["def", "mid", "am", "att"],
    spots: [
      [50, 5, "gk", "gk"], [84, 22, "def", "rb"], [62, 18, "def", "cb"], [38, 18, "def", "cb"], [16, 22, "def", "lb"],
      [40, 34, "mid", "dm"], [60, 34, "mid", "dm"], [28, 54, "am", "am"],
      [72, 54, "am", "am"], [58, 74, "att", "st"], [42, 74, "att", "st"],
    ],
  },
  "3-5-2": {
    groups: ["def", "mid", "att"],
    spots: [
      [50, 5, "gk", "gk"], [90, 44, "mid", "wb"], [68, 20, "def", "cb"], [32, 20, "def", "cb"], [10, 44, "mid", "wb"],
      [50, 16, "def", "cb"], [64, 40, "mid", "cm"], [50, 54, "mid", "am"],
      [36, 40, "mid", "cm"], [58, 72, "att", "st"], [42, 72, "att", "st"],
    ],
  },
};

const LAB_OPPONENT = "4-4-2";
const LAB_GROUP_COLORS = { def: "#fde047", mid: "#67e8f9", am: "#c4b5fd", att: "#f472b6" };

// Zones use the same 0-100 coordinates as the spots: [x1, y1, x2, y2].
// Texts are [pt, en, es].
const LAB_TXT = {
  backBuild: ["Fica atrás para sair jogando e proteger o time.", "Stays back to build play and protect the team.", "Se queda atrás para salir jugando y proteger al equipo."],
  backMark: ["Marca o atacante e protege a área.", "Marks the striker and protects the box.", "Marca al delantero y protege el área."],
  fbBack: ["Volta e marca o atacante que vem pelo seu lado.", "Gets back and marks the attacker on his side.", "Vuelve y marca al atacante que viene por su lado."],
  wingHelp: ["Volta para ajudar o lateral do seu lado.", "Gets back to help the full-back.", "Vuelve para ayudar al lateral de su lado."],
  midArrive: ["Chega na frente para passar e chutar.", "Gets forward to pass and shoot.", "Llega adelante para pasar y disparar."],
  midClose: ["Volta para fechar o meio do campo.", "Gets back to close the middle.", "Vuelve para cerrar el medio."],
  pairDm: ["Protege a frente da defesa junto com o outro volante.", "Protects the defence together with the other midfielder.", "Protege delante de la defensa junto al otro mediocentro."],
  pairDmAtk: ["Fica atrás da bola, dando segurança e opção de passe.", "Stays behind the ball, giving safety and a passing option.", "Se queda detrás del balón, dando seguridad y opción de pase."],
  tenAtk: ["Joga entre as linhas, cria as jogadas e chega para chutar.", "Plays between the lines, creates and arrives to shoot.", "Juega entre líneas, crea y llega para disparar."],
  tenDef: ["Volta e marca o volante adversário.", "Gets back and marks the opposing midfielder.", "Vuelve y marca al mediocentro rival."],
  duoAtk: ["Joga perto do parceiro: um vem buscar, o outro ataca o espaço.", "Plays close to the partner: one drops, the other runs in behind.", "Juega cerca del compañero: uno baja, el otro ataca el espacio."],
  duoDef: ["Pressiona os zagueiros junto com o outro atacante.", "Presses the centre-backs with the other striker.", "Presiona a los centrales junto al otro delantero."],
  boxMidAtk: ["Joga entre o meio e a ponta, cria e passa para os atacantes.", "Plays between the middle and the wing, creates and feeds the strikers.", "Juega entre el medio y la banda, crea y asiste a los delanteros."],
  boxMidDef: ["Volta e fecha o lado, ajudando o lateral e o volante.", "Gets back and closes the side, helping the full-back and midfielder.", "Vuelve y cierra la banda, ayudando al lateral y al mediocentro."],
};

const LAB_Z = {
  gk: {
    name: ["Goleiro", "Goalkeeper", "Portero"],
    attack: { zone: [30, 0, 70, 22], spot: [50, 10], t: ["Sai um pouco do gol para ajudar a começar a jogada.", "Comes off the line a little to help start the play.", "Sale un poco del arco para ayudar a iniciar la jugada."] },
    defend: { zone: [30, 0, 70, 14], spot: [50, 5], t: ["Protege o gol e fala com o time para organizar a defesa.", "Protects the goal and talks to organise the defence.", "Protege el arco y habla para organizar la defensa."] },
  },
  rb: {
    name: ["Lateral direito", "Right-back", "Lateral derecho"],
    attack: { zone: [70, 25, 100, 85], spot: [90, 62], t: ["Sobe pelo lado direito para ajudar o ponta.", "Runs up the right side to help the winger.", "Sube por la derecha para ayudar al extremo."] },
    defend: { zone: [64, 8, 100, 45], spot: [82, 20], t: LAB_TXT.fbBack },
  },
  lb: {
    name: ["Lateral esquerdo", "Left-back", "Lateral izquierdo"],
    attack: { zone: [0, 25, 30, 85], spot: [10, 62], t: ["Sobe pelo lado esquerdo para ajudar o ponta.", "Runs up the left side to help the winger.", "Sube por la izquierda para ayudar al extremo."] },
    defend: { zone: [0, 8, 36, 45], spot: [18, 20], t: LAB_TXT.fbBack },
  },
  rcb: {
    name: ["Zagueiro direito", "Right centre-back", "Central derecho"],
    attack: { zone: [50, 14, 80, 48], spot: [64, 30], t: LAB_TXT.backBuild },
    defend: { zone: [48, 4, 78, 32], spot: [60, 16], t: LAB_TXT.backMark },
  },
  lcb: {
    name: ["Zagueiro esquerdo", "Left centre-back", "Central izquierdo"],
    attack: { zone: [20, 14, 50, 48], spot: [36, 30], t: LAB_TXT.backBuild },
    defend: { zone: [22, 4, 52, 32], spot: [40, 16], t: LAB_TXT.backMark },
  },
  rw: {
    name: ["Ponta direita", "Right winger", "Extremo derecho"],
    attack: { zone: [66, 55, 100, 100], spot: [86, 80], t: ["Joga aberto na direita, dribla e cruza.", "Stays wide on the right, dribbles and crosses.", "Juega abierto por la derecha, regatea y centra."] },
    defend: { zone: [62, 34, 96, 64], spot: [78, 48], t: LAB_TXT.wingHelp },
  },
  lw: {
    name: ["Ponta esquerda", "Left winger", "Extremo izquierdo"],
    attack: { zone: [0, 55, 34, 100], spot: [14, 80], t: ["Joga aberto na esquerda, dribla e cruza.", "Stays wide on the left, dribbles and crosses.", "Juega abierto por la izquierda, regatea y centra."] },
    defend: { zone: [4, 34, 38, 64], spot: [22, 48], t: LAB_TXT.wingHelp },
  },
  st: {
    name: ["Centroavante", "Striker", "Delantero centro"],
    attack: { zone: [30, 66, 70, 100], spot: [50, 86], t: ["Fica perto da área para fazer o gol.", "Stays near the box to score.", "Se queda cerca del área para hacer el gol."] },
    defend: { zone: [34, 48, 66, 72], spot: [50, 58], t: ["É o primeiro a marcar: pressiona os zagueiros.", "The first defender: presses the centre-backs.", "Es el primero en marcar: presiona a los centrales."] },
  },
  ldm: {
    name: ["Volante esquerdo", "Left defensive midfielder", "Mediocentro izquierdo"],
    attack: { zone: [30, 22, 54, 52], spot: [42, 40], t: LAB_TXT.pairDmAtk },
    defend: { zone: [30, 14, 54, 38], spot: [42, 28], t: LAB_TXT.pairDm },
  },
  rdm: {
    name: ["Volante direito", "Right defensive midfielder", "Mediocentro derecho"],
    attack: { zone: [46, 22, 70, 52], spot: [58, 40], t: LAB_TXT.pairDmAtk },
    defend: { zone: [46, 14, 70, 38], spot: [58, 28], t: LAB_TXT.pairDm },
  },
  ten: {
    name: ["Meia armador", "Attacking midfielder", "Mediapunta"],
    attack: { zone: [32, 50, 68, 85], spot: [50, 68], t: LAB_TXT.tenAtk },
    defend: { zone: [36, 38, 64, 60], spot: [50, 48], t: LAB_TXT.tenDef },
  },
};

const LAB_ZONES = {
  "4-3-3": {
    1: LAB_Z.gk,
    2: LAB_Z.rb,
    3: LAB_Z.rcb,
    4: LAB_Z.lcb,
    6: LAB_Z.lb,
    5: {
      name: ["Volante", "Defensive midfielder", "Mediocentro defensivo"],
      attack: { zone: [34, 26, 66, 56], spot: [50, 42], t: ["Fica no meio, sempre como opção de passe.", "Stays in the middle, always open for a pass.", "Se queda en el medio, siempre como opción de pase."] },
      defend: { zone: [34, 16, 66, 40], spot: [50, 28], t: ["Protege a frente da defesa: é o escudo do time.", "Protects the front of the defence: the team's shield.", "Protege delante de la defensa: es el escudo del equipo."] },
    },
    8: {
      name: ["Meia direito", "Right midfielder", "Interior derecho"],
      attack: { zone: [52, 36, 85, 80], spot: [66, 62], t: LAB_TXT.midArrive },
      defend: { zone: [50, 22, 82, 52], spot: [62, 38], t: LAB_TXT.midClose },
    },
    10: {
      name: ["Meia esquerdo", "Left midfielder", "Interior izquierdo"],
      attack: { zone: [15, 36, 48, 80], spot: [34, 62], t: LAB_TXT.midArrive },
      defend: { zone: [18, 22, 50, 52], spot: [38, 38], t: LAB_TXT.midClose },
    },
    7: LAB_Z.rw,
    9: LAB_Z.st,
    11: LAB_Z.lw,
  },

  "4-4-2": {
    1: LAB_Z.gk,
    2: LAB_Z.rb,
    3: LAB_Z.rcb,
    4: LAB_Z.lcb,
    6: LAB_Z.lb,
    5: {
      name: ["Volante esquerdo", "Left central midfielder", "Mediocentro izquierdo"],
      attack: { zone: [28, 26, 56, 62], spot: [42, 48], t: ["Organiza o jogo e ajuda o ataque pelo meio.", "Organises play and helps the attack through the middle.", "Organiza el juego y ayuda al ataque por el medio."] },
      defend: { zone: [28, 16, 56, 42], spot: [42, 30], t: ["Fecha o meio junto com o outro volante.", "Closes the middle together with the other midfielder.", "Cierra el medio junto al otro mediocentro."] },
    },
    8: {
      name: ["Volante direito", "Right central midfielder", "Mediocentro derecho"],
      attack: { zone: [44, 26, 72, 62], spot: [58, 48], t: ["Organiza o jogo e ajuda o ataque pelo meio.", "Organises play and helps the attack through the middle.", "Organiza el juego y ayuda al ataque por el medio."] },
      defend: { zone: [44, 16, 72, 42], spot: [58, 30], t: ["Fecha o meio junto com o outro volante.", "Closes the middle together with the other midfielder.", "Cierra el medio junto al otro mediocentro."] },
    },
    7: {
      name: ["Meia direita", "Right midfielder", "Medio derecho"],
      attack: { zone: [66, 40, 100, 92], spot: [80, 76], t: ["Corre pelo lado direito e cruza para os atacantes.", "Runs down the right and crosses to the strikers.", "Corre por la derecha y centra a los delanteros."] },
      defend: { zone: [62, 20, 96, 55], spot: [80, 36], t: ["Volta e forma a linha de 4 do meio, ajudando o lateral.", "Gets back into the midfield line of 4, helping the full-back.", "Vuelve a la línea de 4 del medio, ayudando al lateral."] },
    },
    11: {
      name: ["Meia esquerda", "Left midfielder", "Medio izquierdo"],
      attack: { zone: [0, 40, 34, 92], spot: [20, 76], t: ["Corre pelo lado esquerdo e cruza para os atacantes.", "Runs down the left and crosses to the strikers.", "Corre por la izquierda y centra a los delanteros."] },
      defend: { zone: [4, 20, 38, 55], spot: [20, 36], t: ["Volta e forma a linha de 4 do meio, ajudando o lateral.", "Gets back into the midfield line of 4, helping the full-back.", "Vuelve a la línea de 4 del medio, ayudando al lateral."] },
    },
    9: {
      name: ["Atacante direito", "Right striker", "Delantero derecho"],
      attack: { zone: [46, 62, 80, 100], spot: [58, 86], t: LAB_TXT.duoAtk },
      defend: { zone: [46, 46, 72, 68], spot: [56, 56], t: LAB_TXT.duoDef },
    },
    10: {
      name: ["Atacante esquerdo", "Left striker", "Delantero izquierdo"],
      attack: { zone: [20, 62, 54, 100], spot: [42, 82], t: LAB_TXT.duoAtk },
      defend: { zone: [28, 46, 54, 68], spot: [44, 56], t: LAB_TXT.duoDef },
    },
  },

  "4-2-3-1": {
    1: LAB_Z.gk,
    2: LAB_Z.rb,
    3: LAB_Z.rcb,
    4: LAB_Z.lcb,
    6: LAB_Z.lb,
    5: LAB_Z.ldm,
    8: LAB_Z.rdm,
    10: LAB_Z.ten,
    7: {
      ...LAB_Z.rw,
      defend: { zone: [62, 30, 96, 60], spot: [78, 44], t: LAB_TXT.wingHelp },
    },
    9: {
      ...LAB_Z.st,
      defend: { zone: [34, 52, 66, 76], spot: [50, 62], t: LAB_Z.st.defend.t },
    },
    11: {
      ...LAB_Z.lw,
      defend: { zone: [4, 30, 38, 60], spot: [22, 44], t: LAB_TXT.wingHelp },
    },
  },

  "4-2-2-2": {
    1: LAB_Z.gk,
    2: {
      ...LAB_Z.rb,
      attack: { zone: [70, 25, 100, 92], spot: [90, 70], t: ["Sem ponta na frente: o lado direito é todo seu! Sobe e cruza.", "No winger ahead: the right side is all yours! Get forward and cross.", "Sin extremo adelante: ¡la banda derecha es toda tuya! Sube y centra."] },
    },
    3: LAB_Z.rcb,
    4: LAB_Z.lcb,
    6: {
      ...LAB_Z.lb,
      attack: { zone: [0, 25, 30, 92], spot: [10, 70], t: ["Sem ponta na frente: o lado esquerdo é todo seu! Sobe e cruza.", "No winger ahead: the left side is all yours! Get forward and cross.", "Sin extremo adelante: ¡la banda izquierda es toda tuya! Sube y centra."] },
    },
    5: LAB_Z.ldm,
    8: LAB_Z.rdm,
    7: {
      name: ["Meia direita", "Right attacking midfielder", "Mediapunta derecho"],
      attack: { zone: [54, 44, 88, 84], spot: [70, 66], t: LAB_TXT.boxMidAtk },
      defend: { zone: [52, 28, 86, 56], spot: [68, 42], t: LAB_TXT.boxMidDef },
    },
    10: {
      name: ["Meia esquerda", "Left attacking midfielder", "Mediapunta izquierdo"],
      attack: { zone: [12, 44, 46, 84], spot: [30, 66], t: LAB_TXT.boxMidAtk },
      defend: { zone: [14, 28, 48, 56], spot: [32, 42], t: LAB_TXT.boxMidDef },
    },
    9: {
      name: ["Atacante direito", "Right striker", "Delantero derecho"],
      attack: { zone: [46, 64, 80, 100], spot: [60, 86], t: LAB_TXT.duoAtk },
      defend: { zone: [46, 48, 72, 70], spot: [58, 58], t: LAB_TXT.duoDef },
    },
    11: {
      name: ["Atacante esquerdo", "Left striker", "Delantero izquierdo"],
      attack: { zone: [20, 64, 54, 100], spot: [40, 86], t: LAB_TXT.duoAtk },
      defend: { zone: [28, 48, 54, 70], spot: [42, 58], t: LAB_TXT.duoDef },
    },
  },

  "3-5-2": {
    1: LAB_Z.gk,
    3: {
      name: ["Zagueiro direito", "Right centre-back", "Central derecho"],
      attack: { zone: [56, 12, 86, 46], spot: [70, 30], t: ["Abre pela direita para sair jogando.", "Moves wide on the right to build play.", "Se abre por la derecha para salir jugando."] },
      defend: { zone: [54, 4, 84, 34], spot: [66, 18], t: ["Marca o atacante que cai pelo seu lado.", "Marks the striker who drifts to his side.", "Marca al delantero que cae por su lado."] },
    },
    5: {
      name: ["Zagueiro central", "Central centre-back", "Central del medio"],
      attack: { zone: [36, 8, 64, 36], spot: [50, 22], t: ["É o último homem: fica atrás protegendo o time.", "The last man: stays back protecting the team.", "Es el último hombre: se queda atrás protegiendo al equipo."] },
      defend: { zone: [38, 2, 62, 26], spot: [50, 12], t: ["Comanda a defesa e protege o meio da área.", "Leads the defence and protects the middle of the box.", "Dirige la defensa y protege el centro del área."] },
    },
    4: {
      name: ["Zagueiro esquerdo", "Left centre-back", "Central izquierdo"],
      attack: { zone: [14, 12, 44, 46], spot: [30, 30], t: ["Abre pela esquerda para sair jogando.", "Moves wide on the left to build play.", "Se abre por la izquierda para salir jugando."] },
      defend: { zone: [16, 4, 46, 34], spot: [34, 18], t: ["Marca o atacante que cai pelo seu lado.", "Marks the striker who drifts to his side.", "Marca al delantero que cae por su lado."] },
    },
    2: {
      name: ["Ala direito", "Right wing-back", "Carrilero derecho"],
      attack: { zone: [72, 20, 100, 96], spot: [92, 74], t: ["Corre o lado direito inteiro e cruza para a área.", "Runs the whole right side and crosses into the box.", "Recorre toda la banda derecha y centra al área."] },
      defend: { zone: [66, 4, 100, 50], spot: [86, 20], t: ["Volta e forma uma linha de 5 com os zagueiros.", "Gets back to form a line of 5 with the centre-backs.", "Vuelve y forma una línea de 5 con los centrales."] },
    },
    6: {
      name: ["Ala esquerdo", "Left wing-back", "Carrilero izquierdo"],
      attack: { zone: [0, 20, 28, 96], spot: [8, 74], t: ["Corre o lado esquerdo inteiro e cruza para a área.", "Runs the whole left side and crosses into the box.", "Recorre toda la banda izquierda y centra al área."] },
      defend: { zone: [0, 4, 34, 50], spot: [14, 20], t: ["Volta e forma uma linha de 5 com os zagueiros.", "Gets back to form a line of 5 with the centre-backs.", "Vuelve y forma una línea de 5 con los centrales."] },
    },
    8: {
      name: ["Meia direito", "Right midfielder", "Interior derecho"],
      attack: { zone: [52, 30, 82, 72], spot: [66, 54], t: LAB_TXT.midArrive },
      defend: { zone: [50, 20, 80, 50], spot: [62, 34], t: LAB_TXT.midClose },
    },
    7: {
      name: ["Meia esquerdo", "Left midfielder", "Interior izquierdo"],
      attack: { zone: [18, 30, 48, 72], spot: [34, 54], t: LAB_TXT.midArrive },
      defend: { zone: [20, 20, 50, 50], spot: [38, 34], t: LAB_TXT.midClose },
    },
    10: {
      ...LAB_Z.ten,
      attack: { zone: [34, 48, 66, 84], spot: [50, 68], t: LAB_TXT.tenAtk },
      defend: { zone: [36, 36, 64, 58], spot: [50, 46], t: LAB_TXT.tenDef },
    },
    9: {
      name: ["Atacante direito", "Right striker", "Delantero derecho"],
      attack: { zone: [46, 64, 80, 100], spot: [60, 86], t: LAB_TXT.duoAtk },
      defend: { zone: [46, 48, 72, 70], spot: [58, 58], t: LAB_TXT.duoDef },
    },
    11: {
      name: ["Atacante esquerdo", "Left striker", "Delantero izquierdo"],
      attack: { zone: [20, 64, 54, 100], spot: [40, 86], t: LAB_TXT.duoAtk },
      defend: { zone: [28, 48, 54, 70], spot: [42, 58], t: LAB_TXT.duoDef },
    },
  },
};

function renderTacticsLab() {
  const root = document.getElementById("lab");
  if (!root) return;

  const W = 68;
  const H = 105;
  const NS = "http://www.w3.org/2000/svg";
  const state = {
    formation: "4-3-3",
    view: "shape",
    selected: 2,
    phase: "attack",
    lines: true,
    roles: false,
    opp: false,
    run: 0,
  };

  const langIndex = () => ({ pt: 0, en: 1, es: 2 })[I18N.lang] ?? 0;
  const txt = () => LAB_TEXT[I18N.lang] || LAB_TEXT.pt;
  const zones = () => LAB_ZONES[state.formation];

  const svgEl = (tag, attrs = {}, parent) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
  };
  const toSvg = (x, y) => [(x / 100) * W, H - (y / 100) * H];

  root.innerHTML = `
    <section class="page-hero lab-hero">
      <div class="wrap">
        <p class="hero-kicker" data-lab="kicker"></p>
        <h1 class="page-title" data-lab="title"></h1>
        <p class="lead" data-lab="lead"></p>
      </div>
    </section>
    <section class="lab-section">
      <div class="wrap lab-grid">
        <div class="lab-stage">
          <div class="lab-toolbar">
            <label><span data-lab="formation"></span><select data-select="formation"></select></label>
            <label><span data-lab="view"></span><select data-select="view"></select></label>
          </div>
          <div class="lab-toolbar lab-zone-tools" hidden>
            <label><span data-lab="position"></span><select data-select="position"></select></label>
            <div class="lab-phase" role="group">
              <button type="button" data-phase="attack"></button>
              <button type="button" data-phase="defend"></button>
            </div>
          </div>
          <div class="lab-field"></div>
          <div class="lab-caption" hidden>
            <span class="lab-caption-title"></span>
            <p class="lab-caption-text"></p>
            <small class="lab-caption-hint" data-lab="tapHint"></small>
          </div>
        </div>
        <aside class="lab-panel">
          <div class="lab-counts"></div>
          <p class="lab-say"></p>
          <p class="lab-tip"></p>
          <div class="lab-toggles">
            <button type="button" data-toggle="lines"></button>
            <button type="button" data-toggle="roles"></button>
            <button type="button" data-toggle="opp"></button>
          </div>
        </aside>
      </div>
    </section>
  `;

  const svg = svgEl("svg", { viewBox: `-3 -4 ${W + 6} ${H + 8}`, class: "lab-svg", role: "img" });
  root.querySelector(".lab-field").appendChild(svg);

  for (let i = 0; i < 10; i++) {
    svgEl("rect", { x: 0, y: (H / 10) * i, width: W, height: H / 10, fill: i % 2 ? "#2f8a3e" : "#348f43" }, svg);
  }
  const pitch = svgEl("g", { fill: "none", stroke: "rgba(255,255,255,0.85)", "stroke-width": 0.35 }, svg);
  svgEl("rect", { x: 0, y: 0, width: W, height: H }, pitch);
  svgEl("line", { x1: 0, y1: H / 2, x2: W, y2: H / 2 }, pitch);
  svgEl("circle", { cx: W / 2, cy: H / 2, r: 9.15 }, pitch);
  svgEl("rect", { x: 13.84, y: 0, width: 40.32, height: 16.5 }, pitch);
  svgEl("rect", { x: 13.84, y: H - 16.5, width: 40.32, height: 16.5 }, pitch);
  svgEl("rect", { x: 24.84, y: 0, width: 18.32, height: 5.5 }, pitch);
  svgEl("rect", { x: 24.84, y: H - 5.5, width: 18.32, height: 5.5 }, pitch);
  svgEl("rect", { x: 30.34, y: -2, width: 7.32, height: 2 }, pitch);
  svgEl("rect", { x: 30.34, y: H, width: 7.32, height: 2 }, pitch);
  const marks = svgEl("g", { fill: "rgba(255,255,255,0.85)" }, svg);
  svgEl("circle", { cx: W / 2, cy: H / 2, r: 0.5 }, marks);
  svgEl("circle", { cx: W / 2, cy: 11, r: 0.4 }, marks);
  svgEl("circle", { cx: W / 2, cy: H - 11, r: 0.4 }, marks);

  const zoneLayer = svgEl("g", {}, svg);
  const lineLayer = svgEl("g", { class: "lab-lines" }, svg);
  const oppLayer = svgEl("g", { class: "lab-opp" }, svg);
  const homeLayer = svgEl("g", {}, svg);

  function makeTeam(layer, color, gkColor, clickable) {
    return LAB_NUMBERS.map((num, i) => {
      const g = svgEl("g", { class: "lab-player" }, layer);
      if (clickable) g.dataset.num = num;
      svgEl("circle", { r: 2.7, fill: i === 0 ? gkColor : color, stroke: "#fff", "stroke-width": 0.4 }, g);
      const label = svgEl("text", { "text-anchor": "middle", "dominant-baseline": "central", fill: "#fff" }, g);
      return { num, g, label, x: 50, y: 42, role: "", group: "" };
    });
  }

  const home = makeTeam(homeLayer, "#2563eb", "#f97316", true);
  const opp = makeTeam(oppLayer, "#dc2626", "#1f2937", false);

  LAB_FORMATIONS[LAB_OPPONENT].spots.forEach((s, i) => {
    opp[i].x = 100 - s[0];
    opp[i].y = 100 - s[1];
    opp[i].role = s[3];
  });

  function homeTargets() {
    if (state.view === "zones" && zones()) {
      return home.map((p) => zones()[p.num][state.phase].spot);
    }
    return LAB_FORMATIONS[state.formation].spots.map((s) => [s[0], s[1]]);
  }

  function draw() {
    const roles = txt().roles;
    const zoneMode = state.view === "zones" && zones();
    for (const team of [home, opp]) {
      for (const p of team) {
        const [sx, sy] = toSvg(p.x, p.y);
        p.g.setAttribute("transform", `translate(${sx.toFixed(2)} ${sy.toFixed(2)})`);
        const text = state.roles ? roles[p.role] || "" : String(p.num);
        if (p.label.textContent !== text) p.label.textContent = text;
        p.label.setAttribute("font-size", state.roles ? 1.75 : 2.5);
      }
    }
    for (const p of home) {
      p.g.classList.toggle("is-selected", !!zoneMode && p.num === state.selected);
      p.g.classList.toggle("is-dim", !!zoneMode && p.num !== state.selected);
    }

    lineLayer.innerHTML = "";
    if (!state.lines || zoneMode) return;
    for (const group of LAB_FORMATIONS[state.formation].groups) {
      const pts = home
        .filter((p) => p.group === group)
        .sort((a, b) => a.x - b.x)
        .map((p) => toSvg(p.x, p.y).map((v) => v.toFixed(2)).join(","));
      if (pts.length > 1) {
        svgEl("polyline", { points: pts.join(" "), stroke: LAB_GROUP_COLORS[group] }, lineLayer);
      }
    }
  }

  function drawZone() {
    zoneLayer.innerHTML = "";
    if (state.view !== "zones" || !zones()) return;
    const [x1, y1, x2, y2] = zones()[state.selected][state.phase].zone;
    const [ax, ay] = toSvg(x1, y2);
    const [bx, by] = toSvg(x2, y1);
    svgEl(
      "rect",
      {
        x: ax.toFixed(2),
        y: ay.toFixed(2),
        width: (bx - ax).toFixed(2),
        height: (by - ay).toFixed(2),
        rx: 3,
        class: `lab-zone is-${state.phase}`,
      },
      zoneLayer
    );
  }

  function animate(targets, ms = 900, stagger = 0) {
    const run = ++state.run;
    const from = home.map((p) => ({ x: p.x, y: p.y }));
    const t0 = performance.now();
    const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

    function frame(now) {
      if (run !== state.run) return;
      let done = true;
      home.forEach((p, i) => {
        const k = Math.min(1, Math.max(0, (now - t0 - i * stagger) / ms));
        if (k < 1) done = false;
        const e = ease(k);
        p.x = from[i].x + (targets[i][0] - from[i].x) * e;
        p.y = from[i].y + (targets[i][1] - from[i].y) * e;
      });
      draw();
      if (!done) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function refresh(stagger = 0) {
    drawZone();
    updateTexts();
    animate(homeTargets(), 900, stagger);
  }

  function updateTexts() {
    const t = txt();
    const li = langIndex();
    const zoneMode = state.view === "zones" && zones();

    root.querySelectorAll("[data-lab]").forEach((el) => {
      el.textContent = t[el.dataset.lab];
    });

    root.querySelector('[data-select="formation"]').innerHTML = Object.keys(LAB_FORMATIONS)
      .map((n) => `<option value="${n}" ${n === state.formation ? "selected" : ""}>${n}</option>`)
      .join("");

    root.querySelector('[data-select="view"]').innerHTML = Object.keys(t.views)
      .map((v) => {
        const disabled = v === "zones" && !zones();
        const label = disabled ? `${t.views[v]} (${t.soon})` : t.views[v];
        return `<option value="${v}" ${v === state.view ? "selected" : ""} ${disabled ? "disabled" : ""}>${label}</option>`;
      })
      .join("");

    root.querySelector(".lab-zone-tools").hidden = !zoneMode;
    root.querySelector(".lab-caption").hidden = !zoneMode;

    if (zoneMode) {
      root.querySelector('[data-select="position"]').innerHTML = LAB_NUMBERS.map(
        (n) => `<option value="${n}" ${n === state.selected ? "selected" : ""}>${n} · ${zones()[n].name[li]}</option>`
      ).join("");
      root.querySelectorAll("[data-phase]").forEach((b) => {
        b.textContent = t.phases[b.dataset.phase];
        b.classList.toggle("is-on", b.dataset.phase === state.phase);
        b.classList.toggle(`is-${b.dataset.phase}`, true);
      });
      const z = zones()[state.selected];
      root.querySelector(".lab-caption-title").textContent = `${z.name[li]} · ${t.phases[state.phase]}`;
      root.querySelector(".lab-caption").className = `lab-caption is-${state.phase}`;
      root.querySelector(".lab-caption-text").textContent = z[state.phase].t[li];
    }

    const f = LAB_FORMATIONS[state.formation];
    const counts = state.formation.split("-");
    root.querySelector(".lab-counts").innerHTML = f.groups
      .map(
        (g, i) => `
        <div class="lab-count" style="--c:${LAB_GROUP_COLORS[g]}">
          <strong>${counts[i]}</strong><span>${t.groups[g]}</span>
        </div>`
      )
      .join("");

    root.querySelector(".lab-say").textContent = t.formations[state.formation].say;
    root.querySelector(".lab-tip").textContent = t.formations[state.formation].tip;

    root.querySelectorAll("[data-toggle]").forEach((b) => {
      const key = b.dataset.toggle;
      b.textContent = t.toggles[key];
      b.setAttribute("aria-pressed", state[key]);
      b.classList.toggle("is-on", state[key]);
    });

    oppLayer.classList.toggle("is-visible", state.opp && !zoneMode);
    draw();
  }

  function setFormation(name) {
    state.formation = name;
    if (!zones()) state.view = "shape";
    LAB_FORMATIONS[name].spots.forEach((s, i) => {
      home[i].group = s[2];
      home[i].role = s[3];
    });
    refresh(35);
  }

  root.addEventListener("change", (e) => {
    const sel = e.target.closest("[data-select]");
    if (!sel) return;
    if (sel.dataset.select === "formation") setFormation(sel.value);
    if (sel.dataset.select === "view") {
      state.view = sel.value;
      refresh();
    }
    if (sel.dataset.select === "position") {
      state.selected = Number(sel.value);
      drawZone();
      updateTexts();
    }
  });

  root.addEventListener("click", (e) => {
    const phase = e.target.closest("[data-phase]");
    if (phase && phase.dataset.phase !== state.phase) {
      state.phase = phase.dataset.phase;
      refresh();
    }

    const player = e.target.closest(".lab-player[data-num]");
    if (player && state.view === "zones" && zones()) {
      state.selected = Number(player.dataset.num);
      drawZone();
      updateTexts();
    }

    const toggle = e.target.closest("[data-toggle]");
    if (toggle) {
      const key = toggle.dataset.toggle;
      state[key] = !state[key];
      updateTexts();
    }
  });

  document.addEventListener("rs:lang", updateTexts);
  setFormation(state.formation);
}
