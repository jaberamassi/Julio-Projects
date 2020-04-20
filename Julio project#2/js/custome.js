/*global $, document*/


$(document).ready(function () {
  "use strict";
  

  // //1. Scroll Bar
  // $('html').niceScroll({
  //   cursorcolor: 'var(--maincolor)',
  //   cursoropacitymin: 0.5,
  //   cursorwidth: "10px"
  // });

  //2. Toggle between bar icon and times icon
  
  $('.hamburger-menu').on("click", function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });

}); // End Of JQuery







