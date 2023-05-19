const models = require("../models");
const crypto = require("crypto");
const {Op} = require('sequelize')

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

// 1. 회원가입
exports.checkEmail = async (req, res) => {
  let inputEmail = req.body.email
  try{
    const result = await models.USER.findOne({
      where : {
        email : inputEmail
      }
    })
    if(result !== null){ // 중복
      res.send(false)
    }
    else{ // 중복x
      res.send(true)
    }
  }
  catch{
    res.status(500).send("Error");
  }
};

exports.post_signup = async (req, res) => {
  let cryptoPassword = await createCryptoPassword(req.body.password);
  try{
    const result = await models.USER.findOrCreate({
      where : {
        email: req.body.email,
      },
      defaults : {
        name: req.body.name,
        email: req.body.email,
        password: cryptoPassword.password,
        salt: cryptoPassword.salt,
        gender: req.body.gender,
        telephone: req.body.telephone,
      }
    })
    if(result.at(-1) === false){
      console.log('fail')
      res.send('fail')
    }
    else{
      console.log('suc')
      res.send('success')
    }
  }
  catch(error){
    res.status(500).send("Error");
  }
};

// 2. 로그인
exports.post_login = async (req, res) => {
  try{
     // 입력받은 아이디를 가진 사람을 찾아 salt와 입력한 비밀번호를 조합하며 저장된 비번과 같은지 확인
    const result = await models.USER.findOne({
      where:{
        email: req.body.email,
      }
    });
    const getCry = await getCryptoPassword(req.body.password, result.salt);

    if(getCry.password === result.password) {
      res.send({msg: 'success', userid : result.id, email : result.email}); // 성공메시지와 유저아디 반환
    }
    else {
    // 로그인 틀림
      res.send("fail");
    }
  }
  catch{
    res.status(500).send("Error");
  }
};

//  3. /msg/:userId/:roomid 과거 대화 내용 조회
exports.msg = async (req, res) => {
  const userId = req.params.userid
  const roomId = req.params.roomid;

  try{
    const result = await models.MSG.findAll({
      raw : true,
      where: {
        room_id: roomId,
        user_id : userId
      },
    });
    console.log(result)
    res.send(result);
  }
  catch{
    res.status(500).send("Error");
  }
};

// 해당 유저가 가진 모든 방 내보내기
exports.allRoom = async(req,res)=>{
  const userId = req.params.userid
  try{
    const result = await models.ROOM.findAll({
      raw :true,
      where : {
        [Op.or] : [{id : userId},{kakaoId : userId}]
      }
    })
    let roomIds = []
    for(let i=0; i<result.length; i++){
      roomIds.push(result[i].room_id)
    }
    console.log(roomIds)
    res.send(roomIds)
  }
  catch{
    res.status(500).send("Error");
  }
}

// 4. /room/:userid : room setting
exports.room = async (req, res) => {
  console.log(req.body)
  const userId = req.params.userid // 가입한 사람 id나 kakaoId
  try{
    const result = await models.USER.findOne({ // params랑 user의 id가 같은 사람 찾기
      where : {
        id : userId
      }
    })
    if(result !== null){ // params랑 user의 id가 같은 사람 발견
      await models.ROOM.create({
        id : userId,
        situation : req.body.situation,
        accent : req.body.accent,
        language : req.body.language,
      })
    }
    else{ // 다르면 카카오
      await models.ROOM.create({
        kakaoId : userId,
        situation : req.body.situation,
        accent : req.body.accent,
        language : req.body.language,
      })
    }
    res.send('success')
  }
  catch{
    res.status(500).send("Error");
  }
};

// 6. /kakao
exports.kakao2 = async (req, res) => {
  try {
    console.log(req.body)
    const result = await models.KAKAO.findOrCreate({
      where : {
        kakaoId : req.body.id.toString()
      },
      defaults : {
        kakaoId : req.body.id.toString(),
        kakao_nickname : req.body.nickname
      }
    })
    if(result.at(-1) === false){ // 중복되면 
      console.log('fail')
      res.send('fail')
    }
    else{ // 중복 안되면
      console.log('suc')
      res.send('success')
    }
  } catch (error) {
    res.status(500).send("Error");
  }
};
