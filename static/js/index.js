$(document).ready(function () {

    // show sticky opaque menu when title passed
    $('#main_title').visibility({
        once: false,
        onBottomPassed: function () {
            $('#navbar_sticky').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('#navbar_sticky').transition('fade out');

        }
    });

    // anchors with animation
	$('a').click(function(){
		console.log($(this).attr('href'));
		console.log($( $(this).attr('href') ).offset().top);
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top + 200
	    }, 500);
	    return false;
	});



});

// animate typing in title
$(function(){
	$("#element").typed({
		strings: ["food", "ride", "package"],
		typeSpeed: 55,
		loop: null,
		showCursor: true
	});
});
