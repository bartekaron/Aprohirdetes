const { Advertisement } =  require('../models/advertisement.model')

exports.getAllAdvertisements = async () => {
    return await Advertisement.findAll();
}
