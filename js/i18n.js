/* Load AFTER projects-data.js and BEFORE render.js */

const SUPPORTED_LANGS = ["nl", "en"];
const DEFAULT_LANG = "en";

const TRANSLATIONS = {
  en: {
    "title.home": "Victor Ploeger - Portfolio",
    "title.projects": "Victor Ploeger - Projects",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "hero.lede": '<span class="accent">Industrial Design Engineer</span> meets <span class="accent">Technology expertise</span>.',
    "hero.body": "I'm a creative and driven person with a passion for technology and problem-solving. I combine my technical expertise with creative design thinking in both my personal and professional projects. I can quickly adjust in dynamic environments where I can manage teams and take on complex tasks efficiently and effectively.",
    "hero.photoAlt": "Photo of Victor Ploeger",
    "hero.linkedin": "My LinkedIn &rsaquo;",
    "featured.title": "Selected work",
    "featured.seeAll": "See all projects &rsaquo;",
    "featured.empty": "Mark a project as <code>featured: true</code> in projects-data.js to show it here.",
    "projects.title": "Projects",
    "projects.intro": 'This page covers taken courses, projects, and personal work and achievements. <br /> <span class="highlight">Click any project for more details</span> or <span class="highlight">filter using the tags</span> below.',
    "projects.empty": "No projects match this filter yet.",
    "filter.all": "All",
    "btn.viewProject": "View project",
    "aria.close": "Close",
    "aria.enlarge": "Enlarge image",
    "aria.language": "Language",
  },
  nl: {
    "title.home": "Victor Ploeger - Portfolio",
    "title.projects": "Victor Ploeger - Projecten",
    "nav.home": "Home",
    "nav.projects": "Projecten",
    "hero.lede": '<span class="accent">Industrial Design Engineer</span> met <span class="accent">Technologie expertise</span>.',
    "hero.body": "Ik ben een creatief en ijverig persoon met een passie voor technologie en problemen oplossen. Ik combineer mijn technische expertise en creatieve denken in het ontwerpen van zowel persoonlijke als professionele projecten. Ik pas me snel aan in dynamische omgevingen, waar ik teams kan aansturen en complexe taken efficiënt en effectief kan uitvoeren.",
    "hero.photoAlt": "Foto van Victor Ploeger",
    "hero.linkedin": "Mijn LinkedIn &rsaquo;",
    "featured.title": "Recente projecten",
    "featured.seeAll": "Alle projecten &rsaquo;",
    "featured.empty": "Zet <code>featured: true</code> bij een project in projects-data.js om het hier te tonen.",
    "projects.title": "Projecten",
    "projects.intro": 'Deze pagina bevat studievakken, projecten, en persoonlijke werken en prestaties. <br /> <span class="highlight"> Klik op een project voor meer details</span> of <span class="highlight">filter met de tags</span> hieronder.',
    "projects.empty": "Er zijn nog geen projecten voor dit filter.",
    "filter.all": "Alle",
    "btn.viewProject": "Bekijk project",
    "aria.close": "Sluiten",
    "aria.enlarge": "Afbeelding vergroten",
    "aria.language": "Taal",
  },
};

function detectLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) {}

  const prefs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const p of prefs) {
    const code = String(p).slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGS.includes(code)) return code;
  }
  return DEFAULT_LANG;
}

let currentLang = detectLanguage();

// UI text lookup
function t(key) {
  return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

// Project data lookup: accepts a plain value OR { en: ..., nl: ... }
function L(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLang] ?? value[DEFAULT_LANG] ?? "";
  }
  return value;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  const titleKey = document.body.dataset.titleKey;
  if (titleKey) document.title = t(titleKey);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nLabel));
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyTranslations();
  document.dispatchEvent(new CustomEvent("langchanged"));
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
  applyTranslations();
});