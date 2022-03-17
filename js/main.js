$(function () {
  'use strict';
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
