const express = require("express");
const controller = require("../controller/Cspeak");
const controller_gpt = require('../controller/Cgpt')
const router = express.Router();

router.get("/", controller.main);

// 1. 회원가입
router.post('/post-signup', controller.post_signup); //

// 2. 로그인
router.post('/post-login', controller.post_login);

// 3. /msg 데이터 과거 대화 내용 조회
router.get("/msg/:userid/:roomid", controller.msg);

// 4. /room/:userid 로그인 한 유저의 방 내보내기 및 생성
router.get("/allroom/:userid",controller.allRoom)
router.post("/room/:userid", controller.room);

// 5. /stt
router.post('/runGpt/:userid/:roomid',controller_gpt.runGPT35);
// router.get('/test/:userid/:roomid',controller_gpt.test);

// 6. /kakao
router.post("/kakao", controller.kakao2);


module.exports = router;
