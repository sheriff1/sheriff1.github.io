$( document ).ready(function() {
	$("#mint-work-button").click(function (){
		$("#mint-work-content").show();
		$("#fitb-work-content").hide();
		$("#main-content").css('background-color','#21D27E');

		$("#mint-work-button .work-button-image").css('filter','opacity(1)');
		$("#mint-work-button .work-button-label").css('color','inherit');

		$("#fitb-work-button .work-button-image").css('filter','opacity(15%)');
		$("#fitb-work-button .work-button-label").css('color','#e6e6e6');

		$("#mint-work-button").addClass('work-navigation-selected');
		$("#fitb-work-button").removeClass('work-navigation-selected');
	});
	$("#fitb-work-button").click(function (){
		$("#fitb-work-content").show();
		$("#mint-work-content").hide();
		$("#main-content").css('background-color','#141417');

		$("#fitb-work-button .work-button-image").css('filter','opacity(1)');
		$("#fitb-work-button .work-button-label").css('color','inherit');

		$("#mint-work-button .work-button-image").css('filter','opacity(15%)');
		$("#mint-work-button .work-button-label").css('color','#e6e6e6');

		$("#fitb-work-button").addClass('work-navigation-selected');
		$("#mint-work-button").removeClass('work-navigation-selected');
	});
});