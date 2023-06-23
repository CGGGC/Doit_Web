// Array 객체 인스턴스 만들기 - 초깃값이 없는 경우
function Arr_01() {
    let arr_01_01 = new Array(); // 배열의 크기를 지정하지 않음
    let arr_01_02 = new Array(4); // 배열의 크기를 지정함
}

// Array 객체 인스턴스 만들기 - 초깃값이 있는 경우
function Arr_02() {
    let arr_02_01 = ["one", "two", "three", "four"]; // 배열 선언
    let arr_02_02 = Array("one", "two", "three", "four"); // Array 객체를 사용한 배열 선언
}

// 배열을 만들고 요소 표시하기
function Arr_03() {
    let arr_03 = ["one", "two", "three", "four"];

    for (i = 0; i < arr_03.length; i++) {
        document.write("<p>" + arr_03[i] + "</p>");
        console.log(arr_03[i]);
    }
}

//  변수명.concat() 메서드 사용하여, 배열 2개를 합쳐서 새로운 배열 만들기
function Arr_04() {
    let arr_nums = [1, 2, 3];
    let arr_chars = ["a", "b", "c", "d"];

    // arr_nums 먼저 배열, 이후 arr_chars 배열
    let nums_chars = arr_nums.concat(arr_chars);
    // arr_chars 먼저 배열, 이후 arr_nums 배열
    let chars_nums = arr_chars.concat(arr_nums);

    document.write("숫자 + 문자 = " + nums_chars + "<p></p>" + "문자 + 숫자 = " + chars_nums);
}

// 변수명.join() 메서드 사용하여, 배열 안의 요소 합치기
function Arr_05() {
    let arr_nums = [1, 2, 3];
    let arr_chars = ["a", "b", "c", "d"];

    // arr_nums 구분자 (,) 지정
    let string_01 = arr_nums.join();
    // arr_chars 구분자 (/) 지정
    let string_02 = arr_chars.join('/');

    document.write("구분자 없이 (기본값 (',')) " + string_01);
    document.write("<p></p>" + "구분자 '/' 사용하여 " + string_02);
}

// push() & unshift() 메서드를 사용하여 배열에 새로운 요소 추가하기
// 단, 기존 배열의 크기가 바뀜
function Arr_06() {
    let arr_nums = [1, 2, 3];
    document.write("기존 배열: ", arr_nums);
    document.write("<br>")

    // arr_nums 배열 맨 끝에 push()
    let ret_01 = arr_nums.push(4, 5);
    document.write("lenght: ", ret_01 + " | 배열: ", arr_nums);
    document.write("<br>")

    // arr_nums 배열 맨 앞에 unshift()
    let ret_02 = arr_nums.unshift(0);
    document.write("lenght: ", ret_02, " | 배열: ", arr_nums);
}

// pop() & shift() 메서드를 사용하여 배열에서 요소 꺼내기
// 단, 기존 배열의 크기가 바뀜
function Arr_07() {
    let arr_chars = ["a", "b", "c", "d"];
    document.write("기존 배열: ", arr_chars);
    document.write("<br>")

    // arr_chars 배열 맨 끝에 pop()
    let popped_01 = arr_chars.pop();
    document.write("꺼낸 요소: ", popped_01, " | 배열: ", arr_chars);
    document.write("<br>")

    // arr_chars 배열 맨 앞에 shift()
    let popped_02 = arr_chars.shift();
    document.write("꺼낸 요소: ", popped_02, " | 배열: ", arr_chars);
}

// 사용자가 원하는 위치에 요소를 추가&삭제 splice() 메서드
// [1] splice() 메서드의 인수가 1개인 경우 요소 삭제
function Arr_08() {
    let arr_nums = [1, 2, 3, 4, 5];
    document.write("기존 배열: ", arr_nums);
    document.write("<br>")

    // 3번째 요소부터 모두 삭제
    // arR_nums 의 배열은 삭제된 것으로 변경
    let new_numbers = arr_nums.splice(2);
    document.write("반환된 배열: " + new_numbers + "<br>");
}

// [2] splice() 메서드의 인수가 2개인 경우 요소 삭제
function Arr_09() {
    let arr_string = ["html", "css", "web", "jquery"];
    document.write("기존 배열: ", arr_string);
    document.write("<br>")

    // 3번째에 있는 요소부터 1개를 삭제 -> (2,1)
    let new_string = arr_string.splice(2, 1);
    document.write("삭제한 배열: " + new_string + "<br>");
    document.write("변경된 기존 배열: " + arr_string + "<br>");
}

// [3] splice() 메서드의 인수가 3개인 경우 요소 삭제 추가
function Arr_10() {
    let arr_string = ["html", "css", "web", "jquery"];
    document.write("기존 배열: ", arr_string);
    document.write("<br>")

    // 인덱스값이 2 인 요소 1개를 삭제하고 새로운 요소 "..." 을 추가 -> (2,1,...)
    let new_string = arr_string.splice(2, 1, "js");
    document.write("삭제한 배열: " + new_string + "<br>");
    document.write("삭제 후 추가된 기존 배열: " + arr_string + "<br>");
}

// 기존 배열을 바꾸지 않고 요소를 꺼내는 slice() 메서드
// slice() 메서드의 인수가 1개인 경우 요소 꺼내기
// splice() 메서드와 다른 점은 기존 배열이 바뀌지 않는다는 점
function Arr_11() {
    let arr_colors = ["red", "green", "blue", "white", "black"];
    document.write("기존 배열: ", arr_colors);
    document.write("<br>")

    // 인덱스값이 2 인 요소부터 마지막 요소까지 꺼냄
    let arr_colors2 = arr_colors.slice(2);
    document.write("꺼낸 요소: " + arr_colors2 + "<br>");
}

// slice() 메서드의 인수가 2개인 경우 요소 꺼내기
function Arr_12() {
    let arr_colors = ["red", "green", "blue", "white", "black"];
    document.write("기존 배열: ", arr_colors);
    document.write("<br>")

    // 인덱스 값이 2 부터 3(4-1) 요소까지 꺼내기
    let arr_colors3 = arr_colors.slice(2, 4);
    document.write("꺼낸 요소: " + arr_colors3 + "<br>");
}
