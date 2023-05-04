const MSG = function(Sequelize,DataTypes){
    const model = Sequelize.define(
        'MSG',
        {
            msg_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true,
                autoIncrement : true,
            },
            part_id:{
                type:DataTypes.STRING(20),
                allowNull:false
            },
            content:{
                type : DataTypes.TEXT,
                allowNull:false
            },
            room_id:{
                type : DataTypes.INTEGER,
                allowNull:false
            },
        }
    )
}

module.exports = MSG;