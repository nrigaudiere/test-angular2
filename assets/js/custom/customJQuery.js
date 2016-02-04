
var container 		   = $('.main');
var description 	   = $('#description');
var reachedDescription = description.offset();

$('a').click(function() {
  var target = $($.attr(this, 'href'));

  $('html,body').animate({scrollTop: container.scrollTop() + target.offset().top});
  return false;
});


$(document).ready(function(){
	$(window).scroll(function() { // check if scroll event happened
		if ($(document).scrollTop() >= reachedDescription.top) { // check if user scrolled more than 50 from top of the browser window
			$(".navbar-fixed-top").addClass("navbar-scrolled"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
		} else {
			// $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
			$(".navbar-fixed-top").removeClass("navbar-scrolled");
		}
	});
});


// Carousel
$(document).ready(function() {
    $('.carousel').carousel({interval: 7000});

	$('#homeCarousel').bind('slid.bs.carousel', function (e) {
		var index = $('.carousel-inner .active').index();

		$('.carousel-controllers').children('.active').removeClass('active');
		$('.carousel-controllers').children('[data-slide-to=\"'+index+'\"]').addClass('active');

	});
  });



// Instagram
$('.instagram').on('willLoadInstagram', function(event, options) {
	console.log(options);
});
$('.instagram').on('didLoadInstagram', function(event, response) {
	console.log(response);
});
$('.instagram').instagram({
	hash: 'photographer',
	clientId:'5e17e41d90ec4613ad722af6cc0f8f1e',
	// code:'ab74a752bf5e4171a06f499f80db52de'
	accessToken: '2896544984.5e17e41.13df3b4f314048a6ad5a001a1dc7f379'
});