function show_Detail() { // 상세 설명을 화면에 표시하는 함수
    document.querySelector('#desc').style.display = "block";
    // block 은 속성값 내부 요소를 나타나게함.
    document.querySelector('#open').style.display = "none";
    // none 은 속성값 내부 요소를 숨김.
    // 위 코드는 '상세 설명 보기' 버튼을 눌렀을 때 그 버튼을 숨겨주는 코드
}

function hide_Detail() { // 상세 설명을 화면에서 감추는 함수
    document.querySelector('#desc').style.display = "none";
    document.querySelector('#open').style.display = "block";
}