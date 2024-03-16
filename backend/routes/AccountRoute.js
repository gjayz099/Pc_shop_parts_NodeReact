const express = require('express')
const { GetAccount, GetAccountID, PutAccountID, DeleteAccountID, PostAccountSignup, PostAccountLogin, PostAccountLogout } = require('../controllers/AccountCotroller')
const userRouter = express.Router()



// API ROUTES ACCOUNT ADMIN


// ---Post Logout UP API
userRouter.post('/logout', PostAccountLogout)
// ---Post Login UP API
userRouter.post('/login', PostAccountLogin)

// ---Post SIGN UP API
userRouter.post('/signup', PostAccountSignup)

// ---GET ALL API
userRouter.get('/', GetAccount)

// ---GET ID API
userRouter.get('/:id', GetAccountID)

// ---PUT ID API
userRouter.put('/:id', PutAccountID)

// ---DELETE ID API
userRouter.delete('/:id', DeleteAccountID)



module.exports = userRouter