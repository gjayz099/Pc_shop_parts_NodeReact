const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')


const AccountAdmin = sequelize.define('accountadmins',{
    adminname : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    adminuser : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    adminpass : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    conadminpassword:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "admin" // Admin or Workers 
    },
})
module.exports = AccountAdmin