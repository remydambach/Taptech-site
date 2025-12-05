document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.tt-nav-toggle');
  const nav = document.querySelector('.tt-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('tt-nav-open');
  });
});
