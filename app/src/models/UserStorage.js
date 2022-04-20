"use strict";

class UserStorage{
    static #users = {
        id: ["jys", "정개발", "정팀장"],
        pw: ["1234", "1234", "1234"],
        name: ["유성", "정개발", "정팀장"],
    };
 
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            console.log(newUsers, field);
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   // [id, pw, name] 여러 배열로 가져옴
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;