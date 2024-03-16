const { sequelize } = require('../DB/dbConnect')
const { DataTypes } = require('sequelize')
const Account = require('./AccountModel')
const PcParts = require('./PcPartsModel')


// Establish Model Buy Item
const BuyItem = sequelize.define('buyitems',{
    qty:{
        type: DataTypes.INET,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
})
// Establish one-to-one association between Account and BuyItem models
Account.hasOne(BuyItem, { foreignKey: 'accountid', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
BuyItem.belongsTo(Account)

// Establish one-to-one association between PcParts and BuyItem models
PcParts.hasOne(BuyItem, { foreignKey: 'pcpartsid', onDelete: 'CASCADE',  onUpdate: 'CASCADE'})
BuyItem.belongsTo(PcParts)

module.exports = BuyItem