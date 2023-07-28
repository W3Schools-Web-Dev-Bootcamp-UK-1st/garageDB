const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

    const OwnedCars = sequelize.define('ownedCars', {
      ownerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      carId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    });

    module.exports = OwnedCars;