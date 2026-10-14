// Untrained attributes sit at CQ_BASE; each mission's best medal moves its attributes
// from the bottom (Bronze) to the top (Legend) of CQ_MEDAL_RANGE.
const CQ_BASE = 40;
const CQ_MEDAL_RANGE = [55, 92];
const CQ_XP = { normal: 10, daily: 20, perLevel: 100, dailyCap: 3 };

// The first six follow the FIFA card; "int" and "cab" are the academy's own groups.
const CQ_ATTRS = [
  { id: "rit", subs: ["acceleration", "sprint"] },
  { id: "fin", subs: ["attpos", "finishing", "power", "longshots", "volleys", "penalties", "freekick"] },
  { id: "pas", subs: ["vision", "cross", "short", "long", "curve"] },
  { id: "con", subs: ["agility", "balance", "reactions", "control", "carry", "dribble", "composure"] },
  { id: "def", subs: ["interceptions", "heading", "awareness", "standing", "sliding"] },
  { id: "fis", subs: ["jumping", "stamina", "strength", "combat"] },
  { id: "int", subs: ["positioning", "recovery", "reading", "decision", "teamplay", "communication"] },
  { id: "cab", subs: ["concentration", "courage", "resilience", "confidence", "discipline", "fairplay"] },
];

const CQ_SHIRTS = ["#2563eb", "#dc2626", "#16a34a", "#f59e0b", "#111827"];
const CQ_SKINS = ["#f6d3b3", "#d9a273", "#a86b3c", "#6b4226"];

const CQ_TEXT = {
  pt: {
    kicker: "Escolinha",
    title: "Craque Inteligente",
    lead: "Treine, registre seus resultados e veja sua carta evoluir.",
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
    trailsHint: "Ganhe Bronze em todas as missões de uma fase para liberar a próxima.",
    freeTraining: "Treino livre",
    phase: "Fase {n}",
    lockedHint: "Bloqueada: ganhe Bronze na fase anterior.",
    pickMission: "Escolha a missão",
    unlocked: "Nova fase liberada! Veja nas Trilhas.",
    autoInfo: "Essa missão sobe sozinha: é só treinar em dias seguidos.",
    noCloud: "O banco de dados não está configurado. Fale com o Renato.",
    saveError: "Não consegui salvar. Confira a internet e tente de novo.",
    record: "Recorde",
    notDone: "Ainda não feita",
    types: { ball: "Com bola", move: "Movimento", quiz: "Jogo", mind: "Cabeça", auto: "Automática" },
    howMany: "Quantos {unit} você fez?",
    save: "Salvar resultado",
    start: "Iniciar",
    stop: "Parar",
    time: "Tempo!",
    newRecord: "Novo recorde!",
    keepGoing: "Seu recorde é {n}. Você consegue bater!",
    gains: "Você ganhou",
    xpCap: "XP desta missão já contou 3 vezes hoje. Amanhã tem mais!",
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
    attrs: { rit: ["RIT", "Ritmo"], fin: ["FIN", "Finalização"], pas: ["PAS", "Passes"], con: ["CON", "Condução"], def: ["DEF", "Defesa"], fis: ["FIS", "Físico"], int: ["INT", "Inteligência"], cab: ["CAB", "Cabeça"] },
    positions: { gk: "GOL", cb: "ZAG", fb: "LAT", dm: "VOL", am: "MEI", st: "ATA" },
    foot: "Pé preferido",
    feet: { right: "Direito", left: "Esquerdo" },
    weakFoot: "Pé fraco",
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
    kicker: "Youth academy",
    title: "Smart Player",
    lead: "Train, log your results and watch your card grow.",
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
    trailsHint: "Earn Bronze in every mission of a stage to unlock the next one.",
    freeTraining: "Free training",
    phase: "Stage {n}",
    lockedHint: "Locked: earn Bronze in the previous stage.",
    pickMission: "Pick a mission",
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
    stop: "Stop",
    time: "Time!",
    newRecord: "New record!",
    keepGoing: "Your best is {n}. You can beat it!",
    gains: "You earned",
    xpCap: "This mission already gave XP 3 times today. More tomorrow!",
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
    attrs: { rit: ["PAC", "Pace"], fin: ["SHO", "Shooting"], pas: ["PAS", "Passing"], con: ["DRI", "Dribbling"], def: ["DEF", "Defending"], fis: ["PHY", "Physical"], int: ["INT", "Intelligence"], cab: ["MEN", "Mental"] },
    positions: { gk: "GK", cb: "CB", fb: "FB", dm: "DM", am: "AM", st: "ST" },
    foot: "Preferred foot",
    feet: { right: "Right", left: "Left" },
    weakFoot: "Weak foot",
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
    kicker: "Escuelita",
    title: "Crack Inteligente",
    lead: "Entrena, anota tus resultados y mira cómo evoluciona tu carta.",
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
    trailsHint: "Gana Bronce en todas las misiones de una fase para desbloquear la siguiente.",
    freeTraining: "Entrenamiento libre",
    phase: "Fase {n}",
    lockedHint: "Bloqueada: gana Bronce en la fase anterior.",
    pickMission: "Elige la misión",
    unlocked: "¡Nueva fase desbloqueada! Mírala en Caminos.",
    autoInfo: "Esta misión sube sola: solo entrena días seguidos.",
    noCloud: "La base de datos no está configurada.",
    saveError: "No pude guardar. Revisa la conexión e inténtalo de nuevo.",
    record: "Récord",
    notDone: "Aún no hecha",
    types: { ball: "Con balón", move: "Movimiento", quiz: "Juego", mind: "Cabeza", auto: "Automática" },
    howMany: "¿Cuántos {unit} hiciste?",
    save: "Guardar resultado",
    start: "Iniciar",
    stop: "Parar",
    time: "¡Tiempo!",
    newRecord: "¡Nuevo récord!",
    keepGoing: "Tu récord es {n}. ¡Puedes superarlo!",
    gains: "Ganaste",
    xpCap: "Esta misión ya dio XP 3 veces hoy. ¡Mañana hay más!",
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
    attrs: { rit: ["RIT", "Ritmo"], fin: ["TIR", "Tiro"], pas: ["PAS", "Pase"], con: ["REG", "Regate"], def: ["DEF", "Defensa"], fis: ["FIS", "Físico"], int: ["INT", "Inteligencia"], cab: ["MEN", "Mental"] },
    positions: { gk: "POR", cb: "DFC", fb: "LAT", dm: "MCD", am: "MP", st: "DC" },
    foot: "Pie preferido",
    feet: { right: "Derecho", left: "Izquierdo" },
    weakFoot: "Pierna débil",
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
  attpos: ["Pos. ataque", "Att. positioning", "Pos. ofensivo"],
  finishing: ["Finalização", "Finishing", "Definición"],
  power: ["Força chute", "Shot power", "Potencia"],
  longshots: ["Ch. de longe", "Long shots", "Tiros lejanos"],
  volleys: ["Voleio", "Volleys", "Voleas"],
  penalties: ["Pênaltis", "Penalties", "Penaltis"],
  vision: ["Visão", "Vision", "Visión"],
  cross: ["Cruzamento", "Crossing", "Centros"],
  freekick: ["Cobr. falta", "FK accuracy", "Tiros libres"],
  short: ["Passe curto", "Short passing", "Pase corto"],
  long: ["Lançamento", "Long passing", "Pase largo"],
  curve: ["Curva", "Curve", "Efecto"],
  agility: ["Agilidade", "Agility", "Agilidad"],
  balance: ["Equilíbrio", "Balance", "Equilibrio"],
  reactions: ["Reação", "Reactions", "Reacciones"],
  control: ["Contr. bola", "Ball control", "Control"],
  carry: ["Condução", "Ball carrying", "Conducción"],
  dribble: ["Drible", "Dribbling", "Regate"],
  composure: ["Frieza", "Composure", "Compostura"],
  interceptions: ["Intercept.", "Interceptions", "Intercepciones"],
  heading: ["Cabeceio", "Heading", "Cabezazo"],
  awareness: ["Noção def.", "Def. awareness", "Conciencia def."],
  standing: ["Div. em pé", "Standing tackle", "Entrada de pie"],
  sliding: ["Carrinho", "Sliding tackle", "Barrida"],
  jumping: ["Impulsão", "Jumping", "Salto"],
  stamina: ["Fôlego", "Stamina", "Resistencia"],
  strength: ["Força", "Strength", "Fuerza"],
  combat: ["Combativ.", "Aggression", "Agresividad"],
  positioning: ["Posic. sem bola", "Off-ball position", "Posic. sin balón"],
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

  function emptyState() {
    return { player: null, records: {}, xp: 0, streak: { last: "", count: 0, best: 0 }, today: { date: "", counts: {} } };
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

  function medalIndex(m, value) {
    if (value == null) return -1;
    let idx = -1;
    m.tiers.forEach((tier, i) => { if (value >= tier) idx = i; });
    return idx;
  }

  function missionValue(m) {
    const idx = medalIndex(m, state.records[m.id]);
    if (idx < 0) return CQ_BASE;
    const [low, high] = CQ_MEDAL_RANGE;
    return Math.round(low + (high - low) * idx / (m.tiers.length - 1));
  }

  const isUnlocked = (sub) => CQ_MISSIONS.some((m) => m.subs.includes(sub));

  function subValue(sub) {
    const ms = CQ_MISSIONS.filter((m) => m.subs.includes(sub));
    if (!ms.length) return CQ_BASE;
    return Math.round(ms.reduce((a, m) => a + missionValue(m), 0) / ms.length);
  }

  function groupValue(group) {
    const subs = group.subs.filter(isUnlocked);
    if (!subs.length) return CQ_BASE;
    return Math.round(subs.reduce((a, s) => a + subValue(s), 0) / subs.length);
  }

  const overall = () => Math.round(CQ_ATTRS.reduce((a, g) => a + groupValue(g), 0) / CQ_ATTRS.length);

  function tierOf(ovr) {
    if (ovr >= 80) return 3;
    if (ovr >= 68) return 2;
    if (ovr >= 55) return 1;
    return 0;
  }

  const level = () => Math.floor(state.xp / CQ_XP.perLevel) + 1;

  const phaseDone = (phase) => phase.every((id) => medalIndex(mission(id), state.records[id]) >= 0);
  const phaseOpen = (trail, i) => i === 0 || phaseDone(trail.phases[i - 1]);
  const missionOpen = (id) => CQ_TRAILS.some((tl) => tl.phases.some((ph, i) => ph.includes(id) && phaseOpen(tl, i)));
  const openMissions = () => CQ_MISSIONS.filter((m) => m.type !== "auto" && missionOpen(m.id));
  const openPhaseCount = () => CQ_TRAILS.reduce((a, tl) => a + tl.phases.filter((_, i) => phaseOpen(tl, i)).length, 0);

  function dailyIds() {
    const today = dayKey();
    if (state.today.date !== today) state.today = { date: today, counts: {} };
    if (!state.today.daily) {
      state.today.daily = pickDaily();
      if (state.player) save();
    }
    return state.today.daily;
  }

  function pickDaily() {
    const seed = dayNumber();
    const open = openMissions();
    const ofType = (...types) => open.filter((m) => types.includes(m.type));
    const balls = ofType("ball", "move");
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
    const ovr = overall();
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

  const weakFootStars = () => Math.min(5, medalIndex(mission("weak"), state.records.weak) + 2);
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
          <span>${tx.weakFoot}: <b class="cq-stars">${stars(weakFootStars())}</b></span>
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
          <span class="cq-mission-tag">${tx.types[m.type]}${daily ? ` · <i>${tx.dailyHint}</i>` : ""}</span>
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
          <p class="cq-hint">${tx.trailsHint}</p>
          <div class="cq-trails">${CQ_TRAILS.map(trailRow).join("")}</div>
          <h2 class="cq-h">${tx.freeTraining}</h2>
          <div class="cq-missions is-compact">${openMissions().filter((m) => !daily.includes(m.id)).map((m) => missionCard(m, false)).join("")}</div>
          <button type="button" class="cq-reset">${tx.reset}</button>
        </div>
      </div>`;
  }

  function trailRow(tl) {
    const tx = t();
    const group = CQ_ATTRS.find((g) => g.id === tl.id);
    const nodes = tl.phases.map((ph, i) => {
      const open = phaseOpen(tl, i);
      const done = open && phaseDone(ph);
      const cls = done ? "is-done" : open ? "is-current" : "is-locked";
      const icons = ph.map((id) => {
        const m = mission(id);
        return `<span class="cq-node-m"><span>${m.icon}</span><span class="cq-medal m-${medalIndex(m, state.records[id])}"></span></span>`;
      }).join("");
      return `
        <button type="button" class="cq-node ${cls}" data-phase="${tl.id}:${i}" ${open ? "" : `disabled title="${tx.lockedHint}"`}>
          <small>${fill(tx.phase, { n: i + 1 })}</small>
          <span class="cq-node-icons">${open ? icons : "🔒"}</span>
        </button>`;
    }).join(`<span class="cq-node-link" aria-hidden="true"></span>`);
    return `
      <div class="cq-trail">
        <span class="cq-trail-name"><b>${groupValue(group)}</b> ${tx.attrs[tl.id][1]}</span>
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
    dialog.classList.remove("is-wide");
    dialog.innerHTML = `<button type="button" class="cq-close" aria-label="×">×</button>${html}`;
    modal.hidden = false;
    document.body.classList.add("cq-lock");
  }

  function closeModal() {
    stopTimer();
    modal.hidden = true;
    document.body.classList.remove("cq-lock");
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function missionHeader(m) {
    const tx = t();
    const idx = medalIndex(m, state.records[m.id]);
    return `
      <span class="cq-mission-tag">${tx.types[m.type]}</span>
      <h3>${m.icon} ${tr(m.title)}</h3>
      <p>${tr(m.desc)}</p>
      <div class="cq-tiers">
        ${m.tiers.map((v, i) => `<span class="${i <= idx ? "is-done" : ""}"><span class="cq-medal m-${i}"></span>${v}</span>`).join("")}
      </div>`;
  }

  function openMission(id) {
    const m = mission(id);
    if (m.type === "quiz") return openQuiz(m);
    const tx = t();
    if (m.type === "auto") {
      return openModal(`
        ${missionHeader(m)}
        <p class="cq-note">${tx.autoInfo}</p>
        <p>${tx.record}: <b>${state.records[m.id] ?? 0}</b> ${tr(m.unit)}</p>`);
    }
    const steps = m.steps ? `<ol class="cq-steps">${m.steps.map((s) => `<li>${tr(s)}</li>`).join("")}</ol>` : "";
    let tool = "";
    if (m.timer?.mode === "down") tool = `<div class="cq-timer"><b>${m.timer.s}</b><button type="button" class="cq-btn is-ghost" data-timer>${tx.start}</button></div>`;
    if (m.timer?.mode === "up") tool = `<div class="cq-timer"><b>0</b><button type="button" class="cq-btn is-ghost" data-timer>${tx.start}</button></div>`;
    if (m.timer?.mode === "breath") tool = `<div class="cq-timer is-breath"><span class="cq-ball"></span><em></em><b>0</b><button type="button" class="cq-btn is-ghost" data-timer>${tx.start}</button></div>`;

    openModal(`
      ${missionHeader(m)}
      ${steps}
      ${tool}
      <form class="cq-result-form">
        <label><span>${fill(tx.howMany, { unit: tr(m.unit) })}</span>
          <input type="number" name="value" min="0" max="${m.max ?? 999}" inputmode="numeric" required></label>
        <button type="submit" class="cq-btn">${tx.save}</button>
      </form>`);

    const input = dialog.querySelector('input[name="value"]');
    const timerBtn = dialog.querySelector("[data-timer]");
    if (timerBtn) timerBtn.addEventListener("click", () => toggleTimer(m, timerBtn, input));

    dialog.querySelector(".cq-result-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const v = Math.max(0, Math.min(m.max ?? 999, parseInt(input.value, 10) || 0));
      finishMission(m, v);
    });
  }

  function toggleTimer(m, btn, input) {
    const tx = t();
    const box = btn.closest(".cq-timer");
    const out = box.querySelector("b");
    if (timer) {
      stopTimer();
      box.classList.remove("is-running");
      btn.textContent = tx.start;
      if (m.timer.mode !== "down") input.value = out.textContent;
      return;
    }
    btn.textContent = tx.stop;
    box.classList.add("is-running");
    const startAt = Date.now();
    if (m.timer.mode === "down") {
      timer = setInterval(() => {
        const left = Math.max(0, m.timer.s - Math.floor((Date.now() - startAt) / 1000));
        out.textContent = left;
        if (left === 0) {
          stopTimer();
          box.classList.remove("is-running");
          out.textContent = tx.time;
          btn.textContent = tx.start;
          if (navigator.vibrate) navigator.vibrate(400);
          input.focus();
        }
      }, 200);
    } else if (m.timer.mode === "up") {
      timer = setInterval(() => { out.textContent = Math.floor((Date.now() - startAt) / 1000); }, 200);
    } else {
      const label = box.querySelector("em");
      timer = setInterval(() => {
        const elapsed = (Date.now() - startAt) / 1000;
        out.textContent = Math.floor(elapsed / 8);
        label.textContent = elapsed % 8 < 4 ? tx.breathIn : tx.breathOut;
      }, 200);
    }
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
          <div class="cq-opts">${order.map((o) => `<button type="button" data-opt="${o}">${tr(q.opts[o])}</button>`).join("")}</div>
          <p class="cq-why" hidden></p>
          <button type="button" class="cq-btn" data-next hidden>${i + 1 < pool.length ? tx.next : tx.finish}</button>
        </div>`);

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

    const prev = state.records[m.id];
    const isRecord = prev == null || value > prev;
    if (isRecord) state.records[m.id] = value;

    const today = dayKey();
    const count = state.today.counts[m.id] || 0;
    let xp = 0;
    if (count < CQ_XP.dailyCap) {
      xp = isDaily ? CQ_XP.daily : CQ_XP.normal;
      state.xp += xp;
    }
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
        <h3>${isRecord ? tx.newRecord : fill(tx.keepGoing, { n: state.records[m.id] })}</h3>
        <p>${tr(m.title)}: <b>${value}</b> ${tr(m.unit)}</p>
        ${gains.length ? `<small>${tx.gains}</small><ul class="cq-gains">${gains.join("")}</ul>` : ""}
        ${xp ? "" : `<p class="cq-note">${tx.xpCap}</p>`}
        ${openPhaseCount() > phasesBefore ? `<p class="cq-unlocked">🔓 ${tx.unlocked}</p>` : ""}
        ${logged && pushed ? "" : `<p class="cq-auth-msg">${tx.saveError}</p>`}
        <button type="button" class="cq-btn" data-back>${tx.back}</button>
      </div>`);
    dialog.querySelector("[data-back]").addEventListener("click", () => {
      closeModal();
      draw(up);
      if (up.size) app.querySelector(".cq-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  root.innerHTML = `
    <section class="page-hero cq-hero">
      <div class="wrap">
        <p class="hero-kicker" data-cq="kicker"></p>
        <h1 class="page-title" data-cq="title"></h1>
        <p class="lead" data-cq="lead"></p>
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

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".cq-close")) closeModal();
    const ms = e.target.closest(".cq-missions [data-mission]");
    if (ms) openMission(ms.dataset.mission);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
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
