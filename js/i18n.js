const I18N = {
  lang: "pt",

  init() {
    const saved = localStorage.getItem("rs-lang");
    this.lang = saved && TRANSLATIONS[saved] ? saved : "pt";
    this.apply();
  },

  t(path) {
    const parts = path.split(".");
    let node = TRANSLATIONS[this.lang];
    for (const p of parts) {
      node = node?.[p];
    }
    return node ?? path;
  },

  setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.lang = lang;
    localStorage.setItem("rs-lang", lang);
    this.apply();
    document.dispatchEvent(new CustomEvent("rs:lang"));
  },

  apply() {
    document.documentElement.lang = this.lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = this.t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = this.t(el.getAttribute("data-i18n-html"));
    });
  },
};
