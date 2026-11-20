# nicolacalzone.github.io

Personal portfolio — plain HTML/CSS/JS, no build step, served by GitHub Pages.

## Edit content
Everything (bio, experience, projects, skills, education, certificates) lives in [`assets/js/data.js`](assets/js/data.js).
Links set to `"#"` are placeholders marked `// TODO` and are hidden on the page until you fill them in.

The CV (English, Italian, Russian) is served from `cv/`. Those PDFs are pushed here automatically by the CI of the private CV repo (`WEBSITE_TOKEN` secret) - don't edit them by hand. Visitors switch language with the tabs in the CV viewer; the choice is remembered. Files and labels are listed in `profile.cv` in `data.js`. The viewer uses PDF.js (loaded from cdnjs on demand).

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure
```
index.html             page skeleton (sections are rendered from data.js)
assets/css/tokens.css  design tokens
assets/css/main.css    components & layout
assets/js/data.js      content
cv/                    CV PDFs, pushed by the CV repo's CI
assets/js/main.js      rendering, project filter, nav, scroll reveal
DESIGN_SYSTEM.md       tokens & component rules
```

## Deploy
Push to `main` — GitHub Pages serves the repo root.
