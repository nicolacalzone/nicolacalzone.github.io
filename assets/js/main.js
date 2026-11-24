(function () {
  "use strict";

  const S = window.SITE;
  if (!S) return;

  const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI & NLP" },
    { id: "vision", label: "Vision & Robotics" },
    { id: "web", label: "Web & Mobile" },
    { id: "systems", label: "Systems & Data" },
  ];

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M8 7h9v9"/></svg>',
  };

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const isReal = (url) => url && url !== "#";
  const isExt = (url) => url.startsWith("http");
  const ext = (url) => (isExt(url) ? ' target="_blank" rel="noopener noreferrer"' : "");
  const newTab = (url) => (isExt(url) ? " (opens in new tab)" : "");

  const tags = (list, cls = "tag", ulCls = "tags") =>
    `<ul class="${ulCls}" aria-label="Technologies">${list.map((t) => `<li class="${cls}">${esc(t)}</li>`).join("")}</ul>`;

  const links = (list, title) => {
    const real = (list || []).filter((l) => isReal(l.url));
    if (!real.length) return "";
    return `<div class="links">${real
      .map(
        (l) =>
          `<a class="link" href="${esc(l.url)}"${ext(l.url)} aria-label="${esc(l.label)}: ${esc(title)}${newTab(l.url)}">${esc(l.label)}${ICONS.arrow}</a>`
      )
      .join("")}</div>`;
  };

  const categoryLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || "";

  const renderers = {
    social: () => {
      const p = S.profile;
      return [
        { label: "GitHub", url: p.github, icon: ICONS.github },
        { label: "LinkedIn", url: p.linkedin, icon: ICONS.linkedin },
        { label: "Email", url: `mailto:${p.email}`, icon: ICONS.mail },
      ]
        .map((s) => `<li><a class="icon-link" href="${esc(s.url)}"${ext(s.url)} aria-label="${s.label}${newTab(s.url)}">${s.icon}</a></li>`)
        .join("");
    },

    terminal: () => {
      const p = S.profile;
      const row = (cmd, out) => `<div class="facts__row"><dt>${esc(cmd)}</dt><dd>${out}</dd></div>`;
      return [
        row("whoami", esc(p.role)),
        row("cat now.txt", esc(p.now)),
        row("ls focus/", `<ul class="facts__focus">${p.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`),
      ].join("");
    },

    about: () => S.about.map((para) => `<p>${esc(para)}</p>`).join(""),

    experience: () =>
      S.experience
        .map(
          (e) => `
        <li class="timeline__item">
          <div class="timeline__meta">
            <p class="mono timeline__period">${esc(e.period)}</p>
            <p class="timeline__type">${esc(e.type)}</p>
          </div>
          <div class="timeline__body">
            <h3 class="timeline__role">${esc(e.role)} <span class="timeline__at">@ ${esc(e.company)}</span></h3>
            ${e.points ? `<ul class="bullets">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
            ${e.tags ? tags(e.tags) : ""}
          </div>
        </li>`
        )
        .join(""),

    additional: () =>
      S.additionalExperience
        .map(
          (a) => `
        <article class="mini">
          <p class="mono mini__period">${esc(a.period)}</p>
          <h4>${esc(a.role)}</h4>
          <p class="mini__org">${esc(a.org)}</p>
          ${a.text ? `<p>${esc(a.text)}</p>` : ""}
        </article>`
        )
        .join(""),

    filters: () =>
      CATEGORIES.map(
        (c, i) =>
          `<button type="button" class="chip" data-filter="${c.id}" aria-pressed="${i === 0}">${esc(c.label)}</button>`
      ).join(""),

    featured: () =>
      S.featured
        .map(
          (p, i) => `
        <article class="project" data-category="${p.category}">
          <div class="project__meta">
            <span class="mono project__num">${String(i + 1).padStart(2, "0")}</span>
            <span class="mono project__kind">${esc(p.kind)}</span>
          </div>
          <div class="project__body">
            <h3 class="project__title">${esc(p.title)}</h3>
            <p class="project__desc">${esc(p.description)}</p>
            ${tags(p.tags)}
            ${links(p.links, p.title)}
          </div>
        </article>`
        )
        .join(""),

    archive: () =>
      S.archive
        .map(
          (p) => `
        <li class="archive__row" data-category="${p.category}">
          <p class="mono archive__cat">${esc(categoryLabel(p.category))}</p>
          <div class="archive__main">
            <h4 class="archive__title">${esc(p.title)} <span class="archive__kind">· ${esc(p.kind)}</span></h4>
            <p class="archive__desc">${esc(p.description)}</p>
          </div>
          <div class="archive__side">
            ${tags(p.tags)}
            ${links(p.links, p.title)}
          </div>
        </li>`
        )
        .join(""),

    skills: () =>
      S.skills
        .map(
          (g) => `
        <div class="skill-group">
          <h3 class="mono skill-group__title">${esc(g.group)}</h3>
          ${tags(g.items, "tag tag--lg", "tags tags--lg")}
        </div>`
        )
        .join(""),

    education: () =>
      S.education
        .map(
          (e) => `
        <li class="edu__item">
          <div class="edu__head">
            <h3 class="edu__degree">${esc(e.degree)}</h3>
            ${e.grade ? `<span class="mono edu__grade">${esc(e.grade)}</span>` : ""}
          </div>
          <p class="edu__school">${esc(e.school)} — ${esc(e.place)}</p>
          ${e.period ? `<p class="mono edu__period">${esc(e.period)}</p>` : ""}
          ${e.note ? `<p class="edu__note">${esc(e.note)}</p>` : ""}
        </li>`
        )
        .join(""),

    certificates: () =>
      S.certificates
        .map((c) => {
          const title = isReal(c.url)
            ? `<a href="${esc(c.url)}"${ext(c.url)} aria-label="${esc(c.title)}${newTab(c.url)}">${esc(c.title)}${ICONS.arrow}</a>`
            : esc(c.title);
          return `<li class="cert"><span class="mono cert__issuer">${esc(c.issuer)}</span><span class="cert__title">${title}</span></li>`;
        })
        .join(""),
  };

  // Render
  document.querySelectorAll("[data-render]").forEach((el) => {
    const fn = renderers[el.dataset.render];
    if (fn) el.innerHTML = fn();
  });
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = S.profile[el.dataset.bind];
    if (v) el.textContent = v;
  });
  const CVS = S.profile.cv;
  const cvFor = (id) => CVS.find((c) => c.id === id) || CVS[0];
  let cvLang = CVS[0].id;
  try {
    cvLang = cvFor(localStorage.getItem("cv-lang")).id;
  } catch (e) {}
  document.querySelectorAll("[data-cv]").forEach((el) => el.setAttribute("href", cvFor(cvLang).file));

  // CV viewer (PDF.js, rendered in-page; falls back to opening the PDF in a new tab)
  const PDFJS_BASE = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
  const cvDialog = document.getElementById("cv-viewer");
  const dlLink = cvDialog.querySelector("[data-cv-download]");
  const dlLabel = dlLink.querySelector("[data-cv-download-label]");
  const setDownload = (id) => {
    const cv = cvFor(id);
    dlLink.setAttribute("href", cv.file);
    dlLink.setAttribute("download", cv.file.split("/").pop());
    dlLabel.textContent = `Download PDF (${cv.label})`;
  };
  setDownload(cvLang);

  // Anonymous-ish download counter: posts the language to the optional endpoint (see worker/README.md).
  // Server-side it records IP, location and browser. Does nothing until config.cvDownloadEndpoint is set.
  dlLink.addEventListener("click", () => {
    const url = (S.config || {}).cvDownloadEndpoint;
    if (!url) return;
    try {
      fetch(url, { method: "POST", body: JSON.stringify({ lang: cvLang }), headers: { "content-type": "text/plain" }, keepalive: true }).catch(() => {});
    } catch (e) {}
  });
  const cvBody = cvDialog.querySelector("[data-cv-body]");
  const cvTabs = cvDialog.querySelector("[data-cv-tabs]");
  cvTabs.innerHTML = CVS.map(
    (c) => `<button type="button" class="chip chip--sm" data-cv-lang="${c.id}" lang="${c.id}" aria-pressed="false">${esc(c.label)}</button>`
  ).join("");
  const pdfs = {}; // per-language cache of loaded documents
  let pdfPromise = null;
  let lastWidth = 0;
  let renderToken = 0;
  let cvToken = 0;

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });

  let libPromise = null;
  const loadPdf = (id) => {
    if (!pdfs[id]) {
      libPromise =
        libPromise ||
        loadScript(PDFJS_BASE + "pdf.min.js").then(() => {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_BASE + "pdf.worker.min.js";
        });
      pdfs[id] = libPromise.then(() => window.pdfjsLib.getDocument(encodeURI(cvFor(id).file)).promise);
      pdfs[id].catch(() => {
        delete pdfs[id];
        libPromise = null;
      });
    }
    return pdfs[id];
  };

  const renderPdf = async (pdf) => {
    const token = ++renderToken;
    const width = cvBody.clientWidth - 32; // body padding
    lastWidth = cvBody.clientWidth;
    const frag = document.createDocumentFragment();
    const dpr = window.devicePixelRatio || 1;
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      if (token !== renderToken) return;
      const base = page.getViewport({ scale: 1 });
      const scale = Math.min(width / base.width, 1.6);
      const vp = page.getViewport({ scale });
      const wrap = document.createElement("div");
      wrap.className = "cv-viewer__page";
      wrap.style.width = `${vp.width}px`;
      wrap.style.height = `${vp.height}px`;
      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(vp.width * dpr);
      canvas.height = Math.floor(vp.height * dpr);
      canvas.style.width = `${vp.width}px`;
      canvas.style.height = `${vp.height}px`;
      wrap.appendChild(canvas);
      await page.render({
        canvasContext: canvas.getContext("2d"),
        viewport: vp,
        transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null,
      }).promise;
      // Keep the PDF's hyperlinks clickable
      (await page.getAnnotations()).forEach((a) => {
        if (a.subtype !== "Link" || !a.url) return;
        const [x1, y1, x2, y2] = window.pdfjsLib.Util.normalizeRect(vp.convertToViewportRectangle(a.rect));
        const link = document.createElement("a");
        link.href = a.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", a.url);
        Object.assign(link.style, { left: `${x1}px`, top: `${y1}px`, width: `${x2 - x1}px`, height: `${y2 - y1}px` });
        wrap.appendChild(link);
      });
      frag.appendChild(wrap);
    }
    if (token === renderToken) cvBody.replaceChildren(frag);
  };

  const showCv = async (id = cvLang) => {
    const token = ++cvToken;
    cvLang = id;
    try {
      localStorage.setItem("cv-lang", id);
    } catch (e) {}
    cvTabs.querySelectorAll("[data-cv-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cvLang === id)));
    document.querySelectorAll("[data-cv]").forEach((el) => el.setAttribute("href", cvFor(id).file));
    setDownload(id);
    cvDialog.querySelector("[data-cv-title]").textContent = `~/nicola/${cvFor(id).file.split("/").pop()}`;
    cvBody.innerHTML = '<p class="cv-viewer__msg">Loading CV…</p>';
    if (!cvDialog.open) {
      cvDialog.showModal();
      cvDialog.focus(); // keep initial focus on the window itself, not the first control
      document.body.classList.add("has-viewer");
    }
    try {
      pdfPromise = loadPdf(id);
      const pdf = await pdfPromise;
      if (token === cvToken) await renderPdf(pdf);
    } catch (err) {
      if (token === cvToken)
        cvBody.innerHTML = `<p class="cv-viewer__msg">Couldn't display the CV here. <a href="${esc(cvFor(id).file)}" target="_blank" rel="noopener">Open the PDF</a>.</p>`;
    }
  };

  document.querySelectorAll("[data-cv]").forEach((el) =>
    el.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || !cvDialog.showModal) return;
      e.preventDefault();
      showCv();
    })
  );
  cvTabs.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cv-lang]");
    if (b && b.dataset.cvLang !== cvLang) showCv(b.dataset.cvLang);
  });
  cvDialog.querySelector("[data-cv-close]").addEventListener("click", () => cvDialog.close());
  cvDialog.addEventListener("click", (e) => {
    if (e.target === cvDialog) cvDialog.close(); // backdrop click
  });
  cvDialog.addEventListener("close", () => document.body.classList.remove("has-viewer"));
  let resizeTimer;
  window.addEventListener("resize", () => {
    if (!cvDialog.open || !pdfPromise) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (Math.abs(cvBody.clientWidth - lastWidth) > 4) pdfPromise.then(renderPdf).catch(() => {});
    }, 200);
  });
  document.querySelectorAll('[data-bind-href="mailto"]').forEach((el) => {
    el.href = `mailto:${S.profile.email}`;
    el.textContent = S.profile.email;
  });
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Project filter
  const chips = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("#projects [data-category]");
  const empty = document.querySelector("[data-empty]");
  const status = document.querySelector("[data-filter-status]");
  const archiveHead = document.querySelector("#projects .subhead");
  const archive = document.querySelector('[data-render="archive"]');
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      const f = chip.dataset.filter;
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      let visible = 0;
      items.forEach((it) => {
        const show = f === "all" || it.dataset.category === f;
        it.hidden = !show;
        if (show) visible++;
      });
      const archiveVisible = [...archive.children].some((li) => !li.hidden);
      archiveHead.hidden = !archiveVisible;
      archive.hidden = !archiveVisible;
      empty.hidden = visible > 0;
      status.textContent = `${visible} project${visible === 1 ? "" : "s"} shown: ${chip.textContent}`;
    })
  );

  // Mobile menu
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Nav: active section
  if ("IntersectionObserver" in window) {
    const navLinks = new Map(
      [...document.querySelectorAll('.nav__menu a[href^="#"]')].map((a) => [a.getAttribute("href").slice(1), a])
    );
    const sectionObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navLinks.forEach((a) => a.removeAttribute("aria-current"));
          const a = navLinks.get(en.target.id);
          if (a) a.setAttribute("aria-current", "true");
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => sectionObs.observe(s));
  }
})();
