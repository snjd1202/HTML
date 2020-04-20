/*
		로그인 버튼이 클릭되면
		입력태그의 내용을 읽고
		아이디는 5글자이상 8글자 이하 그리고 영문자와 숫자로만 구성되어야 한다.
		비밀번호는 6글자이상 8글자이하이고
		영문 대소문자 하나씩 그리고 숫자하나씩 그리고 특수문자중 숫자패드의 특수문자 하나가 반드시 포함되어야 한다.
		
		만약 정규표현식에 통과되지 않는다면
		입력폼의 내용을 모두 지우고
		다시 입력받도록 하고
		통과되면 경고창으로 통과 메시지를 출력하게 하세요.
	*/
	
	function idck(id){
		var reg = /^[A-Za-z0-9]{6,8}$/;
		var ok = reg.test(id);
		return ok;
	}
	
	function pwck(pw){
		var reg = /^[a-zA-Z0-9!@#$%^&*-_=]*(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-=])$/;
		var ok = reg.test(pw);
		return ok;
	}
		
// 가
	document.getElementById('lbtn').onclick = function(){
		var id = document.getElementById('id').value;
		var pw = document.getElementById('pw').value;
		var idok = idck(id);
		var pwok = pwck(pw);
		alert(pwok);
		
		if(!idok){
			alert('이상한 아이디 입니다');
			document.getElementById('id').value = '';
			document.getElementById('id').focus();
			return;
		} else {
			document.getElementById('okid').innerText = id;
		}
		
		if(!pwok){
			alert('이상한 비밀번호 입니다');
			document.getElementById('pw').value = '';
			document.getElementById('pw').focus();
			return;
		} else{
			document.getElementById('okpw').innerText = pw;
		}
		
		var str = document.getElementById('d1').classList;
		alert(str.contains('dnone'));
		if(str[str.length - 1] == 'dnone'){
			document.getElementById('d1').classList.toggle('dnone');
		}
	}
	
	
	document.getElementById('cbtn').onclick = function(){
		document.getElementById('id').value = '';
		document.getElementById('pw').value = '';
	}