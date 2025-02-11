// advertisement.routes.js
const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisement.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

/**
  ADVERTISEMENT modul útvonalai
**/

// Hirdetés listázása
router.get('/', advertisementController.getAlladvertisements);

// Hirdetés feladása
router.post('/', /*authMiddleware,*/ advertisementController.createAdvertisement);

// Hirdetés módosítása
router.put('/:id', /*authMiddleware,*/ advertisementController.updateAdvertisement);

// Hirdetés törlése
router.delete('/:id', /*authMiddleware,*/ advertisementController.deleteAdvertisement);

module.exports = router;
