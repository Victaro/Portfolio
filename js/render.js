/* ---------------------------------------------------------------
   RENDER LOGIC
   You shouldn't need to edit this file. It reads the PROJECTS list
   from projects-data.js, builds the HTML for the home page and the
   projects page, and wires up the click-to-expand detail dialog.
----------------------------------------------------------------*/

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderTagList(tags) {
  if (!tags || tags.length === 0) return "";
  return `<ul class="tags">${tags
    .map((t) => `<li class="tag">${escapeHTML(t)}</li>`)
    .join("")}</ul>`;
}

function sortByYearDesc(list) {
  return [...list].sort((a, b) => String(b.year).localeCompare(String(a.year)));
}

/* ---------------- Home page: featured cards ---------------- */

function renderFeatured() {
  const container = document.getElementById("featured-grid");
  if (!container) return;

  const featured = sortByYearDesc(PROJECTS.filter((p) => p.featured));

  if (featured.length === 0) {
    container.innerHTML = `<p class="empty-state">Mark a project as <code>featured: true</code> in projects-data.js to show it here.</p>`;
    return;
  }

    container.innerHTML = featured
    .map((p) => {
      const realIndex = PROJECTS.indexOf(p);
      return `
      <button class="project-row" type="button" data-project-index="${realIndex}">
        <span class="year">${escapeHTML(p.year)}</span>
        <span>
          <h3>${escapeHTML(p.title)}</h3>
          ${p.role ? `<span class="role">${escapeHTML(p.role)}</span>` : ""}
          <p>${escapeHTML(p.description)}</p>
          ${renderTagList(p.tags)}
        </span>
      </button>`;
    })
    .join("");
}

/* ---------------- Projects page: full list + filters ---------------- */

function renderProjectsPage() {
  const list = document.getElementById("project-list");
  if (!list) return;

  const sorted = sortByYearDesc(PROJECTS);

  list.innerHTML = sorted
    .map((p) => {
      const realIndex = PROJECTS.indexOf(p);
      return `
      <button
        class="project-row"
        type="button"
        data-project-index="${realIndex}"
        data-tags="${escapeHTML((p.tags || []).join("|").toLowerCase())}"
      >
        <span class="year">${escapeHTML(p.year)}</span>
        <span>
          <h3>${escapeHTML(p.title)}</h3>
          ${p.role ? `<span class="role">${escapeHTML(p.role)}</span>` : ""}
          <p>${escapeHTML(p.description)}</p>
          ${renderTagList(p.tags)}
        </span>
      </button>`;
    })
    .join("");

  renderFilterBar(sorted);
}

function renderFilterBar(projects) {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;

  const tagCounts = {};
  projects.forEach((p) => {
    (p.tags || []).forEach((t) => {
      tagCounts[t] = (tagCounts[t] || 0) + 1;
    });
  });

  const allTags = Object.keys(tagCounts).sort(
    (a, b) => tagCounts[b] - tagCounts[a] || a.localeCompare(b)
  );

  if (allTags.length === 0) {
    bar.remove();
    return;
  }

  bar.innerHTML =
    `<button class="filter-chip" type="button" data-tag="all" aria-pressed="true">All</button>` +
    allTags
      .map(
        (tag) =>
          `<button class="filter-chip" type="button" data-tag="${escapeHTML(
            tag.toLowerCase()
          )}" aria-pressed="false">${escapeHTML(tag)}</button>`
      )
      .join("");

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;

    bar
      .querySelectorAll(".filter-chip")
      .forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");

    const tag = btn.dataset.tag;
    const rows = document.querySelectorAll(".project-row");
    let visibleCount = 0;

    rows.forEach((row) => {
      const rowTags = row.dataset.tags.split("|");
      const show = tag === "all" || rowTags.includes(tag);
      row.classList.toggle("is-hidden", !show);
      if (show) visibleCount++;
    });

    const empty = document.getElementById("empty-state");
    if (empty) empty.style.display = visibleCount === 0 ? "block" : "none";
  });
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

    titleEl.textContent = project.title;
    metaEl.textContent = [project.year].filter(Boolean).join(" · ");
    roleEl.textContent = project.role || "";
    roleEl.style.display = project.role ? "block" : "none";

    const paragraphs =
      project.body && project.body.length > 0
        ? project.body
        : [project.description];
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
          return `<button class="zoomable" type="button" aria-label="Enlarge image">
               <img src="${escapeHTML(src)}" alt="${escapeHTML(
                 project.title
               )} screenshot" loading="lazy" />
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
          `<a class="btn" href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${escapeHTML(
            l.label || "View project"
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

  // Click on the backdrop (the dialog element itself, outside dialog-inner) closes it.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) closeProject();
  });

  closeBtn.addEventListener("click", closeProject);

  // Delegate clicks from any project trigger button on the page.
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-project-index]");
    if (!trigger) return;
    const project = PROJECTS[Number(trigger.dataset.projectIndex)];
    if (project) openProject(project, trigger);
  });
}

	// zoomable image

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

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderProjectsPage();
  setupProjectDialog();
  setupLightbox();
});


