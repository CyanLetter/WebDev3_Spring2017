$(document).ready(function(){

	$('.big-image').on('click', function(){
		$(this).addClass('loaded');
	});

	$('.menu-button').on('click', function(){
		$('nav').toggleClass('show');
	})

});