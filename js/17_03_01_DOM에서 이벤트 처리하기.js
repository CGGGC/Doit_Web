// 이미지 클릭하면 알림창 표시하기
function alrim() {
    let cup = document.querySelector("#cup");
    cup.onclick = alert("이미지를 클릭했습니다.");
}

// 이미지를 클릭하면 함수 실행하기
function change_pic_01() {
    let cup = document.querySelector("#cup");
    // 미리 정의되어 있는 함수를 호출할 때 () 없어도 된다
    // 다른 사진으로 바뀔 함수 호출
    cup.onclick = change_pic_02();
    // 클릭한 위치 알아내는 함수 호출
    cup.onclick = img_click_01(event);
    // 이벤트가 발생한 대상에 this 예약어로 접근
    cup.onclick = img_this(event);
}

// 다른 사진으로 바뀔 함수
function change_pic_02() {
    let cup = document.querySelector("#cup");
    //cup.src = "images/cup-2.png";
    console.log("1");
    alert("이미지를 바꾸었습니다.");
}

// 이미지에서 클릭한 위치 알아내기
function img_click_01() {
    let img = document.querySelector("#cup");
    alert("이벤트 유형: " + event.type + ", 이벤트 발생 위치: " + event.pageX + "," + event.pageY);
}

// this 예약어를 사용하여 이벤트가 발생한 대상에 접근
function img_this() {
    let img = document.querySelector("#cup");
    alert("클릭한 이미지 파일: " + this.src + "," + this.id);
}

// addEventListener() 메서드 사용하기
// 요소.addEventListener(이벤트, 함수, 캡처여부);
function EventListener_01() {
    let box = document.querySelector("#box_01");
    box.addEventListener("mouseover", mouse_01);
    box.addEventListener("mouseout", mouse_02);
}

// 추가로 css 속성에 접근하여 배경색을 바꿈
function mouse_01() {
    alert("마우스 포인터가 박스 위에 위치하고 있습니다.");
    // 배경색 바꿀 때 style.backgroundColor
    // background-color 가 아님
    document.getElementById("box_01").style.backgroundColor = "blue";
}
function mouse_02() {
    alert("마우스 포인터가 박스에 위치하고 있지 않습니다.");
    document.getElementById("box_01").style.backgroundColor = "rgb(123, 123, 202)";
}