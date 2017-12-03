$( document ).ready(function() {

    $('.match-height').matchHeight();

	$("#vtec-work-button").click(function (){
		$("#vtec-work-content").show();
		$("#gadc-work-content").hide();
		$("#appf-work-content").hide();
		$("#work-profile-hero").slideUp('slow');

		$("#vtec-work-button").css('background-color',"#ffffff");
		$("#vtec-work-button").css('border-color',"#ffffff");
		$("#vtec-work-button .work-button-image").css('filter','opacity(1)');
		$("#vtec-work-button .work-button-label").css('color','inherit');    

		$("#appf-work-button").css('background-color','#F5F7FA');
		$("#appf-work-button").css('border-color','#F5F7FA');
		$("#appf-work-button .work-button-image").css('filter','opacity(15%)');
		$("#appf-work-button .work-button-label").css('color','#e6e6e6');
		$("#gadc-work-button").css('background-color','#F5F7FA');
		$("#gadc-work-button").css('border-color','#F5F7FA');
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

		$("#gadc-work-button").css('background-color',"#ffffff");
		$("#gadc-work-button").css('border-color',"#ffffff");
		$("#gadc-work-button .work-button-image").css('filter','opacity(1)');
		$("#gadc-work-button .work-button-label").css('color','inherit');

		$("#vtec-work-button").css('background-color','#F5F7FA');
		$("#vtec-work-button .work-button-image").css('filter','opacity(15%)');
		$("#vtec-work-button .work-button-label").css('color','#e6e6e6');
		$("#vtec-work-button").css('border-color','#F5F7FA');
		$("#appf-work-button").css('background-color','#F5F7FA');
		$("#appf-work-button .work-button-image").css('filter','opacity(15%)');
		$("#appf-work-button .work-button-label").css('color','#e6e6e6');
		$("#appf-work-button").css('border-color','#F5F7FA');

		$("#gadc-work-button").addClass('work-navigation-selected');
		$("#appf-work-button").removeClass('work-navigation-selected');
		$("#vtec-work-button").removeClass('work-navigation-selected');
	});
	$("#appf-work-button").click(function (){
		$("#appf-work-content").show();
		$("#gadc-work-content").hide();
		$("#vtec-work-content").hide();
		$("#work-profile-hero").slideUp('slow');

		$("#appf-work-button").css('background-color',"#ffffff");
		$("#appf-work-button").css('border-color',"#ffffff");
		$("#appf-work-button .work-button-image").css('filter','opacity(1)');
		$("#appf-work-button .work-button-label").css('color','inherit');

		$("#vtec-work-button").css('background-color','#F5F7FA');
		$("#vtec-work-button .work-button-image").css('filter','opacity(15%)');
		$("#vtec-work-button .work-button-label").css('color','#e6e6e6');
		$("#vtec-work-button").css('border-color','#F5F7FA');
		$("#gadc-work-button").css('background-color','#F5F7FA');
		$("#gadc-work-button .work-button-image").css('filter','opacity(15%)');
		$("#gadc-work-button .work-button-label").css('color','#e6e6e6');
		$("#gadc-work-button").css('border-color','#F5F7FA');

		$("#appf-work-button").addClass('work-navigation-selected');
		$("#gadc-work-button").removeClass('work-navigation-selected');
		$("#vtec-work-button").removeClass('work-navigation-selected');
	});
});