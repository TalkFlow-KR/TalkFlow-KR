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
                type: DataTypes.STRING(8),
                allowNull : false
            },
            salt:{
                type: DataTypes.STRING(50),
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
        }
    )
}

module.exports = USER;