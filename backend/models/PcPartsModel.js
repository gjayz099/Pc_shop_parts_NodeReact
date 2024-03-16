const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')

// Establish Model Buy Item
const PcParts = sequelize.define('pcparts', {
    namemodel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    brandname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    quantity: {
        type: DataTypes.INET,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    ratings: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

})
module.exports = PcParts