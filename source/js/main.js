// Burger

function menuToggle() {
  const menuButton = document.querySelector('.main-nav__menu-button');
  const menuList = document.querySelector('.main-nav');

  menuButton.addEventListener('click', () => {
    menuList.classList.toggle('main-nav_opened');
  });
}

menuToggle();
