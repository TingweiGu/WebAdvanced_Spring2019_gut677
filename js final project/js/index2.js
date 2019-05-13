/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);


$(document).ready(function(e) {    
    $('img[usemap]').rwdImageMaps();

    $('area').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      var imagemapItems = $('.imagemap__item');
      $(".stitchImage").css("display", "none");
      imagemapItems.hide();
      $(target).show();
      $(target+'> h4').addClass('is-open');
      $(".introduction").hide();
    });
    
    $(".imagemap__img").on("click", function(event) {
      $(".introduction").css("display", "none");
    });
    
    $("#image2").on("click", function(event) {
        $("#stitch1").show();
    });
    
    $("#image3").on("click", function(event) {
        $("#stitch2").show();
    });
    
    $("#image4").on("click", function(event) {
        $("#stitch3").show();
    });
    
    $("#image5").on("click", function(event) {
        $("#stitch4").show();
    });
    
    $("#image6").on("click", function(event) {
        $("#stitch5").show();
    });
    
    $("#image7").on("click", function(event) {
        $("#stitch6").show();
    });
    
    $("#stitch1").on("click", function(event) {
        $(".imagemap__img").css("display", "none");
        $("#step1").show();
        $(".back").show();     
    });
    
    $("#stitch2").on("click", function(event) {
        $(".imagemap__img").css("display", "none");
        $("#step2").show();
        $(".back").show();
    });
    
    $("#stitch3").on("click", function(event) {
        $(".imagemap__img").css("display", "none");
        $("#step3").show();
        $(".back").show();  
    });
    
    $("#stitch4").on("click", function(event) {
        $(".imagemap__img").css("display", "none");
        $("#step4").show();
        $(".back").show(); 
    });
    
    $("#stitch5").on("click", function(event) {
        $(".imagemap__img").css("display", "none");
        $("#step5").show();
        $(".back").show();
    });
    
    $("#stitch6").on("click", function(event) {
        $(".imagemap__img").css("display", "none");
        $("#step6").show();
        $(".back").show();    
    });
    
     $(".back").on("click", function(event) {
        $(".imagemap__img").css("display", "inline");
        $(".steps").hide();
        $(".back").hide();   
    }); 
    
//    $("img").on("click", function(event) {
//        var x = event.pageX - this.offsetLeft;
//        var y = event.pageY - this.offsetTop;
//        var position = "X Coordinate: " + x + " Y Coordinate: " + y;
//        $("div").filter("#info").text(position);
//    });
});