const button = document.querySelector('.header__menu');
const menu = document.getElementById('upper-menu');

button.addEventListener('click', () => {
   menu.classList.toggle('header__nav--active');
});