/* Grupo Mental, segunda parte: psicologia do esporte com a Turma da Cabeça
   (rotinas, energia, atenção, metas, time, motivação, descanso e lesões). */

CQ_MISSIONS.push(
  {
    id: "rotina", type: "quiz", quiz: "menteRotina", icon: "🔁", subs: ["composure", "concentration"], tiers: [1, 2, 3],
    title: ["Rotina do campeão", "Champion's routine", "Rutina de campeón"],
    desc: ["Craques fazem sempre os mesmos passos antes do lance e têm um 'botão de reset' para depois do erro.", "Stars always do the same steps before a big moment and have a 'reset button' for after a mistake.", "Los cracks hacen siempre los mismos pasos antes de la jugada y tienen un 'botón de reinicio' para después del error."],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "zumzum", say: ["Pênalti! E agora? E se eu errar?", "Penalty! What now? What if I miss?", "¡Penal! ¿Y ahora? ¿Y si fallo?"] },
      { id: "capitao", say: ["Faço sempre os mesmos passos: respiro, olho, chuto.", "I always do the same steps: breathe, look, shoot.", "Siempre hago los mismos pasos: respiro, miro, pateo."] },
    ],
  },
  {
    id: "termometro", type: "quiz", quiz: "menteTermometro", icon: "🌡️", subs: ["composure", "courage"], tiers: [1, 2, 3],
    title: ["Termômetro da energia", "Energy thermometer", "Termómetro de la energía"],
    desc: ["Nem frio, nem fervendo: o melhor é entrar em campo ligado e calmo.", "Not cold, not boiling: go on the pitch switched on and calm.", "Ni frío ni hirviendo: lo mejor es entrar a la cancha activo y tranquilo."],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "sofa", say: ["Tô frio... sem vontade...", "I'm cold... can't be bothered...", "Estoy frío... sin ganas..."] },
      { id: "faisca", say: ["Tô fervendo! Quero sair trombando todo mundo!", "I'm boiling! I want to crash into everyone!", "¡Estoy hirviendo! ¡Quiero chocar con todos!"] },
      { id: "capitao", say: ["Nem frio, nem fervendo: ligado e calmo.", "Not cold, not boiling: switched on and calm.", "Ni frío ni hirviendo: activo y tranquilo."] },
    ],
  },
  {
    id: "lanterna", type: "quiz", quiz: "menteLanterna", icon: "💡", subs: ["concentration", "composure"], tiers: [1, 2, 3],
    title: ["Lanterna da atenção", "The attention torch", "La linterna de la atención"],
    desc: ["Sua atenção é uma lanterna: abre para ver o campo e fecha na bola para chutar.", "Your attention is a torch: wide to see the pitch, narrow on the ball to shoot.", "Tu atención es una linterna: se abre para ver la cancha y se cierra en el balón para patear."],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "zumzum", say: ["Olha o passarinho! E a torcida? E o celular?", "Look, a bird! And the crowd? And my phone?", "¡Mira el pajarito! ¿Y la hinchada? ¿Y el celular?"] },
      { id: "capitao", say: ["Minha atenção é uma lanterna: abro para ver o campo e fecho na bola para chutar.", "My attention is a torch: wide to see the pitch, narrow on the ball to shoot.", "Mi atención es una linterna: la abro para ver la cancha y la cierro en el balón para patear."] },
    ],
  },
  {
    id: "metas", type: "quiz", quiz: "menteMetas", icon: "🗺️", subs: ["discipline", "confidence"], tiers: [1, 2, 3],
    title: ["Metas de craque", "Goals like a pro", "Metas de crack"],
    desc: ["Sonho grande, passos pequenos. Aprenda a criar metas!", "Big dream, small steps. Learn to set goals!", "Sueño grande, pasos pequeños. ¡Aprende a crear metas!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "pulinho", say: ["Quero jogar na seleção!", "I want to play for the national team!", "¡Quiero jugar en la selección!"] },
      { id: "capitao", say: ["Sonho grande, degrau pequeno: o que eu treino esta semana?", "Big dream, small step: what do I train this week?", "Sueño grande, escalón pequeño: ¿qué entreno esta semana?"] },
    ],
  },
  {
    id: "timeunido", type: "quiz", quiz: "menteTime", icon: "🤝", subs: ["fairplay", "confidence"], tiers: [1, 2, 3],
    title: ["Time unido", "United team", "Equipo unido"],
    desc: ["Ninguém ganha sozinho. Fale, ajude e jogue pelo time!", "Nobody wins alone. Talk, help and play for the team!", "Nadie gana solo. ¡Habla, ayuda y juega para el equipo!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "pavao", say: ["Deixa comigo, eu resolvo sozinho!", "Leave it to me, I'll do it alone!", "¡Déjamelo, lo resuelvo solo!"] },
      { id: "capitao", say: ["Ninguém ganha sozinho. Fala, ajuda, toca a bola!", "Nobody wins alone. Talk, help, pass the ball!", "Nadie gana solo. ¡Habla, ayuda, pasa el balón!"] },
    ],
  },
  {
    id: "porque", type: "quiz", quiz: "mentePorque", icon: "❤️", subs: ["resilience", "confidence"], tiers: [1, 2, 3],
    title: ["Por que eu jogo?", "Why do I play?", "¿Por qué juego?"],
    desc: ["A gente joga porque é divertido! Esse é o combustível que não acaba.", "We play because it's fun! That's the fuel that never runs out.", "¡Jugamos porque es divertido! Ese es el combustible que no se acaba."],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "nublada", say: ["Tenho que ganar, senão todo mundo vai ficar bravo...", "I have to win, or everyone will be angry...", "Tengo que ganar, si no todos se van a enojar..."] },
      { id: "pulinho", say: ["Ei! A gente joga porque é divertido!", "Hey! We play because it's fun!", "¡Ey! ¡Jugamos porque es divertido!"] },
    ],
  },
  {
    id: "descanso", type: "quiz", quiz: "menteDescanso", icon: "😴", subs: ["discipline", "concentration"], tiers: [1, 2, 3],
    title: ["Corpo e mente descansados", "Rested body and mind", "Cuerpo y mente descansados"],
    desc: ["Dormir, comer bem e beber água também é treino!", "Sleeping, eating well and drinking water are training too!", "¡Dormir, comer bien y tomar agua también es entrenar!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "sofa", say: ["Dormir? Isso eu sei fazer!", "Sleep? That I know how to do!", "¿Dormir? ¡Eso sí lo sé hacer!"] },
      { id: "capitao", say: ["Dormir, comer bem e beber água também é treino.", "Sleeping, eating well and drinking water are training too.", "Dormir, comer bien y tomar agua también es entrenar."] },
    ],
  },
  {
    id: "lesao", type: "quiz", quiz: "menteLesao", icon: "🩹", subs: ["resilience", "discipline"], tiers: [1, 2, 3],
    title: ["Lesão e volta por cima", "Injury and comeback", "Lesión y revancha"],
    desc: ["Machucou? Com cuidado e paciência, você volta mais forte!", "Got hurt? With care and patience, you come back stronger!", "¿Te lastimaste? ¡Con cuidado y paciencia, vuelves más fuerte!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "nublada", say: ["Machuquei... vou ficar fora...", "I'm hurt... I'll be out...", "Me lastimé... voy a quedar afuera..."] },
      { id: "vovo", say: ["Paciência. O corpo sara, e você volta mais forte.", "Be patient. Your body heals, and you come back stronger.", "Paciencia. El cuerpo sana y vuelves más fuerte."] },
    ],
  },

  // Práticas
  {
    id: "grade", type: "mind", icon: "🧩", subs: ["concentration"], tiers: [90, 60, 45, 35], lower: true, max: 600, grid: { n: 25, cols: 5 },
    title: ["Grade de concentração", "Concentration grid", "Cuadrícula de concentración"],
    desc: ["Toque os números de 1 a 25, em ordem, o mais rápido que conseguir. Quanto menos segundos, melhor!", "Tap the numbers from 1 to 25, in order, as fast as you can. The fewer seconds, the better!", "Toca los números del 1 al 25, en orden, lo más rápido que puedas. ¡Cuantos menos segundos, mejor!"],
    steps: [
      ["Aperte Iniciar: os números aparecem embaralhados.", "Press Start: the numbers appear shuffled.", "Pulsa Iniciar: los números aparecen mezclados."],
      ["Ache o 1, depois o 2, o 3... até o 25. Errou o número? Ele treme e você continua.", "Find 1, then 2, 3... up to 25. Wrong number? It shakes and you carry on.", "Encuentra el 1, después el 2, el 3... hasta el 25. ¿Número equivocado? Tiembla y sigues."],
      ["Ao terminar, o tempo já vai para o resultado. É só salvar.", "When you finish, your time is filled in. Just save it.", "Al terminar, el tiempo ya pasa al resultado. Solo guárdalo."],
    ],
    unit: ["segundos", "seconds", "segundos"],
    anim: "grade",
    animArgs: { to: 25 },
  },
  {
    id: "grade40", type: "mind", icon: "🔢", subs: ["concentration"], tiers: [150, 105, 80, 65], lower: true, max: 900, grid: { n: 40, cols: 5 },
    title: ["Grade 40", "Grid 40", "Cuadrícula 40"],
    desc: ["Agora são 40 números! Toque de 1 a 40, em ordem, o mais rápido que conseguir.", "Now there are 40 numbers! Tap from 1 to 40, in order, as fast as you can.", "¡Ahora son 40 números! Toca del 1 al 40, en orden, lo más rápido que puedas."],
    steps: [
      ["Aperte Iniciar: os números aparecem embaralhados, na tela toda.", "Press Start: the numbers appear shuffled, full screen.", "Pulsa Iniciar: los números aparecen mezclados, en toda la pantalla."],
      ["Ache o 1, depois o 2, o 3... até o 40. Errou? O número treme e você continua.", "Find 1, then 2, 3... up to 40. Wrong one? It shakes and you carry on.", "Encuentra el 1, después el 2, el 3... hasta el 40. ¿Fallaste? Tiembla y sigues."],
      ["Respire e mantenha a calma: foco calmo é foco rápido!", "Breathe and stay calm: calm focus is fast focus!", "Respira y mantén la calma: ¡foco tranquilo es foco rápido!"],
    ],
    unit: ["segundos", "seconds", "segundos"],
    anim: "grade",
    animArgs: { to: 40 },
  },
  {
    id: "chuva", type: "mind", icon: "🌈", subs: ["decision", "reactions", "concentration"], tiers: [25, 60, 120, 180], max: 9999, rain: { mode: "only" },
    title: ["Chuva de cores", "Colour rain", "Lluvia de colores"],
    desc: ["Bolas caem do céu: toque só nas da cor que aparece em cima. A cor muda toda hora! Vale a sua maior pontuação sem errar.", "Balls fall from the sky: tap only the ones in the colour shown at the top. The colour keeps changing! Your best score without a mistake counts.", "Caen balones del cielo: toca solo los del color que aparece arriba. ¡El color cambia todo el tiempo! Vale tu mejor puntuación sin fallar."],
    steps: [
      ["Aos 10 s entra o TURBO e a cada minuto acelera mais. Cada acerto vale 1 ponto, e cada TURBO soma +1 por acerto! Aperte Parar para gravar.", "TURBO kicks in at 10 s and it speeds up every minute. Each hit is worth 1 point, and every TURBO adds +1 per hit! Press Stop to save.", "A los 10 s entra el TURBO y cada minuto acelera más. Cada acierto vale 1 punto, ¡y cada TURBO suma +1 por acierto! Pulsa Parar para guardar."],
      ["Olhe a regra em cima. Quando ela piscar, a cor mudou!", "Watch the rule at the top. When it flashes, the colour changed!", "Mira la regla arriba. ¡Cuando parpadea, cambió el color!"],
      ["Tocou errado ou deixou cair uma bola certa? Perde 1 ❤️. Sem os 3 ❤️, zera (o recorde 🏆 fica). Pense rápido, mas pense!", "Wrong tap or let a right ball drop? You lose 1 ❤️. Lose all 3 and you're back to 0 (your record 🏆 stays). Think fast, but think!", "¿Tocaste mal o dejaste caer un balón correcto? Pierdes 1 ❤️. Sin los 3 ❤️, vuelves a 0 (tu récord 🏆 queda). ¡Piensa rápido, pero piensa!"],
    ],
    unit: ["pontos", "points", "puntos"],
    anim: "chuva",
    animArgs: { mode: "only" },
  },
  {
    id: "chuvanao", type: "mind", icon: "🚫", subs: ["decision", "reactions", "concentration"], tiers: [45, 105, 200, 320], max: 9999, rain: { mode: "avoid" },
    title: ["Não toque!", "Don't touch!", "¡No toques!"],
    desc: ["Agora é ao contrário: toque em todas as bolas, menos na cor proibida. Vale a sua maior pontuação sem errar.", "Now it's the opposite: tap every ball except the forbidden colour. Your best score without a mistake counts.", "Ahora es al revés: toca todos los balones, menos el color prohibido. Vale tu mejor puntuación sin fallar."],
    steps: [
      ["Aos 10 s entra o TURBO e a cada minuto acelera mais. Cada acerto vale 1 ponto, e cada TURBO soma +1 por acerto! Aperte Parar para gravar.", "TURBO kicks in at 10 s and it speeds up every minute. Each hit is worth 1 point, and every TURBO adds +1 per hit! Press Stop to save.", "A los 10 s entra el TURBO y cada minuto acelera más. Cada acierto vale 1 punto, ¡y cada TURBO suma +1 por acierto! Pulsa Parar para guardar."],
      ["Tocou na cor proibida ou deixou cair uma bola que valia? Perde 1 ❤️. Sem os 3 ❤️, zera (o recorde 🏆 fica).", "Tapped the forbidden colour or let a good ball drop? You lose 1 ❤️. Lose all 3 and you're back to 0 (your record 🏆 stays).", "¿Tocaste el color prohibido o dejaste caer un balón que valía? Pierdes 1 ❤️. Sin los 3 ❤️, vuelves a 0 (tu récord 🏆 queda)."],
      ["O dedo vai querer tocar em tudo. Segure quando vier a cor proibida!", "Your finger will want to tap everything. Hold back for the forbidden colour!", "El dedo va a querer tocar todo. ¡Frénalo con el color prohibido!"],
      ["É como não dar o bote na finta do atacante: controlar o impulso.", "It's like not diving in at a striker's feint: controlling the impulse.", "Es como no tirarse ante el amague del delantero: controlar el impulso."],
    ],
    unit: ["pontos", "points", "puntos"],
    anim: "chuva",
    animArgs: { mode: "avoid" },
  },
  {
    id: "chuvaconfusa", type: "mind", icon: "🎨", subs: ["decision", "reactions", "concentration"], tiers: [25, 60, 120, 180], max: 9999, rain: { mode: "stroop" },
    title: ["Chuva confusa", "Tricky rain", "Lluvia confusa"],
    desc: ["O nome da cor aparece pintado de outra cor. Vale a PALAVRA, não a tinta! Toque só nas bolas da cor escrita.", "The colour name is printed in a different colour. The WORD counts, not the ink! Tap only the balls of the written colour.", "El nombre del color aparece pintado de otro color. ¡Vale la PALABRA, no la tinta! Toca solo los balones del color escrito."],
    steps: [
      ["Exemplo: 'AZUIS' escrito em vermelho → toque nas bolas azuis.", "Example: 'BLUE' written in red → tap the blue balls.", "Ejemplo: 'AZULES' escrito en rojo → toca los balones azules."],
      ["A cabeça vai querer seguir a tinta. Leia a palavra!", "Your head will want to follow the ink. Read the word!", "La cabeza va a querer seguir la tinta. ¡Lee la palabra!"],
      ["Aos 10 s entra o TURBO e a cada minuto acelera mais. Cada acerto vale 1 ponto, e cada TURBO soma +1 por acerto! Tocou errado ou deixou cair uma bola certa? Perde 1 ❤️. Sem os 3 ❤️, zera (o recorde 🏆 fica).", "TURBO kicks in at 10 s and it speeds up every minute. Each hit is worth 1 point, and every TURBO adds +1 per hit! Wrong tap or let a right ball drop? You lose 1 ❤️. Lose all 3 and you're back to 0 (your record 🏆 stays).", "A los 10 s entra el TURBO y cada minuto acelera más. Cada acierto vale 1 punto, ¡y cada TURBO suma +1 por acierto! ¿Tocaste mal o dejaste caer un balón correcto? Pierdes 1 ❤️. Sin los 3 ❤️, vuelves a 0 (tu récord 🏆 queda)."],
    ],
    unit: ["pontos", "points", "puntos"],
    anim: "chuva",
    animArgs: { mode: "stroop" },
  },
  {
    id: "chuvadupla", type: "mind", icon: "🌗", subs: ["decision", "reactions", "concentration"], tiers: [25, 50, 90, 135], max: 9999, rain: { sides: ["only", "only"], calm: true },
    title: ["Chuva dupla", "Double rain", "Lluvia doble"],
    desc: ["A tela vira duas! Cada lado tem a sua cor, e elas trocam em momentos diferentes. Toque só nas bolas certas de cada lado.", "The screen splits in two! Each side has its own colour, and they change at different times. Tap only the right balls on each side.", "¡La pantalla se divide en dos! Cada lado tiene su color, y cambian en momentos distintos. Toca solo los balones correctos de cada lado."],
    steps: [
      ["Olhe as duas regras antes de começar: esquerda e direita são diferentes.", "Check both rules before starting: left and right are different.", "Mira las dos reglas antes de empezar: izquierda y derecha son distintas."],
      ["Aos 10 s entra o TURBO e a cada minuto acelera mais. Cada acerto vale 1 ponto, e cada TURBO soma +1 por acerto! Tocou errado ou deixou cair uma bola certa? Perde 1 ❤️. Sem os 3 ❤️, zera (o recorde 🏆 fica).", "TURBO kicks in at 10 s and it speeds up every minute. Each hit is worth 1 point, and every TURBO adds +1 per hit! Wrong tap or let a right ball drop? You lose 1 ❤️. Lose all 3 and you're back to 0 (your record 🏆 stays).", "A los 10 s entra el TURBO y cada minuto acelera más. Cada acierto vale 1 punto, ¡y cada TURBO suma +1 por acierto! ¿Tocaste mal o dejaste caer un balón correcto? Pierdes 1 ❤️. Sin los 3 ❤️, vuelves a 0 (tu récord 🏆 queda)."],
      ["É como jogar olhando a bola e o companheiro ao mesmo tempo.", "It's like playing while watching the ball and your teammate at the same time.", "Es como jugar mirando el balón y al compañero al mismo tiempo."],
    ],
    unit: ["pontos", "points", "puntos"],
    anim: "chuva",
    animArgs: { sides: ["only", "only"] },
  },
  {
    id: "chuvamaluca", type: "mind", icon: "🌀", subs: ["decision", "reactions", "concentration"], tiers: [30, 70, 125, 185], max: 9999, rain: { sides: ["only", "avoid"], calm: true },
    title: ["Chuva dupla maluca", "Crazy double rain", "Lluvia doble loca"],
    desc: ["Dois lados, duas regras opostas! Na esquerda, toque SÓ na cor pedida. Na direita, toque em TODAS, MENOS na cor proibida.", "Two sides, two opposite rules! On the left, tap ONLY the given colour. On the right, tap ALL balls EXCEPT the forbidden colour.", "¡Dos lados, dos reglas opuestas! A la izquierda, toca SOLO el color pedido. A la derecha, toca TODOS, MENOS el color prohibido."],
    steps: [
      ["Esquerda: 'Só'. Direita: 'Menos'. Não troque as regras!", "Left: 'Only'. Right: 'Not'. Don't mix up the rules!", "Izquierda: 'Solo'. Derecha: 'Menos'. ¡No cambies las reglas!"],
      ["Aos 10 s entra o TURBO e a cada minuto acelera mais. Cada acerto vale 1 ponto, e cada TURBO soma +1 por acerto! Tocou errado ou deixou cair uma bola certa? Perde 1 ❤️. Sem os 3 ❤️, zera (o recorde 🏆 fica).", "TURBO kicks in at 10 s and it speeds up every minute. Each hit is worth 1 point, and every TURBO adds +1 per hit! Wrong tap or let a right ball drop? You lose 1 ❤️. Lose all 3 and you're back to 0 (your record 🏆 stays).", "A los 10 s entra el TURBO y cada minuto acelera más. Cada acierto vale 1 punto, ¡y cada TURBO suma +1 por acierto! ¿Tocaste mal o dejaste caer un balón correcto? Pierdes 1 ❤️. Sin los 3 ❤️, vuelves a 0 (tu récord 🏆 queda)."],
      ["A cabeça troca de regra num piscar de olhos, como no jogo de verdade.", "Your head switches rules in a blink, just like in a real game.", "La cabeza cambia de regla en un parpadeo, como en el partido de verdad."],
    ],
    unit: ["pontos", "points", "puntos"],
    anim: "chuva",
    animArgs: { sides: ["only", "avoid"] },
  },
  {
    id: "desvio", type: "mind", icon: "↕️", subs: ["decision", "reactions", "concentration"], tiers: [90, 200, 380, 580], max: 9999, dodge: {},
    title: ["Desvio duplo", "Double dodge", "Esquive doble"],
    desc: ["Uma bola em cada lado da tela, e os obstáculos sobem. Desvie dos dois lados ao mesmo tempo! Vale a sua maior pontuação sem bater.", "One ball on each side of the screen, and the obstacles rise. Dodge on both sides at once! Your best score without crashing counts.", "Un balón en cada lado de la pantalla, y los obstáculos suben. ¡Esquiva en los dos lados a la vez! Vale tu mejor puntuación sin chocar."],
    steps: [
      ["Toque no lado esquerdo para mover a bola da esquerda, e no direito para a da direita.", "Tap the left side to move the left ball, and the right side for the right ball.", "Toca el lado izquierdo para mover el balón de la izquierda, y el derecho para el de la derecha."],
      ["Bateu? Perde 1 ❤️. Sem os 3 ❤️, os pontos zeram (o recorde 🏆 fica).", "Crashed? You lose 1 ❤️. Lose all 3 and your points go back to zero (your record 🏆 stays).", "¿Chocaste? Pierdes 1 ❤️. Sin los 3 ❤️, los puntos vuelven a cero (tu récord 🏆 queda)."],
      ["Jogue à vontade! Aos 10 s entra o TURBO e a cada minuto acelera mais. Cada acerto vale 1 ponto, e cada TURBO soma +1 por acerto! Aperte Parar para gravar.", "Play as long as you like! TURBO kicks in at 10 s and it speeds up every minute. Each hit is worth 1 point, and every TURBO adds +1 per hit! Press Stop to save.", "¡Juega cuanto quieras! A los 10 s entra el TURBO y cada minuto acelera más. Cada acierto vale 1 punto, ¡y cada TURBO suma +1 por acierto! Pulsa Parar para guardar."],
      ["No celular, use um dedo de cada mão. Tente sempre bater o seu recorde!", "On a phone, use one finger from each hand. Always try to beat your record!", "En el móvil, usa un dedo de cada mano. ¡Intenta siempre superar tu récord!"],
    ],
    unit: ["pontos", "points", "puntos"],
    anim: true,
  },
  {
    id: "blokolor", type: "mind", icon: "🟨", subs: ["decision", "reactions", "concentration"], tiers: [25, 80, 180, 350], max: 9999, blok: {},
    title: ["Blokolor", "Blokolor", "Blokolor"],
    desc: ["Bolas coloridas caem e cada bloco só come a bola da sua cor. Tire os blocos errados da frente e coloque o certo embaixo da bola!", "Coloured balls fall and each block only eats balls of its own colour. Move the wrong blocks away and put the right one under the ball!", "Caen balones de colores y cada bloque solo come el balón de su color. ¡Saca los bloques equivocados y pon el correcto debajo del balón!"],
    steps: [
      ["Toque em qualquer ponto de uma linha para levar o bloco dela até lá. Também dá para arrastar.", "Tap anywhere on a line to move its block there. You can drag it too.", "Toca cualquier punto de una línea para llevar su bloque allí. También puedes arrastrarlo."],
      ["A bola encostou num bloco de outra cor, ou passou sem ser comida? Perde 1 ❤️. Sem os 3 ❤️, os pontos zeram (o recorde 🏆 fica).", "Ball touched a block of another colour, or got through uneaten? You lose 1 ❤️. Lose all 3 and your points go back to zero (your record 🏆 stays).", "¿El balón tocó un bloque de otro color o pasó sin ser comido? Pierdes 1 ❤️. Sin los 3 ❤️, los puntos vuelven a cero (tu récord 🏆 queda)."],
      ["🌈 Bola arco-íris: qualquer bloco come, e vale o dobro! 💣 Bomba: não pode encostar em nenhum bloco. Deixe passar e ganhe ponto!", "🌈 Rainbow ball: any block can eat it, and it's worth double! 💣 Bomb: it must not touch any block. Let it through to score!", "🌈 Balón arcoíris: cualquier bloque lo come, ¡y vale el doble! 💣 Bomba: no puede tocar ningún bloque. ¡Déjala pasar y suma!"],
      ["Aos 10 s entra o TURBO, e depois acelera mais a cada 25 s. Cada bola comida vale 1 ponto, e cada TURBO soma +1! Aperte Parar para gravar.", "TURBO kicks in at 10 s, then it speeds up again every 25 s. Each ball eaten is worth 1 point, and every TURBO adds +1! Press Stop to save.", "A los 10 s entra el TURBO, y luego acelera más cada 25 s. Cada balón comido vale 1 punto, ¡y cada TURBO suma +1! Pulsa Parar para guardar."],
      ["🔀 TROCOU! No TURBO x2, as linhas trocam de cor de vez em quando. Olhe de novo antes de mexer!", "🔀 SWAP! In TURBO x2, the lines swap colours every now and then. Look again before you move!", "🔀 ¡CAMBIO! En TURBO x2, las líneas cambian de color de vez en cuando. ¡Mira otra vez antes de mover!"],
    ],
    unit: ["pontos", "points", "puntos"],
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
      story: { anim: "historia", id: "rotina" },
      q: ["O que ajudou no pênalti?", "What helped with the penalty?", "¿Qué ayudó en el penal?"],
      opts: [
        ["🔁 Fazer meus passos de sempre", "🔁 Doing my usual steps", "🔁 Hacer mis pasos de siempre"],
        ["⚡ Chutar correndo, sem pensar", "⚡ Rushing the kick without thinking", "⚡ Patear apurado, sin pensar"],
      ],
      why: ["Os mesmos passos acalmam a cabeça, e o corpo chuta certinho.", "The same steps calm your head, and your body kicks just right.", "Los mismos pasos calman la cabeza, y el cuerpo patea justo."],
    },
    {
      q: ["Por que o craque faz sempre os mesmos passos antes do pênalti?", "Why does a great player always do the same steps before a penalty?", "¿Por qué el crack hace siempre los mismos pasos antes del penal?"],
      opts: [
        ["Para ficar calmo e o corpo saber o que fazer", "To stay calm so the body knows what to do", "Para estar tranquilo y que el cuerpo sepa qué hacer"],
        ["Para dar sorte, tipo mágica", "For luck, like magic", "Para tener suerte, como magia"],
        ["Para deixar o goleiro com sono", "To make the goalkeeper sleepy", "Para que el arquero se duerma"],
      ],
      why: ["Os mesmos passos acalmam a cabeça, e o corpo chuta sozinho.", "The same steps calm your head, and your body does the kick.", "Los mismos pasos calman la cabeza, y el cuerpo patea solo."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "pulinho"],
        text: ["Pênalti: hora da rotina", "Penalty: routine time", "Penal: hora de la rutina"],
        steps: [
          { d: 2.4, mood: { tremelique: "big" }, say: ["tremelique", ["Todo mundo está olhando...", "Everyone's watching...", "Todos están mirando..."]] },
          { d: 2.6, mood: { tremelique: "small" }, say: ["capitao", ["Bola no lugar. Olho o canto. Respiro.", "Ball down. Pick the corner. Breathe.", "Balón en su lugar. Miro el rincón. Respiro."]], text: ["Sempre os mesmos passos", "Always the same steps", "Siempre los mismos pasos"] },
          { d: 2.2, say: ["capitao", ["Firme!", "Firm!", "¡Firme!"]], text: ["O corpo já sabe o que fazer", "The body already knows what to do", "El cuerpo ya sabe qué hacer"] },
        ],
      },
    },
    {
      q: ["Você errou. Como apertar o 'botão de reset' e voltar ao jogo?", "You made a mistake. How do you press 'reset' and get back in?", "Te equivocaste. ¿Cómo aprietas 'reiniciar' y vuelves al juego?"],
      opts: [
        ["Bato na coxa, respiro e digo 'próxima!'", "Tap my leg, breathe and say 'next!'", "Me toco el muslo, respiro y digo '¡próxima!'"],
        ["Peço para sair do jogo", "Ask to come off", "Pido salir del partido"],
        ["Reclamo até a raiva passar", "Complain until I'm not angry", "Protesto hasta que se pase la rabia"],
      ],
      why: ["Capitão Agora: Mão na coxa, respira, próxima! Em 5 segundos você voltou.", "Captain Now: Hand on leg, breathe, next! In 5 seconds you're back.", "Capitán Ahora: Mano al muslo, respira, ¡próxima! En 5 segundos volviste."],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "faisca"],
        text: ["Errou o domínio...", "Bad first touch...", "Fallaste el control..."],
        steps: [
          { d: 2.4, boss: "nublada", mood: { nublada: "big" }, say: ["nublada", ["Que vergonha... errei.", "How embarrassing... I messed up.", "Qué vergüenza... fallé."]], cloud: ["errei...", "I messed up...", "fallé..."] },
          { d: 2.8, boss: "capitao", mood: { nublada: "" }, say: ["capitao", ["Mão na coxa. Respira... Próxima!", "Hand on leg. Breathe... Next!", "Mano al muslo. Respira... ¡Próxima!"]], text: ["Botão de reset: 5 segundos", "Reset button: 5 seconds", "Botón de reinicio: 5 segundos"] },
        ],
      },
    },
    {
      q: ["Amanhã tem jogo. O que fazer hoje à noite?", "There's a game tomorrow. What should you do tonight?", "Mañana hay partido. ¿Qué haces esta noche?"],
      opts: [
        ["Mochila pronta, cama cedo, pensar em boas jogadas", "Bag packed, early bed, think of good plays", "Bolso listo, cama temprano, pensar en buenas jugadas"],
        ["Ficar no celular até tarde", "Stay on my phone until late", "Quedarme con el celular hasta tarde"],
        ["Comer um monte de besteira", "Eat loads of junk food", "Comer un montón de comida chatarra"],
      ],
      why: ["Mochila pronta e uma boa noite de sono: amanhã você chega pronto!", "Bag ready and a good night's sleep: tomorrow you arrive ready!", "Bolso listo y una buena noche de sueño: ¡mañana llegas preparado!"],
    },
    {
      q: ["Chegou ao campo no dia do jogo. O que ajuda mais?", "You get to the pitch on game day. What helps most?", "Llegaste a la cancha el día del partido. ¿Qué ayuda más?"],
      opts: [
        ["Aquecer do jeito de sempre", "Warm up the way I always do", "Calentar como siempre"],
        ["Chegar correndo, em cima da hora", "Arrive rushing, at the last minute", "Llegar corriendo, sobre la hora"],
        ["Ficar olhando quem está na arquibancada", "Stare at who's in the stands", "Mirar quién está en la tribuna"],
      ],
      why: ["Aquecer igual ao treino faz qualquer campo parecer o seu.", "Warming up like in training makes any pitch feel like yours.", "Calentar como en el entreno hace que cualquier cancha parezca la tuya."],
    },
    {
      q: ["Você vai bater uma falta. O que fazer antes?", "You're about to take a free kick. What do you do first?", "Vas a patear un tiro libre. ¿Qué haces antes?"],
      opts: [
        ["Ajeito a bola, olho o alvo, respiro e chuto", "Set the ball, look at the target, breathe, kick", "Acomodo el balón, miro el objetivo, respiro y pateo"],
        ["Faço tudo diferente a cada vez", "Do it differently every time", "Hago todo distinto cada vez"],
        ["Chuto correndo, sem olhar", "Kick in a rush, without looking", "Pateo apurado, sin mirar"],
      ],
      why: ["Os mesmos passos, na mesma ordem, deixam o chute mais certeiro.", "The same steps, in the same order, make the kick more accurate.", "Los mismos pasos, en el mismo orden, hacen el tiro más preciso."],
    },
    {
      q: ["Antes da jogada, que tipo de palavra você diz para você mesmo?", "Before a play, what kind of word do you tell yourself?", "Antes de la jugada, ¿qué tipo de palabra te dices?"],
      opts: [
        ["Curta e de ação: 'firme!', 'olha!'", "Short and active: 'firm!', 'look!'", "Corta y de acción: '¡firme!', '¡mira!'"],
        ["Um discurso bem comprido", "A really long speech", "Un discurso bien largo"],
        ["Uma bronca: 'não erra, burro!'", "A telling-off: 'don't miss, dummy!'", "Un reto: '¡no falles, burro!'"],
      ],
      why: ["Palavra curta cabe no meio do jogo e diz ao corpo o que fazer.", "A short word fits in the middle of the game and tells your body what to do.", "Una palabra corta entra en medio del juego y le dice al cuerpo qué hacer."],
    },
    {
      q: ["Não deu tempo de fazer sua rotina toda. E agora?", "There was no time for your whole routine. Now what?", "No te dio el tiempo para toda tu rutina. ¿Y ahora?"],
      opts: [
        ["Faço o principal: respiro e digo minha palavra", "Do the main part: breathe and say my word", "Hago lo principal: respiro y digo mi palabra"],
        ["Já era, vou jogar mal", "That's it, I'll play badly", "Ya fue, voy a jugar mal"],
        ["Peço para o jogo me esperar", "Ask the game to wait for me", "Pido que el partido me espere"],
      ],
      why: ["Rotina não é amuleto. Respirar e dizer a palavra leva 3 segundos.", "A routine isn't a lucky charm. Breathing and saying your word take 3 seconds.", "La rutina no es un amuleto. Respirar y decir tu palabra lleva 3 segundos."],
    },
    {
      q: ["O jogo acabou. O que é bom fazer?", "The game is over. What's good to do?", "Terminó el partido. ¿Qué conviene hacer?"],
      opts: [
        ["Alongar, beber água e lembrar 1 acerto", "Stretch, drink water and remember 1 good play", "Estirar, tomar agua y recordar 1 acierto"],
        ["Ir direto para o celular", "Go straight to my phone", "Ir directo al celular"],
        ["Ficar a noite toda pensando nos erros", "Spend all night thinking about my mistakes", "Pasar toda la noche pensando en los errores"],
      ],
      why: ["Corpo cuidado! Lembre 1 coisa boa e escolha 1 para treinar.", "Body looked after! Remember 1 good thing and pick 1 to practise.", "¡Cuerpo cuidado! Recuerda 1 cosa buena y elige 1 para entrenar."],
    },
  ],

  menteTermometro: [
    {
      story: { anim: "historia", id: "termometro" },
      q: ["Como é melhor entrar em campo?", "What's the best way to play?", "¿Cómo es mejor entrar a la cancha?"],
      opts: [
        ["🌡️ Ligado, mas calmo", "🌡️ Switched on, but calm", "🌡️ Activo, pero tranquilo"],
        ["🔥 Fervendo, com tudo em todo mundo", "🔥 Boiling, all-in on everyone", "🔥 Hirviendo, con todo contra todos"],
      ],
      why: ["Nem frio, nem fervendo: ligado e calmo joga melhor!", "Not cold, not boiling: on and calm plays better!", "Ni frío ni hirviendo: ¡activo y tranquilo juega mejor!"],
    },
    {
      q: ["Frio, quente ou no meio: como é melhor entrar em campo?", "Cold, hot or in the middle: how is it best to play?", "Frío, caliente o en el medio: ¿cómo es mejor jugar?"],
      opts: [
        ["No meio: ligado, mas calmo", "In the middle: awake, but calm", "En el medio: despierto, pero tranquilo"],
        ["Frio: mole, quase dormindo", "Cold: floppy, almost asleep", "Frío: flojo, casi dormido"],
        ["Fervendo: agitado ao máximo", "Boiling: as wound up as possible", "Hirviendo: lo más agitado posible"],
      ],
      why: ["Frio, manda o Sr. Sofá; quente, a Faísca. No meio, o Capitão joga!", "Cold, Mr. Couch drives; hot, Spark does. In the middle, the Captain plays!", "Frío, manda el Sr. Sofá; caliente, Chispa. ¡En el medio juega el Capitán!"],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "faisca"],
        steps: [
          { d: 2.2, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Frio... que preguiça... zzz", "Cold... so lazy... zzz", "Frío... qué pereza... zzz"]], text: ["Frio demais: lento", "Too cold: slow", "Muy frío: lento"] },
          { d: 2.2, boss: "faisca", mood: { sofa: "", faisca: "big" }, say: ["faisca", ["Fervendo! Vou com tudo em todo mundo!", "Boiling! Going all-in on everyone!", "¡Hirviendo! ¡Voy con todo contra todos!"]], text: ["Quente demais: descontrolado", "Too hot: out of control", "Muy caliente: descontrolado"] },
          { d: 2.6, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["Ligado e calmo. Agora sim!", "Awake and calm. That's it!", "Despierto y tranquilo. ¡Ahora sí!"]], text: ["No meio: ligado e calmo", "In the middle: awake and calm", "En el medio: despierto y tranquilo"] },
        ],
      },
    },
    {
      q: ["Antes do jogo você está mole e sem vontade. Como acordar?", "Before the game you feel floppy and lazy. How do you wake up?", "Antes del partido estás flojo y sin ganas. ¿Cómo te despiertas?"],
      opts: [
        ["Dar pulos e gritar 'vamos!'", "Jump around and shout 'let's go!'", "Dar saltos y gritar '¡vamos!'"],
        ["Deitar mais um pouquinho", "Lie down a little longer", "Acostarme un ratito más"],
        ["Esperar parado a vontade chegar", "Stand still and wait to feel like it", "Esperar quieto a que lleguen las ganas"],
      ],
      why: ["Mexer o corpo acorda a cabeça e esquenta o termômetro.", "Moving your body wakes your head and warms the thermometer.", "Mover el cuerpo despierta la cabeza y calienta el termómetro."],
    },
    {
      q: ["Você está tremendo de nervoso, coração disparado. O que fazer?", "You're shaking with nerves, heart racing. What do you do?", "Estás temblando de nervios, con el corazón a mil. ¿Qué haces?"],
      opts: [
        ["Respirar devagar, soltando o ar bem comprido", "Breathe slowly, letting the air out long", "Respirar despacio, soltando el aire bien largo"],
        ["Correr de um lado para o outro", "Run from side to side", "Correr de un lado a otro"],
        ["Pensar em tudo que pode dar errado", "Think of everything that could go wrong", "Pensar en todo lo que puede salir mal"],
      ],
      why: ["Soltar o ar devagar é o freio do corpo: o coração acalma.", "Letting the air out slowly is your body's brake: your heart calms down.", "Soltar el aire despacio es el freno del cuerpo: el corazón se calma."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "tremelique"],
        steps: [
          { d: 2.4, boss: "zumzum", mood: { zumzum: "big", tremelique: "big" }, say: ["zumzum", ["Coração a mil! Tum-tum-tum!", "Heart racing! Thump-thump-thump!", "¡Corazón a mil! ¡Pum-pum-pum!"]], text: ["Termômetro lá em cima", "Thermometer sky-high", "Termómetro por las nubes"] },
          { d: 2.8, boss: "capitao", mood: { zumzum: "small", tremelique: "small" }, say: ["capitao", ["Puxa o ar... e solta beeem devagar.", "Breathe in... and out reeeally slowly.", "Toma aire... y suéltalo muuuy despacio."]], text: ["O ar comprido é o freio", "The long breath out is the brake", "El aire largo es el freno"] },
        ],
      },
    },
    {
      q: ["Como saber se você está frio, no meio ou quente?", "How do you know if you're cold, in the middle or hot?", "¿Cómo saber si estás frío, en el medio o caliente?"],
      opts: [
        ["Sentindo o corpo: coração, respiração, músculos", "Feeling my body: heart, breathing, muscles", "Sintiendo el cuerpo: corazón, respiración, músculos"],
        ["Não tem como saber", "There's no way to know", "No hay forma de saber"],
        ["Perguntando para a torcida", "Asking the crowd", "Preguntándole a la hinchada"],
      ],
      why: ["O corpo dá sinais. Percebeu cedo? Dá tempo de ajustar!", "Your body gives signs. Notice early and there's time to adjust!", "El cuerpo da señales. ¿Lo notaste temprano? ¡Hay tiempo de ajustar!"],
    },
    {
      q: ["Todo mundo joga melhor com a mesma energia?", "Does everyone play best with the same energy?", "¿Todos juegan mejor con la misma energía?"],
      opts: [
        ["Não: uns gostam mais calmos, outros mais ligados", "No: some like it calmer, others more fired up", "No: unos prefieren más calma, otros más energía"],
        ["Sim, todo mundo é igual", "Yes, everyone's the same", "Sí, todos son iguales"],
        ["Só jogador profissional tem isso", "Only pro players have that", "Solo los profesionales tienen eso"],
      ],
      why: ["Lembre do seu melhor jogo: como você estava antes dele?", "Remember your best game: how did you feel before it?", "Recuerda tu mejor partido: ¿cómo estabas antes?"],
    },
    {
      q: ["Para bater um pênalti, como deve estar a sua energia?", "To take a penalty, how should your energy be?", "Para patear un penal, ¿cómo debe estar tu energía?"],
      opts: [
        ["Mais calma, para chutar certinho", "Calmer, to kick it just right", "Más tranquila, para patear justo"],
        ["Bem agitada, pulando sem parar", "Really wound up, bouncing non-stop", "Bien agitada, saltando sin parar"],
        ["Quase dormindo", "Almost asleep", "Casi dormida"],
      ],
      why: ["Chute certeiro pede calma; corrida pela bola pede mais energia.", "Precise kicks need calm; racing for the ball needs more energy.", "Un tiro preciso pide calma; correr por el balón pide más energía."],
    },
    {
      q: ["Seu time está parado, todo mundo desligado. O que fazer?", "Your team is standing still, everyone switched off. What do you do?", "Tu equipo está quieto, todos apagados. ¿Qué haces?"],
      opts: [
        ["Bater palma e animar o time", "Clap and cheer the team on", "Aplaudir y animar al equipo"],
        ["Ficar quieto também", "Stay quiet too", "Quedarme callado también"],
        ["Brigar com todo mundo", "Yell at everyone", "Pelearme con todos"],
      ],
      why: ["Energia pega! Uma voz animada pode acordar o time inteiro.", "Energy spreads! One cheerful voice can wake up the whole team.", "¡La energía se contagia! Una voz animada puede despertar a todo el equipo."],
    },
    {
      q: ["Seus músculos estão duros de nervoso. O que ajuda?", "Your muscles are stiff with nerves. What helps?", "Tus músculos están duros de nervios. ¿Qué ayuda?"],
      opts: [
        ["Apertar forte 5 segundos e soltar", "Squeeze hard for 5 seconds and let go", "Apretar fuerte 5 segundos y soltar"],
        ["Ficar ainda mais duro", "Get even stiffer", "Ponerme todavía más duro"],
        ["Fingir que não é nada", "Pretend it's nothing", "Hacer como que no es nada"],
      ],
      why: ["Apertar e soltar ensina o músculo a relaxar de verdade.", "Squeezing and letting go teaches your muscles to really relax.", "Apretar y soltar enseña al músculo a relajarse de verdad."],
    },
  ],

  menteLanterna: [
    {
      story: { anim: "historia", id: "lanterna" },
      q: ["Na hora do chute, pra onde vai a lanterna?", "When you shoot, where does the torch point?", "Al patear, ¿adónde apunta la linterna?"],
      opts: [
        ["🔦 Na bola e no gol", "🔦 At the ball and the goal", "🔦 Al balón y al arco"],
        ["🐦 No passarinho", "🐦 At the bird", "🐦 Al pajarito"],
      ],
      why: ["Atenção é lanterna: na hora do chute, ilumina só a bola!", "Attention is a torch: when you shoot, light up only the ball!", "La atención es una linterna: ¡al patear, ilumina solo el balón!"],
    },
    {
      q: ["Sua atenção é uma lanterna. Bola no meio-campo: como ela fica?", "Your attention is a torch. Ball in midfield: how is it?", "Tu atención es una linterna. Balón en el medio: ¿cómo está?"],
      opts: [
        ["Aberta: vejo colegas, adversários e espaços", "Wide: I see teammates, opponents and space", "Abierta: veo compañeros, rivales y espacios"],
        ["Fechada só na bola", "Narrow, only on the ball", "Cerrada solo en el balón"],
        ["Apontada para a arquibancada", "Pointed at the stands", "Apuntando a la tribuna"],
      ],
      why: ["Para ver o jogo, a luz abre. Para chutar, ela fecha no alvo.", "To see the game, the beam opens. To shoot, it closes on the target.", "Para ver el juego, la luz se abre. Para patear, se cierra en el objetivo."],
    },
    {
      q: ["Na hora de chutar ao gol, para onde vai a lanterna?", "When you shoot at goal, where does the torch point?", "Al patear al arco, ¿adónde apunta la linterna?"],
      opts: [
        ["Fechada no canto que escolhi", "Narrow, on the corner I picked", "Cerrada en el rincón que elegí"],
        ["No goleiro que está gritando", "At the goalkeeper who's shouting", "En el arquero que grita"],
        ["No técnico, para ver se ele viu", "At the coach, to see if he saw", "En el entrenador, a ver si miró"],
      ],
      why: ["Na hora do chute, a luz fica fininha e forte, só no alvo.", "When you shoot, the beam is thin and strong, only on the target.", "Al patear, la luz es finita y fuerte, solo en el objetivo."],
    },
    {
      q: ["O que é uma distração?", "What is a distraction?", "¿Qué es una distracción?"],
      opts: [
        ["Algo que puxa a lanterna para fora do jogo", "Something that pulls the torch off the game", "Algo que saca la linterna del juego"],
        ["Um tipo de drible", "A kind of dribble", "Un tipo de gambeta"],
        ["Um adversário muito rápido", "A really fast opponent", "Un rival muy rápido"],
      ],
      why: ["Grito, placar, pensamento... Percebeu? Traz a luz de volta para a bola!", "Shouts, the score, a thought... Noticed? Bring the beam back to the ball!", "Gritos, marcador, pensamientos... ¿Te diste cuenta? ¡Trae la luz de vuelta al balón!"],
    },
    {
      q: ["Torcida, técnico e colegas gritando ao mesmo tempo. Como focar?", "Crowd, coach and teammates all shouting at once. How do you focus?", "Hinchada, entrenador y compañeros gritando a la vez. ¿Cómo te concentras?"],
      opts: [
        ["Escuto quem importa e digo minha palavra", "Listen to who matters and say my word", "Escucho a quien importa y digo mi palabra"],
        ["Respondo todo mundo", "Answer everyone", "Le contesto a todos"],
        ["Tapo os ouvidos e paro", "Cover my ears and stop", "Me tapo los oídos y me quedo quieto"],
      ],
      why: ["Capitão Agora: Olha, decide, faz! E a luz volta para o jogo.", "Captain Now: Look, decide, do! And the beam is back on the game.", "Capitán Ahora: ¡Mira, decide, hazlo! Y la luz vuelve al juego."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "tremelique"],
        steps: [
          { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["Gritaria! Placar! Quem está olhando?", "Shouting! Score! Who's watching?", "¡Gritos! ¡Marcador! ¿Quién mira?"]], cloud: ["UUUH! VAI! TOCA!", "OOOH! GO! PASS!", "¡UUUH! ¡VAMOS!"], text: ["Barulho por todo lado", "Noise everywhere", "Ruido por todos lados"] },
          { d: 2.6, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Olha, decide, faz.", "Look, decide, do.", "Mira, decide, hazlo."]], text: ["Uma palavra e a luz volta", "One word and the beam is back", "Una palabra y vuelve la luz"] },
        ],
      },
    },
    {
      q: ["Antes de receber a bola, o que é bom dizer para você mesmo?", "Before getting the ball, what's good to tell yourself?", "Antes de recibir el balón, ¿qué conviene decirte?"],
      opts: [
        ["'Olha, decide, faz'", "'Look, decide, do'", "'Mira, decide, hazlo'"],
        ["'Tomara que não venha para mim'", "'Hope it doesn't come to me'", "'Ojalá no me llegue'"],
        ["'Não erra, não erra'", "'Don't miss, don't miss'", "'No falles, no falles'"],
      ],
      why: ["Palavras de ação mostram para a cabeça onde pôr a luz.", "Action words show your head where to point the beam.", "Las palabras de acción le muestran a la cabeza dónde poner la luz."],
    },
    {
      q: ["Dá para treinar a atenção?", "Can you train your attention?", "¿Se puede entrenar la atención?"],
      opts: [
        ["Sim, como um músculo: com jogos de atenção", "Yes, like a muscle: with focus games", "Sí, como un músculo: con juegos de atención"],
        ["Não: ou você nasce focado ou não", "No: you're born focused or you're not", "No: o naces concentrado o no"],
        ["Só jogando videogame", "Only by playing video games", "Solo jugando videojuegos"],
      ],
      why: ["A Grade de concentração e o Contador de nuvens treinam a sua lanterna.", "The Concentration grid and the Cloud counter train your torch.", "La Cuadrícula de concentración y el Contador de nubes entrenan tu linterna."],
    },
    {
      q: ["Dá para ficar focado o jogo inteiro, sem nenhuma pausa?", "Can you stay focused the whole game, with no break at all?", "¿Se puede estar concentrado todo el partido, sin ninguna pausa?"],
      opts: [
        ["Não: luz forte no lance, descanso na parada", "No: strong beam in play, rest at stoppages", "No: luz fuerte en la jugada, descanso en la pausa"],
        ["Sim, o jogo todo sem piscar", "Yes, the whole game without blinking", "Sí, todo el partido sin parpadear"],
        ["Não consigo nem um segundo", "I can't even do one second", "No puedo ni un segundo"],
      ],
      why: ["A lanterna tem bateria: recarregue no lateral e na bola fora.", "The torch has a battery: recharge on throw-ins and when the ball's out.", "La linterna tiene batería: recárgala en el lateral y cuando sale el balón."],
    },
    {
      q: ["Você ainda pensa no lance errado, e o jogo continua. Onde está a lanterna?", "You're still thinking about your mistake, and the game goes on. Where's the torch?", "Sigues pensando en la jugada fallada y el partido sigue. ¿Dónde está la linterna?"],
      opts: [
        ["Presa no erro: trago de volta para a bola", "Stuck on the mistake: I bring it back to the ball", "Atrapada en el error: la traigo de vuelta al balón"],
        ["No lugar certo", "In the right place", "En el lugar correcto"],
        ["No jogo da semana que vem", "On next week's game", "En el partido de la semana que viene"],
      ],
      why: ["A lanterna ilumina uma coisa só. Se está no erro, não está no jogo.", "The torch lights one thing. If it's on the mistake, it's not on the game.", "La linterna ilumina una sola cosa. Si está en el error, no está en el juego."],
    },
  ],

  menteMetas: [
    {
      story: { anim: "historia", id: "metas" },
      q: ["Como chegar num sonho grande?", "How do you reach a big dream?", "¿Cómo llegar a un sueño grande?"],
      opts: [
        ["🪜 Um degrau de cada vez", "🪜 One step at a time", "🪜 Un escalón a la vez"],
        ["🦘 Pulando direto lá pro alto", "🦘 Jumping straight to the top", "🦘 Saltando directo arriba"],
      ],
      why: ["Sonho grande, passos pequenos. Um de cada vez!", "Big dream, small steps. One at a time!", "Sueño grande, pasos pequeños. ¡Uno a la vez!"],
    },
    {
      q: ["Qual destas metas depende só de você?", "Which of these goals depends only on you?", "¿Cuál de estas metas depende solo de ti?"],
      opts: [
        ["Treinar o pé fraco 10 minutos por dia", "Practise my weak foot 10 minutes a day", "Entrenar la pierna mala 10 minutos por día"],
        ["Ser campeão", "Be champion", "Ser campeón"],
        ["Ser o artilheiro", "Be top scorer", "Ser el goleador"],
      ],
      why: ["Ser campeão depende de muita coisa. Treinar todo dia depende só de você.", "Being champion depends on lots of things. Training every day depends only on you.", "Ser campeón depende de muchas cosas. Entrenar cada día depende solo de ti."],
    },
    {
      q: ["Qual destas é uma boa meta?", "Which of these is a good goal?", "¿Cuál de estas es una buena meta?"],
      opts: [
        ["'Fazer 30 embaixadinhas até o fim do mês'", "'Do 30 keep-ups by the end of the month'", "'Hacer 30 toques antes de fin de mes'"],
        ["'Melhorar' (mas melhorar o quê?)", "'Get better' (but at what?)", "'Mejorar' (¿pero mejorar qué?)"],
        ["'Fazer 1000 embaixadinhas amanhã'", "'Do 1000 keep-ups tomorrow'", "'Hacer 1000 toques mañana'"],
      ],
      why: ["Boa meta diz o quê e até quando. Difícil, mas possível!", "A good goal says what and by when. Hard, but possible!", "Una buena meta dice qué y para cuándo. ¡Difícil, pero posible!"],
    },
    {
      q: ["Por que colar sua meta num lugar que você vê todo dia?", "Why stick your goal somewhere you see every day?", "¿Por qué pegar tu meta en un lugar que ves todos los días?"],
      opts: [
        ["Para não esquecer dela", "So I don't forget it", "Para no olvidarla"],
        ["Para me exibir para os outros", "To show off to others", "Para presumir ante los demás"],
        ["Não serve para nada", "It's no use at all", "No sirve para nada"],
      ],
      why: ["Meta esquecida, o Sr. Sofá leva embora!", "Forget your goal and Mr. Couch takes it away!", "¡Meta olvidada, se la lleva el Sr. Sofá!"],
    },
    {
      q: ["O prazo acabou e você não bateu a meta. E agora?", "Time's up and you didn't reach your goal. Now what?", "Se acabó el plazo y no cumpliste la meta. ¿Y ahora?"],
      opts: [
        ["Vejo o que faltou, ajusto e continuo", "See what was missing, adjust, keep going", "Veo qué faltó, ajusto y sigo"],
        ["Nunca mais faço metas", "Never set goals again", "Nunca más hago metas"],
        ["Finjo que bati", "Pretend I made it", "Finjo que la cumplí"],
      ],
      why: ["Faltou treino? O prazo era curto? Ajuste e siga em frente!", "Not enough practice? Too little time? Adjust and keep going!", "¿Faltó entrenar? ¿El plazo era corto? ¡Ajusta y sigue!"],
    },
    {
      q: ["Sonhar em ser jogador profissional é ruim?", "Is dreaming of going pro a bad thing?", "¿Soñar con ser futbolista profesional es malo?"],
      opts: [
        ["Não! Sonho grande, passos pequenos todo dia", "No! Big dream, small steps every day", "¡No! Sueño grande, pasos pequeños cada día"],
        ["Sim, é melhor nem sonhar", "Yes, better not to dream", "Sí, mejor ni soñar"],
        ["Só sonhar já basta, nem precisa treinar", "Dreaming is enough, no need to train", "Con soñar alcanza, no hace falta entrenar"],
      ],
      why: ["Sonhe grande e treine um pouquinho todo dia.", "Dream big and train a little every day.", "Sueña en grande y entrena un poquito cada día."],
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
      q: ["Quantas metas é bom ter ao mesmo tempo?", "How many goals is it good to have at once?", "¿Cuántas metas conviene tener a la vez?"],
      opts: [
        ["Poucas: de 1 a 3", "A few: 1 to 3", "Pocas: de 1 a 3"],
        ["Umas 50, todas de uma vez", "About 50, all at once", "Unas 50, todas a la vez"],
        ["Nenhuma", "None", "Ninguna"],
      ],
      why: ["Com poucas metas, você coloca toda a sua força nelas.", "With few goals, you put all your strength into them.", "Con pocas metas, pones toda tu fuerza en ellas."],
    },
    {
      q: ["Como saber se você está melhorando?", "How do you know you're getting better?", "¿Cómo saber si estás mejorando?"],
      opts: [
        ["Anoto os treinos e comparo comigo de antes", "Write down my training, compare with the old me", "Anoto los entrenos y me comparo conmigo de antes"],
        ["Me comparo só com o craque do time", "Only compare myself with the team's star", "Me comparo solo con el crack del equipo"],
        ["Não precisa saber", "No need to know", "No hace falta saberlo"],
      ],
      why: ["Seu rival é você de ontem. Os recordes do app mostram isso!", "Your rival is yesterday's you. The app's records show it!", "Tu rival eres tú de ayer. ¡Los récords de la app lo muestran!"],
    },
    {
      q: ["Você bateu a meta! E agora?", "You reached your goal! Now what?", "¡Cumpliste la meta! ¿Y ahora?"],
      opts: [
        ["Comemoro e faço outra, um pouco mais difícil", "Celebrate and set another, a bit harder", "Festejo y hago otra, un poco más difícil"],
        ["Paro de treinar", "Stop training", "Dejo de entrenar"],
        ["Fico me achando o melhor do mundo", "Think I'm the best in the world", "Me creo el mejor del mundo"],
      ],
      why: ["Pulinho: Uhuu! Comemora e sobe mais um degrau!", "Bouncy: Woohoo! Celebrate and climb one more step!", "Saltito: ¡Yupi! ¡Festeja y sube un escalón más!"],
    },
  ],

  menteTime: [
    {
      story: { anim: "historia", id: "timeunido" },
      q: ["O que ajudou o amigo?", "What helped your friend?", "¿Qué ayudó al amigo?"],
      opts: [
        ["📣 Avisar: 'Ladrão!'", "📣 Shouting: 'Man on!'", "📣 Avisar: '¡Te marcan!'"],
        ["🤐 Ficar quieto", "🤐 Staying quiet", "🤐 Quedarse callado"],
      ],
      why: ["Quem fala em campo ajuda o time todo!", "Talking on the pitch helps the whole team!", "¡Quien habla en la cancha ayuda a todo el equipo!"],
    },
    {
      q: ["Por que é importante falar com o time em campo?", "Why is it important to talk to your team on the pitch?", "¿Por qué es importante hablarle al equipo en la cancha?"],
      opts: [
        ["Ajuda o colega: 'ladrão!', 'vira!', 'sozinho!'", "It helps your teammate: 'man on!', 'turn!', 'you're free!'", "Ayuda al compañero: '¡ladrón!', '¡gira!', '¡solo!'"],
        ["Não é: cada um joga sozinho", "It isn't: everyone plays alone", "No lo es: cada uno juega solo"],
        ["Serve só para reclamar do juiz", "It's just for moaning at the referee", "Sirve solo para protestarle al árbitro"],
      ],
      why: ["Seu colega não tem olhos nas costas. Sua voz vira os olhos dele.", "Your teammate has no eyes in the back of his head. Your voice becomes his eyes.", "Tu compañero no tiene ojos en la espalda. Tu voz se vuelve sus ojos."],
    },
    {
      q: ["Seu colega está de costas e vem um adversário por trás. O que gritar?", "Your teammate has his back turned and an opponent is coming. What do you shout?", "Tu compañero está de espaldas y viene un rival por detrás. ¿Qué gritas?"],
      opts: [
        ["'Ladrão!'", "'Man on!'", "'¡Ladrón!'"],
        ["'Vira!'", "'Turn!'", "'¡Gira!'"],
        ["Nada", "Nothing", "Nada"],
      ],
      why: ["'Ladrão!' avisa que vem marcação: toque rápido ou proteja a bola.", "'Man on!' warns pressure is coming: pass quickly or shield the ball.", "'¡Ladrón!' avisa que viene la marca: toca rápido o protege el balón."],
    },
    {
      q: ["Seu colega está de costas e não tem ninguém perto. O que gritar?", "Your teammate has his back turned and nobody is near. What do you shout?", "Tu compañero está de espaldas y no hay nadie cerca. ¿Qué gritas?"],
      opts: [
        ["'Vira!'", "'Turn!'", "'¡Gira!'"],
        ["'Ladrão!'", "'Man on!'", "'¡Ladrón!'"],
        ["'Chuta!'", "'Shoot!'", "'¡Patea!'"],
      ],
      why: ["'Vira!' avisa que ele tem espaço para girar sem olhar para trás.", "'Turn!' tells him he has space to turn without looking back.", "'¡Gira!' le avisa que tiene espacio para girar sin mirar atrás."],
    },
    {
      q: ["O que um bom capitão faz?", "What does a good captain do?", "¿Qué hace un buen capitán?"],
      opts: [
        ["Dá exemplo, anima e apoia quem errou", "Sets an example, cheers, backs whoever slipped up", "Da el ejemplo, anima y apoya a quien falló"],
        ["Grita com todo mundo", "Shouts at everyone", "Le grita a todos"],
        ["Só usa a braçadeira", "Just wears the armband", "Solo usa la cinta"],
      ],
      why: ["Qualquer um pode ser líder, com ou sem braçadeira.", "Anyone can be a leader, with or without the armband.", "Cualquiera puede ser líder, con o sin cinta."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "pulinho"],
        text: ["Um colega errou feio...", "A teammate made a big mistake...", "Un compañero se equivocó feo..."],
        steps: [
          { d: 2.4, mood: { faisca: "big" }, say: ["faisca", ["De novo?! Ele só erra!", "Again?! He keeps messing up!", "¿Otra vez?! ¡Solo se equivoca!"]] },
          { d: 2.8, mood: { faisca: "small" }, say: ["capitao", ["Tranquilo, parceiro! A próxima é sua!", "No worries, mate! Next one's yours!", "¡Tranquilo, amigo! ¡La próxima es tuya!"]], text: ["Líder apoia quem errou", "Leaders back whoever slipped up", "El líder apoya a quien se equivocó"] },
        ],
      },
    },
    {
      q: ["Um colega está triste porque quase não joga. Como ajudar?", "A teammate is sad because he hardly plays. How can you help?", "Un compañero está triste porque casi no juega. ¿Cómo ayudas?"],
      opts: [
        ["Chamo para treinar junto e dou força", "Invite him to train with me and cheer him on", "Lo invito a entrenar juntos y le doy ánimo"],
        ["Dou risada dele", "Laugh at him", "Me río de él"],
        ["Finjo que não vi", "Pretend I didn't notice", "Hago como que no vi"],
      ],
      why: ["Time forte cuida de todo mundo, não só de quem é titular.", "A strong team looks after everyone, not just the starters.", "Un equipo fuerte cuida a todos, no solo a los titulares."],
    },
    {
      q: ["O time ganhou com um gol seu. De quem é a vitória?", "Your team won with your goal. Whose win is it?", "Tu equipo ganó con un gol tuyo. ¿De quién es la victoria?"],
      opts: [
        ["Do time todo", "The whole team's", "De todo el equipo"],
        ["Só minha", "Only mine", "Solo mía"],
        ["Só do técnico", "Only the coach's", "Solo del entrenador"],
      ],
      why: ["Teve defesa, desarme e passe antes do seu gol. Vitória de todos!", "There was defending, tackling and passing before your goal. Everyone's win!", "Hubo defensa, quite y pase antes de tu gol. ¡Victoria de todos!"],
    },
    {
      q: ["Você não gostou de uma decisão do técnico. O que fazer?", "You didn't like a coach's decision. What do you do?", "No te gustó una decisión del entrenador. ¿Qué haces?"],
      opts: [
        ["Faço o que ele pediu e converso depois", "Do what he asked and talk later", "Hago lo que pidió y hablo después"],
        ["Faço do meu jeito, escondido", "Do it my way, secretly", "Lo hago a mi manera, a escondidas"],
        ["Fico reclamando com os colegas", "Keep moaning to my teammates", "Me quejo con los compañeros"],
      ],
      why: ["No jogo, todos seguem o mesmo plano. Depois, conversa com respeito.", "In the game, everyone follows one plan. Afterwards, talk with respect.", "En el partido, todos siguen el mismo plan. Después, se habla con respeto."],
    },
    {
      q: ["Chegou um colega novo que não conhece ninguém. O que fazer?", "A new teammate arrived who doesn't know anyone. What do you do?", "Llegó un compañero nuevo que no conoce a nadie. ¿Qué haces?"],
      opts: [
        ["Apresento para a turma e chamo para jogar", "Introduce him to the group and invite him to play", "Lo presento al grupo y lo invito a jugar"],
        ["Deixo ele sozinho", "Leave him alone", "Lo dejo solo"],
        ["Faço piada dele", "Make fun of him", "Me burlo de él"],
      ],
      why: ["Lembra do seu primeiro dia? Receber bem é o primeiro passe do time.", "Remember your first day? A warm welcome is the team's first pass.", "¿Recuerdas tu primer día? Recibir bien es el primer pase del equipo."],
    },
  ],

  mentePorque: [
    {
      story: { anim: "historia", id: "porque" },
      q: ["Por que a gente joga bola?", "Why do we play football?", "¿Por qué jugamos a la pelota?"],
      opts: [
        ["😄 Porque é divertido", "😄 Because it's fun", "😄 Porque es divertido"],
        ["😰 Porque sou obrigado a ganhar", "😰 Because I have to win", "😰 Porque tengo que ganar"],
      ],
      why: ["Diversão é o combustível que nunca acaba!", "Fun is the fuel that never runs out!", "¡La diversión es el combustible que nunca se acaba!"],
    },
    {
      q: ["Qual é o melhor motivo para jogar futebol?", "What's the best reason to play football?", "¿Cuál es el mejor motivo para jugar al fútbol?"],
      opts: [
        ["Gostar de jogar e de ficar melhor", "Loving to play and getting better", "Disfrutar de jugar y de mejorar"],
        ["Só para agradar os outros", "Only to please other people", "Solo para agradar a los demás"],
        ["Ficar famoso rapidinho", "Get famous really fast", "Hacerme famoso rapidito"],
      ],
      why: ["Quem joga porque ama aguenta até os dias difíceis.", "If you play because you love it, you get through the hard days.", "Quien juega porque ama aguanta hasta los días difíciles."],
    },
    {
      q: ["Em casa, depois do jogo, só falam dos seus erros. O que fazer?", "At home after the game, they only talk about your mistakes. What do you do?", "En casa, después del partido, solo hablan de tus errores. ¿Qué haces?"],
      opts: [
        ["Conversar com calma e contar como me sinto", "Talk calmly and say how I feel", "Hablar con calma y decir cómo me siento"],
        ["Parar de jogar sem falar nada", "Quit without saying a word", "Dejar de jugar sin decir nada"],
        ["Guardar a tristeza só para mim", "Keep the sadness to myself", "Guardarme la tristeza"],
      ],
      why: ["Sua família quer ajudar. Contar como você se sente muda muito!", "Your family wants to help. Telling them how you feel changes a lot!", "Tu familia quiere ayudar. ¡Contar cómo te sientes cambia mucho!"],
    },
    {
      q: ["Na internet, alguém da sua idade faz jogadas incríveis. O que pensar?", "Online, someone your age does amazing tricks. What do you think?", "En internet, alguien de tu edad hace jugadas increíbles. ¿Qué piensas?"],
      opts: [
        ["Cada um tem seu tempo; meu rival sou eu", "Everyone has their own time; my rival is me", "Cada uno tiene su tiempo; mi rival soy yo"],
        ["Eu nunca vou ser bom assim", "I'll never be that good", "Nunca voy a ser tan bueno"],
        ["Vou parar de treinar", "I'll stop training", "Voy a dejar de entrenar"],
      ],
      why: ["O vídeo mostra o lance bom, não os mil erros antes dele.", "The video shows the good play, not the thousand misses before it.", "El video muestra la jugada buena, no los mil errores de antes."],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "pavao"],
        steps: [
          { d: 2.4, boss: "nublada", mood: { nublada: "big" }, say: ["nublada", ["Ele é muito melhor que eu...", "He's so much better than me...", "Es mucho mejor que yo..."]], cloud: ["eu nunca vou...", "I'll never...", "nunca voy a..."], text: ["Se comparar deixa triste", "Comparing makes you sad", "Compararse pone triste"] },
          { d: 2.8, boss: "capitao", mood: { nublada: "" }, say: ["capitao", ["Cada um no seu tempo. Meu rival sou eu de ontem.", "Everyone at their own pace. My rival is yesterday's me.", "Cada uno a su tiempo. Mi rival soy yo de ayer."]], text: ["Compare-se com você mesmo", "Compare yourself with yourself", "Compárate contigo mismo"] },
        ],
      },
    },
    {
      q: ["O futebol ficou chato e virou só obrigação. O que fazer?", "Football got boring and feels like a chore. What do you do?", "El fútbol se volvió aburrido, solo una obligación. ¿Qué haces?"],
      opts: [
        ["Contar para alguém e voltar a brincar com a bola", "Tell someone and go back to playing for fun", "Contarle a alguien y volver a jugar por diversión"],
        ["Fingir que está tudo bem", "Pretend everything's fine", "Hacer como que todo está bien"],
        ["Treinar ainda mais, sem parar", "Train even more, non-stop", "Entrenar todavía más, sin parar"],
      ],
      why: ["Perder a alegria é um aviso. Brincar de novo traz ela de volta.", "Losing the fun is a warning sign. Playing for fun brings it back.", "Perder la alegría es una señal. Jugar por diversión la trae de vuelta."],
    },
    {
      q: ["Jogar bola na rua ou no quintal, sem técnico, ajuda?", "Does kicking a ball in the street or yard, with no coach, help?", "¿Jugar a la pelota en la calle o el patio, sin entrenador, ayuda?"],
      opts: [
        ["Ajuda: brincando, você inventa jogadas", "Yes: playing for fun, you invent moves", "Sí: jugando, inventas jugadas"],
        ["Não, só treino sério vale", "No, only serious training counts", "No, solo vale el entreno serio"],
        ["Atrapalha", "It gets in the way", "Molesta"],
      ],
      why: ["Muitos craques aprenderam brincando na rua.", "Lots of great players learned by playing in the street.", "Muchos cracks aprendieron jugando en la calle."],
    },
    {
      q: ["Jogar outros esportes atrapalha quem quer ser jogador de futebol?", "Does playing other sports hurt someone who wants to be a footballer?", "¿Hacer otros deportes perjudica a quien quiere ser futbolista?"],
      opts: [
        ["Não: ajuda o corpo e é divertido", "No: it helps your body and it's fun", "No: ayuda al cuerpo y es divertido"],
        ["Sim, só pode futebol", "Yes, only football allowed", "Sí, solo se puede fútbol"],
        ["Só vale videogame de futebol", "Only football video games count", "Solo valen los videojuegos de fútbol"],
      ],
      why: ["Variar esportes deixa o corpo mais completo e machuca menos.", "Mixing sports makes your body more complete and you get hurt less.", "Variar deportes hace el cuerpo más completo y te lastimas menos."],
    },
    {
      q: ["Para quem está aprendendo, o que é ganhar?", "For someone still learning, what is winning?", "Para quien está aprendiendo, ¿qué es ganar?"],
      opts: [
        ["Me divertir, aprender e dar o meu melhor", "Having fun, learning and doing my best", "Divertirme, aprender y dar lo mejor"],
        ["Só ganhar o jogo", "Only winning the game", "Solo ganar el partido"],
        ["Ser melhor que os amigos", "Being better than my friends", "Ser mejor que los amigos"],
      ],
      why: ["O placar de hoje passa. O que você aprende fica para sempre.", "Today's score goes away. What you learn stays forever.", "El marcador de hoy pasa. Lo que aprendes queda para siempre."],
    },
    {
      q: ["O time perdeu, e o técnico diz: 'Foi bom, aprendemos muito'. Ele está certo?", "The team lost, and the coach says: 'It was good, we learned a lot'. Is he right?", "El equipo perdió y el entrenador dice: 'Estuvo bien, aprendimos mucho'. ¿Tiene razón?"],
      opts: [
        ["Sim: aprender vale mais que o placar", "Yes: learning matters more than the score", "Sí: aprender vale más que el marcador"],
        ["Não, só ganhar importa", "No, only winning matters", "No, solo importa ganar"],
        ["Ele só quer me consolar", "He just wants to cheer me up", "Solo quiere consolarme"],
      ],
      why: ["Até os craques aprenderam muito perdendo jogos.", "Even great players learned a lot from losing games.", "Hasta los cracks aprendieron mucho perdiendo partidos."],
    },
  ],

  menteDescanso: [
    {
      story: { anim: "historia", id: "descanso" },
      q: ["Amanhã tem jogo. O que fazer hoje à noite?", "Game tomorrow. What do you do tonight?", "Mañana hay partido. ¿Qué haces esta noche?"],
      opts: [
        ["😴 Dormir cedo", "😴 Go to bed early", "😴 Dormir temprano"],
        ["📱 Ficar no celular até tarde", "📱 Stay on my phone until late", "📱 Quedarme con el celular hasta tarde"],
      ],
      why: ["Dormir bem também é treino!", "Sleeping well is training too!", "¡Dormir bien también es entrenar!"],
    },
    {
      q: ["Quantas horas por noite uma criança que joga bola deve dormir?", "How many hours a night should a kid who plays football sleep?", "¿Cuántas horas por noche debe dormir un niño que juega al fútbol?"],
      opts: [
        ["De 9 a 11 horas", "9 to 11 hours", "De 9 a 11 horas"],
        ["5 horas já bastam", "5 hours is enough", "5 horas alcanzan"],
        ["Tanto faz", "It doesn't matter", "Da igual"],
      ],
      why: ["Dormindo, o corpo cresce, descansa e guarda o que você treinou.", "While you sleep, your body grows, rests and saves what you practised.", "Durmiendo, el cuerpo crece, descansa y guarda lo que entrenaste."],
    },
    {
      q: ["Por que desligar celular e TV 1 hora antes de dormir?", "Why switch off phones and TV 1 hour before bed?", "¿Por qué apagar el celular y la tele 1 hora antes de dormir?"],
      opts: [
        ["A luz da tela atrapalha o sono", "Screen light messes up your sleep", "La luz de la pantalla arruina el sueño"],
        ["Não faz diferença", "It makes no difference", "No hace diferencia"],
        ["Só para economizar bateria", "Just to save battery", "Solo para ahorrar batería"],
      ],
      why: ["A luz da tela faz o cérebro achar que ainda é dia.", "Screen light makes your brain think it's still daytime.", "La luz de la pantalla hace que el cerebro crea que todavía es de día."],
    },
    {
      q: ["Você dormiu mal antes do jogo. O que costuma acontecer?", "You slept badly before the game. What usually happens?", "Dormiste mal antes del partido. ¿Qué suele pasar?"],
      opts: [
        ["Fico mais lento, erro mais e fico irritado", "I'm slower, make more mistakes and get grumpy", "Estoy más lento, fallo más y me enojo"],
        ["Nada", "Nothing", "Nada"],
        ["Jogo melhor", "I play better", "Juego mejor"],
      ],
      why: ["Uma noite ruim deixa as pernas e a cabeça mais lentas.", "One bad night makes your legs and head slower.", "Una mala noche vuelve más lentas las piernas y la cabeza."],
    },
    {
      q: ["Você treinou muito vários dias seguidos e está exausto. O que fazer?", "You trained hard many days in a row and you're worn out. What do you do?", "Entrenaste mucho varios días seguidos y estás agotado. ¿Qué haces?"],
      opts: [
        ["Aviso o técnico e descanso: descansar também é treino", "Tell the coach and rest: rest is training too", "Aviso al entrenador y descanso: descansar también es entrenar"],
        ["Treino ainda mais", "Train even more", "Entreno todavía más"],
        ["Escondo o cansaço", "Hide how tired I am", "Escondo el cansancio"],
      ],
      why: ["O músculo fica forte no descanso. Sem descanso, vem lesão.", "Muscles get strong while resting. No rest, and injuries come.", "El músculo se hace fuerte descansando. Sin descanso, llegan las lesiones."],
    },
    {
      q: ["O que comer antes do jogo?", "What should you eat before a game?", "¿Qué comer antes del partido?"],
      opts: [
        ["Comida leve e saudável, 2 a 3 horas antes", "Light, healthy food, 2 to 3 hours before", "Comida liviana y sana, 2 a 3 horas antes"],
        ["Muito refrigerante e doce", "Lots of soda and sweets", "Mucha gaseosa y dulces"],
        ["Nada, jogar de barriga vazia", "Nothing, play on an empty tummy", "Nada, jugar con la panza vacía"],
      ],
      why: ["Comida leve dá energia; doce e refrigerante cansam rápido.", "Light food gives energy; sweets and soda tire you out fast.", "La comida liviana da energía; los dulces y la gaseosa cansan rápido."],
    },
    {
      q: ["Quando beber água?", "When should you drink water?", "¿Cuándo tomar agua?"],
      opts: [
        ["Antes, durante e depois, mesmo sem sede", "Before, during and after, even if not thirsty", "Antes, durante y después, aunque no tenga sed"],
        ["Só quando estiver morrendo de sede", "Only when I'm dying of thirst", "Solo cuando me muera de sed"],
        ["Nunca durante o jogo", "Never during the game", "Nunca durante el partido"],
      ],
      why: ["Se a sede apertou, o corpo já está perdendo força.", "If you're very thirsty, your body is already losing strength.", "Si la sed aprieta, el cuerpo ya está perdiendo fuerza."],
    },
    {
      q: ["Com sono e cansado, a cabeça também joga pior?", "When sleepy and tired, does your head play worse too?", "Con sueño y cansado, ¿la cabeza también juega peor?"],
      opts: [
        ["Sim: fica difícil se controlar e decidir", "Yes: it's harder to stay calm and decide", "Sí: cuesta más controlarse y decidir"],
        ["Não, só as pernas", "No, only your legs", "No, solo las piernas"],
        ["Só acontece com adulto", "That only happens to grown-ups", "Solo les pasa a los adultos"],
      ],
      why: ["Com sono, a Faísca e o Zum-Zum pegam o comando fácil.", "When you're sleepy, Spark and Buzz grab the controls easily.", "Con sueño, Chispa y Zum-Zum toman el mando fácil."],
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
      q: ["Qual é uma boa rotina de sono?", "What's a good sleep routine?", "¿Cuál es una buena rutina de sueño?"],
      opts: [
        ["Dormir e acordar sempre no mesmo horário", "Go to bed and wake up at the same time", "Dormir y despertar siempre a la misma hora"],
        ["Cada dia num horário diferente", "A different time every day", "Cada día a otra hora"],
        ["Dormir só no fim de semana", "Only sleep at weekends", "Dormir solo el fin de semana"],
      ],
      why: ["Com horário certo, você dorme rápido e acorda com energia.", "With a set bedtime, you fall asleep fast and wake up full of energy.", "Con horario fijo, te duermes rápido y despiertas con energía."],
    },
  ],

  menteLesao: [
    {
      story: { anim: "historia", id: "lesao" },
      q: ["Sentiu dor no treino. O que fazer?", "You feel pain at training. What do you do?", "Sientes dolor en el entreno. ¿Qué haces?"],
      opts: [
        ["🙋 Paro e aviso um adulto", "🙋 Stop and tell an adult", "🙋 Paro y aviso a un adulto"],
        ["😬 Escondo e continuo", "😬 Hide it and keep going", "😬 Lo escondo y sigo"],
      ],
      why: ["Dor é aviso do corpo. Cuidar é coisa de craque!", "Pain is your body's warning. Looking after it is what stars do!", "El dolor es un aviso del cuerpo. ¡Cuidarse es de cracks!"],
    },
    {
      q: ["Você sente dor no treino. O que fazer?", "You feel pain at training. What do you do?", "Sientes dolor en el entreno. ¿Qué haces?"],
      opts: [
        ["Paro e aviso o técnico ou um adulto", "Stop and tell the coach or an adult", "Paro y aviso al entrenador o a un adulto"],
        ["Escondo e continuo", "Hide it and keep going", "Lo escondo y sigo"],
        ["Tomo remédio sozinho e sigo", "Take medicine by myself and carry on", "Tomo un remedio solo y sigo"],
      ],
      why: ["Avisar é coragem: dor escondida pode virar lesão grande.", "Speaking up is brave: hidden pain can become a big injury.", "Avisar es valentía: el dolor escondido puede volverse una lesión grande."],
    },
    {
      q: ["Você se machucou e vai ficar semanas sem jogar. O que é normal sentir?", "You got hurt and can't play for weeks. What's normal to feel?", "Te lastimaste y no vas a jugar por semanas. ¿Qué es normal sentir?"],
      opts: [
        ["Tristeza: é normal, e vai passar", "Sadness: it's normal, and it will pass", "Tristeza: es normal, y va a pasar"],
        ["Nada: craque não sente nada", "Nothing: great players feel nothing", "Nada: los cracks no sienten nada"],
        ["Vontade de largar tudo, e largar", "Wanting to quit, so I quit", "Ganas de dejar todo, y lo dejo"],
      ],
      why: ["A Nublada pode aparecer, tudo bem. Lesão é uma pausa, não o fim.", "Cloudy may show up, that's OK. An injury is a pause, not the end.", "Nublada puede aparecer, está bien. La lesión es una pausa, no el final."],
    },
    {
      q: ["Machucado, como continuar perto do time?", "While injured, how do you stay close to the team?", "Lesionado, ¿cómo sigues cerca del equipo?"],
      opts: [
        ["Vou ao treino, torço e faço minha recuperação", "Go to training, cheer, and do my recovery", "Voy al entreno, aliento y hago mi recuperación"],
        ["Sumo até voltar", "Disappear until I'm back", "Desaparezco hasta volver"],
        ["Fico com raiva de quem está jogando", "Get angry at whoever's playing", "Me enojo con los que juegan"],
      ],
      why: ["Perto do grupo, a vontade de voltar continua forte.", "Staying with the group keeps you wanting to come back.", "Cerca del grupo, las ganas de volver siguen fuertes."],
    },
    {
      q: ["O fisioterapeuta passou exercícios chatos. O que fazer?", "The physio gave you boring exercises. What do you do?", "El fisioterapeuta te dio ejercicios aburridos. ¿Qué haces?"],
      opts: [
        ["Faço todos: agora esse é o meu treino", "Do them all: that's my training now", "Los hago todos: ahora ese es mi entreno"],
        ["Faço só quando lembrar", "Only when I remember", "Solo cuando me acuerdo"],
        ["Pulo e tento voltar a jogar logo", "Skip them and rush back to playing", "Los salto y vuelvo a jugar ya"],
      ],
      why: ["Quem faz a recuperação direitinho volta antes e mais forte.", "If you do your recovery properly, you come back sooner and stronger.", "Quien hace bien la recuperación vuelve antes y más fuerte."],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "nublada"],
        steps: [
          { d: 2.4, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Exercício chato de novo? Pula hoje...", "Boring exercises again? Skip today...", "¿Otra vez ejercicios aburridos? Hoy no..."]], text: ["O Sr. Sofá quer pular o exercício", "Mr. Couch wants to skip the exercises", "El Sr. Sofá quiere saltar los ejercicios"] },
          { d: 2.8, boss: "capitao", mood: { sofa: "small" }, say: ["capitao", ["Agora o meu treino é esse. Bora!", "This is my training now. Let's go!", "Ahora mi entrenamiento es este. ¡Vamos!"]], text: ["Recuperar também é treinar", "Recovering is training too", "Recuperarse también es entrenar"] },
        ],
      },
    },
    {
      q: ["A dor diminuiu. Já pode voltar a jogar com tudo?", "The pain is less. Can you play flat out again?", "El dolor bajó. ¿Ya puedes volver a jugar con todo?"],
      opts: [
        ["Só quando o médico ou o fisio liberar", "Only when the doctor or physio says yes", "Solo cuando el médico o el fisio lo autorice"],
        ["Sim, na hora", "Yes, right away", "Sí, enseguida"],
        ["Volto escondido", "Sneak back in", "Vuelvo a escondidas"],
      ],
      why: ["Sem dor não quer dizer curado. Voltar cedo pode machucar de novo.", "No pain doesn't mean healed. Coming back too soon can hurt you again.", "Sin dolor no quiere decir curado. Volver antes puede lastimarte otra vez."],
    },
    {
      q: ["Machucado, dá para treinar a cabeça?", "When injured, can you train your mind?", "Lesionado, ¿se puede entrenar la cabeza?"],
      opts: [
        ["Sim: ver jogos, imaginar jogadas, fazer quizzes", "Yes: watch games, imagine plays, do quizzes", "Sí: mirar partidos, imaginar jugadas, hacer quizzes"],
        ["Não, nada", "No, nothing", "No, nada"],
        ["Só jogando videogame", "Only by playing video games", "Solo jugando videojuegos"],
      ],
      why: ["A lesão para as pernas, não a cabeça. Estude o jogo!", "An injury stops your legs, not your head. Study the game!", "La lesión frena las piernas, no la cabeza. ¡Estudia el juego!"],
    },
    {
      q: ["Voltou da lesão e tem medo de dividir a bola. É normal?", "Back from injury and scared to go for the ball. Is that normal?", "Volviste de la lesión y tienes miedo de disputar el balón. ¿Es normal?"],
      opts: [
        ["Sim: o Tremelique quer me proteger. Vou aos poucos", "Yes: Shaky wants to protect me. Step by step", "Sí: Tembleque quiere protegerme. De a poco"],
        ["Não, isso é ser medroso", "No, that's being a scaredy-cat", "No, eso es ser miedoso"],
        ["Melhor nunca mais dividir", "Better never go for the ball again", "Mejor no disputar nunca más"],
      ],
      why: ["Cada dividida no treino devolve um pouco da confiança.", "Every challenge in training brings back a bit of confidence.", "Cada disputa en el entreno devuelve un poco de confianza."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "pulinho"],
        steps: [
          { d: 2.4, boss: "tremelique", mood: { tremelique: "big" }, say: ["tremelique", ["E se machucar de novo?!", "What if I get hurt again?!", "¿Y si me lastimo otra vez?!"]], text: ["O medo depois da lesão", "Fear after an injury", "El miedo después de la lesión"] },
          { d: 2.8, boss: "capitao", mood: { tremelique: "small" }, say: ["capitao", ["Valeu, Tremelique. O médico liberou. Aos poucos!", "Thanks, Shaky. The doctor said OK. Step by step!", "Gracias, Tembleque. El médico dio el alta. ¡De a poco!"]], text: ["Confiança volta aos poucos", "Confidence comes back step by step", "La confianza vuelve de a poco"] },
        ],
      },
    },
    {
      q: ["Como evitar se machucar?", "How can you avoid getting hurt?", "¿Cómo evitar lastimarte?"],
      opts: [
        ["Aquecer, fortalecer, dormir bem e descansar", "Warm up, get strong, sleep well and rest", "Calentar, fortalecerme, dormir bien y descansar"],
        ["Nunca aquecer", "Never warm up", "Nunca calentar"],
        ["Jogar todo dia, sem descansar", "Play every day, never rest", "Jugar todos los días, sin descansar"],
      ],
      why: ["Corpo preparado e descansado se machuca bem menos.", "A ready, rested body gets hurt much less.", "Un cuerpo preparado y descansado se lastima mucho menos."],
    },
  ],
});
