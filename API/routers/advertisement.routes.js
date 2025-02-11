const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisement.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

/**
  ADVERTISEMENT modul útvonalai
**/

//get all advertisement
router.get('/', advertisementController.getAlladvertisements);

module.exports = router; 
