const asyncHandler = require('express-async-handler')
const PcParts = require('../models/PcPartsModel')

// POST ONE PC PARTS
const PostPcParts = asyncHandler(async(req, res) => {
    try {
        // PC Parts object to Create in the database.
        const pcparts = await PcParts.create(req.body)

        // Response PC parts
        res.status(201).json(pcparts)
    // Error Response
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})


// GET ALL PC PARTS
const GetPcParts = asyncHandler(async(req, res) => {
    try {
        // PC Parts object to Fide in the database.
        const pcparts = await PcParts.findAll({})

        // Response PC parts
        res.status(201).json(pcparts)

    // Error Response
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})


// GET ONE ID PC PARTS
const GetIDPcParts = asyncHandler(async(req, res) => {
    try {
        // Declire pc part id
        const pcparts_id = req.params.id

        // Find Parts Id In Database
        const pcparts = await PcParts.findByPk(pcparts_id)
        if(!pcparts){
            return res.status(404).json({message:  `Cannot Find PC Parts ID ${pcparts_id}`})
        }

        // Response PC parts
        res.status(201).json(pcparts)
    // Error Response
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})


// PUT ONE ID PC PARTS
const PutPcPartsID = asyncHandler(async(req, res) => {
    try{
        // The Pc Parts ID extracted from the request parameters
        const pcparts_id = req.params.id

        // Find Parts Id In Database
        const pcparts = await PcParts.findByPk(pcparts_id)
        if(!pcparts){
            return res.status(404).json({message:  `Cannot Find PC Parts ID ${pcparts_id}`})
        }
        // Pc Parts object to update in the database.
        const pcparts_update = await pcparts.update(req.body)

        // Reponse Pc Parts
        res.status(201).json(pcparts_update)

    // Error Response
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" })
    }
})


// DELETE ONE ID PC PARTS
const DeletePcPartsID = asyncHandler(async(req, res) => {
    try{
        // The Pc Parts ID extracted from the request parameters
        const pcparts_id = req.params.id

        // Find Pc Parts Id In Database
        const pcparts = await PcParts.findByPk(pcparts_id)
        if(!pcparts){
            return res.status(404).json({message:  `Cannot Find PC Parts ID ${pcparts_id}`})
        }

        //  Pc Parts object to Delete in the database
        const pcparts_delete = await pcparts.destroy(req.body)

        // Response Pc Parts
        res.status(201).json({pcparts_delete, message : "PC PARTS Succes Delete"})

    // Error Reponse
    }catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})


module.exports = {
    PostPcParts,
    GetPcParts,
    GetIDPcParts,
    PutPcPartsID,
    DeletePcPartsID
}
