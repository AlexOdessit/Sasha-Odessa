let logo = $(document).find('.logo');
let menu = $(document).find('header');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(menu).css({ background: '#000' });
    $(logo).css({ width: '0' });
  } else {
    $(menu).css({ background: 'chocolate' });
    $(logo).css({ width: '70px' });
  }
  //  Burger
  $('.burger').on('click', function () {
    $('ul').slideToggle('animate');
  });
});


// Accordeon
$('.single h3').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  } else {
    $('.single h3.active').next().slideUp();
    $('.single h3.active').removeClass('active');
    $(this).next().slideDown();
    $(this).addClass('active');
  }
});


