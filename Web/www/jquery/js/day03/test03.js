$(document).ready(function(){
	function f01(){
		$('#box').animate({'left':'+=250px', 'top':'+=500px'}, 1000);
		$('#box1').animate({'opacity':'0'}, 2000);
		$('#box').animate({'left':'+=250px', 'top':'-=500px'}, 1000);
		$('#box1').animate({'opacity':'1'}, 1000);
		$('#box').animate({'left':'-=500px'}, 1000);
	}
	
	var int = setInterval(f01, 0);
	
});