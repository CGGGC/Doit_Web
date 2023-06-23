// 날짜를 계산해주는 프로그램
function date_01() {
    // 오늘 날짜를 객체로 지정
    let now_day = new Date("2023-06-23");
    // 시작 날짜를 객체로 지정
    let first_day = new Date("2023-06-10");


    // 오늘까지 지난 시간(밀리초)
    let to_now_day = now_day.getTime();
    // 첫날까지 지난 시간(밀리초)
    let to_first_day = first_day.getTime();
    // 첫날부터 오늘까지 지난 시간(밀리초)
    let passed_time = to_now_day - to_first_day;

    // 밀리초를 일수로 계산하고 반올림(Math.round)
    passed_time = Math.round(passed_time/(1000*60*60*24));

    document.write(passed_time);
}