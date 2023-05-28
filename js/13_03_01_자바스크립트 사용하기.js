// 클릭 시 빨간색으로 변경
var hi = document.querySelector('.box_01');
hi.onclick = function () {
    hi.style.color = "red";
}

// 알림창 만들기
alert("안녕하세요?");
// 확인창 만들기
var reply = confirm("정말 안녕하신가요?");
// 프롬포트 창에서 입력 받기
// (메시지, 기본값) 형식으로 but, 기본값은 없어도 됨
var name = prompt("그러면 이름을 입력해주세요.");
// 이름 받아서 화면에 표시
// name 에 변수값 저장
document.write("<b><big>" + name + "</big></b>님, 환영합니다!");
// 웹 페이지 대신에 콘솔 창에 표시
console.log(name + "님,환영합니다!");
