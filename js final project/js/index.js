$(document).ready(function(){
    
  $("#rotate").hide();
  $("#rotate").delay(49000).fadeIn(5000); 
    
  $(".quote").hide();
  $(".quote").delay(49000).fadeIn(5000); 
    
  $(".quote2").hide();
  $(".quote2").delay(60000).fadeIn(5000); 
    
  $(".quote3").hide();
  $(".quote3").delay(70000).fadeIn(5000); 
    
  $(".quote4").hide();
  $(".quote4").delay(80000).fadeIn(5000); 
    
  $('.topArrow').click(function(){
    window.location.href = 'image.html';
    return false;
  });
    
  var changeText = setInterval(function() {
    textChange();
  }, 10000);
    
  var changeText2 = setInterval(function() {
    textChange2();
  }, 10000);
    
  var changeText3 = setInterval(function() {
    textChange3();
  }, 10000);
    
  var changeText4 = setInterval(function() {
    textChange4();
  }, 10000);

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

function textChange(){
    var minT = 5; 
    var maxT = 20;
    var minL = 10;
    var maxL = 15;
    var a = Math.random() * (+maxT - +minT) + +minT;
    var b = Math.random() * (+maxL - +minL) + +minL;
    
    var quotes = new Array("Processes that employ engagement between hands and brain have a way of progressing in a calm way.", "If I think about the repetitive rhythms of hand stitch, I feel an emphasis on the process, often not the end product.", "I find that my most productive thinking time is accompanied by needle, thread and cloth.", "The process of stitching and reconnecting with herself this way is described as being able to breathe more slowly again."),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('#quoteText').text( randno );  
  $(".quote").css({top: a + 'em', left: b + 'em', position:'absolute'});
}

function textChange2(){
    var minT2 = 5; 
    var maxT2 = 20;
    var minL2 = 55;
    var maxL2 = 60;
    var a2 = Math.random() * (+maxT2 - +minT2) + +minT2;
    var b2 = Math.random() * (+maxL2 - +minL2) + +minL2;
    
    var quotes2 = new Array("The slow, methodical stitching of selected areas also creates new patterns and textures that reveal themselves as you go along.", "Working with my hands is an indirect way to honour both my subject matter and century-long traditions of hand sewing that came before me.", "Re-using old projects can give you an opportunity to reflect on past work and consier the changes in your practice as you re-work and make something new.", "Closely worked, repetitive stitching adds to the solidity of a piece and can give it new decoration."),
    randno2 = quotes2[Math.floor( Math.random() * quotes2.length )];
    $('#quoteText2').text( randno2 );  
  $(".quote2").css({top: a2 + 'em', left: b2 + 'em', position:'absolute'});
}

function textChange3(){
    var minT3 = 30; 
    var maxT3 = 40;
    var minL3 = 10;
    var maxL3 = 15;
    var a3 = Math.random() * (+maxT3 - +minT3) + +minT3;
    var b3 = Math.random() * (+maxL3 - +minL3) + +minL3;
    
    var quotes3 = new Array("Personal and community connections and an appreciation of skill and tradition are a key aspect of the Slow Movement.", "A sustainable textile future would suggest that it is essential to revive these skills and to value the things we buy, to give them longevity and to encourage a more ethical approach to our textile use.", "Alongside the practical function of repair techniques, I find a real beauty to be found in the finishes and pleasure to be taken in the slow execution of the mend.", "The word'Mottainai' is significant, as it is translated as 'too good to waste' and would mean that every scrap availablewas used until it wore out."),
    randno3 = quotes3[Math.floor( Math.random() * quotes3.length )];
    $('#quoteText3').text( randno3 );  
  $(".quote3").css({top: a3 + 'em', left: b3 + 'em', position:'absolute'});
}

function textChange4(){
    var minT4 = 30; 
    var maxT4 = 40;
    var minL4 = 55;
    var maxL4 = 60;
    var a4 = Math.random() * (+maxT4 - +minT4) + +minT4;
    var b4 = Math.random() * (+maxL4 - +minL4) + +minL4;
    
    var quotes4 = new Array("It is so hard to slow down to the pace where it is possible to explore one's mind.", "Slow making using textiles has a special quality. It is a process that is generative and makes something, useful or maybe not, in a slow processs of growth.", "The time-consuming nature of hand embroidery, along with its permanence and integration with the surface fabric, expresses a commitment and dedication to the production, giving depth and gravitas.", "It's emotional therapy as I stitch. Time is recycled."),
    randno4 = quotes4[Math.floor( Math.random() * quotes4.length )];
    $('#quoteText4').text( randno4 );  
  $(".quote4").css({top: a4 + 'em', left: b4 + 'em', position:'absolute'});
}




