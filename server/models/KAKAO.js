const KAKAO = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
      "KAKAO",
      {
        kakaoId: {
          type: DataTypes.STRING(20),
          primaryKey : true,
          allowNull: false,
        },
        kakao_nickname: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        tableName: "kakao", // 실제 db table명
        freezeTableName: true, // 테이블명 고정!
        timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
      } // param3: 모델 옵션 정의
    );
    return model;
  };
  
  module.exports = KAKAO;
  