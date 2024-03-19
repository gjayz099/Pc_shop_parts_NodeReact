const asyncHandler = require('express-async-handler')
const BuyItem = require('../models/ItemBuyModel')
const PcParts = require('../models/PcPartsModel')
const Account = require('../models/AccountModel')

// Post Buy Item
const PostBuyItem = asyncHandler(async(req, res) => {
    try{
        //  Buy Item Create in Database
        const buyitems = await BuyItem.create(req.body)

        // Response Buy Item
        res.status(200).json(buyitems)

    // Error Response  
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }

})

// Get All Buy Item
const GetBuyItem = asyncHandler(async (req, res) => {
    try {

        // PC Parts object to Find in the database
        const buyitems = await BuyItem.findAll({
            attributes: ['qty'], 
            include:[
                {
                    model: PcParts,
                    attributes: [
                        "productname", "brandname", "namemodel", "price"
                    ]
                },
                {
                    model: Account,
                    attributes: [
                        "id", "name",
                    ]
                }
            ]
        })

        // Response Buy Item
        res.status(201).json(buyitems)

    // Error Response
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// Get ID Buy Item
const GetBuyItemID = asyncHandler(async(req, res) => {
    try {
        // Declire Buy ITem id
        const buyitemsId = req.params.id

       // Find Buy Item ID In Database
        const buyitems = await BuyItem.findByPk(buyitemsId,{
            attributes: ['qty'], 
            include:[
                {
                    model: PcParts,
                    attributes: [
                        "productname", "brandname", "namemodel", "price"
                    ]
                },
                {
                    model: Account,
                    attributes: [
                        "id", "name",
                    ]
                }
            ]
        })
        if(!buyitems){
            return res.status(404).json({message:  `Cannot Find Buy Item ID ${buyitemsId}`})
        }

        // Response Buy ITEM
        res.status(201).json(buyitems)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})



module.exports = {
    PostBuyItem,
    GetBuyItem,
    GetBuyItemID
}