const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const CarsParts = sequelize.define('carsparts', {
    motor_id: {
      type: DataTypes.INTEGER,
    },
    turbo_id: {
      type: DataTypes.INTEGER,
    },
    gearbox_id: {
      type: DataTypes.INTEGER,
    },
    break_id: {
      type: DataTypes.INTEGER,
    },
    exhaust_id: {
      type: DataTypes.INTEGER,
    },
    wheels_id: {
      type: DataTypes.INTEGER,
    },
});

module.exports = CarsParts;