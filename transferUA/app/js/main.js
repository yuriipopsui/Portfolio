$(function() {
  $('.header__burger-menu').click(function() {
    $('.header__burger-menu').toggleClass('open-menu');
    $(".menu").toggleClass('open-menu');
  });
 
var swiper = new Swiper ('.swiper-container', {

  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});

});