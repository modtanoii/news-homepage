
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  navLinks.classList.add('active');
  nav.classList.add('menu-toggled');
});

close.addEventListener('click', () => {
  navLinks.classList.remove('active');
  nav.classList.remove('menu-toggled');
});
