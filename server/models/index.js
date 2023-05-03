"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.USER = require('./USER')(sequelize,Sequelize)
db.ROOM = require('./ROOM')(sequelize,Sequelize)
db.MSG = require('./MSG')(sequelize,Sequelize)


sequelize.sync({force:false})
.then(()=>{
  console.log('db연결됨')
})
.catch((err)=>{
  console.error(err)
})
module.exports = db;


// 외래키 설정 부분 이해가 안되서 선생님에게 여쭈어볼 예정