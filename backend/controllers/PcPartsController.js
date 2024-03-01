const asyncHandler = require('express-async-handler')
const PcParts = require('../models/PcPartsModel')


// ----Post Pc Parts
const PostPcParts = asyncHandler(async(req, res) => {
    try {
        const pcparts = await PcParts.create(req.body);
        res.status(201).json(pcparts);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})

// ----Get Pc Parts All
const GetPcParts = asyncHandler(async(req, res) => {
    try {
        const pcparts = await PcParts.findAll({});
        res.status(201).json(pcparts);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})

// ----Get Pc Parts ID
const GetIDPcParts = asyncHandler(async(req, res) => {
    try {
        const pcparts_id = req.params.id
        const pcparts = await PcParts.findByPk(pcparts_id);
        if(!pcparts){
            return res.status(404).json({message:  `Cannot Find PC Parts ID ${pcparts_id}`})
        }
        res.status(201).json(pcparts);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})

// ----Put Pc Parts ID 
const PutPcPartsID = asyncHandler(async(req, res) => {
    try{
        const pcparts_id = req.params.id
        const pcparts = await PcParts.findByPk(pcparts_id);
        if(!pcparts){
            return res.status(404).json({message:  `Cannot Find PC Parts ID ${pcparts_id}`})
        }
        const pcparts_update = await pcparts.update(req.body)
        res.status(201).json(pcparts_update);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})

// ----Delete Pc Parts ID
const DeletePcPartsID = asyncHandler(async(req, res) => {
    try{
        const pcparts_id = req.params.id
        const pcparts = await PcParts.findByPk(pcparts_id);
        if(!pcparts){
            return res.status(404).json({message:  `Cannot Find PC Parts ID ${pcparts_id}`})
        }
        const pcparts_delete = await pcparts.destroy(req.body)
        res.status(201).json({pcparts_delete, message : "PC PARTS Succes Delete"});
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})


module.exports = {
    PostPcParts,
    GetPcParts,
    GetIDPcParts,
    PutPcPartsID,
    DeletePcPartsID
}