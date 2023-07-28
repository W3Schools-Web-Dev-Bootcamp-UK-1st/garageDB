const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const Service = sequelize.define('service', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    service_id: DataTypes.INTEGER,
    car_id: DataTypes.INTEGER,
});

module.exports = Service;