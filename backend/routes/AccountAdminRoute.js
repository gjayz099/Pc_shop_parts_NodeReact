const express = require('express')
const { GetAccountAdmin, GetAccountAdminID, PutAccountAdminID, DeleteAccountAdminID, PostAccountAdminSignup, PostAccountAdminLogin} = require('../controllers/AccountCotroller')
const userRouter = express.Router()



// API ROUTES ACCOUNT ADMIN

// ---Post Login UP API
userRouter.post('/login', PostAccountAdminLogin)

// ---Post SIGN UP API
userRouter.post('/signup', PostAccountAdminSignup)

// ---GET ALL API
userRouter.get('/', GetAccountAdmin)

// ---GET ID API
userRouter.get('/:id', GetAccountAdminID)

// ---PUT ID API
userRouter.put('/:id', PutAccountAdminID)

// ---DELETE ID API
userRouter.delete('/:id', DeleteAccountAdminID)



module.exports = userRouter