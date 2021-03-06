$(document).ready(function () {

	// push down other content to not show on page with main title
	$("#why_dyxtra").css("margin-top", window.innerHeight + 'px')

	// run to format code snippets
	PR.prettyPrint()

	// tracking link clicks
	mixpanel.track_links(".mixpanel-tracked-link", "Link clicked", function(ele) {
		mixpanel.track($(ele).attr('href'));
    	return { type: $(ele).attr('href') }
	});

	// tab functionality
	$('#code_or_no_code .menu .item')
	  .tab({
	    context: $('#code_or_no_code')
	  })
	;

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
		strings: ["food", "ride", "order"],
		typeSpeed: 55,
		loop: null,
		showCursor: true
	});
});

function get_started(url) {
	mixpanel.track('Get Started', {
		'url' : url
	});
	window.location=url;
}
