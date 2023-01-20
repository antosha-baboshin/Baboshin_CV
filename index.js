const NAV_LINKS = document.querySelectorAll('.nav-link');
const BURGER = document.getElementById('burger');
const BODY = document.getElementsByTagName('body')[0];
const MENU_WRAPPER = document.querySelector('.nav-list-wrapper');

const toggleMenu = () => {
  if (!BURGER.checked) {
    BODY.style.overflow = 'auto';
    MENU_WRAPPER.style.display = 'none';
  } else {
    BODY.style.overflow = 'hidden';
    MENU_WRAPPER.style.display = 'block';
  }
}

NAV_LINKS.forEach((el) => {
  el.addEventListener('click', () => {
    BURGER.checked = false;
    toggleMenu();
  });
});
BURGER.addEventListener('click', toggleMenu);
MENU_WRAPPER.addEventListener('click', () => {
  BURGER.checked = false;
  toggleMenu();
});