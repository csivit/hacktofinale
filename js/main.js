/*AS 18/10/2015 - H2F*/

/* Super Slides */
'use strict';
$('#slides').superslides({
	animation: 'fade' //Type slider animation
});

/*Typed*/
$(function () {
	$("#typed").typed({
		stringsElement: $('#typed-strings'),
		typeSpeed: 150,
		backDelay: 500,
		loop: false,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		/*  callback: function(){ foo(); },*/
		resetCallback: function () {
			newTyped();
		}
	});
	$(".reset").on('click', function () {
		$("#typed").typed('reset');
	});
});

function newTyped() { /* A new typed object */ }
/* 	function foo(){ console.log("Callback"); }*/

$(document).ready(function () {
	/* how content options */
	$("#owl-demo").owlCarousel({
		navigation: true,
		slideSpeed: 400,
		paginationSpeed: 400,
		touchDrag: true,
		mouseDrag: false,
		singleItem: true
	});

	

	/* Countdown */
	$(function () {
		/* Date Here */
		$('div#time').countdown("2015/10/19 21:30:00", function (event) {
			var $this = $(this);
			switch (event.type) {
			case "seconds":
			case "minutes":
			case "hours":
			case "days":
				$this.find('span#' + event.type).html(event.value);
				break;
			case "finished":
				$this.hide();
				break;
			}
		});
	});

	/* Interactive bg */
	$("#bg").interactive_bg();
	$("#bg-2").interactive_bg();
	$("#bg-3").interactive_bg();


	$(".owl-buttons").after("<div class='separator-3'></div>");

});