$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
  arrows: true,
  autoplay: true,
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
        dots: false,
        arrows: true,
      },
    },
  ],
});
