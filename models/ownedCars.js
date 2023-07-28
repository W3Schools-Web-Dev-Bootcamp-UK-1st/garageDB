const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const OwnedCars = sequelize.define('ownedCars');

module.exports = OwnedCars;