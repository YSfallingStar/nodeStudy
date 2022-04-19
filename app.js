"use strict";

// 모듈
// express 사용하여 서버 열기
const express = require("express");
const app = express();

// 라우팅 설정
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;


















// // http로 서버 띄우기
// // express를 사용하는 이유
// // http는 코드가 지저분해 진다.
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
//     if(req.url === '/') {
//         res.end("여기는 루트 입니다.");
//     } else if(req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });