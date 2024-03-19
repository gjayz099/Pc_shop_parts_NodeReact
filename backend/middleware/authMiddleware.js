const jwt = require("jsonwebtoken")
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token =  req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "Unauthorized" })
  
        jwt.verify(token, process.env.SECRETTOKEN, (err, user) => {
        if (err) return res.status(403).json({ msg: "Forbidden" })
        req.user = user
        next();
    })
}

module.exports = {verifyToken}
