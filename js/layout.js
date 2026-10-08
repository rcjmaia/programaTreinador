const WA_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 2.1 17.7L1 23l5.5-1.1A11 11 0 1 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.3.7.7-3.2-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.6 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z"/></svg>`;

const MAIL_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V17h16V7.3zM5.2 7l6.8 4.1L18.8 7z"/></svg>`;

const YT_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z"/></svg>`;

const IG_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3.1 0-4.1.1-4.4.2-5.6 2.6-5.8 5.8C2 8.9 2 9.3 2 12s0 3.1.1 4.1c.2 3.2 1.4 5.6 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.2-.2 5.6-1.4 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.2-3.2-1.4-5.6-5.8-5.8C15.1 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C3.9 5.3 5.3 3.9 8 3.9c1-.1 1.3-.1 4-.1z"/></svg>`;

function waLink() {
  const text = encodeURIComponent(I18N.t("wa.message"));
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

function renderLayout() {
  const page = document.body.dataset.page || "home";
  const trainingPages = ["gk", "school", "adult", "physical", "tactical", "studies", "mind"];
  const trainActive = trainingPages.includes(page);

  const header = document.getElementById("site-header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="index.html">
        <span class="brand-mark">
          <img src="img/logo/logo.png" alt="RENATO SCOUT" onload="this.nextElementSibling.hidden=true" onerror="this.remove()">
          <span class="initials">RS</span>
        </span>
        <span class="brand-text">
          <strong data-i18n="brand.name"></strong>
          <span data-i18n="brand.tagline"></span>
        </span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Menu">☰</button>
      <nav class="nav" id="main-nav">
        <a href="index.html" class="${page === "home" ? "is-active" : ""}" data-i18n="nav.home"></a>
        <a href="vitrine.html" class="${page === "showcase" ? "is-active" : ""}" data-i18n="nav.showcase"></a>
        <a href="sobre.html" class="${page === "about" ? "is-active" : ""}" data-i18n="nav.about"></a>
        <div class="nav-drop ${trainActive ? "has-active" : ""}" id="train-drop">
          <button type="button" data-i18n="nav.trainings"></button>
          <div class="nav-drop-menu">
            <a href="goleiros.html" class="${page === "gk" ? "is-active" : ""}" data-i18n="nav.gk"></a>
            <a href="escolinha.html" class="${page === "school" ? "is-active" : ""}" data-i18n="nav.school"></a>
            <a href="adulto.html" class="${page === "adult" ? "is-active" : ""}" data-i18n="nav.adult"></a>
            <a href="fisico.html" class="${page === "physical" ? "is-active" : ""}" data-i18n="nav.physical"></a>
            <a href="tatico.html" class="${page === "tactical" ? "is-active" : ""}" data-i18n="nav.tactical"></a>
            <a href="estudos.html" class="${page === "studies" ? "is-active" : ""}" data-i18n="nav.studies"></a>
            <a href="mente.html" class="${page === "mind" ? "is-active" : ""}" data-i18n="nav.mind"></a>
          </div>
        </div>
      </nav>
      <div class="lang-switch" role="group">
        <button type="button" data-lang="pt">PT</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="es">ES</button>
      </div>
      <a class="header-cta" id="header-wa" target="_blank" rel="noopener" data-i18n="nav.contact"></a>
    </div>
  `;

  const footer = document.getElementById("site-footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap footer-top">
      <a class="footer-brand" href="index.html" data-i18n="brand.name"></a>
      <nav class="footer-nav">
        <a href="index.html" data-i18n="nav.home"></a>
        <a href="vitrine.html" data-i18n="nav.showcase"></a>
        <a href="sobre.html" data-i18n="nav.about"></a>
      </nav>
      <div class="footer-contact">
        <a id="footer-wa" class="footer-pill is-wa" target="_blank" rel="noopener">${WA_ICON}<span>WhatsApp</span></a>
        <a class="footer-pill is-ig" href="${SITE.instagram}" target="_blank" rel="noopener">${IG_ICON}<span>Instagram</span></a>
        <a class="footer-pill is-yt" href="${SITE.youtube}" target="_blank" rel="noopener">${YT_ICON}<span>YouTube</span></a>
        <a class="footer-pill" href="mailto:${SITE.email}">${MAIL_ICON}<span>${SITE.email}</span></a>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>© ${new Date().getFullYear()} Renato Scout</span>
      <span data-i18n="footer.disclaimer"></span>
    </div>
  `;

  let float = document.querySelector(".wa-float");
  if (!float) {
    float = document.createElement("a");
    float.className = "wa-float";
    float.target = "_blank";
    float.rel = "noopener";
    float.setAttribute("aria-label", "WhatsApp");
    float.innerHTML = WA_ICON;
    document.body.appendChild(float);
  }

  bindLayout();
  syncLinks();
  I18N.apply();
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === I18N.lang);
  });
}

function bindLayout() {
  document.querySelector(".menu-toggle")?.addEventListener("click", () => {
    const nav = document.getElementById("main-nav");
    nav?.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", Boolean(nav?.classList.contains("is-open")));
  });

  const drop = document.getElementById("train-drop");
  drop?.querySelector("button")?.addEventListener("click", (e) => {
    e.stopPropagation();
    drop.classList.toggle("is-open");
  });
  document.addEventListener("click", () => drop?.classList.remove("is-open"));

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => I18N.setLang(btn.dataset.lang));
  });
}

function syncLinks() {
  const href = waLink();
  document.querySelectorAll("#header-wa, #footer-wa, .wa-float, [data-wa]").forEach((el) => {
    el.href = href;
  });
}

function bindHotmart(key) {
  const url = SITE.hotmart[key];
  const btn = document.querySelector("a[data-hotmart]");
  if (!btn) return;
  if (url) {
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.classList.remove("is-disabled");
    btn.removeAttribute("aria-disabled");
    btn.textContent = I18N.t("moduleCta.hotmart");
  } else {
    btn.removeAttribute("href");
    btn.classList.add("is-disabled");
    btn.setAttribute("aria-disabled", "true");
    btn.textContent = I18N.t("moduleCta.soon");
  }
}

document.addEventListener("rs:lang", () => {
  syncLinks();
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === I18N.lang);
  });
});
