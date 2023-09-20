document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navbarNav = document.querySelector('.navbar-nav');

  hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('show-nav');
  });
});
