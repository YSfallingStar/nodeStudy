"use strict";
// userstorage 임포트
const UserStorage = require("./UserStorage");

// userstorage에서 불러온 db 데이터를 user 정보에 입력해서 로그인 회원가입 백엔드 구현
class User {
    constructor(body) {
        this.body = body;
    }
    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);

            if (user) {
                if (user.id === client.id && user.pw === client.pw) {
                    return {success: true};
                }
                return {success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return {success: false, msg: "존재하지 않는 아이디입니다."};
        } catch (err) {
            return {success: false, err};
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return {success: false, err};
        }

    }
}

module.exports = User;