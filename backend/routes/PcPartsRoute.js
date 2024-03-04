const express = require('express')
const { PostPcParts, GetPcParts, GetIDPcParts, PutPcPartsID, DeletePcPartsID } = require('../controllers/PcPartsController')
const router = express.Router();


// API ROUTES PC PARTS

// ---GET API
router.post('/', PostPcParts)

// ---GET ALL API
router.get('/', GetPcParts)

// ---GET ID API
router.get('/:id', GetIDPcParts)

// ---PUT ID API
router.put('/:id', PutPcPartsID)

// ---DELETE ID API
router.delete('/:id', DeletePcPartsID)



module.exports = router