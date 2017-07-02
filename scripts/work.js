$( document ).ready(function() {
	$("#vtec-work-button").click(function (){
		$("#vtec-work-content").show();
		$("#gadc-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").slideUp('slow');
		$("#main-content").css('background-color','#650104');

		$("#vtec-work-button .work-button-image").css('filter','opacity(1)');
		$("#vtec-work-button .work-button-label").css('color','inherit');

		$("#appf-work-button .work-button-image").css('filter','opacity(15%)');
		$("#appf-work-button .work-button-label").css('color','#e6e6e6');
		$("#gadc-work-button .work-button-image").css('filter','opacity(15%)');
		$("#gadc-work-button .work-button-label").css('color','#e6e6e6');

		$("#vtec-work-button").addClass('work-navigation-selected');
		$("#gadc-work-button").removeClass('work-navigation-selected');
		$("#appf-work-button").removeClass('work-navigation-selected');
	});
	$("#gadc-work-button").click(function (){
		$("#gadc-work-content").show();
		$("#vtec-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").slideUp('slow');
		$("#main-content").css('background-color','#e21929');

		$("#gadc-work-button .work-button-image").css('filter','opacity(1)');
		$("#gadc-work-button .work-button-label").css('color','inherit');

		$("#vtec-work-button .work-button-image").css('filter','opacity(15%)');
		$("#vtec-work-button .work-button-label").css('color','#e6e6e6');
		$("#appf-work-button .work-button-image").css('filter','opacity(15%)');
		$("#appf-work-button .work-button-label").css('color','#e6e6e6');

		$("#gadc-work-button").addClass('work-navigation-selected');
		$("#appf-work-button").removeClass('work-navigation-selected');
		$("#vtec-work-button").removeClass('work-navigation-selected');
	});
	$("#appf-work-button").click(function (){
		$("#appf-work-content").show();
		$("#gadc-work-content").hide();
		$("#vtec-work-content").hide();
		$("#work-profile-hero").slideUp('slow');
		$("#main-content").css('background-color','#00afdb');

		$("#appf-work-button .work-button-image").css('filter','opacity(1)');
		$("#appf-work-button .work-button-label").css('color','inherit');

		$("#vtec-work-button .work-button-image").css('filter','opacity(15%)');
		$("#vtec-work-button .work-button-label").css('color','#e6e6e6');
		$("#gadc-work-button .work-button-image").css('filter','opacity(15%)');
		$("#gadc-work-button .work-button-label").css('color','#e6e6e6');

		$("#appf-work-button").addClass('work-navigation-selected');
		$("#gadc-work-button").removeClass('work-navigation-selected');
		$("#vtec-work-button").removeClass('work-navigation-selected');
	});
});