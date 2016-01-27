var main = function() {
  
  $('.bell').click(function() {
  	$('.notification-menu').toggle();
  });
  
  $('.post .btn').click(function() {
    $(this).toggleClass('btn-like');
  });
};

$(document).ready(main);