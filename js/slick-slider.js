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
