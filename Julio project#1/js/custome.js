/*global $, document*/


$(document).ready(function () {
  "use strict";
  

  //1. Scroll Bar
  $('html').niceScroll({
    cursorcolor: 'var(--maincolor)',
    cursoropacitymin: 0.5,
    cursorwidth: "10px"
  });

  //2. 

  $('.menu-toggle, .fa-times').on("click", function () {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
  });


  $('.overlay').on("click", function () {
    $('nav').removeClass('active');
    $(this).removeClass('menu-open');
  });









































  

}); // End Of JQuery














// //Auto Slider Function*//*Auto Slider Function*//*Auto Slider Function*/

// //1. Auto flip

// (function slider () {

//   var $activeSlider = $('.item .active');

//   $activeSlider.each(function () {

//     if(!$activeSlider.is(':last of type')) {

//       $activeSlider.delay(2000).fedeOut(1000, function () {

//         $activeSlider.removeClass('active').next($('.item')).addClass('active').fadeIn(1000);

//         slider ();
//       });

//     } else {

//       $activeSlider.delay(2000).fadeOut(1000, function () {

//         $activeSlider.removeClass('active');
      
//         $activeSlider.eq(0).addClass('active').fadeIn(1000);

//         slider ();  

//       });

    
//     }
// });
// }());


// //2. On Click on arrows
// $('.chevron-right').on("click", function () {
//   var $activeSlider = $('.item .active');

//   $activeSlider.each (function () {

//     if(!$activeSlider.is(':last of type')) {

//       $activeSlider.next($('.item')).addClass('active').siblings().removeClass('active');
  
//     } else {
//       return false;
    
//   }
//   });
// });


// //3. Hide un active arrows


// var $rightArrow = $('.chevron-right'),
//     $leftArrow = $('.chevron-right'),
//     $activeSlider = $('.item .active');

//   function arrowChicker () {
//     if($activeSlider.is(':first')) {
//       $rightArrow.fadeOut();
      
//     } else {
//       $rightArrow.fadeIn();
//     }
//   };

//   arrowChicker ();

//   //دالة ifالمختصرة
//   function arrowChicker () {
//     $activeSlider.is(':first') ?  $rightArrow.fadeOut() : $rightArrow.fadeIn();
//     $activeSlider.is(':last') ?  $leftArrow.fadeOut() : $leftArrow.fadeIn();
//   };
//   arrowChicker ();



