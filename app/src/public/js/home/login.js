"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), // JSON.stringify는 문자열로 출력을 해줌
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
};