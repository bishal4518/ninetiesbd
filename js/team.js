/* NINETIES — Team page renderer */
(function () {
  const root = document.getElementById("team-root");
  if (!root || typeof TEAM_ROLES === "undefined") return;

  const palette = ["#266166", "#16464A", "#7BA6A0", "#3B7F85", "#1F5459"];

  function avatar(initials, i, photo, alt) {
    if (photo) return `<img src="${photo}" alt="${alt}" loading="lazy">`;
    const bg = palette[i % palette.length];
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <rect width='100' height='100' fill='${bg}'/>
      <circle cx='50' cy='38' r='17' fill='rgba(255,255,255,.28)'/>
      <path d='M16 100c2-24 17-37 34-37s32 13 34 37z' fill='rgba(255,255,255,.28)'/>
      <text x='50' y='58' text-anchor='middle' font-family='Space Grotesk,Arial,sans-serif'
        font-size='30' font-weight='700' fill='#fff'>${initials}</text></svg>`;
    return `<img src="data:image/svg+xml;utf8,${encodeURIComponent(svg)}" alt="${alt}">`;
  }

  let total = 0, html = "";
  TEAM_ROLES.forEach((role, r) => {
    let cards = "";
    for (let n = 1; n <= role.count; n++) {
      const o = TEAM_OVERRIDES[`${role.id}-${n}`] || {};
      const name = o.name || `${role.name} ${n}`;
      const initials = (o.name || role.name.replace(/[^A-Za-z]/g, "").slice(0, 2) + n).slice(0, 3).toUpperCase();
      cards += `
        <article class="member-card">
          <div class="member-photo">${avatar(initials, r + n, o.photo, name)}</div>
          <h4>${name}</h4>
          <span class="member-role">${role.name}</span>
          ${o.bio ? `<p>${o.bio}</p>` : ""}
        </article>`;
      total++;
    }
    if (role.more) {
      cards += `<article class="member-card member-more"><div class="more-dot">+</div><h4>And more</h4><span class="member-role">${role.name}</span></article>`;
    }
    html += `
      <section class="role-group" data-tier="${role.tier}">
        <div class="role-head">
          <h3>${role.name}</h3>
          <span class="role-count">${role.count}${role.more ? "+" : ""} member${role.count > 1 ? "s" : ""}</span>
          <p>${role.desc}</p>
        </div>
        <div class="member-grid">${cards}</div>
      </section>`;
  });
  root.innerHTML = html;

  const totalEl = document.getElementById("team-total");
  if (totalEl) totalEl.textContent = total + "+";

  /* Tier filter */
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    root.querySelectorAll(".role-group").forEach(g => {
      g.classList.toggle("hidden", f !== "all" && g.dataset.tier !== f);
    });
  }));
})();
