const { DataTypes } = require('sequelize');
const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Advertisement = db.define('advertisement', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    userID: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },    
    price: {
        type: DataTypes.INTEGER,  
        allowNull: false
    },    
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    }
});

module.exports = { Advertisement };
