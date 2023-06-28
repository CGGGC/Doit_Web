function click_img() {
    // 이미지의 요소를 모두 가져옴
    // querySelectorAll(".pic")도 가능
    let img = document.getElementsByClassName("get_img");
    // 라이트박스 영역의 요소를 가져옴
    // querySelector("#lightbox")도 가능
    let lightbox = document.getElementById("lightbox");
    // 라이트박스 이미지 요소를 가져옴
    let lightbox_img = document.getElementById("lightbox_img");

    console.log("1");
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", showLightbox);
    }
}

function showLightbox() {
    // 이미지의 요소를 모두 가져옴
    //let img = document.getElementsByClassName("get_img");
    let img_2 = document.querySelectorAll(".get_img");
    // 라이트박스 영역의 요소를 가져옴
    let lightbox = document.getElementById("lightbox");
    // 라이트박스 이미지 요소를 가져옴
    let lightbox_img = document.getElementById("lightbox_img");

    // 섬네일 이미지의 속성값을 가져옴
    //bigLocation = this.data-src;
    //let bigLocation = this.getAttribute("date-src");
    // 라이트 박스의 이미지 경로 수정
    let bigLocation_2 = this.getAttribute("src");
    lightbox_img.setAttribute("src", bigLocation_2);
    // 라이트 박스 이미지를 화면에 표시
    console.log(lightbox_img);
    lightbox.style.display = "block";

    lightbox.onclick = function () {
        console.log("none");
        lightbox.style.display = "none";
    }
}
