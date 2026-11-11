/* ---------------------------------------------------------------
   RENDER LOGIC
   Reads the PROJECTS list from projects-data.js, builds the HTML
   for the home page and the projects page, and wires up the
   click-to-expand detail dialog and the image lightbox.
   Requires i18n.js (for t() and L()) to be loaded first.
----------------------------------------------------------------*/

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : str;
  return div.innerHTML;
}

function renderTagList(tags) {
  const list = L(tags);
  if (!list || list.length === 0) return "";
  return `<ul class="tags">${list
    .map((tag) => `<li class="tag">${escapeHTML(tag)}</li>`)
    .join("")}</ul>`;
}

function sortByYearDesc(list) {
  return [...list].sort((a, b) => String(b.year).localeCompare(String(a.year)));
}

function projectRowHTML(p, realIndex) {
  const role = L(p.role);
  return `
    <button
      class="project-row"
      type="button"
      data-project-index="${realIndex}"
      data-tags="${escapeHTML((L(p.tags) || []).join("|").toLowerCase())}"
    >
      <span class="year">${escapeHTML(p.year)}</span>
      <span>
        <h3>${escapeHTML(L(p.title))}</h3>
        ${role ? `<span class="role">${escapeHTML(role)}</span>` : ""}
        <p>${escapeHTML(L(p.description))}</p>
        ${renderTagList(p.tags)}
      </span>
    </button>`;
}

/* ---------------- Home page: featured projects ---------------- */

function renderFeatured() {
  const container = document.getElementById("featured-grid");
  if (!container) return;

  const featured = sortByYearDesc(PROJECTS.filter((p) => p.featured));

  if (featured.length === 0) {
    container.innerHTML = `<p class="empty-state">${t("featured.empty")}</p>`;
    return;
  }

  container.innerHTML = featured
    .map((p) => projectRowHTML(p, PROJECTS.indexOf(p)))
    .join("");
}

/* ---------------- Projects page: full list + filters ---------------- */

function renderProjectsPage() {
  const list = document.getElementById("project-list");
  if (!list) return;

  const sorted = sortByYearDesc(PROJECTS);

  list.innerHTML = sorted
    .map((p) => projectRowHTML(p, PROJECTS.indexOf(p)))
    .join("");

  const empty = document.getElementById("empty-state");
  if (empty) empty.style.display = "none";

  renderFilterBar(sorted);
}

function renderFilterBar(projects) {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;

  // Count how many projects use each tag (in the current language)
  const tagCounts = {};
  projects.forEach((p) => {
    (L(p.tags) || []).forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  // Most-used first, ties alphabetical
  const allTags = Object.keys(tagCounts).sort(
    (a, b) => tagCounts[b] - tagCounts[a] || a.localeCompare(b)
  );

  if (allTags.length === 0) {
    bar.remove();
    return;
  }

  bar.innerHTML =
    `<button class="filter-chip" type="button" data-tag="all" aria-pressed="true">${escapeHTML(
      t("filter.all")
    )}</button>` +
    allTags
      .map(
        (tag) =>
          `<button class="filter-chip" type="button" data-tag="${escapeHTML(
            tag.toLowerCase()
          )}" aria-pressed="false">${escapeHTML(tag)}</button>`
      )
      .join("");

  // onclick (not addEventListener) so re-rendering never stacks listeners
  bar.onclick = (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;

    bar
      .querySelectorAll(".filter-chip")
      .forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");

    const tag = btn.dataset.tag;
    const rows = document.querySelectorAll("#project-list .project-row");
    let visibleCount = 0;

    rows.forEach((row) => {
      const rowTags = row.dataset.tags.split("|");
      const show = tag === "all" || rowTags.includes(tag);
      row.classList.toggle("is-hidden", !show);
      if (show) visibleCount++;
    });

    const empty = document.getElementById("empty-state");
    if (empty) empty.style.display = visibleCount === 0 ? "block" : "none";
  };
}

/* ---------------- Project detail dialog ---------------- */

function setupProjectDialog() {
  const dialog = document.getElementById("project-dialog");
  if (!dialog) return;

  const closeBtn = document.getElementById("dialog-close");
  const galleryEl = document.getElementById("dialog-gallery");
  const metaEl = document.getElementById("dialog-meta");
  const titleEl = document.getElementById("dialog-title");
  const roleEl = document.getElementById("dialog-role");
  const bodyEl = document.getElementById("dialog-body");
  const tagsEl = document.getElementById("dialog-tags");
  const linksEl = document.getElementById("dialog-links");

  let lastTrigger = null;

  function openProject(project, trigger) {
    lastTrigger = trigger || null;

    const title = L(project.title);
    const role = L(project.role);

    titleEl.textContent = title;
    metaEl.textContent = [project.year].filter(Boolean).join(" · ");
    roleEl.textContent = role || "";
    roleEl.style.display = role ? "block" : "none";

    const bodyList = L(project.body);
    const paragraphs =
      bodyList && bodyList.length > 0 ? bodyList : [L(project.description)];
    bodyEl.innerHTML = paragraphs
      .map((para) => `<p>${escapeHTML(para)}</p>`)
      .join("");

    if (project.images && project.images.length > 0) {
      galleryEl.innerHTML = `<div class="dialog-gallery">${project.images
        .map((src) => {
          const isVideo = /\.(mp4|webm|mov)$/i.test(src);
          if (isVideo) {
            return `<video src="${escapeHTML(src)}" controls playsinline></video>`;
          }
          return `<button class="zoomable" type="button" aria-label="${escapeHTML(
            t("aria.enlarge")
          )}">
              <img src="${escapeHTML(src)}" alt="${escapeHTML(
            title
          )}" loading="lazy" />
            </button>`;
        })
        .join("")}</div>`;
    } else {
      galleryEl.innerHTML = "";
    }

    tagsEl.innerHTML = renderTagList(project.tags);

    const links = project.links && project.links.length > 0 ? project.links : [];
    linksEl.innerHTML = links
      .map(
        (l) =>
          `<a class="btn" href="${escapeHTML(
            l.url
          )}" target="_blank" rel="noopener">${escapeHTML(
            L(l.label) || t("btn.viewProject")
          )}</a>`
      )
      .join("");

    document.body.classList.add("dialog-open");
    dialog.showModal();
  }

  function closeProject() {
    dialog.close();
  }

  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (lastTrigger) lastTrigger.focus();
  });

  // Click on the backdrop (the dialog element itself) closes it.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) closeProject();
  });

  closeBtn.addEventListener("click", closeProject);

  // Delegate clicks from any project row on the page.
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-project-index]");
    if (!trigger) return;
    const project = PROJECTS[Number(trigger.dataset.projectIndex)];
    if (project) openProject(project, trigger);
  });
}

/* ---------------- Zoomable image lightbox ---------------- */

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const img = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  closeBtn.addEventListener("click", () => lightbox.close());

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".zoomable");
    if (!trigger) return;
    const source = trigger.querySelector("img");
    if (!source) return;
    img.src = source.src;
    img.alt = source.alt;
    lightbox.showModal();
  });
}

/* ---------------- Start-up ---------------- */

function renderAll() {
  renderFeatured();
  renderProjectsPage();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  setupProjectDialog();
  setupLightbox();
});

// Fired by i18n.js when the visitor switches language
document.addEventListener("langchanged", renderAll);