function renderVitrine() {
  const filters = document.getElementById("position-filters");
  const grid = document.getElementById("video-grid");
  if (!filters || !grid) return;

  let current = "all";

  function drawFilters() {
    filters.innerHTML = POSITIONS.map(
      (pos) =>
        `<button type="button" data-pos="${pos}" class="${pos === current ? "is-active" : ""}">${I18N.t("positions." + pos)}</button>`
    ).join("");
    filters.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        current = btn.dataset.pos;
        draw();
      });
    });
  }

  function drawGrid() {
    const list = (VITRINE_VIDEOS || []).filter(
      (v) => v.youtubeId && (current === "all" || v.position === current)
    );

    if (!list.length) {
      grid.innerHTML = `<div class="empty-state" role="status" data-i18n="showcasePage.empty"></div>`;
      I18N.apply();
      return;
    }

    grid.innerHTML = list
      .map((v) => {
        const name = v.name || I18N.t("showcasePage.unnamed");
        const posLabel = I18N.t("positions." + v.position);
        return `
          <article class="video-card">
            <iframe
              src="https://www.youtube.com/embed/${encodeURIComponent(v.youtubeId)}"
              title="${name}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"></iframe>
            <div class="video-meta">
              <div class="pos">${posLabel}</div>
              <strong>${name}</strong>
            </div>
          </article>`;
      })
      .join("");
  }

  function draw() {
    drawFilters();
    drawGrid();
  }

  draw();
  document.addEventListener("rs:lang", draw);
}
