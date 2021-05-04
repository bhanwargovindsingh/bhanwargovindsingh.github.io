
$('#main-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:true,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	animateOut: 'fadeOut',
	slideBy: 1,
    responsive:{
        0:{items:1},
        600:{items:1},
		1000:{items:1},
        1200:{items:1}
    }
})

$('#testimonial-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
	dots:true,
	autoplay:true,
    autoplayHoverPause:true,
	slideBy: 1,
    responsive:{
        0:{items:1},
        600:{items:1},
		1000:{items:1},
        1200:{items:1}
    }
})

$(document).ready(function() {
  $('#close-btn').click(function() {
    $('#search-overlay').fadeOut();
    $('#search-btn').show();
  });
  $('#search-btn').click(function() {
    $(this).hide();
    $('#search-overlay').fadeIn();
  });
});