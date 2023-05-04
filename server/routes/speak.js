const express = require("express");
const controller = require("../controller/Cspeak");
const router = express.Router();

router.get("/", controller.main);

// 1. 회원가입
router.get('/signup',controller.signup)
router.post('/post_signup', controller.post_signup);

// 2. 로그인
router.get('/login',controller.login)
router.post('/post_login', controller.post_login);

//  3. /msg 데이터 과거 대화 내용 조회
router.get("/msg", controller.msg);

// 4. /room/:rommid 회화 채팅 방
router.post("/room/:userid", controller.room);

module.exports = router;
