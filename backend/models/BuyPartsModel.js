const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')


const BuyPcParts = sequelize.define('buypcparts',{
    itemnamebuyparts : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    itembuyprice : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    itebuyparts : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
})


module.exports = BuyPcParts