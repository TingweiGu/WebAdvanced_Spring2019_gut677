$(document).ready(function(){
  $('.js-replay').click(function(){
    var target = $('.intro-text-wrapper');
    target.removeClass('animation');
    target.outerWidth() == target.outerWidth(); // trigger reflow
    console.log(target.offsetWidth);
    target.addClass('animation');
  });
    
  $("#rotate").hide();
  $("#rotate").delay(49000).fadeIn(5000); 
    
  $('.topArrow').click(function(){
    window.location.href = 'image.html';
    return false;
  });
}); 

$(function() {
  setTimeout('topArrow()');
});

function topArrow() {
  $('#topArrow').animate({
    marginBottom: '-=15px'
  }, 800).animate({
    marginBottom: '+=15px'
  }, 800);
  setTimeout('topArrow()', 1600);
}