{
    function new_register() {
        // 새로운 li 요소 노드를 추가
        let new_item = document.createElement("li");
        //let new_item_2 = document.createElement("li");
        
        let subject = document.querySelectorAll(".subject")
        //let subject_2 = document.getElementsByClassName("subject");
        // subject_2 가 input 시 적은 text 를 가져오면서 new_text 노드에 그 값이 저장됨
        
        let new_text = document.createTextNode(subject[0].value);
        //let new_text_2 = document.createTextNode(subject_2.value);
        
        new_item.appendChild(new_text);
        //new_item_2.appendChild(new_text_2);
        
        console.log(subject);
        console.log(new_item);
        //console.log(subject, subject_2);
        //console.log(new_item, new_item_2);

        // 리스트 박스의 요소를 가져옴
        let list = document.querySelectorAll(".study_list");
        // 새로 만든 요소 노드를 부모 노드에 추가
        list.appendChild(new_item);
        // 다음 입력을 위해 텍스트 필드 비우기
        subject.value="";
    }
}