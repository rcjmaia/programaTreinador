function renderCourses() {
  const list = document.getElementById("course-list");
  if (!list) return;
  list.innerHTML = COURSES.map(
    ([name, school, hours]) => `
      <li class="course">
        <span class="course-hours">${hours}h</span>
        <div>
          <strong>${name}</strong>
          <span>${school}</span>
        </div>
      </li>`
  ).join("");
}

function renderCertificates() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  grid.innerHTML = CERTIFICATES.map((file, i) => {
    const src = `img/certificados/${encodeURIComponent(file)}`;
    return `
      <a class="cert cert-link" href="${src}" target="_blank" rel="noopener">
        <img src="${src}" alt="Certificado ${i + 1}" loading="lazy">
      </a>`;
  }).join("");
}
