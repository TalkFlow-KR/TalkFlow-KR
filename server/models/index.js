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

db.USER.hasMany(db.ROOM,{
  foreignKey : 'id',
  sourceKey : 'id',
})

db.ROOM.belongsTo(db.USER,{
  foreignKey : 'id',
  sourceKey : 'id',
})

db.ROOM.hasMany(db.MSG,{
  foreignKey : 'room_id',
  sourceKey : 'room_id',
})

db.MSG.belongsTo(db.ROOM,{
  foreignKey : 'room_id',
  sourceKey : 'room_id',
})

module.exports = db;

