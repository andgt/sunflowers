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
  let headerMenu = document.querySelector(".header");

  if (window.pageYOffset > 10) {
    headerMenu.classList.add("header__fixed");
  } else {
    headerMenu.classList.remove("header__fixed");
  }
};

// Слайдер
/*
let sliderItems = document.querySelectorAll(".reviews__card");
let btnLeft = document.querySelector(".slider__toggle--left");
let btnRight = document.querySelector(".slider__toggle--right");
let sliderList = document.querySelector(".slider__list");
let offset = 0;

function slider() {
  let sliderWidthDesktop;
  let sliderItemMax;
  for (let sliderItem of sliderItems) {
    sliderWidthDesktop = sliderItem.offsetWidth + parseInt(getComputedStyle(sliderItem).marginRight) + parseInt(getComputedStyle(sliderItem).marginLeft);
    sliderItemMax = sliderWidthDesktop * (sliderItems.length-3);
  }

  btnRight.onclick = function () {
    offset += sliderWidthDesktop;

    if (offset > sliderItemMax) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };

  btnLeft.onclick = function () {
    offset = offset - sliderWidthDesktop;

    if (offset < 0) {
      offset = sliderItemMax;
    }

    sliderList.style.left = -offset + "px";
  };
}

function mobileSlider() {
  let sliderWidth;
  let sliderItemMaxMobile;
  for (let sliderItem of sliderItems) {
    sliderWidth = sliderItem.offsetWidth + (parseInt(getComputedStyle(sliderItem).marginRight) + parseInt(getComputedStyle(sliderItem).marginLeft));
    sliderItemMaxMobile = sliderWidth * (sliderItems.length-1);
  }

  btnRight.onclick = function () {
    offset += sliderWidth;

    if (offset > sliderItemMaxMobile) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };

  btnLeft.onclick = function () {
    offset = offset - sliderWidth;

    if (offset < 0) {
      offset = sliderItemMaxMobile;
    }

    sliderList.style.left = -offset + "px";
  };
} */
/*
if (window.innerWidth < 1400) {
  window.onload = mobileSlider();
} else {
  window.onload = slider();
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 1399) {
    slider();
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth < 1400) {
    mobileSlider();
  }
}); */

// Табы меню

  let tabMenu = function() {
    let tabBtn = document.querySelectorAll(".tab__button--menu");
    let cardsBlock = document.querySelectorAll(".slider__menu");
    let tabName;

    tabBtn.forEach(element => {
      element.addEventListener("click", selectTab);
    });

    function selectTab(evt) {
      tabBtn.forEach(element => {
        element.classList.remove("tab__button--active");
      });
      this.classList.add("tab__button--active");
      tabName = this.getAttribute("data-tab");
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      cardsBlock.forEach(element => {
        if (element.classList.contains(tabName)) {
          element.classList.add("slider__menu--active");
        } else {
          element.classList.remove("slider__menu--active");
        }
      });
    }
  };

tabMenu();

// Табы галерея

  let tabGallery = function() {
    let tabBtnGallery = document.querySelectorAll(".tab__button--gallery");
    let cardsBlockGallery = document.querySelectorAll(".gallery__block");
    let tabNameGallery;

    tabBtnGallery.forEach(element => {
      element.addEventListener("click", selectTab);
    });

    function selectTab(evt) {
      tabBtnGallery.forEach(element => {
        element.classList.remove("tab__button--gallery-active");
      });
      this.classList.add("tab__button--gallery-active");
      tabNameGallery = this.getAttribute("data-tab");
      selectTabContent(tabNameGallery);
    }

    function selectTabContent(tabNameGallery) {
      cardsBlockGallery.forEach(element => {
        if (element.classList.contains(tabNameGallery)) {
          element.classList.add("gallery__block--active");
        } else {
          element.classList.remove("gallery__block--active");
        }
      });
    }
  };

tabGallery();

// Кнопка наверх

let scrollUpButton = function () {
  let scrollUp = document.querySelector(".button__scroll-up");

  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }

  scrollUp.onclick = function (evt) {
    window.scrollTo(0, 0);
  };
};

window.onscroll = function() {
  menuFixed();
  scrollUpButton();
};


window.onscroll = function() {
  menuFixed();
  scrollUpButton();
};

// Модальные окна

let modal = function () {
  let htmlPage = document.querySelector(".page");
  let modalsOpen = document.querySelectorAll(".js-button-open");
  let modalWindows = document.querySelectorAll(".modal");
  let modalOverlay = document.querySelector(".modal__overlay");
  let modalFormBack = document.querySelector(".modal__form--backcall");
  let buttonsClose = document.querySelectorAll(".js-button-close");
  let modalUsernames = document.querySelectorAll(".modal__form-input--username");
  let modalBackCall = document.querySelector(".modal");
  let inputPhone = document.querySelector(".modal__form-input--phone");
  let username = document.querySelector(".modal__form-input--username");
  let modalButtons = document.querySelectorAll(".modal__button");

  let modalOpenName;
  let scrollPosition;
  let modalName;

  // Автофокус

  let autofocus = function () {
    for (let modalUsername of modalUsernames) {
      modalUsername.focus();
    }
  };

  // Открытие окна

  for (let modalOpen of modalsOpen) {
    modalOpen.onclick = function (evt) {
      evt.preventDefault();
      scrollPosition = pageYOffset;
      modalOpenName = this.getAttribute("data-modal-window");
      modalName = this.getAttribute("data-modal-name");
      for (let modalWindow of modalWindows) {
        if (modalWindow.classList.contains(modalOpenName)) {
          htmlPage.classList.add("page__modal-opened");
          htmlPage.style.top = -scrollPosition + "px";
          modalOverlay.classList.add("modal-overlay__open");
          modalWindow.classList.add("modal__show");
          autofocus();
        }
      }
    }
  };

  // Закрытие окна

  let closesWindows = function () {
    for (let modalWindow of modalWindows) {
      htmlPage.classList.remove("page__modal-opened");
      modalWindow.classList.remove("modal__show");
      modalWindow.classList.remove("modal-error");
      modalOverlay.classList.remove("modal-overlay__open");
      htmlPage.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      htmlPage.style.scrollBehavior = "";
      htmlPage.style.top = "";
    }
  };

  // Закрытие окна по кнопке

  for (let buttonClose of buttonsClose) {
    buttonClose.onclick = function (evt) {
      evt.preventDefault();
      closesWindows();
    }
  };

  // Закрытие окна по esc

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closesWindows();
    }
  });

  // Закрытие по клику вне окна

  htmlPage.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("modal__overlay")) {
      closesWindows();
    }
  });
};

modal();

//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	jQuery(".fancybox").fancybox();

  // Плавный скролл
  jQuery("a.link-page").on("click", function (event) {
	event.preventDefault(); //опустошим стандартную обработку
	let id  = jQuery(this).attr('href'), //заберем айдишник блока с параметром URL
		top = jQuery(id).offset().top; //определим высоту от начала страницы до якоря
    jQuery('body,html').animate({scrollTop: top - 60}, 1000); //сделаем прокрутку за 1 с
}); 
