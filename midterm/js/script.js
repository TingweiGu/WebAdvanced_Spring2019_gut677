var app = app || {};

app.main = (function() {
    var x =[];
    var y =[];

   function clickList(){
       console.log("1k");
       $('ul li').eq(0).click(function(){
           
            //remove the previous assigned value
            $('.difference').remove();
           
            // change the value of xy position
            x = [193, 52, 142, 248, 240];
            y = [110, 190, 185, 257, 185];
            $("#image").css('visibility', 'visible');
            $("#imgSize1").attr('src', 'data/a1.png');
            $("#imgSize2").attr('src', 'data/a2.png');
            $("#image").css('background-color', 'aliceblue'); 
            
            position();
            checkDifference();
            check();
        });

        $('ul li').eq(1).click(function(){
            $('.difference').remove();
            x = [306, 196, 146, 74, 162];
            y = [212, 80, 124, 126, 286];
            $("#image").css('visibility', 'visible');
            $("#imgSize1").attr('src', 'data/b1.png');
            $("#imgSize2").attr('src', 'data/b2.png');
            $("#image").css('background-color', '#FBEFEF');
            
            position();
            checkDifference();
            check();

        });

        $('ul li').eq(2).click(function(){
            $('.difference').remove();
            x = [195, 301, 141, 96, 143];
            y = [207, 203, 157, 180, 127];
            $("#image").css('visibility', 'visible');
            $("#imgSize1").attr('src', 'data/c1.png');
            $("#imgSize2").attr('src', 'data/c2.png');
            $("#image").css('background-color', '#FBFBEF');
            
            position();
            checkDifference();
            check();

        });

        $('ul li').eq(3).click(function(){
            $('.difference').remove();
            x = [206, 72, 34, 60, 257];
            y = [184, 151, 183, 183, 185];
            $("#image").css('visibility', 'visible');
            $("#imgSize1").attr('src', 'data/d1.png');
            $("#imgSize2").attr('src', 'data/d2.png');
            $("#image").css('background-color', '#FBEFEF');
            
            position();
            checkDifference();
            check();

        });

        $('ul li').eq(4).click(function(){
            $('.difference').remove();
            x = [227, 157, 230, 242, 242];
            y = [127, 230, 305, 145, 67];
            $("#image").css('visibility', 'visible');
            $("#imgSize1").attr('src', 'data/e1.png');
            $("#imgSize2").attr('src', 'data/e2.png');
            $("#image").css('background-color', '#EFF2FB');
            
            position();
            checkDifference();
            check();

        });      
   }
    
    function position(){
        var status = "Find all " + x.length + " of the differences.";
        $('.statusInitial').text(status);
        $('.statusInitial').css('padding', '26px');

        //create div for "circle"
        for (var i = 0; i< x.length; i++){
            console.log(x[1]);
            var Xpos = x[i] +"px";
            var Ypos = y[i] +"px";

            var newDiv = "<div style='top:" +Xpos+ "; left:"+Ypos+";' class='difference " +i+ "'></div>";

            $('.image1').append(newDiv);
            $('.image2').append(newDiv);

           } 
    }
    
    var found = [];
	var count = 0;
	var difNum = [];
	
    function check(){
 	
		var clicked = 0;
		for (var i = 0; i<found.length+1; i++){
			
			if(found[i]===difNum){
				$('.statusInitial').text("Already Clicked");
				clicked = 1;
				$('.statusInitial').text(x.length - found.length + " more remaining");
				if (x.length - found.length + 1 === 0){
					$('.statusInitial').text("You found all of the differences!");
				}
			}
		}
        
		if (clicked === 0){
			found.push(difNum);
			count++;
			$('.statusInitial').text(x.length - found.length + 1 + " more remaining");
			
			if (x.length - found.length + 1 === 0){
				$('.statusInitial').text("You found all of the differences!");
			}
         }
     };
	
    function checkDifference(){
        found = [];
        count = 0;
        difNum = [];
        
        //get the number of clicked differences
        $('.difference').click(function() {
            $('.statusInitial').css({
                'padding':'26px',
                'background-color': '#C9F7E3'
                });

            difNum = "."+$(this).attr('class').split(' ')[1];
            console.log(difNum);

            $(difNum).css({
                'border': '2px solid #1BF897',
            });

            check();
        });

        $('.pic').click(function() {
            $('.statusInitial').text('Incorrect');
            $('.statusInitial').css({
                'padding':'26px',
                'background-color': '#FFE7E4'
            });

            //check to see if all differences are found
            if (x.length - found.length + 1 === 0){
                $('.statusInitial').text("You found all of the differences!");
                $('.statusInitial').css('background-color', '#C9F7E3');
            }
        }); 
    }
	
var init = function(){
		console.log('Initializing app.');
        
        //create a constructor for slider
        function Slider(container, nav) {
            this.container = container;
            this.nav = nav.show();
            this.imgs = this.container.find('img');
            this.imgWidth = this.imgs[0].width;
            this.imgsLen = this.imgs.length;
            this.current = 0;
        }
    
        var container = $('.slider').css('overflow', 'hidden').children('ul');
        var slider = new Slider(container, $('#slider-nav'));

        slider.nav.find('button').on('click', function() {
            slider.setCurrent($(this).data('dir'));
            slider.transition();
        });

        Slider.prototype.transition = function(coords) {
            this.container.animate({
                'margin-left': coords || - (this.current * this.imgWidth)
            });
        };

        Slider.prototype.setCurrent = function(dir) {
            var pos = this.current;
            pos += ((dir === 'next') || -1);
            this.current = (pos < 0) ? this.imgsLen -1 : pos % this.imgsLen;
            return pos;
        } 
    
        clickList();
        
	};

	return {
		init: init
	};
    
})();  

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
    


