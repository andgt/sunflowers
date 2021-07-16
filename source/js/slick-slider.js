window.$ = jQuery;
window.jQuery = jQuery;

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


  $('.slick-slider__3').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
          }
      },
      {
        breakpoint: 768,
          settings: "unslick"
      },
    ]
  });

  $(window).resize(function() {
    if (window.innerWidth < 768) {
      $('.slick-slider__3').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
      })
    } else {
        $('.slick-slider__3').slick('unslick');
      }
  });

$(document).ready(function() {
  $('.slick-slider__4').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
          }
      },
      {
        breakpoint: 768,
          settings: "unslick"
      },
    ]
  });
});

$(window).resize(function() {
  if (window.innerWidth < 768) {
    $('.slick-slider__4').not('.slick-initialized').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000
    })
  } else {
      $('.slick-slider__4').slick('unslick');
    }
});
