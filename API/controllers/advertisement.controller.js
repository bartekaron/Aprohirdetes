const advertisementService = require('../services/advertisement.service.js')
const { uploadImage } = require('../utils/imageUpload');

exports.getAlladvertisements = async(_req, res, next) =>{
    try{
        const advertisements = await advertisementService.getAllAdvertisements();
        res.status(200).json({success: true, advertisements: advertisements})
    }
    catch(err){
        next(err);
    }
}

exports.createAdvertisement = async (req, res, next) => {
    try {
        const { title, description, price, category, userID } = req.body;
        const image = req.file ? req.file.buffer : null; // Ha van kép, akkor azt blobként tároljuk

        const newAdvertisement = await advertisementService.createAdvertisement({
            userID,
            date: new Date(),
            category,
            title,
            description,
            price,
            image,
        });

        res.status(201).json({
            success: true,
            advertisement: newAdvertisement,
        });
    } catch (err) {
        next(err);
    }
};

exports.deleteAdvertisement = async (req, res, next) => {
    try {
        const { id } = req.params; // Az id paraméter az URL-ből
        
        if (!id) {
            return res.status(400).json({ success: false, message: 'Hiányzó hirdetés ID!' });
        }

        const deletedAd = await advertisementService.deleteAdvertisement(id);

        if (!deletedAd) {
            return res.status(404).json({ success: false, message: 'A hirdetés nem található!' });
        }

        return res.status(200).json({ success: true, message: 'A hirdetés sikeresen törölve!' });
    } catch (err) {
        next(err);
    }
};

exports.updateAdvertisement = async (req, res, next) => {
    try {
        const { id } = req.params; // Az id paraméter a URL-ből
        const { title, description, price, category } = req.body; // A body-ból jönnek az új adatok

        if (!id || !title || !description || !price || !category) {
            return res.status(400).json({ success: false, message: 'Hiányzó adat!' });
        }

        const updatedAd = await advertisementService.updateAdvertisement(id, { title, description, price, category });

        if (!updatedAd) {
            return res.status(404).json({ success: false, message: 'A hirdetés nem található!' });
        }

        return res.status(200).json({ success: true, advertisement: updatedAd });
    } catch (err) {
        next(err);
    }
};