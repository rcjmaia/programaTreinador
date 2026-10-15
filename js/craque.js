// Untrained attributes sit at CQ_BASE and reach CQ_SCORE.max with the top medal
// in every mission that trains them. "quality" is the weight of how good the
// medals are; the rest rewards how many of those missions have any medal.
// A new mission for an attribute lowers it a little until it is done.
const CQ_BASE = 40;
const CQ_SCORE = { max: 92, quality: 0.7 };
const CQ_XP = { normal: 10, daily: 20, perLevel: 100 };

// The first six follow the FIFA card; "int" and "cab" are the academy's own groups.
const CQ_ATTRS = [
  { id: "rit", subs: ["acceleration", "sprint"] },
  { id: "fin", subs: ["attpos", "finishing", "power", "longshots", "volleys", "penalties", "freekick", "headfin"] },
  { id: "pas", subs: ["vision", "cross", "short", "long", "curve"] },
  { id: "con", subs: ["agility", "balance", "reactions", "control", "carry", "dribble", "composure"] },
  { id: "def", subs: ["interceptions", "heading", "awareness", "standing", "sliding"] },
  { id: "fis", subs: ["jumping", "stamina", "strength", "combat"] },
  { id: "int", subs: ["positioning", "recovery", "reading", "decision", "teamplay", "communication"] },
  { id: "cab", subs: ["concentration", "courage", "resilience", "confidence", "discipline", "fairplay"] },
  { id: "gol", subs: ["gkdiving", "gkhandling", "gkkicking", "gkreflexes", "gkpositioning"] },
];
// The goalkeeping group only counts towards the overall of players whose position is goalkeeper.
const CQ_GK_GROUP = "gol";

const CQ_SHIRTS = ["#2563eb", "#dc2626", "#16a34a", "#f59e0b", "#111827"];
const CQ_SKINS = ["#f6d3b3", "#d9a273", "#a86b3c", "#6b4226"];

const CQ_TEXT = {
  pt: {
    title: "Craque de Bola",
    setupTitle: "Crie sua carta de jogador",
    name: "Seu nome",
    number: "Número",
    position: "Posição",
    shirt: "Cor da camisa",
    skin: "Cor da pele",
    promise: "Prometo marcar só o que eu fizer de verdade. Palavra de craque!",
    create: "Criar minha carta",
    level: "Nível",
    streak: "dias seguidos",
    flipHint: "Toque na carta para ver todos os atributos",
    daily: "Missões do dia",
    dailyHint: "XP em dobro",
    trails: "Trilhas",
    lowerHint: "Aqui, quanto menor o número, melhor.",
    helper: "👥 Precisa de outra pessoa",
    games: "Joguinhos",
    freeTraining: "Treino livre",
    phase: "Fase {n}",
    lockedHint: "Bloqueada: faça a missão da fase anterior.",
    pickMission: "Escolha a missão",
    go: "Vai!",
    sound: "Som ligado/desligado",
    watch: "▶ Ver animação",
    hideAnim: "Esconder animação",
    steps: "passos",
    unlocked: "Nova fase liberada! Veja nas Trilhas.",
    autoInfo: "Essa missão sobe sozinha: é só treinar em dias seguidos.",
    noCloud: "O banco de dados não está configurado. Fale com o Renato.",
    saveError: "Não consegui salvar. Confira a internet e tente de novo.",
    record: "Recorde",
    notDone: "Ainda não feita",
    types: { ball: "Com bola", move: "Movimento", quiz: "Jogo", mind: "Cabeça", auto: "Automática" },
    howMany: "Seu resultado ({unit})",
    save: "Salvar resultado",
    start: "Iniciar",
    meetCrew: "Conheça a turma",
    blokSwap: "🔀 TROCOU! 🔀",
    stop: "Parar",
    restart: "Recomeçar",
    rainOnly: "Toque só nas bolas {c}",
    rainAvoid: "Toque em todas, menos nas {c}",
    rainOnlyShort: "Só {c}",
    rainAvoidShort: "Menos {c}",
    dodgeHint: "👆 Toque p/ trocar",
    rainColors: { red: "VERMELHAS", blue: "AZUIS", yellow: "AMARELAS", green: "VERDES" },
    time: "Tempo!",
    newRecord: "Novo recorde!",
    keepGoing: "Seu recorde é {n}. Você consegue bater!",
    gains: "Você ganhou",
    back: "Voltar para a carta",
    question: "Pergunta {i} de {n}",
    next: "Próxima",
    finish: "Ver resultado",
    correct: "Isso aí!",
    wrong: "Quase!",
    breathIn: "Puxa o ar",
    breathOut: "Solta o ar",
    reset: "Recomeçar do zero",
    resetConfirm: "Apagar sua carta e começar de novo?",
    medals: ["Bronze", "Prata", "Ouro", "Lenda"],
    noMedal: "Sem medalha",
    attrs: { rit: ["RIT", "Ritmo"], fin: ["FIN", "Finalização"], pas: ["PAS", "Passes"], con: ["TEC", "Técnica"], def: ["DEF", "Defesa"], fis: ["FIS", "Físico"], int: ["INT", "Inteligência"], cab: ["MEN", "Mental"], gol: ["GOL", "Goleiro"] },
    positions: { gk: "GOL", cb: "ZAG", fb: "LAT", dm: "VOL", am: "MEI", st: "ATA" },
    foot: "Pé preferido",
    feet: { right: "Direito", left: "Esquerdo" },
    bothFeet: "Dois pés",
    skillMoves: "Habilidade",
    details: "Atributos",
    login: "Entrar",
    signup: "Criar conta",
    username: "Nome de usuário",
    email: "E-mail",
    password: "Senha (mínimo 6 caracteres)",
    usernameTaken: "Esse nome de usuário já está em uso.",
    emailTaken: "Esse e-mail já tem conta. Use Entrar.",
    emailInvalid: "Esse e-mail não é válido.",
    authError: "Não deu certo. Confira o e-mail e a senha.",
    confirmEmail: "Conta criada! Confirme o e-mail para entrar.",
    minorNote: "Tem menos de 18 anos? Peça para um adulto criar a conta com você.",
    loading: "Carregando...",
    logout: "Sair",
  },
  en: {
    title: "Football Star",
    setupTitle: "Create your player card",
    name: "Your name",
    number: "Number",
    position: "Position",
    shirt: "Shirt colour",
    skin: "Skin tone",
    promise: "I promise to log only what I really did. Player's word!",
    create: "Create my card",
    level: "Level",
    streak: "day streak",
    flipHint: "Tap the card to see all attributes",
    daily: "Today's missions",
    dailyHint: "Double XP",
    trails: "Trails",
    lowerHint: "Here, the lower the number, the better.",
    helper: "👥 Needs another person",
    games: "Mini-games",
    freeTraining: "Free training",
    phase: "Stage {n}",
    lockedHint: "Locked: do the mission of the previous stage.",
    pickMission: "Pick a mission",
    go: "Go!",
    sound: "Sound on/off",
    watch: "▶ Watch animation",
    hideAnim: "Hide animation",
    steps: "steps",
    unlocked: "New stage unlocked! Check your Trails.",
    autoInfo: "This mission goes up by itself: just train on consecutive days.",
    noCloud: "The database is not set up yet.",
    saveError: "Couldn't save. Check your connection and try again.",
    record: "Best",
    notDone: "Not done yet",
    types: { ball: "With ball", move: "Movement", quiz: "Game", mind: "Mind", auto: "Automatic" },
    howMany: "How many {unit} did you get?",
    save: "Save result",
    start: "Start",
    meetCrew: "Meet the crew",
    blokSwap: "🔀 SWAP! 🔀",
    stop: "Stop",
    restart: "Restart",
    rainOnly: "Tap only the {c} balls",
    rainAvoid: "Tap every ball except {c}",
    rainOnlyShort: "Only {c}",
    rainAvoidShort: "Not {c}",
    dodgeHint: "👆 Tap to switch",
    rainColors: { red: "RED", blue: "BLUE", yellow: "YELLOW", green: "GREEN" },
    time: "Time!",
    newRecord: "New record!",
    keepGoing: "Your best is {n}. You can beat it!",
    gains: "You earned",
    back: "Back to my card",
    question: "Question {i} of {n}",
    next: "Next",
    finish: "See result",
    correct: "That's it!",
    wrong: "Almost!",
    breathIn: "Breathe in",
    breathOut: "Breathe out",
    reset: "Start over",
    resetConfirm: "Delete your card and start again?",
    medals: ["Bronze", "Silver", "Gold", "Legend"],
    noMedal: "No medal",
    attrs: { rit: ["PAC", "Pace"], fin: ["SHO", "Shooting"], pas: ["PAS", "Passing"], con: ["TEC", "Technique"], def: ["DEF", "Defending"], fis: ["PHY", "Physical"], int: ["INT", "Intelligence"], cab: ["MEN", "Mental"], gol: ["GK", "Goalkeeping"] },
    positions: { gk: "GK", cb: "CB", fb: "FB", dm: "DM", am: "AM", st: "ST" },
    foot: "Preferred foot",
    feet: { right: "Right", left: "Left" },
    bothFeet: "Both feet",
    skillMoves: "Skill moves",
    details: "Attributes",
    login: "Log in",
    signup: "Create account",
    username: "Username",
    email: "Email",
    password: "Password (at least 6 characters)",
    usernameTaken: "That username is already taken.",
    emailTaken: "This email already has an account. Use Log in.",
    emailInvalid: "That email is not valid.",
    authError: "Something went wrong. Check your email and password.",
    confirmEmail: "Account created! Confirm your email to log in.",
    minorNote: "Under 18? Ask an adult to create the account with you.",
    loading: "Loading...",
    logout: "Log out",
  },
  es: {
    title: "Crack del Balón",
    setupTitle: "Crea tu carta de jugador",
    name: "Tu nombre",
    number: "Número",
    position: "Posición",
    shirt: "Color de camiseta",
    skin: "Tono de piel",
    promise: "Prometo anotar solo lo que hice de verdad. ¡Palabra de crack!",
    create: "Crear mi carta",
    level: "Nivel",
    streak: "días seguidos",
    flipHint: "Toca la carta para ver todos los atributos",
    daily: "Misiones del día",
    dailyHint: "XP doble",
    trails: "Caminos",
    lowerHint: "Aquí, cuanto menor el número, mejor.",
    helper: "👥 Necesita otra persona",
    games: "Minijuegos",
    freeTraining: "Entrenamiento libre",
    phase: "Fase {n}",
    lockedHint: "Bloqueada: haz la misión de la fase anterior.",
    pickMission: "Elige la misión",
    go: "¡Ya!",
    sound: "Sonido sí/no",
    watch: "▶ Ver animación",
    hideAnim: "Ocultar animación",
    steps: "pasos",
    unlocked: "¡Nueva fase desbloqueada! Mírala en Caminos.",
    autoInfo: "Esta misión sube sola: solo entrena días seguidos.",
    noCloud: "La base de datos no está configurada.",
    saveError: "No pude guardar. Revisa la conexión e inténtalo de nuevo.",
    record: "Récord",
    notDone: "Aún no hecha",
    types: { ball: "Con balón", move: "Movimiento", quiz: "Juego", mind: "Cabeza", auto: "Automática" },
    howMany: "Tu resultado ({unit})",
    save: "Guardar resultado",
    start: "Iniciar",
    meetCrew: "Conoce a la pandilla",
    blokSwap: "🔀 ¡CAMBIO! 🔀",
    stop: "Parar",
    restart: "Reiniciar",
    rainOnly: "Toca solo los balones {c}",
    rainAvoid: "Toca todos, menos los {c}",
    rainOnlyShort: "Solo {c}",
    rainAvoidShort: "Menos {c}",
    dodgeHint: "👆 Toca p/ cambiar",
    rainColors: { red: "ROJOS", blue: "AZULES", yellow: "AMARILLOS", green: "VERDES" },
    time: "¡Tiempo!",
    newRecord: "¡Nuevo récord!",
    keepGoing: "Tu récord es {n}. ¡Puedes superarlo!",
    gains: "Ganaste",
    back: "Volver a mi carta",
    question: "Pregunta {i} de {n}",
    next: "Siguiente",
    finish: "Ver resultado",
    correct: "¡Eso es!",
    wrong: "¡Casi!",
    breathIn: "Toma aire",
    breathOut: "Suelta el aire",
    reset: "Empezar de cero",
    resetConfirm: "¿Borrar tu carta y empezar de nuevo?",
    medals: ["Bronce", "Plata", "Oro", "Leyenda"],
    noMedal: "Sin medalla",
    attrs: { rit: ["RIT", "Ritmo"], fin: ["TIR", "Tiro"], pas: ["PAS", "Pase"], con: ["TEC", "Técnica"], def: ["DEF", "Defensa"], fis: ["FIS", "Físico"], int: ["INT", "Inteligencia"], cab: ["MEN", "Mental"], gol: ["POR", "Portero"] },
    positions: { gk: "POR", cb: "DFC", fb: "LAT", dm: "MCD", am: "MP", st: "DC" },
    foot: "Pie preferido",
    feet: { right: "Derecho", left: "Izquierdo" },
    bothFeet: "Dos pies",
    skillMoves: "Filigranas",
    details: "Atributos",
    login: "Entrar",
    signup: "Crear cuenta",
    username: "Nombre de usuario",
    email: "Correo",
    password: "Contraseña (mínimo 6 caracteres)",
    usernameTaken: "Ese nombre de usuario ya está en uso.",
    emailTaken: "Ese correo ya tiene cuenta. Usa Entrar.",
    emailInvalid: "Ese correo no es válido.",
    authError: "No funcionó. Revisa el correo y la contraseña.",
    confirmEmail: "¡Cuenta creada! Confirma el correo para entrar.",
    minorNote: "¿Tienes menos de 18 años? Pide a un adulto que cree la cuenta contigo.",
    loading: "Cargando...",
    logout: "Salir",
  },
};

// Texts below are [pt, en, es].
const CQ_SUBS = {
  acceleration: ["Aceleração", "Acceleration", "Aceleración"],
  sprint: ["Pique", "Sprint speed", "Velocidad"],
  attpos: ["Posicionamento ofensivo", "Attacking positioning", "Posicionamiento ofensivo"],
  finishing: ["Finalização", "Finishing", "Definición"],
  power: ["Força do chute", "Shot power", "Potencia de tiro"],
  longshots: ["Chute de longe", "Long shots", "Tiros lejanos"],
  volleys: ["Voleio", "Volleys", "Voleas"],
  penalties: ["Pênaltis", "Penalties", "Penaltis"],
  headfin: ["Cabeceio ofensivo", "Attacking heading", "Remate de cabeza"],
  vision: ["Visão", "Vision", "Visión"],
  cross: ["Cruzamento", "Crossing", "Centros"],
  freekick: ["Cobrança de falta", "Free kick accuracy", "Tiros libres"],
  short: ["Passe curto", "Short passing", "Pase corto"],
  long: ["Lançamento", "Long passing", "Pase largo"],
  curve: ["Curva", "Curve", "Efecto"],
  agility: ["Agilidade", "Agility", "Agilidad"],
  balance: ["Equilíbrio", "Balance", "Equilibrio"],
  reactions: ["Reação", "Reactions", "Reacciones"],
  control: ["Controle de bola", "Ball control", "Control del balón"],
  carry: ["Condução", "Ball carrying", "Conducción"],
  dribble: ["Drible", "Dribbling", "Regate"],
  composure: ["Frieza", "Composure", "Compostura"],
  interceptions: ["Interceptação", "Interceptions", "Intercepciones"],
  heading: ["Cabeceio defensivo", "Defensive heading", "Despeje de cabeza"],
  awareness: ["Noção defensiva", "Defensive awareness", "Conciencia defensiva"],
  standing: ["Dividida em pé", "Standing tackle", "Entrada de pie"],
  sliding: ["Carrinho", "Sliding tackle", "Barrida"],
  jumping: ["Impulsão", "Jumping", "Salto"],
  stamina: ["Fôlego", "Stamina", "Resistencia"],
  strength: ["Força", "Strength", "Fuerza"],
  combat: ["Combatividade", "Aggression", "Agresividad"],
  positioning: ["Posicionamento sem bola", "Off-ball positioning", "Posicionamiento sin balón"],
  recovery: ["Recomposição", "Tracking back", "Repliegue"],
  reading: ["Leitura de jogo", "Reading the game", "Lectura de juego"],
  decision: ["Decisão", "Decisions", "Decisiones"],
  teamplay: ["Jogo coletivo", "Team play", "Juego colectivo"],
  communication: ["Comunicação", "Communication", "Comunicación"],
  concentration: ["Concentração", "Focus", "Concentración"],
  courage: ["Coragem", "Courage", "Valentía"],
  resilience: ["Volta por cima", "Bounce back", "Resiliencia"],
  confidence: ["Confiança", "Confidence", "Confianza"],
  discipline: ["Disciplina", "Discipline", "Disciplina"],
  fairplay: ["Fair play", "Fair play", "Juego limpio"],
  gkdiving: ["Mergulho", "Diving", "Estirada"],
  gkhandling: ["Encaixe", "Handling", "Blocaje"],
  gkkicking: ["Reposição", "Kicking", "Saque"],
  gkreflexes: ["Reflexo", "Reflexes", "Reflejos"],
  gkpositioning: ["Posicionamento no gol", "GK positioning", "Colocación"],
};

function renderCraque() {
  const root = document.getElementById("craque");
  if (!root) return;

  const li = () => ({ pt: 0, en: 1, es: 2 })[I18N.lang] ?? 0;
  const t = () => CQ_TEXT[I18N.lang] || CQ_TEXT.pt;
  const tr = (arr) => arr[li()] ?? arr[0];
  const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const mission = (id) => CQ_MISSIONS.find((m) => m.id === id);

  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const dayNumber = () => Math.floor(new Date().setHours(0, 0, 0, 0) / 86400000);

  const cloud = typeof SUPABASE !== "undefined" && SUPABASE.url && SUPABASE.anonKey && window.supabase
    ? window.supabase.createClient(SUPABASE.url, SUPABASE.anonKey)
    : null;

  let state = emptyState();
  let user = null;
  let timer = null;
  let saveTimer = null;
  let stopAnim = null;
  let audio = null;

  function emptyState() {
    return { player: null, records: {}, tries: {}, xp: 0, streak: { last: "", count: 0, best: 0 }, today: { date: "", counts: {} } };
  }

  function save() {
    if (!user) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(pushCloud, 300);
  }

  async function pushCloud() {
    clearTimeout(saveTimer);
    saveTimer = null;
    if (!user) return true;
    const { player, ...progress } = state;
    const { error } = await cloud
      .from("profiles")
      .update({ card: player, progress, updated_at: new Date().toISOString() })
      .eq("id", user.id);
    if (error) console.warn("Craque: save failed", error);
    return !error;
  }

  async function logResult(m, value, medal, xp, isRecord) {
    const { error } = await cloud
      .from("mission_results")
      .insert({ mission_id: m.id, value, medal, xp, is_record: isRecord });
    if (error) console.warn("Craque: result not saved", error);
    return !error;
  }

  async function enter(authUser) {
    const { data, error } = await cloud
      .from("profiles")
      .select("username, card, progress")
      .eq("id", authUser.id)
      .single();
    if (error) {
      renderAuth("login", t().authError);
      return;
    }
    user = { id: authUser.id, username: data.username };
    const base = emptyState();
    const saved = data.progress || {};
    state = { ...base, ...saved, streak: { ...base.streak, ...saved.streak }, player: data.card || null };
    draw();
  }

  function renderAuth(mode = "login", msg = "") {
    const tx = t();
    const isSignup = mode === "signup";
    app.innerHTML = `
      <div class="cq-auth">
        <div class="cq-auth-tabs" role="tablist">
          <button type="button" data-auth="login" class="${isSignup ? "" : "is-on"}">${tx.login}</button>
          <button type="button" data-auth="signup" class="${isSignup ? "is-on" : ""}">${tx.signup}</button>
        </div>
        <form class="cq-form cq-auth-form">
          ${isSignup ? `<label><span>${tx.username}</span><input name="username" maxlength="20" autocomplete="username" required></label>` : ""}
          <label><span>${tx.email}</span><input name="email" type="email" autocomplete="email" required></label>
          <label><span>${tx.password}</span><input name="password" type="password" minlength="6" autocomplete="${isSignup ? "new-password" : "current-password"}" required></label>
          <p class="cq-auth-msg" ${msg ? "" : "hidden"}>${esc(msg)}</p>
          ${isSignup ? `<p class="cq-auth-note">${tx.minorNote}</p>` : ""}
          <button type="submit" class="cq-btn">${isSignup ? tx.signup : tx.login}</button>
        </form>
      </div>`;

    app.querySelectorAll("[data-auth]").forEach((b) => b.addEventListener("click", () => renderAuth(b.dataset.auth)));

    const form = app.querySelector(".cq-auth-form");
    const btn = form.querySelector('[type="submit"]');
    const msgEl = form.querySelector(".cq-auth-msg");
    const fail = (text) => {
      msgEl.textContent = text;
      msgEl.hidden = false;
      btn.disabled = false;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      btn.disabled = true;
      msgEl.hidden = true;
      const f = new FormData(form);
      const email = String(f.get("email")).trim();
      const password = String(f.get("password"));

      if (!isSignup) {
        const { data, error } = await cloud.auth.signInWithPassword({ email, password });
        if (error) return fail(tx.authError);
        return enter(data.user);
      }

      const username = String(f.get("username")).trim();
      const { data: free } = await cloud.rpc("username_available", { name: username });
      if (free === false) return fail(tx.usernameTaken);
      const { data, error } = await cloud.auth.signUp({ email, password, options: { data: { username } } });
      if (error) {
        if (/registered|exists/i.test(error.message)) return fail(tx.emailTaken);
        if (/invalid/i.test(error.message)) return fail(tx.emailInvalid);
        if (/database/i.test(error.message)) return fail(tx.usernameTaken);
        return fail(error.message);
      }
      if (!data.session) return fail(tx.confirmEmail);
      return enter(data.user);
    });
  }

  // "lower" missions (e.g. steps away from the target) have descending tiers.
  const beats = (m, a, b) => (m.lower ? a <= b : a >= b);

  function medalIndex(m, value) {
    if (value == null) return -1;
    let idx = -1;
    m.tiers.forEach((tier, i) => { if (beats(m, value, tier)) idx = i; });
    return idx;
  }

  const isUnlocked = (sub) => CQ_MISSIONS.some((m) => m.subs.includes(sub));

  function subValue(sub) {
    const list = CQ_MISSIONS.filter((m) => m.subs.includes(sub));
    if (!list.length) return CQ_BASE;
    let quality = 0;
    let done = 0;
    list.forEach((m) => {
      const medal = medalIndex(m, state.records[m.id]) + 1;
      quality += medal / m.tiers.length;
      if (medal) done++;
    });
    const score = CQ_SCORE.quality * (quality / list.length) + (1 - CQ_SCORE.quality) * (done / list.length);
    return Math.round(CQ_BASE + (CQ_SCORE.max - CQ_BASE) * score);
  }

  function groupValue(group) {
    const subs = group.subs.filter(isUnlocked);
    if (!subs.length) return CQ_BASE;
    return Math.round(subs.reduce((a, s) => a + subValue(s), 0) / subs.length);
  }

  // Goalkeepers: half goalkeeping, half the average of the other groups.
  const overall = (p = state.player) => {
    const field = CQ_ATTRS.filter((g) => g.id !== CQ_GK_GROUP);
    const avg = field.reduce((a, g) => a + groupValue(g), 0) / field.length;
    if (p?.pos !== "gk") return Math.round(avg);
    return Math.round((avg + groupValue(CQ_ATTRS.find((g) => g.id === CQ_GK_GROUP))) / 2);
  };
  const gkSubs = CQ_ATTRS.find((g) => g.id === CQ_GK_GROUP).subs;
  const isGkMission = (m) => m.subs.every((s) => gkSubs.includes(s));

  function tierOf(ovr) {
    if (ovr >= 80) return 3;
    if (ovr >= 68) return 2;
    if (ovr >= 55) return 1;
    return 0;
  }

  const level = () => Math.floor(state.xp / CQ_XP.perLevel) + 1;

  // Results saved before tries were counted still count as one try.
  const triesOf = (id) => state.tries?.[id] ?? (state.records[id] != null ? 1 : 0);
  const hasMedal = (id) => medalIndex(mission(id), state.records[id]) >= 0;
  const passed = (id) => hasMedal(id) || triesOf(id) > 0;
  const phaseDone = (phase) => phase.every(passed);
  // TEMPORÁRIO: craque.html?teste=1 abre todas as fases para testar. Remover depois.
  const testMode = new URLSearchParams(location.search).has("teste");
  const phaseOpen = (trail, i) => testMode || i === 0 || phaseDone(trail.phases[i - 1]);
  const missionOpen = (id) => CQ_TRAILS.some((tl) => tl.phases.some((ph, i) => ph.includes(id) && phaseOpen(tl, i)));
  const openMissions = () => CQ_MISSIONS.filter((m) => m.type !== "auto" && missionOpen(m.id));
  const openPhaseCount = () => CQ_TRAILS.reduce((a, tl) => a + tl.phases.filter((_, i) => phaseOpen(tl, i)).length, 0);

  function dailyIds() {
    const today = dayKey();
    if (state.today.date !== today) state.today = { date: today, counts: {} };
    if (!state.today.daily || state.today.daily.some((id) => !mission(id))) {
      state.today.daily = pickDaily();
      if (state.player) save();
    }
    return state.today.daily;
  }

  function pickDaily() {
    const seed = dayNumber();
    const open = openMissions();
    const ofType = (...types) => open.filter((m) => types.includes(m.type));
    const isGk = state.player?.pos === "gk";
    const balls = ofType("ball", "move").filter((m) => isGk || !isGkMission(m));
    const weakest = balls
      .map((m, i) => ({ m, score: m.subs.reduce((a, s) => a + subValue(s), 0) / m.subs.length, order: (i + seed) % balls.length }))
      .sort((a, b) => a.score - b.score || a.order - b.order)[0].m;
    const quizzes = ofType("quiz");
    const minds = ofType("mind");
    return [weakest.id, quizzes[seed % quizzes.length].id, minds[seed % minds.length].id];
  }

  function avatarSvg(p) {
    return `
      <svg class="cq-avatar" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M18 100 L22 72 Q25 60 38 56 L50 63 L62 56 Q75 60 78 72 L82 100 Z" fill="${p.shirt}" />
        <path d="M44 56 L50 63 L56 56 L56 50 L44 50 Z" fill="${p.skin}" />
        <circle cx="50" cy="36" r="16" fill="${p.skin}" />
        <path d="M34 35 Q34 18 50 18 Q66 18 66 35 Q60 26 50 27 Q40 26 34 35 Z" fill="#1f1610" />
        <text x="50" y="90" text-anchor="middle" class="cq-avatar-num">${esc(p.number)}</text>
      </svg>`;
  }

  function cardHtml(p, opts = {}) {
    const ovr = overall(p);
    const tier = tierOf(ovr);
    const tx = t();
    const up = opts.up || new Set();
    const stats = CQ_ATTRS.map((g) => `
      <span class="cq-stat ${up.has(g.id) ? "is-up" : ""}"><b>${groupValue(g)}</b> ${tx.attrs[g.id][0]}</span>`).join("");

    return `
      <button type="button" class="cq-card tier-${tier}" ${opts.static ? "disabled" : ""} aria-label="${esc(p.name)} · ${tx.details}">
        <span class="cq-face cq-front">
          <span class="cq-top">
            <strong class="cq-ovr ${up.size ? "is-up" : ""}">${ovr}</strong>
            <span class="cq-pos">${tx.positions[p.pos]}</span>
            <span class="cq-tier-name">${tx.medals[tier]}</span>
          </span>
          ${avatarSvg(p)}
          <span class="cq-name">${esc(p.name || "—")}</span>
          <span class="cq-stats">${stats}</span>
        </span>
      </button>`;
  }

  const bothFeetStars = () => Math.min(5, medalIndex(mission("twofeet"), state.records.twofeet) + 2);
  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  const skillStars = () => Math.min(5, medalIndex(mission("skills"), state.records.skills) + 2);
  const barColor = (v) => (v >= 80 ? "#22c55e" : v >= 68 ? "#a3e635" : v >= 55 ? "#facc15" : v > CQ_BASE ? "#f59e0b" : "#ef4444");

  function gaugeSvg(v) {
    const len = 125.66;
    const fillLen = (Math.max(0, Math.min(99, v)) / 99) * len;
    return `
      <svg class="cq-gauge" viewBox="0 0 100 58" aria-hidden="true">
        <path d="M10 50 A40 40 0 0 1 90 50" class="cq-gauge-bg" />
        <path d="M10 50 A40 40 0 0 1 90 50" class="cq-gauge-fill" stroke="${barColor(v)}" stroke-dasharray="${fillLen} ${len}" />
        <text x="50" y="50" text-anchor="middle">${v}</text>
      </svg>`;
  }

  function openDetails() {
    const tx = t();
    const p = state.player;
    const cols = CQ_ATTRS.map((g) => `
      <div class="cq-attr">
        <h4>${tx.attrs[g.id][1]}</h4>
        ${gaugeSvg(groupValue(g))}
        <ul>
          ${g.subs.map((s) => {
            if (!isUnlocked(s)) return `<li class="is-locked"><span>${tr(CQ_SUBS[s])}</span><b>🔒</b><i></i></li>`;
            const v = subValue(s);
            return `<li><span>${tr(CQ_SUBS[s])}</span><b>${v}</b><i style="--w:${v}%;--c:${barColor(v)}"></i></li>`;
          }).join("")}
        </ul>
      </div>`).join("");
    openModal(`
      <div class="cq-details">
        <header>
          <strong>${esc(p.name)}</strong>
          <span>${overall()} · ${tx.positions[p.pos]} · #${esc(p.number)}</span>
          <span>${tx.foot}: <b>${tx.feet[p.foot || "right"]}</b></span>
          <span>${tx.bothFeet}: <b class="cq-stars">${stars(bothFeetStars())}</b></span>
          <span>${tx.skillMoves}: <b class="cq-stars">${stars(skillStars())}</b></span>
        </header>
        <div class="cq-attrs">${cols}</div>
      </div>`);
    dialog.classList.add("is-wide");
  }

  function missionCard(m, daily) {
    const tx = t();
    const rec = state.records[m.id];
    const idx = medalIndex(m, rec);
    return `
      <button type="button" class="cq-mission type-${m.type}" data-mission="${m.id}">
        <span class="cq-mission-icon">${m.icon}</span>
        <span class="cq-mission-body">
          <span class="cq-mission-tag">${tx.types[m.type]}${m.helper ? " · 👥" : ""}${daily ? ` · <i>${tx.dailyHint}</i>` : ""}</span>
          <strong>${tr(m.title)}</strong>
          <small>${m.subs.map((s) => tr(CQ_SUBS[s])).join(" · ")}</small>
        </span>
        <span class="cq-mission-rec">
          <span class="cq-medal m-${idx}"></span>
          <small>${rec == null ? tx.notDone : `${tx.record}: ${rec}`}</small>
        </span>
      </button>`;
  }

  function renderSetup() {
    const tx = t();
    const draft = { name: "", number: 10, pos: "am", foot: "right", shirt: CQ_SHIRTS[0], skin: CQ_SKINS[1] };
    const suggested = user ? esc(user.username.slice(0, 12)) : "";
    app.innerHTML = `
      <div class="cq-setup">
        <div class="cq-setup-preview"></div>
        <form class="cq-form">
          <h2>${tx.setupTitle}</h2>
          <label><span>${tx.name}</span><input name="name" maxlength="12" value="${suggested}" required autocomplete="off"></label>
          <div class="cq-form-row">
            <label><span>${tx.number}</span><input name="number" type="number" min="1" max="99" value="10" required></label>
            <label><span>${tx.position}</span>
              <select name="pos">${Object.entries(tx.positions).map(([id, n]) => `<option value="${id}" ${id === "am" ? "selected" : ""}>${n}</option>`).join("")}</select>
            </label>
            <label><span>${tx.foot}</span>
              <select name="foot">${Object.entries(tx.feet).map(([id, n]) => `<option value="${id}">${n}</option>`).join("")}</select>
            </label>
          </div>
          <fieldset><legend>${tx.shirt}</legend>
            ${CQ_SHIRTS.map((c, i) => `<label class="cq-swatch"><input type="radio" name="shirt" value="${c}" ${i === 0 ? "checked" : ""}><span style="background:${c}"></span></label>`).join("")}
          </fieldset>
          <fieldset><legend>${tx.skin}</legend>
            ${CQ_SKINS.map((c, i) => `<label class="cq-swatch"><input type="radio" name="skin" value="${c}" ${i === 1 ? "checked" : ""}><span style="background:${c}"></span></label>`).join("")}
          </fieldset>
          <label class="cq-promise"><input type="checkbox" name="promise" required><span>${tx.promise}</span></label>
          <button type="submit" class="cq-btn">${tx.create}</button>
        </form>
      </div>`;

    const form = app.querySelector(".cq-form");
    const preview = app.querySelector(".cq-setup-preview");
    const readForm = () => {
      const f = new FormData(form);
      draft.name = (f.get("name") || "").trim().toUpperCase();
      draft.number = Math.max(1, Math.min(99, parseInt(f.get("number"), 10) || 1));
      draft.pos = f.get("pos");
      draft.foot = f.get("foot");
      draft.shirt = f.get("shirt");
      draft.skin = f.get("skin");
      preview.innerHTML = cardHtml(draft, { static: true });
    };
    form.addEventListener("input", readForm);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      readForm();
      state.player = { ...draft };
      save();
      draw();
    });
    readForm();
  }

  function renderHome(up) {
    const tx = t();
    const daily = dailyIds();
    const lvl = level();
    const pct = (state.xp % CQ_XP.perLevel) / CQ_XP.perLevel * 100;
    app.innerHTML = `
      <div class="cq-home">
        <div class="cq-card-col">
          ${cardHtml(state.player, { up })}
          <small class="cq-hint">${tx.flipHint}</small>
        </div>
        <div class="cq-side">
          ${user ? `<div class="cq-user"><span>@${esc(user.username)}</span><button type="button" class="cq-logout">${tx.logout}</button></div>` : ""}
          <div class="cq-status">
            <div class="cq-level">
              <span>${tx.level} <b>${lvl}</b></span>
              <span class="cq-xpbar"><i style="width:${pct}%"></i></span>
              <small>${state.xp % CQ_XP.perLevel} / ${CQ_XP.perLevel} XP</small>
            </div>
            <div class="cq-streak"><b>🔥 ${state.streak.count}</b><small>${tx.streak}</small></div>
          </div>
          <h2 class="cq-h">${tx.daily}</h2>
          <div class="cq-missions">${daily.map((id) => missionCard(mission(id), true)).join("")}</div>
          <h2 class="cq-h">${tx.trails}</h2>
          <div class="cq-trails">${CQ_TRAILS.map(trailRow).join("")}</div>
          <h2 class="cq-h">${tx.games}</h2>
          <div class="cq-missions is-compact">${CQ_MISSIONS.filter(isGame).map((m) => missionCard(m, false)).join("")}</div>
          <h2 class="cq-h">${tx.freeTraining}</h2>
          <div class="cq-missions is-compact">${openMissions().filter((m) => !daily.includes(m.id) && !isGame(m)).map((m) => missionCard(m, false)).join("")}</div>
          <button type="button" class="cq-reset">${tx.reset}</button>
        </div>
      </div>`;
    // Long trails scroll sideways; start each one at the phase being played.
    app.querySelectorAll(".cq-trail-nodes").forEach((row) => {
      const current = row.querySelector(".is-current");
      if (current) row.scrollLeft = current.offsetLeft - 48;
    });
  }

  function trailRow(tl) {
    const tx = t();
    const group = CQ_ATTRS.find((g) => g.id === tl.id);
    const done = tl.phases.filter((ph, i) => phaseOpen(tl, i) && phaseDone(ph)).length;
    const nodes = tl.phases.map((ph, i) => {
      const open = phaseOpen(tl, i);
      const cls = open && phaseDone(ph) ? "is-done" : open ? "is-current" : "is-locked";
      const icons = ph.map((id) => {
        const m = mission(id);
        return `<span class="cq-node-m"><span>${m.icon}</span><span class="cq-medal m-${medalIndex(m, state.records[id])}"></span></span>`;
      }).join("");
      const name = ph.map((id) => tr(mission(id).title)).join(" · ");
      return `
        <button type="button" class="cq-node ${cls}" data-phase="${tl.id}:${i}" title="${esc(open ? name : `${name} · ${tx.lockedHint}`)}" ${open ? "" : "disabled"}>
          <small>${i + 1}</small>
          <span class="cq-node-icons">${icons}</span>
          ${open ? "" : `<span class="cq-node-lock" aria-hidden="true">🔒</span>`}
        </button>`;
    }).join(`<span class="cq-node-link" aria-hidden="true"></span>`);
    return `
      <div class="cq-trail">
        <span class="cq-trail-name"><b>${groupValue(group)}</b> ${tx.attrs[tl.id][1]}<small>${done}/${tl.phases.length}</small></span>
        <div class="cq-trail-nodes">${nodes}</div>
      </div>`;
  }

  function openPhase(key) {
    const [tid, i] = key.split(":");
    const ph = CQ_TRAILS.find((tl) => tl.id === tid).phases[Number(i)];
    if (ph.length === 1) return openMission(ph[0]);
    openModal(`
      <span class="cq-mission-tag">${t().attrs[tid][1]} · ${fill(t().phase, { n: Number(i) + 1 })}</span>
      <h3>${t().pickMission}</h3>
      <div class="cq-missions">${ph.map((id) => missionCard(mission(id), false)).join("")}</div>`);
  }

  function draw(up) {
    stopTimer();
    if (!cloud) app.innerHTML = `<p class="cq-loading">${t().noCloud}</p>`;
    else if (!user) renderAuth();
    else if (state.player) renderHome(up);
    else renderSetup();
  }

  function openModal(html) {
    endAnim();
    dialog.classList.remove("is-wide");
    dialog.innerHTML = `<button type="button" class="cq-close" aria-label="×">×</button>${html}`;
    modal.hidden = false;
    document.body.classList.add("cq-lock");
  }

  function closeModal() {
    stopTimer();
    endAnim();
    modal.hidden = true;
    document.body.classList.remove("cq-lock");
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function endAnim() {
    if (stopAnim) stopAnim();
    stopAnim = null;
  }

  function toggleAnim(m, btn) {
    const box = dialog.querySelector(".cq-anim");
    if (stopAnim) {
      endAnim();
      box.hidden = true;
      btn.textContent = t().watch;
      return;
    }
    btn.disabled = true;
    cqLoadAnim(typeof m.anim === "string" ? m.anim : m.id).then((scene) => {
      btn.disabled = false;
      if (!box.isConnected) return;
      box.hidden = false;
      btn.textContent = t().hideAnim;
      stopAnim = scene(box, { unit: tr(m.unit), steps: t().steps, label: tr(m.title), pick: tr, args: m.animArgs || {} });
    }).catch((err) => {
      console.warn("Craque:", err);
      btn.hidden = true;
    });
  }

  function missionHeader(m) {
    const tx = t();
    const idx = medalIndex(m, state.records[m.id]);
    return `
      <span class="cq-mission-tag">${tx.types[m.type]}${m.helper ? ` · ${tx.helper}` : ""}</span>
      <h3>${m.icon} ${tr(m.title)}</h3>
      <p>${tr(m.desc)}</p>
      <div class="cq-tiers">
        ${m.tiers.map((v, i) => `<span class="${i <= idx ? "is-done" : ""}"><span class="cq-medal m-${i}"></span>${m.lower ? "≤" : ""}${v}</span>`).join("")}
      </div>
      ${m.lower ? `<p class="cq-note">${tx.lowerHint}</p>` : ""}`;
  }

  function openMission(id) {
    const m = mission(id);
    if (m.type === "quiz") return m.cast ? openCast(m) : openQuiz(m);
    const tx = t();
    if (m.type === "auto") {
      return openModal(`
        ${missionHeader(m)}
        <p class="cq-note">${tx.autoInfo}</p>
        <p>${tx.record}: <b>${state.records[m.id] ?? 0}</b> ${tr(m.unit)}</p>`);
    }
    const steps = m.steps ? `<ol class="cq-steps">${m.steps.map((s) => `<li>${tr(s)}</li>`).join("")}</ol>` : "";
    let tool = "";
    const controls = `
      <button type="button" class="cq-sound" data-sound aria-label="${tx.sound}" title="${tx.sound}">${state.mute ? "🔇" : "🔊"}</button>
      <button type="button" class="cq-btn is-ghost" data-timer>${tx.start}</button>`;
    if (m.timer?.mode === "down") tool = `<div class="cq-timer"><b>${m.timer.s}</b>${controls}</div>`;
    if (m.timer?.mode === "up") tool = `<div class="cq-timer"><b>0</b>${controls}</div>`;
    if (m.timer?.mode === "breath") tool = `<div class="cq-timer is-breath"><span class="cq-ball"></span><em></em><b>0</b>${controls}</div>`;
    if (m.grid) tool = `<div class="cq-play">
      <div class="cq-timer"><b>0</b><span class="cq-grid-next"></span><button type="button" class="cq-btn is-ghost" data-grid>${tx.start}</button></div>
      <div class="cq-grid" style="--n:${m.grid.cols}"></div></div>`;
    if (m.rain) tool = `<div class="cq-play">
      <div class="cq-timer"><span class="cq-rain-score">🏆 0 · ${tx.record} ${state.records[m.id] ?? 0}</span><button type="button" class="cq-btn is-ghost" data-rain>${tx.start}</button></div>
      <div class="cq-rain-wrap${m.rain.sides ? " is-duo" : ""}"><span class="cq-game-count is-faint">0</span>${(m.rain.sides || [0]).map(() => `<div class="cq-rain"><div class="cq-rain-rule"></div></div>`).join("")}</div></div>`;
    if (m.dodge) tool = `<div class="cq-play">
      <div class="cq-timer"><span class="cq-rain-score">🏆 0 · ${tx.record} ${state.records[m.id] ?? 0}</span><button type="button" class="cq-btn is-ghost" data-dodge>${tx.start}</button></div>
      <div class="cq-rain-wrap is-duo"><span class="cq-game-count" aria-live="off">0</span>${[0, 1].map(() => `<div class="cq-rain cq-dodge"><div class="cq-rain-rule">${tx.dodgeHint}</div><span class="cq-dodge-ball">⚽</span></div>`).join("")}</div></div>`;
    if (m.blok) tool = `<div class="cq-play">
      <div class="cq-timer"><span class="cq-rain-score">🏆 0 · ${tx.record} ${state.records[m.id] ?? 0}</span><button type="button" class="cq-btn is-ghost" data-blok>${tx.start}</button></div>
      <div class="cq-rain-wrap"><span class="cq-game-count is-faint is-high">0</span><div class="cq-rain cq-blok"><div class="cq-blok-rows">
            ${CQ_BLOK_COLORS.map((c, i) => `<div class="cq-blok-row" style="--c:${CQ_RAIN_COLORS[c]}"><span class="cq-blok-block" style="left:${[72, 50, 28, 44][i]}%"><i class="cq-blok-eyes"></i><i class="cq-blok-mouth"></i></span></div>`).join("")}
      </div></div></div></div>`;

    openModal(`
      ${missionHeader(m)}
      ${m.anim ? `<div class="cq-anim" hidden></div><button type="button" class="cq-btn is-ghost cq-anim-btn">${tx.watch}</button>` : ""}
      ${steps}
      ${tool}
      <form class="cq-result-form" ${isGame(m) ? "hidden" : ""}>
        <label><span>${fill(tx.howMany, { unit: tr(m.unit) })}</span>
          <input type="number" name="value" min="0" max="${m.max ?? 999}" inputmode="numeric" required></label>
        <button type="submit" class="cq-btn">${tx.save}</button>
      </form>`);

    const input = dialog.querySelector('input[name="value"]');
    const timerBtn = dialog.querySelector("[data-timer]");
    if (timerBtn) timerBtn.addEventListener("click", () => toggleTimer(m, timerBtn, input));
    const gridBtn = dialog.querySelector("[data-grid]");
    if (gridBtn) gridBtn.addEventListener("click", () => startGrid(m, gridBtn, input));
    const rainBtn = dialog.querySelector("[data-rain]");
    if (rainBtn) rainBtn.addEventListener("click", () => startRain(m, rainBtn, input));
    const dodgeBtn = dialog.querySelector("[data-dodge]");
    if (dodgeBtn) dodgeBtn.addEventListener("click", () => startDodge(m, dodgeBtn, input));
    const blokBtn = dialog.querySelector("[data-blok]");
    if (blokBtn) blokBtn.addEventListener("click", () => startBlok(m, blokBtn, input));
    const soundBtn = dialog.querySelector("[data-sound]");
    if (soundBtn) soundBtn.addEventListener("click", () => {
      state.mute = !state.mute;
      soundBtn.textContent = state.mute ? "🔇" : "🔊";
      save();
    });
    const animBtn = dialog.querySelector(".cq-anim-btn");
    if (animBtn) {
      animBtn.addEventListener("click", () => toggleAnim(m, animBtn));
      toggleAnim(m, animBtn);
    }

    dialog.querySelector(".cq-result-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const v = Math.max(0, Math.min(m.max ?? 999, parseInt(input.value, 10) || 0));
      finishMission(m, v);
    });
  }

  function tone(freq, dur, opts = {}) {
    if (state.mute) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    audio = audio || new Ctx();
    if (audio.state === "suspended") audio.resume();
    const t0 = audio.currentTime + (opts.delay || 0);
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = opts.type || "square";
    osc.frequency.setValueAtTime(freq, t0);
    if (opts.trill) {
      const lfo = audio.createOscillator();
      const depth = audio.createGain();
      lfo.frequency.value = 28;
      depth.gain.value = freq * 0.06;
      lfo.connect(depth).connect(osc.frequency);
      lfo.start(t0);
      lfo.stop(t0 + dur);
    }
    const vol = opts.vol ?? 0.12;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
    gain.gain.setValueAtTime(vol, t0 + dur * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(audio.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  const sound = {
    tick: () => tone(880, 0.12),
    go: () => tone(1320, 0.45),
    whistle: () => {
      tone(2600, 0.25, { type: "triangle", trill: true, vol: 0.2 });
      tone(2600, 0.7, { type: "triangle", trill: true, vol: 0.2, delay: 0.32 });
    },
    breath: (inhale) => tone(inhale ? 392 : 294, 0.6, { type: "sine", vol: 0.1 }),
  };

  // Game results come from the game itself: the field is read-only and the result is saved as soon as
  // the match ends, so a bad match can't be skipped.
  const isGame = (m) => Boolean(m.grid || m.rain || m.dodge || m.blok);
  const gameResult = (input, v) => {
    input.value = v ?? "";
    // A plain submit event skips the browser's min/max check; the handler clamps the value itself.
    if (v != null) input.form.dispatchEvent(new Event("submit", { cancelable: true }));
  };

  const shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  /* Concentration grid: tap the numbers in order as fast as possible; the time in seconds is the result.
     It plays full screen, like the other games, and Stop leaves without a result.
     m.grid: { n, cols } */
  function startGrid(m, btn, input) {
    if (btn.cqStop) return btn.cqStop();
    stopTimer();
    gameResult(input);
    const tx = t();
    const grid = dialog.querySelector(".cq-grid");
    const play = btn.closest(".cq-play");
    const out = btn.closest(".cq-timer").querySelector("b");
    const nextEl = btn.closest(".cq-timer").querySelector(".cq-grid-next");
    const seq = Array.from({ length: m.grid.n }, (_, i) => String(i + 1));
    grid.innerHTML = shuffle([...seq]).map((k) => `<button type="button" data-k="${k}">${k}</button>`).join("");
    btn.textContent = tx.stop;
    play.classList.add("is-full");
    const finish = () => {
      btn.cqStop = null;
      stopTimer();
      play.classList.remove("is-full");
      btn.textContent = tx.restart;
      nextEl.textContent = "";
    };
    btn.cqStop = () => {
      finish();
      grid.innerHTML = "";
      out.textContent = 0;
    };
    let step = 0;
    const showNext = () => {
      if (step >= seq.length) {
        nextEl.textContent = "";
        return;
      }
      nextEl.textContent = `→ ${seq[step]}`;
    };
    showNext();
    const startAt = Date.now();
    sound.go();
    timer = setInterval(() => {
      out.textContent = Math.floor((Date.now() - startAt) / 1000);
    }, 100);
    // pointerdown with preventDefault: the number never takes the focus, which on phones made the
    // window scroll a little on every tap.
    grid.querySelectorAll("button").forEach((b) => b.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (b.classList.contains("is-done")) return;
      if (b.dataset.k !== seq[step]) {
        b.classList.remove("is-wrong");
        void b.offsetWidth;
        b.classList.add("is-wrong");
        return;
      }
      b.classList.add("is-done");
      sound.tick();
      step++;
      showNext();
      if (step >= seq.length) {
        finish();
        const secs = Math.max(1, Math.round((Date.now() - startAt) / 1000));
        out.textContent = secs;
        sound.whistle();
        gameResult(input, secs);
      }
    }));
  }

  /* Speed levels shared by the rain and the dodge: they go up with the match time and never come down,
     and every level makes each hit worth one more point (1, 2, 3, 4). */
  const CQ_SPEED = [
    { from: 0, banner: "" },
    { from: 10, banner: "⚡ TURBO! ⚡" },
    { from: 70, banner: "⚡⚡ TURBO x2 ⚡⚡" },
    { from: 130, banner: "⚡⚡⚡ TURBO x3 ⚡⚡⚡" },
  ];

  // cross[i]: seconds an item takes to cross the pitch at level i; gap[i]: ms between items.
  // at[i]: second when level i starts (a game may use its own). Each level change eases in over 1.5 s.
  function gameSpeed(elapsed, cross, gap, at = CQ_SPEED.map((l) => l.from)) {
    const li = at.reduce((acc, from, i) => (elapsed >= from ? i : acc), 0);
    const ease = cqClamp01((elapsed - at[li]) / 1.5);
    const p = Math.max(0, li - 1);
    return { li, points: li + 1, cross: cqLerp(cross[p], cross[li], ease), gap: cqLerp(gap[p], gap[li], ease) };
  }

  // Games with more levels than CQ_SPEED (Blokolor) keep counting: TURBO x4, x5...
  function showSpeedLevel(wrap, li, banner = CQ_SPEED[li]?.banner ?? `⚡ TURBO x${li} ⚡`) {
    wrap.classList.remove("is-turbo");
    void wrap.offsetWidth;
    wrap.classList.add("is-turbo");
    wrap.dataset.turbo = banner;
    sound.go();
    if (navigator.vibrate) navigator.vibrate([100, 60, 100]);
  }

  // Floating "+n" where a hit happened, shown when a hit is worth more than 1 point.
  function popPoints(area, x, y, n, label = "") {
    if (n < 2) return;
    const el = document.createElement("span");
    el.className = "cq-pop";
    el.textContent = label ? `+${n} ${label}` : `+${n}`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    area.appendChild(el);
    setTimeout(() => el.remove(), 700);
  }

  /* Colour rain: balls fall and the rule colour keeps changing. Every right tap adds points (more at each
     speed level); a wrong tap or a right ball let through resets them.
     The match runs until Stop, and the result is the best score of the match.
     m.rain: { mode: "only" | "avoid" | "stroop", sides: [mode, mode] }
       only: tap the rule colour; avoid: tap every colour except it;
       stroop: like only, but the colour name is printed in a different ink and the word is what counts.
       sides splits the screen in two lanes, each with its own rule. */
  /* Lives and the pause after losing them, shared by the scoring games.
     Every mistake costs one of 3 hearts and the points stay; right after one, the next 0.8 s can't cost
     another, so two balls at once don't take two hearts. Losing the last heart freezes the game for 2 s,
     showing the points just lost and the record; then the points restart from 0 with 3 new hearts.
     lose() → "" (ignored), "heart" or "out". hit() returns how long the game must push its clocks
     forward (0 if it was already frozen), so speed levels and timed events don't move on during the pause. */
  const CQ_PAUSE = 2000;
  const CQ_LIVES = 3;
  const CQ_LIFE_GRACE = 800;
  function gamePause(wrap, m, record) {
    const tx = t();
    const el = document.createElement("div");
    el.className = "cq-game-dead";
    wrap.appendChild(el);
    const hearts = document.createElement("div");
    hearts.className = "cq-game-lives";
    wrap.appendChild(hearts);
    let until = 0;
    let lives = CQ_LIVES;
    let safeUntil = 0;
    const drawHearts = () => {
      hearts.innerHTML = Array.from({ length: CQ_LIVES }, (_, i) => `<i${i < lives ? "" : ' class="is-lost"'}>❤️</i>`).join("");
    };
    drawHearts();
    return {
      lose() {
        const now = Date.now();
        if (now < safeUntil || now < until) return "";
        safeUntil = now + CQ_LIFE_GRACE;
        lives--;
        drawHearts();
        hearts.classList.remove("is-hurt");
        void hearts.offsetWidth;
        hearts.classList.add("is-hurt");
        if (lives > 0) return "heart";
        lives = CQ_LIVES;
        return "out";
      },
      hit(lost, best) {
        const isNew = lost > record && lost === best;
        el.innerHTML = `<b>💥 ${lost} ${tr(m.unit)}</b><small>🏆 ${isNew ? tx.newRecord : `${tx.record} ${Math.max(record, best)}`}</small>`;
        el.classList.add("is-on");
        const now = Date.now();
        if (now < until) return 0;
        until = now + CQ_PAUSE;
        return CQ_PAUSE;
      },
      frozen(now) {
        if (now < until) return true;
        if (el.classList.contains("is-on")) {
          el.classList.remove("is-on");
          drawHearts();
        }
        return false;
      },
      remove: () => {
        el.remove();
        hearts.remove();
      },
    };
  }

  const CQ_RAIN_COLORS = { red: "#ef4444", blue: "#3b82f6", yellow: "#facc15", green: "#22c55e" };
  const CQ_RAIN_CROSS = [3.6, 2.0, 1.6, 1.3];
  const CQ_RAIN_GAP = [950, 520, 400, 320];
  // Gentler levels for rains with two different rules at once (m.rain.calm).
  const CQ_RAIN_CROSS_CALM = [3.6, 3.4, 3.2, 3.0];
  const CQ_RAIN_GAP_CALM = [950, 910, 870, 830];

  function startRain(m, btn, input) {
    if (btn.cqStop) return btn.cqStop();
    stopTimer();
    gameResult(input);
    const tx = t();
    const modes = m.rain.sides || [m.rain.mode];
    const duo = modes.length > 1;
    const wrap = dialog.querySelector(".cq-rain-wrap");
    const out = wrap.querySelector(".cq-game-count");
    const TAP_R = duo ? 32 : 36;
    const RULE_GRACE = 900;
    const scoreEl = btn.closest(".cq-timer").querySelector(".cq-rain-score");
    wrap.querySelectorAll(".cq-rain-ball").forEach((el) => el.remove());
    wrap.classList.remove("is-turbo");
    btn.textContent = tx.stop;
    btn.closest(".cq-play").classList.add("is-full");
    const colors = Object.keys(CQ_RAIN_COLORS);
    const other = (c) => pick(colors.filter((x) => x !== c));
    const record = state.records[m.id] ?? 0;
    let startAt = Date.now();
    const pause = gamePause(wrap, m, record);
    let streak = 0;
    let best = 0;
    const cross = m.rain.calm ? CQ_RAIN_CROSS_CALM : CQ_RAIN_CROSS;
    const gap = m.rain.calm ? CQ_RAIN_GAP_CALM : CQ_RAIN_GAP;
    let speed = gameSpeed(0, cross, gap);

    const lanes = [...wrap.querySelectorAll(".cq-rain")].map((area, i) => ({
      area,
      ruleEl: area.querySelector(".cq-rain-rule"),
      mode: modes[i],
      target: pick(colors),
      rule: 0,
      prevTarget: null,
      changedAt: 0,
      balls: [],
      ruleAt: startAt + (m.rain.calm ? 7000 + i * 3000 : 5000 + i * 1800) + Math.random() * 2000,
      spawnAt: startAt + 400 + i * 300,
    }));
    if (duo) lanes[1].target = other(lanes[0].target);
    const isGood = (lane, color) => (lane.mode === "avoid" ? color !== lane.target : color === lane.target);

    const setRule = (lane) => {
      const ink = lane.mode === "stroop" ? other(lane.target) : lane.target;
      const word = `<b style="color:${CQ_RAIN_COLORS[ink]}">${tx.rainColors[lane.target]}</b>`;
      const text = lane.mode === "avoid" ? (duo ? tx.rainAvoidShort : tx.rainAvoid) : (duo ? tx.rainOnlyShort : tx.rainOnly);
      lane.ruleEl.innerHTML = `${lane.mode === "avoid" ? "🚫" : "✅"} ${fill(text, { c: word })}`;
      lane.ruleEl.classList.toggle("is-avoid", lane.mode === "avoid");
      lane.area.classList.toggle("is-avoid", lane.mode === "avoid");
      lane.area.classList.toggle("is-only", lane.mode !== "avoid");
      lane.ruleEl.classList.remove("is-new");
      void lane.ruleEl.offsetWidth;
      lane.ruleEl.classList.add("is-new");
    };
    lanes.forEach(setRule);
    const showScore = () => {
      out.textContent = streak;
      scoreEl.textContent = `🏆 ${best} · ${tx.record} ${Math.max(record, best)}`;
    };
    showScore();
    let last = startAt;
    sound.go();

    const finish = () => {
      btn.cqStop = null;
      btn.textContent = tx.restart;
      btn.closest(".cq-play").classList.remove("is-full");
      stopTimer();
      wrap.classList.remove("is-turbo");
      pause.remove();
      lanes.forEach((lane) => {
        lane.area.onpointerdown = null;
        lane.ruleEl.textContent = "";
        lane.balls.forEach((b) => b.el.remove());
        lane.balls = [];
      });
      out.textContent = best;
      sound.whistle();
      gameResult(input, best);
    };
    btn.cqStop = finish;

    const miss = (lane) => {
      const lost = pause.lose();
      if (!lost) return;
      lane.area.classList.remove("is-crash");
      void lane.area.offsetWidth;
      lane.area.classList.add("is-crash");
      tone(150, 0.3, { type: "sawtooth", vol: 0.1 });
      if (navigator.vibrate) navigator.vibrate(120);
      if (lost === "heart") return;
      const p = pause.hit(streak, best);
      startAt += p;
      lanes.forEach((l) => {
        l.ruleAt += p;
        l.spawnAt += p;
        l.changedAt += p;
      });
      streak = 0;
      showScore();
    };

    lanes.forEach((lane) => {
      lane.area.onpointerdown = (e) => {
        if (pause.frozen(Date.now())) return;
        // The tap goes to the ball whose centre is closest to the finger, not to whichever element is on top.
        const box = lane.area.getBoundingClientRect();
        const px = e.clientX - box.left;
        const py = e.clientY - box.top;
        let ball = null;
        let bestD = TAP_R;
        lane.balls.forEach((b) => {
          const d = Math.hypot(b.x - px, b.y - py);
          if (!b.done && d < bestD) {
            bestD = d;
            ball = b;
          }
        });
        if (!ball) return;
        e.preventDefault();
        ball.done = true;
        const el = ball.el;
        // Right after a rule change, a ball that was right under the old rule still counts as right.
        const justChanged = Date.now() - lane.changedAt < RULE_GRACE;
        if (isGood(lane, ball.color) || (justChanged && isGood({ ...lane, target: lane.prevTarget }, ball.color))) {
          streak += speed.points;
          if (streak > best) best = streak;
          showScore();
          popPoints(lane.area, ball.x, ball.y, speed.points);
          el.classList.add("is-hit");
          sound.tick();
        } else if (justChanged) {
          // The finger was already on its way when the colour changed: that tap is neither a point nor an error.
          el.style.opacity = "0.3";
        } else {
          el.classList.add("is-miss");
          miss(lane);
        }
        setTimeout(() => el.remove(), 300);
      };
    });

    // With two lanes each one drops balls a bit less often, so the screen stays readable.
    const slow = duo ? 1.4 : 1;
    timer = setInterval(() => {
      const now = Date.now();
      const dt = (now - last) / 1000;
      last = now;
      if (pause.frozen(now)) return;
      const next = gameSpeed((now - startAt) / 1000, cross, gap);
      if (next.li !== speed.li) showSpeedLevel(wrap, next.li);
      speed = next;
      const turbo = speed.li > 0 && !m.rain.calm;
      lanes.forEach((lane) => {
        if (now >= lane.ruleAt) {
          lane.prevTarget = lane.target;
          lane.changedAt = now;
          lane.target = other(lane.target);
          lane.rule++;
          lane.ruleAt = now + (m.rain.calm ? 7000 + Math.random() * 3000 : turbo ? 3000 + Math.random() * 1500 : 4500 + Math.random() * 2500);
          setRule(lane);
          sound.tick();
        }
        const w = lane.area.clientWidth;
        const h = lane.area.clientHeight;
        if (now >= lane.spawnAt) {
          lane.spawnAt = now + slow * speed.gap;
          const right = Math.random() < (lane.mode === "avoid" ? 0.3 : 0.4);
          const color = right ? lane.target : other(lane.target);
          const el = document.createElement("span");
          el.className = "cq-rain-ball";
          el.style.background = CQ_RAIN_COLORS[color];
          const x = 26 + Math.random() * (w - 52);
          el.style.transform = `translate(${x.toFixed(1)}px, -24px)`;
          lane.area.appendChild(el);
          lane.balls.push({ el, color, rule: lane.rule, x, y: -24 });
        }
        const v = h / speed.cross;
        lane.balls = lane.balls.filter((b) => {
          if (b.done) return false;
          b.y += v * dt;
          if (b.y > h + 30) {
            b.el.remove();
            // A right ball let through only counts if the rule hasn't changed since it appeared.
            if (b.rule === lane.rule && isGood(lane, b.color)) miss(lane);
            return false;
          }
          b.el.style.transform = `translate(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px)`;
          return true;
        });
      });
    }, 30);
  }

  const CQ_DODGE_CONE = `<svg viewBox="0 0 40 40"><path d="M20 3 L32 34 H8 Z" fill="#f97316"/><path d="M14.5 19 H25.5 L27.5 25 H12.5 Z" fill="#fff"/><rect x="5" y="33" width="30" height="4" rx="2" fill="#c2410c"/></svg>`;
  const pick = (list) => list[Math.floor(Math.random() * list.length)];

  /* Double dodge: one ball at the top of each half, obstacles rise from the bottom.
     Tapping a half moves its ball to the other column. Every obstacle passed adds points (more at each
     speed level, see CQ_SPEED) and a crash resets them.
     The match runs until Stop, and the result is the best score of the match. */
  const CQ_DODGE_CROSS = [2.8, 1.6, 1.35, 1.15];
  const CQ_DODGE_GAP = [1400, 780, 660, 560];

  function startDodge(m, btn, input) {
    if (btn.cqStop) return btn.cqStop();
    stopTimer();
    gameResult(input);
    const tx = t();
    const wrap = dialog.querySelector(".cq-rain-wrap");
    const out = wrap.querySelector(".cq-game-count");
    const scoreEl = btn.closest(".cq-timer").querySelector(".cq-rain-score");
    wrap.querySelectorAll(".cq-dodge-obs").forEach((el) => el.remove());
    wrap.classList.remove("is-turbo");
    btn.textContent = tx.stop;
    btn.closest(".cq-play").classList.add("is-full");
    const BALL_Y = 44;
    const HIT = 36;
    const record = state.records[m.id] ?? 0;
    let startAt = Date.now();
    const pause = gamePause(wrap, m, record);
    let streak = 0;
    let best = 0;
    let speed = gameSpeed(0, CQ_DODGE_CROSS, CQ_DODGE_GAP);

    const lanes = [...wrap.querySelectorAll(".cq-dodge")].map((area, i) => {
      area.querySelector(".cq-rain-rule").textContent = "";
      area.classList.remove("is-crash");
      area.classList.add("is-on");
      return { area, ballEl: area.querySelector(".cq-dodge-ball"), col: i, obs: [], bg: 0, spawnAt: startAt + 800 + i * 600 };
    });
    const placeBall = (lane) => {
      lane.ballEl.style.left = lane.col ? "75%" : "25%";
    };
    lanes.forEach(placeBall);
    const showScore = () => {
      out.textContent = streak;
      scoreEl.textContent = `🏆 ${best} · ${tx.record} ${Math.max(record, best)}`;
    };
    showScore();
    let last = startAt;
    sound.go();

    const finish = () => {
      btn.cqStop = null;
      btn.textContent = tx.restart;
      btn.closest(".cq-play").classList.remove("is-full");
      stopTimer();
      wrap.classList.remove("is-turbo");
      pause.remove();
      lanes.forEach((lane) => {
        lane.area.onpointerdown = null;
        lane.area.classList.remove("is-on");
        lane.obs.forEach((o) => o.el.remove());
        lane.obs = [];
      });
      out.textContent = best;
      sound.whistle();
      gameResult(input, best);
    };
    btn.cqStop = finish;

    lanes.forEach((lane) => {
      lane.area.onpointerdown = (e) => {
        e.preventDefault();
        if (pause.frozen(Date.now())) return;
        lane.col = 1 - lane.col;
        placeBall(lane);
      };
    });

    const crash = (lane) => {
      const lost = pause.lose();
      if (!lost) return;
      lane.area.classList.remove("is-crash");
      void lane.area.offsetWidth;
      lane.area.classList.add("is-crash");
      tone(150, 0.3, { type: "sawtooth", vol: 0.1 });
      if (navigator.vibrate) navigator.vibrate(150);
      if (lost === "heart") return;
      const p = pause.hit(streak, best);
      startAt += p;
      lanes.forEach((l) => (l.spawnAt += p));
      streak = 0;
      showScore();
    };

    timer = setInterval(() => {
      const now = Date.now();
      const dt = (now - last) / 1000;
      last = now;
      if (pause.frozen(now)) return;
      const next = gameSpeed((now - startAt) / 1000, CQ_DODGE_CROSS, CQ_DODGE_GAP);
      if (next.li !== speed.li) showSpeedLevel(wrap, next.li);
      speed = next;
      lanes.forEach((lane) => {
        const h = lane.area.clientHeight;
        const v = h / speed.cross;
        // The pitch scrolls with the obstacles.
        lane.bg = (lane.bg - v * dt) % 68;
        lane.area.style.backgroundPositionY = `${lane.bg.toFixed(1)}px`;
        if (now >= lane.spawnAt) {
          lane.spawnAt = now + speed.gap * (0.85 + Math.random() * 0.3);
          const col = Math.random() < 0.5 ? 0 : 1;
          const el = document.createElement("span");
          el.className = "cq-dodge-obs";
          el.innerHTML = CQ_DODGE_CONE;
          el.style.left = col ? "75%" : "25%";
          lane.area.appendChild(el);
          lane.obs.push({ el, col, y: h + 30 });
        }
        lane.obs = lane.obs.filter((o) => {
          o.y -= v * dt;
          if (!o.done && o.col === lane.col && Math.abs(o.y - BALL_Y) < HIT) {
            o.done = true;
            o.el.classList.add("is-hit");
            crash(lane);
            setTimeout(() => o.el.remove(), 300);
            return false;
          }
          if (!o.done && o.y < BALL_Y - HIT) {
            o.done = true;
            streak += speed.points;
            if (streak > best) best = streak;
            showScore();
            popPoints(lane.area, lane.area.clientWidth * (lane.col ? 0.75 : 0.25), BALL_Y + 34, speed.points);
          }
          if (o.y < -30) {
            o.el.remove();
            return false;
          }
          o.el.style.transform = `translateY(${o.y.toFixed(1)}px)`;
          return true;
        });
      });
    }, 30);
  }

  /* Blokolor: coloured lines at the bottom, each with a block of its colour that slides along it.
     Tapping (or dragging) on a line moves its block there. Balls fall from the top through the lines and
     must be eaten by the block of their own colour: touching another block, or getting through uneaten,
     resets the points. Speed and points per ball follow CQ_BLOK_AT.
     Rainbow balls can be eaten by any block and are worth double; bombs must touch no block, and letting
     one through scores. From TURBO x2 on, the colours swap between the lines every 20 to 28 s. */
  const CQ_BLOK_COLORS = ["yellow", "green", "blue", "red"];
  // Blokolor speeds up sooner and in bigger steps than the other games.
  const CQ_BLOK_AT = [0, 10, 35, 60, 85, 110];
  const CQ_BLOK_CROSS = [5.5, 4.0, 3.0, 2.4, 2.0, 1.7];
  const CQ_BLOK_GAP = [2300, 1600, 1200, 1000, 850, 730];

  function startBlok(m, btn, input) {
    if (btn.cqStop) return btn.cqStop();
    stopTimer();
    gameResult(input);
    const tx = t();
    const wrap = dialog.querySelector(".cq-rain-wrap");
    const area = wrap.querySelector(".cq-blok");
    const out = wrap.querySelector(".cq-game-count");
    const scoreEl = btn.closest(".cq-timer").querySelector(".cq-rain-score");
    area.querySelectorAll(".cq-rain-ball").forEach((el) => el.remove());
    wrap.classList.remove("is-turbo");
    area.classList.remove("is-crash");
    btn.textContent = tx.stop;
    btn.closest(".cq-play").classList.add("is-full");
    const R = 18;
    const record = state.records[m.id] ?? 0;
    let startAt = Date.now();
    let streak = 0;
    let best = 0;
    const pause = gamePause(wrap, m, record);
    let speed = gameSpeed(0, CQ_BLOK_CROSS, CQ_BLOK_GAP, CQ_BLOK_AT);
    let spawnAt = startAt + 900;
    let swapAt = startAt + (CQ_BLOK_AT[2] + 6) * 1000;
    let balls = [];
    const rows = [...area.querySelectorAll(".cq-blok-row")].map((row, i) => {
      const el = row.querySelector(".cq-blok-block");
      // offsetLeft is the block centre: it is placed by `left` and centred with `translate`.
      return { row, el, color: CQ_BLOK_COLORS[i], x: el.offsetLeft, target: el.offsetLeft };
    });
    // Lines and blocks are measured on every frame, as the layout changes with the full screen.
    const geo = () => {
      const top = area.getBoundingClientRect().top;
      return rows.map((r) => {
        const b = r.row.getBoundingClientRect();
        return { top: b.top - top, bottom: b.bottom - top, y: (b.top + b.bottom) / 2 - top, half: r.el.offsetWidth / 2, hh: r.el.offsetHeight / 2 };
      });
    };
    const showScore = () => {
      out.textContent = streak;
      scoreEl.textContent = `🏆 ${best} · ${tx.record} ${Math.max(record, best)}`;
    };
    showScore();
    let last = startAt;
    sound.go();

    const finish = () => {
      btn.cqStop = null;
      btn.textContent = tx.restart;
      btn.closest(".cq-play").classList.remove("is-full");
      stopTimer();
      wrap.classList.remove("is-turbo");
      area.onpointerdown = area.onpointermove = area.onpointerup = area.onpointercancel = null;
      area.classList.remove("is-on");
      pause.remove();
      balls.forEach((b) => b.el.remove());
      balls = [];
      out.textContent = best;
      sound.whistle();
      gameResult(input, best);
    };
    btn.cqStop = finish;

    // Each finger drags the line it pressed on. Releasing a finger also counts as a tap where it lifts,
    // so a press that started off the lines still moves the block of the line it ends on.
    const drags = new Map();
    const rowAt = (e) => {
      const y = e.clientY - area.getBoundingClientRect().top;
      return geo().findIndex((r) => y >= r.top && y <= r.bottom);
    };
    const moveTo = (i, e) => {
      const half = rows[i].el.offsetWidth / 2;
      rows[i].target = Math.max(half, Math.min(area.clientWidth - half, e.clientX - area.getBoundingClientRect().left));
    };
    area.classList.add("is-on");
    area.onpointerdown = (e) => {
      e.preventDefault();
      try { area.setPointerCapture(e.pointerId); } catch { /* the pointer is already gone */ }
      const i = rowAt(e);
      drags.set(e.pointerId, i);
      if (i >= 0) moveTo(i, e);
    };
    area.onpointermove = (e) => {
      const i = drags.get(e.pointerId);
      if (i >= 0) moveTo(i, e);
    };
    area.onpointerup = (e) => {
      const i = drags.get(e.pointerId) >= 0 ? drags.get(e.pointerId) : rowAt(e);
      if (i >= 0) moveTo(i, e);
      drags.delete(e.pointerId);
    };
    area.onpointercancel = (e) => drags.delete(e.pointerId);

    const crash = () => {
      const lost = pause.lose();
      if (!lost) return;
      area.classList.remove("is-crash");
      void area.offsetWidth;
      area.classList.add("is-crash");
      tone(150, 0.3, { type: "sawtooth", vol: 0.1 });
      if (navigator.vibrate) navigator.vibrate(150);
      if (lost === "heart") return;
      const p = pause.hit(streak, best);
      startAt += p;
      spawnAt += p;
      swapAt += p;
      streak = 0;
      showScore();
    };

    timer = setInterval(() => {
      const now = Date.now();
      const dt = (now - last) / 1000;
      last = now;
      if (pause.frozen(now)) return;
      const next = gameSpeed((now - startAt) / 1000, CQ_BLOK_CROSS, CQ_BLOK_GAP, CQ_BLOK_AT);
      if (next.li !== speed.li) showSpeedLevel(wrap, next.li);
      speed = next;
      const w = area.clientWidth;
      const h = area.clientHeight;
      const g = geo();
      // Blocks glide to where the finger is, crossing the whole screen in about 0.4 s.
      const step = w * 2.5 * dt;
      rows.forEach((r) => {
        const d = r.target - r.x;
        r.x += Math.sign(d) * Math.min(Math.abs(d), step);
        r.el.style.left = `${r.x.toFixed(1)}px`;
      });
      // A swap first stops new balls and waits for the screen to clear, so no ball is caught
      // halfway by the new colours; balls come back once the child has seen the new lines.
      const swapping = speed.li >= 2 && now >= swapAt;
      if (swapping && !balls.length) {
        swapAt = now + 20000 + Math.random() * 8000;
        spawnAt = now + 1500;
        // Rotating the colours guarantees every line gets a new one.
        const shift = 1 + Math.floor(Math.random() * (rows.length - 1));
        const next = rows.map((_, i) => rows[(i + shift) % rows.length].color);
        rows.forEach((r, i) => {
          r.color = next[i];
          r.row.style.setProperty("--c", CQ_RAIN_COLORS[r.color]);
          r.row.classList.remove("is-swap");
          void r.row.offsetWidth;
          r.row.classList.add("is-swap");
        });
        showSpeedLevel(wrap, speed.li, tx.blokSwap);
      }
      // The block's face: chomping when it eats, a scowl when the ball is not its colour.
      const mood = (el, cls) => {
        el.classList.remove("is-eat", "is-yuck");
        void el.offsetWidth;
        el.classList.add(cls);
        clearTimeout(el.cqMood);
        el.cqMood = setTimeout(() => el.classList.remove(cls), 700);
      };
      const score = (n, x, y) => {
        streak += n;
        if (streak > best) best = streak;
        showScore();
        popPoints(area, x, y, n);
        sound.tick();
      };
      if (!swapping && now >= spawnAt) {
        spawnAt = now + speed.gap * (0.85 + Math.random() * 0.3);
        // Specials only show up after the first seconds, once the child has got the idea.
        const roll = now - startAt > 5000 ? Math.random() : 1;
        const kind = roll < 0.08 ? "rainbow" : roll < 0.18 ? "bomb" : "color";
        const color = kind === "color" ? pick(rows.map((r) => r.color)) : kind;
        const el = document.createElement("span");
        el.className = `cq-rain-ball${kind === "color" ? "" : ` is-${kind}`}`;
        if (kind === "color") el.style.background = CQ_RAIN_COLORS[color];
        if (kind === "bomb") el.textContent = "💣";
        const x = R + 8 + Math.random() * (w - 2 * R - 16);
        el.style.transform = `translate(${x.toFixed(1)}px, ${-R}px)`;
        area.appendChild(el);
        balls.push({ el, color, x, y: -R });
      }
      const v = h / speed.cross;
      const hungry = new Set();
      balls = balls.filter((b) => {
        b.y += v * dt;
        for (let i = 0; i < rows.length; i++) {
          // A sliding block passes through balls; it only eats or crashes once it has stopped.
          if (rows[i].x !== rows[i].target) continue;
          // Any overlap counts, also when a block stops under a ball that is already level with it.
          const top = g[i].y - g[i].hh - R * 0.6;
          if (b.y < top || b.y > g[i].y + g[i].hh + R * 0.6) continue;
          if (Math.abs(b.x - rows[i].x) >= g[i].half + R * 0.6) continue;
          if (b.color === "rainbow" || rows[i].color === b.color) {
            score(b.color === "rainbow" ? speed.points * 2 : speed.points, b.x, top - 14);
            // The ball drops into the mouth.
            b.el.style.transform = `translate(${rows[i].x.toFixed(1)}px, ${g[i].y.toFixed(1)}px) scale(0.2)`;
            b.el.classList.add("is-eaten");
            mood(rows[i].el, "is-eat");
          } else {
            if (b.color === "bomb") b.el.textContent = "💥";
            b.el.classList.add("is-miss");
            mood(rows[i].el, "is-yuck");
            crash();
          }
          setTimeout(() => b.el.remove(), 300);
          return false;
        }
        if (b.y > h + R) {
          b.el.remove();
          if (b.color === "bomb") score(speed.points, b.x, h - 30);
          else crash();
          return false;
        }
        // A block opens its mouth wide when a ball it can eat is coming straight at it.
        rows.forEach((r, i) => {
          const edible = b.color === "rainbow" || b.color === r.color;
          if (edible && b.y > g[i].y - h * 0.3 && Math.abs(b.x - r.x) < g[i].half + R) hungry.add(i);
        });
        b.el.style.transform = `translate(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px)`;
        return true;
      });
      rows.forEach((r, i) => r.el.classList.toggle("is-open", hungry.has(i)));
    }, 30);
  }

  function toggleTimer(m, btn, input) {
    const tx = t();
    const box = btn.closest(".cq-timer");
    const out = box.querySelector("b");
    const finish = () => {
      stopTimer();
      box.classList.remove("is-running");
      btn.textContent = tx.start;
    };
    if (timer) {
      finish();
      if (box.dataset.phase === "ready") {
        out.textContent = m.timer.mode === "down" ? m.timer.s : 0;
        return;
      }
      if (m.timer.mode === "up") sound.whistle();
      if (m.timer.mode !== "down") input.value = out.textContent;
      return;
    }
    btn.textContent = tx.stop;
    box.classList.add("is-running");

    const run = () => {
      box.dataset.phase = "run";
      const startAt = Date.now();
      sound.go();
      if (m.timer.mode === "down") {
        let lastLeft = m.timer.s;
        timer = setInterval(() => {
          const left = Math.max(0, m.timer.s - Math.floor((Date.now() - startAt) / 1000));
          out.textContent = left;
          if (left !== lastLeft && left > 0 && left <= 3) sound.tick();
          lastLeft = left;
          if (left === 0) {
            finish();
            out.textContent = tx.time;
            sound.whistle();
            if (navigator.vibrate) navigator.vibrate(400);
            input.focus();
          }
        }, 100);
      } else if (m.timer.mode === "up") {
        timer = setInterval(() => { out.textContent = Math.floor((Date.now() - startAt) / 1000); }, 200);
      }
    };

    if (m.timer.mode === "breath") {
      const label = box.querySelector("em");
      const startAt = Date.now();
      let inhale = null;
      timer = setInterval(() => {
        const elapsed = (Date.now() - startAt) / 1000;
        const now = elapsed % 8 < 4;
        out.textContent = Math.floor(elapsed / 8);
        label.textContent = now ? tx.breathIn : tx.breathOut;
        if (now !== inhale) sound.breath(now);
        inhale = now;
      }, 200);
      return;
    }

    // 3-2-1 so the child can put the phone down and get ready.
    box.dataset.phase = "ready";
    const readyAt = Date.now();
    let shown = 0;
    timer = setInterval(() => {
      const n = 3 - Math.floor((Date.now() - readyAt) / 1000);
      if (n !== shown && n > 0) {
        shown = n;
        out.textContent = n;
        sound.tick();
      }
      if (n <= 0) {
        stopTimer();
        out.textContent = tx.go;
        run();
      }
    }, 100);
  }

  // Before the questions: meet each character of the crew and the emotion it stands for.
  function openCast(m) {
    const tx = t();
    openModal(`
      ${missionHeader(m)}
      ${m.cast.some((c) => c.emo) ? `<h4 class="cq-cast-title">${tx.meetCrew}</h4>` : ""}
      <ul class="cq-cast"><li class="cq-loading">${tx.loading}</li></ul>
      ${m.castNote ? `<p class="cq-note">${tr(m.castNote)}</p>` : ""}
      <button type="button" class="cq-btn" data-quiz>${tx.start}</button>`);
    dialog.querySelector("[data-quiz]").addEventListener("click", () => openQuiz(m));
    const list = dialog.querySelector(".cq-cast");
    // The faces and names live in the crew's animation file, loaded on demand.
    cqLoadAnim("cabine").then(() => {
      if (!list.isConnected) return;
      list.innerHTML = m.cast.map((c) => `
        <li><svg viewBox="-20 -34 40 56" aria-hidden="true">${cqMindFace(c.id)}</svg>
          <span><b>${tr(CQ_MIND_CAST[c.id].name)}</b>${c.emo ? ` · <em>${tr(c.emo)}</em><small>${tr(c.line)}</small>` : `<q>${tr(c.say)}</q>`}</span></li>`).join("");
    }).catch((err) => {
      console.warn("Craque:", err);
      list.remove();
    });
  }

  function openQuiz(m) {
    const tx = t();
    const pool = [...CQ_QUIZ[m.quiz]].sort(() => Math.random() - 0.5).slice(0, 3);
    let i = 0;
    let score = 0;

    const step = () => {
      const q = pool[i];
      const order = [0, 1, 2].sort(() => Math.random() - 0.5);
      openModal(`
        ${missionHeader(m)}
        <div class="cq-quiz">
          <small>${fill(tx.question, { i: i + 1, n: pool.length })}</small>
          <strong>${tr(q.q)}</strong>
          ${q.scene ? `<div class="cq-anim cq-board"></div>` : ""}
          <div class="cq-opts">${order.map((o) => `<button type="button" data-opt="${o}">${tr(q.opts[o])}</button>`).join("")}</div>
          <p class="cq-why" hidden></p>
          <button type="button" class="cq-btn" data-next hidden>${i + 1 < pool.length ? tx.next : tx.finish}</button>
        </div>`);
      if (q.scene) {
        const box = dialog.querySelector(".cq-board");
        cqLoadAnim(q.scene.anim || "quadro").then((scene) => {
          if (box.isConnected) stopAnim = scene(box, { label: tr(m.title), pick: tr, args: q.scene });
        }).catch((err) => {
          console.warn("Craque:", err);
          box.remove();
        });
      }

      const opts = dialog.querySelectorAll("[data-opt]");
      opts.forEach((b) => b.addEventListener("click", () => {
        const ok = b.dataset.opt === "0";
        if (ok) score++;
        opts.forEach((x) => {
          x.disabled = true;
          if (x.dataset.opt === "0") x.classList.add("is-right");
        });
        if (!ok) b.classList.add("is-wrong");
        const why = dialog.querySelector(".cq-why");
        why.innerHTML = `<b>${ok ? tx.correct : tx.wrong}</b> ${tr(q.why)}`;
        why.hidden = false;
        dialog.querySelector("[data-next]").hidden = false;
      }));
      dialog.querySelector("[data-next]").addEventListener("click", () => {
        i++;
        if (i < pool.length) step();
        else finishMission(m, score);
      });
    };
    step();
  }

  async function finishMission(m, value) {
    const tx = t();
    const isDaily = dailyIds().includes(m.id);
    const before = {};
    CQ_ATTRS.forEach((g) => g.subs.forEach((s) => { before[s] = subValue(s); }));
    CQ_ATTRS.forEach((g) => { before[g.id] = groupValue(g); });
    const phasesBefore = openPhaseCount();
    const streakSub = mission("streak").subs;

    // A result of 0 (a game stopped right away, nothing done) still counts as a try, but it is no record
    // and earns no XP, or starting and stopping a game would farm XP.
    const played = m.lower || value > 0;
    const prev = state.records[m.id];
    const isRecord = played && (prev == null || (beats(m, value, prev) && value !== prev));
    state.tries = { ...state.tries, [m.id]: triesOf(m.id) + 1 };
    if (isRecord) state.records[m.id] = value;

    const today = dayKey();
    const count = state.today.counts[m.id] || 0;
    // The daily bonus is paid on the first time the daily mission is done that day; repeats earn the normal XP.
    const xp = !played ? 0 : isDaily && count === 0 ? CQ_XP.daily : CQ_XP.normal;
    state.xp += xp;
    state.today.counts[m.id] = count + 1;

    if (state.streak.last !== today) {
      const y = new Date();
      y.setDate(y.getDate() - 1);
      state.streak.count = state.streak.last === dayKey(y) ? state.streak.count + 1 : 1;
      state.streak.last = today;
      state.streak.best = Math.max(state.streak.best || 0, state.streak.count);
      state.records.streak = state.streak.best;
    }

    dialog.innerHTML = `<p class="cq-loading">${tx.loading}</p>`;
    const medal = medalIndex(m, value);
    const [logged, pushed] = await Promise.all([logResult(m, value, medal, xp, isRecord), pushCloud()]);

    const up = new Set();
    const gains = [];
    [...new Set([...m.subs, ...streakSub])].forEach((s) => {
      const diff = subValue(s) - before[s];
      if (diff > 0) {
        up.add(s);
        gains.push(`<li><b>+${diff}</b> ${tr(CQ_SUBS[s])}</li>`);
      }
    });
    CQ_ATTRS.forEach((g) => { if (groupValue(g) > before[g.id]) up.add(g.id); });
    if (xp) gains.push(`<li><b>+${xp}</b> XP</li>`);

    const idx = medalIndex(m, state.records[m.id]);
    openModal(`
      <div class="cq-done">
        <span class="cq-medal is-big m-${idx}"></span>
        <strong>${idx >= 0 ? tx.medals[idx] : tx.noMedal}</strong>
        <h3>${isRecord ? tx.newRecord : fill(tx.keepGoing, { n: state.records[m.id] ?? 0 })}</h3>
        <p>${tr(m.title)}: <b>${value}</b> ${tr(m.unit)}</p>
        ${gains.length ? `<small>${tx.gains}</small><ul class="cq-gains">${gains.join("")}</ul>` : ""}
        ${openPhaseCount() > phasesBefore ? `<p class="cq-unlocked">🔓 ${tx.unlocked}</p>` : ""}
        ${logged && pushed ? "" : `<p class="cq-auth-msg">${tx.saveError}</p>`}
        <button type="button" class="cq-btn" data-back>${tx.back}</button>
      </div>`);
    dialog.querySelector("[data-back]").addEventListener("click", () => {
      closeModal();
      draw(up);
      animateXp(state.xp - xp);
    });
  }

  // The bar starts where it was before the mission and then fills up to the new XP.
  function animateXp(from) {
    const bar = app.querySelector(".cq-xpbar i");
    const box = app.querySelector(".cq-level");
    if (!bar || from >= state.xp) return;
    const target = bar.style.width;
    const sameLevel = Math.floor(from / CQ_XP.perLevel) === Math.floor(state.xp / CQ_XP.perLevel);
    bar.style.transition = "none";
    bar.style.width = sameLevel ? `${(from % CQ_XP.perLevel) / CQ_XP.perLevel * 100}%` : "0%";
    void bar.offsetWidth;
    bar.style.transition = "";
    setTimeout(() => {
      bar.style.width = target;
      popPoints(box, box.clientWidth / 2, 0, state.xp - from, "XP");
    }, 350);
    box.querySelectorAll(":scope > span:first-child, :scope > small").forEach((el) => el.classList.add("is-up"));
    xpToast(from);
  }

  // The XP gain also shows in a floating notice at the bottom of the screen, so the page never has to
  // scroll up to the level bar and the child stays where they were playing on the trail.
  function xpToast(from) {
    const tx = t();
    const per = CQ_XP.perLevel;
    const lvlUp = Math.floor(from / per) < Math.floor(state.xp / per);
    root.querySelector(".cq-xp-toast")?.remove();
    const el = document.createElement("div");
    el.className = "cq-xp-toast";
    el.innerHTML = `
      <b>⭐ +${state.xp - from} XP</b>
      <span class="cq-xpbar"><i style="width:${lvlUp ? 0 : (from % per) / per * 100}%"></i></span>
      <small>${lvlUp ? "🎉 " : ""}${tx.level} ${level()}${lvlUp ? "!" : ` · ${state.xp % per} / ${per} XP`}</small>`;
    root.appendChild(el);
    const bar = el.querySelector("i");
    setTimeout(() => (bar.style.width = `${(state.xp % per) / per * 100}%`), 400);
    setTimeout(() => el.classList.add("is-out"), 2800);
    setTimeout(() => el.remove(), 3300);
  }

  root.innerHTML = `
    <section class="page-hero cq-hero">
      <div class="wrap">
        <h1 class="page-title" data-cq="title"></h1>
      </div>
    </section>
    <section class="cq-section">
      <div class="wrap cq-app"></div>
    </section>
    <div class="cq-modal" hidden>
      <div class="cq-dialog" role="dialog" aria-modal="true"></div>
    </div>`;

  const app = root.querySelector(".cq-app");
  const modal = root.querySelector(".cq-modal");
  const dialog = root.querySelector(".cq-dialog");

  const updateHero = () => {
    root.querySelectorAll("[data-cq]").forEach((el) => { el.textContent = t()[el.dataset.cq]; });
  };

  app.addEventListener("click", (e) => {
    const card = e.target.closest(".cq-card:not([disabled])");
    if (card) openDetails();
    const ms = e.target.closest("[data-mission]");
    if (ms) openMission(ms.dataset.mission);
    const ph = e.target.closest("[data-phase]:not([disabled])");
    if (ph) openPhase(ph.dataset.phase);
    if (e.target.closest(".cq-reset") && confirm(t().resetConfirm)) {
      state = emptyState();
      cloud.from("mission_results").delete().eq("user_id", user.id).then(({ error }) => {
        if (error) console.warn("Craque: history not cleared", error);
      });
      save();
      draw();
    }
    if (e.target.closest(".cq-logout")) {
      if (saveTimer) pushCloud();
      cloud.auth.signOut();
      user = null;
      state = emptyState();
      draw();
    }
  });

  // On the result screen every way out must redraw the home, or newly unlocked missions stay hidden.
  const dismiss = () => {
    const back = dialog.querySelector("[data-back]");
    if (back) back.click();
    else closeModal();
  };
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".cq-close")) return dismiss();
    const ms = e.target.closest(".cq-missions [data-mission]");
    if (ms) openMission(ms.dataset.mission);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) dismiss();
  });
  document.addEventListener("rs:lang", () => {
    closeModal();
    updateHero();
    draw();
  });

  updateHero();

  if (!cloud) {
    draw();
  } else {
    app.innerHTML = `<p class="cq-loading">${t().loading}</p>`;
    cloud.auth.getSession().then(({ data }) => {
      if (data.session) enter(data.session.user);
      else renderAuth(location.hash === "#signup" ? "signup" : "login");
    });
  }
}
