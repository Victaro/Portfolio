# Your Portfolio Site

Plain HTML/CSS/JS — no build tools, no npm install. Open `index.html`
in a browser and it works.

## Adding a project

Open `js/projects-data.js` and add a new entry to the `PROJECTS` list
at the top of the file. That's the only file you need to touch for
day-to-day updates — the home page, the Projects page (including its
filter buttons), and each project's detail popup are all generated
from it automatically.

Each project can have a short `description` (shown on the card/row)
and a longer `body` (paragraphs shown only when someone clicks in),
plus optional `images` and `links`. See the comments at the top of
`projects-data.js` for the full field list.

## The project detail popup

Clicking any project — on the home page or the Projects page — opens
a popup with the fuller write-up, gallery, and links for that project.
It's a native `<dialog>`, so:

- **Esc**, the **×** button, or clicking outside the popup all close it.
- Closing it never navigates anywhere, so you're always right back
  where you scrolled to.
- Focus returns to whichever project you clicked, which also matters
  for keyboard/screen-reader use.

## Editing your info

- Name, bio, contact links, course/university: edit the text directly
  in `index.html` (the hero and footer sections).
- Page titles: the `<title>` tag near the top of `index.html` and
  `projects.html`.
- Colours: all six colours are defined once, at the top of
  `css/style.css`, as CSS variables (e.g. `--terracotta`). Change a
  value there and it updates across the whole site.
- Fonts: headings use Fraunces, body text uses Karla, both loaded from
  Google Fonts in the `<head>` of each HTML file.

## Publishing it

Because it's just static files, you can host it for free with any of:

- **GitHub Pages** — push this folder to a GitHub repo, then turn on
  Pages in the repo settings.
- **Netlify / Vercel** — drag and drop the folder onto their dashboard.

No server or database is required.

## File structure

```
index.html            Home page
projects.html          Projects page
css/style.css           All styling and colour variables
js/projects-data.js     <- Edit this to add/change projects
js/render.js            Turns projects-data.js into HTML (no need to edit)
```
