"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
// 경로 설정
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/preference", ctrl.output.preference);
router.get("/interlocking", ctrl.output.interlocking);
router.get("/solo", ctrl.output.solo);
router.get("/control-login", ctrl.output.control_login);
router.get("/user-mgt", ctrl.output.user_mgt);
router.get("/program-mgt", ctrl.output.program_mgt);
router.get("/scenario-mgt", ctrl.output.scenario_mgt);
router.get("/training-rating", ctrl.output.training_rating);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;