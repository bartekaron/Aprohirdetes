/**
Ez gyűjti össze a különböző modulok útvonalait egy modulba
**/
const express = require('express');
const router = express.Router();

// importáljuk az egyes modulok útvonalait
const userRoutes = require('./user.routes');       
const advertisementRoutes = require('./advertisement.routes');

// regisztráljuk az útvonalakat
router.use('/users', userRoutes);
router.use('/advertisement', advertisementRoutes);

module.exports = router;