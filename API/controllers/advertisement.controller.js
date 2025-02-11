const advertisementService = require('../services/advertisement.service.js')

exports.getAlladvertisements = async(_req, res, next) =>{
    try{
        const advertisements = await advertisementService.getAllAdvertisements();
        res.status(200).json({success: true, advertisements: advertisements})
    }
    catch(err){
        next(err);
    }
}