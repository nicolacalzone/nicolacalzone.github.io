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

  const tags = (list, cls = "tag") =>
    `<ul class="tags" aria-label="Technologies">${list.map((t) => `<li class="${cls}">${esc(t)}</li>`).join("")}</ul>`;

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
      const line = (cmd, out) =>
        `<p><span class="t-prompt">$</span> <span class="t-cmd">${esc(cmd)}</span></p><p class="t-out">${out}</p>`;
      return [
        line("whoami", esc(p.role)),
        line("cat now.txt", esc(p.now)),
        line("ls focus/", p.focus.map((f) => `<span class="t-item">${esc(f)}</span>`).join("")),
        line("locale", esc(p.location)),
        `<p><span class="t-prompt">$</span> <span class="cursor" aria-hidden="true"></span></p>`,
      ].join("");
    },

    about: () => S.about.map((para) => `<p>${esc(para)}</p>`).join(""),

    experience: () =>
      S.experience
        .map(
          (e) => `
        <li class="timeline__item reveal">
          <div class="timeline__meta">
            <p class="mono timeline__period">${esc(e.period)}</p>
            <p class="timeline__type">${esc(e.type)}</p>
          </div>
          <div class="timeline__body">
            <h3 class="timeline__role">${esc(e.role)} <span class="timeline__at">@ ${esc(e.company)}</span></h3>
            <ul class="bullets">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
            ${tags(e.tags)}
          </div>
        </li>`
        )
        .join(""),

    additional: () =>
      S.additionalExperience
        .map(
          (a) => `
        <article class="mini reveal">
          <p class="mono mini__period">${esc(a.period)}</p>
          <h4>${esc(a.role)}</h4>
          <p class="mini__org">${esc(a.org)}</p>
          <p>${esc(a.text)}</p>
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
        <article class="card reveal" data-category="${p.category}">
          <div class="card__top">
            <span class="mono card__num">${String(i + 1).padStart(2, "0")}</span>
            <span class="mono card__kind">${esc(p.kind)}</span>
          </div>
          <h3 class="card__title">${esc(p.title)}</h3>
          <p class="card__desc">${esc(p.description)}</p>
          ${tags(p.tags)}
          ${links(p.links, p.title)}
        </article>`
        )
        .join(""),

    archive: () =>
      S.archive
        .map(
          (p) => `
        <li class="archive__row reveal" data-category="${p.category}">
          <p class="mono archive__cat">${esc(categoryLabel(p.category))}</p>
          <div class="archive__main">
            <h4 class="archive__title">${esc(p.title)} <span class="archive__kind">· ${esc(p.kind)}</span></h4>
            <p class="archive__desc">${esc(p.description)}</p>
          </div>
          <div class="archive__side">
            ${tags(p.tags, "tag tag--alt")}
            ${links(p.links, p.title)}
          </div>
        </li>`
        )
        .join(""),

    skills: () =>
      S.skills
        .map(
          (g) => `
        <div class="skill-group reveal">
          <h3 class="mono skill-group__title">${esc(g.group)}</h3>
          ${tags(g.items, "tag tag--lg")}
        </div>`
        )
        .join(""),

    education: () =>
      S.education
        .map(
          (e) => `
        <li class="edu__item reveal">
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
  document.querySelectorAll("[data-cv]").forEach((el) => el.setAttribute("href", S.profile.cv));
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
        if (show) {
          visible++;
          it.classList.add("is-visible");
        }
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

  // Nav: shadow on scroll + active section
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

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

    // Scroll reveal
    const revealObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            revealObs.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.documentElement.classList.add("js-reveal");
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
  }
})();
