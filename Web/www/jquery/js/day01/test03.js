$(document).ready(function(){
	$('div div').addClass('w3-button w3-col m2');
	
	$('.w3-purple').addClass('w3-card');
	$('.w3-pale-red').addClass('w3-hover-orange');
	
	$('.w3-button').click(function(){
		$(this).toggleClass('w3-padding-64');
//		$(this).addClass('w3-padding-64');
		var cl = $(this).attr('id');
		alert(cl);
	});
});