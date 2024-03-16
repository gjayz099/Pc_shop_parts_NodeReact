const { sequelize } = require("../DB/dbConnect");
const { DataTypes } = require('sequelize')

// Establish Model Buy Item
const Country = sequelize.define('countries',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    
    
})

module.exports = Country