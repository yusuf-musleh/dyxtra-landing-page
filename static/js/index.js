$(document).ready(function () {

    // fix menu when passed
    $('#navbar').visibility({
        once: false,
        onBottomPassed: function () {
			$('#navbar').addClass('fixed');
            $('#navbar').transition('fade in');
            $('#navbar').css('background', 'white');
            $('#right_menu .item').css('color', 'black');
        },
        onBottomPassedReverse: function () {
            // $('#navbar').transition('fade out');
            $('#navbar').addClass('fixed');
            $('#navbar').css('background', 'transparent');
            $('#right_menu .item').css('color', 'white');
            $('#navbar').transition('fade in');

        }
    });

});


$('.autumn.leaf').transition('fade down');