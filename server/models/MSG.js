const MSG = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "MSG",
    {
      msg_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      part_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id:{
        type : DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "MSG", // 실제 db table명
      freezeTableName: true, // 테이블명 고정!
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    } // param3: 모델 옵션 정의
  );
  return model;
};

module.exports = MSG;
