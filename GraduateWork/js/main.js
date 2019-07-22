$(document).ready(function () {
  $('.slider').slick({
    accessibility: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0%',
    autoplaySpeed: 3000,
    dots: false,
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