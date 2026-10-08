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
        const id = encodeURIComponent(v.youtubeId);
        const start = Number(v.start) || 0;
        const badge = v.inactive
          ? `<span class="video-badge">${I18N.t("showcasePage.inactive")}</span>`
          : "";
        const player = v.external
          ? `<a class="video-thumb" href="https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ""}" target="_blank" rel="noopener" aria-label="${name}">
              <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
              <span class="video-play"></span>
            </a>`
          : `<iframe
              src="https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ""}"
              title="${name}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"></iframe>`;
        return `
          <article class="video-card">
            ${player}
            <div class="video-meta">
              <div class="pos">${posLabel}</div>
              <strong>${name}</strong>
              ${badge}
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
