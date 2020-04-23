$(document).ready(function(){
	$('#id').blur(function(){
		// 할일
		// 인풋태그의 내용 읽어오고
		var sid = $('#id').val();
		// 읽은 내용  h3태그에 넣어주고
		$('#txt').text(sid);
		// 상위태그(#dl) 보이게 하고
		$('#dl').stop().slideToggle();
	});
	
	$('#pw, #repw').keyup(function(){
		// 할일
		// 1. 데이터 읽고 변수에 담는다.
		var spw = $('#pw').val();
		var repw = $('#repw').val();
		// 2. 데이터를 비교한다.
		if(spw == repw){
			// 3. 출력한다.
			$('#pwmsg').text('*** 비밀번호가 일치합니다. ***');
			// 태그의 스타일 속성을 변경또는 읽는 함수 css()
			$('#pwmsg').css('color', 'blue');
//			$('#pwmsg').addClass('w3-blue');
			$('.repw').css('display','none');
			alert($('#repw').val());
		} else{
			$('#pwmsg').text('*** 비밀번호가 일치하지 않습니다. ***');
//			$('#pwmsg').addClass('w3-red');
			$('#pwmsg').css('color', 'red');
			$('.repw').css('display', ' ');
		}
	});
	
	// 문제 ] 버튼에 마우스가 올려지면 
	// 버튼의 색상을 red -> orange , blue --> aqua 변경시키는 이벤트를 추가하세요.
	// 단, w3.css 클래스는 사용하지 않는것으로 한다.
	$('#btn1, #btn2').mouseenter(function(){
		var sid = $(this).attr('id');
		if(sid == 'btn1'){
			$(this).removeClass('w3-button');
			if($(this).hasClass('w3-red')){
				$(this).removeClass('w3-red');
			} else {
				$(this).removeClass('w3-purple');
			}
			$(this).css('background-color', 'orange');
		} else {
			$(this).removeClass('w3-button');
			if($(this).hasClass('w3-blue')){
				$(this).removeClass('w3-blue');
			} else {
				$(this).removeClass('w3-indigo');
			}
			$(this).css('background-color', 'aqua');
		}
	});
	
	$('#btn1, #btn2').mouseleave(function(){
		$(this).addClass('w3-button');
		var sid = $(this).attr('id');
		if(sid == 'btn1'){
			$(this).addClass('w3-purple');
		} else {
			$(this).addClass('w3-indigo');
		}
	});
	
	// btn1 을 클릭하면 
	// 아이디가 id인 태그에 
	// w3-input 클래스가 적용되어있는지 확인하자.
	$('#btn1').click(function(){
		var bool = $('#id').hasClass('w3-input');
		alert('w3-input : ' + bool);
	});
	
	$('#btn2').click(function(){
//		location.href = 'day02.txt';	// 자바스크립트 처리 구문
//		$(location).attr('href','day02.txt');	// jquery 처리 구문
		
		// 문제 ]
		// 이 버튼이 클릭되면 아이디와 비밀번호는 result.html페이지에 출력되게 하세요.
		
		// 데이터 읽고
		var sid=$('#id').val();
		var spw=$('#pw').val();
		// 데이터 채워주고
		$('#fid').val(sid);
		$('#fpw').val(spw);
		// 폼태그 전송하고
		$('#frm').submit();
		
		
	});
});
















