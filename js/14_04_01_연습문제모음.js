// [01] if 문으로 3의 배수 확인하기
var num_01;
num_01 = parseInt(prompt("[01] 정수를 입력하시오."));

if (num_01 % 3 == 0) {
    document.write("<b>" + num_01 + "</b> 는(은) 3의 배수 입니다.")
}
else {
    document.write("<b>" + num_01 + "</b> 는(은) 3의 배수가 아닙니다.")
}

// [02] if 문으로 3의 배수 확인하기
var num_02;
num_02 = parseInt(prompt("[02] 정수를 입력하시오."));

// 입력 값이 null 값이 아니면,
if (num_02 !== null) {
    if (num_02 % 3 == 0) {
        document.write("<br><b>" + num_02 + "</b> 는(은) 3의 배수 입니다.")
    }
    else {
        document.write("<br><b>" + num_02 + "</b> 는(은) 3의 배수가 아닙니다.")
    }
}
else {
    document.write("<br>입력이 취소 되었습니다.");
}

// [03] 조건 연산자를 사용해 3의 배수 확인하기
var num_03;
num_03 = parseInt(prompt("[03] 정수를 입력하시오."));

if (num_03 !== null) {
    (num_03 % 3 == 0) ? document.write("<br><b>" + num_03 + "</b> 는(은) 3의 배수 입니다.") : document.write("<br><b>" + num_03 + "</b> 는(은) 3의 배수가 아닙니다.")
}

// [04] or 연산자를 사용해 조건 체크하기 & and 연산자, not 연산자도 추가로 사용
var num_04;
var num_05;
num_04 = parseInt(prompt("[04] 정수를 입력하시오._01"));
num_05 = parseInt(prompt("[04] 정수를 입력하시오._02"));

if (num_04 !== null && num_05 !== null) {
    if (num_04 < 10 || num_05 < 10) {
        document.write("<br>최소한 두 수 중 하나는 10 미만입니다.");
    }
    else {
        document.write("<br>둘 다 10 이상이네요!");
    }
}

document.write("<br>");
// [05] switch 문으로 조건 체크하기
var num_06;
num_06 = parseInt(prompt("관심 세션을 선택해 주세요. 1. 마케팅, 2. 개발, 3. 디자인"));

switch (num_06) {
    case 1: document.write("마케팅 세션은 201호 에서,,");
        break;
    case 2: document.write("개발 세션은 202호 에서,,");
        break;
    case 3: document.write("디자인 세션은 203호 에서,,");
        break;
    default: document.write("1,2,3 중에서 선택해주세요.");
}