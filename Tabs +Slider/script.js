let tab = $('.tab');
let content = $('.content');
for (let i = 0; i < tab.length; i++) {
  $(tab[i]).on('click', function () {
    $('.tab.active').removeClass('active');
    $(tab[i]).addClass('active');
    $('.content.active').hide();
    $('.content.active').removeClass('active');
    $(content[i]).fadeIn('800');
    // $('.text-2').addClass('animate');
    $(content[i]).addClass('active');
  });
}

$('.slider').slick({
  dots: true,
  prevArrow: '.left-nav',
  nextArrow: '.right-nav',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
