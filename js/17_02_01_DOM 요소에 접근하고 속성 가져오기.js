// [1] id 선택자로 접근하는 메서드
// getElementById()
// [2] class 선택자로 접근하는 메서드
// getElementsByClassName()
// [3] 태그 이름으로 접근하는 메서드
// getElementsByTagName()
// [4] 다양한 방법으로 접근하는 메서드 (반환값 개수에다라 all 구분)
// querySelector() & querySelectorAll()
// [5] 속성을 가져오거나 수정하는 메서드
// getAttribute(), setAttribute()
// get 은 가져오고 set 은 속성값 변경

// innerText, innerHTML 프로퍼티 사용하기
// id 선택자로 접근하는 메서드 사용
function inntext() {
    let now = new Date();
    document.getElementById("current").innerText = now;
}

function innhtml() {
    let now = new Date();
    document.getElementById("current").innerHTML = ("<em>" + now + "</em>");
}

// 이미지 속성 가져오기
function display_src() {
    // id="cup" 인 요소에 접근하기
    let cup = document.querySelector("#cup");
    // 가져온 cup 속성을 알림 창에 표시
    alert("이미지 소스: " + cup.getAttribute("src"));
}