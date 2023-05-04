const models = require("../models");

exports.main = (req, res) => {
  res.send("hi");
};

// 1. 회원가입
exports.signup = async (req, res) => {
  const result = await models.USER.create({
    id: req.body.id,
    name: req.body.name,
    password: req.body.password,
    salt: ,
    gender: req.body.gender,
    telephone: req.body.telephone,
  });
  res.send(result);
};

// 2. 로그인
exports.login = async (req, res) => {
  const result = await models.USER.find({
    id: req.body.id,
    password: req.body.password,
  });
  res.send(result);
};

//  3. /msg 데이터 과거 대화 내용 조회
exports.msg = async (req, res) => {
  const result = await models.MSG.findAll();
  res.send(result);
};

// 4. /room/:rommid 회화 채팅 방
exports.room = async (req, res) => {
  const result = await models.Room.findAll();
  res.send(result);
};
