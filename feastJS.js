$(document).ready(function(){

// function galleryScroll1() {
// 	$('.homeThumb1').animate({"left":"-40%"}, 2000, "linear", function(){
// 		$('.homeThumb1').css("left","120%", function(){
// 			$('.homeThumb1').animate({"left":"0"}, 6000, "linear");
// 		});
// 	});
// }

// galleryScroll1();
// setInterval(galleryScroll1, 8000);

// function galleryScroll2(){
// 	$('.homeThumb2').animate({"left":"-40%"}, 2000, "linear", function(){
// 		$('.homeThumb2').css("left","120%", function(){
// 			$('.homeThumb2').animate({"left":"40%"}, 4000, "linear");
// 		});
// 	});
// }
// galleryScroll2()
// setInterval(galleryScroll2, 8000);
	var firstImg = $('.scrollBox img:first-child')
	var secondImg = $('.scrollBox img:nth-child(2)')
	var thirdImg = $('.scrollBox img:nth-child(3)')
	var lastImg = $('.scrollBox img:nth-child(4)')

var galleryScroll = function(){
	


	firstImg.animate({"left":"-40%"}, 2000, "linear");

	secondImg.animate({"left":"-40%"}, 4000, "linear");
	thirdImg.animate({"left":"-40%"}, 6000, "linear");
	lastImg.animate({"left":"-40%"}, 8000, "linear");
}

var scrollContinue = function(){

	setInterval(function() {
			console.log("1st")
			// firstImg.animate({"left":"-40%"}, 7000, "linear", function(){
			// 	$(this).css("left", "100%");
			// });
			firstImg.css("left","100%");
			firstImg.animate({"left":"-40%"}, 7000, "linear");
		}, 2900);
	setInterval(function() {
			console.log("2nd")
			// firstImg.animate({"left":"-40%"}, 7000, "linear", function(){
			// 	$(this).css("left", "100%");
			// });
			secondImg.css("left","100%");
			secondImg.animate({"left":"-40%"}, 7000, "linear");
		}, 4900);
	setInterval(function() {
			console.log("3rd")
			// firstImg.animate({"left":"-40%"}, 7000, "linear", function(){
			// 	$(this).css("left", "100%");
			// });
			thirdImg.css("left","100%");
			thirdImg.animate({"left":"-40%"}, 7000, "linear");
		}, 6900);
	setInterval(function() {
			console.log("last")
			// firstImg.animate({"left":"-40%"}, 7000, "linear", function(){
			// 	$(this).css("left", "100%");
			// });
			lastImg.css("left","100%");
			lastImg.animate({"left":"-40%"}, 7000, "linear");
		}, 8900);
};
galleryScroll();
scrollContinue();
setInterval(scrollContinue(), 6000);

$('#workBar').hover(function(){
	// $('.largeText').css("display","inline");
	// $('.largeText').css("opacity","0.5", 500);
	$('.largeText').height(
		$('#workBar').height()
		);
	$('.largeText').toggleClass("visable");
});
});