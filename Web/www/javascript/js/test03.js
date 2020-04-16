/*
 	Object()를 사용해서 만드는 방법
 		
 		형식]
 			var 변수이름 = new Object();	// 객체생성
 			변수이름.객체속성 = 데이터;
 */

var people = new Object();
people.name = '최두용';
people.id = 'dDragon';
people.age = 33;
people.toStudy = function(subj){
	if(!subj){
		subj='집가고싶다';
	}
	return subj + ' 진짜';
}

document.write('<div class="w3-col m3"><p></p></div>');
document.write('<div class="w3-col m6">');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + people.name + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + people['id'] + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + people.age + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + people.toStudy('java') + '</h3>');
document.write('</div>');