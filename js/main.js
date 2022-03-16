$(function () {
  'use strict';
  // trigger mixItup
  mixitup('#mixup-selector-works');
  // add active item after filter
  $('.works .list-item li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
