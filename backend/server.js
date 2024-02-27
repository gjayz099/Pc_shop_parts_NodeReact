const express = require('express')
const { connectDb } = require('./DB/dbConnect')
const PcParts = require('./models/PcPartsModel')

const app = express()


var cors = require('cors')

const PORT =  3000


app.use(cors())

app.get('/', (req, res) => {
    res.send('hello Gerald Glen')
})


app.use(express.json())



// POST
app.post('/pcparts', async(req, res) => {
    try {
        const pcparts = await PcParts.create(req.body);
        res.status(201).json(pcparts);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})


// GET ALL
app.get('/pcparts', async(req, res) => {
    try {
        const pcparts = await PcParts.findAll({});
        res.status(201).json(pcparts);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})

// GET ID
app.get('/pcparts/:id', async(req, res) => {
    try {
        const pcparts_id = req.params.id
        const pcparts = await PcParts.findByPk(pcparts_id);
        if(!pcparts){
            return res.status(404).json({message:  `cannot find any Booking with ID ${pcparts_id}`})
        }
        res.status(201).json(pcparts);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})


// PUT ID
app.put('/pcparts/:id', async(req, res) => {
    try{
        const pcparts_id = req.params.id
        const pcparts = await PcParts.findByPk(pcparts_id);
        if(!pcparts){
            return res.status(404).json({message:  `cannot find any Booking with ID ${pcparts_id}`})
        }
        const pcparts_update = await pcparts.update(req.body)
        res.status(201).json(pcparts_update);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }

})

// DELETE ID
app.delete('/pcparts/:id', async(req, res) => {
    try{
        const pcparts_id = req.params.id
        const pcparts = await PcParts.findByPk(pcparts_id);
        if(!pcparts){
            return res.status(404).json({message:  `cannot find any Booking with ID ${pcparts_id}`})
        }
        const pcparts_delete = await pcparts.destroy(req.body)
        res.status(201).json({pcparts_delete, message : "PC PARTS Succes Delete"});
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }

})




app.listen(PORT, () => {
    connectDb()
    console.log(`Running SERVER http://localhost:${PORT}`)
})


