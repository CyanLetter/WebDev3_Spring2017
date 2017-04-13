$(document).ready(function(){

	$(".day-group").on("click", function(){

		$(".day-group").removeClass("show");
		$(this).addClass("show");
		$(".main-weather-info").removeClass("show");
		$(".main-weather-info").eq( $(this).index(".day-group") ).addClass("show");

		$('body').removeClass();
		$('body').addClass($(this).data('weather'));
	});

});