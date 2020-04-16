// 객체 만들기
/*
 	변수를 이용해서 객체 만드는 법
 	
 		형식]
 			var 변수이름 ={
 				변수이름 : 데이터;
 				변수이름 : 데이터;
 				...,
 				함수이름: function(매개변수){
 				함수내용
 			}
 		};
 		
 		객체 속성 접근방법
 		
 	==>
 		비동기통신 처리시 ajax 객체를 만드는 경우
 		$.ajax({
 			url: "",
 			type: "",
 			dataType: "",
 			data: {
 			},
 			success: function(obj){
 			},
 			error: function(){
 			}
 			});
 	
*/

var obj = {
		name: "최두용",
		id: "dDragon",
		age: 44,
		toStudy: function(sub){
			if(!sub){
				sub = '코딩';
			}
			return (sub + ' 과목을 공부중입니다.');
		}
}

obj.job = '반장님';
alert(obj.name + ' - ' + obj.job);

document.write('이  름 : ' + obj.name + '<br>');
document.write('아이디 : ' + obj['id'] + '<br>');
document.write('나  이 : ' + obj['age'] + '<br>');
document.write('공  부 : ' + obj.toStudy());