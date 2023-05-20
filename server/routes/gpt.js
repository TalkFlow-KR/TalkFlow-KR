const express = require("express");
const controller_gpt = require('../controller/Cgpt')
const   router = express.Router();

// 3. 조회
router.get('/msg/:userid/:roomid',controller_gpt.msg); //msg 데이터 과거 대화 내용

// 5. GPT와 대화
router.post('/chat/:userid/:roomid',controller_gpt.runGPT35); // gpt와 대화
module.exports = router;