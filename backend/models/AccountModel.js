const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')


const AccountAdmin = sequelize.define('accountadmins',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    conpassword:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "User" // Admin or User
    },
})
module.exports = AccountAdmin