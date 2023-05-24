// [01]
function main_01() {
    // 익명함수 생성
    let sum = function (a, b) {
        return (a + b);
    }
    document.write("익명 함수<br>")
    document.write(sum(10, 20));
}

// [02]
function main_02() {
    let sum;
    (function (a, b) {
        sum = a + b;
    }(100, 200));
    document.write("<br>" + "즉시 실행 함수<br>");
    document.write(sum);
}