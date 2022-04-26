"use strict";
// log 정보, user 정보 임포트(불러오기)
const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
    // 로그인
    home: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },

    login: (req, res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    control_login: (req, res) => {
        logger.info(`GET /solo 304 "훈련통제 로그인 화면으로 이동"`);
        res.render("home/control-login");
    },

    register: (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    },

    // 환경설정
    preference: (req, res) => {
        logger.info(`GET /preference 304 "환경설정 화면으로 이동"`);
        res.render("preferences/preference");
    },

    interlocking: (req, res) => {
        logger.info(`GET /interlocking 304 "연동모드 전술 훈련 설정 화면으로 이동"`);
        res.render("preferences/interlocking");
    },

    solo: (req, res) => {
        logger.info(`GET /solo 304 "단독모드 전술 훈련 설정 화면으로 이동"`);
        res.render("preferences/solo");
    },
    // 관리
    user_mgt: (req, res) => {
        logger.info(`GET /user_mgt 304 "사용자 관리 화면으로 이동"`);
        res.render("management/user-mgt");
    },

    program_mgt: (req, res) => {
        logger.info(`GET /program_mgt 304 "과정 관리 화면으로 이동"`);
        res.render("management/program-mgt");
    },

    scenario_mgt: (req, res) => {
        logger.info(`GET /scenario_mgt 304 "시나리오 관리 화면으로 이동"`);
        res.render("management/scenario-mgt");
    },

    training_rating: (req, res) => {
        logger.info(`GET /training_rating 304 "시나리오 관리 화면으로 이동"`);
        res.render("management/training-rating");
    }
};

// user body에 요청 보내고 login함수, register함수 실행
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err
                ? 400
                : 200
        };

        log(response, url);
        return res
            .status(url.status)
            .json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err
                ? 400
                : 201
        };

        log(response, url);
        return res
            .status(url.status)
            .json(response);
    }
};

// 변수 외부로 보내기
module.exports = {
    output,
    process
};

// 응답 받고 log 터미널에 출력할 정보 설정
const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    }
};