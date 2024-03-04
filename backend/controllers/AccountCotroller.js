const asyncHandler = require('express-async-handler')
const AccountAdmin = require('../models/AccountModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// POST SIGN UP ACCOUNT
const PostAccountAdminSignup = asyncHandler(async(req, res) => {
    try{
        const { password, conpassword } = req.body
        const existingUsername = await AccountAdmin.findOne({where : {username: req.body.username}})
        if(existingUsername){
            return res.status(404).json({message: "This Is Alraidy Taking"})
        }

        if(password !== conpassword) {
            return res.status(404).json({message : "Password and Confirm Password do not match"})
        }
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const adminAcount = await AccountAdmin.create({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
            conpassword:  hashedPassword,
            role: req.body.role,
        })
        res.status(200).json(adminAcount)
    }catch (error) {
        console.error(error)
        res.status(500).send({
            message: "Error occurred while creating a user",
            error: error.message,
        })
    }
})




// POST LOGIN ACCOUNT
const PostAccountAdminLogin = asyncHandler(async(req, res) => {
    try {
        const { username, password } = req.body;

        const accountadmin = await AccountAdmin.findOne({ where: { username } })
        if (!accountadmin) {
            res.status(401).json({ message: 'Account Is Not Found' })
        }
        const isPasswordMatch = await bcrypt.compare(password, accountadmin.password)

        if(!isPasswordMatch){
            return res.status(401).json({ message: 'Password And Confrim Password Is Not Match' })
        }
        const useToken = jwt.sign({
            userId: accountadmin.id,
            userRole: accountadmin.role,
            Name: accountadmin.name,
            userName: username,
            userpass: password
        },
        'RANDOM-TOKEN',{
            expiresIn: '24h',
        }
    )
    res.status(201).send({
        message: 'Login Successful',
        name: accountadmin.name,
        role: accountadmin.role,
        username: accountadmin.username,
        password: accountadmin.password,
    })

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Login failed',
            error: error.message
        });
    }
});


// GET ALL ACCOUNT
const GetAccountAdmin = asyncHandler(async(req, res) => {
    try {
        const accountadmin = await AccountAdmin.findAll({});
        res.status(201).json(accountadmin)
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// GET ONE ID ACCOUNT
const GetAccountAdminID = asyncHandler(async(req, res) => {
    try {
        const accountadmin_id = req.params.id
        const accountadmin = await AccountAdmin.findByPk(accountadmin_id)
        if(!accountadmin){
            return res.status(404).json({message:  `Cannot Find Any Account Admin ID ${accountadmin_id}`})
        }
        res.status(201).json(accountadmin)
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// PUT ONE ID ACCOUNT
const PutAccountAdminID = asyncHandler(async(req, res) => {
    try {
        const accountadmin_id = req.params.id
        const accountadmin = await AccountAdmin.findByPk(accountadmin_id)
        if(!accountadmin){
            return res.status(404).json({message:  `Cannot Find Any Account Admin ID${accountadmin_id}`})
        }
        const accountadmin_update = await accountadmin.update(req.body)
        res.status(201).json(accountadmin_update)
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

// DELETE ONE ID ACCOUNT
const DeleteAccountAdminID = asyncHandler(async(req, res) => {
    try {
        const accountadmin_id = req.params.id
        const accountadmin = await AccountAdmin.findByPk(accountadmin_id)
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
    GetAccountAdmin,
    GetAccountAdminID,
    PutAccountAdminID,
    DeleteAccountAdminID,
    PostAccountAdminSignup,
    PostAccountAdminLogin
}