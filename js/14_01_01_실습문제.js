var cur_year_01;
var birth_year_01;
var age;


cur_year_01 = prompt("현재 년도를 입력해주세요.");
birth_year_01 = prompt("태어난 년도를 입력해주세요.");
age = cur_year_01 - birth_year_01 + 1;

document.write("현재 년도는 <b>" + cur_year_01 + "년</b> 이며,<br>")
document.write("당신의 현재 나이는 <b>" + age + "세</b> 입니다.")