$(document).ready(function(){
	// jquery의 기본 문법은 $(선택자).함수;
	$('#d1-2').parent().addClass('w3-indigo');
	
	$('#d1 span').parent().addClass('w3-sand');
//	$('#d1').children().addClass('w3-sand');
	
	// 아이디가 s3인 태그의 모든 형제태그에 w3-col w3-padding w3-border 클래스를 주세요.
	$('#s3').siblings().addClass('w3-col w3-padding w3-border w3-margin-top');
	
	// eq() : 선택된 요소들의 리스트에서 인덱스에 해당하는 요소만 선택하는 방법
	$('#s3').siblings().eq(0).removeClass('w3-margin-top');
	$('#s3').siblings().eq(1).addClass('w3-pink');
	
//	$('#s3').prev().addClass('w3-text-indigo');
	$('#s3').prevAll().addClass('w3-text-indigo');

	// 문제 ] 아이디가 d2인 태그의 바로 직후 형제태그에 크기를 100px, 100px 로 만들고
	//			배경색을 purple로 변경하세요
	
	$('#d2').next().removeClass('w3-blue');
	$('#d2').next().css({'width' : '100px', 'height':'100px', 'background-color':'purple'});
	
//		 문제 2] 아이디가 d5인 태그에 span 태그를 추가하고, 다시 div태그를 추가하고
//				두 태그의 100px, 100px 하고 배경색은 orange로 변경하세요.
//				단, 태그를 추가할 때 먼저 추가한 태그가 맨 마지막에 위치하도록 하세요.
	$('#d5').prepend('<span>abc</span>');
	$('#d5').prepend('<div>abc</div>');
	$('#d5').children().css({'width':'100px','height':'100px','display':'inline-block','margin':'10px','background-color':'orange'});
//	$('#d5 > *').css({'width':'100px','height':'100px','display':'inline-block','margin':'10px','background-color':'orange'});
	
	// 
	$('#d5').prevUntil('#d1').removeClass('w3-border');
	$('#d5').prevUntil('#d1').css('border', '10px solid tomato');
	
	$('.mxw').children().last().css('border', '2px solid black');
	$('.mxw > *:last').last().css('border', '2px solid DodgerBlue');
	$('#d1>*:even').removeClass('w3-sand');
	$('#d1>*:even').css('blackground-color', 'SlateBlue');
	
	
	$('.mxw>*').removeClass('w3-border');
	$('.mxw>*:odd').css('border','10px dotted tomato');
	$('.mxw>*:even').css('border','10px dotted black');
});