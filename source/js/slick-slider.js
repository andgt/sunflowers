$(document).ready(function() {
  $('.slick-slider__1').slick({
    arrows: true,
    slidesToShow: 4,
    speed: 1000,
    autoplay: false,
    initialSlide: 1,
    centerMode: false,
    variableWidth: true
  });
});

$(document).ready(function() {
  $('.slick-slider__2').slick({
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    speed: 2000,
    initialSlide: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          speed: 1000
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('.slick-slider__4').slick({
    arrows: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: false,
    initialSlide: 1,
    centerMode: false
  });
});

$(document).ready(function() {
  $('.slick-slider__3').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1,
            speed: 1000,
            initialSlide: 1,
            centerMode: false
          }
      },
    ]
  });
});

$(document).ready(function() {
  $('.slick-slider__4').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1,
            speed: 1000,
            initialSlide: 1,
            centerMode: false
          }
      },
    ]
  });
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    $('.slick-slider__3').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive = true) {
      $('.slick-slider__3').slick({
        arrows: true,
        slidesToShow: 1,
        speed: 1000,
        initialSlide: 1,
        centerMode: false
      });
      sliderIsLive = true;
    }
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    $('.slick-slider__4').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive = true) {
      $('.slick-slider__4').slick({
        arrows: true,
        slidesToShow: 1,
        speed: 1000,
        initialSlide: 1,
        centerMode: false
      });
      sliderIsLive = true;
    }
  }
});
