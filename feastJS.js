$(document).ready(function(){


var thumb1 = function(){
	var firstImg = $('.scrollBox img:first-child')
	firstImg.animate({"left":"-40%"}, 2000, "linear", function(){
		firstImg.css('left','120%');
		firstImg.animate({'left':'0%'}, 6000, "linear");
	});
}

var thumb2 = function(){
	var secondImg = $('.scrollBox img:nth-child(2)')
	secondImg.animate({"left":"-40%"}, 4000, "linear", function(){
		secondImg.css('left','120%');
		secondImg.animate({'left':'40%'}, 4000, "linear");
	});
}

var thumb3 = function(){
	var thirdImg = $('.scrollBox img:nth-child(3)')
	thirdImg.animate({"left":"-40%"}, 6000, "linear", function(){
		thirdImg.css('left','120%');
		thirdImg.animate({'left':'80%'}, 2000, "linear");
	});
}

var thumb4 = function(){
	var lastImg = $('.scrollBox img:nth-child(4)')
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

/*
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




$('#workBar').hover(function(){
	// $('.largeText').css("display","inline");
	// $('.largeText').css("opacity","0.5", 500);
	$('.largeText').height(
		$('#workBar').height()
		);
	$('.largeText').toggleClass("visable");
});
});