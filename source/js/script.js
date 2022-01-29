const toggleBtn = document.querySelector('.page-header__toggle');
const toggleNav = document.querySelector('.page-header--closed');

const showMenu = () => {
  toggleBtn.addEventListener('click', () => {
    toggleNav.classList.toggle('page-header--closed');
    toggleNav.classList.toggle('page-header--opened');
  })
}

showMenu();
