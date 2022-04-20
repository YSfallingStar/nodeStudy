"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const confirmPw = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
        confirmPw: confirmPw.value,
    };
    console.log(req);
    fetch("/register", {
        method: "POST", // post 요청 방식
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), // JSON.stringify는 문자열로 출력을 해줌
    })
    // 서버로부터 응답이오면 json메서드를 호출해서 응답이 다 받아지는 순간 promise 객체를 반환
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
};