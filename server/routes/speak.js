const express = require("express");
const controller = require("../controller/Cspeak");
const router = express.Router();

// 1. 회원가입
router.post('/post-signup', controller.post_signup); // 회원가입
router.post('/signup/checkemail',controller.checkEmail) // 이메일 중복 체크

// 2. 로그인
router.post('/post-login', controller.post_login); //로그인

// 4. /room/:userid
router.get("/room/all/:userid",controller.allRoom) // 한 유저의 모든 방번호 가져오기
router.post("/room/make/:userid", controller.room); // 한 유저가 방 생성 (make 말고 다른 단어로)

// 6. /kakao
router.post("/kakao", controller.kakao2); // 카카오정보(id,이름) 저장


module.exports = router;
