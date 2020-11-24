
$(document).ready(function(){
$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
  arrows: true,
  dotsClass: 'my-dots',
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false,
      },
    },
  ],
});
});