// TapTech – JS minimal (ancre douce)
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href').slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  window.scrollTo({
    top: target.offsetTop - 80,
    behavior: 'smooth'
  });
});
