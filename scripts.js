// inner link
$(document).ready(function () {
  var top_of_window = $(window).scrollTop();

  $(".inner_link").click(function(event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top-150 }, 1e3);
  });
});


// move in animation
$(window).scroll(function () {
  //move up animation
  $('.animate').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object - 50) {
      $(this).addClass('moveIn');
    }
  });

  $('.animate-earlier').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object - 350) {
      $(this).addClass('moveIn');
    }
  });
});

$(document).ready(function () {
  $('.animate').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object - 50) {
      $(this).addClass('moveIn');
    }
  });

  $('.animate-earlier').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object - 350) {
      $(this).addClass('moveIn');
    }
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true
        }
    }
})
});
