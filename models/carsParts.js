const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const CarsParts = sequelize.define('carsparts', {
    carId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    partId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
});

module.exports = CarsParts;