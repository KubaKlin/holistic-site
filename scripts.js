
// carousel
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})


// inner link
$(document).ready(function () {
  var top_of_window = $(window).scrollTop();
  var $gallery = $('.main_baner_right a, .gallery_box a, .gallery_center a').simpleLightbox({
    widthRatio: 1,
    captionSelector: 'self'
  });

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
    if (bottom_of_window > bottom_of_object - 250) {
      $(this).addClass('moveIn');
    }
  });
});
