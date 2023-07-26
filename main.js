let navBar = document.querySelector('.header__nav');
let menuicon = document.querySelector('.header_icon-nav');
let listMenu = document.querySelectorAll('.header__nav-a');

menuicon.addEventListener('click', myFunction);

for (let i = 0; i < listMenu.length; i++) {
  listMenu[i].addEventListener('click', downMenu);
}

function myFunction() {
  navBar.classList.toggle('active');
}

function downMenu() {
  navBar.classList.toggle('active');
}

window.addEventListener('scroll', () => {
  let header = document.querySelector('.header__menu');
  header.classList.toggle('abajo', window.scrollY > 0);
});
