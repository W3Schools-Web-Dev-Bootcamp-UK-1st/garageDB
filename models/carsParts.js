const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const CarsParts = sequelize.define('carsparts', {
/*     carId: {
      type: DataTypes.INTEGER,
    },
    partId: {
      type: DataTypes.INTEGER,
    }, */
});

module.exports = CarsParts;