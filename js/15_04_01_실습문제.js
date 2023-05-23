function result_01() {
    let sum = multi_01(parseInt(prompt("숫자를 입력해주세요.")), 0);
    // num_01 에는 n 값, num_02 에는 초기화값 0 을 입력
    document.write("모두 더한 값은 <b>" + sum);
}

function multi_01(num_01, num_02) {
    //num_01 은 입력받은 n(카운트)값, num_02 는 결과 값
    for (let i = 1; i <= num_01; i++) {
        num_02 += i;
    }
    return num_02;
}