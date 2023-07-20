document.addEventListener('DOMContentLoaded', () => {
  // Burger

  function menuToggle() {
    const menuButton = document.querySelector('.main-nav__menu-button');
    const menuList = document.querySelector('.main-nav');

    menuButton.addEventListener('click', () => {
      menuList.classList.toggle('main-nav_opened');
    });
  }

  // Prices

  const pricesBtnSignClosed = document.querySelectorAll('.prices__closed');
  const pricesBtnSignOpened = document.querySelectorAll('.prices__opened');
  const pricesButton = document.querySelectorAll('.prices__button');
  const pricesTab = document.querySelectorAll('.prices__item');

  function priceToggle(index) {
    pricesBtnSignClosed[index].classList.toggle('visually-hiden');
    pricesBtnSignOpened[index].classList.toggle('visually-hiden');

    pricesButton[index].classList.toggle('prices__button_opened');
    pricesButton[index].classList.toggle('prices__button_closed');

    pricesTab[index].classList.toggle('visually-hiden');
  }

  pricesButton.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      if (event.target === item) {
        priceToggle(index);
      }
    });
  });

  // Contact

  const contactBtnSignClosed = document.querySelector('.contact__btn_closed');
  const contactBtnSignOpened = document.querySelector('.contact__btn_opened');
  const contactButton = document.querySelector('.contact__button');
  const contactCities = document.querySelectorAll('.contact__btn-city');
  const contactList = document.querySelector('.contact__list');
  const contactBtnText = document.querySelector('.contact__btn-text');
  const contactTableWrap = document.querySelector('.contact__cities-wrapper');
  const contactTableCity = document.querySelectorAll('.contact__cities-item');

  function contactToggle() {
    contactBtnSignClosed.classList.toggle('visually-hiden');
    contactBtnSignOpened.classList.toggle('visually-hiden');

    contactButton.classList.add('contact__button_opened');
    contactButton.classList.remove('contact__button_closed');

    contactList.classList.toggle('visually-hiden');
  }

  function contactAddCity(index) {
    contactBtnText.innerHTML = contactCities[index].textContent;
    console.log(contactCities[index].textContent);

    contactBtnSignClosed.classList.toggle('visually-hiden');
    contactBtnSignOpened.classList.toggle('visually-hiden');

    contactList.classList.toggle('visually-hiden');
  }

  function clearTable() {
    contactTableCity.forEach((item, index) => {
      contactTableCity[index].classList.add('visually-hiden');
    });
  }

  function showTable(index) {
    clearTable();
    contactTableWrap.classList.remove('visually-hiden');

    contactTableCity[index].classList.remove('visually-hiden');
  }

  contactButton.addEventListener('click', () => {
    contactToggle();
  });

  contactCities.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      if (event.target === item) {
        contactAddCity(index);
        showTable(index);
      }
    });
  });

  menuToggle();
});
