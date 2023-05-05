const ROOM = function(Sequelize,DataTypes){
    const model = Sequelize.define(
        'ROOM',
        {
            room_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true,
                autoIncrement : true,
            },
            id:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            situation:{
                type : DataTypes.STRING(50),
                allowNull:false
            },
            accent:{
                type : DataTypes.STRING(50),
                allowNull:false
            },
            language:{
                type : DataTypes.STRING(50),
                allowNull:false
            }
        }
    )
}

module.exports = ROOM;