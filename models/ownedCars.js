const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

    const OwnedCars = sequelize.define('ownedCars', {
      // ownerId: {
      //   type: DataTypes.INTEGER,
      // },
      // carId: {
      //   type: DataTypes.INTEGER,
      // },
    });

    module.exports = OwnedCars;