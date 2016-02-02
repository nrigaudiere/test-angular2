
var container = $('.main');

$('a').click(function() {
  var target = $($.attr(this, 'href'));

  $('html,body').animate({scrollTop: container.scrollTop() + target.offset().top});
  return false;
});
