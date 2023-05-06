const USER = function(Sequelize,DataTypes){
    const model = Sequelize.define(
        'USER',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true,
                autoIncrement : true,
            },
            name:{
                type: DataTypes.STRING(20),
                allowNull : false
            },
            email:{
                type: DataTypes.STRING(255),
                allowNull : false
            },
            password:{
                type: DataTypes.STRING(255),
                allowNull : false
            },
            salt:{
                type: DataTypes.STRING(255),
                allowNull : false
            },
            gender:{
                type: DataTypes.STRING(6),
                allowNull : false
            },
            telephone:{
                type: DataTypes.STRING(30),
                allowNull : false
            },
        },{
            tableName: "USER", // 실제 db table명
            freezeTableName: true, // 테이블명 고정!
            timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
          } // param3: 모델 옵션 정의
    )
    return model
}

module.exports = USER;