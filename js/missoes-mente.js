/* Grupo Mental: a Turma da Cabeça.
   Personagens (js/animacoes/cabine.js): Capitão Agora (a consciência, quem observa e decide), Pulinho (alegria),
   Tremelique (medo), Faísca (raiva), Nublada (tristeza), Zum-Zum (ansiedade), Sr. Sofá (preguiça), Pavão (ego). */

CQ_MISSIONS.push(
  {
    id: "turma", type: "quiz", quiz: "menteTurma", icon: "🎭", subs: ["concentration", "confidence"], tiers: [1, 2, 3],
    title: ["A Turma da Cabeça", "The Head Crew", "La Pandilla de la Cabeza"],
    desc: ["Na sua cabeça mora uma turma de emoções: Pulinho, Tremelique, Faísca, Nublada, Zum-Zum, Sr. Sofá e Pavão. Quem deve ficar no comando é o Capitão Agora. 3 perguntas.", "A crew of emotions lives in your head: Bouncy, Shaky, Spark, Cloudy, Buzz, Mr. Couch and Peacock. The one in charge should be Captain Now. 3 questions.", "En tu cabeza vive una pandilla de emociones: Saltito, Tembleque, Chispa, Nublada, Zum-Zum, Sr. Sofá y Pavo Real. Quien debe mandar es el Capitán Ahora. 3 preguntas."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "nuvens", type: "quiz", quiz: "menteNuvens", icon: "☁️", subs: ["concentration", "composure"], tiers: [1, 2, 3],
    title: ["Nuvens que passam", "Passing clouds", "Nubes que pasan"],
    desc: ["Pensamentos são como nuvens: aparecem e vão embora. 3 perguntas sobre observar sem se agarrar.", "Thoughts are like clouds: they come and go. 3 questions about watching without holding on.", "Los pensamientos son como nubes: vienen y se van. 3 preguntas sobre observar sin aferrarse."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "agora", type: "quiz", quiz: "menteAgora", icon: "📍", subs: ["concentration", "composure"], tiers: [1, 2, 3],
    title: ["Aqui e agora", "Here and now", "Aquí y ahora"],
    desc: ["O jogo só acontece no agora. 3 perguntas sobre presença, respiração e meditação.", "The game only happens now. 3 questions about presence, breathing and meditation.", "El partido solo ocurre ahora. 3 preguntas sobre presencia, respiración y meditación."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "estoico", type: "quiz", quiz: "menteEstoico", icon: "🛡️", subs: ["resilience", "composure"], tiers: [1, 2, 3],
    title: ["Escudo do estoico", "The stoic shield", "El escudo estoico"],
    desc: ["Cuide do que depende de você e solte o resto. 3 perguntas sobre juiz, provocação, torcida e azar.", "Take care of what depends on you and let go of the rest. 3 questions about referees, taunts, crowds and bad luck.", "Cuida de lo que depende de ti y suelta el resto. 3 preguntas sobre árbitros, provocaciones, hinchada y mala suerte."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "sofa", type: "quiz", quiz: "menteSofa", icon: "🛋️", subs: ["discipline"], tiers: [1, 2, 3],
    title: ["Vencendo o Sr. Sofá", "Beating Mr. Couch", "Venciendo al Sr. Sofá"],
    desc: ["O Sr. Sofá sempre diz 'depois'. 3 perguntas sobre disciplina, preguiça e deixar para amanhã.", "Mr. Couch always says 'later'. 3 questions about discipline, laziness and putting things off.", "El Sr. Sofá siempre dice 'después'. 3 preguntas sobre disciplina, pereza y dejar para mañana."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "vigia", type: "quiz", quiz: "menteVigia", icon: "🔦", subs: ["confidence", "resilience"], tiers: [1, 2, 3],
    title: ["Vigia dos pensamentos", "Thought guard", "Vigía de los pensamientos"],
    desc: ["As palavras que você diz para você mesmo mudam o seu jogo. 3 perguntas sobre conversa interna, visualização e gratidão.", "The words you say to yourself change your game. 3 questions about self-talk, visualization and gratitude.", "Las palabras que te dices cambian tu juego. 3 preguntas sobre diálogo interno, visualización y gratitud."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "pavao", type: "quiz", quiz: "mentePavao", icon: "🦚", subs: ["fairplay", "confidence"], tiers: [1, 2, 3],
    title: ["O Pavão e a essência", "The Peacock and your true self", "El Pavo Real y tu esencia"],
    desc: ["O Pavão (ego) quer aplauso; a sua essência quer o melhor para o time. 3 perguntas sobre humildade e valor próprio.", "Peacock (ego) wants applause; your true self wants what's best for the team. 3 questions about humility and self-worth.", "El Pavo Real (ego) quiere aplausos; tu esencia quiere lo mejor para el equipo. 3 preguntas sobre humildad y valor propio."],
    unit: CQ_UNIT_HITS,
  },
  {
    id: "melhor", type: "quiz", quiz: "menteMelhor", icon: "🌟", subs: ["resilience", "discipline", "courage"], tiers: [1, 2, 3],
    title: ["Dar o meu melhor", "Giving my best", "Dar lo mejor de mí"],
    desc: ["Faça o seu melhor: o resultado é consequência. 3 perguntas sobre esforço, pressão e o que fazer depois de errar.", "Do your best: the result follows. 3 questions about effort, pressure and what to do after a mistake.", "Haz lo mejor que puedas: el resultado es consecuencia. 3 preguntas sobre esfuerzo, presión y qué hacer después de un error."],
    unit: CQ_UNIT_HITS,
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
      q: ["Dentro da sua cabeça mora uma turma de emoções. Quem deve ficar no comando durante o jogo?", "A crew of emotions lives in your head. Who should be in charge during the game?", "En tu cabeza vive una pandilla de emociones. ¿Quién debe mandar durante el partido?"],
      opts: [
        ["O Capitão Agora: a parte de mim que observa e decide com calma", "Captain Now: the part of me that watches and decides calmly", "El Capitán Ahora: la parte de mí que observa y decide con calma"],
        ["Quem gritar mais alto", "Whoever shouts the loudest", "El que grite más fuerte"],
        ["A Faísca, porque raiva dá força", "Spark, because anger makes you strong", "Chispa, porque la rabia da fuerza"],
      ],
      why: ["Todas as emoções podem falar, mas quem decide é o Capitão: você, observando com calma.", "Every emotion can speak, but Captain Now decides: you, watching calmly.", "Todas las emociones pueden hablar, pero decide el Capitán: tú, observando con calma."],
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
      q: ["Num jogo difícil, o Tremelique (medo) diz: 'não pede a bola!'. O que fazer?", "In a tough game, Shaky (fear) says: 'don't ask for the ball!'. What do you do?", "En un partido difícil, Tembleque (miedo) dice: '¡no pidas el balón!'. ¿Qué haces?"],
      opts: [
        ["Agradeço o aviso e peço a bola mesmo assim", "Thank him for the warning and ask for the ball anyway", "Le agradezco el aviso y pido el balón igual"],
        ["Obedeço e me escondo atrás do adversário", "Obey and hide behind an opponent", "Le hago caso y me escondo detrás del rival"],
        ["Finjo que estou machucado", "Pretend I'm injured", "Finjo que estoy lesionado"],
      ],
      why: ["O medo é um alarme que quer te proteger. Todo craque sente medo; coragem é jogar mesmo assim.", "Fear is an alarm trying to protect you. Every great player feels it; courage is playing anyway.", "El miedo es una alarma que quiere protegerte. Todo crack lo siente; valentía es jugar igual."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "pulinho"],
        steps: [
          { d: 2.6, mood: { tremelique: "big" }, say: ["tremelique", ["Não pede a bola! E se você errar?!", "Don't ask for the ball! What if you miss?!", "¡No pidas el balón! ¿Y si fallas?"]], text: ["O Tremelique quer te proteger", "Shaky wants to protect you", "Tembleque quiere protegerte"] },
          { d: 2.8, mood: { tremelique: "small" }, say: ["capitao", ["Valeu pelo aviso. Respira... Pede a bola!", "Thanks for the warning. Breathe... Ask for it!", "Gracias por el aviso. Respira... ¡Pide el balón!"]], text: ["Coragem é jogar com medo", "Courage is playing through fear", "Valentía es jugar con miedo"] },
        ],
      },
    },
    {
      q: ["A Faísca (raiva) acendeu depois de uma falta dura em você. O que fazer?", "Spark (anger) lit up after a hard foul on you. What do you do?", "Chispa (rabia) se encendió después de una falta dura. ¿Qué haces?"],
      opts: [
        ["Respiro e uso a energia para correr e jogar mais", "Breathe and use the energy to run and play harder", "Respiro y uso la energía para correr y jugar más"],
        ["Revido na próxima jogada", "Get him back on the next play", "Me vengo en la siguiente jugada"],
        ["Xingo o juiz", "Swear at the referee", "Insulto al árbitro"],
      ],
      why: ["Raiva é energia. Com a Faísca no comando você leva cartão; com o Capitão, ela vira garra.", "Anger is energy. With Spark in charge you get a card; with the Captain, it becomes fight.", "La rabia es energía. Con Chispa al mando te sacan tarjeta; con el Capitán, se vuelve garra."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "nublada"],
        text: ["Levou uma falta dura...", "A hard foul on you...", "Te hicieron una falta dura..."],
        steps: [
          { d: 2.4, boss: "faisca", mood: { faisca: "big" }, say: ["faisca", ["Ele vai ver só! Vou devolver!", "He'll pay for that! Get him back!", "¡Ya va a ver! ¡Se la devuelvo!"]] },
          { d: 2.4, say: ["capitao", ["Calma. Respira fundo... um, dois, três.", "Easy. Deep breath... one, two, three.", "Calma. Respira hondo... uno, dos, tres."]], cloud: ["vou revidar!", "get him back!", "¡me vengo!"] },
          { d: 2.6, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["Faísca, me dá essa energia: vamos correr!", "Spark, give me that energy: let's run!", "Chispa, dame esa energía: ¡a correr!"]], text: ["A raiva virou garra", "Anger turned into fight", "La rabia se volvió garra"] },
        ],
      },
    },
    {
      q: ["A Nublada (tristeza) chegou depois de uma derrota. Pode ficar triste?", "Cloudy (sadness) showed up after a defeat. Is it OK to be sad?", "Nublada (tristeza) llegó después de una derrota. ¿Se puede estar triste?"],
      opts: [
        ["Pode: sentir é normal; depois eu aprendo e sigo em frente", "Yes: feeling is normal; then I learn and move on", "Sí: sentir es normal; después aprendo y sigo"],
        ["Não, campeão nunca fica triste", "No, champions are never sad", "No, un campeón nunca está triste"],
        ["Pode, e devo ficar triste para sempre", "Yes, and I should stay sad forever", "Sí, y debo quedarme triste para siempre"],
      ],
      why: ["Toda emoção passa. Deixe a Nublada chover um pouco; depois o sol volta e você treina de novo.", "Every emotion passes. Let Cloudy rain a little; then the sun comes back and you train again.", "Toda emoción pasa. Deja que Nublada llueva un poco; después vuelve el sol y entrenas otra vez."],
    },
    {
      q: ["O Pulinho (alegria) está pulando porque você fez gol. Como comemorar?", "Bouncy (joy) is jumping because you scored. How do you celebrate?", "Saltito (alegría) está saltando porque hiciste un gol. ¿Cómo festejas?"],
      opts: [
        ["Comemoro com o time e volto concentrado", "Celebrate with the team and come back focused", "Festejo con el equipo y vuelvo concentrado"],
        ["Provoco o adversário", "Taunt the opponents", "Provoco al rival"],
        ["Paro de correr porque já ganhei", "Stop running because I've already won", "Dejo de correr porque ya gané"],
      ],
      why: ["Alegria é ótima, mas o jogo continua. Comemore e devolva o comando ao Capitão.", "Joy is great, but the game goes on. Celebrate and hand the controls back to the Captain.", "La alegría es genial, pero el partido sigue. Festeja y devuelve el mando al Capitán."],
    },
    {
      q: ["O Zum-Zum (ansiedade) fica repetindo 'e se...? e se...?'. Em que tempo ele está pensando?", "Buzz (anxiety) keeps saying 'what if...? what if...?'. Which time is he thinking about?", "Zum-Zum (ansiedad) repite '¿y si...? ¿y si...?'. ¿En qué tiempo está pensando?"],
      opts: [
        ["No futuro, que ainda nem aconteceu", "The future, which hasn't even happened", "En el futuro, que todavía no pasó"],
        ["No agora", "The present", "En el ahora"],
        ["Em nenhum, ele só quer ajudar", "None, he just wants to help", "En ninguno, solo quiere ayudar"],
      ],
      why: ["A ansiedade mora no futuro. O Capitão te traz de volta: este lance, esta bola, agora.", "Anxiety lives in the future. The Captain brings you back: this play, this ball, now.", "La ansiedad vive en el futuro. El Capitán te trae de vuelta: esta jugada, este balón, ahora."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "tremelique"],
        steps: [
          { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["E se a gente perder? E se eu errar? E se...?", "What if we lose? What if I miss? What if...?", "¿Y si perdemos? ¿Y si fallo? ¿Y si...?"]], cloud: ["e se...?", "what if...?", "¿y si...?"], text: ["O Zum-Zum vive no futuro", "Buzz lives in the future", "Zum-Zum vive en el futuro"] },
          { d: 2.6, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Pés no chão. Só existe esta bola, agora.", "Feet on the ground. Only this ball, now.", "Pies en el suelo. Solo existe este balón, ahora."]], text: ["O Capitão traz você para o agora", "The Captain brings you back to now", "El Capitán te trae al ahora"] },
        ],
      },
    },
    {
      q: ["Qual emoção é proibida de sentir?", "Which emotion are you not allowed to feel?", "¿Qué emoción está prohibido sentir?"],
      opts: [
        ["Nenhuma: todas podem aparecer, só não podem pilotar sozinhas", "None: they can all show up, they just can't drive alone", "Ninguna: todas pueden aparecer, solo no pueden manejar solas"],
        ["O medo", "Fear", "El miedo"],
        ["A tristeza", "Sadness", "La tristeza"],
      ],
      why: ["Emoções não são boas nem ruins: são avisos. O problema é deixar uma delas no comando.", "Emotions aren't good or bad: they're messages. The problem is letting one of them take over.", "Las emociones no son buenas ni malas: son avisos. El problema es dejar a una al mando."],
    },
    {
      q: ["Como saber qual emoção está no comando agora?", "How do you know which emotion is in charge right now?", "¿Cómo saber qué emoción está al mando ahora?"],
      opts: [
        ["Paro um instante e pergunto: 'quem está pilotando agora?'", "Pause for a moment and ask: 'who's driving right now?'", "Paro un instante y pregunto: '¿quién maneja ahora?'"],
        ["Não dá para saber", "There's no way to know", "No se puede saber"],
        ["Pergunto para o técnico", "Ask the coach", "Le pregunto al entrenador"],
      ],
      why: ["Só de perceber a emoção você já volta para o comando. Dar nome ao que sente acalma.", "Just noticing the emotion puts you back in charge. Naming what you feel calms you down.", "Solo con notar la emoción ya vuelves al mando. Nombrar lo que sientes calma."],
    },
  ],

  menteNuvens: [
    {
      q: ["Um pensamento chato aparece: 'eu sou ruim'. O que fazer?", "An annoying thought shows up: 'I'm bad'. What do you do?", "Aparece un pensamiento feo: 'soy malo'. ¿Qué haces?"],
      opts: [
        ["Olho para ele como uma nuvem passando, sem me agarrar", "Watch it like a passing cloud, without holding on", "Lo miro como una nube que pasa, sin aferrarme"],
        ["Acredito e fico repetindo", "Believe it and keep repeating it", "Me lo creo y lo repito"],
        ["Brigo com o pensamento até ele sumir", "Fight the thought until it goes away", "Peleo con el pensamiento hasta que se vaya"],
      ],
      why: ["Você não é seus pensamentos. Você é o céu; eles são nuvens que passam.", "You are not your thoughts. You are the sky; they are clouds passing by.", "No eres tus pensamientos. Tú eres el cielo; ellos son nubes que pasan."],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "pulinho"],
        text: ["O Capitão observa pela janela", "The Captain watches through the window", "El Capitán mira por la ventana"],
        steps: [
          { d: 3.2, say: ["nublada", ["Olha lá... 'eu sou ruim'.", "Look... 'I'm bad'.", "Mira... 'soy malo'."]], cloud: ["eu sou ruim", "I'm bad", "soy malo"] },
          { d: 3.2, say: ["capitao", ["É só uma nuvem. Deixa passar.", "Just a cloud. Let it pass.", "Es solo una nube. Déjala pasar."]], cloud: ["eu sou ruim", "I'm bad", "soy malo"], text: ["Ver passar, sem se agarrar", "Watch it pass, don't hold on", "Verla pasar, sin aferrarse"] },
          { d: 2, say: ["pulinho", ["Céu limpo! Bora jogar!", "Clear sky! Let's play!", "¡Cielo limpio! ¡A jugar!"]], text: ["Você é o céu, não a nuvem", "You're the sky, not the cloud", "Eres el cielo, no la nube"] },
        ],
      },
    },
    {
      q: ["Quem é você: o pensamento ou quem percebe o pensamento?", "Who are you: the thought, or the one who notices the thought?", "¿Quién eres: el pensamiento o quien nota el pensamiento?"],
      opts: [
        ["Quem percebe: eu vejo o pensamento passar", "The one who notices: I see the thought go by", "Quien lo nota: veo pasar el pensamiento"],
        ["O pensamento", "The thought", "El pensamiento"],
        ["Nenhum dos dois", "Neither", "Ninguno de los dos"],
      ],
      why: ["Se você consegue ver o pensamento, você não é ele. Você é quem observa: o Capitão.", "If you can see the thought, you're not it. You're the watcher: the Captain.", "Si puedes ver el pensamiento, no eres él. Eres quien observa: el Capitán."],
    },
    {
      q: ["Durante o jogo, a lembrança de um erro volta à sua cabeça. O que fazer?", "During the game, the memory of a mistake comes back. What do you do?", "Durante el partido, vuelve a tu cabeza el recuerdo de un error. ¿Qué haces?"],
      opts: [
        ["Noto, solto e volto para a bola", "Notice it, let go and come back to the ball", "Lo noto, lo suelto y vuelvo al balón"],
        ["Penso mais nele para entender", "Think about it more to understand it", "Pienso más en él para entenderlo"],
        ["Fico parado lembrando", "Stand still remembering it", "Me quedo quieto recordándolo"],
      ],
      why: ["Notar e soltar é um treino. Quanto mais você treina, mais rápido volta ao jogo. Para entender o erro, tem o depois do jogo.", "Noticing and letting go is training. The more you do it, the faster you come back. Understanding the mistake can wait until after the game.", "Notar y soltar es un entrenamiento. Cuanto más lo haces, más rápido vuelves. Entender el error queda para después del partido."],
      scene: {
        anim: "cabine", cast: ["capitao", "nublada", "tremelique"],
        steps: [
          { d: 3, say: ["nublada", ["Lembra aquele passe errado?", "Remember that bad pass?", "¿Te acuerdas de ese mal pase?"]], cloud: ["o passe errado...", "that bad pass...", "el mal pase..."], text: ["Notar...", "Notice...", "Notar..."] },
          { d: 3, say: ["capitao", ["Lembro. Tchau, nuvem! Olha a bola!", "I do. Bye, cloud! Watch the ball!", "Sí. ¡Chau, nube! ¡Mira el balón!"]], text: ["...soltar e voltar para a bola", "...let go, back to the ball", "...soltar y volver al balón"] },
        ],
      },
    },
    {
      q: ["Para treinar a observar os pensamentos, o que ajuda?", "What helps you practise watching your thoughts?", "¿Qué ayuda a entrenar a observar los pensamientos?"],
      opts: [
        ["Ficar 1 minuto sentado, de olhos fechados, só vendo os pensamentos passarem", "Sit for 1 minute, eyes closed, just watching thoughts go by", "Sentarme 1 minuto, con los ojos cerrados, solo viendo pasar los pensamientos"],
        ["Tentar não pensar em nada, à força", "Force yourself to think about nothing", "Intentar no pensar en nada, a la fuerza"],
        ["Jogar videogame", "Play video games", "Jugar videojuegos"],
      ],
      why: ["Você não precisa parar os pensamentos. Só observar, como quem olha o céu deitado na grama.", "You don't need to stop your thoughts. Just watch, like lying on the grass looking at the sky.", "No necesitas parar los pensamientos. Solo observar, como quien mira el cielo tumbado en el pasto."],
    },
    {
      q: ["Um sábio da Índia, Ramana Maharshi, ensinava a perguntar: 'quem está pensando isso?'. Para que serve?", "A wise man from India, Ramana Maharshi, taught people to ask: 'who is thinking this?'. What is it for?", "Un sabio de la India, Ramana Maharshi, enseñaba a preguntar: '¿quién está pensando esto?'. ¿Para qué sirve?"],
      opts: [
        ["Para eu lembrar que sou quem observa, e me acalmar", "To remember I'm the one watching, and calm down", "Para recordar que soy quien observa, y calmarme"],
        ["Para achar um culpado", "To find someone to blame", "Para encontrar un culpable"],
        ["Para pensar ainda mais", "To think even more", "Para pensar todavía más"],
      ],
      why: ["Essa pergunta tira você do meio da confusão e te leva para o silêncio de quem só observa.", "That question pulls you out of the noise and into the quiet of just watching.", "Esa pregunta te saca del lío y te lleva al silencio de quien solo observa."],
    },
    {
      q: ["Um pensamento bom aparece: 'vou fazer um golaço!'. Ele também é uma nuvem?", "A good thought shows up: 'I'm going to score a screamer!'. Is it a cloud too?", "Aparece un buen pensamiento: '¡voy a hacer un golazo!'. ¿También es una nube?"],
      opts: [
        ["É: aproveito, mas volto para o lance que está acontecendo", "Yes: I enjoy it, but come back to the play that's happening", "Sí: lo disfruto, pero vuelvo a la jugada que está pasando"],
        ["Não, esse eu seguro para sempre", "No, I hold on to that one forever", "No, a ese lo agarro para siempre"],
        ["Paro e fico sonhando com o gol", "Stop and daydream about the goal", "Me quedo soñando con el gol"],
      ],
      why: ["Até pensamento bom passa. O gol acontece no agora, não no sonho.", "Even good thoughts pass. Goals happen now, not in a daydream.", "Hasta los buenos pensamientos pasan. El gol ocurre ahora, no en el sueño."],
    },
    {
      q: ["Todo pensamento é verdade?", "Is every thought true?", "¿Todo pensamiento es verdad?"],
      opts: [
        ["Não: pensamento é só uma ideia, e eu posso conferir se é real", "No: a thought is just an idea, and I can check if it's real", "No: un pensamiento es solo una idea, y puedo comprobar si es real"],
        ["Sim, tudo que eu penso é verdade", "Yes, everything I think is true", "Sí, todo lo que pienso es verdad"],
        ["Só os ruins são verdade", "Only the bad ones are true", "Solo los malos son verdad"],
      ],
      why: ["Pensar 'vou errar' não faz você errar. É só uma nuvem; quem decide é o seu treino.", "Thinking 'I'll miss' doesn't make you miss. It's just a cloud; your training decides.", "Pensar 'voy a fallar' no te hace fallar. Es solo una nube; decide tu entrenamiento."],
    },
    {
      q: ["Sua cabeça está cheia de pensamentos antes do jogo. O que fazer primeiro?", "Your head is full of thoughts before the game. What do you do first?", "Tu cabeza está llena de pensamientos antes del partido. ¿Qué haces primero?"],
      opts: [
        ["Respirar devagar e observar, sem brigar com eles", "Breathe slowly and watch, without fighting them", "Respirar despacio y observar, sin pelear con ellos"],
        ["Ficar nervoso por estar nervoso", "Get nervous about being nervous", "Ponerme nervioso por estar nervioso"],
        ["Fingir que não sinto nada", "Pretend I feel nothing", "Fingir que no siento nada"],
      ],
      why: ["Quando você respira e observa, a água turva assenta e fica clara de novo.", "When you breathe and watch, muddy water settles and turns clear again.", "Cuando respiras y observas, el agua turbia se asienta y vuelve a aclararse."],
    },
  ],

  menteAgora: [
    {
      q: ["Em que momento acontece o jogo?", "When does the game happen?", "¿En qué momento ocurre el partido?"],
      opts: [
        ["Agora, neste lance", "Now, in this play", "Ahora, en esta jugada"],
        ["No lance que eu errei", "In the play I messed up", "En la jugada que fallé"],
        ["No resultado final", "In the final score", "En el resultado final"],
      ],
      why: ["O passado já foi e o futuro ainda não chegou. Só dá para jogar agora.", "The past is gone and the future isn't here yet. You can only play now.", "El pasado ya fue y el futuro todavía no llegó. Solo se puede jugar ahora."],
    },
    {
      q: ["Como voltar para o agora bem rápido?", "How do you get back to the present quickly?", "¿Cómo volver al ahora rápido?"],
      opts: [
        ["Respiro e sinto os pés no chão", "Breathe and feel my feet on the ground", "Respiro y siento los pies en el suelo"],
        ["Lembro do erro de antes", "Remember the earlier mistake", "Recuerdo el error de antes"],
        ["Olho o placar toda hora", "Keep checking the score", "Miro el marcador todo el rato"],
      ],
      why: ["Respirar e sentir o corpo é o botão de voltar para o agora. Funciona em 3 segundos.", "Breathing and feeling your body is the 'back to now' button. It works in 3 seconds.", "Respirar y sentir el cuerpo es el botón de volver al ahora. Funciona en 3 segundos."],
      scene: {
        anim: "cabine", cast: ["capitao", "zumzum", "nublada"],
        steps: [
          { d: 2.6, boss: "zumzum", mood: { zumzum: "big" }, say: ["zumzum", ["Falta pouco! E o placar? E se...?", "Not long left! The score? What if...?", "¡Falta poco! ¿Y el marcador? ¿Y si...?"]], cloud: ["e o placar?", "the score?", "¿y el marcador?"], text: ["A cabeça fugiu do agora", "Your head ran away from now", "La cabeza se escapó del ahora"] },
          { d: 2.8, boss: "capitao", mood: { zumzum: "small" }, say: ["capitao", ["Respira... Pés no chão. Olha a bola.", "Breathe... Feet on the ground. See the ball.", "Respira... Pies en el suelo. Mira el balón."]], text: ["Respirar: o botão do agora", "Breathing: the 'now' button", "Respirar: el botón del ahora"] },
        ],
      },
    },
    {
      q: ["No treino, você está pensando no videogame. O que acontece?", "At practice, you're thinking about video games. What happens?", "En el entrenamiento, piensas en los videojuegos. ¿Qué pasa?"],
      opts: [
        ["Treino pela metade: o corpo está aqui e a cabeça não", "Half a practice: my body is here, my head isn't", "Entreno a medias: el cuerpo está aquí y la cabeza no"],
        ["Nada, dá no mesmo", "Nothing, it's the same", "Nada, da igual"],
        ["Aprendo mais rápido", "I learn faster", "Aprendo más rápido"],
      ],
      why: ["Treinar com a cabeça presente vale o dobro. Corpo e cabeça no mesmo lugar.", "Training with your head present counts double. Body and mind in the same place.", "Entrenar con la cabeza presente vale el doble. Cuerpo y cabeza en el mismo lugar."],
    },
    {
      q: ["O que é estar presente na hora de receber a bola?", "What does being present mean when you receive the ball?", "¿Qué es estar presente al recibir el balón?"],
      opts: [
        ["Olhar, sentir a bola e decidir, com a cabeça só nisso", "Look, feel the ball and decide, with my mind only on that", "Mirar, sentir el balón y decidir, con la cabeza solo en eso"],
        ["Pensar no que a torcida está achando", "Think about what the crowd thinks", "Pensar en lo que piensa la hinchada"],
        ["Pensar no lance que já passou", "Think about the play that already happened", "Pensar en la jugada que ya pasó"],
      ],
      why: ["Atenção inteira no lance deixa o domínio limpo e a decisão rápida.", "Full attention on the play makes your first touch clean and your decision quick.", "Atención completa en la jugada hace el control limpio y la decisión rápida."],
    },
    {
      q: ["Como se faz a respiração quadrada (4-4-4-4)?", "How do you do box breathing (4-4-4-4)?", "¿Cómo se hace la respiración cuadrada (4-4-4-4)?"],
      opts: [
        ["Puxo o ar contando 4, seguro 4, solto 4, espero 4", "Breathe in for 4, hold 4, breathe out 4, wait 4", "Inspiro contando 4, aguanto 4, suelto 4, espero 4"],
        ["Prendo o ar até ficar vermelho", "Hold my breath until I go red", "Aguanto el aire hasta ponerme rojo"],
        ["Respiro bem rápido pela boca", "Breathe very fast through my mouth", "Respiro muy rápido por la boca"],
      ],
      why: ["Respirar devagar avisa o corpo que está tudo bem. Use antes de pênalti, prova ou jogo.", "Slow breathing tells your body everything is OK. Use it before a penalty, a test or a game.", "Respirar despacio le dice al cuerpo que todo está bien. Úsalo antes de un penal, un examen o un partido."],
    },
    {
      q: ["Meditar é...", "Meditating is...", "Meditar es..."],
      opts: [
        ["Treinar a atenção: ficar quieto, respirando e observando", "Training attention: sitting still, breathing and watching", "Entrenar la atención: quedarse quieto, respirando y observando"],
        ["Coisa só para monge", "Only for monks", "Cosa solo de monjes"],
        ["Dormir sentado", "Sleeping sitting up", "Dormir sentado"],
      ],
      why: ["Muitos atletas meditam. É treino para a cabeça, como a embaixadinha é treino para o pé.", "Many athletes meditate. It's training for your mind, like keep-ups are for your feet.", "Muchos atletas meditan. Es entrenamiento para la cabeza, como los toques para el pie."],
    },
    {
      q: ["Faltam 10 minutos e você pensa: 'e se a gente perder?'. Onde está a sua cabeça?", "Ten minutes left and you think: 'what if we lose?'. Where is your mind?", "Faltan 10 minutos y piensas: '¿y si perdemos?'. ¿Dónde está tu cabeza?"],
      opts: [
        ["No futuro: volto para o próximo lance", "In the future: I come back to the next play", "En el futuro: vuelvo a la próxima jugada"],
        ["No lugar certo", "In the right place", "En el lugar correcto"],
        ["No passado", "In the past", "En el pasado"],
      ],
      why: ["O resultado é feito de lances. Ganhe o próximo lance, depois o próximo.", "The result is made of plays. Win the next play, then the next one.", "El resultado está hecho de jugadas. Gana la próxima jugada, después la siguiente."],
    },
    {
      q: ["Seu time acabou de levar um gol. Qual é o lance mais importante agora?", "Your team just conceded. Which play matters most now?", "Tu equipo acaba de recibir un gol. ¿Cuál es la jugada más importante ahora?"],
      opts: [
        ["O próximo", "The next one", "La próxima"],
        ["O gol que levamos", "The goal we conceded", "El gol que recibimos"],
        ["O último do jogo", "The last one of the game", "La última del partido"],
      ],
      why: ["Não dá para mudar o gol que já foi. O próximo lance está nas suas mãos (e nos seus pés).", "You can't change the goal that's gone. The next play is in your hands (and feet).", "No puedes cambiar el gol que ya fue. La próxima jugada está en tus manos (y tus pies)."],
    },
  ],

  menteEstoico: [
    {
      q: ["O que você controla num jogo?", "What do you control in a game?", "¿Qué controlas en un partido?"],
      opts: [
        ["Meu esforço, minha atitude e minhas escolhas", "My effort, my attitude and my choices", "Mi esfuerzo, mi actitud y mis decisiones"],
        ["O juiz", "The referee", "El árbitro"],
        ["O placar e a torcida", "The score and the crowd", "El marcador y la hinchada"],
      ],
      why: ["Os estoicos, sábios da Grécia e de Roma, ensinavam: cuide do que depende de você e solte o resto.", "The Stoics, wise men of Greece and Rome, taught: look after what depends on you and let go of the rest.", "Los estoicos, sabios de Grecia y Roma, enseñaban: cuida de lo que depende de ti y suelta el resto."],
    },
    {
      q: ["O juiz marcou uma falta errada contra você. O que faz?", "The referee gave a wrong foul against you. What do you do?", "El árbitro cobró una falta equivocada contra ti. ¿Qué haces?"],
      opts: [
        ["Aceito, respiro e foco no próximo lance", "Accept it, breathe and focus on the next play", "Lo acepto, respiro y me enfoco en la próxima jugada"],
        ["Reclamo até levar cartão", "Complain until I get a card", "Protesto hasta que me sacan tarjeta"],
        ["Paro de jogar", "Stop playing", "Dejo de jugar"],
      ],
      why: ["A decisão do juiz não depende de você. A sua reação, sim.", "The referee's call doesn't depend on you. Your reaction does.", "La decisión del árbitro no depende de ti. Tu reacción, sí."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "zumzum"],
        text: ["Apito: falta contra você!", "Whistle: foul against you!", "¡Silbato: falta contra ti!"],
        steps: [
          { d: 2.4, boss: "faisca", mood: { faisca: "big" }, say: ["faisca", ["Roubado! Vou reclamar até ele mudar!", "Robbed! I'll argue till he changes it!", "¡Robo! ¡Protesto hasta que cambie!"]] },
          { d: 2.8, boss: "capitao", mood: { faisca: "" }, say: ["capitao", ["O apito não é meu. A minha reação é.", "The whistle isn't mine. My reaction is.", "El silbato no es mío. Mi reacción sí."]], text: ["Cuide só do que depende de você", "Mind only what depends on you", "Cuida solo de lo que depende de ti"] },
        ],
      },
    },
    {
      q: ["Um adversário te xinga para te tirar do sério. O que fazer?", "An opponent insults you to wind you up. What do you do?", "Un rival te insulta para sacarte de quicio. ¿Qué haces?"],
      opts: [
        ["Não mordo a isca: sigo jogando, é isso que ele não quer", "Don't take the bait: keep playing, that's what he doesn't want", "No muerdo el anzuelo: sigo jugando, es lo que él no quiere"],
        ["Xingo de volta", "Insult him back", "Lo insulto también"],
        ["Empurro ele", "Push him", "Lo empujo"],
      ],
      why: ["Quem te tira do sério ganha o controle de você. O escudo do estoico é não reagir.", "Whoever winds you up takes control of you. The stoic shield is not reacting.", "Quien te saca de quicio toma el control de ti. El escudo estoico es no reaccionar."],
      scene: {
        anim: "cabine", cast: ["capitao", "faisca", "pavao"],
        steps: [
          { d: 2.4, mood: { faisca: "big" }, say: ["faisca", ["Ele me xingou! Deixa eu responder!", "He insulted me! Let me answer!", "¡Me insultó! ¡Déjame responder!"]], cloud: ["ele me xingou!", "he insulted me!", "¡me insultó!"], text: ["A isca do adversário", "The opponent's bait", "El anzuelo del rival"] },
          { d: 2.4, say: ["pavao", ["Ninguém fala assim comigo!", "Nobody talks to me like that!", "¡Nadie me habla así!"]], mood: { pavao: "big" } },
          { d: 2.8, mood: { faisca: "small", pavao: "small" }, say: ["capitao", ["Ele quer que eu perca a cabeça. Não vou.", "He wants me to lose my head. I won't.", "Quiere que pierda la cabeza. No lo haré."]], text: ["Escudo erguido: não morda a isca", "Shield up: don't take the bait", "Escudo arriba: no muerdas el anzuelo"] },
        ],
      },
    },
    {
      q: ["Choveu e o campo está ruim. O que pensar?", "It rained and the pitch is bad. What do you think?", "Llovió y la cancha está mal. ¿Qué piensas?"],
      opts: [
        ["É igual para os dois times; vou me adaptar", "It's the same for both teams; I'll adapt", "Es igual para los dos equipos; me adapto"],
        ["Assim não dá para jogar", "You can't play like this", "Así no se puede jugar"],
        ["Reclamo o jogo inteiro", "Complain the whole game", "Protesto todo el partido"],
      ],
      why: ["Não dá para escolher o tempo. Dá para escolher a atitude: passe mais firme, domínio mais atento.", "You can't choose the weather. You can choose your attitude: firmer passes, sharper first touch.", "No eliges el clima. Eliges la actitud: pase más firme, control más atento."],
    },
    {
      q: ["O técnico te deixou no banco. Como um estoico reage?", "The coach left you on the bench. How does a stoic react?", "El entrenador te dejó en el banco. ¿Cómo reacciona un estoico?"],
      opts: [
        ["Apoio o time e fico pronto para entrar", "Support the team and stay ready to come on", "Apoyo al equipo y me preparo para entrar"],
        ["Fico emburrado", "Sulk", "Me enojo y pongo mala cara"],
        ["Falo mal do técnico", "Badmouth the coach", "Hablo mal del entrenador"],
      ],
      why: ["Você não escolhe a escalação, mas escolhe como se prepara. Quando a chance vier, esteja pronto.", "You don't pick the team, but you choose how you prepare. When the chance comes, be ready.", "No eliges la alineación, pero sí cómo te preparas. Cuando llegue la chance, estate listo."],
    },
    {
      q: ["A torcida adversária está gritando contra você. O que faz?", "The opposing fans are shouting at you. What do you do?", "La hinchada rival te grita. ¿Qué haces?"],
      opts: [
        ["Foco no jogo e no que eu controlo", "Focus on the game and what I control", "Me concentro en el juego y en lo que controlo"],
        ["Respondo para a torcida", "Shout back at them", "Les contesto"],
        ["Me escondo e não peço mais a bola", "Hide and stop asking for the ball", "Me escondo y no pido más el balón"],
      ],
      why: ["Você não controla a torcida, mas controla o seu jogo. Grito de fora é barulho; o jogo está aqui dentro.", "You can't control the crowd, but you control your game. Shouting from outside is noise; the game is in here.", "No controlas a la hinchada, pero sí tu juego. El grito de afuera es ruido; el partido está aquí dentro."],
    },
    {
      q: ["Seu time está perdendo de 2 a 0 no intervalo. O que pensa?", "Your team is losing 2-0 at half-time. What do you think?", "Tu equipo pierde 2 a 0 en el descanso. ¿Qué piensas?"],
      opts: [
        ["O placar já foi; agora faço a minha parte, lance a lance", "That score is done; now I do my part, play by play", "El marcador ya fue; ahora hago mi parte, jugada a jugada"],
        ["Já perdemos", "We've already lost", "Ya perdimos"],
        ["A culpa é do goleiro", "It's the goalkeeper's fault", "La culpa es del arquero"],
      ],
      why: ["Os dois gols não dependem mais de você. O segundo tempo, sim. Enquanto o jogo não acaba, dá para virar.", "Those two goals no longer depend on you. The second half does. Until the final whistle, you can turn it around.", "Esos dos goles ya no dependen de ti. El segundo tiempo, sí. Mientras no termina, se puede dar vuelta."],
    },
    {
      q: ["Antes de um jogo, um estoico imagina...", "Before a game, a stoic imagines...", "Antes de un partido, un estoico imagina..."],
      opts: [
        ["O que pode dar errado e como vai reagir com calma", "What could go wrong and how he'll react calmly", "Lo que puede salir mal y cómo reaccionará con calma"],
        ["Que tudo vai ser perfeito", "That everything will be perfect", "Que todo va a ser perfecto"],
        ["Que vai perder de qualquer jeito", "That he'll lose anyway", "Que va a perder igual"],
      ],
      why: ["Quem imagina a dificuldade antes não se assusta quando ela chega: já sabe o que fazer.", "If you picture the difficulty beforehand, it doesn't scare you when it comes: you already know what to do.", "Quien imagina la dificultad antes no se asusta cuando llega: ya sabe qué hacer."],
    },
  ],

  menteSofa: [
    {
      q: ["O Sr. Sofá diz: 'treina amanhã'. O que responder?", "Mr. Couch says: 'train tomorrow'. What do you answer?", "El Sr. Sofá dice: 'entrena mañana'. ¿Qué respondes?"],
      opts: [
        ["'Só 5 minutos agora' e começo", "'Just 5 minutes now' and start", "'Solo 5 minutos ahora' y empiezo"],
        ["'Tá bom, amanhã'", "'OK, tomorrow'", "'Está bien, mañana'"],
        ["'Treino só quando der vontade'", "'I'll train when I feel like it'", "'Entreno cuando tenga ganas'"],
      ],
      why: ["Começar é a parte mais difícil. Depois dos primeiros 5 minutos, o Sr. Sofá cochila.", "Starting is the hardest part. After the first 5 minutes, Mr. Couch dozes off.", "Empezar es lo más difícil. Después de los primeros 5 minutos, el Sr. Sofá se duerme."],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "pulinho"],
        steps: [
          { d: 2.6, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Hoje não... treina amanhã... zzz", "Not today... train tomorrow... zzz", "Hoy no... entrena mañana... zzz"]], text: ["O Sr. Sofá pegou o comando", "Mr. Couch took the controls", "El Sr. Sofá tomó el mando"] },
          { d: 2.6, say: ["capitao", ["Só 5 minutinhos. Vamos começar!", "Just 5 minutes. Let's start!", "Solo 5 minutitos. ¡Empecemos!"]] },
          { d: 2.4, boss: "capitao", mood: { sofa: "small" }, say: ["pulinho", ["Olha só, já estamos treinando!", "Look, we're already training!", "¡Mira, ya estamos entrenando!"]], text: ["Começar é a parte mais difícil", "Starting is the hardest part", "Empezar es lo más difícil"] },
        ],
      },
    },
    {
      q: ["O que é disciplina?", "What is discipline?", "¿Qué es la disciplina?"],
      opts: [
        ["Fazer o que precisa, mesmo sem vontade", "Doing what's needed, even when you don't feel like it", "Hacer lo que hace falta, aunque no tengas ganas"],
        ["Fazer só o que é legal", "Only doing what's fun", "Hacer solo lo divertido"],
        ["Treinar só quando o técnico está olhando", "Training only when the coach is watching", "Entrenar solo cuando el entrenador mira"],
      ],
      why: ["Vontade vai e vem. Disciplina é o que te leva ao treino quando a vontade não aparece.", "Motivation comes and goes. Discipline gets you to practice when motivation doesn't show up.", "Las ganas van y vienen. La disciplina te lleva al entrenamiento cuando las ganas no aparecen."],
    },
    {
      q: ["Você tem lição de casa e quer jogar bola. O que faz?", "You have homework and want to play football. What do you do?", "Tienes tarea y quieres jugar a la pelota. ¿Qué haces?"],
      opts: [
        ["Faço a lição primeiro e depois jogo tranquilo", "Do the homework first, then play with a clear head", "Hago la tarea primero y después juego tranquilo"],
        ["Jogo e deixo a lição para depois", "Play and leave the homework for later", "Juego y dejo la tarea para después"],
        ["Não faço nenhum dos dois", "Do neither", "No hago ninguna de las dos"],
      ],
      why: ["Primeiro o dever, depois o prazer: assim você joga sem peso na cabeça.", "Duty first, then fun: that way you play with nothing weighing on your mind.", "Primero el deber, después el placer: así juegas sin peso en la cabeza."],
    },
    {
      q: ["Por que treinar um pouquinho todo dia ajuda mais que muito de vez em quando?", "Why does a little practice every day help more than a lot now and then?", "¿Por qué entrenar un poquito cada día ayuda más que mucho de vez en cuando?"],
      opts: [
        ["Porque vira hábito, e hábito vence a preguiça", "It becomes a habit, and habits beat laziness", "Porque se vuelve hábito, y el hábito vence a la pereza"],
        ["Não ajuda mais", "It doesn't help more", "No ayuda más"],
        ["Só serve para ganhar pontos", "It's only for points", "Solo sirve para ganar puntos"],
      ],
      why: ["Quando vira hábito, você nem precisa discutir com o Sr. Sofá: o corpo já vai sozinho.", "Once it's a habit, you don't even argue with Mr. Couch: your body just goes.", "Cuando es hábito, ni discutes con el Sr. Sofá: el cuerpo va solo."],
    },
    {
      q: ["Você ia treinar, mas abriu um vídeo no celular... e depois outro. O que fazer?", "You were going to train, but opened a video on your phone... then another. What do you do?", "Ibas a entrenar, pero abriste un video en el celular... y otro más. ¿Qué haces?"],
      opts: [
        ["Guardo o celular e começo; vídeo fica para depois", "Put the phone away and start; videos can wait", "Guardo el celular y empiezo; los videos después"],
        ["Só mais um vídeo... (de novo)", "Just one more video... (again)", "Solo un video más... (otra vez)"],
        ["Treino olhando o celular", "Train while looking at the phone", "Entreno mirando el celular"],
      ],
      why: ["Deixar para depois é trocar o que importa pelo que é fácil agora. O Sr. Sofá adora celular.", "Putting it off is swapping what matters for what's easy right now. Mr. Couch loves phones.", "Dejarlo para después es cambiar lo importante por lo fácil ahora. Al Sr. Sofá le encanta el celular."],
      scene: {
        anim: "cabine", cast: ["capitao", "sofa", "zumzum"],
        steps: [
          { d: 2.6, boss: "sofa", mood: { sofa: "big" }, say: ["sofa", ["Só mais um vídeo... e mais um...", "Just one more video... and another...", "Solo un video más... y otro..."]], cloud: ["só mais um...", "just one more...", "solo uno más..."], text: ["O Sr. Sofá adora celular", "Mr. Couch loves phones", "Al Sr. Sofá le encanta el celular"] },
          { d: 2.6, boss: "capitao", mood: { sofa: "small" }, say: ["capitao", ["Celular na gaveta. Bola no pé!", "Phone in the drawer. Ball at my feet!", "Celular al cajón. ¡Balón al pie!"]], text: ["Primeiro o que importa", "What matters comes first", "Primero lo que importa"] },
        ],
      },
    },
    {
      q: ["Está frio e você não quer sair para treinar. O que pensar?", "It's cold and you don't want to go to practice. What do you think?", "Hace frío y no quieres salir a entrenar. ¿Qué piensas?"],
      opts: [
        ["Vou mesmo assim; depois que aquecer, vou me sentir bem", "Go anyway; once I warm up, I'll feel good", "Voy igual; cuando entre en calor me voy a sentir bien"],
        ["Fico na cama", "Stay in bed", "Me quedo en la cama"],
        ["Vou, mas treino reclamando e de qualquer jeito", "Go, but train moaning and half-hearted", "Voy, pero entreno quejándome y de cualquier manera"],
      ],
      why: ["Quase ninguém se arrepende de ter treinado. Quase todo mundo se arrepende de ter faltado.", "Almost nobody regrets training. Almost everybody regrets skipping.", "Casi nadie se arrepiente de entrenar. Casi todos se arrepienten de faltar."],
    },
    {
      q: ["Quando é a melhor hora para fazer aquela tarefa chata?", "When is the best time to do that boring task?", "¿Cuándo es el mejor momento para hacer esa tarea aburrida?"],
      opts: [
        ["O quanto antes: feita cedo, ela para de pesar", "As soon as possible: done early, it stops weighing on you", "Lo antes posible: hecha temprano, deja de pesar"],
        ["O mais tarde possível", "As late as possible", "Lo más tarde posible"],
        ["Nunca", "Never", "Nunca"],
      ],
      why: ["Tarefa adiada fica zumbindo na cabeça o dia todo. Feita, ela some e libera espaço.", "A postponed task buzzes in your head all day. Once done, it's gone and frees up space.", "Una tarea postergada zumba en la cabeza todo el día. Hecha, desaparece y libera espacio."],
    },
    {
      q: ["Faltou vontade e você não treinou hoje. E agora?", "You didn't feel like it and skipped practice today. Now what?", "No tuviste ganas y no entrenaste hoy. ¿Y ahora?"],
      opts: [
        ["Sem drama: amanhã eu volto e não deixo virar dois dias", "No drama: back tomorrow, never two days in a row", "Sin drama: mañana vuelvo y no dejo que sean dos días"],
        ["Desisto de tudo", "Give up on everything", "Abandono todo"],
        ["Fico me culpando a noite toda", "Beat myself up all night", "Me culpo toda la noche"],
      ],
      why: ["Ninguém é perfeito. O importante é não deixar o Sr. Sofá ganhar dois dias seguidos.", "Nobody's perfect. The key is not letting Mr. Couch win two days in a row.", "Nadie es perfecto. Lo importante es no dejar que el Sr. Sofá gane dos días seguidos."],
    },
  ],

  menteVigia: [
    {
      q: ["Você pensa: 'eu nunca acerto o chute'. Como trocar esse pensamento?", "You think: 'I never hit a good shot'. How do you change that thought?", "Piensas: 'nunca acierto el tiro'. ¿Cómo cambias ese pensamiento?"],
      opts: [
        ["'Ainda estou aprendendo a chutar, e vou treinar'", "'I'm still learning to shoot, and I'll practise'", "'Todavía estoy aprendiendo a patear, y voy a entrenar'"],
        ["'Sou péssimo mesmo'", "'I'm just terrible'", "'Soy malísimo'"],
        ["'Chutar é chato'", "'Shooting is boring'", "'Patear es aburrido'"],
      ],
      why: ["A palavra 'ainda' transforma um muro em caminho.", "The word 'yet' turns a wall into a path.", "La palabra 'todavía' convierte un muro en un camino."],
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
      q: ["Você errou um passe. O que a sua voz de dentro deve dizer?", "You misplaced a pass. What should your inner voice say?", "Fallaste un pase. ¿Qué debe decir tu voz interior?"],
      opts: [
        ["'Vamos! A próxima você acerta!'", "'Come on! You'll get the next one!'", "'¡Vamos! ¡La próxima la aciertas!'"],
        ["'Burro! Você não sabe nada!'", "'Idiot! You're useless!'", "'¡Burro! ¡No sabes nada!'"],
        ["Nada: fico calado e bravo comigo", "Nothing: I stay silent and angry at myself", "Nada: me quedo callado y enojado conmigo"],
      ],
      why: ["Você ouve a sua própria voz o dia inteiro. Fale com você como um bom técnico falaria.", "You hear your own voice all day. Talk to yourself like a good coach would.", "Escuchas tu propia voz todo el día. Háblate como lo haría un buen entrenador."],
    },
    {
      q: ["O que é visualizar antes do jogo?", "What is visualizing before a game?", "¿Qué es visualizar antes del partido?"],
      opts: [
        ["Imaginar, com detalhes, eu fazendo as jogadas bem feitas", "Picturing myself, in detail, doing the plays well", "Imaginar, con detalles, que hago bien las jugadas"],
        ["Sonhar com a taça e não treinar", "Dreaming of the trophy and not training", "Soñar con la copa y no entrenar"],
        ["Imaginar tudo dando errado", "Picturing everything going wrong", "Imaginar que todo sale mal"],
      ],
      why: ["O cérebro treina quando imagina. Feche os olhos e veja: o domínio, o passe, o gol. Muitos craques fazem isso.", "The brain practises when it imagines. Close your eyes and see it: the touch, the pass, the goal. Many great players do this.", "El cerebro entrena cuando imagina. Cierra los ojos y míralo: el control, el pase, el gol. Muchos cracks lo hacen."],
    },
    {
      q: ["Em vez de pensar 'não posso errar o passe', o que é melhor pensar?", "Instead of thinking 'I mustn't miss this pass', what's better to think?", "En vez de pensar 'no puedo fallar el pase', ¿qué es mejor pensar?"],
      opts: [
        ["'Vou passar firme no pé do colega'", "'I'll pass it firmly to my teammate's feet'", "'Voy a pasarla firme al pie del compañero'"],
        ["'Não posso errar, não posso errar...'", "'Mustn't miss, mustn't miss...'", "'No puedo fallar, no puedo fallar...'"],
        ["'Vai dar errado'", "'It's going to go wrong'", "'Va a salir mal'"],
      ],
      why: ["O cérebro entende o que você quer, não o que você não quer. Diga a ele o que fazer.", "Your brain understands what you want, not what you don't want. Tell it what to do.", "El cerebro entiende lo que quieres, no lo que no quieres. Dile qué hacer."],
    },
    {
      q: ["Âncora é um gesto que liga a confiança. Qual é um bom exemplo?", "An anchor is a gesture that switches on confidence. What's a good example?", "Un ancla es un gesto que enciende la confianza. ¿Cuál es un buen ejemplo?"],
      opts: [
        ["Respirar fundo e fechar a mão lembrando do meu melhor lance", "Take a deep breath and make a fist, remembering my best play", "Respirar hondo y cerrar el puño recordando mi mejor jugada"],
        ["Roer a unha", "Bite my nails", "Morderme las uñas"],
        ["Olhar para o chão", "Look at the ground", "Mirar al suelo"],
      ],
      why: ["Repetindo o gesto junto com uma boa lembrança, o corpo aprende a trazer a confiança de volta.", "By repeating the gesture with a good memory, your body learns to bring confidence back.", "Repitiendo el gesto junto con un buen recuerdo, el cuerpo aprende a traer la confianza de vuelta."],
    },
    {
      q: ["Por que lembrar 3 coisas boas do seu dia antes de dormir?", "Why remember 3 good things about your day before bed?", "¿Por qué recordar 3 cosas buenas de tu día antes de dormir?"],
      opts: [
        ["Treina a mente a enxergar o que é bom, e isso dá energia", "It trains your mind to see the good, and that gives you energy", "Entrena la mente a ver lo bueno, y eso da energía"],
        ["Não serve para nada", "It's pointless", "No sirve para nada"],
        ["Para me achar melhor que os outros", "To feel better than others", "Para creerme mejor que los demás"],
      ],
      why: ["Gratidão é treino: quanto mais você procura o que é bom, mais você encontra.", "Gratitude is training: the more you look for the good, the more you find it.", "La gratitud es un entrenamiento: cuanto más buscas lo bueno, más lo encuentras."],
    },
    {
      q: ["Ter uma mente positiva quer dizer...", "Having a positive mind means...", "Tener una mente positiva significa..."],
      opts: [
        ["Ver o problema e procurar a solução, com esperança", "Seeing the problem and looking for a solution, with hope", "Ver el problema y buscar la solución, con esperanza"],
        ["Fingir que nada de ruim acontece", "Pretending nothing bad ever happens", "Fingir que nunca pasa nada malo"],
        ["Achar que vai ganhar sempre", "Thinking you'll always win", "Creer que vas a ganar siempre"],
      ],
      why: ["Positivo não é fingir. É olhar para a dificuldade e perguntar: 'o que eu posso fazer agora?'.", "Positive isn't pretending. It's looking at the difficulty and asking: 'what can I do now?'.", "Positivo no es fingir. Es mirar la dificultad y preguntar: '¿qué puedo hacer ahora?'."],
    },
    {
      q: ["Um colega errou e o time levou gol. O que você diz?", "A teammate made a mistake and the team conceded. What do you say?", "Un compañero se equivocó y el equipo recibió gol. ¿Qué le dices?"],
      opts: [
        ["'Tranquilo, vamos buscar!'", "'No worries, let's get it back!'", "'¡Tranquilo, vamos a buscarlo!'"],
        ["'Você estragou tudo!'", "'You ruined everything!'", "'¡Arruinaste todo!'"],
        ["Não falo mais com ele", "Stop talking to him", "No le hablo más"],
      ],
      why: ["As palavras também mudam a cabeça dos colegas. Apoiar deixa o time mais forte.", "Words change your teammates' minds too. Backing them makes the team stronger.", "Las palabras también cambian la cabeza de los compañeros. Apoyar hace más fuerte al equipo."],
    },
  ],

  mentePavao: [
    {
      q: ["O Pavão (ego) quer driblar todo mundo para aparecer, mas um colega está livre. O que fazer?", "Peacock (ego) wants to dribble past everyone to show off, but a teammate is free. What do you do?", "El Pavo Real (ego) quiere gambetear a todos para lucirse, pero un compañero está libre. ¿Qué haces?"],
      opts: [
        ["Passo para o colega livre: o time vem primeiro", "Pass to the free teammate: the team comes first", "Paso al compañero libre: primero el equipo"],
        ["Driblo todo mundo para mostrar que sou o melhor", "Dribble everyone to prove I'm the best", "Gambeteo a todos para mostrar que soy el mejor"],
        ["Seguro a bola até alguém me aplaudir", "Hold the ball until someone applauds", "Me quedo con el balón hasta que alguien aplauda"],
      ],
      why: ["O ego quer aplauso; a essência quer o melhor para o time. Quem joga para o time brilha mais.", "The ego wants applause; your true self wants what's best for the team. Team players shine brighter.", "El ego quiere aplausos; la esencia quiere lo mejor para el equipo. Quien juega para el equipo brilla más."],
      scene: {
        anim: "cabine", cast: ["capitao", "pavao", "pulinho"],
        steps: [
          { d: 2.6, boss: "pavao", mood: { pavao: "big" }, say: ["pavao", ["Olhem para mim! Vou driblar todo mundo!", "Look at me! I'll dribble past everyone!", "¡Mírenme! ¡Voy a gambetear a todos!"]], text: ["O Pavão quer aparecer", "Peacock wants to show off", "El Pavo Real quiere lucirse"] },
          { d: 2.6, boss: "capitao", mood: { pavao: "small" }, say: ["capitao", ["O colega está livre. Passa a bola!", "Our teammate is free. Pass it!", "El compañero está libre. ¡Pásala!"]], text: ["A essência joga para o time", "Your true self plays for the team", "La esencia juega para el equipo"] },
          { d: 2, say: ["pulinho", ["Gol do time!", "Team goal!", "¡Gol del equipo!"]] },
        ],
      },
    },
    {
      q: ["Você fez 3 gols no jogo. Como agir?", "You scored 3 goals in the game. How do you act?", "Hiciste 3 goles en el partido. ¿Cómo actúas?"],
      opts: [
        ["Agradeço aos colegas e continuo humilde", "Thank my teammates and stay humble", "Agradezco a los compañeros y sigo humilde"],
        ["Digo que sou o melhor do time", "Say I'm the best on the team", "Digo que soy el mejor del equipo"],
        ["Paro de passar a bola", "Stop passing the ball", "Dejo de pasar el balón"],
      ],
      why: ["Nenhum gol nasce sozinho: alguém roubou a bola, alguém passou. Humildade mantém você aprendendo.", "No goal is scored alone: someone won the ball, someone passed. Humility keeps you learning.", "Ningún gol nace solo: alguien recuperó, alguien pasó. La humildad te mantiene aprendiendo."],
    },
    {
      q: ["O que é a sua essência?", "What is your true self?", "¿Qué es tu esencia?"],
      opts: [
        ["Quem você é por dentro: seu jeito, seu esforço, seu coração, ganhando ou perdendo", "Who you are inside: your way, your effort, your heart, win or lose", "Quién eres por dentro: tu forma de ser, tu esfuerzo, tu corazón, ganes o pierdas"],
        ["O número de gols que você faz", "How many goals you score", "La cantidad de goles que haces"],
        ["As curtidas que você recebe", "The likes you get", "Los 'me gusta' que recibes"],
      ],
      why: ["Seu valor não sobe com o gol nem cai com o erro. Você é muito mais que um placar.", "Your worth doesn't go up with a goal or down with a mistake. You're much more than a score.", "Tu valor no sube con un gol ni baja con un error. Eres mucho más que un marcador."],
    },
    {
      q: ["O técnico corrigiu você na frente de todos e o Pavão ficou ofendido. O que fazer?", "The coach corrected you in front of everyone and Peacock got offended. What do you do?", "El entrenador te corrigió delante de todos y el Pavo Real se ofendió. ¿Qué haces?"],
      opts: [
        ["Escuto e aprendo: a correção é para eu melhorar", "Listen and learn: the correction is to help me improve", "Escucho y aprendo: la corrección es para que mejore"],
        ["Fico bravo e não olho para ele", "Get angry and don't look at him", "Me enojo y no lo miro"],
        ["Faço o contrário só para provocar", "Do the opposite on purpose", "Hago lo contrario para provocar"],
      ],
      why: ["O ego ouve crítica como ataque. A essência ouve como presente: é alguém querendo te ver melhor.", "The ego hears criticism as an attack. Your true self hears it as a gift: someone wants you to get better.", "El ego oye la crítica como ataque. La esencia la oye como regalo: alguien quiere verte mejor."],
      scene: {
        anim: "cabine", cast: ["capitao", "pavao", "faisca"],
        text: ["O técnico chamou sua atenção", "The coach called you out", "El entrenador te llamó la atención"],
        steps: [
          { d: 2.6, boss: "pavao", mood: { pavao: "big" }, say: ["pavao", ["Na frente de todo mundo?! Que vergonha!", "In front of everyone?! How embarrassing!", "¡¿Delante de todos?! ¡Qué vergüenza!"]] },
          { d: 2.8, boss: "capitao", mood: { pavao: "small" }, say: ["capitao", ["Ele quer me ver melhor. Vou escutar.", "He wants me to get better. I'll listen.", "Quiere verme mejor. Voy a escuchar."]], text: ["Correção é presente, não ataque", "A correction is a gift, not an attack", "La corrección es un regalo, no un ataque"] },
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
      why: ["Fair play: respeitar o adversário também é ser campeão. Primeiro a pessoa, depois o jogo.", "Fair play: respecting opponents is also being a champion. The person first, then the game.", "Juego limpio: respetar al rival también es ser campeón. Primero la persona, después el partido."],
    },
    {
      q: ["Chegou um colega novo que joga melhor que você na sua posição. O que fazer?", "A new teammate who plays better than you in your position has arrived. What do you do?", "Llegó un compañero nuevo que juega mejor que tú en tu posición. ¿Qué haces?"],
      opts: [
        ["Aprendo com ele e treino mais: a gente cresce junto", "Learn from him and train harder: we grow together", "Aprendo de él y entreno más: crecemos juntos"],
        ["Torço para ele errar", "Hope he messes up", "Deseo que se equivoque"],
        ["Não passo a bola para ele", "Don't pass to him", "No le paso el balón"],
      ],
      why: ["Inveja é o Pavão com medo. Quem treina ao lado dos melhores fica melhor.", "Envy is Peacock being scared. Training next to the best makes you better.", "La envidia es el Pavo Real con miedo. Quien entrena junto a los mejores mejora."],
    },
    {
      q: ["Perder um jogo diminui quem você é?", "Does losing a game make you less of a person?", "¿Perder un partido te hace menos?"],
      opts: [
        ["Não: perdi o jogo, não o meu valor", "No: I lost the game, not my worth", "No: perdí el partido, no mi valor"],
        ["Sim, eu sou um perdedor", "Yes, I'm a loser", "Sí, soy un perdedor"],
        ["Só se alguém viu", "Only if someone saw", "Solo si alguien lo vio"],
      ],
      why: ["Resultado é o que aconteceu; não é quem você é. Amanhã tem treino e você continua inteiro.", "A result is what happened; it isn't who you are. Tomorrow there's practice and you're still whole.", "El resultado es lo que pasó; no es quién eres. Mañana hay entrenamiento y sigues entero."],
    },
    {
      q: ["Pedir desculpa a um colega depois de errar com ele é...", "Apologizing to a teammate after you've wronged him is...", "Pedir perdón a un compañero después de equivocarte con él es..."],
      opts: [
        ["Coragem e respeito", "Courage and respect", "Valentía y respeto"],
        ["Fraqueza", "Weakness", "Debilidad"],
        ["Desnecessário", "Unnecessary", "Innecesario"],
      ],
      why: ["O Pavão odeia pedir desculpa. Quem pede mostra que é forte por dentro.", "Peacock hates saying sorry. Those who do show they're strong inside.", "El Pavo Real odia pedir perdón. Quien lo pide muestra que es fuerte por dentro."],
    },
  ],

  menteMelhor: [
    {
      q: ["O que você realmente controla: o resultado ou o seu esforço?", "What do you really control: the result or your effort?", "¿Qué controlas de verdad: el resultado o tu esfuerzo?"],
      opts: [
        ["O meu esforço; o resultado é consequência", "My effort; the result follows from it", "Mi esfuerzo; el resultado es consecuencia"],
        ["O resultado", "The result", "El resultado"],
        ["Nenhum dos dois", "Neither", "Ninguno de los dos"],
      ],
      why: ["Faça o seu melhor e solte o resultado. Ele depende de muita coisa; o seu melhor depende só de você.", "Do your best and let go of the result. It depends on many things; your best depends only on you.", "Haz lo mejor que puedas y suelta el resultado. Depende de muchas cosas; tu mejor esfuerzo depende solo de ti."],
    },
    {
      q: ["Você deu tudo e o seu time perdeu. Foi um fracasso?", "You gave everything and your team lost. Was it a failure?", "Lo diste todo y tu equipo perdió. ¿Fue un fracaso?"],
      opts: [
        ["Não: dei meu melhor e vou aprender com o jogo", "No: I gave my best and I'll learn from the game", "No: di lo mejor de mí y voy a aprender del partido"],
        ["Sim, só vale se ganhar", "Yes, only winning counts", "Sí, solo vale ganar"],
        ["Sim, nem devia ter tentado", "Yes, I shouldn't even have tried", "Sí, ni debería haberlo intentado"],
      ],
      why: ["Todo campeão já perdeu muitas vezes. Quem dá o melhor e aprende está sempre ganhando por dentro.", "Every champion has lost many times. Whoever gives their best and learns is always winning inside.", "Todo campeón perdió muchas veces. Quien da lo mejor y aprende siempre gana por dentro."],
    },
    {
      q: ["Seu time ganhou fácil, mas você jogou de qualquer jeito. Foi um bom jogo para você?", "Your team won easily, but you played half-heartedly. Was it a good game for you?", "Tu equipo ganó fácil, pero jugaste de cualquier manera. ¿Fue un buen partido para ti?"],
      opts: [
        ["Ganhamos, mas eu podia mais: meu padrão é o meu esforço", "We won, but I could do more: my standard is my effort", "Ganamos, pero podía más: mi medida es mi esfuerzo"],
        ["Sim, perfeito: ganhou, tá bom", "Yes, perfect: a win is a win", "Sí, perfecto: ganamos y listo"],
        ["Não importa", "It doesn't matter", "No importa"],
      ],
      why: ["Placar não mede tudo. O craque se compara com o melhor que ele mesmo pode fazer.", "The score doesn't measure everything. Great players compare themselves with their own best.", "El marcador no lo mide todo. El crack se compara con lo mejor que él mismo puede hacer."],
    },
    {
      q: ["Você vai bater um pênalti decisivo e está nervoso. Onde colocar a atenção?", "You're about to take a decisive penalty and you're nervous. Where do you put your attention?", "Vas a patear un penal decisivo y estás nervioso. ¿Dónde pones la atención?"],
      opts: [
        ["No que faço: respirar, escolher o canto e bater firme", "On what I do: breathe, pick my corner and strike firmly", "En lo que hago: respirar, elegir el rincón y patear firme"],
        ["No 'e se eu errar?'", "On 'what if I miss?'", "En el '¿y si fallo?'"],
        ["Na torcida e no placar", "On the crowd and the score", "En la hinchada y el marcador"],
      ],
      why: ["O resultado do pênalti você não controla; a batida, sim. Respiração e um plano claro acalmam o corpo.", "You don't control the outcome of the penalty; you control the strike. Breathing and a clear plan calm your body.", "El resultado del penal no lo controlas; el remate, sí. La respiración y un plan claro calman el cuerpo."],
      scene: {
        anim: "cabine", cast: ["capitao", "tremelique", "zumzum", "pulinho"],
        text: ["Pênalti decisivo...", "Decisive penalty...", "Penal decisivo..."],
        steps: [
          { d: 2.4, boss: "tremelique", mood: { tremelique: "big" }, say: ["tremelique", ["E se eu errar na frente de todo mundo?!", "What if I miss in front of everyone?!", "¿Y si fallo delante de todos?!"]] },
          { d: 2.2, say: ["zumzum", ["E se o goleiro pegar? E se...?", "What if the keeper saves it? What if...?", "¿Y si el arquero ataja? ¿Y si...?"]], cloud: ["e se eu errar?", "what if I miss?", "¿y si fallo?"] },
          { d: 2.8, boss: "capitao", mood: { tremelique: "small", zumzum: "small" }, say: ["capitao", ["Respira. Canto escolhido. Bate firme.", "Breathe. Corner picked. Strike firmly.", "Respira. Rincón elegido. Patea firme."]], text: ["Atenção no que você faz", "Focus on what you do", "Atención en lo que haces"] },
        ],
      },
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
    {
      q: ["Você perdeu um gol feito. O que faz no lance seguinte?", "You missed an open goal. What do you do on the next play?", "Fallaste un gol hecho. ¿Qué haces en la siguiente jugada?"],
      opts: [
        ["Respiro e peço a bola de novo", "Breathe and ask for the ball again", "Respiro y pido el balón otra vez"],
        ["Fico pensando no erro o jogo todo", "Keep thinking about it the whole game", "Me quedo pensando en el error todo el partido"],
        ["Peço para sair do jogo", "Ask to come off", "Pido salir del partido"],
      ],
      why: ["O próximo lance é uma nova chance. Errar faz parte; o craque volta a tentar.", "The next play is a new chance. Mistakes happen; great players try again.", "La próxima jugada es una nueva oportunidad. Equivocarse es parte; el crack vuelve a intentar."],
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
        ["Um frio na barriga: é o corpo se preparando", "Butterflies: your body getting ready", "Mariposas en la panza: el cuerpo preparándose"],
        ["Nada: craque nunca fica nervoso", "Nothing: great players never get nervous", "Nada: los cracks nunca se ponen nerviosos"],
        ["Vontade de desistir sempre", "Always wanting to quit", "Siempre ganas de abandonar"],
      ],
      why: ["Até os melhores do mundo ficam nervosos. O segredo é usar essa energia para dar o seu melhor.", "Even the world's best get nervous. The secret is using that energy to give your best.", "Hasta los mejores del mundo se ponen nerviosos. El secreto es usar esa energía para dar lo mejor."],
    },
    {
      q: ["Como saber se o seu treino foi bom?", "How do you know if your practice was good?", "¿Cómo saber si tu entrenamiento fue bueno?"],
      opts: [
        ["Se eu me dediquei de verdade e aprendi alguma coisa", "If I really gave it my all and learned something", "Si me dediqué de verdad y aprendí algo"],
        ["Só se eu ganhei o rachão", "Only if I won the scrimmage", "Solo si gané el partidito"],
        ["Só se o técnico me elogiou", "Only if the coach praised me", "Solo si el entrenador me elogió"],
      ],
      why: ["Elogio e vitória são bons, mas não dependem só de você. Dedicação e aprendizado, sim.", "Praise and wins are nice, but they don't depend only on you. Effort and learning do.", "El elogio y la victoria son buenos, pero no dependen solo de ti. La dedicación y el aprendizaje, sí."],
    },
    {
      q: ["Seu time perdeu o jogo. O que é mais importante depois?", "Your team lost. What matters most afterwards?", "Tu equipo perdió. ¿Qué es lo más importante después?"],
      opts: [
        ["Cumprimentar o adversário e pensar no que aprender", "Shake hands and think about what to learn", "Saludar al rival y pensar qué aprender"],
        ["Culpar o juiz", "Blame the referee", "Culpar al árbitro"],
        ["Desistir de jogar", "Give up playing", "Dejar de jugar"],
      ],
      why: ["Perder também ensina. Quem respeita o adversário e aprende volta mais forte.", "Losing teaches you too. Respect the opponent, learn, and come back stronger.", "Perder también enseña. Quien respeta al rival y aprende vuelve más fuerte."],
    },
  ],
});
