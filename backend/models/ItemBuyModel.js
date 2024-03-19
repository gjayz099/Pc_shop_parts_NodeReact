const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')
const Account = require('./AccountModel')
const PcParts = require('./PcPartsModel')


// Establish Model Buy Item
const BuyItem = sequelize.define('buyitems',{
    qty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    accountId:{
        type: DataTypes.INTEGER, 
        allowNull: false,
        validate:{
            notEmpty: true,
        },
        references:{
            model: Account
        }
    },
    pcpartId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        validate:{
            notEmpty: true,
        },
        references:{
            model: PcParts
        }
    }
})

// Establish one-to-one association between Account and BuyItem models
Account.hasOne(BuyItem, { foreignKey: 'accountId', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
BuyItem.belongsTo(Account)

// Establish one-to-one association between PcParts and BuyItem models
PcParts.hasOne(BuyItem, { foreignKey: 'pcpartId', onDelete: 'CASCADE',  onUpdate: 'CASCADE'})
BuyItem.belongsTo(PcParts)

module.exports = BuyItem