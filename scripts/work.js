$( document ).ready(function() {
	$("#vtec-work-button").click(function (){
		$("#vtec-work-content").show().css('display', 'flex');
		$("#gadc-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").hide();
	});
	$("#gadc-work-button").click(function (){
		$("#gadc-work-content").show().css('display', 'flex');
		$("#vtec-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").hide();
	});
	$("#appf-work-button").click(function (){
		$("#appf-work-content").show().css('display', 'flex');
		$("#gadc-work-content").hide();
		$("#vtec-work-content").hide();
		$("#work-profile-hero").hide();
	});
});