const models = require("../models");
const crypto = require("crypto")

// 솔트 생성
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err)
      resolve(buf.toString("base64"))
    })
  })
}

// 암호비번 생성
const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt()
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 10000, 64, "sha512", (err, key) => {
      if (err) reject(err)
      resolve({ password: key.toString("base64"), salt })
    })
  })
}

// 비밀번호 검증
const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err)
      resolve({ password: key.toString("base64"), salt })
    })
  })
}

exports.main = async (req, res) => {
  res.send("hi");
};

// 1. 회원가입
exports.signup = (req,res)=>{
  res.send('signup')
}

exports.post_signup = async (req, res) => {
  let crytpoPassword = createCryptoPassword(req.body.password)
  const result = await models.USER.create({
    id: req.body.id,
    name: req.body.name,
    email : req.body.email,
    password: crytpoPassword.password,
    salt: crytpoPassword.salt,
    gender: req.body.gender,
    telephone: req.body.telephone,
  });
  res.send(result);
};

// 2. 로그인
exports.login = (req,res)=>{
  res.send('login')
}

exports.post_login = async (req, res) => {
  // 입력받은 아이디를 가진 사람을 찾아 salt와 입력한 비밀번호를 조합하며 저장된 비번과 같은지 확인
  const result = await models.USER.findOne({
    id: req.body.id,
  });
  if(getCryptoPassword(req.body.password,result.salt)==result.password){
    res.send('success')
  }
  else{
    res.send('wrong')
  }
};

//  3. /msg 데이터 과거 대화 내용 조회
exports.msg = async (req, res) => {
  const result = await models.MSG.findAll();
  res.send(result);
};

// 4. /room/:rommid 회화 채팅 방
exports.room = async (req, res) => {
  const result = await models.ROOM.findAll();
  res.send(result);
};

//5. 방 세팅