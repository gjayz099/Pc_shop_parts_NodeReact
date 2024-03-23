const asyncHandler = require('express-async-handler')
const BuyItem = require('../models/ItemBuyModel')
const PcParts = require('../models/PcPartsModel')
const Account = require('../models/AccountModel')

// Post Buy Item
const PostBuyItem = asyncHandler(async(req, res) => {
    try {
        // Declire All Parameter
        const { accountId, price, productname, quantity, date, time } = req.body

        // console.log('Received product names:', productname)
        // console.log('Received quantities:', quantity)

        // Find Buy Item all Paremeter In Database
        if (!accountId || !price || !productname || !quantity || !date || !time) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        if (productname.length !== quantity.length || 
            productname.length !== price.length) {
            // console.log('Product names and quantities have different lengths:', productname.length, quantity.length, price.length, date.length, time.length)
            return res.status(400).json({ message: 'Product names and quantities must have the same length' })
     
        }


        const buyItems = [];

        for (let i = 0; i < productname.length; i++) {
            const newBuyItem = {
                accountId: accountId,
                productname: productname[i],
                quantity: quantity[i],
                price: price[i],
                date: date[i],
                time: time[i],  
            }
            buyItems.push(newBuyItem)
        }

        // if buyitems not emty
        if(!buyItems.length){
            // console.log('Erroor')
            return res.status(400).json({ message: 'Missing required fields' })
        }
        const buyItemsCrete =  await BuyItem.bulkCreate(buyItems)

        res.status(200).json([buyItemsCrete,{ message: 'Buy items added successfully' }])

 
   
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }

})

// Get All Buy Item
const GetBuyItem = asyncHandler(async (req, res) => {
    try {

        // PC Parts object to Find in the database
        const buyitems = await BuyItem.findAll({})
        

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