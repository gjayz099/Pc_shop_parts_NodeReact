const express = require('express')
const bodyParser = require('body-parser')
const { connectDb } = require('./DB/dbConnect')
const pcpartsRoutes = require('./routes/PcPartsRoute')
const accountRoutes = require('./routes/AccountRoute')
const buyitemsRoutes = require('./routes/BuyItemRoute')

// Establish express 
const app = express()
var cors = require('cors')

// Read .env File
require('dotenv').config()

const PORT =  process.env.PORT || 3000

// Establish Cors 
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello Gerald Glen')
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Establish Json 
app.use(express.json())



// ------ Product ROUTES
app.use('/api/pcparts', pcpartsRoutes)


// ------ Account ROUTES
app.use('/api/accounts', accountRoutes)

// ------Buy ROUTES
app.use('/api/buyitems', buyitemsRoutes)

// Running Project
app.listen(PORT, () => {
    connectDb()
    console.log(`Running SERVER http://localhost:${PORT}`)
})


