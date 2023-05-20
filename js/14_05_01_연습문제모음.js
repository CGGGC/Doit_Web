function multi_01() {
    var num_01;
    var num_02;
    var count_01 = parseInt(prompt("구구단을 몇 단 까지 계산하시겠습니까?"));

    for (num_01 = 1; num_01 <= count_01; num_01++) {
        document.write("<div>");
        document.write("<br>");
        document.write("\t");
        for (num_02 = 1; num_02 <= 9; num_02++) {
            document.write(num_01 + "X" + num_02 + "=" + (num_01 * num_02));
            document.write("<br>");
        }
        document.write("</div>");
        if (count_01 == num_01)
            break;
    }

}

function fact_01() {
    var factorial = parseInt(prompt("숫자를 입력하세요."));
    var msg;
    if (factorial !== null) {
        var result_fact = 1;
        var count = 1;
        while (count <= factorial) {
            result_fact *= count;
            count++;
        }

        msg = factorial + "! = " + result_fact;
    }
    else {
        msg = "값을 입력하지 않았습니다.";
    }
    if (factorial !== 0) {
        document.write(msg); // 결과 표시
    }
    else {
        msg = "0! = 0";
        document.write(msg);
    }
}

function sum_01() {
    var i;
    var sum = 0;
    var count = parseInt(prompt("[03] 정수를 입력하세요."));

    for (i = 1; i <= count; i++) {
        if (i % 2 == 1) { // 홀수면 건너뛰도록.
            continue;
        }
        else {
            sum += i;
        }
    }
    document.write("1 + ... + " + count + " = " + sum);
}