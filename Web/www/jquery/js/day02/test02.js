$(document).ready(function(){
	$('#btn1').click(function(){
		$('#d1').append('<h3 class="w3-col w3-purple w3-padding mr0">Append Test');
		$('h3').click(rmv);
	});
	
	$('#btn2').click(function(){
		$('#d1').prepend('<h3 class="w3-col w3-orange w3-padding mr0">Prepend Test');
		$('h3').dblclick(rmv);
	});
	
	$('#btn3').click(function(){
		reClass();
	});
	
	function reClass(){
		$('h3').removeClass('w3-purple');
		$('h3').removeClass('w3-orange');
		$('h3').addClass('w3-lime');
	}
	
	function rmv(){
		$(this).remove();
	}
	
});