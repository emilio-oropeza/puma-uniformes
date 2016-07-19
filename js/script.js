$(document).ready(function(){
	$("#portada").height(screenHeight());
	$("#portada > .container").height(screenHeight());
	$("#portada > .container > .row > div").height(screenHeight());
	$(window).resize(function(){
		$("#portada").height(screenHeight());
		$("#portada > .container").height(screenHeight());
		$("#portada > .container > .row > div").height(screenHeight());
	});
	barsDisapear();
	$("article").uniformes();
});


function barsDisapear(){
	$("#nav-bar-stats").remove();
	$("#mobile-horizontal-menu").remove();
	$("#top-bar-wrapper").remove();
	$("#mobilemenu").remove();
}
function screenHeight(){
	var height = $(window).height();
	height = height - 60;	
	return height;
}
function animateScroll(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
}
