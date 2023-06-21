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