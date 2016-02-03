
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
  });