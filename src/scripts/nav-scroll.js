let lastScrollY = window.scrollY;
const navbar = document.querySelector('.header');
const threshold = 70;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (Math.abs(currentScrollY - lastScrollY) < threshold) {
    // Si el cambio es muy pequeño, no hacemos nada
    return;
  }

  if (currentScrollY > lastScrollY) {
    // Scroll hacia abajo → ocultar
    navbar.classList.add('hidden');
  } else {
    // Scroll hacia arriba → mostrar
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});