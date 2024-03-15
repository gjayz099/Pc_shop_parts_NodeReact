const express = require('express')
const bodyParser = require('body-parser')
const { connectDb } = require('./DB/dbConnect')
const pcpartsRoutes = require('./routes/PcPartsRoute')
const accountadminRoutes = require('./routes/AccountAdminRoute')

const app = express()
var cors = require('cors')



require('dotenv').config()

const PORT =  process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello Gerald Glen')
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json())



// ------ Product ROUTES
app.use('/api/pcparts', pcpartsRoutes)


// ------ Account ROUTES
app.use('/api/accountadmins', accountadminRoutes)


app.listen(PORT, () => {
    connectDb()
    console.log(`Running SERVER http://localhost:${PORT}`)
})


