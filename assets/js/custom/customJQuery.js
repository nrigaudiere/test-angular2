
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


 /* ==== Carousel ==== */
$(document).ready(function() {
    $('#homeCarousel').carousel({interval: 7000});

	$('#homeCarousel').bind('slid.bs.carousel', function (e) {
		var index = $('.carousel-inner .active').index();

		$('.carousel-controllers').children('.active').removeClass('active');
		$('.carousel-controllers').children('[data-slide-to=\"'+index+'\"]').addClass('active');

	});

	$('#testimonialCarousel').carousel({interval: 3000});


	/* ==== Flickr ==== */
	$('.flickr-feed').socialstream({
	    socialnetwork: 'flickr',
	    limit: 6,
	    username: 'Mrky1'
	})

	/* ==== Instagram ==== */
	$('.instagram-feed').socialstream({
	    socialnetwork: 'instagram',
	    limit: 15,
	    username: 'mickjagger'
	})

	$('.instagram-list').addClass('no-margins');


});

/* ==== Google Maps ==== */
function initMap() {

	var styleArray = [{
		featureType: "all",
		elementType: "all",
		stylers: [{ saturation: -100 }]
	}];
	var myLatLng = {lat: 41.385733, lng: 2.181448};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		scrollwheel: false,
		styles: styleArray,
		zoom: 16
	});

	var marker = new google.maps.Marker({
		position: myLatLng, 
		map: map,
		draggable:false,
		icon: '../../images/ressources/marker.png',
		title: 'BANANA BREAD'
	});

}

$(document).ready(function() {

	google.maps.event.addListenerOnce(map, 'idle', function() {
		$('#mapContent').parent().css('background-color', 'black');
		console.log($('#mapContent'));
		$('#mapContent').closest("div").css('background-color', 'red');
	});
});
