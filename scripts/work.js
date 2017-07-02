$( document ).ready(function() {
	$("#vtec-work-button").click(function (){
		$("#vtec-work-content").show();
		$("#gadc-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").slideUp();
		$("#main-content").css('background-color','#650104');
	});
	$("#gadc-work-button").click(function (){
		$("#gadc-work-content").show();
		$("#vtec-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").slideUp();
		$("#main-content").css('background-color','#e21929');
	});
	$("#appf-work-button").click(function (){
		$("#appf-work-content").show();
		$("#gadc-work-content").hide();
		$("#vtec-work-content").hide();
		$("#work-profile-hero").slideUp();
		$("#main-content").css('background-color','#00afdb');
	});
});