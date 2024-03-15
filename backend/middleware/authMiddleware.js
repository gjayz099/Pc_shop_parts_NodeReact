const jwt = require("jsonwebtoken")


const verifyToken = (req, res, next) => {
    const token =  req.header("Authorization");
    if (!token) return res.status(401).json({ msg: "Unauthorized" })
  
        jwt.verify(token, "YOUR-SECRET-KEY", (err, user) => {
        if (err) return res.status(403).json({ msg: "Forbidden" })
        req.user = user
        next();
    })
}

module.exports = {verifyToken}