$(document).ready(function() {
  // add classes to create effect or simply for 'overflow: hidden' (.add() method)
  $('.fa-bars').on('click', function() {
    $('.sub-menu-phone > ul').animate({marginLeft : '0%'}, 700);
    $('.menu-phone').fadeToggle(300);
    $('body').addClass('no_overflow');
  });
  $('.close-menu').on('click', function() {
    $('.sub-menu-phone > ul').animate({marginLeft : '100%'}, 700);
    $('.menu-phone').fadeToggle(300);
    $('body').removeClass('no_overflow');
  });
});
