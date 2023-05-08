const models = require("../models");
const crypto = require("crypto");

// 솔트 생성
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

// 암호비번 생성
const createCryptoPassword = async (plainPassword) => {
  console.log(">>>>>>>>>>", plainPassword);
  const salt = await createSalt();
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 10000, 64, "sha512", (err, key) => {
      if (err) {
        console.log("createCryptoPassword 에서 에러 발생");
        reject(err);
      }
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

// 비밀번호 검증
const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 10000, 64, "sha512", (err, key) => {
      if (err) {
        console.log("getCryptoPassword 에서 에러 발생");
        reject(err);
      }
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

exports.main = async (req, res) => {
  res.send("hi");
};

// 1. 회원가입
exports.signup = (req, res) => {
  res.send("signup");
};

exports.post_signup = async (req, res) => {
  let cryptoPassword = await createCryptoPassword(req.body.password);
  //   {
  //
  //     "name": "hyun",
  //     "email" : "test0@gmail.com",
  //     "password": "jES+dWXgr1iEF5acH3zXrCxMiYzlRzTKjadKt154kAkk6d5VjTHPlnhXv6YAGkfrxARgIdsxBIY35H1fFDDyFg==",
  //     "salt": "52Pi2AqFX9fC/+Dm55KYIJDCpPzWF/28x8QX3P6RzJk7pVEL3ZUQlF/TdWcwIvE2+US+vIlBrC14hGI5cRrzIA==",
  //     "gender": "male",
  //     "telephone": "01012345678"
  // }
  const result = await models.USER.create({
    name: req.body.name,
    email: req.body.email,
    password: cryptoPassword.password,
    salt: cryptoPassword.salt,

    gender: req.body.gender,
    telephone: req.body.telephone,
  });
  // res.send('signup success')
  res.sendFile(__dirname + "/result.html");
};

exports.tmp = (req, res) => {
  res.sendFile(__dirname + "/test.html");
};

// 2. 로그인
exports.login = (req, res) => {
  res.send("login");
};

exports.post_login = async (req, res) => {
  // 입력받은 아이디를 가진 사람을 찾아 salt와 입력한 비밀번호를 조합하며 저장된 비번과 같은지 확인
  const result = await models.USER.findOne({
    email: req.body.email,
  });
  const getCry = await getCryptoPassword(req.body.password, result.salt);
  console.log("getCry: ", getCry.password);
  console.log(result.password);
  if (getCry.password === result.password) {
    // res.send("success");
    res.sendFile(__dirname + "/result.html");
  } else {
    res.send("wrong");
  }
};

//  3. /msg/:roomid 과거 대화 내용 조회
exports.msg = async (req, res) => {
  const roomId = req.params;
  const result = await models.MSG.findAll({
    where: {
      room_id: roomId,
    },
  });
  res.send(result);
};

// 4. /room/:userid : room setting
exports.room = async (req, res) => {
  console.log(req.body);
  const result = await models.ROOM.create({
    id: req.body.id, // user_id
    situation: req.body.situation,
    accent: req.body.accent,
    language: req.body.language,
  });
};

// 5. /stt 음성을 텍스트로 출력.
exports.sst = (req, res) => {
  res.render("index");
};

// 6. /kakao
//프론트 분리 전까지 기능 확인하고 싶으면 아래 render 주석 풀기
// exports.kakao = (req, res) => {
//   res.render("kakao");
// };

exports.kakao = async (req, res) => {
  try {
    const response = await new Promise((resolve, reject) => {
      Kakao.Auth.login({
        success: resolve,
        fail: reject,
      });
    });

    const profile = await new Promise((resolve, reject) => {
      Kakao.API.request({
        url: "/v2/user/me",
        success: resolve,
        fail: reject,
      });
    });
    console.log(profile);
    console.log("Login_nickname > ", response.nickname);

    const [user, created] = await models.USER.findOrCreate({
      where: {
        kakaoId: profile.id,
      },
      default: {
        nickname: profile.nickname,
      }
    });
    console.log(`kakao User > ${user.kakaoId}: ${created}`);

    res.json(user);
  } catch (error) {
    res.status(500).send("Error");
  }
};
