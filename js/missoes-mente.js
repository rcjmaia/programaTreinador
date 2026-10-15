/* Grupo Mental: a Turma da Cabeça.
   Personagens (js/animacoes/cabine.js): Capitão Agora (a consciência, quem observa e decide), Pulinho (alegria),
   Tremelique (medo), Faísca (raiva), Nublada (tristeza), Zum-Zum (ansiedade), Sr. Sofá (preguiça), Pavão (ego).
   E o Vovô Sábio, um velho sábio da Índia que ensina a turma (não é uma emoção).
   As missões "quiz" daqui são "Você decide": os lances ficam em js/missoes-decide.js. */

const CQ_UNIT_POINTS = ["pontos", "points", "puntos"];

CQ_MISSIONS.push(
  {
    id: "turma", type: "quiz", icon: "🎭", subs: ["concentration", "confidence"], tiers: [2, 4, 6],
    title: ["A Turma da Cabeça", "The Head Crew", "La Pandilla de la Cabeza"],
    desc: ["Na sua cabeça mora uma turma: Pulinho (alegria), Tremelique (medo), Faísca (raiva), Nublada (tristeza), Zum-Zum (preocupação), Sr. Sofá (preguiça) e Pavão (exibido). Quem manda é o Capitão Agora!", "A crew lives in your head: Bouncy (joy), Shaky (fear), Spark (anger), Cloudy (sadness), Buzz (worry), Mr. Couch (laziness) and Peacock (show-off). The boss is Captain Now!", "En tu cabeza vive una pandilla: Saltito (alegría), Tembleque (miedo), Chispa (rabia), Nublada (tristeza), Zum-Zum (preocupación), Sr. Sofá (pereza) y Pavo Real (presumido). ¡El jefe es el Capitán Ahora!"],
    unit: CQ_UNIT_POINTS,
    // Shown before the plays: who is who in the crew (faces come from js/animacoes/cabine.js).
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
    id: "nuvens", type: "quiz", icon: "☁️", subs: ["concentration", "composure"], tiers: [2, 4, 6],
    title: ["Nuvens que passam", "Passing clouds", "Nubes que pasan"],
    desc: ["Pensamentos são como nuvens: vêm e vão. Deixe passar e volte para a bola!", "Thoughts are like clouds: they come and go. Let them pass and get back to the ball!", "Los pensamientos son como nubes: vienen y van. ¡Déjalos pasar y vuelve al balón!"],
    unit: CQ_UNIT_POINTS,
  },
  {
    id: "agora", type: "quiz", icon: "📍", subs: ["concentration", "composure"], tiers: [2, 4, 6],
    title: ["Aqui e agora", "Here and now", "Aquí y ahora"],
    desc: ["O jogo acontece agora, neste lance. Aprenda a voltar para a bola!", "The game happens now, in this play. Learn to come back to the ball!", "El partido pasa ahora, en esta jugada. ¡Aprende a volver al balón!"],
    unit: CQ_UNIT_POINTS,
  },
  {
    id: "estoico", type: "quiz", icon: "🛡️", subs: ["resilience", "composure"], tiers: [2, 4, 6],
    title: ["Escudo da calma", "The calm shield", "El escudo de la calma"],
    desc: ["Juiz, placar e escolhas do técnico você não controla. A sua atitude, sim!", "You can't control the ref, the score or the coach's choices. Your attitude, you can!", "El árbitro, el marcador y las decisiones del técnico no los controlas. ¡Tu actitud, sí!"],
    unit: CQ_UNIT_POINTS,
  },
  {
    id: "sofa", type: "quiz", icon: "🛋️", subs: ["discipline"], tiers: [2, 4, 6],
    title: ["Vencendo o Sr. Sofá", "Beating Mr. Couch", "Venciendo al Sr. Sofá"],
    desc: ["O Sr. Sofá sempre diz 'depois'. Descubra como vencer a preguiça!", "Mr. Couch always says 'later'. Find out how to beat laziness!", "El Sr. Sofá siempre dice 'después'. ¡Descubre cómo vencer la pereza!"],
    unit: CQ_UNIT_POINTS,
  },
  {
    id: "vigia", type: "quiz", icon: "🔦", subs: ["confidence", "resilience"], tiers: [2, 4, 6],
    title: ["Vigia dos pensamentos", "Thought guard", "Vigía de los pensamientos"],
    desc: ["O que você fala para você mesmo muda o seu jogo. Seja o vigia da sua cabeça!", "What you tell yourself changes your game. Be the guard of your head!", "Lo que te dices cambia tu juego. ¡Sé el vigía de tu cabeza!"],
    unit: CQ_UNIT_POINTS,
  },
  {
    id: "pavao", type: "quiz", icon: "🦚", subs: ["fairplay", "confidence"], tiers: [2, 4, 6],
    title: ["O Pavão e o time", "The Peacock and the team", "El Pavo Real y el equipo"],
    desc: ["O Pavão quer aplauso só para ele. Mas quem joga para o time brilha mais!", "Peacock wants all the applause. But playing for the team shines brighter!", "El Pavo Real quiere el aplauso solo para él. ¡Pero quien juega para el equipo brilla más!"],
    unit: CQ_UNIT_POINTS,
  },
  {
    id: "melhor", type: "quiz", icon: "🌟", subs: ["resilience", "discipline", "courage"], tiers: [2, 4, 6],
    title: ["Dar o meu melhor", "Giving my best", "Dar lo mejor de mí"],
    desc: ["Errou? Faz parte! O que importa é dar o seu melhor.", "Made a mistake? It happens! What matters is giving your best.", "¿Fallaste? ¡Es normal! Lo que importa es dar lo mejor de ti."],
    unit: CQ_UNIT_POINTS,
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
