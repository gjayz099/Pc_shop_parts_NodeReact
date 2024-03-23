const { sequelize } = require('../DB/dbConnect')
const { DataTypes, Sequelize } = require('sequelize')
const Account = require('./AccountModel')


// Define BuyItem model
const BuyItem = sequelize.define('buyitems', {

    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      time: {
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false, 
        validate: {
          notEmpty: true
        }
      }

});

// Establish associations
Account.hasOne(BuyItem, { foreignKey: 'accountId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
BuyItem.belongsTo(Account)



module.exports =  BuyItem