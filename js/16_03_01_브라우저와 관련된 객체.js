// 새 브라우저에서 창 열기
// 웹 브라우저에 팝업 창 표시하기
// 새로고침을 할 때 마다 팝업창이 표시됨
function browser_01() {
    // (경로, 창 이름, 창 옵션)
    window.open("", "", "width=500, height=400");
}

// 팝업 창을 한 번만 표시하기
// 창 이름에 이름을 지정해주면 된다
function browser_02() {
    window.open("", "pop", "width=500, height=500");
}

// 팝업 창 위치 지정하기
// 왼쪽에서 100px, 위에서 200px 떨어진 위치에서 팝업창이 뜨게 됨
function browser_03() {
    window.open("", "pop", "width=500, height=500, left=100, top=200");
}

// 팝업이 차단된 브라우저의 알림 창 표시하기
function browser_04() {
    let new_win = window.open("", "pop", "width=500, height=500, left=100, top=200");
    // 팝업이 차단되어 있으면 알림창 표시
    // 팝업이 차단되어 있을 때 window.open 은 null 을 반환함
    if (new_win == null) {
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.");
    }
    new_win.moveBy(100, 100);

    //버튼을 사용해 팝업 창 닫기
    <button onclick="javascript:window.close();">닫기</button>
}