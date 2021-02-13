const navBurder = document.querySelector('.burger');
const menuLink = document.querySelector('.nav__list');

navBurder.onclick = function() {
  navBurder.classList.toggle('burger_active');
  menuLink.classList.toggle('nav__list_active');
};
