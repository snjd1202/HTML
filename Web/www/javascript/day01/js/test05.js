var sty = '';

// 구구단 문자열을 만들고
for(var dan=2; dan <10; dan++){
	str += '<div class="w3-col m3 w3-margin w3-card">' + 
	'<h3 class="w3-col w3-blue w3-text-white w3-center mt0" id="dan">-' + dan +' 단-</h3>' +
	'<div class="w3-col w3-white w3-center w3-padding" id="gop">';
	for(var i =0; i < 9; i++){
		str += '<h4>' + dan + ' x ' + (i + 1) + ' = ' + (dan * (i+1)) + '</h4>';
	}
	str += '</div>' +
	'</div>';
}
/*
// 아이디가 dan인 태그에 데이터 채워넣기
document.getElementById('dan').innerHTML = '- ' + dan + ' 단 -';
// 아이디가 gop인 태그에
document.getElementById('gop').innerHTML = str ;
*/
document.getElementById('gugu').innerHTML =str;