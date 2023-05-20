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

module.exports = {createSalt, createCryptoPassword, getCryptoPassword} 