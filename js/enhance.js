/* NINETIES — shared enhancements (load after main.js) */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = $(".site-header");

  /* Scroll progress, back-to-top, header shadow */
  const bar = document.createElement("div"); bar.className = "scroll-progress";
  const topBtn = document.createElement("button");
  topBtn.className = "to-top"; topBtn.type = "button"; topBtn.setAttribute("aria-label", "Back to top"); topBtn.textContent = "↑";
  document.body.append(bar, topBtn);
  function onScroll() {
    const h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
    topBtn.classList.toggle("show", h.scrollTop > 600);
    if (header) header.classList.toggle("scrolled", h.scrollTop > 10);
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  topBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));

  /* Hamburger menu */
  const nav = $(".site-header .navbar"), links = nav && $(".nav-links", nav);
  if (nav && links) {
    const b = document.createElement("button");
    b.className = "menu-toggle"; b.type = "button";
    b.setAttribute("aria-label", "Toggle menu"); b.setAttribute("aria-expanded", "false");
    b.innerHTML = "<span></span><span></span><span></span>";
    nav.insertBefore(b, links);
    b.addEventListener("click", () => b.setAttribute("aria-expanded", header.classList.toggle("menu-open")));
    $$("a", links).forEach(a => a.addEventListener("click", () => { header.classList.remove("menu-open"); b.setAttribute("aria-expanded", "false"); }));
  }


  /* "More" dropdown */
  const closeDrops = () => $$(".nav-dropdown.open").forEach(d => { d.classList.remove("open"); d.firstElementChild.setAttribute("aria-expanded", "false"); });
  $$(".nav-drop-btn").forEach(b => b.addEventListener("click", e => {
    e.stopPropagation(); const d = b.parentElement, was = d.classList.contains("open");
    closeDrops(); if (!was) { d.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
  }));
  document.addEventListener("click", closeDrops);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrops(); });

  /* Accordion (works for content added later, too) */
  document.addEventListener("click", e => {
    const btn = e.target.closest(".acc-btn"); if (!btn) return;
    const item = btn.closest(".acc");
    btn.setAttribute("aria-expanded", item.classList.toggle("open"));
  });

  /* FAQ search */
  const search = $("#faq-search");
  if (search) search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase(); let shown = 0;
    $$(".faq-group").forEach(g => {
      let any = 0;
      $$(".acc", g).forEach(a => { const hit = !q || a.textContent.toLowerCase().includes(q); a.classList.toggle("hidden", !hit); if (hit) any++; });
      g.classList.toggle("hidden", !any); shown += any;
    });
    const empty = $("#faq-empty"); if (empty) empty.style.display = shown ? "none" : "block";
  });

  /* Events filter */
  const evBtns = $$(".ev-filter");
  evBtns.forEach(btn => btn.addEventListener("click", () => {
    evBtns.forEach(x => x.classList.remove("active")); btn.classList.add("active");
    const f = btn.dataset.filter;
    $$(".event-card").forEach(c => c.classList.toggle("hidden", f !== "all" && c.dataset.category !== f));
  }));

  /* Legal table of contents + scroll-spy */
  const tocLinks = $$(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) tocLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-20% 0px -70% 0px" });
    $$(".legal-body section[id]").forEach(s => spy.observe(s));
  }

  /* Reveal on scroll */
  const rev = $$(".reveal");
  if (rev.length && "IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
    rev.forEach(el => io.observe(el));
  } else rev.forEach(el => el.classList.add("in"));

  /* Count-up for [data-count] */
  function countUp(el, to) {
    if (reduce) { el.textContent = to.toLocaleString(); return; }
    const t0 = performance.now(), dur = 1200;
    (function tick(t) { const p = Math.min((t - t0) / dur, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString(); if (p < 1) requestAnimationFrame(tick); })(t0);
  }
  $$("[data-count]").forEach(el => countUp(el, +el.dataset.count));

  /* Live member count (falls back silently to the static number) */
  const live = $$("[data-live-members]");
  if (live.length) fetch("https://discord.com/api/v9/invites/MSBwhMHquM?with_counts=true")
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => { if (d.approximate_member_count) live.forEach(el => countUp(el, d.approximate_member_count)); })
    .catch(() => {});
})();
