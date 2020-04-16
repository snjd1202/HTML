/*
	생성자를 이용하는 방법
		
		형식 ]
			
			function 클래스이름(매개변수리스트){
				this.변수이름 = 데이터;
				this.변수이름 = 데이터;
				....
				this.함수이름 = function(매개변수){
				}
			}
			
		사용방법 ]
			
			var 변수이름 = new 클래스이름(데이터리스트);
*/

function People(name, id, age){
	this.name = name;
	this.id = id;
	this.age = age;
	this.title = job(name);
	this.toStudy = function(subj){
		if(!subj){
			subj = '손에 잡히는';
		}
		return subj + ' 과목을 공부하고 있습니다.';
	}
}
	var ppl1 = new People('최두용', 'dDragon', 33);
	ppl1.job = function(name){
		var str= '';
		if(name=='최두용'){
			str = '반장님';
		} else {
			str = '학우님';
		}
		return str;
}
	ppl1.title = ppl1.job();
	
	ppl1.toStudy = function(subj){
	return '그냥 쉬고있음';
}



document.write('<div>');
document.write('<div class="w3-col m3"><p></p></div>');
document.write('<div class="w3-col m6 w3-center">');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + ppl1.name + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + ppl1['id'] + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + ppl1.age + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + ppl1.title + '</h3>');
document.write('<h3 class="w3-blue w3-padding w3-card w3-margin">' + ppl1.toStudy('java') + '</h3>');
document.write('</div>');
document.write('</div>');


var ppl2 = new People('박기윤', 'pky', 30);

document.write('<div>');
document.write('<div class="w3-col m3"><p></p></div>');
document.write('<div class="w3-col m6 w3-center">');
document.write('<h3 class="w3-orange w3-padding w3-card w3-margin">' + ppl2.name + '</h3>');
document.write('<h3 class="w3-orange w3-padding w3-card w3-margin">' + ppl2['id'] + '</h3>');
document.write('<h3 class="w3-oragne w3-padding w3-card w3-margin">' + ppl2.age + '</h3>');
//document.write('<h3 class="w3-oragne w3-padding w3-card w3-margin">' + ppl2.title + '</h3>');
document.write('<h3 class="w3-orange w3-padding w3-card w3-margin">' + ppl2.toStudy('java') + '</h3>');
document.write('</div>');
document.write('</div>');
