const { DataTypes} = require('sequelize');

module.exports =(sequelize) =>{
    sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isEmail:true,
            unique: true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: {
                args: [3, 10],
                msg: "The name must contain between 3 and 10 letters",
              },
            },
          },
          user_lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: {
                args: [3, 10],
                msg: "The last name must contain between 3 y 10 letters.",
              },
            },
          },
    },{timestamps:false});

}