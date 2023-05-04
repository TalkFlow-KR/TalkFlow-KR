const express = require("express");
const controller = require("../controller/Cspeak");
const router = express.Router();

router.get("/", controller.main);

// 1. 회원가입
router.post('/signup', controller.signup);

// 2. 로그인
router.post('/login', controller.login);

//  3. /msg 데이터 과거 대화 내용 조회
router.get("/msg", controller.msg);

// 4. /room/:rommid 회화 채팅 방
router.post("/room/:userid", controller.room);

module.exports = router;
