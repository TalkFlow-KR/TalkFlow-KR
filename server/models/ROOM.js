const ROOM = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "ROOM",
    {
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      situation: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      accent: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      kakaoId: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      tableName: "ROOM", // 실제 db table명
      freezeTableName: true, // 테이블명 고정!
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    } // param3: 모델 옵션 정의
  );
  return model;
};

module.exports = ROOM;
