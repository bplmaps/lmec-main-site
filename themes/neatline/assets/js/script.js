(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top','-'+0+'px');
    }
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    let anchor = $(this).attr('href').substring(1);
    let offset = document.getElementById(anchor).scrollIntoView(
      {behavior: "smooth", block: "center"}
    );
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\' aria-label="Previous Slide" ><i class=\'fas fa-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\' aria-label="Next Slide" ><i class=\'fas fa-arrow-right\'></i></button>',
    dots: true
  });
  $('.hero-slider').slickAnimation();



  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  // Animation
  $(document).ready(function () {
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });

  // Image Popup
  $(document).ready(function () {
    let xOffset = 100;
    let yOffset = -20;
    $("span.popupTooltip").hover(function(e) {
        $("<div id='popup-{{ $unique_id }}' class='iiif-popup'><img src='" + $(this).attr('href') + "' alt='url preview' />" + "</div>").appendTo($(this).parent());
        $(".iiif-popup")
          .css("top", (e.pageY - xOffset) + "px")
          .css("left", (e.pageX - yOffset) + "px")
          .fadeIn("fast");
      },
      function() {
        $(".iiif-popup").remove();
      });
      $("span.popupTooltip").mousemove(function(e) {
        $(".iiif-popup")
          .css("top", (e.pageY - xOffset) + "px")
          .css("left", (e.pageX - yOffset) + "px");
      });
  });


})(jQuery);
