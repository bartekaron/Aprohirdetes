const { Advertisement } =  require('../models/advertisement.model')

exports.getAllAdvertisements = async () => {
    return await Advertisement.findAll();
}

exports.createAdvertisement = async (advertisementData) => {
    try {
        const newAdvertisement = await Advertisement.create(advertisementData);
        return newAdvertisement;
    } catch (err) {
        console.error('Error creating advertisement:', err);
        throw err;
    }
};

exports.updateAdvertisement = async (id, { title, description, price, category }) => {
    try {
        const advertisement = await Advertisement.findOne({ where: { id } });

        if (!advertisement) {
            return null; 
        }

        advertisement.title = title;
        advertisement.description = description;
        advertisement.price = price;
        advertisement.category = category;

        await advertisement.save(); 
        return advertisement;
    } catch (err) {
        console.error('Error updating advertisement:', err);
        throw err;
    }
};

exports.deleteAdvertisement = async (id) => {
    try {
        const advertisement = await Advertisement.findOne({ where: { id } });

        if (!advertisement) {
            return null; 
        }
        await advertisement.destroy();
        return advertisement;
    } catch (err) {
        console.error('Error deleting advertisement:', err);
        throw err;
    }
};