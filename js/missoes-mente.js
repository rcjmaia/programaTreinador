/* Grupo Mental: a Turma da Cabeça.
   Personagens (js/animacoes/cabine.js): Capitão Agora (a consciência, quem observa e decide), Pulinho (alegria),
   Tremelique (medo), Faísca (raiva), Nublada (tristeza), Zum-Zum (ansiedade), Sr. Sofá (preguiça), Pavão (ego).
   E o Vovô Sábio, um velho sábio da Índia que ensina a turma (não é uma emoção). */

CQ_MISSIONS.push(
  {
    id: "turma", type: "quiz", quiz: "menteTurma", icon: "🎭", subs: ["concentration", "confidence"], tiers: [1, 2, 3],
    title: ["A Turma da Cabeça", "The Head Crew", "La Pandilla de la Cabeza"],
    desc: ["Na sua cabeça mora uma turma: Pulinho (alegria), Tremelique (medo), Faísca (raiva), Nublada (tristeza), Zum-Zum (preocupação), Sr. Sofá (preguiça) e Pavão (exibido). Quem manda é o Capitão Agora!", "A crew lives in your head: Bouncy (joy), Shaky (fear), Spark (anger), Cloudy (sadness), Buzz (worry), Mr. Couch (laziness) and Peacock (show-off). The boss is Captain Now!", "En tu cabeza vive una pandilla: Saltito (alegría), Tembleque (miedo), Chispa (rabia), Nublada (tristeza), Zum-Zum (preocupación), Sr. Sofá (pereza) y Pavo Real (presumido). ¡El jefe es el Capitán Ahora!"],
    unit: CQ_UNIT_HITS,
    // Shown before the questions: who is who in the crew (faces come from js/animacoes/cabine.js).
    cast: [
      { id: "capitao", emo: ["O comandante: a sua atenção", "The leader: your attention", "El comandante: tu atención"], line: ["Observa a turma toda, respira e escolhe a melhor jogada.", "Watches the whole crew, breathes and picks the best play.", "Observa a toda la pandilla, respira y elige la mejor jugada."] },
      { id: "pulinho", emo: ["Alegria", "Joy", "Alegría"], line: ["Comemora e dá energia. Se exagerar, você esquece de voltar para marcar.", "Celebrates and gives you energy. Too much, and you forget to track back.", "Celebra y da energía. Si exagera, te olvidas de volver a marcar."] },
      { id: "tremelique", emo: ["Medo", "Fear", "Miedo"], line: ["Avisa do perigo. No comando, você nem pede a bola.", "Warns you of danger. In charge, you won't even ask for the ball.", "Avisa del peligro. Al mando, ni pides el balón."] },
      { id: "faisca", emo: ["Raiva", "Anger", "Rabia"], line: ["Dá força para lutar. No comando, vira falta e cartão.", "Gives you fight. In charge, it turns into fouls and cards.", "Da fuerza para luchar. Al mando, se vuelve falta y tarjeta."] },
      { id: "nublada", emo: ["Tristeza", "Sadness", "Tristeza"], line: ["Aparece depois de um erro ou de uma derrota. No comando, você desanima.", "Shows up after a mistake or a loss. In charge, you give up.", "Aparece tras un error o una derrota. Al mando, te desanimas."] },
      { id: "zumzum", emo: ["Preocupação", "Worry", "Preocupación"], line: ["Pensa no que ainda nem aconteceu. No comando, a cabeça acelera.", "Worries about what hasn't happened yet. In charge, your head races.", "Piensa en lo que aún no pasó. Al mando, la cabeza se acelera."] },
      { id: "sofa", emo: ["Preguiça", "Laziness", "Pereza"], line: ["Sempre diz 'depois'. No comando, você não treina.", "Always says 'later'. In charge, you skip training.", "Siempre dice 'después'. Al mando, no entrenas."] },
      { id: "pavao", emo: ["Exibido", "Show-off", "Presumido"], line: ["Quer o aplauso só para ele. No comando, você esquece do time.", "Wants all the applause. In charge, you forget the team.", "Quiere el aplauso solo para él. Al mando, te olvidas del equipo."] },
    ],
    castNote: ["Sentir tudo isso é normal! O segredo é deixar o Capitão Agora no comando.", "Feeling all of this is normal! The secret is keeping Captain Now in charge.", "¡Sentir todo esto es normal! El secreto es dejar al Capitán Ahora al mando."],
  },
  {
    id: "nuvens", type: "quiz", quiz: "menteNuvens", icon: "☁️", subs: ["concentration", "composure"], tiers: [1, 2, 3],
    title: ["Nuvens que passam", "Passing clouds", "Nubes que pasan"],
    desc: ["Pensamentos são como nuvens: vêm e vão. Deixe passar e volte para a bola!", "Thoughts are like clouds: they come and go. Let them pass and get back to the ball!", "Los pensamientos son como nubes: vienen y van. ¡Déjalos pasar y vuelve al balón!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "capitao", say: ["Pensamentos são nuvens passando na janela. Eu só olho.", "Thoughts are clouds passing the window. I just watch.", "Los pensamientos son nubes que pasan. Yo solo miro."] },
      { id: "zumzum", say: ["E eu encho o céu de nuvens: 'e se...? e se...?'", "And I fill the sky with clouds: 'what if...? what if...?'", "Y yo lleno el cielo de nubes: '¿y si...? ¿y si...?'"] },
      { id: "vovo", say: ["Não brigue com a nuvem. Ela passa sozinha.", "Don't fight the cloud. It passes by itself.", "No pelees con la nube. Se va sola."] },
    ],
  },
  {
    id: "agora", type: "quiz", quiz: "menteAgora", icon: "📍", subs: ["concentration", "composure"], tiers: [1, 2, 3],
    title: ["Aqui e agora", "Here and now", "Aquí y ahora"],
    desc: ["O jogo acontece agora, neste lance. Aprenda a voltar para a bola!", "The game happens now, in this play. Learn to come back to the ball!", "El partido pasa ahora, en esta jugada. ¡Aprende a volver al balón!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "zumzum", say: ["Eu vivo no futuro: 'e se a gente perder?'", "I live in the future: 'what if we lose?'", "Yo vivo en el futuro: '¿y si perdemos?'"] },
      { id: "nublada", say: ["E eu fico presa no passado, no erro de antes.", "And I get stuck in the past, on that old mistake.", "Y yo me quedo en el pasado, en el error de antes."] },
      { id: "capitao", say: ["O jogo só acontece agora, neste lance!", "The game only happens now, in this play!", "¡El partido solo ocurre ahora, en esta jugada!"] },
    ],
  },
  {
    id: "estoico", type: "quiz", quiz: "menteEstoico", icon: "🛡️", subs: ["resilience", "composure"], tiers: [1, 2, 3],
    title: ["Escudo da calma", "The calm shield", "El escudo de la calma"],
    desc: ["Juiz, torcida e chuva você não controla. A sua atitude, sim!", "You can't control the ref, the crowd or the rain. Your attitude, you can!", "El árbitro, la hinchada y la lluvia no los controlas. ¡Tu actitud, sí!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "faisca", say: ["Juiz ladrão! Adversário chato! Vou brigar com todo mundo!", "Bad ref! Annoying opponent! I'll fight everyone!", "¡Árbitro ladrón! ¡Rival pesado! ¡Peleo con todos!"] },
      { id: "vovo", say: ["Cuide do que depende de você e solte o resto.", "Look after what depends on you and let go of the rest.", "Cuida de lo que depende de ti y suelta el resto."] },
      { id: "capitao", say: ["Escudo erguido: eu cuido só da minha parte.", "Shield up: I only take care of my part.", "Escudo arriba: yo cuido solo mi parte."] },
    ],
  },
  {
    id: "sofa", type: "quiz", quiz: "menteSofa", icon: "🛋️", subs: ["discipline"], tiers: [1, 2, 3],
    title: ["Vencendo o Sr. Sofá", "Beating Mr. Couch", "Venciendo al Sr. Sofá"],
    desc: ["O Sr. Sofá sempre diz 'depois'. Descubra como vencer a preguiça!", "Mr. Couch always says 'later'. Find out how to beat laziness!", "El Sr. Sofá siempre dice 'después'. ¡Descubre cómo vencer la pereza!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "sofa", say: ["Treinar? Hoje não... deixa para amanhã... zzz", "Train? Not today... leave it for tomorrow... zzz", "¿Entrenar? Hoy no... déjalo para mañana... zzz"] },
      { id: "capitao", say: ["Só 5 minutinhos. Depois que começa, fica fácil!", "Just 5 minutes. Once you start, it gets easy!", "Solo 5 minutitos. ¡Después de empezar, es fácil!"] },
    ],
  },
  {
    id: "vigia", type: "quiz", quiz: "menteVigia", icon: "🔦", subs: ["confidence", "resilience"], tiers: [1, 2, 3],
    title: ["Vigia dos pensamentos", "Thought guard", "Vigía de los pensamientos"],
    desc: ["O que você fala para você mesmo muda o seu jogo. Seja o vigia da sua cabeça!", "What you tell yourself changes your game. Be the guard of your head!", "Lo que te dices cambia tu juego. ¡Sé el vigía de tu cabeza!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "tremelique", say: ["Vou errar... vou errar... vou errar...", "I'll miss... I'll miss... I'll miss...", "Voy a fallar... voy a fallar... voy a fallar..."] },
      { id: "capitao", say: ["Eu fico de vigia e escuto o que a cabeça fala.", "I stand guard and listen to what my head says.", "Yo vigilo y escucho lo que dice la cabeza."] },
      { id: "pulinho", say: ["E troco por: 'eu treinei, eu consigo!'", "And swap it for: 'I trained, I can do it!'", "Y lo cambio por: '¡entrené, puedo hacerlo!'"] },
    ],
  },
  {
    id: "pavao", type: "quiz", quiz: "mentePavao", icon: "🦚", subs: ["fairplay", "confidence"], tiers: [1, 2, 3],
    title: ["O Pavão e o time", "The Peacock and the team", "El Pavo Real y el equipo"],
    desc: ["O Pavão quer aplauso só para ele. Mas quem joga para o time brilha mais!", "Peacock wants all the applause. But playing for the team shines brighter!", "El Pavo Real quiere el aplauso solo para él. ¡Pero quien juega para el equipo brilla más!"],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "pavao", say: ["Olhem para mim! O aplauso é só meu!", "Look at me! The applause is all mine!", "¡Mírenme! ¡El aplauso es solo mío!"] },
      { id: "capitao", say: ["O passe para o gol do amigo também é jogada de craque.", "The pass for a teammate's goal is a star move too.", "El pase para el gol del amigo también es jugada de crack."] },
    ],
  },
  {
    id: "melhor", type: "quiz", quiz: "menteMelhor", icon: "🌟", subs: ["resilience", "discipline", "courage"], tiers: [1, 2, 3],
    title: ["Dar o meu melhor", "Giving my best", "Dar lo mejor de mí"],
    desc: ["Errou? Faz parte! O que importa é dar o seu melhor.", "Made a mistake? It happens! What matters is giving your best.", "¿Fallaste? ¡Es normal! Lo que importa es dar lo mejor de ti."],
    unit: CQ_UNIT_HITS,
    cast: [
      { id: "nublada", say: ["Errei... acho que não sirvo para isso.", "I messed up... maybe I'm no good at this.", "Fallé... creo que no sirvo para esto."] },
      { id: "pulinho", say: ["Erro faz parte! Bora para o próximo lance!", "Mistakes happen! On to the next play!", "¡Equivocarse es normal! ¡Vamos a la próxima!"] },
      { id: "capitao", say: ["Eu não controlo o placar. Controlo o meu esforço.", "I don't control the score. I control my effort.", "No controlo el marcador. Controlo mi esfuerzo."] },
    ],
  },

  // Práticas
  {
    id: "nuvemcount", type: "mind", icon: "🧘", subs: ["concentration", "composure"], tiers: [3, 5, 8, 12], max: 30, timer: { mode: "down", s: 60 },
    title: ["Contador de nuvens", "Cloud counter", "Contador de nubes"],
    desc: ["1 minuto de olhos fechados, só observando. Quantos pensamentos você percebeu passando?", "1 minute with your eyes closed, just watching. How many thoughts did you notice passing by?", "1 minuto con los ojos cerrados, solo observando. ¿Cuántos pensamientos notaste pasar?"],
    steps: [
      ["Sente confortável, costas retas, e feche os olhos.", "Sit comfortably, back straight, and close your eyes.", "Siéntate cómodo, espalda recta, y cierra los ojos."],
      ["Apareceu um pensamento? Perceba, conte 1 e deixe passar, como uma nuvem.", "A thought showed up? Notice it, count 1 and let it pass, like a cloud.", "¿Apareció un pensamiento? Nótalo, cuenta 1 y déjalo pasar, como una nube."],
      ["Não brigue com eles. Se se perder, volte para a respiração.", "Don't fight them. If you get lost, come back to your breath.", "No pelees con ellos. Si te pierdes, vuelve a la respiración."],
    ],
    unit: ["pensamentos", "thoughts", "pensamientos"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "zumzum", "nublada", "pulinho"],
      text: ["Olhos fechados, só observando", "Eyes closed, just watching", "Ojos cerrados, solo observando"],
      steps: [
        { d: 3, say: ["capitao", ["Uma nuvem... conto 1.", "A cloud... that's 1.", "Una nube... cuento 1."]], cloud: ["e o jogo amanhã?", "tomorrow's game?", "¿y el partido?"] },
        { d: 3, say: ["capitao", ["Outra... 2. Pode passar.", "Another... 2. Let it go.", "Otra... 2. Puede pasar."]], cloud: ["tô com fome", "I'm hungry", "tengo hambre"] },
        { d: 3, say: ["capitao", ["Sem brigar. Só olhar.", "No fighting. Just watching.", "Sin pelear. Solo mirar."]], cloud: ["aquele gol...", "that goal...", "aquel gol..."], text: ["Perceber, contar e soltar", "Notice, count, let go", "Notar, contar y soltar"] },
      ],
    },
  },
  {
    id: "nomear", type: "mind", icon: "🔎", subs: ["concentration", "composure"], tiers: [2, 4, 6, 10], max: 20,
    title: ["Quem está no comando?", "Who's in charge?", "¿Quién está al mando?"],
    desc: ["Durante o dia, perceba as emoções que aparecem e dê nome a elas. Quantas vezes você percebeu?", "During the day, notice the emotions that show up and name them. How many times did you notice?", "Durante el día, nota las emociones que aparecen y ponles nombre. ¿Cuántas veces lo notaste?"],
    steps: [
      ["Sentiu algo forte? Pare 1 segundo.", "Felt something strong? Pause for 1 second.", "¿Sentiste algo fuerte? Para 1 segundo."],
      ["Dê o nome: 'É a Faísca', 'É o Tremelique', 'É o Pulinho'...", "Name it: 'That's Spark', 'That's Shaky', 'That's Bouncy'...", "Ponle nombre: 'Es Chispa', 'Es Tembleque', 'Es Saltito'..."],
      ["Respire e devolva o comando ao Capitão. À noite, conte quantas vezes fez isso.", "Breathe and hand the controls back to the Captain. At night, count how many times you did it.", "Respira y devuelve el mando al Capitán. A la noche, cuenta cuántas veces lo hiciste."],
    ],
    unit: ["emoções percebidas", "emotions noticed", "emociones notadas"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "faisca", "tremelique", "pulinho"],
      steps: [
        { d: 2.4, boss: "faisca", mood: { faisca: "big" }, say: ["faisca", ["Grrr! Que raiva!", "Grrr! So angry!", "¡Grrr! ¡Qué rabia!"]], text: ["Uma emoção forte apareceu", "A strong emotion showed up", "Apareció una emoción fuerte"] },
        { d: 2.6, say: ["capitao", ["Opa, é a Faísca. Te vi!", "Oh, it's Spark. I see you!", "Ah, es Chispa. ¡Te vi!"]], text: ["Dar nome à emoção", "Name the emotion", "Ponerle nombre a la emoción"] },
        { d: 2.6, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["Respira... Agora deixa comigo.", "Breathe... I've got it now.", "Respira... Ahora déjamelo a mí."]], text: ["O comando volta ao Capitão", "The Captain takes back control", "El mando vuelve al Capitán"] },
      ],
    },
  },
  {
    id: "cincomin", type: "mind", icon: "⏱️", subs: ["discipline"], tiers: [1, 2, 3, 5], max: 10, timer: { mode: "down", s: 300 },
    title: ["Desafio dos 5 minutos", "5-minute challenge", "Desafío de los 5 minutos"],
    desc: ["Escolha algo que você está deixando para depois e faça só 5 minutos. Quantas tarefas adiadas você começou hoje?", "Pick something you keep putting off and do just 5 minutes. How many postponed tasks did you start today?", "Elige algo que vienes dejando para después y hazlo solo 5 minutos. ¿Cuántas tareas postergadas empezaste hoy?"],
    steps: [
      ["Escolha a tarefa: lição, arrumar o quarto, treinar o pé fraco...", "Pick the task: homework, tidying your room, weak-foot practice...", "Elige la tarea: deberes, ordenar el cuarto, entrenar la pierna mala..."],
      ["Guarde o celular e aperte Iniciar.", "Put your phone away and press Start.", "Guarda el celular y pulsa Iniciar."],
      ["Acabou o tempo? Pode parar ou continuar. O importante foi começar.", "Time's up? Stop or keep going. What matters is you started.", "¿Se acabó el tiempo? Puedes parar o seguir. Lo importante fue empezar."],
    ],
    unit: ["tarefas", "tasks", "tareas"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "sofa", "pulinho"],
      boss: "sofa",
      steps: [
        { d: 2.6, mood: { sofa: "big" }, say: ["sofa", ["Deixa para depois... zzz", "Leave it for later... zzz", "Déjalo para después... zzz"]], text: ["O Sr. Sofá quer adiar", "Mr. Couch wants to put it off", "El Sr. Sofá quiere postergar"] },
        { d: 2.6, boss: "capitao", mood: { sofa: "small" }, say: ["capitao", ["Só 5 minutos. Valendo!", "Just 5 minutes. Go!", "Solo 5 minutos. ¡Vamos!"]], text: ["Começar é a parte mais difícil", "Starting is the hardest part", "Empezar es lo más difícil"] },
        { d: 2.2, say: ["pulinho", ["Viu? Nem foi tão ruim!", "See? It wasn't that bad!", "¿Viste? ¡No fue tan malo!"]] },
      ],
    },
  },
  {
    id: "gratidao", type: "mind", icon: "🙏", subs: ["confidence", "resilience"], tiers: [3, 5, 7, 10], max: 10,
    title: ["Coisas boas do dia", "Good things today", "Cosas buenas del día"],
    desc: ["Antes de dormir, lembre das coisas boas que aconteceram hoje. Quantas você encontrou?", "Before bed, remember the good things that happened today. How many did you find?", "Antes de dormir, recuerda las cosas buenas que pasaron hoy. ¿Cuántas encontraste?"],
    steps: [
      ["Vale tudo: um passe bonito, um amigo, uma comida gostosa, uma ajuda.", "Anything counts: a nice pass, a friend, a tasty meal, some help.", "Vale todo: un buen pase, un amigo, una comida rica, una ayuda."],
      ["Diga em voz alta ou escreva num caderno.", "Say them out loud or write them in a notebook.", "Dilas en voz alta o escríbelas en un cuaderno."],
      ["Para cada uma, sinta por um instante: 'que bom que aconteceu'.", "For each one, feel it for a moment: 'I'm glad that happened'.", "Por cada una, siéntela un instante: 'qué bueno que pasó'."],
    ],
    unit: ["coisas boas", "good things", "cosas buenas"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "pulinho", "nublada"],
      text: ["Antes de dormir...", "Before bed...", "Antes de dormir..."],
      steps: [
        { d: 2.6, say: ["pulinho", ["Hoje eu fiz um passe lindo!", "I made a great pass today!", "¡Hoy hice un pase hermoso!"]], cloud: ["1. o passe", "1. the pass", "1. el pase"] },
        { d: 2.6, say: ["nublada", ["E um amigo me ajudou na lição...", "And a friend helped with my homework...", "Y un amigo me ayudó con la tarea..."]], cloud: ["2. o amigo", "2. my friend", "2. el amigo"] },
        { d: 2.6, say: ["capitao", ["E teve bolo no jantar. Que dia bom!", "And there was cake. What a good day!", "Y hubo torta. ¡Qué buen día!"]], cloud: ["3. o bolo", "3. the cake", "3. la torta"], text: ["Procure o bom e você encontra", "Look for the good and you'll find it", "Busca lo bueno y lo encontrarás"] },
      ],
    },
  },
  {
    id: "cinema", type: "mind", icon: "🎬", subs: ["confidence", "concentration"], tiers: [2, 3, 5, 8], max: 10, timer: { mode: "down", s: 60 },
    title: ["Cinema da mente", "Mind cinema", "Cine de la mente"],
    desc: ["De olhos fechados, imagine você fazendo jogadas perfeitas, com todos os detalhes. Quantas jogadas você viu?", "Eyes closed, picture yourself doing perfect plays, in full detail. How many plays did you see?", "Con los ojos cerrados, imagínate haciendo jugadas perfectas, con todos los detalles. ¿Cuántas jugadas viste?"],
    steps: [
      ["Feche os olhos e respire 3 vezes devagar.", "Close your eyes and breathe slowly 3 times.", "Cierra los ojos y respira despacio 3 veces."],
      ["Veja tudo como num filme: o campo, a bola chegando, o domínio, o passe, o gol.", "See it like a film: the pitch, the ball coming, the touch, the pass, the goal.", "Míralo como en una película: la cancha, el balón llegando, el control, el pase, el gol."],
      ["Sinta o pé na bola e a alegria do lance. Conte cada jogada completa.", "Feel the ball on your foot and the joy of the play. Count each full play.", "Siente el balón en el pie y la alegría de la jugada. Cuenta cada jugada completa."],
    ],
    unit: ["jogadas", "plays", "jugadas"],
    anim: "cabine",
    animArgs: {
      cast: ["capitao", "pulinho", "tremelique"],
      text: ["Luz, câmera... ação!", "Lights, camera... action!", "Luces, cámara... ¡acción!"],
      steps: [
        { d: 2.8, say: ["capitao", ["Vejo a bola chegando... domino macio.", "I see the ball coming... soft touch.", "Veo el balón llegar... control suave."]], cloud: ["domínio perfeito", "perfect touch", "control perfecto"] },
        { d: 2.8, say: ["capitao", ["Levanto a cabeça... e passe firme!", "Head up... and a firm pass!", "Levanto la cabeza... ¡y pase firme!"]], cloud: ["passe no pé", "pass to feet", "pase al pie"] },
        { d: 2.4, say: ["pulinho", ["Goool! Que filme!", "Gooal! What a film!", "¡Goool! ¡Qué película!"]], text: ["O cérebro treina quando imagina", "Your brain trains when it imagines", "El cerebro entrena cuando imagina"] },
      ],
    },
  },
);

// Same format as CQ_QUIZ in missoes-data.js: the first option is the right one.
Object.assign(CQ_QUIZ, {
  menteTurma: [
    {
      q: ["Quem deve mandar na sua cabeça durante o jogo?", "Who should be the boss of your head during the game?", "¿Quién debe mandar en tu cabeza durante el partido?"],
      opts: [
        ["O Capitão Agora, que decide com calma", "Captain Now, who decides calmly", "El Capitán Ahora, que decide con calma"],
        ["Quem gritar mais alto", "Whoever shouts the loudest", "El que grite más fuerte"],
        ["A Faísca, porque raiva dá força", "Spark, because anger makes you strong", "Chispa, porque la rabia da fuerza"],
      ],
      why: ["Todas as emoções podem falar, mas quem decide é o Capitão Agora.", "All the feelings can talk, but Captain Now decides.", "Todas las emociones pueden hablar, pero decide el Capitán Ahora."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "pulinho", "tremelique", "nublada"],
        text: ["A turma toda mora aqui dentro", "The whole crew lives in here", "Toda la pandilla vive aquí dentro"],
        steps: [
          { d: 2.6, boss: "faisca", mood: { faisca: "big" }, say: ["faisca", ["Saí da frente! Agora mando eu!", "Out of the way! I'm in charge now!", "¡Fuera! ¡Ahora mando yo!"]], text: ["A Faísca tomou o comando", "Spark grabbed the controls", "Chispa tomó el mando"] },
          { d: 2.6, say: ["capitao", ["Eu te escuto, Faísca. Mas quem decide sou eu.", "I hear you, Spark. But I decide.", "Te escucho, Chispa. Pero decido yo."]] },
          { d: 2.6, boss: "capitao", mood: { faisca: "" }, say: ["pulinho", ["Ufa! Agora sim, vamos jogar!", "Phew! Now let's play!", "¡Uf! ¡Ahora sí, a jugar!"]], text: ["O Capitão Agora de volta ao comando", "Captain Now back in charge", "El Capitán Ahora vuelve al mando"] },
        ],
      },
    },
    {
      q: ["O Tremelique diz: 'Não pede a bola!'. O que você faz?", "Shaky says: 'Don't ask for the ball!'. What do you do?", "Tembleque dice: '¡No pidas el balón!'. ¿Qué haces?"],
      opts: [
        ["Peço a bola mesmo assim", "Ask for the ball anyway", "Pido el balón igual"],
        ["Me escondo atrás do adversário", "Hide behind an opponent", "Me escondo detrás del rival"],
        ["Finjo que me machuquei", "Pretend I'm hurt", "Finjo que me lastimé"],
      ],
      why: ["Todo craque sente medo. Coragem é jogar mesmo assim!", "Every great player feels fear. Courage is playing anyway!", "Todo crack siente miedo. ¡Valentía es jugar igual!"],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "pulinho"],
        steps: [
          { d: 2.6, mood: { tremelique: "big" }, say: ["tremelique", ["Não pede a bola! E se você errar?!", "Don't ask for the ball! What if you miss?!", "¡No pidas el balón! ¿Y si fallas?"]], text: ["O Tremelique quer te proteger", "Shaky wants to protect you", "Tembleque quiere protegerte"] },
          { d: 2.8, mood: { tremelique: "small" }, say: ["capitao", ["Valeu pelo aviso. Respira... Pede a bola!", "Thanks for the warning. Breathe... Ask for it!", "Gracias por el aviso. Respira... ¡Pide el balón!"]], text: ["Coragem é jogar com medo", "Courage is playing even when scared", "Valentía es jugar con miedo"] },
        ],
      },
    },
    {
      q: ["Levou uma falta dura e a Faísca acendeu. O que fazer?", "You got fouled hard and Spark lit up. What do you do?", "Te hicieron una falta dura y Chispa se encendió. ¿Qué haces?"],
      opts: [
        ["Respiro e corro ainda mais", "Breathe and run even harder", "Respiro y corro todavía más"],
        ["Devolvo a falta na próxima jogada", "Foul him back on the next play", "Le devuelvo la falta en la próxima jugada"],
        ["Xingo o juiz", "Swear at the referee", "Insulto al árbitro"],
      ],
      why: ["Faísca no comando dá cartão. Com o Capitão, a raiva vira garra!", "Spark in charge gets you a card. With the Captain, anger becomes fight!", "Chispa al mando te da tarjeta. ¡Con el Capitán, la rabia se vuelve garra!"],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "nublada"],
        text: ["Levou uma falta dura...", "A hard foul on you...", "Te hicieron una falta dura..."],
        steps: [
          { d: 2.4, boss: "faisca", mood: { faisca: "big" }, say: ["faisca", ["Ele vai ver só! Vou devolver!", "He'll pay for that! Get him back!", "¡Ya va a ver! ¡Se la devuelvo!"]] },
          { d: 2.4, say: ["capitao", ["Calma. Respira fundo... um, dois, três.", "Easy. Deep breath... one, two, three.", "Calma. Respira hondo... uno, dos, tres."]], cloud: ["vou devolver!", "get him back!", "¡se la devuelvo!"] },
          { d: 2.6, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["Faísca, me dá essa energia: vamos correr!", "Spark, give me that energy: let's run!", "Chispa, dame esa energía: ¡a correr!"]], text: ["A raiva virou garra", "Anger turned into fight", "La rabia se volvió garra"] },
        ],
      },
    },
    {
      q: ["Seu time perdeu e a Nublada chegou. Pode ficar triste?", "Your team lost and Cloudy showed up. Is it OK to be sad?", "Tu equipo perdió y llegó Nublada. ¿Se puede estar triste?"],
      opts: [
        ["Pode! Depois eu aprendo e sigo em frente", "Yes! Then I learn and move on", "¡Sí! Después aprendo y sigo adelante"],
        ["Não, campeão nunca fica triste", "No, champions are never sad", "No, un campeón nunca está triste"],
        ["Pode, e fico triste para sempre", "Yes, and I stay sad forever", "Sí, y me quedo triste para siempre"],
      ],
      why: ["Deixa a Nublada chover um pouco. Depois o sol volta!", "Let Cloudy rain a little. Then the sun comes back!", "Deja que Nublada llueva un poco. ¡Después vuelve el sol!"],
    },
    {
      q: ["Você fez gol e o Pulinho está pulando! Como comemorar?", "You scored and Bouncy is jumping! How do you celebrate?", "¡Hiciste un gol y Saltito está saltando! ¿Cómo festejas?"],
      opts: [
        ["Comemoro com o time e volto ligado", "Celebrate with the team and get back focused", "Festejo con el equipo y vuelvo atento"],
        ["Provoco o adversário", "Taunt the opponents", "Provoco al rival"],
        ["Paro de correr, já ganhei", "Stop running, I already won", "Dejo de correr, ya gané"],
      ],
      why: ["Comemora, mas o jogo continua. Volta para o seu lugar!", "Celebrate, but the game goes on. Get back in position!", "Festeja, pero el partido sigue. ¡Vuelve a tu lugar!"],
    },
    {
      q: ["O Zum-Zum fica dizendo: 'E se eu errar? E se a gente perder?'. Isso já aconteceu?", "Buzz keeps saying: 'What if I miss? What if we lose?'. Has that happened?", "Zum-Zum repite: '¿Y si fallo? ¿Y si perdemos?'. ¿Eso ya pasó?"],
      opts: [
        ["Não, ainda nem aconteceu", "No, it hasn't even happened", "No, todavía no pasó"],
        ["Sim, já aconteceu", "Yes, it already happened", "Sí, ya pasó"],
        ["Ele está falando do jogo de ontem", "He's talking about yesterday's game", "Habla del partido de ayer"],
      ],
      why: ["O Zum-Zum se preocupa com coisas que nem aconteceram. Volte para a bola de agora!", "Buzz worries about things that haven't happened. Come back to the ball right now!", "Zum-Zum se preocupa por cosas que no pasaron. ¡Vuelve al balón de ahora!"],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "tremelique"],
        steps: [
          { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["E se a gente perder? E se eu errar? E se...?", "What if we lose? What if I miss? What if...?", "¿Y si perdemos? ¿Y si fallo? ¿Y si...?"]], cloud: ["e se...?", "what if...?", "¿y si...?"], text: ["O Zum-Zum se preocupa antes da hora", "Buzz worries too early", "Zum-Zum se preocupa antes de tiempo"] },
          { d: 2.6, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Pés no chão. Olha a bola!", "Feet on the ground. Watch the ball!", "Pies en el suelo. ¡Mira el balón!"]], text: ["O Capitão traz você de volta para a bola", "The Captain brings you back to the ball", "El Capitán te trae de vuelta al balón"] },
        ],
      },
    },
    {
      q: ["Tem alguma emoção proibida de sentir?", "Is there any feeling you're not allowed to have?", "¿Hay alguna emoción prohibida de sentir?"],
      opts: [
        ["Não, só não podem mandar sozinhas", "No, they just can't be the boss alone", "No, solo que no pueden mandar solas"],
        ["Sim, o medo", "Yes, fear", "Sí, el miedo"],
        ["Sim, a tristeza", "Yes, sadness", "Sí, la tristeza"],
      ],
      why: ["Toda emoção pode aparecer. Só não deixe uma delas mandar em você.", "Every feeling can show up. Just don't let one of them boss you around.", "Toda emoción puede aparecer. Solo no dejes que una mande en ti."],
    },
    {
      q: ["Como saber qual emoção está mandando em você?", "How do you know which feeling is bossing you?", "¿Cómo saber qué emoción está mandando en ti?"],
      opts: [
        ["Paro e pergunto: 'quem está mandando agora?'", "Stop and ask: 'who's the boss right now?'", "Paro y pregunto: '¿quién manda ahora?'"],
        ["Não dá para saber", "There's no way to know", "No se puede saber"],
        ["Pergunto para o técnico", "Ask the coach", "Le pregunto al entrenador"],
      ],
      why: ["Dar nome ao que você sente já acalma.", "Naming what you feel already calms you down.", "Ponerle nombre a lo que sientes ya calma."],
    },
  ],

  menteNuvens: [
    {
      q: ["Você pensa: 'eu sou ruim'. O que fazer?", "You think: 'I'm bad'. What do you do?", "Piensas: 'soy malo'. ¿Qué haces?"],
      opts: [
        ["Deixo passar, como uma nuvem no céu", "Let it pass, like a cloud in the sky", "Lo dejo pasar, como una nube en el cielo"],
        ["Acredito e fico repetindo", "Believe it and keep repeating it", "Me lo creo y lo repito"],
        ["Fico brigando com ele", "Keep fighting with it", "Me quedo peleando con él"],
      ],
      why: ["Pensamento é nuvem: vem e vai. Deixa passar e joga!", "Thoughts are clouds: they come and go. Let it pass and play!", "Los pensamientos son nubes: van y vienen. ¡Déjalo pasar y juega!"],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "pulinho"],
        text: ["O Capitão olha pela janela", "The Captain looks out the window", "El Capitán mira por la ventana"],
        steps: [
          { d: 3.2, say: ["nublada", ["Olha lá... 'eu sou ruim'.", "Look... 'I'm bad'.", "Mira... 'soy malo'."]], cloud: ["eu sou ruim", "I'm bad", "soy malo"] },
          { d: 3.2, say: ["capitao", ["É só uma nuvem. Deixa passar.", "Just a cloud. Let it pass.", "Es solo una nube. Déjala pasar."]], cloud: ["eu sou ruim", "I'm bad", "soy malo"], text: ["Deixa a nuvem ir embora", "Let the cloud go away", "Deja que la nube se vaya"] },
          { d: 2, say: ["pulinho", ["Céu limpo! Bora jogar!", "Clear sky! Let's play!", "¡Cielo limpio! ¡A jugar!"]], text: ["A nuvem passa, você fica", "Clouds pass, you stay", "La nube pasa, tú te quedas"] },
        ],
      },
    },
    {
      q: ["Um pensamento passa na sua cabeça. Você é ele?", "A thought goes through your head. Are you that thought?", "Un pensamiento pasa por tu cabeza. ¿Eres ese pensamiento?"],
      opts: [
        ["Não, eu só vejo ele passar", "No, I just watch it go by", "No, solo lo veo pasar"],
        ["Sim, eu sou o pensamento", "Yes, I am the thought", "Sí, soy el pensamiento"],
        ["Eu sou uma nuvem de chuva", "I'm a rain cloud", "Soy una nube de lluvia"],
      ],
      why: ["Se você consegue ver o pensamento, ele não é você.", "If you can see the thought, it isn't you.", "Si puedes ver el pensamiento, no eres tú."],
    },
    {
      q: ["No jogo, você lembra de um erro de antes. O que fazer?", "During the game, you remember an earlier mistake. What do you do?", "En el partido, te acuerdas de un error de antes. ¿Qué haces?"],
      opts: [
        ["Deixo para lá e volto para a bola", "Let it go and get back to the ball", "Lo dejo pasar y vuelvo al balón"],
        ["Penso nele o jogo todo", "Think about it the whole game", "Pienso en él todo el partido"],
        ["Fico parado lembrando", "Stand still remembering it", "Me quedo quieto recordándolo"],
      ],
      why: ["Sobre o erro, você pensa depois. Agora é a bola!", "Think about the mistake later. Now it's the ball!", "En el error piensas después. ¡Ahora es el balón!"],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "tremelique"],
        steps: [
          { d: 3, say: ["nublada", ["Lembra aquele passe errado?", "Remember that bad pass?", "¿Te acuerdas de ese mal pase?"]], cloud: ["o passe errado...", "that bad pass...", "el mal pase..."], text: ["Percebe...", "Notice it...", "Lo notas..."] },
          { d: 3, say: ["capitao", ["Lembro. Tchau, nuvem! Olha a bola!", "I do. Bye, cloud! Watch the ball!", "Sí. ¡Chau, nube! ¡Mira el balón!"]], text: ["...deixa ir e volta para a bola", "...let it go, back to the ball", "...lo dejas ir y vuelves al balón"] },
        ],
      },
    },
    {
      q: ["Qual treino ajuda a deixar os pensamentos passarem?", "Which exercise helps you let thoughts pass?", "¿Qué ejercicio ayuda a dejar pasar los pensamientos?"],
      opts: [
        ["Ficar 1 minuto quieto, de olhos fechados", "Sit still for 1 minute, eyes closed", "Quedarme quieto 1 minuto, con los ojos cerrados"],
        ["Mandar a cabeça parar de pensar", "Order my head to stop thinking", "Ordenarle a la cabeza que no piense"],
        ["Jogar videogame", "Play video games", "Jugar videojuegos"],
      ],
      why: ["Fica quietinho e só olha os pensamentos passando, como nuvens.", "Sit still and just watch your thoughts go by, like clouds.", "Quédate quieto y solo mira pasar los pensamientos, como nubes."],
    },
    {
      q: ["O Vovô Sábio ensina a perguntar: 'quem está pensando isso?'. Para quê?", "Wise Grandpa teaches you to ask: 'who is thinking this?'. What for?", "El Abuelo Sabio enseña a preguntar: '¿quién está pensando esto?'. ¿Para qué?"],
      opts: [
        ["Para ficar calmo e ver de fora", "To calm down and see it from outside", "Para calmarme y verlo desde afuera"],
        ["Para achar um culpado", "To find someone to blame", "Para encontrar un culpable"],
        ["Para pensar ainda mais", "To think even more", "Para pensar todavía más"],
      ],
      why: ["Vovô Sábio: Pergunte, respire e a confusão vai passando.", "Wise Grandpa: Ask, breathe, and the mess fades away.", "Abuelo Sabio: Pregunta, respira y el lío se va pasando."],
    },
    {
      q: ["Você pensa: 'vou fazer um golaço!'. Isso também é uma nuvem?", "You think: 'I'm going to score a screamer!'. Is that a cloud too?", "Piensas: '¡voy a hacer un golazo!'. ¿También es una nube?"],
      opts: [
        ["É, então volto para a jogada", "Yes, so I get back to the play", "Sí, así que vuelvo a la jugada"],
        ["Não, esse eu guardo para sempre", "No, I keep that one forever", "No, ese lo guardo para siempre"],
        ["Paro e fico sonhando com o gol", "Stop and daydream about the goal", "Me quedo soñando con el gol"],
      ],
      why: ["Até pensamento bom passa. O gol sai na jogada, não no sonho!", "Even good thoughts pass. Goals come from the play, not the dream!", "Hasta los buenos pensamientos pasan. ¡El gol sale en la jugada, no en el sueño!"],
    },
    {
      q: ["Tudo o que você pensa é verdade?", "Is everything you think true?", "¿Todo lo que piensas es verdad?"],
      opts: [
        ["Não, pensamento é só uma ideia", "No, a thought is just an idea", "No, un pensamiento es solo una idea"],
        ["Sim, tudo é verdade", "Yes, all of it is true", "Sí, todo es verdad"],
        ["Só os ruins são verdade", "Only the bad ones are true", "Solo los malos son verdad"],
      ],
      why: ["Pensar 'vou errar' não faz você errar. Quem decide é o seu treino.", "Thinking 'I'll miss' doesn't make you miss. Your training decides.", "Pensar 'voy a fallar' no te hace fallar. Decide tu entrenamiento."],
    },
    {
      q: ["Antes do jogo, sua cabeça está a mil. O que fazer primeiro?", "Before the game, your head is racing. What do you do first?", "Antes del partido, tu cabeza va a mil. ¿Qué haces primero?"],
      opts: [
        ["Respiro devagar e deixo os pensamentos passarem", "Breathe slowly and let thoughts pass", "Respiro despacio y dejo pasar los pensamientos"],
        ["Fico nervoso por estar nervoso", "Get nervous about being nervous", "Me pongo nervioso por estar nervioso"],
        ["Finjo que não sinto nada", "Pretend I feel nothing", "Finjo que no siento nada"],
      ],
      why: ["Respirando devagar, a cabeça se acalma, como água que fica limpa.", "Breathing slowly calms your head, like muddy water turning clear.", "Respirando despacio, la cabeza se calma, como agua que se aclara."],
    },
  ],

  menteAgora: [
    {
      q: ["Qual jogada você pode jogar de verdade?", "Which play can you really play?", "¿Qué jugada puedes jugar de verdad?"],
      opts: [
        ["A de agora, esta aqui", "The one happening now, this one", "La de ahora, esta"],
        ["A que eu já errei", "The one I already messed up", "La que ya fallé"],
        ["A do fim do jogo", "The one at the end of the game", "La del final del partido"],
      ],
      why: ["O que passou já foi. O que vem ainda não chegou. Jogue agora!", "The past is gone. The future isn't here yet. Play now!", "Lo que pasó ya fue. Lo que viene no llegó. ¡Juega ahora!"],
    },
    {
      q: ["Sua cabeça fugiu do jogo. Como voltar rápido?", "Your mind wandered off the game. How do you come back fast?", "Tu cabeza se escapó del partido. ¿Cómo vuelves rápido?"],
      opts: [
        ["Respiro e sinto os pés no chão", "Breathe and feel my feet on the ground", "Respiro y siento los pies en el suelo"],
        ["Lembro do erro de antes", "Remember the earlier mistake", "Recuerdo el error de antes"],
        ["Olho o placar toda hora", "Keep checking the score", "Miro el marcador todo el rato"],
      ],
      why: ["Respirar e sentir os pés traz você de volta em 3 segundos.", "Breathing and feeling your feet brings you back in 3 seconds.", "Respirar y sentir los pies te trae de vuelta en 3 segundos."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "nublada"],
        steps: [
          { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["Falta pouco! E o placar? E se...?", "Not long left! The score? What if...?", "¡Falta poco! ¿Y el marcador? ¿Y si...?"]], cloud: ["e o placar?", "the score?", "¿y el marcador?"], text: ["A cabeça fugiu do jogo", "Your head ran away from the game", "La cabeza se escapó del partido"] },
          { d: 2.8, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Respira... Pés no chão. Olha a bola.", "Breathe... Feet on the ground. See the ball.", "Respira... Pies en el suelo. Mira el balón."]], text: ["Respirar: o botão de voltar", "Breathing: the 'come back' button", "Respirar: el botón de volver"] },
        ],
      },
    },
    {
      q: ["No treino, você está pensando no videogame. O que acontece?", "At practice, you're thinking about video games. What happens?", "En el entrenamiento, piensas en los videojuegos. ¿Qué pasa?"],
      opts: [
        ["Treino pela metade: a cabeça está longe", "Half a practice: my head is far away", "Entreno a medias: la cabeza está lejos"],
        ["Nada, dá no mesmo", "Nothing, it's the same", "Nada, da igual"],
        ["Aprendo mais rápido", "I learn faster", "Aprendo más rápido"],
      ],
      why: ["Corpo e cabeça no treino: assim você aprende o dobro!", "Body and head at practice: that's how you learn twice as much!", "Cuerpo y cabeza en el entrenamiento: ¡así aprendes el doble!"],
    },
    {
      q: ["A bola está vindo para você. Onde fica a sua cabeça?", "The ball is coming to you. Where is your mind?", "El balón viene hacia ti. ¿Dónde está tu cabeza?"],
      opts: [
        ["Só na bola e no que vou fazer", "Only on the ball and what I'll do", "Solo en el balón y en lo que voy a hacer"],
        ["No que a torcida está achando", "On what the crowd thinks", "En lo que piensa la hinchada"],
        ["No lance que já passou", "On the play that already happened", "En la jugada que ya pasó"],
      ],
      why: ["Cabeça na bola: o domínio sai limpo e você decide rápido.", "Head on the ball: a clean first touch and a quick decision.", "Cabeza en el balón: el control sale limpio y decides rápido."],
    },
    {
      q: ["Como se faz a respiração do quadrado (4-4-4-4)?", "How do you do square breathing (4-4-4-4)?", "¿Cómo se hace la respiración del cuadrado (4-4-4-4)?"],
      opts: [
        ["Puxo 4, seguro 4, solto 4, espero 4", "In 4, hold 4, out 4, wait 4", "Inspiro 4, aguanto 4, suelto 4, espero 4"],
        ["Prendo o ar até ficar vermelho", "Hold my breath until I go red", "Aguanto el aire hasta ponerme rojo"],
        ["Respiro bem rápido pela boca", "Breathe very fast through my mouth", "Respiro muy rápido por la boca"],
      ],
      why: ["Respirar devagar acalma o corpo. Use antes do pênalti!", "Slow breathing calms your body. Use it before a penalty!", "Respirar despacio calma el cuerpo. ¡Úsalo antes del penal!"],
    },
    {
      q: ["Ficar 1 minuto quieto, só respirando, é...", "Sitting still for 1 minute, just breathing, is...", "Quedarte quieto 1 minuto, solo respirando, es..."],
      opts: [
        ["Um treino para a cabeça", "Training for your head", "Un entrenamiento para la cabeza"],
        ["Coisa só para monge", "Only for monks", "Cosa solo de monjes"],
        ["Dormir sentado", "Sleeping sitting up", "Dormir sentado"],
      ],
      why: ["É treino para a cabeça, como embaixadinha é treino para o pé.", "It's training for your head, like keep-ups are for your feet.", "Es entrenamiento para la cabeza, como los toques para el pie."],
    },
    {
      q: ["Faltam 10 minutos e você pensa: 'E se a gente perder?'. O que fazer?", "10 minutes left and you think: 'What if we lose?'. What do you do?", "Faltan 10 minutos y piensas: '¿Y si perdemos?'. ¿Qué haces?"],
      opts: [
        ["Volto a pensar só no próximo lance", "Go back to thinking only about the next play", "Vuelvo a pensar solo en la próxima jugada"],
        ["Fico pensando no placar final", "Keep thinking about the final score", "Me quedo pensando en el resultado final"],
        ["Fico lembrando do primeiro tempo", "Keep remembering the first half", "Me quedo recordando el primer tiempo"],
      ],
      why: ["O jogo se ganha lance a lance. Ganhe o próximo!", "Games are won play by play. Win the next one!", "El partido se gana jugada a jugada. ¡Gana la próxima!"],
    },
    {
      q: ["Seu time levou um gol. Qual é o lance mais importante agora?", "Your team just conceded. Which play matters most now?", "Tu equipo recibió un gol. ¿Cuál es la jugada más importante ahora?"],
      opts: [
        ["O próximo", "The next one", "La próxima"],
        ["O gol que levamos", "The goal we conceded", "El gol que recibimos"],
        ["O último do jogo", "The last one of the game", "La última del partido"],
      ],
      why: ["O gol que passou não muda. O próximo lance está nos seus pés!", "That goal won't change. The next play is at your feet!", "Ese gol no cambia. ¡La próxima jugada está en tus pies!"],
    },
  ],

  menteEstoico: [
    {
      q: ["O que você controla num jogo?", "What do you control in a game?", "¿Qué controlas en un partido?"],
      opts: [
        ["Meu esforço e minhas escolhas", "My effort and my choices", "Mi esfuerzo y mis decisiones"],
        ["O juiz", "The referee", "El árbitro"],
        ["O placar e a torcida", "The score and the crowd", "El marcador y la hinchada"],
      ],
      why: ["Vovô Sábio: Cuide do que depende de você e deixe o resto.", "Wise Grandpa: Take care of what's up to you and let go of the rest.", "Abuelo Sabio: Cuida lo que depende de ti y deja el resto."],
    },
    {
      q: ["O juiz marcou uma falta errada contra você. O que faz?", "The referee gave a wrong foul against you. What do you do?", "El árbitro cobró una falta equivocada contra ti. ¿Qué haces?"],
      opts: [
        ["Respiro e foco no próximo lance", "Breathe and focus on the next play", "Respiro y me enfoco en la próxima jugada"],
        ["Reclamo até levar cartão", "Complain until I get a card", "Protesto hasta que me sacan tarjeta"],
        ["Paro de jogar", "Stop playing", "Dejo de jugar"],
      ],
      why: ["O apito é do juiz. A sua reação é sua.", "The whistle belongs to the referee. Your reaction belongs to you.", "El silbato es del árbitro. Tu reacción es tuya."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "zumzum"],
        text: ["Apito: falta contra você!", "Whistle: foul against you!", "¡Silbato: falta contra ti!"],
        steps: [
          { d: 2.4, boss: "faisca", mood: { faisca: "big" }, say: ["faisca", ["Roubado! Vou reclamar até ele mudar!", "Robbed! I'll argue till he changes it!", "¡Robo! ¡Protesto hasta que cambie!"]] },
          { d: 2.8, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["O apito não é meu. A minha reação é.", "The whistle isn't mine. My reaction is.", "El silbato no es mío. Mi reacción sí."]], text: ["Cuide só do que depende de você", "Mind only what's up to you", "Cuida solo de lo que depende de ti"] },
        ],
      },
    },
    {
      q: ["Um adversário te xinga para você perder a cabeça. O que fazer?", "An opponent insults you to make you lose your cool. What do you do?", "Un rival te insulta para que pierdas la cabeza. ¿Qué haces?"],
      opts: [
        ["Ignoro e continuo jogando", "Ignore him and keep playing", "Lo ignoro y sigo jugando"],
        ["Xingo de volta", "Insult him back", "Lo insulto también"],
        ["Empurro ele", "Push him", "Lo empujo"],
      ],
      why: ["Ele quer que você perca a cabeça. Não caia nessa!", "He wants you to lose your cool. Don't fall for it!", "Quiere que pierdas la cabeza. ¡No caigas!"],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "pavao"],
        steps: [
          { d: 2.4, mood: { faisca: "big" }, say: ["faisca", ["Ele me xingou! Deixa eu responder!", "He insulted me! Let me answer!", "¡Me insultó! ¡Déjame responder!"]], cloud: ["ele me xingou!", "he insulted me!", "¡me insultó!"], text: ["A provocação do adversário", "The opponent's trick", "La provocación del rival"] },
          { d: 2.4, say: ["pavao", ["Ninguém fala assim comigo!", "Nobody talks to me like that!", "¡Nadie me habla así!"]], mood: { pavao: "big" } },
          { d: 2.8, mood: { faisca: "small", pavao: "small" }, say: ["capitao", ["Ele quer que eu perca a cabeça. Não vou.", "He wants me to lose my head. I won't.", "Quiere que pierda la cabeza. No lo haré."]], text: ["Não caia na provocação", "Don't fall for it", "No caigas en la trampa"] },
        ],
      },
    },
    {
      q: ["Choveu e o campo está cheio de lama. O que pensar?", "It rained and the pitch is muddy. What do you think?", "Llovió y la cancha está llena de barro. ¿Qué piensas?"],
      opts: [
        ["É igual para todos; eu me adapto", "It's the same for everyone; I'll adapt", "Es igual para todos; me adapto"],
        ["Assim não dá para jogar", "You can't play like this", "Así no se puede jugar"],
        ["Reclamo o jogo inteiro", "Complain the whole game", "Protesto todo el partido"],
      ],
      why: ["Você não escolhe a chuva, mas escolhe passar a bola mais firme.", "You can't choose the rain, but you can pass the ball harder.", "No eliges la lluvia, pero sí pasar el balón más firme."],
    },
    {
      q: ["O técnico te deixou no banco. O que fazer?", "The coach left you on the bench. What do you do?", "El entrenador te dejó en el banco. ¿Qué haces?"],
      opts: [
        ["Torço pelo time e fico pronto", "Cheer for the team and stay ready", "Apoyo al equipo y me quedo listo"],
        ["Fico emburrado", "Sulk", "Me enojo y pongo mala cara"],
        ["Falo mal do técnico", "Badmouth the coach", "Hablo mal del entrenador"],
      ],
      why: ["Fique pronto: quando a chance vier, você entra voando!", "Stay ready: when your chance comes, you go in flying!", "Estate listo: ¡cuando llegue la chance, entras volando!"],
    },
    {
      q: ["A torcida do outro time grita contra você. O que faz?", "The other team's fans shout at you. What do you do?", "La hinchada del otro equipo te grita. ¿Qué haces?"],
      opts: [
        ["Foco no jogo e na bola", "Focus on the game and the ball", "Me concentro en el juego y en el balón"],
        ["Grito de volta para a torcida", "Shout back at the fans", "Les grito a los hinchas"],
        ["Me escondo e não peço mais a bola", "Hide and stop asking for the ball", "Me escondo y no pido más el balón"],
      ],
      why: ["Grito de fora é barulho. O jogo está dentro do campo!", "Shouting from outside is just noise. The game is on the pitch!", "El grito de afuera es ruido. ¡El partido está en la cancha!"],
    },
    {
      q: ["Seu time perde de 2 a 0 no intervalo. O que você pensa?", "Your team is losing 2-0 at half-time. What do you think?", "Tu equipo pierde 2 a 0 en el entretiempo. ¿Qué piensas?"],
      opts: [
        ["Dá para virar, lance a lance!", "We can turn it around, play by play!", "¡Se puede dar vuelta, jugada a jugada!"],
        ["Já perdemos", "We've already lost", "Ya perdimos"],
        ["A culpa é do goleiro", "It's the goalkeeper's fault", "La culpa es del arquero"],
      ],
      why: ["Os gols que passaram não mudam, mas o segundo tempo é todo seu.", "Those goals won't change, but the second half is all yours.", "Esos goles no cambian, pero el segundo tiempo es todo tuyo."],
    },
    {
      q: ["Antes do jogo, o Vovô Sábio manda imaginar...", "Before the game, Wise Grandpa tells you to imagine...", "Antes del partido, el Abuelo Sabio te pide imaginar..."],
      opts: [
        ["O que pode dar errado e como ficar calmo", "What could go wrong and how to stay calm", "Lo que puede salir mal y cómo mantener la calma"],
        ["Que tudo vai ser perfeito", "That everything will be perfect", "Que todo va a ser perfecto"],
        ["Que vai perder de qualquer jeito", "That you'll lose anyway", "Que vas a perder igual"],
      ],
      why: ["Vovô Sábio: Quem se prepara para o problema não se assusta com ele.", "Wise Grandpa: If you prepare for a problem, it won't scare you.", "Abuelo Sabio: Quien se prepara para el problema no se asusta."],
    },
  ],

  menteSofa: [
    {
      q: ["O Sr. Sofá diz: 'Treina amanhã'. O que você responde?", "Mr. Couch says: 'Train tomorrow'. What do you answer?", "El Sr. Sofá dice: 'Entrena mañana'. ¿Qué respondes?"],
      opts: [
        ["'Só 5 minutinhos agora!' e começo", "'Just 5 minutes now!' and start", "'¡Solo 5 minutitos ahora!' y empiezo"],
        ["'Tá bom, amanhã'", "'OK, tomorrow'", "'Está bien, mañana'"],
        ["'Só treino quando der vontade'", "'I only train when I feel like it'", "'Solo entreno cuando tengo ganas'"],
      ],
      why: ["O difícil é começar. Depois de 5 minutos, o Sr. Sofá dorme!", "Starting is the hard part. After 5 minutes, Mr. Couch falls asleep!", "Lo difícil es empezar. ¡Después de 5 minutos, el Sr. Sofá se duerme!"],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "pulinho"],
        steps: [
          { d: 2.6, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Hoje não... treina amanhã... zzz", "Not today... train tomorrow... zzz", "Hoy no... entrena mañana... zzz"]], text: ["O Sr. Sofá pegou o comando", "Mr. Couch took the controls", "El Sr. Sofá tomó el mando"] },
          { d: 2.6, say: ["capitao", ["Só 5 minutinhos. Vamos começar!", "Just 5 minutes. Let's start!", "Solo 5 minutitos. ¡Empecemos!"]] },
          { d: 2.4, boss: "capitao", mood: { sofa: "small" }, say: ["pulinho", ["Olha só, já estamos treinando!", "Look, we're already training!", "¡Mira, ya estamos entrenando!"]], text: ["O difícil é começar", "Starting is the hard part", "Lo difícil es empezar"] },
        ],
      },
    },
    {
      q: ["O que é disciplina?", "What is discipline?", "¿Qué es la disciplina?"],
      opts: [
        ["Fazer o que precisa, mesmo sem vontade", "Doing what's needed, even without wanting to", "Hacer lo que hace falta, aunque no tengas ganas"],
        ["Fazer só o que é legal", "Only doing what's fun", "Hacer solo lo divertido"],
        ["Treinar só quando o técnico olha", "Training only when the coach watches", "Entrenar solo cuando el entrenador mira"],
      ],
      why: ["A vontade vai e vem. A disciplina te leva ao treino mesmo assim.", "Wanting to comes and goes. Discipline gets you to practice anyway.", "Las ganas van y vienen. La disciplina te lleva a entrenar igual."],
    },
    {
      q: ["Você tem lição de casa e quer jogar bola. O que faz?", "You have homework and want to play football. What do you do?", "Tienes tarea y quieres jugar a la pelota. ¿Qué haces?"],
      opts: [
        ["Faço a lição e depois jogo tranquilo", "Do my homework, then play relaxed", "Hago la tarea y después juego tranquilo"],
        ["Jogo e deixo a lição para depois", "Play and leave the homework for later", "Juego y dejo la tarea para después"],
        ["Não faço nenhum dos dois", "Do neither", "No hago ninguna de las dos"],
      ],
      why: ["Lição feita, cabeça leve: aí a bola rola melhor!", "Homework done, head light: then the ball rolls better!", "Tarea hecha, cabeza liviana: ¡así el balón rueda mejor!"],
    },
    {
      q: ["Por que treinar um pouco todo dia é melhor que muito de vez em quando?", "Why is a little practice every day better than a lot now and then?", "¿Por qué entrenar un poco cada día es mejor que mucho de vez en cuando?"],
      opts: [
        ["Vira costume e vence a preguiça", "It becomes a habit and beats laziness", "Se vuelve costumbre y vence la pereza"],
        ["Não é melhor", "It isn't better", "No es mejor"],
        ["Só serve para ganhar pontos", "It's only for points", "Solo sirve para ganar puntos"],
      ],
      why: ["Quando vira costume, o Sr. Sofá nem consegue te segurar.", "Once it's a habit, Mr. Couch can't even hold you back.", "Cuando es costumbre, el Sr. Sofá ni puede frenarte."],
    },
    {
      q: ["Você ia treinar, mas ficou vendo vídeo atrás de vídeo. E agora?", "You were going to train, but kept watching video after video. Now what?", "Ibas a entrenar, pero te quedaste viendo video tras video. ¿Y ahora?"],
      opts: [
        ["Guardo o celular e vou treinar", "Put the phone away and go train", "Guardo el celular y voy a entrenar"],
        ["Só mais um vídeo... (de novo)", "Just one more video... (again)", "Solo un video más... (otra vez)"],
        ["Treino olhando o celular", "Train while looking at the phone", "Entreno mirando el celular"],
      ],
      why: ["O Sr. Sofá adora celular. Primeiro o treino, depois o vídeo!", "Mr. Couch loves phones. Practice first, videos later!", "Al Sr. Sofá le encanta el celular. ¡Primero entrenar, después el video!"],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "zumzum"],
        steps: [
          { d: 2.6, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Só mais um vídeo... e mais um...", "Just one more video... and another...", "Solo un video más... y otro..."]], cloud: ["só mais um...", "just one more...", "solo uno más..."], text: ["O Sr. Sofá adora celular", "Mr. Couch loves phones", "Al Sr. Sofá le encanta el celular"] },
          { d: 2.6, boss: "capitao", mood: { sofa: "small" }, say: ["capitao", ["Celular na gaveta. Bola no pé!", "Phone in the drawer. Ball at my feet!", "Celular al cajón. ¡Balón al pie!"]], text: ["Primeiro o que importa", "What matters comes first", "Primero lo que importa"] },
        ],
      },
    },
    {
      q: ["Está frio e você não quer ir treinar. O que fazer?", "It's cold and you don't want to go to practice. What do you do?", "Hace frío y no quieres ir a entrenar. ¿Qué haces?"],
      opts: [
        ["Vou mesmo assim; quando aquecer, melhora", "Go anyway; once I warm up, it gets better", "Voy igual; cuando entre en calor, mejora"],
        ["Fico na cama", "Stay in bed", "Me quedo en la cama"],
        ["Vou, mas treino reclamando", "Go, but train complaining", "Voy, pero entreno quejándome"],
      ],
      why: ["Ninguém se arrepende de ter treinado. De faltar, sim!", "Nobody regrets training. Skipping, yes!", "Nadie se arrepiente de entrenar. ¡De faltar, sí!"],
    },
    {
      q: ["Quando fazer aquela tarefa chata?", "When should you do that boring task?", "¿Cuándo hacer esa tarea aburrida?"],
      opts: [
        ["O quanto antes, e pronto!", "As soon as possible, and done!", "¡Lo antes posible, y listo!"],
        ["O mais tarde possível", "As late as possible", "Lo más tarde posible"],
        ["Nunca", "Never", "Nunca"],
      ],
      why: ["Tarefa deixada para depois fica zumbindo na cabeça o dia todo.", "A task left for later buzzes in your head all day.", "Una tarea dejada para después zumba en la cabeza todo el día."],
    },
    {
      q: ["Deu preguiça e você não treinou hoje. E agora?", "You felt lazy and skipped practice today. Now what?", "Te dio pereza y no entrenaste hoy. ¿Y ahora?"],
      opts: [
        ["Amanhã eu volto, sem falta!", "I'll be back tomorrow, for sure!", "¡Mañana vuelvo, sin falta!"],
        ["Desisto de tudo", "Give up on everything", "Abandono todo"],
        ["Fico me culpando a noite toda", "Beat myself up all night", "Me culpo toda la noche"],
      ],
      why: ["Todo mundo falha um dia. Só não deixe o Sr. Sofá ganhar dois seguidos!", "Everyone slips one day. Just don't let Mr. Couch win two in a row!", "Todos fallan un día. ¡Solo no dejes que el Sr. Sofá gane dos seguidos!"],
    },
  ],

  menteVigia: [
    {
      q: ["Você pensa: 'eu nunca acerto o chute'. O que é melhor pensar?", "You think: 'I never hit a good shot'. What's better to think?", "Piensas: 'nunca acierto el tiro'. ¿Qué es mejor pensar?"],
      opts: [
        ["'Ainda não acerto, mas vou treinar'", "'I can't do it yet, but I'll practise'", "'Todavía no acierto, pero voy a entrenar'"],
        ["'Sou péssimo mesmo'", "'I'm just terrible'", "'Soy malísimo'"],
        ["'Chutar é chato'", "'Shooting is boring'", "'Patear es aburrido'"],
      ],
      why: ["A palavrinha 'ainda' muda tudo: um dia você acerta!", "The little word 'yet' changes everything: one day you'll get it!", "La palabrita 'todavía' lo cambia todo: ¡un día aciertas!"],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "pulinho"],
        steps: [
          { d: 2.6, mood: { nublada: "big" }, say: ["nublada", ["Eu nunca acerto o chute...", "I never hit a good shot...", "Nunca acierto el tiro..."]], cloud: ["eu nunca acerto", "I never get it", "nunca acierto"], text: ["Um pensamento que derruba", "A thought that knocks you down", "Un pensamiento que te tira abajo"] },
          { d: 2.8, mood: { nublada: "" }, say: ["capitao", ["Ainda não acerto. Vou treinar 20 chutes.", "I can't do it yet. I'll practise 20 shots.", "Todavía no acierto. Voy a entrenar 20 tiros."]], text: ["A palavra 'ainda' muda tudo", "The word 'yet' changes everything", "La palabra 'todavía' lo cambia todo"] },
          { d: 2, say: ["pulinho", ["Bora treinar!", "Let's go practise!", "¡A entrenar!"]] },
        ],
      },
    },
    {
      q: ["Você errou um passe. O que dizer para você mesmo?", "You made a bad pass. What do you say to yourself?", "Fallaste un pase. ¿Qué te dices a ti mismo?"],
      opts: [
        ["'Vamos! A próxima você acerta!'", "'Come on! You'll get the next one!'", "'¡Vamos! ¡La próxima la aciertas!'"],
        ["'Burro! Você não sabe nada!'", "'Idiot! You're useless!'", "'¡Burro! ¡No sabes nada!'"],
        ["Fico quieto e bravo comigo", "Stay quiet and mad at myself", "Me quedo callado y enojado conmigo"],
      ],
      why: ["Fale com você como um bom técnico falaria.", "Talk to yourself like a good coach would.", "Háblate como lo haría un buen entrenador."],
    },
    {
      q: ["Antes do jogo, você fecha os olhos para imaginar. Imaginar o quê?", "Before the game, you close your eyes to imagine. Imagine what?", "Antes del partido, cierras los ojos para imaginar. ¿Imaginar qué?"],
      opts: [
        ["Eu fazendo as jogadas bem feitas", "Me doing the plays well", "Yo haciendo bien las jugadas"],
        ["A taça, sem precisar treinar", "The trophy, without needing to train", "La copa, sin necesidad de entrenar"],
        ["Tudo dando errado", "Everything going wrong", "Que todo sale mal"],
      ],
      why: ["O cérebro treina quando imagina: o domínio, o passe, o gol!", "Your brain trains when it imagines: the touch, the pass, the goal!", "El cerebro entrena cuando imagina: ¡el control, el pase, el gol!"],
    },
    {
      q: ["Em vez de 'não posso errar o passe', o que é melhor pensar?", "Instead of 'I mustn't miss this pass', what's better to think?", "En vez de 'no puedo fallar el pase', ¿qué es mejor pensar?"],
      opts: [
        ["'Passe firme no pé do colega'", "'Firm pass to my teammate's feet'", "'Pase firme al pie del compañero'"],
        ["'Não posso errar, não posso errar...'", "'Mustn't miss, mustn't miss...'", "'No puedo fallar, no puedo fallar...'"],
        ["'Vai dar errado'", "'It's going to go wrong'", "'Va a salir mal'"],
      ],
      why: ["Diga para a cabeça o que fazer, não o que evitar.", "Tell your head what to do, not what to avoid.", "Dile a tu cabeza qué hacer, no qué evitar."],
    },
    {
      q: ["Qual gesto ajuda a trazer a confiança antes de uma jogada?", "Which gesture helps bring back confidence before a play?", "¿Qué gesto ayuda a traer la confianza antes de una jugada?"],
      opts: [
        ["Fechar a mão lembrando do meu melhor lance", "Make a fist remembering my best play", "Cerrar el puño recordando mi mejor jugada"],
        ["Roer a unha", "Bite my nails", "Morderme las uñas"],
        ["Olhar para o chão", "Look at the ground", "Mirar al suelo"],
      ],
      why: ["Repita o gesto com uma boa lembrança, e a confiança volta.", "Repeat the gesture with a good memory, and confidence comes back.", "Repite el gesto con un buen recuerdo, y la confianza vuelve."],
    },
    {
      q: ["Por que lembrar 3 coisas boas do dia antes de dormir?", "Why remember 3 good things from your day before bed?", "¿Por qué recordar 3 cosas buenas del día antes de dormir?"],
      opts: [
        ["Ensina a cabeça a ver o lado bom", "It teaches your head to see the good side", "Enseña a la cabeza a ver lo bueno"],
        ["Não serve para nada", "It's pointless", "No sirve para nada"],
        ["Para me achar melhor que os outros", "To feel better than others", "Para creerme mejor que los demás"],
      ],
      why: ["Quanto mais você procura coisas boas, mais você encontra.", "The more you look for good things, the more you find.", "Cuanto más buscas cosas buenas, más encuentras."],
    },
    {
      q: ["Pensar positivo quer dizer...", "Thinking positive means...", "Pensar en positivo significa..."],
      opts: [
        ["Ver o problema e buscar uma saída", "Seeing the problem and finding a way out", "Ver el problema y buscar una salida"],
        ["Fingir que nada de ruim acontece", "Pretending nothing bad ever happens", "Fingir que nunca pasa nada malo"],
        ["Achar que vai ganhar sempre", "Thinking you'll always win", "Creer que vas a ganar siempre"],
      ],
      why: ["Positivo é perguntar: 'o que eu posso fazer agora?'.", "Positive is asking: 'what can I do now?'.", "Positivo es preguntar: '¿qué puedo hacer ahora?'."],
    },
    {
      q: ["Um colega errou e o time levou gol. O que você diz?", "A teammate made a mistake and the team conceded. What do you say?", "Un compañero se equivocó y el equipo recibió gol. ¿Qué le dices?"],
      opts: [
        ["'Tranquilo, vamos buscar!'", "'No worries, let's get it back!'", "'¡Tranquilo, vamos a buscarlo!'"],
        ["'Você estragou tudo!'", "'You ruined everything!'", "'¡Arruinaste todo!'"],
        ["Não falo mais com ele", "Stop talking to him", "No le hablo más"],
      ],
      why: ["Apoiar o colega deixa o time mais forte.", "Backing your teammate makes the team stronger.", "Apoyar al compañero hace más fuerte al equipo."],
    },
  ],

  mentePavao: [
    {
      q: ["O Pavão quer driblar todo mundo, mas um colega está livre. O que fazer?", "Peacock wants to dribble past everyone, but a teammate is free. What do you do?", "El Pavo Real quiere gambetear a todos, pero un compañero está libre. ¿Qué haces?"],
      opts: [
        ["Passo para o colega livre", "Pass to the free teammate", "Paso al compañero libre"],
        ["Driblo todo mundo para aparecer", "Dribble everyone to show off", "Gambeteo a todos para lucirme"],
        ["Seguro a bola até alguém aplaudir", "Hold the ball until someone claps", "Me quedo con el balón hasta que alguien aplauda"],
      ],
      why: ["O Pavão quer aplauso. Quem joga para o time brilha mais!", "Peacock wants applause. Team players shine brighter!", "El Pavo Real quiere aplausos. ¡Quien juega para el equipo brilla más!"],
      scene: {
        anim: "cabine", cast: ["capitao", "pavao", "pulinho"],
        steps: [
          { d: 2.6, boss: "pavao", mood: { pavao: "big" }, say: ["pavao", ["Olhem para mim! Vou driblar todo mundo!", "Look at me! I'll dribble past everyone!", "¡Mírenme! ¡Voy a gambetear a todos!"]], text: ["O Pavão quer aparecer", "Peacock wants to show off", "El Pavo Real quiere lucirse"] },
          { d: 2.6, boss: "capitao", mood: { pavao: "small" }, say: ["capitao", ["O colega está livre. Passa a bola!", "Our teammate is free. Pass it!", "El compañero está libre. ¡Pásala!"]], text: ["O craque joga para o time", "Great players play for the team", "El crack juega para el equipo"] },
          { d: 2, say: ["pulinho", ["Gol do time!", "Team goal!", "¡Gol del equipo!"]] },
        ],
      },
    },
    {
      q: ["Você fez 3 gols no jogo. Como agir?", "You scored 3 goals in the game. How do you act?", "Hiciste 3 goles en el partido. ¿Cómo actúas?"],
      opts: [
        ["Agradeço aos colegas e sigo humilde", "Thank my teammates and stay humble", "Agradezco a los compañeros y sigo humilde"],
        ["Digo que sou o melhor do time", "Say I'm the best on the team", "Digo que soy el mejor del equipo"],
        ["Paro de passar a bola", "Stop passing the ball", "Dejo de pasar el balón"],
      ],
      why: ["Nenhum gol sai sozinho: alguém roubou a bola, alguém passou.", "No goal comes alone: someone won the ball, someone passed.", "Ningún gol sale solo: alguien recuperó el balón, alguien pasó."],
    },
    {
      q: ["O que faz você ser você, ganhando ou perdendo?", "What makes you who you are, win or lose?", "¿Qué te hace ser tú, ganes o pierdas?"],
      opts: [
        ["Meu jeito, meu esforço e meu coração", "My way, my effort and my heart", "Mi forma de ser, mi esfuerzo y mi corazón"],
        ["O número de gols que eu faço", "How many goals I score", "La cantidad de goles que hago"],
        ["As curtidas que eu recebo", "The likes I get", "Los 'me gusta' que recibo"],
      ],
      why: ["Você não vale mais com o gol nem menos com o erro.", "A goal doesn't make you worth more, a mistake doesn't make you worth less.", "No vales más por un gol ni menos por un error."],
    },
    {
      q: ["O técnico te corrigiu na frente de todos e o Pavão ficou bravo. E agora?", "The coach corrected you in front of everyone and Peacock got upset. Now what?", "El entrenador te corrigió delante de todos y el Pavo Real se enojó. ¿Y ahora?"],
      opts: [
        ["Escuto e aprendo para melhorar", "Listen and learn to get better", "Escucho y aprendo para mejorar"],
        ["Fico bravo e não olho para ele", "Get angry and don't look at him", "Me enojo y no lo miro"],
        ["Faço o contrário só para provocar", "Do the opposite on purpose", "Hago lo contrario para provocar"],
      ],
      why: ["Correção não é ataque: é o técnico querendo te ver melhor.", "A correction isn't an attack: the coach wants you to get better.", "La corrección no es un ataque: el entrenador quiere verte mejor."],
      scene: {
        anim: "cabine", cast: ["capitao", "pavao", "faisca"],
        text: ["O técnico chamou sua atenção", "The coach called you out", "El entrenador te llamó la atención"],
        steps: [
          { d: 2.6, boss: "pavao", mood: { pavao: "big" }, say: ["pavao", ["Na frente de todo mundo?! Que vergonha!", "In front of everyone?! How embarrassing!", "¡¿Delante de todos?! ¡Qué vergüenza!"]] },
          { d: 2.8, boss: "capitao", mood: { pavao: "small" }, say: ["capitao", ["Ele quer me ver melhor. Vou escutar.", "He wants me to get better. I'll listen.", "Quiere verme mejor. Voy a escuchar."]], text: ["Correção é ajuda, não ataque", "A correction is help, not an attack", "La corrección es ayuda, no un ataque"] },
        ],
      },
    },
    {
      q: ["Um adversário caiu machucado. O que um craque faz?", "An opponent is down injured. What does a great player do?", "Un rival cayó lesionado. ¿Qué hace un crack?"],
      opts: [
        ["Para a jogada e ajuda", "Stops the play and helps", "Para la jugada y ayuda"],
        ["Continua e faz o gol", "Carries on and scores", "Sigue y hace el gol"],
        ["Ri dele", "Laughs at him", "Se ríe de él"],
      ],
      why: ["Primeiro a pessoa, depois o jogo. Isso é jogo limpo!", "The person first, then the game. That's fair play!", "Primero la persona, después el partido. ¡Eso es juego limpio!"],
    },
    {
      q: ["Chegou um colega novo que joga melhor na sua posição. O que fazer?", "A new teammate who's better in your position joined. What do you do?", "Llegó un compañero nuevo que juega mejor en tu posición. ¿Qué haces?"],
      opts: [
        ["Aprendo com ele e treino mais", "Learn from him and train harder", "Aprendo de él y entreno más"],
        ["Torço para ele errar", "Hope he messes up", "Deseo que se equivoque"],
        ["Não passo a bola para ele", "Don't pass to him", "No le paso el balón"],
      ],
      why: ["Quem treina ao lado dos melhores fica melhor também.", "Training next to the best makes you better too.", "Quien entrena con los mejores también mejora."],
    },
    {
      q: ["Perder um jogo faz você valer menos?", "Does losing a game make you worth less?", "¿Perder un partido te hace valer menos?"],
      opts: [
        ["Não: perdi o jogo, não o meu valor", "No: I lost the game, not my worth", "No: perdí el partido, no mi valor"],
        ["Sim, eu sou um perdedor", "Yes, I'm a loser", "Sí, soy un perdedor"],
        ["Só se alguém viu", "Only if someone saw", "Solo si alguien lo vio"],
      ],
      why: ["Você perdeu um jogo, não perdeu você. Amanhã tem treino!", "You lost a game, not yourself. There's practice tomorrow!", "Perdiste un partido, no a ti mismo. ¡Mañana hay entrenamiento!"],
    },
    {
      q: ["Pedir desculpa a um colega depois de errar com ele é...", "Saying sorry to a teammate after treating him badly is...", "Pedir perdón a un compañero después de tratarlo mal es..."],
      opts: [
        ["Coragem e respeito", "Courage and respect", "Valentía y respeto"],
        ["Fraqueza", "Weakness", "Debilidad"],
        ["Desnecessário", "Unnecessary", "Innecesario"],
      ],
      why: ["O Pavão odeia pedir desculpa, mas quem pede é forte!", "Peacock hates saying sorry, but those who do are strong!", "El Pavo Real odia pedir perdón, ¡pero quien lo pide es fuerte!"],
    },
  ],

  menteMelhor: [
    {
      q: ["O que você controla: o placar ou o seu esforço?", "What do you control: the score or your effort?", "¿Qué controlas: el marcador o tu esfuerzo?"],
      opts: [
        ["Meu esforço; o placar vem depois", "My effort; the score comes after", "Mi esfuerzo; el marcador viene después"],
        ["O placar", "The score", "El marcador"],
        ["Nenhum dos dois", "Neither", "Ninguno de los dos"],
      ],
      why: ["Dê o seu melhor. Isso depende só de você!", "Give your best. That's all up to you!", "Da lo mejor de ti. ¡Eso depende solo de ti!"],
    },
    {
      q: ["Você deu tudo e o time perdeu. Foi um fracasso?", "You gave everything and your team lost. Was it a failure?", "Lo diste todo y tu equipo perdió. ¿Fue un fracaso?"],
      opts: [
        ["Não: dei o meu melhor e aprendi", "No: I gave my best and learned", "No: di lo mejor de mí y aprendí"],
        ["Sim, só vale se ganhar", "Yes, only winning counts", "Sí, solo vale ganar"],
        ["Sim, nem devia ter tentado", "Yes, I shouldn't even have tried", "Sí, ni debería haberlo intentado"],
      ],
      why: ["Todo campeão já perdeu muitas vezes. Quem aprende sempre ganha algo.", "Every champion has lost many times. If you learn, you always win something.", "Todo campeón perdió muchas veces. Quien aprende siempre gana algo."],
    },
    {
      q: ["Seu time ganhou, mas você jogou de qualquer jeito. Foi bom?", "Your team won, but you didn't really try. Was it good?", "Tu equipo ganó, pero jugaste de cualquier manera. ¿Estuvo bien?"],
      opts: [
        ["Ganhamos, mas eu podia me esforçar mais", "We won, but I could have tried harder", "Ganamos, pero podía esforzarme más"],
        ["Perfeito: ganhou, tá bom", "Perfect: a win is a win", "Perfecto: ganamos y listo"],
        ["Não importa", "It doesn't matter", "No importa"],
      ],
      why: ["O placar não mostra tudo. Compare você com o seu melhor.", "The score doesn't show everything. Compare yourself with your best.", "El marcador no muestra todo. Compárate con lo mejor que puedes hacer."],
    },
    {
      q: ["Você vai bater o pênalti decisivo e está nervoso. Pensa em quê?", "You're taking the deciding penalty and you're nervous. What do you think about?", "Vas a patear el penal decisivo y estás nervioso. ¿En qué piensas?"],
      opts: [
        ["Respirar, escolher o canto e bater firme", "Breathe, pick a corner and strike firmly", "Respirar, elegir el rincón y patear firme"],
        ["'E se eu errar?'", "'What if I miss?'", "'¿Y si fallo?'"],
        ["Na torcida e no placar", "The crowd and the score", "En la hinchada y el marcador"],
      ],
      why: ["Você não manda no goleiro, mas manda na sua batida.", "You can't control the keeper, but you control your kick.", "No mandas en el arquero, pero sí en tu remate."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "zumzum", "pulinho"],
        text: ["Pênalti decisivo...", "Deciding penalty...", "Penal decisivo..."],
        steps: [
          { d: 2.4, boss: "tremelique", mood: { tremelique: "big" }, say: ["tremelique", ["E se eu errar na frente de todo mundo?!", "What if I miss in front of everyone?!", "¿Y si fallo delante de todos?!"]] },
          { d: 2.2, say: ["zumzum", ["E se o goleiro pegar? E se...?", "What if the keeper saves it? What if...?", "¿Y si el arquero ataja? ¿Y si...?"]], cloud: ["e se eu errar?", "what if I miss?", "¿y si fallo?"] },
          { d: 2.8, boss: "capitao", mood: { tremelique: "small", zumzum: "small" }, say: ["capitao", ["Respira. Canto escolhido. Bate firme.", "Breathe. Corner picked. Strike firmly.", "Respira. Rincón elegido. Patea firme."]], text: ["Pense só no que você vai fazer", "Think only about what you'll do", "Piensa solo en lo que vas a hacer"] },
        ],
      },
    },
    {
      q: ["Faltam 2 minutos e o jogo está empatado. Como jogar?", "Two minutes left and it's a draw. How do you play?", "Faltan 2 minutos y el partido está empatado. ¿Cómo juegas?"],
      opts: [
        ["Com calma, fazendo o simples bem feito", "Calmly, doing the simple things well", "Con calma, haciendo lo simple bien"],
        ["Chutando de qualquer lugar, desesperado", "Shooting from anywhere in a panic", "Pateando desde cualquier lado, desesperado"],
        ["Reclamando de tudo", "Complaining about everything", "Protestando por todo"],
      ],
      why: ["Na hora decisiva, o simples bem feito ganha o jogo.", "When it counts, simple things done well win games.", "En el momento decisivo, lo simple bien hecho gana el partido."],
    },
    {
      q: ["Você perdeu um gol feito. O que faz no lance seguinte?", "You missed an open goal. What do you do on the next play?", "Fallaste un gol hecho. ¿Qué haces en la siguiente jugada?"],
      opts: [
        ["Respiro e peço a bola de novo", "Breathe and ask for the ball again", "Respiro y pido el balón otra vez"],
        ["Fico pensando no erro o jogo todo", "Keep thinking about it the whole game", "Me quedo pensando en el error todo el partido"],
        ["Peço para sair do jogo", "Ask to come off", "Pido salir del partido"],
      ],
      why: ["Errar faz parte. O craque pede a bola de novo!", "Mistakes happen. Great players ask for the ball again!", "Equivocarse es parte del juego. ¡El crack pide el balón otra vez!"],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "pulinho"],
        steps: [
          { d: 2.6, boss: "nublada", mood: { nublada: "big" }, say: ["nublada", ["Perdi um gol feito... não quero mais a bola.", "I missed an open goal... I don't want the ball.", "Fallé un gol hecho... no quiero más el balón."]], cloud: ["perdi o gol...", "I missed...", "fallé el gol..."] },
          { d: 2.8, boss: "capitao", mood: { nublada: "" }, say: ["capitao", ["Já passou. Respira e pede de novo!", "It's gone. Breathe and ask again!", "Ya pasó. ¡Respira y pídela otra vez!"]], text: ["O próximo lance é uma nova chance", "The next play is a new chance", "La próxima jugada es otra chance"] },
        ],
      },
    },
    {
      q: ["Antes de um jogo importante, o que é normal sentir?", "Before a big game, what is normal to feel?", "Antes de un partido importante, ¿qué es normal sentir?"],
      opts: [
        ["Frio na barriga: o corpo se preparando", "Butterflies: your body getting ready", "Mariposas en la panza: el cuerpo preparándose"],
        ["Nada: craque nunca fica nervoso", "Nothing: great players never get nervous", "Nada: los cracks nunca se ponen nerviosos"],
        ["Vontade de desistir sempre", "Always wanting to quit", "Siempre ganas de abandonar"],
      ],
      why: ["Até os melhores do mundo ficam nervosos. Use essa energia no jogo!", "Even the world's best get nervous. Use that energy in the game!", "Hasta los mejores del mundo se ponen nerviosos. ¡Usa esa energía en el partido!"],
    },
    {
      q: ["Como saber se o seu treino foi bom?", "How do you know if your practice was good?", "¿Cómo saber si tu entrenamiento fue bueno?"],
      opts: [
        ["Se eu me esforcei e aprendi algo", "If I tried hard and learned something", "Si me esforcé y aprendí algo"],
        ["Só se eu ganhei o rachão", "Only if I won the scrimmage", "Solo si gané el partidito"],
        ["Só se o técnico me elogiou", "Only if the coach praised me", "Solo si el entrenador me elogió"],
      ],
      why: ["Elogio e vitória são legais, mas esforço e aprender dependem de você.", "Praise and wins are nice, but effort and learning are up to you.", "Elogios y victorias son lindos, pero esforzarte y aprender dependen de ti."],
    },
    {
      q: ["Seu time perdeu o jogo. O que é mais importante depois?", "Your team lost. What matters most afterwards?", "Tu equipo perdió. ¿Qué es lo más importante después?"],
      opts: [
        ["Cumprimentar o adversário e aprender", "Shake hands with the other team and learn", "Saludar al rival y aprender"],
        ["Culpar o juiz", "Blame the referee", "Culpar al árbitro"],
        ["Desistir de jogar", "Give up playing", "Dejar de jugar"],
      ],
      why: ["Perder também ensina. Quem respeita e aprende volta mais forte.", "Losing teaches too. Respect, learn and come back stronger.", "Perder también enseña. Quien respeta y aprende vuelve más fuerte."],
    },
  ],
});
