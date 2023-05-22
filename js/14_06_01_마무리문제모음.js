function multi_01() {
    var i;

    i = parseInt(prompt("[01] 숫자를 입력하시오."));

    if (i !== null) {
        if (i % 4 == 0) {
            document.write(i + " 는(은) 4의 배수입니다.");
        }
        else {
            document.write(i + " 는(은) 4의 배수가 아닙니다.");
        }
    }
}

function multi_02() {
    var i;
    var j;
    var count = 0;

    i = parseInt(prompt("[02] 몇 까지 3의 배수를 찾을까요?"));

    if (i !== null) {
        for (j = 1; j <= i; j++) {
            if (j % 3 == 0) {
                document.write(j + ", ");
                count++;
            }
        }
        document.write("<br>");
        document.write("50까지 3의 배수의 개수 : " + count);
    }
}