/* Grupo Mental, segunda parte: psicologia do esporte com a Turma da Cabeça
   (rotinas, energia, atenção, metas, time, motivação, descanso e lesões). */

CQ_MISSIONS.push(
  {
    id: "rotina", type: "quiz", quiz: "menteRotina", icon: "🔁", subs: ["composure", "concentration"], tiers: [1, 2, 3],
    title: ["Rotina do campeão", "Champion's routine", "Rutina de campeón"],
    desc: ["Craques repetem rotinas antes dos lances e usam um 'botão de reset' depois do erro. 3 perguntas.", "Great players repeat routines before set pieces and use a 'reset button' after mistakes. 3 questions.", "Los cracks repiten rutinas antes de las jugadas y usan un 'botón de reinicio' después del error. 3 preguntas."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "termometro", type: "quiz", quiz: "menteTermometro", icon: "🌡️", subs: ["composure", "courage"], tiers: [1, 2, 3],
    title: ["Termômetro da energia", "Energy thermometer", "Termómetro de la energía"],
    desc: ["Nem frio demais, nem quente demais: existe uma zona ideal para jogar. 3 perguntas sobre ligar e acalmar o corpo.", "Not too cold, not too hot: there's an ideal zone to play in. 3 questions about pumping up and calming down.", "Ni muy frío ni muy caliente: hay una zona ideal para jugar. 3 preguntas sobre activarse y calmarse."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "lanterna", type: "quiz", quiz: "menteLanterna", icon: "💡", subs: ["concentration", "composure"], tiers: [1, 2, 3],
    title: ["Lanterna da atenção", "The attention torch", "La linterna de la atención"],
    desc: ["A atenção é uma lanterna: abre para ler o jogo e fecha para finalizar. 3 perguntas sobre foco e distrações.", "Attention is a torch: it widens to read the game and narrows to finish. 3 questions about focus and distractions.", "La atención es una linterna: se abre para leer el juego y se cierra para definir. 3 preguntas sobre foco y distracciones."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "metas", type: "quiz", quiz: "menteMetas", icon: "🗺️", subs: ["discipline", "confidence"], tiers: [1, 2, 3],
    title: ["Metas de craque", "Goals like a pro", "Metas de crack"],
    desc: ["Sonho grande, degraus pequenos. 3 perguntas sobre criar e cumprir metas.", "Big dream, small steps. 3 questions about setting and reaching goals.", "Sueño grande, escalones pequeños. 3 preguntas sobre crear y cumplir metas."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "timeunido", type: "quiz", quiz: "menteTime", icon: "🤝", subs: ["fairplay", "confidence"], tiers: [1, 2, 3],
    title: ["Time unido", "United team", "Equipo unido"],
    desc: ["Ninguém ganha sozinho. 3 perguntas sobre falar em campo, liderança e espírito de equipe.", "Nobody wins alone. 3 questions about talking on the pitch, leadership and team spirit.", "Nadie gana solo. 3 preguntas sobre hablar en la cancha, liderazgo y espíritu de equipo."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "porque", type: "quiz", quiz: "mentePorque", icon: "❤️", subs: ["resilience", "confidence"], tiers: [1, 2, 3],
    title: ["Por que eu jogo?", "Why do I play?", "¿Por qué juego?"],
    desc: ["O amor pela bola é o combustível que não acaba. 3 perguntas sobre diversão, pressão e comparação.", "Love for the ball is the fuel that never runs out. 3 questions about fun, pressure and comparison.", "El amor por el balón es el combustible que no se acaba. 3 preguntas sobre diversión, presión y comparación."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "descanso", type: "quiz", quiz: "menteDescanso", icon: "😴", subs: ["discipline", "concentration"], tiers: [1, 2, 3],
    title: ["Corpo e mente descansados", "Rested body and mind", "Cuerpo y mente descansados"],
    desc: ["Dormir, comer e beber água também são treino. 3 perguntas sobre recuperação.", "Sleeping, eating and drinking water are training too. 3 questions about recovery.", "Dormir, comer y tomar agua también es entrenar. 3 preguntas sobre recuperación."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "lesao", type: "quiz", quiz: "menteLesao", icon: "🩹", subs: ["resilience", "discipline"], tiers: [1, 2, 3],
    title: ["Lesão e volta por cima", "Injury and comeback", "Lesión y revancha"],
    desc: ["Toda carreira tem lesões. 3 perguntas sobre cuidar do corpo, ter paciência e voltar mais forte.", "Every career has injuries. 3 questions about looking after your body, being patient and coming back stronger.", "Toda carrera tiene lesiones. 3 preguntas sobre cuidar el cuerpo, tener paciencia y volver más fuerte."],
    unit: CQ_UNIT_HITS,
  },

  // Práticas
  {
    id: "grade", type: "mind", icon: "🧩", subs: ["concentration"], tiers: [90, 60, 45, 35], lower: true, max: 600, grid: { size: 5 },
    title: ["Grade de concentração", "Concentration grid", "Cuadrícula de concentración"],
    desc: ["Toque os números de 1 a 25, em ordem, o mais rápido que conseguir. Quanto menos segundos, melhor!", "Tap the numbers from 1 to 25, in order, as fast as you can. The fewer seconds, the better!", "Toca los números del 1 al 25, en orden, lo más rápido que puedas. ¡Cuantos menos segundos, mejor!"],
    steps: [
      ["Aperte Iniciar: os números aparecem embaralhados.", "Press Start: the numbers appear shuffled.", "Pulsa Iniciar: los números aparecen mezclados."],
      ["Ache o 1, depois o 2, o 3... até o 25. Errou o número? Ele treme e você continua.", "Find 1, then 2, 3... up to 25. Wrong number? It shakes and you carry on.", "Encuentra el 1, después el 2, el 3... hasta el 25. ¿Número equivocado? Tiembla y sigues."],
      ["Ao terminar, o tempo já vai para o resultado. É só salvar.", "When you finish, your time is filled in. Just save it.", "Al terminar, el tiempo ya pasa al resultado. Solo guárdalo."],
    ],
    unit: ["segundos", "seconds", "segundos"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "zumzum", "pulinho"],
      steps: [
        { d: 2.4, say: ["zumzum", ["Rápido! Rápido! Cadê o 7?!", "Quick! Quick! Where's 7?!", "¡Rápido! ¡Rápido! ¿Dónde está el 7?"]], mood: { zumzum: "big" }, text: ["A pressa embaralha a vista", "Rushing scrambles your eyes", "La prisa nubla la vista"] },
        { d: 2.6, mood: { zumzum: "small" }, say: ["capitao", ["Calma: lanterna aberta... achei o 7!", "Easy: torch wide... found 7!", "Calma: linterna abierta... ¡encontré el 7!"]], cloud: ["1, 2, 3...", "1, 2, 3...", "1, 2, 3..."], text: ["Foco calmo é foco rápido", "Calm focus is fast focus", "Foco tranquilo es foco rápido"] },
      ],
    },
  },
  {
    id: "gradeinversa", type: "mind", icon: "🔽", subs: ["concentration"], tiers: [90, 60, 45, 35], lower: true, max: 600, grid: { size: 5, order: "down" },
    title: ["Grade de trás para frente", "Backwards grid", "Cuadrícula al revés"],
    desc: ["Agora ao contrário: toque do 25 até o 1, em ordem. Quanto menos segundos, melhor!", "Now the other way round: tap from 25 down to 1, in order. The fewer seconds, the better!", "Ahora al revés: toca del 25 al 1, en orden. ¡Cuantos menos segundos, mejor!"],
    steps: [
      ["Aperte Iniciar: os números aparecem embaralhados.", "Press Start: the numbers appear shuffled.", "Pulsa Iniciar: los números aparecen mezclados."],
      ["Ache o 25, depois o 24, o 23... até o 1.", "Find 25, then 24, 23... down to 1.", "Encuentra el 25, después el 24, el 23... hasta el 1."],
      ["A cabeça quer ir no automático: segure e confira cada número.", "Your head wants to go on autopilot: hold back and check each number.", "La cabeza quiere ir en automático: frénala y revisa cada número."],
    ],
    unit: ["segundos", "seconds", "segundos"],
  },
  {
    id: "gradeduo", type: "mind", icon: "🔵", subs: ["concentration", "reading"], tiers: [120, 90, 70, 55], lower: true, max: 600, grid: { size: 5, order: "duo" },
    title: ["Grade de duas cores", "Two-colour grid", "Cuadrícula de dos colores"],
    desc: ["Alterne as cores: azul 1, vermelho 1, azul 2, vermelho 2... até o fim. Quanto menos segundos, melhor!", "Alternate colours: blue 1, red 1, blue 2, red 2... to the end. The fewer seconds, the better!", "Alterna colores: azul 1, rojo 1, azul 2, rojo 2... hasta el final. ¡Cuantos menos segundos, mejor!"],
    steps: [
      ["Os números azuis vão de 1 a 13; os vermelhos, de 1 a 12.", "Blue numbers go from 1 to 13; red ones from 1 to 12.", "Los números azules van del 1 al 13; los rojos, del 1 al 12."],
      ["Sempre alternando: azul, vermelho, azul, vermelho...", "Always alternating: blue, red, blue, red...", "Siempre alternando: azul, rojo, azul, rojo..."],
      ["No jogo é igual: trocar o foco rápido entre a bola, o colega e o adversário.", "It's like the game: switching focus fast between the ball, a teammate and an opponent.", "Es como en el partido: cambiar el foco rápido entre el balón, el compañero y el rival."],
    ],
    unit: ["segundos", "seconds", "segundos"],
  },
  {
    id: "gradezum", type: "mind", icon: "🐝", subs: ["concentration", "composure"], tiers: [90, 60, 45, 35], lower: true, max: 600, grid: { size: 5, noise: true },
    title: ["Grade com o Zum-Zum", "Grid with Buzz", "Cuadrícula con Zum-Zum"],
    desc: ["De 1 a 25, mas o Zum-Zum fica gritando na tela para te distrair. Quanto menos segundos, melhor!", "From 1 to 25, but Buzz keeps shouting on screen to distract you. The fewer seconds, the better!", "Del 1 al 25, pero Zum-Zum grita en la pantalla para distraerte. ¡Cuantos menos segundos, mejor!"],
    steps: [
      ["Aperte Iniciar e ache os números em ordem.", "Press Start and find the numbers in order.", "Pulsa Iniciar y encuentra los números en orden."],
      ["Vão aparecer frases tipo 'Rápido!' e 'Olha o placar!'. Deixe passar, como nuvens.", "Phrases like 'Hurry!' and 'Check the score!' will pop up. Let them pass, like clouds.", "Aparecerán frases como '¡Rápido!' y '¡Mira el marcador!'. Déjalas pasar, como nubes."],
      ["É o treino de jogar com a torcida gritando.", "It's practice for playing with the crowd shouting.", "Es el entrenamiento para jugar con la hinchada gritando."],
    ],
    unit: ["segundos", "seconds", "segundos"],
  },
  {
    id: "grade6", type: "mind", icon: "🧠", subs: ["concentration"], tiers: [150, 110, 85, 70], lower: true, max: 900, grid: { size: 6 },
    title: ["Grade gigante", "Giant grid", "Cuadrícula gigante"],
    desc: ["Agora são 36 números: toque do 1 ao 36, em ordem. Quanto menos segundos, melhor!", "Now there are 36 numbers: tap from 1 to 36, in order. The fewer seconds, the better!", "Ahora son 36 números: toca del 1 al 36, en orden. ¡Cuantos menos segundos, mejor!"],
    steps: [
      ["Aperte Iniciar: 36 números embaralhados.", "Press Start: 36 shuffled numbers.", "Pulsa Iniciar: 36 números mezclados."],
      ["Use a lanterna aberta: olhe a grade toda, não só um cantinho.", "Use a wide torch: scan the whole grid, not just one corner.", "Usa la linterna abierta: mira toda la cuadrícula, no solo una esquina."],
      ["Ao terminar, o tempo vai direto para o resultado.", "When you finish, the time goes straight into the result.", "Al terminar, el tiempo pasa directo al resultado."],
    ],
    unit: ["segundos", "seconds", "segundos"],
  },
  {
    id: "chuva", type: "mind", icon: "🌈", subs: ["decision", "reactions", "concentration"], tiers: [20, 40, 60, 80], max: 400, rain: { secs: 120, turbo: 60, mode: "only" },
    title: ["Chuva de cores", "Colour rain", "Lluvia de colores"],
    desc: ["Bolas caem do céu: toque só nas da cor que aparece em cima. A cor muda toda hora! Acerto vale +1, erro vale -1.", "Balls fall from the sky: tap only the ones in the colour shown at the top. The colour keeps changing! Right is +1, wrong is -1.", "Caen balones del cielo: toca solo los del color que aparece arriba. ¡El color cambia todo el tiempo! Acierto +1, error -1."],
    steps: [
      ["Aperte Iniciar: são 2 minutos, e o último é TURBO, bem mais rápido!", "Press Start: it lasts 2 minutes, and the last one is TURBO, much faster!", "Pulsa Iniciar: son 2 minutos, ¡y el último es TURBO, mucho más rápido!"],
      ["Olhe a regra em cima. Quando ela piscar, a cor mudou!", "Watch the rule at the top. When it flashes, the colour changed!", "Mira la regla arriba. ¡Cuando parpadea, cambió el color!"],
      ["Bola errada tira ponto: pense rápido, mas pense.", "A wrong ball costs a point: think fast, but think.", "Un balón equivocado resta: piensa rápido, pero piensa."],
    ],
    unit: ["pontos", "points", "puntos"],
  },
  {
    id: "chuvanao", type: "mind", icon: "🚫", subs: ["decision", "reactions", "concentration"], tiers: [30, 60, 90, 120], max: 400, rain: { secs: 120, turbo: 60, mode: "avoid" },
    title: ["Não toque!", "Don't touch!", "¡No toques!"],
    desc: ["Agora é ao contrário: toque em todas as bolas, menos na cor proibida. Acerto vale +1, erro vale -1.", "Now it's the opposite: tap every ball except the forbidden colour. Right is +1, wrong is -1.", "Ahora es al revés: toca todos los balones, menos el color prohibido. Acierto +1, error -1."],
    steps: [
      ["Aperte Iniciar: são 2 minutos, e o último é TURBO, bem mais rápido!", "Press Start: it lasts 2 minutes, and the last one is TURBO, much faster!", "Pulsa Iniciar: son 2 minutos, ¡y el último es TURBO, mucho más rápido!"],
      ["O dedo vai querer tocar em tudo. Segure quando vier a cor proibida!", "Your finger will want to tap everything. Hold back for the forbidden colour!", "El dedo va a querer tocar todo. ¡Frénalo con el color prohibido!"],
      ["É como não dar o bote na finta do atacante: controlar o impulso.", "It's like not diving in at a striker's feint: controlling the impulse.", "Es como no tirarse ante el amague del delantero: controlar el impulso."],
    ],
    unit: ["pontos", "points", "puntos"],
  },
  {
    id: "chuvaconfusa", type: "mind", icon: "🎨", subs: ["decision", "reactions", "concentration"], tiers: [15, 30, 45, 60], max: 400, rain: { secs: 120, turbo: 60, mode: "stroop" },
    title: ["Chuva confusa", "Tricky rain", "Lluvia confusa"],
    desc: ["O nome da cor aparece pintado de outra cor. Vale a PALAVRA, não a tinta! Toque só nas bolas da cor escrita.", "The colour name is printed in a different colour. The WORD counts, not the ink! Tap only the balls of the written colour.", "El nombre del color aparece pintado de otro color. ¡Vale la PALABRA, no la tinta! Toca solo los balones del color escrito."],
    steps: [
      ["Exemplo: 'AZUIS' escrito em vermelho → toque nas bolas azuis.", "Example: 'BLUE' written in red → tap the blue balls.", "Ejemplo: 'AZULES' escrito en rojo → toca los balones azules."],
      ["A cabeça vai querer seguir a tinta. Leia a palavra!", "Your head will want to follow the ink. Read the word!", "La cabeza va a querer seguir la tinta. ¡Lee la palabra!"],
      ["Acerto vale +1, erro vale -1. São 2 minutos, e o último é TURBO!", "Right is +1, wrong is -1. It lasts 2 minutes, and the last one is TURBO!", "Acierto +1, error -1. Son 2 minutos, ¡y el último es TURBO!"],
    ],
    unit: ["pontos", "points", "puntos"],
  },
  {
    id: "chuvadupla", type: "mind", icon: "🌗", subs: ["decision", "reactions", "concentration"], tiers: [20, 40, 60, 80], max: 400, rain: { secs: 120, turbo: 60, sides: ["only", "only"] },
    title: ["Chuva dupla", "Double rain", "Lluvia doble"],
    desc: ["A tela vira duas! Cada lado tem a sua cor, e elas trocam em momentos diferentes. Toque só nas bolas certas de cada lado.", "The screen splits in two! Each side has its own colour, and they change at different times. Tap only the right balls on each side.", "¡La pantalla se divide en dos! Cada lado tiene su color, y cambian en momentos distintos. Toca solo los balones correctos de cada lado."],
    steps: [
      ["Olhe as duas regras antes de começar: esquerda e direita são diferentes.", "Check both rules before starting: left and right are different.", "Mira las dos reglas antes de empezar: izquierda y derecha son distintas."],
      ["Acerto vale +1, erro vale -1. São 2 minutos, e o último é TURBO!", "Right is +1, wrong is -1. It lasts 2 minutes, and the last one is TURBO!", "Acierto +1, error -1. Son 2 minutos, ¡y el último es TURBO!"],
      ["É como jogar olhando a bola e o companheiro ao mesmo tempo.", "It's like playing while watching the ball and your teammate at the same time.", "Es como jugar mirando el balón y al compañero al mismo tiempo."],
    ],
    unit: ["pontos", "points", "puntos"],
  },
  {
    id: "chuvamaluca", type: "mind", icon: "🌀", subs: ["decision", "reactions", "concentration"], tiers: [20, 40, 60, 80], max: 400, rain: { secs: 120, turbo: 60, sides: ["only", "avoid"] },
    title: ["Chuva dupla maluca", "Crazy double rain", "Lluvia doble loca"],
    desc: ["Dois lados, duas regras opostas! Na esquerda, toque SÓ na cor pedida. Na direita, toque em TODAS, MENOS na cor proibida.", "Two sides, two opposite rules! On the left, tap ONLY the given colour. On the right, tap ALL balls EXCEPT the forbidden colour.", "¡Dos lados, dos reglas opuestas! A la izquierda, toca SOLO el color pedido. A la derecha, toca TODOS, MENOS el color prohibido."],
    steps: [
      ["Esquerda: 'Só'. Direita: 'Menos'. Não troque as regras!", "Left: 'Only'. Right: 'Not'. Don't mix up the rules!", "Izquierda: 'Solo'. Derecha: 'Menos'. ¡No cambies las reglas!"],
      ["Acerto vale +1, erro vale -1. São 2 minutos, e o último é TURBO!", "Right is +1, wrong is -1. It lasts 2 minutes, and the last one is TURBO!", "Acierto +1, error -1. Son 2 minutos, ¡y el último es TURBO!"],
      ["A cabeça troca de regra num piscar de olhos, como no jogo de verdade.", "Your head switches rules in a blink, just like in a real game.", "La cabeza cambia de regla en un parpadeo, como en el partido de verdad."],
    ],
    unit: ["pontos", "points", "puntos"],
  },
  {
    id: "desvio", type: "mind", icon: "↕️", subs: ["decision", "reactions", "concentration"], tiers: [10, 25, 45, 70], max: 400, dodge: { turboAt: 40 },
    title: ["Desvio duplo", "Double dodge", "Esquive doble"],
    desc: ["Uma bola em cada lado da tela, e os obstáculos sobem. Desvie dos dois lados ao mesmo tempo! Vale a sua maior sequência sem bater.", "One ball on each side of the screen, and the obstacles rise. Dodge on both sides at once! Your best streak without crashing counts.", "Un balón en cada lado de la pantalla, y los obstáculos suben. ¡Esquiva en los dos lados a la vez! Vale tu mejor racha sin chocar."],
    steps: [
      ["Toque no lado esquerdo para mover a bola da esquerda, e no direito para a da direita.", "Tap the left side to move the left ball, and the right side for the right ball.", "Toca el lado izquierdo para mover el balón de la izquierda, y el derecho para el de la derecha."],
      ["Cada obstáculo que passa soma +1. Bateu? A sequência volta a zero, mas o seu recorde 🏆 fica.", "Every obstacle you pass adds +1. Crashed? The streak goes back to zero, but your record 🏆 stays.", "Cada obstáculo que pasa suma +1. ¿Chocaste? La racha vuelve a cero, pero tu récord 🏆 queda."],
      ["Não tem tempo: jogue à vontade! Quanto maior a sequência, mais rápido fica, até o TURBO. Aperte Parar para gravar.", "No clock: play as long as you like! The longer the streak, the faster it gets, up to TURBO. Press Stop to save.", "Sin reloj: ¡juega cuanto quieras! Cuanto más larga la racha, más rápido va, hasta el TURBO. Pulsa Parar para guardar."],
      ["No celular, use um dedo de cada mão. Tente sempre bater o seu recorde!", "On a phone, use one finger from each hand. Always try to beat your record!", "En el móvil, usa un dedo de cada mano. ¡Intenta siempre superar tu récord!"],
    ],
    unit: ["seguidos", "in a row", "seguidos"],
    anim: true,
  },
  {
    id: "minharotina", type: "mind", icon: "🔄", subs: ["composure", "resilience"], tiers: [1, 3, 5, 8], max: 30,
    title: ["Meu botão de reset", "My reset button", "Mi botón de reinicio"],
    desc: ["Crie seu botão de reset e use no treino ou no jogo depois de cada erro. Quantas vezes você usou?", "Create your reset button and use it in training or games after every mistake. How many times did you use it?", "Crea tu botón de reinicio y úsalo en el entrenamiento o el partido después de cada error. ¿Cuántas veces lo usaste?"],
    steps: [
      ["Escolha um gesto: bater a mão na coxa, ajeitar a meia, tocar o escudo.", "Pick a gesture: slap your thigh, fix your sock, touch the badge.", "Elige un gesto: palmear el muslo, acomodar la media, tocar el escudo."],
      ["Junte uma respiração funda e uma palavra curta: 'próxima!'.", "Add a deep breath and a short word: 'next!'.", "Súmale una respiración honda y una palabra corta: '¡próxima!'."],
      ["Errou? Gesto, respiração, palavra. Depois do treino, conte quantas vezes usou.", "Made a mistake? Gesture, breath, word. After training, count how many times you used it.", "¿Fallaste? Gesto, respiración, palabra. Después del entrenamiento, cuenta cuántas veces lo usaste."],
    ],
    unit: ["resets", "resets", "reinicios"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "nublada", "faisca"],
      text: ["Errou o passe...", "Bad pass...", "Fallaste el pase..."],
      steps: [
        { d: 2.4, boss: "nublada", mood: { nublada: "big" }, say: ["nublada", ["Errei de novo...", "Missed again...", "Fallé otra vez..."]], cloud: ["errei...", "I missed...", "fallé..."] },
        { d: 2.6, boss: "capitao", mood: { nublada: "" }, say: ["capitao", ["Mão na coxa. Respira... Próxima!", "Hand on thigh. Breathe... Next!", "Mano al muslo. Respira... ¡Próxima!"]], text: ["Gesto, respiração, palavra", "Gesture, breath, word", "Gesto, respiración, palabra"] },
      ],
    },
  },
  {
    id: "metasemana", type: "mind", icon: "📅", subs: ["discipline"], tiers: [2, 4, 5, 7], max: 7,
    title: ["Meta da semana", "Goal of the week", "Meta de la semana"],
    desc: ["Escolha uma meta de processo para a semana e cumpra um pouco por dia. Em quantos dias você cumpriu?", "Pick a process goal for the week and do a bit every day. On how many days did you do it?", "Elige una meta de proceso para la semana y cumple un poco cada día. ¿Cuántos días la cumpliste?"],
    steps: [
      ["Escolha algo que depende só de você: '10 minutos de pé fraco', '50 embaixadinhas'.", "Pick something that depends only on you: '10 minutes of weak foot', '50 keep-ups'.", "Elige algo que dependa solo de ti: '10 minutos de pierna mala', '50 toques'."],
      ["Escreva num papel e cole onde você vê todo dia.", "Write it on paper and stick it where you'll see it every day.", "Escríbela en un papel y pégala donde la veas cada día."],
      ["Marque um X em cada dia cumprido. No fim da semana, salve quantos dias foram.", "Mark an X on each day you do it. At the end of the week, save how many days.", "Marca una X cada día cumplido. Al final de la semana, guarda cuántos días fueron."],
    ],
    unit: ["dias", "days", "días"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "pulinho", "sofa"],
      steps: [
        { d: 2.6, say: ["pulinho", ["Quero ser profissional!", "I want to go pro!", "¡Quiero ser profesional!"]], text: ["O sonho mostra o destino", "The dream shows the destination", "El sueño muestra el destino"] },
        { d: 2.8, say: ["capitao", ["Ótimo! E hoje: 10 minutos de pé fraco.", "Great! And today: 10 minutes of weak foot.", "¡Genial! Y hoy: 10 minutos de pierna mala."]], cloud: ["seg ✔ ter ✔ qua ✔", "Mon ✔ Tue ✔ Wed ✔", "lun ✔ mar ✔ mié ✔"], text: ["A meta é o degrau de hoje", "The goal is today's step", "La meta es el escalón de hoy"] },
      ],
    },
  },
  {
    id: "vozcampo", type: "mind", icon: "📣", subs: ["fairplay", "confidence"], tiers: [5, 10, 15, 25], max: 99,
    title: ["Voz de campo", "Voice on the pitch", "Voz en la cancha"],
    desc: ["No treino ou no jogo, fale com o time: avise, oriente e anime. Quantas vezes você usou a voz?", "In training or a game, talk to your team: warn, guide and encourage. How many times did you use your voice?", "En el entrenamiento o el partido, háblale al equipo: avisa, orienta y anima. ¿Cuántas veces usaste la voz?"],
    steps: [
      ["Avise: 'ladrão!', 'vira!', 'sozinho!', 'tempo!'.", "Warn: 'man on!', 'turn!', 'you're free!', 'time!'.", "Avisa: '¡ladrón!', '¡gira!', '¡solo!', '¡tiempo!'."],
      ["Anime: 'boa!', 'tranquilo, a próxima é nossa!'.", "Encourage: 'nice!', 'no worries, the next one's ours!'.", "Anima: '¡bien!', '¡tranquilo, la próxima es nuestra!'."],
      ["Depois do treino, conte mais ou menos quantas vezes falou.", "After training, roughly count how many times you spoke up.", "Después del entrenamiento, cuenta más o menos cuántas veces hablaste."],
    ],
    unit: ["vezes", "times", "veces"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "pulinho", "tremelique"],
      steps: [
        { d: 2.4, say: ["tremelique", ["Melhor ficar quietinho...", "Better stay quiet...", "Mejor quedarme callado..."]], text: ["O time precisa da sua voz", "The team needs your voice", "El equipo necesita tu voz"] },
        { d: 2.4, mood: { tremelique: "small" }, say: ["capitao", ["Ladrão! Ladrão atrás!", "Man on! Behind you!", "¡Ladrón! ¡Ladrón atrás!"]] },
        { d: 2.4, say: ["pulinho", ["Boa! Tranquilo, a próxima é nossa!", "Nice! No worries, next one's ours!", "¡Bien! Tranquilo, ¡la próxima es nuestra!"]], text: ["Avisar e animar", "Warn and encourage", "Avisar y animar"] },
      ],
    },
  },
  {
    id: "sono", type: "mind", icon: "🌙", subs: ["discipline", "concentration"], tiers: [2, 4, 7, 14], max: 60,
    title: ["Sono de campeão", "Champion's sleep", "Sueño de campeón"],
    desc: ["Quantas noites seguidas você dormiu no horário e sem tela 1 hora antes?", "How many nights in a row did you go to bed on time with no screens for 1 hour before?", "¿Cuántas noches seguidas dormiste a tu hora y sin pantallas 1 hora antes?"],
    steps: [
      ["Combine um horário para dormir com a sua família.", "Agree on a bedtime with your family.", "Acuerda un horario para dormir con tu familia."],
      ["1 hora antes: celular, TV e videogame desligados.", "1 hour before: phone, TV and video games off.", "1 hora antes: celular, tele y videojuegos apagados."],
      ["Cada noite cumprida soma 1. Falhou uma noite? Recomece do 1.", "Each night you manage adds 1. Missed one? Start again from 1.", "Cada noche cumplida suma 1. ¿Fallaste una? Vuelve a empezar del 1."],
    ],
    unit: ["noites seguidas", "nights in a row", "noches seguidas"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "sofa", "zumzum"],
      steps: [
        { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["Só mais um vídeo! Só mais um jogo!", "One more video! One more game!", "¡Un video más! ¡Una partida más!"]], cloud: ["23h... 0h...", "11pm... 12am...", "23h... 0h..."], text: ["A tela rouba o sono", "Screens steal your sleep", "La pantalla roba el sueño"] },
        { d: 2.6, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Tela desligada. Amanhã tem treino.", "Screens off. Training tomorrow.", "Pantalla apagada. Mañana hay entreno."]], text: ["Dormir também é treino", "Sleep is training too", "Dormir también es entrenar"] },
        { d: 2, say: ["sofa", ["Agora sim... boa noite... zzz", "Now that's right... good night... zzz", "Ahora sí... buenas noches... zzz"]] },
      ],
    },
  },
);

// Same format as CQ_QUIZ in missoes-data.js: the first option is the right one.
Object.assign(CQ_QUIZ, {
  menteRotina: [
    {
      q: ["Por que muitos craques fazem sempre a mesma rotina antes de bater um pênalti?", "Why do many great players always follow the same routine before a penalty?", "¿Por qué muchos cracks hacen siempre la misma rutina antes de patear un penal?"],
      opts: [
        ["A rotina acalma e deixa o corpo no automático", "The routine calms you and puts your body on autopilot", "La rutina calma y pone el cuerpo en automático"],
        ["Por superstição, para dar sorte", "Superstition, for luck", "Por superstición, para tener suerte"],
        ["Para enrolar o goleiro", "To stall the goalkeeper", "Para hacer tiempo con el arquero"],
      ],
      why: ["Rotina não é mágica: é um caminho conhecido que tira a cabeça da pressão e coloca no que fazer.", "A routine isn't magic: it's a familiar path that takes your mind off the pressure and onto the task.", "La rutina no es magia: es un camino conocido que saca la cabeza de la presión y la pone en lo que hay que hacer."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "pulinho"],
        text: ["Pênalti: hora da rotina", "Penalty: routine time", "Penal: hora de la rutina"],
        steps: [
          { d: 2.4, mood: { tremelique: "big" }, say: ["tremelique", ["Todo mundo está olhando...", "Everyone's watching...", "Todos están mirando..."]] },
          { d: 2.6, mood: { tremelique: "small" }, say: ["capitao", ["Bola no lugar. Olho o canto. Respiro.", "Ball down. Pick the corner. Breathe.", "Balón en su lugar. Miro el rincón. Respiro."]], text: ["Sempre os mesmos passos", "Always the same steps", "Siempre los mismos pasos"] },
          { d: 2.2, say: ["capitao", ["Firme!", "Firm!", "¡Firme!"]], text: ["O corpo vai no automático", "The body goes on autopilot", "El cuerpo va en automático"] },
        ],
      },
    },
    {
      q: ["O que é o 'botão de reset' depois de um erro?", "What is the 'reset button' after a mistake?", "¿Qué es el 'botón de reinicio' después de un error?"],
      opts: [
        ["Um gesto, uma respiração e uma palavra para voltar ao jogo", "A gesture, a breath and a word to get back into the game", "Un gesto, una respiración y una palabra para volver al juego"],
        ["Pedir para sair do jogo", "Asking to come off", "Pedir salir del partido"],
        ["Reclamar até a raiva passar", "Complaining until the anger passes", "Protestar hasta que se pase la rabia"],
      ],
      why: ["Exemplo: bater a mão na coxa, respirar fundo e dizer 'próxima!'. Em 5 segundos você está de volta.", "For example: slap your thigh, take a deep breath and say 'next!'. In 5 seconds you're back.", "Por ejemplo: palmear el muslo, respirar hondo y decir '¡próxima!'. En 5 segundos estás de vuelta."],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "faisca"],
        text: ["Errou o domínio...", "Bad first touch...", "Fallaste el control..."],
        steps: [
          { d: 2.4, boss: "nublada", mood: { nublada: "big" }, say: ["nublada", ["Que vergonha... errei.", "How embarrassing... I messed up.", "Qué vergüenza... fallé."]], cloud: ["errei...", "I messed up...", "fallé..."] },
          { d: 2.8, boss: "capitao", mood: { nublada: "" }, say: ["capitao", ["Mão na coxa. Respira... Próxima!", "Hand on thigh. Breathe... Next!", "Mano al muslo. Respira... ¡Próxima!"]], text: ["Botão de reset: 5 segundos", "Reset button: 5 seconds", "Botón de reinicio: 5 segundos"] },
        ],
      },
    },
    {
      q: ["Qual é uma boa rotina na véspera do jogo?", "What's a good routine the night before a game?", "¿Cuál es una buena rutina la noche antes del partido?"],
      opts: [
        ["Arrumar a mochila, dormir cedo e imaginar boas jogadas", "Pack my bag, sleep early and picture good plays", "Preparar el bolso, dormir temprano e imaginar buenas jugadas"],
        ["Ficar no celular até tarde", "Stay on my phone until late", "Quedarme con el celular hasta tarde"],
        ["Comer muita besteira", "Eat lots of junk food", "Comer mucha comida chatarra"],
      ],
      why: ["Mochila pronta tira a correria; sono e visualização deixam corpo e cabeça preparados.", "A packed bag removes the rush; sleep and visualization get body and mind ready.", "El bolso listo evita el apuro; el sueño y la visualización preparan cuerpo y cabeza."],
    },
    {
      q: ["No dia do jogo, chegando ao campo, o que mais ajuda?", "On match day, arriving at the pitch, what helps most?", "El día del partido, al llegar a la cancha, ¿qué ayuda más?"],
      opts: [
        ["Aquecer bem, repetindo minha rotina de sempre", "Warm up well, repeating my usual routine", "Calentar bien, repitiendo mi rutina de siempre"],
        ["Chegar correndo, em cima da hora", "Arrive rushing, at the last minute", "Llegar corriendo, sobre la hora"],
        ["Ficar olhando quem está na arquibancada", "Keep looking at who's in the stands", "Mirar quién está en la tribuna"],
      ],
      why: ["Rotina conhecida faz qualquer campo parecer o seu campo de treino.", "A familiar routine makes any pitch feel like your training ground.", "Una rutina conocida hace que cualquier cancha parezca tu cancha de entrenamiento."],
    },
    {
      q: ["Antes de cobrar uma falta, qual rotina faz sentido?", "Before taking a free kick, what routine makes sense?", "Antes de patear un tiro libre, ¿qué rutina tiene sentido?"],
      opts: [
        ["Ajeitar a bola, olhar o alvo, respirar e bater", "Place the ball, look at the target, breathe and strike", "Acomodar el balón, mirar el objetivo, respirar y patear"],
        ["Mudar tudo a cada cobrança", "Change everything every time", "Cambiar todo en cada cobro"],
        ["Bater correndo, sem olhar", "Strike in a rush, without looking", "Patear apurado, sin mirar"],
      ],
      why: ["Os mesmos passos, na mesma ordem, deixam o chute mais preciso e a cabeça mais calma.", "The same steps in the same order make the strike more accurate and the mind calmer.", "Los mismos pasos, en el mismo orden, hacen el remate más preciso y la cabeza más tranquila."],
    },
    {
      q: ["A palavra-chave da sua rotina deve ser...", "The key word in your routine should be...", "La palabra clave de tu rutina debe ser..."],
      opts: [
        ["Curta e de ação: 'firme', 'próxima', 'olha'", "Short and active: 'firm', 'next', 'look'", "Corta y de acción: 'firme', 'próxima', 'mira'"],
        ["Uma frase bem comprida", "A really long sentence", "Una frase bien larga"],
        ["Uma bronca: 'não erra, burro!'", "A telling-off: 'don't miss, idiot!'", "Un reto: '¡no falles, burro!'"],
      ],
      why: ["Palavra curta cabe no meio do jogo e diz ao corpo o que fazer.", "A short word fits in the middle of the game and tells your body what to do.", "Una palabra corta entra en medio del juego y le dice al cuerpo qué hacer."],
    },
    {
      q: ["Aconteceu um imprevisto e você não conseguiu fazer a rotina inteira. E agora?", "Something unexpected happened and you couldn't do your whole routine. Now what?", "Pasó algo imprevisto y no pudiste hacer toda la rutina. ¿Y ahora?"],
      opts: [
        ["Faço o essencial: respiração e palavra-chave", "Do the essentials: breath and key word", "Hago lo esencial: respiración y palabra clave"],
        ["Já era, vou jogar mal", "That's it, I'll play badly", "Ya fue, voy a jugar mal"],
        ["Peço para o jogo esperar", "Ask the game to wait", "Pido que el partido espere"],
      ],
      why: ["Rotina ajuda, mas não é amuleto. O essencial cabe em 3 segundos.", "A routine helps, but it's not a lucky charm. The essentials take 3 seconds.", "La rutina ayuda, pero no es un amuleto. Lo esencial cabe en 3 segundos."],
    },
    {
      q: ["Depois do jogo, qual é uma boa rotina?", "After the game, what's a good routine?", "Después del partido, ¿cuál es una buena rutina?"],
      opts: [
        ["Alongar, beber água e pensar em 1 coisa boa e 1 para melhorar", "Stretch, drink water and think of 1 good thing and 1 to improve", "Estirar, tomar agua y pensar en 1 cosa buena y 1 para mejorar"],
        ["Ir direto para o celular", "Go straight to my phone", "Ir directo al celular"],
        ["Ficar só remoendo os erros", "Just keep chewing over the mistakes", "Quedarme dándole vueltas a los errores"],
      ],
      why: ["Corpo recuperado e cabeça equilibrada: 1 acerto para lembrar e 1 ponto para treinar.", "Body recovered and mind balanced: 1 thing to remember and 1 thing to practise.", "Cuerpo recuperado y cabeza equilibrada: 1 acierto para recordar y 1 punto para entrenar."],
    },
  ],

  menteTermometro: [
    {
      q: ["O termômetro da energia tem 3 zonas: fria, ideal e quente. Qual é a melhor para jogar?", "The energy thermometer has 3 zones: cold, ideal and hot. Which is best for playing?", "El termómetro de la energía tiene 3 zonas: fría, ideal y caliente. ¿Cuál es la mejor para jugar?"],
      opts: [
        ["A ideal: ligado, mas calmo", "Ideal: switched on, but calm", "La ideal: activo, pero tranquilo"],
        ["A fria: bem relaxado, quase dormindo", "Cold: very relaxed, almost asleep", "La fría: muy relajado, casi dormido"],
        ["A quente: o mais agitado possível", "Hot: as wound up as possible", "La caliente: lo más agitado posible"],
      ],
      why: ["Frio demais, quem dirige é o Sr. Sofá; quente demais, a Faísca e o Zum-Zum. Na zona ideal, o Capitão joga melhor.", "Too cold and Mr. Couch drives; too hot and Spark and Buzz take over. In the ideal zone, the Captain plays best.", "Muy frío, maneja el Sr. Sofá; muy caliente, Chispa y Zum-Zum. En la zona ideal, el Capitán juega mejor."],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "faisca"],
        steps: [
          { d: 2.2, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Zona fria... que preguiça... zzz", "Cold zone... so lazy... zzz", "Zona fría... qué pereza... zzz"]], text: ["Frio demais: lento", "Too cold: slow", "Muy frío: lento"] },
          { d: 2.2, boss: "faisca", mood: { sofa: "", faisca: "big" }, say: ["faisca", ["Zona quente! Vou com tudo em todo mundo!", "Hot zone! Going all-in on everyone!", "¡Zona caliente! ¡Voy con todo contra todos!"]], text: ["Quente demais: descontrolado", "Too hot: out of control", "Muy caliente: descontrolado"] },
          { d: 2.6, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["Ligado e calmo. Agora sim!", "Switched on and calm. That's it!", "Activo y tranquilo. ¡Ahora sí!"]], text: ["Zona ideal: ligado e calmo", "Ideal zone: switched on and calm", "Zona ideal: activo y tranquilo"] },
        ],
      },
    },
    {
      q: ["Antes do jogo você está mole e sem vontade. Como subir a energia?", "Before the game you feel sluggish and unmotivated. How do you raise your energy?", "Antes del partido estás flojo y sin ganas. ¿Cómo subes la energía?"],
      opts: [
        ["Pulos, música animada e palavras como 'vamos!'", "Jumps, upbeat music and words like 'let's go!'", "Saltos, música animada y palabras como '¡vamos!'"],
        ["Deitar mais um pouco", "Lie down a bit longer", "Acostarme un rato más"],
        ["Esperar parado a vontade chegar", "Wait for motivation to arrive", "Esperar quieto a que lleguen las ganas"],
      ],
      why: ["O corpo acorda a cabeça: movimento rápido e palavras fortes sobem o termômetro.", "Your body wakes your mind: quick movement and strong words raise the thermometer.", "El cuerpo despierta la cabeza: movimiento rápido y palabras fuertes suben el termómetro."],
    },
    {
      q: ["Você está tremendo de nervoso, com o coração disparado. Como baixar a energia?", "You're shaking with nerves and your heart is racing. How do you bring your energy down?", "Estás temblando de nervios, con el corazón acelerado. ¿Cómo bajas la energía?"],
      opts: [
        ["Respirar devagar, soltando o ar bem comprido", "Breathe slowly, with a long out-breath", "Respirar despacio, soltando el aire bien largo"],
        ["Correr de um lado para o outro", "Run around from side to side", "Correr de un lado a otro"],
        ["Pensar em tudo que pode dar errado", "Think of everything that could go wrong", "Pensar en todo lo que puede salir mal"],
      ],
      why: ["Soltar o ar devagar é o freio do corpo: o coração desacelera em poucos segundos.", "A slow out-breath is your body's brake: your heart slows down in a few seconds.", "Soltar el aire despacio es el freno del cuerpo: el corazón se calma en pocos segundos."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "tremelique"],
        steps: [
          { d: 2.4, boss: "zumzum", mood: { zumzum: "big", tremelique: "big" }, say: ["zumzum", ["Coração a mil! Tum-tum-tum!", "Heart racing! Thump-thump-thump!", "¡Corazón a mil! ¡Pum-pum-pum!"]], text: ["Termômetro lá em cima", "Thermometer sky-high", "Termómetro por las nubes"] },
          { d: 2.8, boss: "capitao", mood: { zumzum: "small", tremelique: "small" }, say: ["capitao", ["Puxa o ar... e solta beeem devagar.", "Breathe in... and out reeeally slowly.", "Toma aire... y suéltalo muuuy despacio."]], text: ["O ar comprido é o freio", "The long out-breath is the brake", "El aire largo es el freno"] },
        ],
      },
    },
    {
      q: ["Como saber em que zona do termômetro você está?", "How do you know which zone of the thermometer you're in?", "¿Cómo saber en qué zona del termómetro estás?"],
      opts: [
        ["Prestando atenção no corpo: coração, respiração, músculos e pensamentos", "Paying attention to your body: heart, breathing, muscles and thoughts", "Prestando atención al cuerpo: corazón, respiración, músculos y pensamientos"],
        ["Não dá para saber", "There's no way to know", "No se puede saber"],
        ["Perguntando para a torcida", "Asking the crowd", "Preguntándole a la hinchada"],
      ],
      why: ["O corpo dá os sinais. Quem percebe cedo consegue ajustar antes de o jogo começar.", "Your body gives the signals. Notice them early and you can adjust before kick-off.", "El cuerpo da las señales. Quien las nota temprano puede ajustar antes de empezar."],
    },
    {
      q: ["Todo mundo tem a mesma zona ideal?", "Does everyone have the same ideal zone?", "¿Todos tienen la misma zona ideal?"],
      opts: [
        ["Não: uns jogam melhor mais calmos, outros mais ligados", "No: some play better calmer, others more fired up", "No: algunos juegan mejor más tranquilos, otros más activos"],
        ["Sim, todo mundo igual", "Yes, everyone's the same", "Sí, todos iguales"],
        ["Só profissional tem zona ideal", "Only pros have an ideal zone", "Solo los profesionales tienen zona ideal"],
      ],
      why: ["Descubra a sua: lembre do seu melhor jogo e de como você se sentia antes dele.", "Find yours: remember your best game and how you felt before it.", "Descubre la tuya: recuerda tu mejor partido y cómo te sentías antes."],
    },
    {
      q: ["Para bater um pênalti, a energia deve estar...", "To take a penalty, your energy should be...", "Para patear un penal, la energía debe estar..."],
      opts: [
        ["Mais calma e precisa", "Calmer and precise", "Más tranquila y precisa"],
        ["Bem explosiva e agitada", "Really explosive and wound up", "Bien explosiva y agitada"],
        ["Quase dormindo", "Almost asleep", "Casi dormida"],
      ],
      why: ["Lances de precisão pedem calma; disputas de corrida e de corpo pedem um pouco mais de energia.", "Precision moments need calm; races and physical duels need a bit more energy.", "Las jugadas de precisión piden calma; las carreras y los choques piden un poco más de energía."],
    },
    {
      q: ["Seu time está desligado no jogo, todo mundo parado. O que você pode fazer?", "Your team is switched off, everyone standing still. What can you do?", "Tu equipo está apagado en el partido, todos quietos. ¿Qué puedes hacer?"],
      opts: [
        ["Falar alto, bater palma e animar o time", "Speak up, clap and lift the team", "Hablar fuerte, aplaudir y animar al equipo"],
        ["Ficar quieto também", "Stay quiet too", "Quedarme callado también"],
        ["Brigar com todo mundo", "Have a go at everyone", "Pelearme con todos"],
      ],
      why: ["Energia é contagiosa. Uma voz animada pode ligar o time inteiro.", "Energy is contagious. One lively voice can switch on the whole team.", "La energía es contagiosa. Una voz animada puede encender a todo el equipo."],
    },
    {
      q: ["Seus músculos estão duros de nervoso. Qual exercício ajuda?", "Your muscles are tight with nerves. Which exercise helps?", "Tus músculos están duros de nervios. ¿Qué ejercicio ayuda?"],
      opts: [
        ["Apertar forte por 5 segundos e soltar, sentindo relaxar", "Squeeze hard for 5 seconds and let go, feeling it relax", "Apretar fuerte 5 segundos y soltar, sintiendo cómo se relaja"],
        ["Ficar ainda mais tenso", "Get even tenser", "Ponerme todavía más tenso"],
        ["Ignorar e torcer para passar", "Ignore it and hope it goes away", "Ignorarlo y esperar que se pase"],
      ],
      why: ["Tensionar e soltar ensina o corpo a perceber a diferença e a relaxar de verdade.", "Tensing and releasing teaches your body to feel the difference and truly relax.", "Tensar y soltar enseña al cuerpo a notar la diferencia y relajarse de verdad."],
    },
  ],

  menteLanterna: [
    {
      q: ["A atenção é como uma lanterna. Com a bola no meio-campo, como ela deve estar?", "Attention is like a torch. With the ball in midfield, how should it be?", "La atención es como una linterna. Con el balón en el medio, ¿cómo debe estar?"],
      opts: [
        ["Aberta: vendo colegas, adversários e espaços", "Wide: seeing teammates, opponents and spaces", "Abierta: viendo compañeros, rivales y espacios"],
        ["Fechada só na bola", "Narrowed onto the ball only", "Cerrada solo en el balón"],
        ["Apontada para a arquibancada", "Pointed at the stands", "Apuntando a la tribuna"],
      ],
      why: ["Para ler o jogo, a luz abre; para finalizar, ela fecha no alvo.", "To read the game, the beam widens; to finish, it narrows onto the target.", "Para leer el juego, la luz se abre; para definir, se cierra en el objetivo."],
    },
    {
      q: ["Na hora de chutar ao gol, para onde vai a lanterna?", "When you shoot at goal, where does the torch point?", "Al patear al arco, ¿adónde apunta la linterna?"],
      opts: [
        ["Fechada no alvo: o canto que escolhi", "Narrowed on the target: the corner I picked", "Cerrada en el objetivo: el rincón que elegí"],
        ["No goleiro gritando", "At the shouting goalkeeper", "Al arquero que grita"],
        ["No técnico, para ver se ele está olhando", "At the coach, to see if he's watching", "Al entrenador, para ver si mira"],
      ],
      why: ["Na finalização, a luz fica estreita e forte, só no alvo.", "When finishing, the beam is narrow and strong, only on the target.", "Al definir, la luz es estrecha y fuerte, solo en el objetivo."],
    },
    {
      q: ["O que é uma distração?", "What is a distraction?", "¿Qué es una distracción?"],
      opts: [
        ["Tudo que puxa a lanterna para longe do jogo: grito, placar, pensamento", "Anything that pulls the torch away from the game: shouting, the score, a thought", "Todo lo que lleva la linterna lejos del juego: gritos, marcador, pensamientos"],
        ["Um tipo de drible", "A kind of dribble", "Un tipo de gambeta"],
        ["Um adversário rápido", "A fast opponent", "Un rival rápido"],
      ],
      why: ["Distrações sempre vão aparecer. O treino é perceber e trazer a luz de volta.", "Distractions will always show up. The training is noticing and bringing the beam back.", "Las distracciones siempre aparecen. El entrenamiento es notarlas y traer la luz de vuelta."],
    },
    {
      q: ["A torcida grita, o técnico grita, o colega grita. Como focar?", "The crowd shouts, the coach shouts, a teammate shouts. How do you focus?", "La hinchada grita, el entrenador grita, el compañero grita. ¿Cómo te enfocas?"],
      opts: [
        ["Escolho a voz que importa e uso minha palavra-gatilho", "Pick the voice that matters and use my trigger word", "Elijo la voz que importa y uso mi palabra clave"],
        ["Respondo todo mundo", "Answer everyone", "Le contesto a todos"],
        ["Tapo os ouvidos e paro", "Cover my ears and stop", "Me tapo los oídos y me detengo"],
      ],
      why: ["Nem todo barulho merece a sua luz. Uma palavra-gatilho traz a lanterna de volta na hora.", "Not every noise deserves your beam. A trigger word brings the torch back instantly.", "No todo ruido merece tu luz. Una palabra clave trae la linterna de vuelta al instante."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "tremelique"],
        steps: [
          { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["Gritaria! Placar! Quem está olhando?", "Shouting! Score! Who's watching?", "¡Gritos! ¡Marcador! ¿Quién mira?"]], cloud: ["UUUH! VAI! TOCA!", "OOOH! GO! PASS!", "¡UUUH! ¡VAMOS!"], text: ["Barulho por todo lado", "Noise everywhere", "Ruido por todos lados"] },
          { d: 2.6, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Olha, decide, faz.", "Look, decide, do.", "Mira, decide, hazlo."]], text: ["Palavra-gatilho: luz de volta", "Trigger word: beam back on", "Palabra clave: vuelve la luz"] },
        ],
      },
    },
    {
      q: ["Qual é uma boa palavra-gatilho antes de receber a bola?", "What's a good trigger phrase before receiving the ball?", "¿Cuál es una buena palabra clave antes de recibir el balón?"],
      opts: [
        ["'Olha, decide, faz'", "'Look, decide, do'", "'Mira, decide, hazlo'"],
        ["'Tomara que não venha para mim'", "'Hope it doesn't come to me'", "'Ojalá no me llegue'"],
        ["'Não erra, não erra'", "'Don't miss, don't miss'", "'No falles, no falles'"],
      ],
      why: ["Palavras de ação dizem à cabeça exatamente onde pôr a luz.", "Action words tell your mind exactly where to shine the beam.", "Las palabras de acción le dicen a la cabeza exactamente dónde poner la luz."],
    },
    {
      q: ["Dá para treinar a atenção?", "Can you train your attention?", "¿Se puede entrenar la atención?"],
      opts: [
        ["Sim, como um músculo: com jogos de concentração e meditação", "Yes, like a muscle: with concentration games and meditation", "Sí, como un músculo: con juegos de concentración y meditación"],
        ["Não: ou você nasce focado ou não", "No: you're either born focused or not", "No: o naces concentrado o no"],
        ["Só com videogame", "Only with video games", "Solo con videojuegos"],
      ],
      why: ["A Grade de concentração e o Contador de nuvens são academias para a lanterna.", "The Concentration grid and the Cloud counter are gyms for your torch.", "La Cuadrícula de concentración y el Contador de nubes son gimnasios para tu linterna."],
    },
    {
      q: ["Dá para ficar 100% focado o jogo inteiro, sem pausa?", "Can you stay 100% focused for the whole game without a break?", "¿Se puede estar 100% concentrado todo el partido sin pausa?"],
      opts: [
        ["Não: ligo a luz forte nos lances e relaxo um pouco nas paradas", "No: I switch the beam on for the plays and relax a bit at stoppages", "No: enciendo la luz fuerte en las jugadas y me relajo un poco en las pausas"],
        ["Sim, o jogo inteiro sem piscar", "Yes, the whole game without blinking", "Sí, todo el partido sin parpadear"],
        ["Nem um segundo", "Not even a second", "Ni un segundo"],
      ],
      why: ["A lanterna tem bateria: use forte quando importa e recarregue nas paradas (lateral, bola fora, falta).", "The torch has a battery: use it strongly when it matters and recharge at stoppages (throw-ins, ball out, fouls).", "La linterna tiene batería: úsala fuerte cuando importa y recárgala en las pausas (lateral, balón afuera, falta)."],
    },
    {
      q: ["Você está pensando no lance errado enquanto o jogo segue. Onde está a lanterna?", "You're thinking about a bad play while the game goes on. Where is the torch?", "Estás pensando en la jugada fallada mientras el partido sigue. ¿Dónde está la linterna?"],
      opts: [
        ["No passado: trago a luz de volta para a bola", "In the past: I bring the beam back to the ball", "En el pasado: traigo la luz de vuelta al balón"],
        ["No lugar certo", "In the right place", "En el lugar correcto"],
        ["No futuro", "In the future", "En el futuro"],
      ],
      why: ["A lanterna só ilumina uma coisa por vez. Se está no erro, não está no jogo.", "The torch lights up one thing at a time. If it's on the mistake, it's not on the game.", "La linterna ilumina una cosa a la vez. Si está en el error, no está en el juego."],
    },
  ],

  menteMetas: [
    {
      q: ["Qual destas é uma meta de processo?", "Which of these is a process goal?", "¿Cuál de estas es una meta de proceso?"],
      opts: [
        ["Treinar o pé fraco 10 minutos por dia", "Practise my weak foot 10 minutes a day", "Entrenar la pierna mala 10 minutos por día"],
        ["Ser campeão", "Be champion", "Ser campeón"],
        ["Ser o artilheiro", "Be top scorer", "Ser el goleador"],
      ],
      why: ["Meta de resultado mostra o destino; meta de processo é o caminho, e ele depende só de você.", "An outcome goal shows the destination; a process goal is the path, and it depends only on you.", "La meta de resultado muestra el destino; la de proceso es el camino, y depende solo de ti."],
    },
    {
      q: ["Uma boa meta é...", "A good goal is...", "Una buena meta es..."],
      opts: [
        ["Clara, possível e com prazo: '30 embaixadinhas até o fim do mês'", "Clear, achievable and with a deadline: '30 keep-ups by the end of the month'", "Clara, posible y con plazo: '30 toques antes de fin de mes'"],
        ["Vaga: 'melhorar'", "Vague: 'get better'", "Vaga: 'mejorar'"],
        ["Impossível: '1000 embaixadinhas amanhã'", "Impossible: '1000 keep-ups tomorrow'", "Imposible: '1000 toques mañana'"],
      ],
      why: ["Meta clara diz o quê e até quando. Possível, mas com um pouco de desafio.", "A clear goal says what and by when. Achievable, but with a bit of challenge.", "Una meta clara dice qué y para cuándo. Posible, pero con algo de desafío."],
    },
    {
      q: ["Por que escrever a meta num lugar que você vê todo dia?", "Why write your goal somewhere you see every day?", "¿Por qué escribir la meta en un lugar que ves todos los días?"],
      opts: [
        ["Para lembrar e manter o foco", "To remember it and stay focused", "Para recordarla y mantener el foco"],
        ["Para me gabar para os outros", "To show off to others", "Para presumir ante los demás"],
        ["Não adianta nada", "It's pointless", "No sirve para nada"],
      ],
      why: ["O que você vê todo dia vira prioridade. O que fica esquecido, o Sr. Sofá leva.", "What you see every day becomes a priority. What gets forgotten, Mr. Couch takes.", "Lo que ves cada día se vuelve prioridad. Lo que se olvida, se lo lleva el Sr. Sofá."],
    },
    {
      q: ["Você não bateu a meta no prazo. O que fazer?", "You didn't reach your goal in time. What do you do?", "No cumpliste la meta a tiempo. ¿Qué haces?"],
      opts: [
        ["Ver o que faltou, ajustar e continuar", "See what was missing, adjust and keep going", "Ver qué faltó, ajustar y seguir"],
        ["Desistir de ter metas", "Give up on having goals", "Dejar de tener metas"],
        ["Fingir que bati", "Pretend I reached it", "Fingir que la cumplí"],
      ],
      why: ["Meta não cumprida também ensina: talvez faltou treino, talvez o prazo era curto. Ajuste e siga.", "A missed goal teaches too: maybe you needed more practice, maybe the deadline was short. Adjust and carry on.", "Una meta no cumplida también enseña: quizá faltó entrenamiento, quizá el plazo era corto. Ajusta y sigue."],
    },
    {
      q: ["Ter um sonho grande, como ser jogador profissional, é ruim?", "Is having a big dream, like becoming a pro, a bad thing?", "¿Tener un sueño grande, como ser profesional, es malo?"],
      opts: [
        ["Não: o sonho dá direção, e as metas pequenas são os degraus", "No: the dream gives direction, and small goals are the steps", "No: el sueño da dirección, y las metas pequeñas son los escalones"],
        ["Sim, é melhor não sonhar", "Yes, it's better not to dream", "Sí, mejor no soñar"],
        ["Basta sonhar, não precisa treinar", "Dreaming is enough, no need to train", "Basta con soñar, no hace falta entrenar"],
      ],
      why: ["Sonhe grande e treine pequeno, todos os dias. É assim que o sonho vira caminho.", "Dream big and train small, every day. That's how a dream becomes a path.", "Sueña en grande y entrena en pequeño, todos los días. Así el sueño se vuelve camino."],
      scene: {
        anim: "cabine", cast: ["capitao", "pulinho", "sofa"],
        steps: [
          { d: 2.4, mood: { pulinho: "big" }, say: ["pulinho", ["Eu quero ser profissional!", "I want to go pro!", "¡Quiero ser profesional!"]], text: ["O sonho mostra a direção", "The dream shows the way", "El sueño muestra la dirección"] },
          { d: 2.6, mood: { pulinho: "" }, say: ["sofa", ["Tá... mas isso é longe demais...", "Yeah... but that's so far away...", "Ya... pero eso está muy lejos..."]] },
          { d: 2.8, say: ["capitao", ["Por isso, hoje: 10 minutos de pé fraco.", "That's why today: 10 minutes of weak foot.", "Por eso hoy: 10 minutos de pierna mala."]], text: ["Metas pequenas são os degraus", "Small goals are the steps", "Las metas pequeñas son escalones"] },
        ],
      },
    },
    {
      q: ["Quantas metas é bom trabalhar ao mesmo tempo?", "How many goals should you work on at once?", "¿Cuántas metas conviene trabajar a la vez?"],
      opts: [
        ["Poucas, de 1 a 3, para ter foco", "A few, 1 to 3, to stay focused", "Pocas, de 1 a 3, para tener foco"],
        ["Todas que eu conseguir imaginar", "As many as I can think of", "Todas las que pueda imaginar"],
        ["Nenhuma", "None", "Ninguna"],
      ],
      why: ["Muitas metas juntas dividem a energia. Poucas metas recebem tudo de você.", "Too many goals split your energy. A few goals get all of you.", "Muchas metas juntas dividen la energía. Pocas metas reciben todo de ti."],
    },
    {
      q: ["Como acompanhar se você está evoluindo?", "How do you track whether you're improving?", "¿Cómo seguir si estás mejorando?"],
      opts: [
        ["Anotar os treinos e me comparar comigo mesmo de antes", "Log my training and compare myself with my earlier self", "Anotar los entrenamientos y compararme conmigo mismo de antes"],
        ["Me comparar só com o melhor do time", "Only compare myself with the best on the team", "Compararme solo con el mejor del equipo"],
        ["Não precisa acompanhar", "No need to track it", "No hace falta seguirlo"],
      ],
      why: ["O seu rival é você de ontem. Os recordes aqui no app mostram isso.", "Your rival is yesterday's you. The records in this app show exactly that.", "Tu rival eres tú de ayer. Los récords de esta app lo muestran."],
    },
    {
      q: ["Bateu a meta! E agora?", "You reached your goal! Now what?", "¡Cumpliste la meta! ¿Y ahora?"],
      opts: [
        ["Comemoro e crio a próxima, um pouco mais difícil", "Celebrate and set the next one, a bit harder", "Festejo y creo la siguiente, un poco más difícil"],
        ["Paro de treinar", "Stop training", "Dejo de entrenar"],
        ["Fico me achando o melhor", "Think I'm the best", "Me creo el mejor"],
      ],
      why: ["Cada degrau leva ao próximo. Comemore a conquista e suba mais um.", "Each step leads to the next. Celebrate the win and climb one more.", "Cada escalón lleva al siguiente. Festeja el logro y sube uno más."],
    },
  ],

  menteTime: [
    {
      q: ["Por que falar em campo é importante?", "Why is talking on the pitch important?", "¿Por qué es importante hablar en la cancha?"],
      opts: [
        ["Ajuda o colega a decidir: 'ladrão!', 'vira!', 'sozinho!'", "It helps your teammate decide: 'man on!', 'turn!', 'you're free!'", "Ayuda al compañero a decidir: '¡ladrón!', '¡gira!', '¡solo!'"],
        ["Não é: cada um joga sozinho", "It isn't: everyone plays alone", "No lo es: cada uno juega solo"],
        ["Serve para reclamar do juiz", "It's for complaining to the referee", "Sirve para protestarle al árbitro"],
      ],
      why: ["Seu colega não tem olhos nas costas. A sua voz vira os olhos dele.", "Your teammate has no eyes in the back of his head. Your voice becomes his eyes.", "Tu compañero no tiene ojos en la espalda. Tu voz se vuelve sus ojos."],
    },
    {
      q: ["Seu colega vai receber de costas e vem um adversário por trás. O que você grita?", "Your teammate is receiving with his back to goal and an opponent is coming from behind. What do you shout?", "Tu compañero va a recibir de espaldas y viene un rival por detrás. ¿Qué gritas?"],
      opts: [
        ["'Ladrão!'", "'Man on!'", "'¡Ladrón!'"],
        ["'Vira!'", "'Turn!'", "'¡Gira!'"],
        ["Nada", "Nothing", "Nada"],
      ],
      why: ["'Ladrão' avisa que vem marcação: toque de primeira ou proteja a bola. 'Vira' é quando ele está livre.", "'Man on' warns that pressure is coming: one-touch it or shield. 'Turn' is when he's free.", "'Ladrón' avisa que viene la marca: toca de primera o protege. 'Gira' es cuando está libre."],
    },
    {
      q: ["Seu colega vai receber de costas e não tem ninguém perto dele. O que você grita?", "Your teammate is receiving with his back to goal and nobody is near him. What do you shout?", "Tu compañero va a recibir de espaldas y no hay nadie cerca. ¿Qué gritas?"],
      opts: [
        ["'Vira!'", "'Turn!'", "'¡Gira!'"],
        ["'Ladrão!'", "'Man on!'", "'¡Ladrón!'"],
        ["'Chuta!'", "'Shoot!'", "'¡Patea!'"],
      ],
      why: ["Com espaço, ele pode girar e encarar o jogo. Seu aviso economiza o tempo de olhar para trás.", "With space, he can turn and face the game. Your call saves him the time of looking back.", "Con espacio, puede girar y encarar el juego. Tu aviso le ahorra el tiempo de mirar atrás."],
    },
    {
      q: ["O que um bom capitão faz?", "What does a good captain do?", "¿Qué hace un buen capitán?"],
      opts: [
        ["Dá exemplo, anima, apoia quem errou e respeita o juiz", "Sets an example, lifts the team, backs whoever made a mistake and respects the referee", "Da el ejemplo, anima, apoya a quien se equivocó y respeta al árbitro"],
        ["Grita com todo mundo", "Shouts at everyone", "Le grita a todos"],
        ["Só usa a braçadeira", "Just wears the armband", "Solo usa la cinta"],
      ],
      why: ["Liderar é servir o time. Qualquer um pode ser líder, com ou sem braçadeira.", "Leading is serving the team. Anyone can be a leader, with or without the armband.", "Liderar es servir al equipo. Cualquiera puede ser líder, con o sin cinta."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "pulinho"],
        text: ["Um colega errou feio...", "A teammate made a bad mistake...", "Un compañero se equivocó feo..."],
        steps: [
          { d: 2.4, mood: { faisca: "big" }, say: ["faisca", ["De novo?! Ele só erra!", "Again?! He keeps messing up!", "¿Otra vez?! ¡Solo se equivoca!"]] },
          { d: 2.8, mood: { faisca: "small" }, say: ["capitao", ["Tranquilo, parceiro! A próxima é sua!", "No worries, mate! Next one's yours!", "¡Tranquilo, amigo! ¡La próxima es tuya!"]], text: ["Líder apoia quem errou", "Leaders back whoever slipped up", "El líder apoya a quien se equivocó"] },
        ],
      },
    },
    {
      q: ["Um colega está triste porque joga pouco. Como ajudar?", "A teammate is sad because he doesn't play much. How can you help?", "Un compañero está triste porque juega poco. ¿Cómo ayudas?"],
      opts: [
        ["Chamo para treinar junto e incentivo", "Invite him to train together and encourage him", "Lo invito a entrenar juntos y lo animo"],
        ["Rio dele", "Laugh at him", "Me río de él"],
        ["Finjo que não vi", "Pretend I didn't notice", "Hago como que no vi"],
      ],
      why: ["Time forte cuida de todos, não só dos titulares.", "A strong team looks after everyone, not just the starters.", "Un equipo fuerte cuida a todos, no solo a los titulares."],
    },
    {
      q: ["Seu time ganhou com um gol seu. De quem é a vitória?", "Your team won with your goal. Whose win is it?", "Tu equipo ganó con un gol tuyo. ¿De quién es la victoria?"],
      opts: [
        ["Do time todo", "The whole team's", "De todo el equipo"],
        ["Só minha", "Only mine", "Solo mía"],
        ["Só do técnico", "Only the coach's", "Solo del entrenador"],
      ],
      why: ["Teve quem defendeu, quem roubou a bola e quem passou. O gol é a última parte de um trabalho de todos.", "Someone defended, someone won the ball and someone passed. The goal is the last part of everyone's work.", "Alguien defendió, alguien recuperó y alguien pasó. El gol es la última parte de un trabajo de todos."],
    },
    {
      q: ["Você discordou de uma decisão do técnico. O que fazer?", "You disagree with a decision by the coach. What do you do?", "No estás de acuerdo con una decisión del entrenador. ¿Qué haces?"],
      opts: [
        ["Faço o que foi pedido e converso com respeito depois", "Do what was asked and talk respectfully afterwards", "Hago lo que pidió y hablo con respeto después"],
        ["Faço do meu jeito, escondido", "Do it my way, secretly", "Lo hago a mi manera, a escondidas"],
        ["Reclamo com os colegas", "Complain to my teammates", "Me quejo con los compañeros"],
      ],
      why: ["No jogo, o time precisa de um plano só. Fora dele, uma conversa respeitosa resolve muito.", "During the game, the team needs one plan. Afterwards, a respectful chat solves a lot.", "En el partido, el equipo necesita un solo plan. Después, una charla respetuosa resuelve mucho."],
    },
    {
      q: ["Chegou um colega novo que não conhece ninguém. O que fazer?", "A new teammate arrived who doesn't know anyone. What do you do?", "Llegó un compañero nuevo que no conoce a nadie. ¿Qué haces?"],
      opts: [
        ["Apresento à turma e chamo para jogar junto", "Introduce him to the group and invite him to play", "Lo presento al grupo y lo invito a jugar"],
        ["Deixo ele sozinho", "Leave him alone", "Lo dejo solo"],
        ["Faço piada dele", "Make fun of him", "Me burlo de él"],
      ],
      why: ["Lembre do seu primeiro dia. Acolher é o primeiro passe do espírito de equipe.", "Remember your first day. Welcoming someone is the first pass of team spirit.", "Recuerda tu primer día. Recibir bien es el primer pase del espíritu de equipo."],
    },
  ],

  mentePorque: [
    {
      q: ["Qual é o motivo mais forte para jogar futebol?", "What's the strongest reason to play football?", "¿Cuál es el motivo más fuerte para jugar al fútbol?"],
      opts: [
        ["Gostar de jogar e de evoluir", "Loving to play and to improve", "Disfrutar de jugar y de mejorar"],
        ["Agradar só os outros", "Only pleasing other people", "Solo agradar a los demás"],
        ["Ficar famoso rápido", "Getting famous fast", "Hacerme famoso rápido"],
      ],
      why: ["Quem joga porque ama aguenta os dias difíceis. Esse é o combustível que não acaba.", "If you play because you love it, you get through the hard days. That's the fuel that never runs out.", "Quien juega porque ama aguanta los días difíciles. Ese es el combustible que no se acaba."],
    },
    {
      q: ["Depois do jogo, em casa, só falam dos seus erros. O que você pode fazer?", "After the game, at home, they only talk about your mistakes. What can you do?", "Después del partido, en casa, solo hablan de tus errores. ¿Qué puedes hacer?"],
      opts: [
        ["Conversar com calma e dizer como eu me sinto", "Talk calmly and say how I feel", "Hablar con calma y decir cómo me siento"],
        ["Parar de jogar sem falar nada", "Quit without saying anything", "Dejar de jugar sin decir nada"],
        ["Guardar a tristeza só para mim", "Keep the sadness to myself", "Guardarme la tristeza"],
      ],
      why: ["A família quer ajudar, mas às vezes não percebe. Uma conversa sincera muda muito. (Família: pergunte 'você se divertiu?')", "Your family wants to help but sometimes doesn't realize. An honest chat changes a lot. (Families: ask 'did you have fun?')", "La familia quiere ayudar, pero a veces no se da cuenta. Una charla sincera cambia mucho. (Familia: pregunten '¿te divertiste?')"],
    },
    {
      q: ["Nas redes sociais, você vê alguém da sua idade fazendo jogadas incríveis. O que pensar?", "On social media, you see someone your age doing amazing tricks. What do you think?", "En las redes ves a alguien de tu edad haciendo jugadas increíbles. ¿Qué piensas?"],
      opts: [
        ["Cada um tem seu tempo; eu me comparo comigo de ontem", "Everyone has their own pace; I compare myself with yesterday's me", "Cada uno tiene su tiempo; me comparo conmigo de ayer"],
        ["Nunca vou ser bom assim", "I'll never be that good", "Nunca voy a ser tan bueno"],
        ["Vou parar de treinar", "I'll stop training", "Voy a dejar de entrenar"],
      ],
      why: ["Vídeo mostra o melhor lance, não os mil erros antes. O seu rival é você de ontem.", "A video shows the best moment, not the thousand misses before. Your rival is yesterday's you.", "El video muestra la mejor jugada, no los mil errores antes. Tu rival eres tú de ayer."],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "pavao"],
        steps: [
          { d: 2.4, boss: "nublada", mood: { nublada: "big" }, say: ["nublada", ["Ele é muito melhor que eu...", "He's so much better than me...", "Es mucho mejor que yo..."]], cloud: ["eu nunca vou...", "I'll never...", "nunca voy a..."], text: ["A comparação derruba", "Comparing knocks you down", "La comparación te tira abajo"] },
          { d: 2.8, boss: "capitao", mood: { nublada: "" }, say: ["capitao", ["Cada um no seu tempo. Meu rival sou eu de ontem.", "Everyone at their own pace. My rival is yesterday's me.", "Cada uno a su tiempo. Mi rival soy yo de ayer."]], text: ["Compare-se com você mesmo", "Compare yourself with yourself", "Compárate contigo mismo"] },
        ],
      },
    },
    {
      q: ["O futebol deixou de ser divertido e virou só obrigação. O que fazer?", "Football stopped being fun and became just a chore. What do you do?", "El fútbol dejó de ser divertido y se volvió solo obligación. ¿Qué haces?"],
      opts: [
        ["Conversar com alguém e lembrar do que eu gostava: brincar com a bola", "Talk to someone and remember what I loved: playing with the ball", "Hablar con alguien y recordar lo que me gustaba: jugar con el balón"],
        ["Fingir que está tudo bem", "Pretend everything is fine", "Fingir que todo está bien"],
        ["Treinar ainda mais pesado, sem parar", "Train even harder, non-stop", "Entrenar todavía más duro, sin parar"],
      ],
      why: ["Perder a alegria é um sinal importante. Falar com alguém e voltar a brincar devolve o prazer.", "Losing the joy is an important sign. Talking to someone and playing for fun again brings it back.", "Perder la alegría es una señal importante. Hablar con alguien y volver a jugar por diversión la devuelve."],
    },
    {
      q: ["Brincar de bola na rua ou no quintal, sem técnico, ajuda?", "Does kicking a ball around in the street or yard, with no coach, help?", "¿Jugar a la pelota en la calle o el patio, sin entrenador, ayuda?"],
      opts: [
        ["Ajuda: liberdade para criar e se divertir faz o craque", "Yes: freedom to create and have fun makes great players", "Sí: la libertad para crear y divertirse hace al crack"],
        ["Não, só treino sério vale", "No, only serious training counts", "No, solo vale el entrenamiento serio"],
        ["Atrapalha", "It gets in the way", "Molesta"],
      ],
      why: ["Muitos craques aprenderam brincando. A criatividade nasce na brincadeira.", "Many great players learned by playing for fun. Creativity is born in play.", "Muchos cracks aprendieron jugando. La creatividad nace del juego."],
    },
    {
      q: ["Praticar outros esportes atrapalha quem quer ser jogador?", "Does playing other sports hurt someone who wants to be a footballer?", "¿Practicar otros deportes perjudica a quien quiere ser futbolista?"],
      opts: [
        ["Não: outros esportes melhoram a coordenação e a diversão", "No: other sports improve coordination and fun", "No: otros deportes mejoran la coordinación y la diversión"],
        ["Sim, só pode futebol", "Yes, only football allowed", "Sí, solo fútbol"],
        ["Só vale videogame de futebol", "Only football video games count", "Solo valen los videojuegos de fútbol"],
      ],
      why: ["Na infância, variar esportes deixa o corpo mais completo e evita cansaço e lesões.", "In childhood, mixing sports builds a more complete body and avoids burnout and injuries.", "En la infancia, variar deportes hace el cuerpo más completo y evita el cansancio y las lesiones."],
    },
    {
      q: ["Para quem está aprendendo, o que é ganhar?", "For someone still learning, what does winning mean?", "Para quien está aprendiendo, ¿qué es ganar?"],
      opts: [
        ["Divertir-se, aprender e dar o melhor", "Having fun, learning and giving your best", "Divertirse, aprender y dar lo mejor"],
        ["Só ganhar o jogo", "Only winning the game", "Solo ganar el partido"],
        ["Ser melhor que os amigos", "Being better than your friends", "Ser mejor que los amigos"],
      ],
      why: ["O placar de hoje passa. O que você aprende fica para a vida toda.", "Today's score fades. What you learn stays for life.", "El marcador de hoy pasa. Lo que aprendes queda para toda la vida."],
    },
    {
      q: ["Você perdeu e o técnico diz que foi bom porque o time aprendeu. Ele está certo?", "You lost and the coach says it was good because the team learned. Is he right?", "Perdiste y el entrenador dice que estuvo bien porque el equipo aprendió. ¿Tiene razón?"],
      opts: [
        ["Sim: na formação, aprender vale mais que o placar", "Yes: while developing, learning matters more than the score", "Sí: en formación, aprender vale más que el marcador"],
        ["Não, só a vitória importa", "No, only winning matters", "No, solo importa ganar"],
        ["Ele está só tentando me consolar", "He's just trying to cheer me up", "Solo intenta consolarme"],
      ],
      why: ["Os grandes jogadores foram formados por milhares de lições, muitas delas em derrotas.", "Great players were shaped by thousands of lessons, many of them in defeats.", "Los grandes jugadores se formaron con miles de lecciones, muchas en derrotas."],
    },
  ],

  menteDescanso: [
    {
      q: ["Quantas horas por noite um jovem atleta deve dormir?", "How many hours a night should a young athlete sleep?", "¿Cuántas horas por noche debe dormir un joven deportista?"],
      opts: [
        ["Crianças de 9 a 11 horas; adolescentes de 8 a 10", "Children 9 to 11 hours; teenagers 8 to 10", "Niños de 9 a 11 horas; adolescentes de 8 a 10"],
        ["5 horas bastam", "5 hours is enough", "5 horas alcanzan"],
        ["Tanto faz", "It doesn't matter", "Da igual"],
      ],
      why: ["É dormindo que o corpo cresce, os músculos se recuperam e o cérebro guarda o que você treinou.", "While you sleep your body grows, your muscles recover and your brain stores what you practised.", "Durmiendo el cuerpo crece, los músculos se recuperan y el cerebro guarda lo que entrenaste."],
    },
    {
      q: ["Por que desligar celular e TV 1 hora antes de dormir?", "Why switch off phones and TV 1 hour before bed?", "¿Por qué apagar el celular y la tele 1 hora antes de dormir?"],
      opts: [
        ["A luz e a agitação das telas atrapalham o sono", "The light and buzz of screens disturb sleep", "La luz y la agitación de las pantallas perjudican el sueño"],
        ["Não faz diferença", "It makes no difference", "No hace diferencia"],
        ["Só para economizar bateria", "Just to save battery", "Solo para ahorrar batería"],
      ],
      why: ["A luz da tela engana o cérebro, que acha que ainda é dia. Sem tela, o sono vem mais rápido e mais profundo.", "Screen light tricks your brain into thinking it's still daytime. Without screens, sleep comes faster and deeper.", "La luz de la pantalla engaña al cerebro, que cree que todavía es de día. Sin pantallas, el sueño llega más rápido y profundo."],
    },
    {
      q: ["Você dormiu mal antes do jogo. O que costuma acontecer?", "You slept badly before the game. What usually happens?", "Dormiste mal antes del partido. ¿Qué suele pasar?"],
      opts: [
        ["Reação mais lenta, mais erros e mais irritação", "Slower reactions, more mistakes and more irritation", "Reacción más lenta, más errores y más irritación"],
        ["Nada", "Nothing", "Nada"],
        ["Jogo melhor", "I play better", "Juego mejor"],
      ],
      why: ["Sono é desempenho. Uma noite ruim já deixa pernas e cabeça mais lentas.", "Sleep is performance. One bad night already slows your legs and your head.", "El sueño es rendimiento. Una mala noche ya vuelve más lentas las piernas y la cabeza."],
    },
    {
      q: ["Você treinou pesado vários dias seguidos e está muito cansado. O que fazer?", "You trained hard for several days in a row and you're exhausted. What do you do?", "Entrenaste fuerte varios días seguidos y estás muy cansado. ¿Qué haces?"],
      opts: [
        ["Descansar também é treino: aviso o técnico e me recupero", "Rest is training too: tell the coach and recover", "Descansar también es entrenar: aviso al entrenador y me recupero"],
        ["Treinar ainda mais", "Train even more", "Entrenar todavía más"],
        ["Esconder o cansaço", "Hide how tired I am", "Esconder el cansancio"],
      ],
      why: ["O músculo fica mais forte no descanso, não no treino. Sem descanso, vêm lesões.", "Muscles get stronger during rest, not during training. Without rest, injuries come.", "El músculo se fortalece en el descanso, no en el entrenamiento. Sin descanso, llegan las lesiones."],
    },
    {
      q: ["O que comer antes do jogo?", "What should you eat before a game?", "¿Qué comer antes del partido?"],
      opts: [
        ["Comida leve e saudável, umas 2 a 3 horas antes", "A light, healthy meal, about 2 to 3 hours before", "Comida liviana y sana, unas 2 a 3 horas antes"],
        ["Muito refrigerante e doce", "Lots of soda and sweets", "Mucha gaseosa y dulces"],
        ["Nada: jogar em jejum", "Nothing: play on an empty stomach", "Nada: jugar en ayunas"],
      ],
      why: ["Comida leve dá energia sem pesar. Refrigerante e doce dão um pico rápido e depois cansaço.", "Light food gives energy without weighing you down. Soda and sweets give a quick spike, then tiredness.", "La comida liviana da energía sin pesar. La gaseosa y los dulces dan un pico rápido y después cansancio."],
    },
    {
      q: ["Quando beber água?", "When should you drink water?", "¿Cuándo tomar agua?"],
      opts: [
        ["Antes, durante e depois do treino, mesmo sem muita sede", "Before, during and after training, even if not very thirsty", "Antes, durante y después del entrenamiento, aunque no tengas mucha sed"],
        ["Só quando estiver morrendo de sede", "Only when dying of thirst", "Solo cuando me muera de sed"],
        ["Nunca durante o jogo", "Never during the game", "Nunca durante el partido"],
      ],
      why: ["Quando a sede aparece forte, o corpo já está perdendo força e atenção.", "When strong thirst appears, your body is already losing strength and focus.", "Cuando aparece mucha sed, el cuerpo ya está perdiendo fuerza y atención."],
    },
    {
      q: ["O cansaço e o sono atrapalham a cabeça também?", "Do tiredness and lack of sleep affect your mind too?", "¿El cansancio y el sueño afectan también la cabeza?"],
      opts: [
        ["Sim: cansado, fica mais difícil controlar as emoções e decidir", "Yes: when tired, it's harder to control emotions and decide", "Sí: cansado, cuesta más controlar las emociones y decidir"],
        ["Não, só as pernas", "No, only your legs", "No, solo las piernas"],
        ["Só em adulto", "Only in adults", "Solo en adultos"],
      ],
      why: ["Com sono, a Faísca e o Zum-Zum pegam o comando com muito mais facilidade.", "When you're sleepy, Spark and Buzz grab the controls much more easily.", "Con sueño, Chispa y Zum-Zum toman el mando con mucha más facilidad."],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "faisca"],
        text: ["Dormiu só 5 horas...", "Only slept 5 hours...", "Durmió solo 5 horas..."],
        steps: [
          { d: 2.2, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Que sono... zzz", "So sleepy... zzz", "Qué sueño... zzz"]] },
          { d: 2.2, mood: { faisca: "big" }, say: ["faisca", ["E tudo me irrita hoje!", "And everything annoys me today!", "¡Y hoy todo me molesta!"]], text: ["Cansado, as emoções mandam", "Tired, emotions take over", "Cansado, mandan las emociones"] },
          { d: 2.8, boss: "capitao", mood: { sofa: "small", faisca: "" }, say: ["capitao", ["Hoje: tela desligada e cama cedo.", "Tonight: screens off and early bed.", "Hoy: pantalla apagada y a la cama temprano."]], text: ["Descanso devolve o comando", "Rest gives back control", "El descanso devuelve el mando"] },
        ],
      },
    },
    {
      q: ["Uma boa rotina de sono é...", "A good sleep routine is...", "Una buena rutina de sueño es..."],
      opts: [
        ["Dormir e acordar em horários parecidos todos os dias", "Going to bed and waking up at similar times every day", "Dormir y despertar a horarios parecidos todos los días"],
        ["Cada dia num horário diferente", "A different time every day", "Cada día a un horario distinto"],
        ["Dormir só no fim de semana", "Only sleeping at weekends", "Dormir solo el fin de semana"],
      ],
      why: ["O corpo adora rotina: com horários fixos, você dorme mais rápido e acorda mais disposto.", "Your body loves routine: with regular times, you fall asleep faster and wake up fresher.", "El cuerpo ama la rutina: con horarios fijos, te duermes más rápido y despiertas con más energía."],
    },
  ],

  menteLesao: [
    {
      q: ["Você sente dor durante o treino. O que fazer?", "You feel pain during training. What do you do?", "Sientes dolor durante el entrenamiento. ¿Qué haces?"],
      opts: [
        ["Paro e aviso o técnico ou um adulto", "Stop and tell the coach or an adult", "Paro y aviso al entrenador o a un adulto"],
        ["Escondo e continuo", "Hide it and keep going", "Lo escondo y sigo"],
        ["Tomo remédio sozinho e sigo", "Take medicine by myself and carry on", "Tomo un remedio solo y sigo"],
      ],
      why: ["Esconder a dor pode transformar um problema pequeno numa lesão grande. Avisar é coragem.", "Hiding pain can turn a small problem into a big injury. Speaking up is brave.", "Esconder el dolor puede convertir un problema pequeño en una lesión grande. Avisar es valentía."],
    },
    {
      q: ["Você se machucou e vai ficar umas semanas parado. O que é normal sentir?", "You got injured and will be out for a few weeks. What is normal to feel?", "Te lesionaste y vas a estar parado unas semanas. ¿Qué es normal sentir?"],
      opts: [
        ["Tristeza e frustração: é normal, e vai passar", "Sadness and frustration: it's normal, and it will pass", "Tristeza y frustración: es normal, y va a pasar"],
        ["Nada: craque não sente", "Nothing: great players don't feel anything", "Nada: los cracks no sienten"],
        ["Vontade de largar tudo, e é isso que devo fazer", "Wanting to quit everything, and that's what I should do", "Ganas de dejar todo, y eso es lo que debo hacer"],
      ],
      why: ["A Nublada pode aparecer, e tudo bem. Mas lesão é uma pausa, não o fim.", "Cloudy may show up, and that's OK. But an injury is a pause, not the end.", "Nublada puede aparecer, y está bien. Pero una lesión es una pausa, no el final."],
    },
    {
      q: ["Enquanto se recupera, como continuar perto do time?", "While you recover, how do you stay close to the team?", "Mientras te recuperas, ¿cómo sigues cerca del equipo?"],
      opts: [
        ["Vou aos treinos, apoio os colegas e faço a recuperação direitinho", "Go to training, support my teammates and do my rehab properly", "Voy a los entrenamientos, apoyo a los compañeros y hago bien la recuperación"],
        ["Sumo até voltar", "Disappear until I'm back", "Desaparezco hasta volver"],
        ["Fico com raiva de quem está jogando", "Get angry at whoever is playing", "Me enojo con los que juegan"],
      ],
      why: ["Continuar no grupo mantém a motivação e mostra o tamanho do seu compromisso.", "Staying with the group keeps you motivated and shows how committed you are.", "Seguir en el grupo mantiene la motivación y muestra tu compromiso."],
    },
    {
      q: ["O fisioterapeuta passou exercícios chatos. O que fazer?", "The physio gave you boring exercises. What do you do?", "El fisioterapeuta te dio ejercicios aburridos. ¿Qué haces?"],
      opts: [
        ["Faço todos, com disciplina: agora esse é o meu treino", "Do them all, with discipline: that's my training now", "Los hago todos, con disciplina: ahora ese es mi entrenamiento"],
        ["Faço só quando lembrar", "Do them only when I remember", "Los hago solo cuando me acuerdo"],
        ["Pulo e tento voltar logo a jogar", "Skip them and try to get back playing soon", "Los salto e intento volver a jugar pronto"],
      ],
      why: ["Quem leva a recuperação a sério volta antes e mais forte.", "Those who take recovery seriously come back sooner and stronger.", "Quien se toma en serio la recuperación vuelve antes y más fuerte."],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "nublada"],
        steps: [
          { d: 2.4, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Exercício chato de novo? Pula hoje...", "Boring exercises again? Skip today...", "¿Otra vez ejercicios aburridos? Hoy no..."]], text: ["A recuperação também tem preguiça", "Rehab has its lazy days too", "La recuperación también tiene pereza"] },
          { d: 2.8, boss: "capitao", mood: { sofa: "small" }, say: ["capitao", ["Agora o meu treino é esse. Bora!", "This is my training now. Let's go!", "Ahora mi entrenamiento es este. ¡Vamos!"]], text: ["Disciplina na recuperação", "Discipline in recovery", "Disciplina en la recuperación"] },
        ],
      },
    },
    {
      q: ["A dor diminuiu. Já pode voltar a jogar com tudo?", "The pain eased. Can you go back to playing flat out?", "El dolor bajó. ¿Ya puedes volver a jugar con todo?"],
      opts: [
        ["Só quando o médico ou o fisioterapeuta liberar", "Only when the doctor or physio clears me", "Solo cuando el médico o el fisioterapeuta lo autorice"],
        ["Sim, na hora", "Yes, right away", "Sí, enseguida"],
        ["Volto escondido", "Sneak back in", "Vuelvo a escondidas"],
      ],
      why: ["Sem dor não quer dizer curado. Voltar cedo demais é o jeito mais comum de se machucar de novo.", "No pain doesn't mean healed. Coming back too soon is the most common way to get hurt again.", "Sin dolor no significa curado. Volver demasiado pronto es la forma más común de lesionarse otra vez."],
    },
    {
      q: ["Parado por lesão, dá para treinar a cabeça?", "Out injured, can you still train your mind?", "Parado por lesión, ¿se puede entrenar la cabeza?"],
      opts: [
        ["Sim: assistir jogos, visualizar jogadas e fazer os quizzes", "Yes: watch games, visualize plays and do the quizzes", "Sí: mirar partidos, visualizar jugadas y hacer los quizzes"],
        ["Não, nada", "No, nothing", "No, nada"],
        ["Só jogando videogame", "Only by playing video games", "Solo jugando videojuegos"],
      ],
      why: ["A lesão para as pernas, não a cabeça. Quem estuda o jogo volta mais inteligente.", "An injury stops your legs, not your mind. Those who study the game come back smarter.", "La lesión frena las piernas, no la cabeza. Quien estudia el juego vuelve más inteligente."],
    },
    {
      q: ["Você voltou da lesão com medo de dividir a bola. Isso é normal?", "You're back from injury and scared to go into challenges. Is that normal?", "Volviste de la lesión con miedo de ir a disputar el balón. ¿Es normal?"],
      opts: [
        ["É: o Tremelique quer me proteger. Volto aos poucos e confio no corpo", "Yes: Shaky wants to protect me. I build up gradually and trust my body", "Sí: Tembleque quiere protegerme. Vuelvo de a poco y confío en el cuerpo"],
        ["Não, é covardia", "No, it's cowardice", "No, es cobardía"],
        ["Melhor nunca mais dividir", "Better never challenge again", "Mejor no disputar nunca más"],
      ],
      why: ["O medo depois de lesão é comum. Cada dividida segura no treino devolve a confiança.", "Fear after an injury is common. Every safe challenge in training brings confidence back.", "El miedo después de una lesión es común. Cada disputa segura en el entrenamiento devuelve la confianza."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "pulinho"],
        steps: [
          { d: 2.4, boss: "tremelique", mood: { tremelique: "big" }, say: ["tremelique", ["E se machucar de novo?!", "What if I get hurt again?!", "¿Y si me lastimo otra vez?!"]], text: ["O medo depois da lesão", "Fear after an injury", "El miedo después de la lesión"] },
          { d: 2.8, boss: "capitao", mood: { tremelique: "small" }, say: ["capitao", ["Obrigado, Tremelique. Fomos liberados. Aos poucos!", "Thanks, Shaky. We've been cleared. Step by step!", "Gracias, Tembleque. Nos dieron el alta. ¡De a poco!"]], text: ["Confiança volta aos poucos", "Confidence returns step by step", "La confianza vuelve de a poco"] },
        ],
      },
    },
    {
      q: ["Como ajudar a prevenir lesões?", "How can you help prevent injuries?", "¿Cómo ayudar a prevenir lesiones?"],
      opts: [
        ["Aquecer, fortalecer, dormir bem e respeitar o cansaço", "Warm up, build strength, sleep well and respect tiredness", "Calentar, fortalecer, dormir bien y respetar el cansancio"],
        ["Nunca aquecer", "Never warm up", "Nunca calentar"],
        ["Jogar todos os dias, sem descanso", "Play every day, without rest", "Jugar todos los días, sin descanso"],
      ],
      why: ["Corpo preparado e descansado se machuca muito menos. Prevenção também é treino.", "A prepared, rested body gets injured far less. Prevention is training too.", "Un cuerpo preparado y descansado se lesiona mucho menos. Prevenir también es entrenar."],
    },
  ],
});
