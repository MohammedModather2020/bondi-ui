$(function () {
  'use strict';
  // Add Smooth Scroll
  $('html , body').animate({ scrollTop: 0 }, 200);
  var scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });
  //----------------------------------------------------------------------------->
  // click button to scroll top
  scrollButton.on('click', function () {
    $('html ,body').animate(
      {
        scrollTop: 0,
      },
      200
    );
  });
  //----------------------------------------------------------------------------->
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
  //----------------------------------------------------------------------------->
  // collapsed navbar mobile screen
  $('.navbar .navbar-nav .nav-link').on('click', function () {
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').addClass('collapse');
    $('.navbar-collapse').removeClass('show');
  });
  //----------------------------------------------------------------------------->
  // trigger mixItup
  mixitup('#mixup-selector-works');
  //----------------------------------------------------------------------------->
  // add active item after filter
  $('.works .list-item li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //----------------------------------------------------------------------------->
  // trigger aos animate
  AOS.init();
  //----------------------------------------------------------------------------->
  // Start Loading
  $('.loading-overlay .spinner').fadeOut(3000, function () {
    $('body').css('overflow', 'auto');
    $(this)
      .parent()
      .fadeOut(3000, function () {
        $(this).remove();
      });
  });
  //----------------------------------------------------------------------------->
  // trigger swiper
  var swiper = new Swiper('.technologies .swiper', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      340: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
  });
});
