$(document).ready(function () {
  $('.slider').slick({
    accessibility: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    arrows: true,
    centerMode: false,
    centerPadding: '0%',
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

$(document).ready(function () {
  $('.slider-text').slick({
    accessibility: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    arrows: true,
    centerMode: false,
    centerPadding: '0%',
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

$("a").click(function (event) {
  event.preventDefault();
});
var div = $('.menu-icon');
var button = $('.menu-button');
var menu = $('.menu-container');

div.click(function(){
  button.toggleClass('open');
  menu.toggleClass('active');
});