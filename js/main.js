// TapTech – JS minimal
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.tt-nav a[href^="#"], a.tt-btn[href^="#"], .tt-footer a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
