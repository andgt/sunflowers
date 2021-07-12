// Меню

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');

mainNav.classList.remove('main-nav--no-js');

buttonToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

// Фиксированное меню

let menuFixed = function() {
  let promo = document.querySelector(".header");

  if (window.pageYOffset > 10) {
    promo.classList.add("main-nav__sticky");
  } else {
    promo.classList.remove("main-nav__sticky");
  }

  if (window.innerWidth < 768) {
    if (window.pageYOffset > 10) {
      promo.classList.add("header__logo-sticky");
    } else {
      promo.classList.remove("main-nav__sticky");
    };
  }
};

window.onscroll = function() {
  menuFixed();
  /*scrollUpButton();*/
};
