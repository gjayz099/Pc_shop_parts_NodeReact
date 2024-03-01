const asyncHandler = require('express-async-handler')
const AcountAdmin = require('../models/AccountModel')


// ----Post Account Admin
const PostAccountAdmin = asyncHandler(async(req, res) => {
    try {
        const accountadmin = await AcountAdmin.create(req.body)
        res.status(201).json(accountadmin)
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// ----Get Account Admin All
const GetAccountAdmin = asyncHandler(async(req, res) => {
    try {
        const accountadmin = await AcountAdmin.findAll({});
        res.status(201).json(accountadmin)
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// ----Get Account Admin ID
const GetAccountAdminID = asyncHandler(async(req, res) => {
    try {
        const accountadmin_id = req.params.id
        const accountadmin = await AcountAdmin.findByPk(accountadmin_id)
        if(!accountadmin){
            return res.status(404).json({message:  `Cannot Find Any Account Admin ID ${accountadmin_id}`})
        }
        res.status(201).json(accountadmin)
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// ----Put Account Admin ID
const PutAccountAdminID = asyncHandler(async(req, res) => {
    try {
        const accountadmin_id = req.params.id
        const accountadmin = await AcountAdmin.findByPk(accountadmin_id)
        if(!accountadmin){
            return res.status(404).json({message:  `Cannot Find Any Account Admin ID${accountadmin_id}`})
        }
        const accountadmin_update = await accountadmin.update(req.body)
        res.status(201).json(accountadmin_update);
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// ----Delete Account Admin ID
const DeleteAccountAdminID = asyncHandler(async(req, res) => {
    try {
        const accountadmin_id = req.params.id
        const accountadmin = await AcountAdmin.findByPk(accountadmin_id)
        if(!accountadmin){
            return res.status(404).json({message:  `Cannot Find Any Account Admin ID ${accountadmin_id}`})
        }
        const accountadmin_update = await accountadmin.destroy(req.body)
        res.status(201).json({accountadmin_update, message: "Admin Account Succes Delete"});
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})




module.exports = {
    PostAccountAdmin,
    GetAccountAdmin,
    GetAccountAdminID,
    PutAccountAdminID,
    DeleteAccountAdminID
}