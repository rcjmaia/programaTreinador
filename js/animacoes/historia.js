/* Historinhas da Turma da Cabeça: um desenho curto que toca antes da pergunta.
   A pergunta aponta para o roteiro com story: { anim: "historia", id }. Precisa de cabine.js (carinhas da turma).
   Toca uma vez, chama opts.onEnd e continua animando a última cena até a criança responder.

   Roteiro (CQ_STORIES[id]):
     bg       "pitch" | "room" | "night"
     props    objetos visíveis no início: goal, goalL, crowd, sofa, bed, stairs, bird, spot, zzz, phone, ice
     cast     { ator: { kit, x, dir, pose, lift, hide } }; "me" é a criança e veste a camisa da carta dela
     ball     dono | [x, y] | null
     beats    [{ d, cap, think: [carinha, texto, ator] | null, say: [ator, texto], big, bigAt, bigFor,
                 fx: "rewind" | "cut", sparks, bg, props, clouds: [texto, ...],
                 a: { ator: { x, dir, pose, lift, hop, glide, hide, t0, t1 } },
                 ball: { to: ator | "goal" | "goalL" | "over" | "wide" | [x, y], h, t0, t1 } | { give: ator, t0 } | { juggle: ator } }]
   Textos são [pt, en, es]. cap, think, bg, props e sparks continuam valendo nas cenas seguintes.
   "rewind" volta tudo ao começo (com o ⏪); "cut" pula direto para a nova posição (troca de cena). */

const CQS_GOAL = ["GOOOL!", "GOAL!", "¡GOOOL!"];
const CQS_OOPS = "😬";
const CQS_JUMP = { ...CQ_POSE.air, legF: [-20, 40], legB: [10, 40] };
const CQS_POSES = {
  sad: { ...CQ_POSE.stand, lean: 14, armF: [4, 0], armB: [-4, 0] },
  sit: { hipY: CQ_GROUND - 9, lean: -6, legF: [-82, 10], legB: [-78, 14], armF: [30, -20], armB: [40, -20] },
  pain: { hipY: CQ_GROUND - 30, lean: 28, legF: [-50, 80], legB: [8, 8], armF: [30, -70], armB: [36, -70] },
  shout: { ...CQ_POSE.stand, lean: -6, armF: [-115, -60], armB: [-100, -60] },
  think: { ...CQ_POSE.stand, lean: -10, armF: [-30, -130], armB: [6, -10] },
  lie: CQ_POSE.lieBack,
  juggleUp: { ...CQ_POSE.stand, legF: [-60, 30], armF: [-30, -20], armB: [30, -20] },
};

// Beats that repeat across the stories.
const cqsRun = (who, x, d = 1.2, more = {}) => ({ d, a: { [who]: { x, ...more } } });
const cqsShoot = (who = "me", more = {}) => ({
  d: 1, big: CQS_GOAL, bigAt: 0.85, ...more,
  a: { [who]: { pose: "kick", t1: 0.35 }, ...(more.a || {}) },
  ball: { to: "goal", h: 12, t0: 0.3, t1: 0.85 },
});
const cqsMiss = (who = "me", to = "over", more = {}) => ({
  d: 1, big: CQS_OOPS, bigAt: 0.8, ...more,
  a: { [who]: { pose: "kick", t1: 0.35 }, ...(more.a || {}) },
  ball: { to, h: 30, t0: 0.3, t1: 0.9 },
});
const cqsParty = (text, cap, who = ["me"], more = {}) => ({
  d: 2.6, sparks: true, think: text ? ["pulinho", text] : null, cap, ...more,
  a: { ...Object.fromEntries(who.map((id) => [id, { pose: "cheer" }])), ...(more.a || {}) },
});
const cqsRewind = { d: 1.1, fx: "rewind" };

const CQ_STORIES = {
  // A alegria é ótima, mas o jogo continua.
  turma: {
    props: { goal: true, goalL: true },
    cast: { rival: { kit: "rival", x: 210, dir: -1, pose: "ready" }, me: { x: 110 } },
    ball: "me",
    beats: [
      { ...cqsRun("me", 245, 1.4), cap: ["⚽ Você vai pro gol!", "⚽ You go for goal!", "⚽ ¡Vas al arco!"] },
      cqsShoot(),
      { d: 1.8, sparks: true, think: ["pulinho", ["Uhuuu! Vou comemorar muito!", "Woohoo! Let's party!", "¡Uhuuu! ¡A festejar mucho!"]], cap: ["😄 O Pulinho tomou conta...", "😄 Bouncy took over...", "😄 Saltito tomó el mando..."], a: { me: { pose: "cheer" } } },
      { d: 1, cap: ["⚽ Mas o jogo continuou...", "⚽ But the game went on...", "⚽ Pero el partido siguió..."], ball: { to: [160, CQ_GROUND - 5], t1: 0.01 }, a: { rival: { x: 172 } } },
      { d: 1.2, ball: { give: "rival" }, a: { rival: { x: 70 } } },
      { ...cqsShoot("rival"), ball: { to: "goalL", h: 10, t0: 0.3, t1: 0.85 }, big: ["Gol deles! 😱", "Their goal! 😱", "¡Gol de ellos! 😱"], sparks: false, think: null },
      cqsRewind,
      { ...cqsRun("me", 245, 1.1), cap: ["⚽ Você vai pro gol!", "⚽ You go for goal!", "⚽ ¡Vas al arco!"] },
      cqsShoot(),
      { d: 1.1, sparks: true, think: ["pulinho", ["Uhuuu!", "Woohoo!", "¡Uhuuu!"]], a: { me: { pose: "cheer" } } },
      { d: 1.8, sparks: false, think: ["capitao", ["Comemora e volta pro jogo!", "Celebrate, then get back!", "¡Festeja y vuelve al juego!"]], cap: ["⭐ O Capitão lembra: o jogo continua", "⭐ The Captain says: the game goes on", "⭐ El Capitán dice: el partido sigue"], ball: { to: [160, CQ_GROUND - 5], t1: 0.01 }, a: { me: { x: 92, dir: -1, t0: 0.2 }, rival: { x: 172 } } },
      { d: 1.1, ball: { give: "rival", t0: 0 }, a: { rival: { x: 142 }, me: { dir: 1, pose: "ready" } } },
      { d: 0.8, ball: { give: "me", t0: 0.4 }, big: "💪", a: { rival: { pose: "sad", t0: 0.4 } } },
      { ...cqsRun("me", 230, 1.3), think: null },
      cqsParty(["Comemorei e voltei!", "Celebrated and came back!", "¡Festejé y volví!"], ["🎉 Alegria com atenção!", "🎉 Joy with focus!", "🎉 ¡Alegría con atención!"]),
    ],
  },

  // Pensamentos são nuvens: deixa passar e volta para a bola.
  nuvens: {
    props: { goal: true },
    cast: { mate: { kit: "mate", x: 40 }, me: { x: 150, pose: "ready" } },
    ball: "mate",
    beats: [
      { d: 1.4, cap: ["⚽ O amigo vai passar pra você", "⚽ Your friend will pass to you", "⚽ El amigo te va a pasar"] },
      { d: 2.6, cap: ["☁️ Chegaram os pensamentos...", "☁️ Here come the thoughts...", "☁️ Llegaron los pensamientos..."], think: ["zumzum", ["Olha quanta nuvem!", "Look at all the clouds!", "¡Mira cuántas nubes!"]], clouds: [["e o lanche? 🍕", "snack time? 🍕", "¿y la merienda? 🍕"], ["e se eu errar? 😟", "what if I miss? 😟", "¿y si fallo? 😟"], ["videogame 🎮", "video games 🎮", "videojuegos 🎮"]], a: { me: { pose: "think" } } },
      { d: 1.4, cap: ["😕 A bola passou...", "😕 The ball went by...", "😕 El balón pasó..."], a: { mate: { pose: "kick", t1: 0.35 } }, ball: { to: [340, CQ_GROUND - 5], t0: 0.3, t1: 1 } },
      cqsRewind,
      { d: 2.2, cap: ["⭐ Deixa a nuvem passar...", "⭐ Let the cloud go by...", "⭐ Deja pasar la nube..."], think: ["capitao", ["Nuvem passou. Volta pra bola!", "Cloud's gone. Back to the ball!", "Pasó la nube. ¡Vuelve al balón!"]], clouds: [["e o lanche? 🍕", "snack time? 🍕", "¿y la merienda? 🍕"], ["e se eu errar? 😟", "what if I miss? 😟", "¿y si fallo? 😟"]] },
      { d: 1.1, a: { mate: { pose: "kick", t1: 0.35 } }, ball: { to: "me", h: 6, t0: 0.3, t1: 0.95 } },
      { ...cqsRun("me", 245, 1.2), think: null },
      cqsShoot(),
      cqsParty(["Gol!", "Goal!", "¡Gol!"], ["🎉 Atenção na bola = gol!", "🎉 Eyes on the ball = goal!", "🎉 ¡Atención en el balón = gol!"], ["me", "mate"]),
    ],
  },

  // O erro já passou: o jogo é agora.
  agora: {
    props: { goal: true },
    cast: { rival: { kit: "rival", x: 270, dir: -1 }, me: { x: 120, pose: "sad" } },
    ball: "rival",
    beats: [
      { d: 1.6, cap: ["😢 Você errou um passe...", "😢 You missed a pass...", "😢 Fallaste un pase..."], think: ["nublada", ["Errei... que vergonha...", "I messed up... so embarrassing...", "Fallé... qué vergüenza..."]] },
      { ...cqsRun("rival", 20, 2.2), cap: ["😕 Ficou no erro... e o adversário passou", "😕 Stuck on the mistake... and he got past", "😕 Te quedaste en el error... y el rival pasó"] },
      cqsRewind,
      { d: 1.4, cap: ["😢 Você errou um passe...", "😢 You missed a pass...", "😢 Fallaste un pase..."], think: ["nublada", ["Errei...", "I messed up...", "Fallé..."]] },
      { d: 1.8, cap: ["📍 O jogo é agora!", "📍 The game is now!", "📍 ¡El partido es ahora!"], think: ["capitao", ["Já passou! Agora é ESTE lance!", "It's gone! THIS play matters!", "¡Ya pasó! ¡Ahora es ESTA jugada!"]], a: { me: { pose: "ready" } } },
      { ...cqsRun("rival", 162, 1.2), think: null },
      { d: 0.8, ball: { give: "me", t0: 0.4 }, big: "💪", a: { rival: { pose: "sad", t0: 0.4 } } },
      cqsRun("me", 245, 1.3),
      cqsShoot(),
      cqsParty(["Esse lance foi meu!", "That play was mine!", "¡Esa jugada fue mía!"], ["🎉 Cabeça no agora!", "🎉 Mind on the now!", "🎉 ¡Cabeza en el ahora!"]),
    ],
  },

  // O juiz você não controla. A sua atitude, sim.
  estoico: {
    props: { goal: true, crowd: true },
    cast: { ref: { kit: "ref", x: 240, dir: -1 }, rival: { kit: "rival", x: 180, dir: -1, pose: "ready" }, me: { x: 110 } },
    ball: "me",
    beats: [
      { ...cqsRun("me", 160, 1.1), cap: ["⚽ Você disputou a bola...", "⚽ You went for the ball...", "⚽ Disputaste el balón..."] },
      { d: 1.4, big: ["🎵 FALTA!", "🎵 FOUL!", "🎵 ¡FALTA!"], bigFor: 1.2, cap: ["😤 O juiz errou: marcou falta!", "😤 The ref got it wrong: foul!", "😤 El árbitro se equivocó: ¡falta!"], a: { rival: { pose: "sit" }, ref: { pose: "shout" }, me: { pose: "stand" } }, ball: { to: [172, CQ_GROUND - 5], h: 0, t1: 0.3 } },
      { d: 2.2, think: ["faisca", ["Juiz ladrão! Não foi nada!", "Bad ref! That was nothing!", "¡Árbitro ladrón! ¡No fue nada!"]], cap: ["😡 A Faísca tomou conta...", "😡 Spark took over...", "😡 Chispa tomó el mando..."], a: { me: { x: 205, pose: "argue" } } },
      { d: 1.6, big: "🟨", bigFor: 1.5, cap: ["🟨 Cartão amarelo...", "🟨 Yellow card...", "🟨 Tarjeta amarilla..."], a: { ref: { pose: "shout" } } },
      cqsRewind,
      { ...cqsRun("me", 160, 1.1), cap: ["⚽ Você disputou a bola...", "⚽ You went for the ball...", "⚽ Disputaste el balón..."] },
      { d: 1.4, big: ["🎵 FALTA!", "🎵 FOUL!", "🎵 ¡FALTA!"], bigFor: 1.2, cap: ["😤 O juiz errou: marcou falta!", "😤 The ref got it wrong: foul!", "😤 El árbitro se equivocó: ¡falta!"], a: { rival: { pose: "sit" }, ref: { pose: "shout" }, me: { pose: "stand" } }, ball: { to: [172, CQ_GROUND - 5], h: 0, t1: 0.3 } },
      { d: 2, think: ["capitao", ["Não depende de mim. Próximo lance!", "Not up to me. Next play!", "No depende de mí. ¡Próxima jugada!"]], cap: ["🛡️ Escudo da calma", "🛡️ The calm shield", "🛡️ Escudo de la calma"], a: { me: { x: 90, dir: -1 }, ref: { pose: "stand" } } },
      { d: 1.4, think: null, ball: { give: "rival" }, a: { me: { dir: 1, pose: "ready" }, rival: { pose: "stand", x: 140 } } },
      { d: 0.8, ball: { give: "me", t0: 0.4 }, big: "💪", a: { rival: { pose: "sad", t0: 0.4 } } },
      cqsParty(["Boa! Cabeça fria!", "Nice! Cool head!", "¡Bien! ¡Cabeza fría!"], ["🎉 Cuidou só do que é seu!", "🎉 You handled your part!", "🎉 ¡Cuidaste solo lo tuyo!"]),
    ],
  },

  // Vencendo a preguiça: só 5 minutinhos.
  sofa: {
    bg: "room",
    props: { sofa: true },
    cast: { me: { x: 100, pose: "lie", lift: 16 } },
    ball: [262, CQ_GROUND - 5],
    beats: [
      { d: 2, cap: ["🛋️ Hora de treinar...", "🛋️ Time to train...", "🛋️ Hora de entrenar..."], think: ["sofa", ["Ahhh... depois eu treino...", "Ahhh... I'll train later...", "Ahhh... después entreno..."]] },
      { d: 2.4, cap: ["😴 O Sr. Sofá venceu...", "😴 Mr. Couch won...", "😴 Ganó el Sr. Sofá..."], think: null, props: { zzz: true } },
      cqsRewind,
      { d: 1.4, cap: ["🛋️ Hora de treinar...", "🛋️ Time to train...", "🛋️ Hora de entrenar..."], think: ["sofa", ["Ahhh... depois...", "Ahhh... later...", "Ahhh... después..."]] },
      { d: 2, cap: ["⭐ Só 5 minutinhos!", "⭐ Just 5 minutes!", "⭐ ¡Solo 5 minutitos!"], think: ["capitao", ["Só 5 minutinhos. Bora?", "Just 5 minutes. Let's go?", "Solo 5 minutitos. ¿Vamos?"]], a: { me: { pose: "sit" } } },
      { ...cqsRun("me", 242, 1.4, { lift: 0, t0: 0.1 }), think: null },
      { d: 3, sparks: true, cap: ["⚽ Começou... e ficou fácil!", "⚽ Once you start, it's easy!", "⚽ ¡Empezaste... y fue fácil!"], think: ["pulinho", ["Olha eu na embaixadinha!", "Look at my keepy-ups!", "¡Mírame hacer jueguitos!"]], ball: { juggle: "me" }, a: { me: { pose: "juggle" } } },
    ],
  },

  // O que você fala para você mesmo muda o seu jogo.
  vigia: {
    props: { goal: true, crowd: true },
    cast: { rival: { kit: "rival", x: 205, dir: -1, pose: "ready" }, mate: { kit: "mate", x: 50 }, me: { x: 150, dir: -1 } },
    ball: "mate",
    beats: [
      { d: 2.2, cap: ["😨 O Tremelique tomou conta...", "😨 Shaky took over...", "😨 Tembleque tomó el mando..."], think: ["tremelique", ["Vou errar... nem quero a bola...", "I'll mess up... I don't want the ball...", "Voy a fallar... no quiero el balón..."]], a: { me: { x: 222, dir: 1, pose: "sad" } } },
      { d: 1.8, big: "🤷", cap: ["🤷 Ninguém pediu a bola...", "🤷 Nobody asked for the ball...", "🤷 Nadie pidió el balón..."], a: { mate: { pose: "think" } } },
      cqsRewind,
      { d: 1.4, cap: ["😨 Bateu o medo...", "😨 Fear kicked in...", "😨 Llegó el miedo..."], think: ["tremelique", ["Vou errar...", "I'll mess up...", "Voy a fallar..."]] },
      { d: 2.2, cap: ["🔦 Troca o pensamento!", "🔦 Swap the thought!", "🔦 ¡Cambia el pensamiento!"], think: ["capitao", ["Eu treinei. Eu consigo!", "I trained. I can do it!", "Entrené. ¡Yo puedo!"]], a: { me: { pose: "wave" } } },
      { d: 1.1, think: null, a: { mate: { pose: "kick", t1: 0.35 } }, ball: { to: "me", h: 8, t0: 0.3, t1: 0.95 } },
      { d: 0.4, a: { me: { dir: 1, pose: "stand" } } },
      { d: 1.2, a: { me: { x: 248 }, rival: { pose: "sad", t0: 0.5 } } },
      cqsShoot(),
      cqsParty(["Eu consigo!", "I can do it!", "¡Yo puedo!"], ["🎉 Pensou forte, jogou forte!", "🎉 Strong thoughts, strong play!", "🎉 ¡Pensó fuerte, jugó fuerte!"], ["me", "mate"]),
    ],
  },

  // Errar faz parte: o que importa é tentar de novo.
  melhor: {
    props: { goal: true },
    cast: { me: { x: 200 } },
    ball: "me",
    beats: [
      { ...cqsMiss("me", "wide"), cap: ["⚽ Chutou... e errou!", "⚽ Shot... and missed!", "⚽ Pateó... ¡y falló!"] },
      { d: 2.4, cap: ["😢 Desistiu...", "😢 Gave up...", "😢 Se rindió..."], think: ["nublada", ["Errei... não sirvo pra isso...", "I missed... I'm no good...", "Fallé... no sirvo para esto..."]], a: { me: { pose: "sit" } } },
      cqsRewind,
      { ...cqsMiss("me", "wide"), cap: ["⚽ Chutou... e errou!", "⚽ Shot... and missed!", "⚽ Pateó... ¡y falló!"] },
      { d: 1.4, think: ["nublada", ["Errei...", "I missed...", "Fallé..."]], a: { me: { pose: "sad" } } },
      { d: 2, cap: ["🔁 Tenta de novo!", "🔁 Try again!", "🔁 ¡Intenta otra vez!"], think: ["capitao", ["Errar faz parte. De novo!", "Missing is normal. Again!", "Fallar es normal. ¡Otra vez!"]], ball: { to: "me", h: 50, t0: 0.4, t1: 1 }, a: { me: { pose: "ready" } } },
      { ...cqsShoot(), think: null },
      cqsParty(["Consegui!", "I did it!", "¡Lo logré!"], ["🎉 Quem tenta de novo melhora!", "🎉 Trying again makes you better!", "🎉 ¡Quien lo intenta otra vez mejora!"]),
    ],
  },

  // Rotina: sempre os mesmos passos antes do lance.
  rotina: {
    props: { goal: true, crowd: true },
    cast: { keeper: { kit: "keeper", x: 290, dir: -1, pose: "ready" }, me: { x: 150 } },
    ball: [215, CQ_GROUND - 5],
    beats: [
      { d: 1.8, cap: ["⚽ Pênalti!", "⚽ Penalty!", "⚽ ¡Penal!"], think: ["tremelique", ["Todo mundo olhando...", "Everyone's watching...", "Todos mirando..."]] },
      { ...cqsRun("me", 199, 0.6), cap: ["😰 Chutou correndo, sem pensar...", "😰 Rushed the kick...", "😰 Pateó apurado, sin pensar..."], think: null },
      cqsMiss("me", "over"),
      cqsRewind,
      { ...cqsRun("me", 204, 1.4, { pose: "bend" }), cap: ["1️⃣ Bola no lugar", "1️⃣ Ball in place", "1️⃣ Balón en su lugar"], think: ["capitao", ["Meus passos de sempre.", "My usual steps.", "Mis pasos de siempre."]] },
      { d: 1.4, cap: ["2️⃣ Olho o canto 👀", "2️⃣ Pick the corner 👀", "2️⃣ Miro el rincón 👀"], a: { me: { x: 172, pose: "stand", glide: true } } },
      { d: 1.4, cap: ["3️⃣ Respiro fundo", "3️⃣ Deep breath", "3️⃣ Respiro hondo"], big: "🌬️", bigFor: 1.2, think: null },
      cqsRun("me", 199, 0.6),
      cqsShoot("me", { a: { keeper: { pose: "air", lift: 16, t0: 0.4 } } }),
      cqsParty(["Gooool!", "Goooal!", "¡Gooool!"], ["🎉 Os mesmos passos acalmam!", "🎉 Same steps, calm head!", "🎉 ¡Los mismos pasos calman!"], ["me"], { a: { keeper: { pose: "sit", lift: 0 } } }),
    ],
  },

  // Termômetro: nem frio, nem fervendo, ligado e calmo.
  termometro: {
    props: { goal: true },
    cast: { rival: { kit: "rival", x: 270, dir: -1 }, me: { x: 60, pose: "ready" } },
    ball: "rival",
    beats: [
      { d: 1.8, cap: ["🔥 Termômetro fervendo...", "🔥 Thermometer boiling...", "🔥 Termómetro hirviendo..."], think: ["faisca", ["Vou com tudo em todo mundo!", "I'm going all-in on everyone!", "¡Voy con todo contra todos!"]], a: { me: { pose: "argue" } } },
      { d: 1, a: { rival: { x: 175 }, me: { x: 140 } } },
      { d: 0.9, big: ["🎵 FALTA!", "🎵 FOUL!", "🎵 ¡FALTA!"], bigAt: 0.5, bigFor: 1.4, cap: ["😬 Entrou com tudo... falta!", "😬 Went in too hard... foul!", "😬 Entró con todo... ¡falta!"], a: { me: { x: 165, pose: "slide", glide: true }, rival: { pose: "sit", t0: 0.5 } }, ball: { to: [200, CQ_GROUND - 5], t0: 0.5, t1: 1 } },
      { d: 1.4, big: "🟨", bigFor: 1.3, think: null },
      cqsRewind,
      { d: 2, cap: ["🌡️ Ligado e calmo", "🌡️ Switched on and calm", "🌡️ Activo y tranquilo"], think: ["capitao", ["Ligado e calmo. Espera a hora certa.", "On and calm. Wait for the moment.", "Activo y tranquilo. Espera el momento."]] },
      { d: 1, think: null, a: { rival: { x: 175 }, me: { x: 140 } } },
      { d: 0.9, ball: { give: "me", t0: 0.45 }, big: "💪", bigAt: 0.45, a: { rival: { pose: "sad", t0: 0.45 } } },
      cqsRun("me", 245, 1.3),
      cqsShoot(),
      cqsParty(["Na medida certa!", "Just right!", "¡En su punto!"], ["🎉 Ligado e calmo joga melhor!", "🎉 On and calm plays better!", "🎉 ¡Activo y tranquilo juega mejor!"]),
    ],
  },

  // A atenção é uma lanterna: na hora do chute, só a bola.
  lanterna: {
    props: { goal: true, crowd: true },
    cast: { keeper: { kit: "keeper", x: 290, dir: -1, pose: "ready" }, me: { x: 130 } },
    ball: "me",
    beats: [
      { ...cqsRun("me", 205, 1.2), cap: ["⚽ Hora de chutar!", "⚽ Time to shoot!", "⚽ ¡Hora de patear!"] },
      { d: 2.2, props: { bird: true }, cap: ["🐦 Uma distração...", "🐦 A distraction...", "🐦 Una distracción..."], think: ["zumzum", ["Olha o passarinho!", "Look, a bird!", "¡Mira el pajarito!"]], a: { me: { pose: "think" } } },
      { ...cqsMiss("me", "wide"), cap: ["😕 Chutou sem olhar...", "😕 Shot without looking...", "😕 Pateó sin mirar..."], think: null },
      cqsRewind,
      { ...cqsRun("me", 205, 1.2), cap: ["⚽ Hora de chutar!", "⚽ Time to shoot!", "⚽ ¡Hora de patear!"] },
      { d: 1.2, props: { bird: true }, think: ["zumzum", ["Olha o passarinho!", "Look, a bird!", "¡Mira el pajarito!"]] },
      { d: 2, props: { spot: true }, cap: ["🔦 Lanterna só na bola", "🔦 Torch on the ball only", "🔦 Linterna solo en el balón"], think: ["capitao", ["Lanterna na bola!", "Torch on the ball!", "¡Linterna en el balón!"]], a: { me: { pose: "ready" } } },
      cqsShoot("me", { think: null, a: { keeper: { pose: "air", lift: 16, t0: 0.4 } } }),
      cqsParty(["Gol!", "Goal!", "¡Gol!"], ["🎉 Atenção na bola = gol!", "🎉 Eyes on the ball = goal!", "🎉 ¡Atención en el balón = gol!"], ["me"], { props: { spot: false, bird: false }, a: { keeper: { pose: "sit", lift: 0 } } }),
    ],
  },

  // Sonho grande, degrau pequeno.
  metas: {
    props: { stairs: true },
    cast: { me: { x: 110 } },
    ball: null,
    beats: [
      { d: 2, cap: ["🏆 Um sonho bem grande!", "🏆 A really big dream!", "🏆 ¡Un sueño bien grande!"], think: ["pulinho", ["Quero jogar na seleção!", "I want to play for my country!", "¡Quiero jugar en la selección!"]] },
      { d: 1.2, think: null, cap: ["🦘 Pulou direto pro alto...", "🦘 Jumped straight to the top...", "🦘 Saltó directo arriba..."], a: { me: { x: 180, hop: 50, pose: "stand" } } },
      { d: 1.6, big: "💥", cap: ["😵 ...e caiu!", "😵 ...and fell!", "😵 ...¡y se cayó!"], a: { me: { pose: "sit" } } },
      cqsRewind,
      { d: 2, cap: ["🪜 Um degrau de cada vez", "🪜 One step at a time", "🪜 Un escalón a la vez"], think: ["capitao", ["Sonho grande, degrau pequeno!", "Big dream, small step!", "¡Sueño grande, escalón pequeño!"]] },
      { d: 1.3, think: null, cap: ["1️⃣ Treinar toda semana", "1️⃣ Train every week", "1️⃣ Entrenar cada semana"], a: { me: { x: 205, lift: 12, hop: 14, t0: 0.15, t1: 0.75 } } },
      { d: 1.3, cap: ["2️⃣ 20 embaixadinhas", "2️⃣ 20 keepy-ups", "2️⃣ 20 jueguitos"], a: { me: { x: 235, lift: 24, hop: 14, t0: 0.15, t1: 0.75 } } },
      { d: 1.3, cap: ["3️⃣ Jogar no time", "3️⃣ Make the team", "3️⃣ Jugar en el equipo"], a: { me: { x: 265, lift: 36, hop: 14, t0: 0.15, t1: 0.75 } } },
      { d: 1.2, a: { me: { x: 292, lift: 48, hop: 14, t0: 0.15, t1: 0.75 } } },
      { d: 2.4, sparks: true, cap: ["🏆 Chegou lá, degrau por degrau!", "🏆 Got there, step by step!", "🏆 ¡Llegó, escalón por escalón!"], a: { me: { pose: "cheer" } } },
    ],
  },

  // Quem fala em campo ajuda o time.
  timeunido: {
    props: { goal: true },
    cast: { rival: { kit: "rival", x: 300, dir: -1 }, mate: { kit: "mate", x: 170, dir: -1 }, me: { x: 60 } },
    ball: "mate",
    beats: [
      { ...cqsRun("rival", 235, 1.4), cap: ["👀 O amigo está de costas...", "👀 Your friend has his back turned...", "👀 El amigo está de espaldas..."] },
      { d: 1.6, cap: ["🤐 Ninguém avisou...", "🤐 Nobody warned him...", "🤐 Nadie le avisó..."], ball: { give: "rival", t0: 0.75 }, a: { rival: { x: 190, dir: -1 }, mate: { pose: "sad", t0: 0.75 } } },
      { ...cqsRun("rival", 340, 1.4, { dir: 1 }), cap: ["😕 Perdeu a bola...", "😕 Lost the ball...", "😕 Perdió el balón..."] },
      cqsRewind,
      { ...cqsRun("rival", 235, 1.4), think: ["capitao", ["Avisa o amigo!", "Warn your friend!", "¡Avisa al amigo!"]], cap: ["👀 O amigo está de costas...", "👀 Your friend has his back turned...", "👀 El amigo está de espaldas..."] },
      { d: 1.5, think: null, say: ["me", ["LADRÃO! 📣", "MAN ON! 📣", "¡TE MARCAN! 📣"]], cap: ["📣 Você avisou!", "📣 You warned him!", "📣 ¡Le avisaste!"], a: { me: { pose: "shout" } } },
      { d: 1.1, a: { mate: { pose: "kick", t1: 0.35 }, rival: { x: 195, t0: 0.3 }, me: { pose: "stand" } }, ball: { to: "me", h: 8, t0: 0.3, t1: 0.95 } },
      cqsParty(["Time unido!", "United team!", "¡Equipo unido!"], ["🤝 Juntos, ninguém perde a bola!", "🤝 Together, nobody loses the ball!", "🤝 ¡Juntos, nadie pierde el balón!"], ["me", "mate"], { a: { me: { pose: "cheer" }, mate: { pose: "cheer" }, rival: { pose: "sad" } } }),
    ],
  },

  // A gente joga porque é divertido.
  porque: {
    props: {},
    cast: { mate: { kit: "mate", x: 250, dir: -1 }, me: { x: 120 } },
    ball: "me",
    beats: [
      { d: 2.2, cap: ["😰 Jogar só pra não perder...", "😰 Playing just not to lose...", "😰 Jugar solo para no perder..."], think: ["nublada", ["Tenho que ganhar, senão...", "I have to win, or else...", "Tengo que ganar, si no..."]], a: { me: { pose: "sad" } } },
      { d: 1.6, cap: ["😕 ...perdeu a graça", "😕 ...isn't fun anymore", "😕 ...perdió la gracia"], a: { me: { pose: "kick", t1: 0.35 } }, ball: { to: [175, CQ_GROUND - 5], t0: 0.3, t1: 1 } },
      cqsRewind,
      { d: 2.2, cap: ["😄 Lembra por que você joga?", "😄 Remember why you play?", "😄 ¿Recuerdas por qué juegas?"], think: ["pulinho", ["A gente joga porque é divertido!", "We play because it's fun!", "¡Jugamos porque es divertido!"]] },
      { d: 2.4, think: null, cap: ["⚽ Brincar de bola é demais!", "⚽ Playing ball is awesome!", "⚽ ¡Jugar a la pelota es genial!"], ball: { juggle: "me" }, a: { me: { pose: "juggle" } } },
      { d: 1.1, ball: { to: "mate", h: 30, t0: 0.1, t1: 0.9 }, a: { me: { pose: "stand" } } },
      { d: 2.4, sparks: true, cap: ["🎉 Diversão é o combustível!", "🎉 Fun is the fuel!", "🎉 ¡La diversión es el combustible!"], ball: { juggle: "mate" }, a: { mate: { pose: "juggle" }, me: { pose: "cheer" } } },
    ],
  },

  // Dormir bem também é treino.
  descanso: {
    bg: "night",
    props: { bed: true, phone: true },
    cast: { mate: { kit: "mate", x: 40, hide: true }, me: { x: 100, pose: "sit", lift: 15 } },
    ball: null,
    beats: [
      { d: 2.2, cap: ["📱 Meia-noite no celular...", "📱 Midnight on the phone...", "📱 Medianoche con el celular..."], think: ["zumzum", ["Só mais um vídeo...", "Just one more video...", "Solo un video más..."]] },
      { d: 1.4, fx: "cut", bg: "pitch", think: null, props: { bed: false, phone: false, goal: true }, cap: ["🥱 No jogo, no dia seguinte...", "🥱 At the game, next day...", "🥱 En el partido, al día siguiente..."], ball: { give: "mate" }, a: { mate: { hide: false }, me: { x: 150, pose: "sad", lift: 0 } } },
      { d: 1.6, props: { zzz: true }, big: "🥱", bigAt: 0.5, cap: ["🐢 Com sono, ficou lento...", "🐢 Sleepy and slow...", "🐢 Con sueño, quedó lento..."], a: { mate: { pose: "kick", t1: 0.35 } }, ball: { to: [340, CQ_GROUND - 5], t0: 0.3, t1: 1 } },
      cqsRewind,
      { d: 2.2, props: { phone: false }, cap: ["🌙 Celular desligado, cama cedo", "🌙 Phone off, early bed", "🌙 Celular apagado, cama temprano"], think: ["capitao", ["Hora de dormir!", "Bedtime!", "¡Hora de dormir!"]], a: { me: { pose: "lie", lift: 18 } } },
      { d: 1.8, think: null, props: { zzz: true }, cap: ["😴 Dormiu bem...", "😴 Slept well...", "😴 Durmió bien..."] },
      { d: 1, fx: "cut", bg: "pitch", props: { bed: false, zzz: false, goal: true }, cap: ["⚡ No jogo, no dia seguinte...", "⚡ At the game, next day...", "⚡ En el partido, al día siguiente..."], ball: { give: "mate" }, a: { mate: { hide: false }, me: { x: 150, pose: "ready", lift: 0 } } },
      { d: 1.1, a: { mate: { pose: "kick", t1: 0.35 } }, ball: { to: "me", h: 6, t0: 0.3, t1: 0.95 } },
      cqsRun("me", 245, 1.1),
      cqsShoot(),
      cqsParty(["Descansado é outra coisa!", "Rested makes all the difference!", "¡Descansado es otra cosa!"], ["🎉 Dormir bem também é treino!", "🎉 Sleeping well is training too!", "🎉 ¡Dormir bien también es entrenar!"], ["me", "mate"]),
    ],
  },

  // Dor é aviso do corpo: parar e avisar um adulto.
  lesao: {
    props: { goal: true },
    cast: { coach: { kit: "coach", x: 28 }, me: { x: 100 } },
    ball: "me",
    beats: [
      { ...cqsRun("me", 160, 1.2), cap: ["⚽ Treino...", "⚽ Training...", "⚽ Entrenamiento..."] },
      { d: 1.4, big: "⚡", cap: ["🤕 Ai! Doeu o joelho...", "🤕 Ouch! My knee hurts...", "🤕 ¡Ay! Me duele la rodilla..."], ball: { to: [188, CQ_GROUND - 5], t1: 0.4 }, a: { me: { pose: "pain" } } },
      { d: 2, cap: ["😬 Escondeu a dor e continuou...", "😬 Hid the pain and kept going...", "😬 Escondió el dolor y siguió..."], think: ["pavao", ["Ninguém pode ver que doeu!", "Nobody can see it hurts!", "¡Nadie puede ver que dolió!"]], ball: { give: "me" }, a: { me: { x: 225, pose: "stand" } } },
      { d: 1.6, big: "💥", think: null, cap: ["😣 ...e piorou", "😣 ...and it got worse", "😣 ...y empeoró"], ball: { to: [258, CQ_GROUND - 5], t1: 0.5 }, a: { me: { pose: "sit" } } },
      cqsRewind,
      { ...cqsRun("me", 160, 1.2), cap: ["⚽ Treino...", "⚽ Training...", "⚽ Entrenamiento..."] },
      { d: 1.2, big: "⚡", cap: ["🤕 Ai! Doeu o joelho...", "🤕 Ouch! My knee hurts...", "🤕 ¡Ay! Me duele la rodilla..."], ball: { to: [188, CQ_GROUND - 5], t1: 0.4 }, a: { me: { pose: "pain" } } },
      { d: 2, cap: ["🙋 Parou e avisou o técnico", "🙋 Stopped and told the coach", "🙋 Paró y avisó al entrenador"], think: ["capitao", ["Parei. Vou avisar um adulto.", "I'll stop and tell an adult.", "Paro y aviso a un adulto."]], a: { me: { x: 60, dir: -1, pose: "sit" } } },
      { d: 2, think: null, props: { ice: true }, cap: ["🧊 Gelo e descanso", "🧊 Ice and rest", "🧊 Hielo y descanso"], a: { coach: { pose: "bend" } } },
      { d: 1, fx: "cut", props: { ice: false }, cap: ["📅 Dias depois...", "📅 Days later...", "📅 Días después..."], ball: { give: "me" }, a: { me: { x: 150, dir: 1, pose: "stand" }, coach: { pose: "stand" } } },
      cqsRun("me", 245, 1.1),
      cqsShoot(),
      { ...cqsParty(null, ["🎉 Cuidou do corpo e voltou!", "🎉 Looked after the body and came back!", "🎉 ¡Cuidó el cuerpo y volvió!"], ["me"]), think: ["vovo", ["Paciência: voltou mais forte!", "Patience: back stronger!", "Paciencia: ¡volvió más fuerte!"]], a: { me: { pose: "cheer" }, coach: { pose: "wave" } } },
    ],
  },
};

cqRegisterAnim("historia", (box, opts) => {
  const st = CQ_STORIES[opts.args.id];
  const G = CQ_GROUND;
  const P = CQ_POSE;
  const uid = "hs" + Math.random().toString(36).slice(2, 8);
  const txt = (v) => (v == null ? "" : typeof v === "string" ? v : opts.pick(v));

  const team = cqMeKits(opts.me);
  const redShirt = ["#dc2626", "#ef4444"].includes(team.me.shirt);
  const kits = {
    ...team,
    rival: redShirt
      ? { shirt: "#f8fafc", trim: "#94a3b8", shorts: "#1e293b", socks: "#f8fafc", boots: "#111827", skin: "#8d5524", hair: "#1f1610" }
      : { shirt: "#ef4444", trim: "#7f1d1d", shorts: "#111827", socks: "#ef4444", boots: "#111827", skin: "#8d5524", hair: "#1f1610" },
    keeper: { ...CQ_KIT_GK, shirt: "#a855f7", trim: "#581c87", socks: "#a855f7", skin: "#e0ac69" },
    ref: { shirt: "#111827", trim: "#facc15", shorts: "#111827", socks: "#111827", boots: "#111827", skin: "#c68642", hair: "#3f3f46" },
    coach: CQ_KIT_HELPER,
  };
  const ids = Object.keys(st.cast);
  const crew = [...new Set(st.beats.map((b) => b.think?.[0]).filter(Boolean))];

  const crowd = Array.from({ length: 27 }, (_, i) => {
    const c = ["#f87171", "#facc15", "#60a5fa", "#a78bfa", "#34d399", "#fb923c"][i % 6];
    const y = 86 + (i % 2) * 4;
    return `<rect x="${i * 12 + 1}" y="${y + 3}" width="10" height="10" rx="3" fill="${c}" /><circle cx="${i * 12 + 6}" cy="${y}" r="4" fill="${["#f6d3b3", "#a86b3c", "#d9a273"][i % 3]}" />`;
  }).join("");
  const stairs = [0, 1, 2, 3].map((i) => {
    const h = 12 * (i + 1);
    return `<rect x="${190 + i * 30}" y="${G - h}" width="30" height="${h}" fill="#d97706" stroke="#92400e" /><text x="${205 + i * 30}" y="${G - h + 10}" text-anchor="middle" font-size="8" font-weight="700" fill="#fff">${i + 1}</text>`;
  }).join("");

  box.innerHTML = `
    <svg class="cq-anim-svg" viewBox="0 0 320 180" role="img" aria-label="${opts.label}" font-family="system-ui, sans-serif">
      <defs><mask id="${uid}-m"><rect width="320" height="180" fill="#fff" /><circle class="s-hole" r="30" fill="#000" /></mask></defs>
      <g class="s-bg" data-bg="pitch">
        <rect width="320" height="${G}" fill="#7dd3fc" /><rect y="92" width="320" height="${G - 92}" fill="#bae6fd" />
        <rect y="${G}" width="320" height="${180 - G}" fill="#166534" /><line x1="0" y1="${G}" x2="320" y2="${G}" stroke="#22c55e" stroke-width="2" />
      </g>
      <g class="s-bg" data-bg="room">
        <rect width="320" height="${G}" fill="#fde68a" /><rect y="${G - 6}" width="320" height="6" fill="#f59e0b" />
        <rect x="222" y="22" width="70" height="52" rx="4" fill="#7dd3fc" stroke="#fff" stroke-width="4" /><line x1="257" y1="22" x2="257" y2="74" stroke="#fff" stroke-width="3" />
        <rect y="${G}" width="320" height="${180 - G}" fill="#92400e" />
      </g>
      <g class="s-bg" data-bg="night">
        <rect width="320" height="${G}" fill="#312e81" /><rect y="${G - 6}" width="320" height="6" fill="#4338ca" />
        <rect x="222" y="22" width="70" height="52" rx="4" fill="#0f172a" stroke="#c7d2fe" stroke-width="4" />
        <circle cx="270" cy="40" r="9" fill="#fef9c3" /><circle cx="274" cy="37" r="8" fill="#0f172a" />
        <g fill="#fff"><circle cx="235" cy="35" r="1.2" /><circle cx="248" cy="60" r="1" /><circle cx="282" cy="64" r="1.2" /></g>
        <rect y="${G}" width="320" height="${180 - G}" fill="#1e1b4b" />
      </g>
      <g class="s-prop" data-p="crowd">${crowd}</g>
      <g class="s-clouds">${[0, 1, 2].map(() => `<g class="s-cloud" opacity="0"><g fill="#fff" stroke="#cbd5e1"><ellipse rx="42" ry="11" /><circle cx="-20" cy="-6" r="9" /><circle cx="2" cy="-9" r="11" /><circle cx="22" cy="-5" r="8" /></g><text y="3.5" text-anchor="middle" font-size="9" font-weight="700" fill="#334155"></text></g>`).join("")}</g>
      <g class="s-prop" data-p="goal">${cqGoalSvg(284, 30, 50)}</g>
      <g class="s-prop" data-p="goalL"><g transform="translate(36 0) scale(-1 1)">${cqGoalSvg(0, 30, 50)}</g></g>
      <g class="s-prop" data-p="stairs">${stairs}<text x="306" y="${G - 52}" text-anchor="middle" font-size="16">🏆</text></g>
      <g class="s-prop" data-p="sofa">
        <rect x="40" y="${G - 52}" width="112" height="30" rx="9" fill="#7c3aed" />
        <rect x="36" y="${G - 26}" width="120" height="18" rx="6" fill="#8b5cf6" />
        <rect x="28" y="${G - 40}" width="16" height="32" rx="6" fill="#6d28d9" /><rect x="148" y="${G - 40}" width="16" height="32" rx="6" fill="#6d28d9" />
        <rect x="40" y="${G - 8}" width="6" height="8" fill="#4c1d95" /><rect x="146" y="${G - 8}" width="6" height="8" fill="#4c1d95" />
      </g>
      <g class="s-prop" data-p="bed">
        <rect x="22" y="${G - 58}" width="10" height="58" rx="3" fill="#a16207" />
        <rect x="30" y="${G - 24}" width="134" height="14" rx="4" fill="#f8fafc" />
        <rect x="96" y="${G - 27}" width="68" height="12" rx="4" fill="#60a5fa" />
        <ellipse cx="48" cy="${G - 28}" rx="14" ry="6" fill="#e2e8f0" />
        <rect x="30" y="${G - 10}" width="134" height="10" fill="#a16207" />
      </g>
      ${["ref", "coach", "keeper", "rival", "mate", "me"].filter((id) => ids.includes(id)).concat(ids.filter((id) => !["ref", "coach", "keeper", "rival", "mate", "me"].includes(id)))
        .map((id) => `<g class="s-act" data-id="${id}">${cqPlayerSvg(kits[st.cast[id].kit || id] || kits.mate)}</g>`).join("")}
      <g class="s-ball">${cqBallSvg(5)}</g>
      <text class="s-prop s-dyn" data-p="ice" font-size="13" text-anchor="middle">🧊</text>
      <g class="s-prop s-dyn" data-p="phone"><circle r="13" fill="#67e8f9" opacity=".35" /><text y="5" font-size="13" text-anchor="middle">📱</text></g>
      <text class="s-prop s-dyn" data-p="zzz" font-size="15" text-anchor="middle">💤</text>
      <text class="s-prop s-dyn" data-p="bird" font-size="16" text-anchor="middle">🐦</text>
      <rect class="s-prop s-dyn" data-p="spot" width="320" height="180" fill="#020617" opacity=".6" mask="url(#${uid}-m)" />
      <g class="s-sparks" opacity="0" font-size="16">
        <text x="40" y="40">✨</text><text x="270" y="30">✨</text><text x="120" y="22">⭐</text><text x="210" y="60">✨</text><text x="70" y="80">⭐</text>
      </g>
      <g class="s-think" opacity="0">
        <circle class="s-dot1" r="3" fill="#fff" stroke="#94a3b8" />
        <circle class="s-dot2" r="5" fill="#fff" stroke="#94a3b8" />
        <g class="s-cloudface">
          <ellipse rx="27" ry="23" fill="#fff" stroke="#94a3b8" />
          ${crew.map((id) => `<g class="s-face" data-id="${id}" opacity="0"><g transform="translate(0 -2) scale(.82)">${cqMindFace(id)}</g></g>`).join("")}
        </g>
        <rect class="s-think-box" rx="7" fill="#fff" stroke="#111" stroke-width="1" />
        <text class="s-think-text" text-anchor="middle" font-size="9" font-weight="700" fill="#111"></text>
      </g>
      <g class="s-say" opacity="0">
        <rect class="s-say-box" rx="7" fill="#fff" stroke="#111" stroke-width="1.2" />
        <path class="s-say-tail" fill="#fff" stroke="#111" stroke-width="1.2" />
        <text class="s-say-text" text-anchor="middle" font-size="12" font-weight="800" fill="#b91c1c"></text>
      </g>
      <rect class="s-dim" width="320" height="180" fill="#0f172a" opacity="0" />
      <text class="s-big" x="160" y="86" text-anchor="middle" font-size="34" font-weight="800" fill="#facc15" stroke="#111" stroke-width="1.5" opacity="0"></text>
      <text class="s-cap" x="160" y="167" text-anchor="middle" font-size="12" font-weight="700" fill="#fff"></text>
    </svg>`;

  const svg = box.querySelector("svg");
  const q = (s) => svg.querySelector(s);
  const qa = (s) => [...svg.querySelectorAll(s)];
  const actEls = Object.fromEntries(qa(".s-act").map((el) => [el.dataset.id, el]));
  const rigs = Object.fromEntries(ids.map((id) => [id, cqPlayerRig(actEls[id])]));
  const bgEls = qa(".s-bg");
  const propEls = qa(".s-prop");
  const dyn = Object.fromEntries(qa(".s-dyn").map((el) => [el.dataset.p, el]));
  const ballEl = q(".s-ball");
  const hole = q(".s-hole");
  const cloudEls = qa(".s-cloud");
  const think = q(".s-think");
  const cloudFace = q(".s-cloudface");
  const faceEls = Object.fromEntries(qa(".s-face").map((el) => [el.dataset.id, el]));
  const thinkBox = q(".s-think-box");
  const thinkText = q(".s-think-text");
  const say = q(".s-say");
  const sayBox = q(".s-say-box");
  const sayTail = q(".s-say-tail");
  const sayText = q(".s-say-text");
  const dim = q(".s-dim");
  const big = q(".s-big");
  const sparks = q(".s-sparks");
  const cap = q(".s-cap");

  /* ---------- Timeline: the state at the start and end of each beat ---------- */
  const ballOf = (b) => (b == null ? { hide: true } : typeof b === "string" ? { owner: b } : { x: b[0], y: b[1] });
  const SPOTS = { goal: [303, G - 8], goalL: [16, G - 8], over: [340, -14], wide: [338, G - 76] };
  const ballEnd = (to) => (Array.isArray(to) ? { x: to[0], y: to[1] } : SPOTS[to] ? { x: SPOTS[to][0], y: SPOTS[to][1] } : { owner: to });
  const init = {
    actors: Object.fromEntries(ids.map((id) => {
      const c = st.cast[id];
      return [id, { x: c.x, dir: c.dir || 1, pose: c.pose || "stand", lift: c.lift || 0, hide: !!c.hide }];
    })),
    ball: ballOf(st.ball),
    props: { ...(st.props || {}) },
    bg: st.bg || "pitch",
    think: null,
    cap: null,
    sparks: false,
  };
  const REWIND_CAP = ["⏪ Vamos de novo?", "⏪ Let's try again?", "⏪ ¿Otra vez?"];
  const next = (s, b) => {
    if (b.fx === "rewind") return { ...init, cap: b.cap || REWIND_CAP };
    const actors = Object.fromEntries(Object.entries(s.actors).map(([id, a]) => [id, a.pose === "kick" ? { ...a, pose: "stand" } : a]));
    Object.entries(b.a || {}).forEach(([id, m]) => {
      const a = actors[id];
      const moved = m.x != null && Math.abs(m.x - a.x) > 1;
      actors[id] = { x: m.x ?? a.x, dir: m.dir ?? a.dir, pose: m.pose ?? (moved ? "stand" : a.pose), lift: m.lift ?? a.lift, hide: m.hide ?? a.hide };
    });
    let ball = s.ball;
    if (b.ball) ball = b.ball.juggle ? { owner: b.ball.juggle, juggle: true } : b.ball.give ? { owner: b.ball.give } : ballEnd(b.ball.to);
    return {
      actors,
      ball,
      props: b.props ? { ...s.props, ...b.props } : s.props,
      bg: b.bg ?? s.bg,
      think: b.think !== undefined ? b.think : s.think,
      cap: b.cap ?? s.cap,
      sparks: b.sparks ?? s.sparks,
    };
  };
  const T = [];
  const starts = [];
  const ends = [];
  const bigs = [];
  let total = 0;
  let cur = init;
  st.beats.forEach((b) => {
    T.push(total);
    starts.push(cur);
    cur = next(cur, b);
    ends.push(cur);
    if (b.fx === "rewind") bigs.push({ at: total + 0.15, dur: b.d - 0.3, text: "⏪" });
    else if (b.big) bigs.push({ at: total + (b.bigAt || 0) * b.d, dur: b.bigFor || 1.4, text: b.big });
    total += b.d;
  });

  /* ---------- Drawing ---------- */
  const poseOf = (name, tt, k, ph) => {
    switch (name) {
      case "wave": return { pose: { ...P.stand, armF: [-150 - Math.sin(tt * 8) * 18, -15] } };
      case "cheer": {
        const up = Math.abs(Math.sin(tt * 5 + ph));
        return { pose: cqMixPose(P.stand, CQS_JUMP, up), lift: up * 12 };
      }
      case "kick": return { pose: k < 0.5 ? cqMixPose(P.ready, P.kickBack, k * 2) : cqMixPose(P.kickBack, P.kickHit, k * 2 - 1) };
      case "argue": {
        const s = Math.sin(tt * 9);
        return { pose: { ...P.stand, lean: -4, armF: [-80 - s * 40, -40], armB: [-60 + s * 40, -40] } };
      }
      case "juggle": return { pose: cqMixPose(P.stand, CQS_POSES.juggleUp, (1 - Math.abs(Math.sin(tt * 4))) ** 3) };
      default: return { pose: CQS_POSES[name] || P[name] || P.stand };
    }
  };

  const drawActor = (id, b, a0, a1, lt, tt, mode, ph) => {
    const m = b.a?.[id];
    const moves = Math.abs(a1.x - a0.x) > 1;
    let k;
    if (mode === "rewind") k = lt >= b.d / 2 ? 1 : 0;
    else if (mode === "cut") k = 1;
    else {
      const t0 = (m?.t0 || 0) * b.d;
      const dur = m?.t1 != null ? (m.t1 - (m.t0 || 0)) * b.d : moves || m?.hop || Math.abs(a1.lift - a0.lift) > 1 ? b.d - t0 : Math.min(0.3, b.d);
      k = cqClamp01((lt - t0) / Math.max(0.01, dur));
    }
    const e = cqEase(k);
    const hide = k >= 0.5 ? a1.hide : a0.hide;
    actEls[id].style.display = hide ? "none" : "";
    const x = cqLerp(a0.x, a1.x, e);
    const dir = k > 0 ? a1.dir : a0.dir;
    let lift = cqLerp(a0.lift, a1.lift, e);
    let pose;
    if (m?.hop && k > 0 && k < 1) {
      lift += 4 * m.hop * k * (1 - k);
      pose = CQS_JUMP;
    } else if (moves && k > 0 && k < 1 && !m?.glide) pose = cqRunPose(x / 7);
    else {
      const p1 = poseOf(a1.pose, tt, m ? k : 1, ph);
      if (a0.pose === a1.pose || k >= 1 || moves) {
        pose = p1.pose;
        lift += p1.lift || 0;
      } else {
        const p0 = poseOf(a0.pose, tt, 1, ph);
        pose = a1.pose === "kick" ? p1.pose : cqMixPose(p0.pose, p1.pose, e);
        lift += cqLerp(p0.lift || 0, p1.lift || 0, e);
      }
    }
    const shake = a1.pose === "pain" && k >= 1 ? Math.sin(tt * 40) * 0.7 : 0;
    rigs[id].pose(x + shake, dir, pose, lift);
    return { x, dir, lift, hide, pose: k >= 0.5 ? a1.pose : a0.pose };
  };

  const ballAt = (bs, pos, tt) => {
    if (!bs || bs.hide) return null;
    if (bs.owner) {
      const o = pos[bs.owner];
      if (bs.juggle) return { x: o.x + 10 * o.dir, y: G - 12 - Math.abs(Math.sin(tt * 4)) * 38 - o.lift };
      return { x: o.x + 12 * o.dir, y: G - 5 };
    }
    return { x: bs.x, y: bs.y };
  };

  let thinkShown = "";
  const setThink = (th, k, pos, tt) => {
    if (!th || k <= 0) return think.setAttribute("opacity", 0);
    const anchor = pos[th[2] || "me"];
    const text = txt(th[1]);
    if (thinkShown !== th[0] + text) {
      thinkShown = th[0] + text;
      crew.forEach((id) => faceEls[id].setAttribute("opacity", id === th[0] ? 1 : 0));
      const lines = cqWrap(text, 18).slice(0, 3);
      thinkText.innerHTML = lines.map((l, i) => `<tspan x="0" dy="${i ? 10.5 : 0}">${l}</tspan>`).join("");
      thinkBox.dataset.w = Math.max(...lines.map((l) => l.length)) * 5.1 + 14;
      thinkBox.dataset.h = lines.length * 10.5 + 8;
    }
    const w = +thinkBox.dataset.w;
    const h = +thinkBox.dataset.h;
    const cx = Math.max(32, Math.min(288, anchor.x - 6));
    const sx = cx + 30 + w <= 316 ? cx + 30 : cx - 30 - w;
    thinkBox.setAttribute("width", w);
    thinkBox.setAttribute("height", h);
    thinkBox.setAttribute("x", sx);
    thinkBox.setAttribute("y", 10);
    thinkText.setAttribute("transform", `translate(${sx + w / 2} 22)`);
    const s = 0.4 + 0.6 * cqEase(Math.min(1, k));
    cloudFace.setAttribute("transform", `translate(${cx} ${(30 + Math.sin(tt * 2.5) * 1.5).toFixed(1)}) scale(${s.toFixed(3)})`);
    const headY = Math.min(76, G - 92 - anchor.lift);
    const d1 = q(".s-dot1");
    const d2 = q(".s-dot2");
    d1.setAttribute("cx", cqLerp(anchor.x, cx, 0.3));
    d1.setAttribute("cy", Math.max(52, headY));
    d2.setAttribute("cx", cqLerp(anchor.x, cx, 0.65));
    d2.setAttribute("cy", Math.max(48, headY - 6));
    think.setAttribute("opacity", Math.min(1, k * 1.5));
  };

  let sayShown = "";
  const setSay = (sy, k, pos) => {
    if (!sy || k <= 0) return say.setAttribute("opacity", 0);
    const p = pos[sy[0]];
    const text = txt(sy[1]);
    if (sayShown !== text) {
      sayShown = text;
      sayText.textContent = text;
      sayBox.dataset.w = text.length * 7.2 + 16;
    }
    const w = +sayBox.dataset.w;
    const h = 22;
    const bx = Math.max(4, Math.min(316 - w, p.x - w / 2 + 20));
    const by = Math.max(4, G - 112 - p.lift - h);
    sayBox.setAttribute("x", bx);
    sayBox.setAttribute("y", by);
    sayBox.setAttribute("width", w);
    sayBox.setAttribute("height", h);
    sayText.setAttribute("x", bx + w / 2);
    sayText.setAttribute("y", by + 15.5);
    const tx = Math.max(bx + 8, Math.min(bx + w - 8, p.x + 6));
    sayTail.setAttribute("d", `M${tx - 5} ${by + h - 1} L${tx + 5} ${by + h - 1} L${p.x + 4} ${G - 96 - p.lift} Z`);
    say.setAttribute("opacity", Math.min(1, k * 3));
  };

  let ended = false;
  let lastCap = null;
  return cqLoop((tt) => {
    if (!ended && tt >= total) {
      ended = true;
      opts.onEnd?.();
    }
    let i = st.beats.length - 1;
    for (let j = 0; j < st.beats.length; j++) {
      if (tt < T[j] + st.beats[j].d) {
        i = j;
        break;
      }
    }
    const b = st.beats[i];
    const lt = Math.min(b.d, tt - T[i]);
    const u = lt / b.d;
    const s0 = starts[i];
    const s1 = ends[i];
    const mode = b.fx || "";
    const view = mode === "rewind" && u < 0.5 ? s0 : s1;

    bgEls.forEach((el) => { el.style.display = el.dataset.bg === view.bg ? "" : "none"; });
    propEls.forEach((el) => { el.style.display = view.props[el.dataset.p] ? "" : "none"; });

    const pos = {};
    ids.forEach((id, n) => { pos[id] = drawActor(id, b, s0.actors[id], s1.actors[id], lt, tt, mode, n * 1.3); });

    // Ball: flies during the beat's window, otherwise sits with its owner or where it stopped.
    let bp;
    const bb = b.ball;
    if (mode !== "rewind" && bb && bb.to != null) {
      const w0 = (bb.t0 || 0) * b.d;
      const w1 = (bb.t1 ?? 1) * b.d;
      const fu = cqClamp01((lt - w0) / Math.max(0.01, w1 - w0));
      const from = ballAt(s0.ball, pos, tt) || ballAt(s1.ball, pos, tt);
      const to = ballAt(s1.ball, pos, tt);
      const p = cqArc(from.x, from.y, to.x, to.y, bb.h || 0, fu);
      bp = { x: p.x, y: p.y, spin: fu * 720 };
    } else if (mode !== "rewind" && bb?.give && lt < (bb.t0 || 0) * b.d) bp = ballAt(s0.ball, pos, tt);
    else bp = ballAt(view.ball, pos, tt);
    ballEl.style.display = bp ? "" : "none";
    if (bp) ballEl.setAttribute("transform", `translate(${bp.x.toFixed(1)},${bp.y.toFixed(1)}) rotate(${(bp.spin ?? bp.x * 9).toFixed(0)})`);

    // Props that follow someone.
    const me = pos.me;
    if (view.props.zzz) {
      const lying = me.pose === "lie";
      dyn.zzz.setAttribute("x", lying ? me.x - 30 * me.dir : me.x + 10);
      dyn.zzz.setAttribute("y", (lying ? G - 40 - me.lift : G - 100 - me.lift) + Math.sin(tt * 2) * 3);
    }
    if (view.props.phone) dyn.phone.setAttribute("transform", `translate(${me.x + 16 * me.dir} ${G - 46 - me.lift})`);
    if (view.props.ice) {
      dyn.ice.setAttribute("x", me.x + 12 * me.dir);
      dyn.ice.setAttribute("y", G - 4 - me.lift);
    }
    if (view.props.bird) {
      dyn.bird.setAttribute("x", (340 - ((tt * 55) % 400)).toFixed(1));
      dyn.bird.setAttribute("y", (64 + Math.sin(tt * 3) * 6).toFixed(1));
    }
    if (view.props.spot) {
      const c = bp || me;
      hole.setAttribute("cx", c.x);
      hole.setAttribute("cy", c.y ?? G - 5);
    }

    // Thought clouds drifting across the sky.
    cloudEls.forEach((el, j) => {
      const list = mode === "rewind" ? null : b.clouds;
      if (!list || j >= list.length) return el.setAttribute("opacity", 0);
      const start = (j * b.d) / (list.length + 0.6);
      const cu = (lt - start) / (b.d * 0.75);
      if (cu < 0 || cu > 1) return el.setAttribute("opacity", 0);
      el.querySelector("text").textContent = txt(list[j]);
      el.setAttribute("transform", `translate(${cqLerp(360, -50, cu).toFixed(1)} ${32 + (j % 2) * 24})`);
      el.setAttribute("opacity", Math.min(1, cu * 6, (1 - cu) * 6));
    });

    // Thought bubble: pops in when the one in charge changes, fades out when it goes away.
    const th0 = s0.think;
    const th1 = mode === "rewind" ? null : s1.think;
    if (th1 && th1 === th0) setThink(th1, 1, pos, tt);
    else if (th1) setThink(th1, cqClamp01(lt / 0.45), pos, tt);
    else setThink(th0, 1 - cqClamp01(lt / 0.35), pos, tt);
    setSay(mode === "rewind" ? null : b.say, cqClamp01((lt - 0.05) / 0.2), pos);

    dim.setAttribute("opacity", mode === "rewind" ? (0.85 * Math.sin(Math.PI * u)).toFixed(2) : 0);
    sparks.setAttribute("opacity", view.sparks ? (0.6 + 0.4 * Math.sin(tt * 6)).toFixed(2) : 0);
    const ev = bigs.filter((e) => tt >= e.at && tt < e.at + e.dur).pop();
    if (ev) {
      const pop = cqClamp01((tt - ev.at) / 0.3);
      big.textContent = txt(ev.text);
      big.setAttribute("opacity", Math.min(1, (ev.at + ev.dur - tt) / 0.25).toFixed(2));
      big.setAttribute("transform", `translate(160 72) scale(${(0.6 + 0.4 * pop).toFixed(2)}) translate(-160 -72)`);
    } else big.setAttribute("opacity", 0);

    const capText = txt(view.cap);
    if (capText !== lastCap) cap.textContent = lastCap = capText;
  });
});
