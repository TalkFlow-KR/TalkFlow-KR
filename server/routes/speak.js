const express = require("express");
const controller = require("../controller/Cspeak");
const controller_gpt = require('../controller/Cgpt')
const router = express.Router();

router.get("/", controller.main);

router.get('/test',controller.tmp)
// 1. 회원가입
router.get('/signup',controller.signup)
router.post('/post_signup', controller.post_signup);

// 2. 로그인
router.get('/login',controller.login)
router.post('/post_login', controller.post_login);

//  3. /msg 데이터 과거 대화 내용 조회
router.get("/msg/:roomid", controller.msg);

// 4. /room/:rommid 회화 채팅 방
router.post("/room/:userid", controller.room);

// 5. /stt 음성을 텍스트로 출력.
router.get("/sst", controller.sst);


// 6. gpt 대화
router.post('/runGpt/:roomid',controller_gpt.runGPT35)

// 6. /kakao
router.get("/kakao", controller.kakao);


module.exports = router;
