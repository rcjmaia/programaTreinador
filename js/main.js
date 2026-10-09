I18N.init();
renderLayout();
syncLinks();

if (document.body.dataset.page === "showcase") {
  renderVitrine();
}

if (document.body.dataset.page === "nutrition") {
  renderNutrition();
}

if (document.body.dataset.page === "about") {
  renderCourses();
  renderCertificates();
}

const hotmartKey = document.body.dataset.hotmartProduct;
if (hotmartKey) {
  bindHotmart(hotmartKey);
  document.addEventListener("rs:lang", () => bindHotmart(hotmartKey));
}
