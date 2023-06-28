// 링크를 클릭하면 텍스트 표시하기
function addP() {
    // p (부모노드) 생성
    let new_p = document.createElement("p");
    // 자식노드 (text) 생성
    let text_node = document.createTextNode("DOM은 document object model 의 줄임말 입니다.");
    // 부모노드와 자식노드 연결
    new_p.appendChild(text_node);
    // 기존 div 노드에 new_p 연결
    document.getElementById("info").appendChild(new_p);
    console.log("link");

    let new_img = document.createElement("img");
    let src_node = document.createAttribute("src");
    let alt_node = document.createAttribute("alt");
    src_node.value = "C:\Users\CKIRUser\Downloads\IMG_3061.jpg";
    alt_node.value = "돔 트리 예제 이미지";
    new_img.appendChild(src_node);
    new_img.appendChild(alt_node);

    document.getElementById("info").appendChild(new_img);
}