const NUTRITION = {
  pt: {
    kicker: "Nutrição esportiva",
    title: "Alimentação que forma atletas",
    lead: "O talento aparece em campo, mas é construído também no prato. Bons hábitos desde a infância fazem diferença em toda a carreira.",
    pillarsTitle: "Os 3 pilares de toda refeição",
    pillarsLead: "Em cada refeição, procure ter as três fontes no prato.",
    pillars: [
      {
        name: "Carboidratos",
        role: "Energia para treinar, jogar e pensar rápido.",
        foods: "Arroz, feijão, batata, mandioca, macarrão, aveia, pão, frutas.",
      },
      {
        name: "Proteínas",
        role: "Constroem e recuperam os músculos.",
        foods: "Ovos, frango, carne, peixe, sardinha, leite, iogurte, feijão, lentilha.",
      },
      {
        name: "Gorduras boas",
        role: "Mais energia e saúde.",
        foods: "Ovo, abacate, amendoim, linhaça, azeite em pouca quantidade.",
      },
    ],
    agesTitle: "Em cada fase da vida",
    ages: [
      {
        range: "Até 10 anos",
        title: "Infância",
        points: [
          "É a fase de formar o paladar e os hábitos para a vida toda.",
          "Prato colorido no almoço e no jantar: arroz, feijão, uma proteína e legumes.",
          "Água como bebida principal. Suco de caixinha e refrigerante, não.",
        ],
      },
      {
        range: "11 a 14 anos",
        title: "Pré-adolescência",
        points: [
          "O corpo começa a crescer rápido e pede mais energia.",
          "Não pular refeições: fome no treino derruba o rendimento.",
          "Lanches simples entre as refeições: fruta, pão com ovo, iogurte.",
          "Leite e derivados ajudam os ossos, que estão em formação.",
        ],
      },
      {
        range: "15 a 17 anos",
        title: "Adolescência",
        points: [
          "Treinos mais intensos exigem mais carboidrato e proteína.",
          "Proteína distribuída no dia: um pouco em cada refeição.",
          "É a idade das tentações (fast food, doces). A disciplina fora de campo começa aqui.",
          "Suplementos só com orientação profissional. Comida de verdade vem primeiro.",
        ],
      },
      {
        range: "18 anos ou mais",
        title: "Fase adulta",
        points: [
          "A alimentação passa a ser parte do trabalho, como o treino.",
          "Ajustar as quantidades à carga de treinos e jogos da semana.",
          "Recuperação é decisiva: comer bem depois do esforço evita lesões.",
          "Bons hábitos prolongam a carreira.",
        ],
      },
    ],
    mealsTitle: "O que comer no dia a dia",
    mealsLead: "Apenas exemplos. Varie os itens e monte o prato com os 3 pilares.",
    meals: [
      {
        name: "Café da manhã",
        foods: "Pão integral, bolo caseiro saudável, tapioca, cuscuz, frutas, leite, queijo, ovo, sanduíche de frango ou carne.",
      },
      {
        name: "Almoço",
        foods: "Arroz, feijão, macarrão, batata ou mandioca. Frango, carne, peixe ou ovo. Salada e legumes.",
      },
      { name: "Café da tarde", foods: "Mesmas opções do café da manhã." },
      { name: "Jantar", foods: "Mesmas opções do almoço." },
    ],
    gameTitle: "Antes e depois de jogos e treinos",
    before: {
      title: "Antes",
      points: [
        "Refeição completa 2 a 3 horas antes, com carboidrato em destaque (arroz, macarrão, batata).",
        "Evite frituras e excesso de gordura antes do esforço: deixam a digestão lenta.",
        "Se faltar tempo, um lanche leve 30 a 60 minutos antes: banana, pão.",
      ],
    },
    after: {
      title: "Depois",
      points: [
        "Coma em até 1 a 2 horas: carboidrato para repor energia e proteína para recuperar o músculo.",
        "Exemplo simples: arroz, feijão, ovo ou frango e salada.",
        "Dormir bem completa a recuperação.",
      ],
    },
    hydration: {
      title: "Hidratação",
      points: [
        "Beba água ao longo do dia todo, não só na hora do treino.",
        "Chegue ao jogo já hidratado e beba pequenos goles nos intervalos.",
        "Depois, reponha o que perdeu no suor. Urina clara é sinal de boa hidratação.",
      ],
    },
    cheapTitle: "Comer bem não precisa ser caro",
    cheapLead: "Os melhores alimentos para o atleta estão entre os mais baratos do mercado.",
    cheap: [
      { group: "Carboidratos", foods: "Arroz, feijão, batata, mandioca, aveia, frutas, fubá." },
      { group: "Proteínas", foods: "Ovos, frango, sardinha em lata, feijão, lentilha, leite." },
      { group: "Gorduras boas", foods: "Ovo, amendoim, abacate da época, linhaça." },
    ],
    avoidTitle: "Corte da rotina",
    avoidLead: "Atrapalham o rendimento, a recuperação e a saúde, em qualquer idade.",
    avoid: ["Bolachas e biscoitos recheados", "Açúcar", "Refrigerantes", "Doces", "Sucos de caixinha", "Salgadinhos de pacote"],
    note: "Conteúdo educativo. Para um plano individual, procure um nutricionista.",
  },

  en: {
    kicker: "Sports nutrition",
    title: "Food that builds athletes",
    lead: "Talent shows on the pitch, but it is also built on the plate. Good habits from childhood make a difference throughout a career.",
    pillarsTitle: "The 3 pillars of every meal",
    pillarsLead: "At every meal, try to have all three on the plate.",
    pillars: [
      {
        name: "Carbohydrates",
        role: "Energy to train, play and think fast.",
        foods: "Rice, beans, potatoes, cassava, pasta, oats, bread, fruit.",
      },
      {
        name: "Proteins",
        role: "Build and repair muscle.",
        foods: "Eggs, chicken, meat, fish, sardines, milk, yogurt, beans, lentils.",
      },
      {
        name: "Healthy fats",
        role: "More energy and health.",
        foods: "Eggs, avocado, peanuts, flaxseed, a little olive oil.",
      },
    ],
    agesTitle: "At every stage of life",
    ages: [
      {
        range: "Up to 10",
        title: "Childhood",
        points: [
          "This is when taste and lifelong habits are formed.",
          "A colourful plate at lunch and dinner: rice, beans, a protein and vegetables.",
          "Water as the main drink. No boxed juice or soda.",
        ],
      },
      {
        range: "11 to 14",
        title: "Pre-teens",
        points: [
          "The body starts growing fast and needs more energy.",
          "Don't skip meals: hunger at training kills performance.",
          "Simple snacks between meals: fruit, bread with egg, yogurt.",
          "Milk and dairy help growing bones.",
        ],
      },
      {
        range: "15 to 17",
        title: "Teenagers",
        points: [
          "Harder training needs more carbohydrate and protein.",
          "Spread protein across the day: some at every meal.",
          "This is the age of temptation (fast food, sweets). Discipline off the pitch starts here.",
          "Supplements only with professional advice. Real food comes first.",
        ],
      },
      {
        range: "18 and over",
        title: "Adults",
        points: [
          "Food becomes part of the job, just like training.",
          "Adjust portions to the week's training and match load.",
          "Recovery is key: eating well after effort helps prevent injuries.",
          "Good habits extend a career.",
        ],
      },
    ],
    mealsTitle: "What to eat every day",
    mealsLead: "Just examples. Vary the items and build the plate with the 3 pillars.",
    meals: [
      {
        name: "Breakfast",
        foods: "Wholegrain bread, healthy homemade cake, tapioca, couscous, fruit, milk, cheese, eggs, chicken or meat sandwich.",
      },
      {
        name: "Lunch",
        foods: "Rice, beans, pasta, potatoes or cassava. Chicken, meat, fish or eggs. Salad and vegetables.",
      },
      { name: "Afternoon snack", foods: "Same options as breakfast." },
      { name: "Dinner", foods: "Same options as lunch." },
    ],
    gameTitle: "Before and after matches and training",
    before: {
      title: "Before",
      points: [
        "A full meal 2 to 3 hours before, with carbohydrate as the main item (rice, pasta, potatoes).",
        "Avoid fried and fatty food before effort: it slows digestion.",
        "Short on time? A light snack 30 to 60 minutes before: banana, bread.",
      ],
    },
    after: {
      title: "After",
      points: [
        "Eat within 1 to 2 hours: carbohydrate to refuel and protein to repair muscle.",
        "Simple example: rice, beans, egg or chicken and salad.",
        "Good sleep completes recovery.",
      ],
    },
    hydration: {
      title: "Hydration",
      points: [
        "Drink water throughout the day, not only at training time.",
        "Arrive at the match already hydrated and take small sips during breaks.",
        "Afterwards, replace what you lost in sweat. Pale urine is a sign of good hydration.",
      ],
    },
    cheapTitle: "Eating well doesn't have to be expensive",
    cheapLead: "The best foods for athletes are among the cheapest in the store.",
    cheap: [
      { group: "Carbohydrates", foods: "Rice, beans, potatoes, cassava, oats, fruit, cornmeal." },
      { group: "Proteins", foods: "Eggs, chicken, canned sardines, beans, lentils, milk." },
      { group: "Healthy fats", foods: "Eggs, peanuts, seasonal avocado, flaxseed." },
    ],
    avoidTitle: "Cut from your routine",
    avoidLead: "They hurt performance, recovery and health, at any age.",
    avoid: ["Cookies and cream biscuits", "Sugar", "Soft drinks", "Sweets", "Boxed juices", "Packaged snacks"],
    note: "Educational content. For an individual plan, see a nutritionist.",
  },

  es: {
    kicker: "Nutrición deportiva",
    title: "Alimentación que forma atletas",
    lead: "El talento aparece en el campo, pero también se construye en el plato. Los buenos hábitos desde la infancia marcan la diferencia en toda la carrera.",
    pillarsTitle: "Los 3 pilares de cada comida",
    pillarsLead: "En cada comida, intenta tener las tres fuentes en el plato.",
    pillars: [
      {
        name: "Carbohidratos",
        role: "Energía para entrenar, jugar y pensar rápido.",
        foods: "Arroz, frijoles, papa, yuca, pasta, avena, pan, frutas.",
      },
      {
        name: "Proteínas",
        role: "Construyen y recuperan los músculos.",
        foods: "Huevos, pollo, carne, pescado, sardina, leche, yogur, frijoles, lentejas.",
      },
      {
        name: "Grasas buenas",
        role: "Más energía y salud.",
        foods: "Huevo, aguacate, maní, linaza, aceite de oliva en poca cantidad.",
      },
    ],
    agesTitle: "En cada etapa de la vida",
    ages: [
      {
        range: "Hasta 10 años",
        title: "Infancia",
        points: [
          "Es la etapa en la que se forman el gusto y los hábitos para toda la vida.",
          "Plato colorido en el almuerzo y la cena: arroz, frijoles, una proteína y verduras.",
          "Agua como bebida principal. Jugos de caja y refrescos, no.",
        ],
      },
      {
        range: "11 a 14 años",
        title: "Preadolescencia",
        points: [
          "El cuerpo empieza a crecer rápido y pide más energía.",
          "No saltarse comidas: el hambre en el entrenamiento baja el rendimiento.",
          "Meriendas simples entre comidas: fruta, pan con huevo, yogur.",
          "La leche y sus derivados ayudan a los huesos en formación.",
        ],
      },
      {
        range: "15 a 17 años",
        title: "Adolescencia",
        points: [
          "Entrenamientos más intensos exigen más carbohidrato y proteína.",
          "Proteína repartida en el día: un poco en cada comida.",
          "Es la edad de las tentaciones (comida rápida, dulces). La disciplina fuera del campo empieza aquí.",
          "Suplementos solo con orientación profesional. La comida de verdad va primero.",
        ],
      },
      {
        range: "18 años o más",
        title: "Etapa adulta",
        points: [
          "La alimentación pasa a ser parte del trabajo, como el entrenamiento.",
          "Ajustar las cantidades a la carga de entrenamientos y partidos de la semana.",
          "La recuperación es decisiva: comer bien después del esfuerzo ayuda a evitar lesiones.",
          "Los buenos hábitos alargan la carrera.",
        ],
      },
    ],
    mealsTitle: "Qué comer en el día a día",
    mealsLead: "Solo ejemplos. Varía los alimentos y arma el plato con los 3 pilares.",
    meals: [
      {
        name: "Desayuno",
        foods: "Pan integral, bizcocho casero saludable, tapioca, cuscús, frutas, leche, queso, huevo, sándwich de pollo o carne.",
      },
      {
        name: "Almuerzo",
        foods: "Arroz, frijoles, pasta, papa o yuca. Pollo, carne, pescado o huevo. Ensalada y verduras.",
      },
      { name: "Merienda", foods: "Las mismas opciones del desayuno." },
      { name: "Cena", foods: "Las mismas opciones del almuerzo." },
    ],
    gameTitle: "Antes y después de partidos y entrenamientos",
    before: {
      title: "Antes",
      points: [
        "Comida completa 2 a 3 horas antes, con el carbohidrato como protagonista (arroz, pasta, papa).",
        "Evita frituras y exceso de grasa antes del esfuerzo: hacen lenta la digestión.",
        "Si falta tiempo, una merienda ligera 30 a 60 minutos antes: plátano, pan.",
      ],
    },
    after: {
      title: "Después",
      points: [
        "Come en 1 a 2 horas: carbohidrato para reponer energía y proteína para recuperar el músculo.",
        "Ejemplo simple: arroz, frijoles, huevo o pollo y ensalada.",
        "Dormir bien completa la recuperación.",
      ],
    },
    hydration: {
      title: "Hidratación",
      points: [
        "Bebe agua durante todo el día, no solo a la hora del entrenamiento.",
        "Llega al partido ya hidratado y toma pequeños sorbos en las pausas.",
        "Después, repón lo que perdiste en el sudor. La orina clara es señal de buena hidratación.",
      ],
    },
    cheapTitle: "Comer bien no tiene que ser caro",
    cheapLead: "Los mejores alimentos para el atleta están entre los más baratos del mercado.",
    cheap: [
      { group: "Carbohidratos", foods: "Arroz, frijoles, papa, yuca, avena, frutas, harina de maíz." },
      { group: "Proteínas", foods: "Huevos, pollo, sardina en lata, frijoles, lentejas, leche." },
      { group: "Grasas buenas", foods: "Huevo, maní, aguacate de temporada, linaza." },
    ],
    avoidTitle: "Fuera de la rutina",
    avoidLead: "Perjudican el rendimiento, la recuperación y la salud, a cualquier edad.",
    avoid: ["Galletas rellenas", "Azúcar", "Refrescos", "Dulces", "Jugos de caja", "Snacks de paquete"],
    note: "Contenido educativo. Para un plan individual, consulta a un nutricionista.",
  },
};

function renderNutrition() {
  const root = document.getElementById("nutrition");
  if (!root) return;

  const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

  function draw() {
    const c = NUTRITION[I18N.lang] || NUTRITION.pt;
    document.title = `${c.title} — RENATO SCOUT`;
    root.innerHTML = `
      <section class="hero nutri-hero">
        <div class="wrap hero-content">
          <p class="hero-kicker">${c.kicker}</p>
          <h1>${c.title}</h1>
          <p class="hero-lead">${c.lead}</p>
        </div>
      </section>

      <section>
        <div class="wrap">
          <div class="section-head">
            <h2>${c.pillarsTitle}</h2>
            <p class="muted">${c.pillarsLead}</p>
          </div>
          <div class="nutri-pillars">
            ${c.pillars
              .map(
                (p, i) => `
              <article class="nutri-pillar p${i + 1}">
                <h3>${p.name}</h3>
                <p>${p.role}</p>
                <small>${p.foods}</small>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section>
        <div class="wrap">
          <div class="section-head"><h2>${c.agesTitle}</h2></div>
          <div class="nutri-ages">
            ${c.ages
              .map(
                (a) => `
              <article class="nutri-age">
                <span class="nutri-range">${a.range}</span>
                <h3>${a.title}</h3>
                ${list(a.points)}
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section>
        <div class="wrap">
          <div class="section-head">
            <h2>${c.mealsTitle}</h2>
            <p class="muted">${c.mealsLead}</p>
          </div>
          <div class="nutri-meals">
            ${c.meals
              .map(
                (m, i) => `
              <article class="nutri-meal">
                <span class="nutri-range">${String(i + 1).padStart(2, "0")}</span>
                <h3>${m.name}</h3>
                <p>${m.foods}</p>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section>
        <div class="wrap">
          <div class="section-head"><h2>${c.gameTitle}</h2></div>
          <div class="nutri-game">
            ${[c.before, c.after, c.hydration]
              .map(
                (b) => `
              <article class="card">
                <h3>${b.title}</h3>
                ${list(b.points)}
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section>
        <div class="wrap nutri-split">
          <article class="nutri-box is-good">
            <h2>${c.cheapTitle}</h2>
            <p class="muted">${c.cheapLead}</p>
            <dl>
              ${c.cheap.map((g) => `<dt>${g.group}</dt><dd>${g.foods}</dd>`).join("")}
            </dl>
          </article>
          <article class="nutri-box is-bad">
            <h2>${c.avoidTitle}</h2>
            <p class="muted">${c.avoidLead}</p>
            <ul class="nutri-avoid">${c.avoid.map((i) => `<li>${i}</li>`).join("")}</ul>          </article>
        </div>
        <p class="wrap nutri-note">${c.note}</p>
      </section>
    `;
  }

  draw();
  document.addEventListener("rs:lang", draw);
}
