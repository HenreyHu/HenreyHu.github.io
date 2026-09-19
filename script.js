// Theme toggle — defaults to system preference, no persistence (kept in memory only).
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  let theme = prefersLight ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);

  btn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
  });
})();

// Mobile nav toggle (only present on the home page)
(function () {
  const navBtn = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  if (!navBtn || !sidebar) return;

  navBtn.addEventListener('click', function () {
    const isOpen = sidebar.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      sidebar.classList.remove('open');
      navBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Active section highlighting in the sidebar nav
(function () {
  const sections = document.querySelectorAll('.section[id]');
  const links = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const map = new Map();
  links.forEach(function (link) {
    map.set(link.getAttribute('href').slice(1), link);
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const link = map.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
})();
