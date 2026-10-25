# nicolacalzone.github.io

Personal portfolio — plain HTML/CSS/JS, no build step, served by GitHub Pages.

## Edit content
Everything (bio, experience, projects, skills, education, certificates) lives in [`assets/js/data.js`](assets/js/data.js).
Links set to `"#"` are placeholders marked `// TODO` and are hidden on the page until you fill them in.

To update the CV, replace `CV_Nicola Calzone.pdf` in the repo root.

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
assets/js/main.js      rendering, project filter, nav, scroll reveal
DESIGN_SYSTEM.md       tokens & component rules
```

## Deploy
Push to `main` — GitHub Pages serves the repo root.
