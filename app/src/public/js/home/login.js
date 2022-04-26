"use strict";
// dom 사용해서 html id 불러오기
const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#button");

// click 이벤트
loginBtn.addEventListener("click", login);

// login 함수 설정
function login() {
    if (!id.value) 
        return alert("아이디를 입력해주세요.");
    if (!pw.value) 
        return alert("비밀번호를 입력해주세요.");
    const req = {
        id: id.value,
        pw: pw.value
    };
    // fetch로 응답 객체 정보 받고 json 형태로 출력
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), // JSON.stringify는 문자열로 출력을 해줌
    })
    // promise를 반환하고 두 개의 콜백 함수를 인수로 받기
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                if (res.err) 
                    return alert(res.err);
                alert(res.msg);
            }
        })
        // catch로 err 잡기
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
};