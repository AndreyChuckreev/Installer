$(document).ready(function(){
	$("#menu").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('html,body').animate({scrollTop: top -15}, 860);
	});

});