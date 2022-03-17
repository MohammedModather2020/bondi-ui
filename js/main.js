$(function () {
  'use strict';
  // list items click to move section
  $('.navbar .navbar-nav .nav-link').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top - 50,
      },
      300
    );
    $(this).parent().addClass('active').siblings().removeClass();
  });
  // collapsed navbar mobile screen
  $('.navbar .navbar-nav .nav-link').on('click', function () {
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').addClass('collapse');
    $('.navbar-collapse').removeClass('show');
  });
  // trigger mixItup
  mixitup('#mixup-selector-works');
  //----------------------------------------------------------------------------->
  // add active item after filter
  $('.works .list-item li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //----------------------------------------------------------------------------->
  // trigger swiper
  var swiper = new Swiper('.technologies .swiper', {
    slidesPerView: 7,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
