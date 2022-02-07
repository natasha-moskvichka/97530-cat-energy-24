const toggleBtn = document.querySelector('.page-header__btn');
const toggleNav = document.querySelector('.header-nav');
const noJsElement = document.querySelector('.page-header--nojs');

const checkJs = () => {
  if (noJsElement) {
    noJsElement.classList.remove('page-header--nojs');
  }
}

const toggleMenu = () => {
  toggleNav.classList.toggle('page-header--closed');
  toggleBtn.classList.toggle('header-nav__toggle--closed');
}

const initMenu = () => {
  toggleNav.classList.add('page-header--closed');
  toggleBtn.classList.add('header-nav__toggle--closed');
}

checkJs();
initMenu();

toggleBtn.addEventListener('click', toggleMenu);
