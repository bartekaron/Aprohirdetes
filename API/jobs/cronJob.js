// cronJob.js
const cron = require('node-cron');
const { Advertisement } = require('../models/advertisement.model');
const { Op } = require('sequelize');

cron.schedule('0 0 * * *', async () => {
    const dateOneWeekAgo = new Date();
    dateOneWeekAgo.setDate(dateOneWeekAgo.getDate() - 7);

    const expiredAdvertisements = await Advertisement.findAll({
        where: {
            date: { [Op.lt]: dateOneWeekAgo }
        }
    });

    for (let ad of expiredAdvertisements) {
        await ad.destroy();
    }

    console.log('Expired advertisements deleted');
});
