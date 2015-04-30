$(document).ready(function(){

var scroller = function(){
   var thumb1 = document.getElementsByClassName("homeThumb1");
   TweenMax.from(thumb1, 8, {left:"120%", repeat:-1, ease:Linear.easeNone});
   
   var thumb2 = document.getElementsByClassName("homeThumb2");
   TweenMax.from(thumb2, 8, {left:"120%", repeat:-1, delay: 2, ease:Linear.easeNone});

   var thumb3 = document.getElementsByClassName("homeThumb3");
   TweenMax.from(thumb3, 8, {left:"120%", repeat:-1, delay: 4, ease:Linear.easeNone});
   
   var thumb4 = document.getElementsByClassName("homeThumb4");
   TweenMax.from(thumb4, 8, {left:"120%", repeat:-1, delay: 6, ease:Linear.easeNone});
   
   var thumb5 = document.getElementsByClassName("homeThumb5");
   TweenMax.from(thumb5, 2, {left:"0%", ease:Linear.easeNone});
   
   var thumb6 = document.getElementsByClassName("homeThumb6");
   TweenMax.from(thumb6, 4, {left:"40%", ease:Linear.easeNone});
   
   var thumb7 = document.getElementsByClassName("homeThumb7");
   TweenMax.from(thumb7, 6, {left:"80%", ease:Linear.easeNone});

};

window.onload = function (){

scroller();

}



/* SECOND VERSION, inifinite loop by glitchy animation causes delay and disaster
var firstImg = $('.scrollBox img:first-child')
var secondImg = $('.scrollBox img:nth-child(2)')
var thirdImg = $('.scrollBox img:nth-child(3)')
var lastImg = $('.scrollBox img:nth-child(4)')

var thumb1 = function(){
	firstImg.animate({"left":"-40%"}, 2000, "linear", function(){
		firstImg.css('left','120%');
		firstImg.animate({'left':'0%'}, 6000, "linear");
	});
}

var thumb2 = function(){
	secondImg.animate({"left":"-40%"}, 4000, "linear", function(){
		secondImg.css('left','120%');
		secondImg.animate({'left':'40%'}, 4000, "linear");
	});
}

var thumb3 = function(){
	thirdImg.animate({"left":"-40%"}, 6000, "linear", function(){
		thirdImg.css('left','120%');
		thirdImg.animate({'left':'80%'}, 2000, "linear");
	});
}

var thumb4 = function(){
	lastImg.animate({"left":"-40%"}, 8000, "linear", function(){
		lastImg.css('left','120%');
		// lastImg.animate({'left':'120%'}, 0, "linear");
	});
}

setInterval(function(){
	thumb1();
	thumb2();
	thumb3();
	thumb4();
}, 8000);
*/

/* ORIGINAL VERSION with TWICE scroll
var galleryScroll = function(){
	


	firstImg.animate({"left":"-40%"}, 2000, "linear");
	secondImg.animate({"left":"-40%"}, 4000, "linear");
	thirdImg.animate({"left":"-40%"}, 6000, "linear");
	lastImg.animate({"left":"-40%"}, 8000, "linear");

}

var scrollContinue = function(){

	setInterval(function() {
			console.log("1st")
			firstImg.css("left","100%");
			firstImg.animate({"left":"-40%"}, 7000, "linear");
		}, 2900);
	setInterval(function() {
			console.log("2nd")
			secondImg.css("left","100%");
			secondImg.animate({"left":"-40%"}, 7000, "linear");
		}, 4900);
	setInterval(function() {
			console.log("3rd")
			thirdImg.css("left","100%");
			thirdImg.animate({"left":"-40%"}, 7000, "linear");
		}, 6900);
	setInterval(function() {
			console.log("last")
			lastImg.css("left","100%");
			lastImg.animate({"left":"-40%"}, 7000, "linear");
		}, 8900);
}

galleryScroll();
scrollContinue();
setInterval(scrollContinue(), 6000);
*/


$(window).resize(function(){

	$('.largeText').height(
		$('.workElement').height()
	);
});

$('#workBar').hover(function(){
	// $('.largeText').css("display","inline");
	// $('.largeText').css("opacity","0.5", 500);
	$('.largeText').height(
		$('.workElement').height()
		);
	$('.largeText').toggleClass("visable");
});


});