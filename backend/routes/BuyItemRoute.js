const express = require('express')
const { PostBuyItem, GetBuyItem, GetBuyItemID } = require('../controllers/ItemBuyController')
const router = express.Router()


// POST ROUTER
router.post('/', PostBuyItem)

// GET ROUTER
router.get('/', GetBuyItem)

// GET ID ROUTER
router.get('/:id', GetBuyItemID)

module.exports = router