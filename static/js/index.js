$(document).ready(function () {

	// tracking link clicks
	mixpanel.track_links(".mixpanel-tracked-link", "Link clicked", function(ele) {
    	return { type: $(ele).attr('href') }
	});

    // show sticky opaque menu when title passed
    $('#navbar').visibility({
        once: false,
        onBottomPassed: function () {
            $('#navbar_sticky').transition('fade in');
        	$('#navbar').removeClass('visible');
        	$('#navbar').addClass('hidden');
        },
        onBottomPassedReverse: function () {
        	$('#navbar').removeClass('hidden');
        	$('#navbar').addClass('visible');
            $('#navbar_sticky').transition('fade out');

        }
    });


	$('.message .close').on('click', function() {
	    $(this)
	      .closest('.message')
	      .transition('fade')
	    ;
  	});

 	$("#form_notify_id").submit(function(event) {
		$('#notify_submit_btn').attr('disabled',true);
		$('#notify_submit_btn').css('display', 'None');
		$('#notify_loader_id').addClass('active');
		event.preventDefault();

		var data = $("#form_notify_id").serializeArray(); // convert form to array

		console.log("DATA");
		console.log(data);
		$.ajax({
			type: $("#form_notify_id").attr('method'),
			url: $("#form_notify_id").attr('action'),
			data: $.param(data),
			success: function (data) {
				$("#register_div").html("<p>thank you for submitting your information, we look forward to contacting you soon!</p>");
			},
			error: function (data) {
				$('#notify_submit_btn').attr('disabled',false);
				$('#notify_submit_btn').css('display', 'block');
				$('#notify_loader_id').removeClass('active');
				$('#error_div_id').removeClass('hidden');
			},
		});
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
