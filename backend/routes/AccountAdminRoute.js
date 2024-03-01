const express = require('express')
const { PostAccountAdmin, GetAccountAdmin, GetAccountAdminID, PutAccountAdminID, DeleteAccountAdminID} = require('../controllers/AccountCotroller')
const router = express.Router()



// API ROUTES ACCOUNT ADMIN

// ---GET API
router.post('/', PostAccountAdmin)

// ---GET ALL API
router.get('/', GetAccountAdmin)

// ---GET ID API
router.get('/:id', GetAccountAdminID)

// ---PUT ID API
router.put('/:id', PutAccountAdminID)

// ---DELETE ID API
router.delete('/:id', DeleteAccountAdminID)


module.exports = router