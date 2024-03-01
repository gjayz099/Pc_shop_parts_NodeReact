const express = require('express')
const { connectDb } = require('./DB/dbConnect')
const pcpartsRoutes = require('./routes/PcPartsRoute')
const accountadmin = require('./routes/AccountAdminRoute')
const app = express()
var cors = require('cors')



require('dotenv').config()

const PORT =  process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello Gerald Glen')
})


app.use(express.json())


// ------ Product ROUTES
app.use('/api/pcparts', pcpartsRoutes)


// ------ Account ROUTES
app.use('/api/accountadmins', accountadmin)


app.listen(PORT, () => {
    connectDb()
    console.log(`Running SERVER http://localhost:${PORT}`)
})


