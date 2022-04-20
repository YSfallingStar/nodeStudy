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
}

module.exports = UserStorage;