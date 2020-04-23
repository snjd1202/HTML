$(document).ready(function(){
	$('.box').on({
		'mouseover':function(){
			$(this).removeClass('w3-indigo');
			$(this).css({'background-color':'orange',
							'box-shadow':'3px 3px 10px red'
						});
		},
		'mouseout':function(){
			$(this).css({'background-color':'',
							'box-shadow':''
						});
			$(this).addClass('w3-indigo');
		},
		'click': function(){
			console.log('*** div tag click ***');
		}
	});
});