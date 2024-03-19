const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')
const Country = require('./CountryModel')

// Establish Model Buy Item
const Account = sequelize.define('accounts',{
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
        defaultValue: "User"
    },
    countryId:{
        type: DataTypes.INTEGER, 
        allowNull: false,
        validate:{
            notEmpty: true,
        },
        references:{
            model: Country
        }
    }

})

// Establish one-to-one association between Account and BuyItem models
Country.hasMany(Account, { foreignKey: 'countryId', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Account.belongsTo(Country)

module.exports = Account