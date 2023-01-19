const NAV_LINKS = document.querySelectorAll('.nav-link');
const HEADER_NAV_LIST = document.querySelector('.header-nav-list');

const closeMenu = () => {
  document.getElementById('burger').checked = false;
}

NAV_LINKS.forEach((el) => {
  el.addEventListener('click', closeMenu);
})