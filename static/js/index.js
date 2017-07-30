$(document).ready(function () {

    // show sticky opaque menu when title passed
    $('#navbar').visibility({
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
 		if ($(this).attr('href') == "#how_it_works_div" && $(location).attr('href').indexOf("/pricing") != -1) {
 			$(location).attr('href', '/#how_it_works_div')
 		}
 		else if ($(this).attr('href').indexOf("/") == -1) {
		    $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top + 200
		    }, 500);
		    return false;
 		}
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
