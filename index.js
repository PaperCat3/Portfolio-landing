const hamburger = document.querySelector('.adaptive-menu');
const menu = document.querySelector('.menu-ul');

function toggleMenu() {
  menu.classList.toggle('openn');
  hamburger.classList.toggle('open');
  console.log('123')
}
hamburger.addEventListener('click', toggleMenu);





