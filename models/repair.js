const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const Repair = sequelize.define('repair', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    repair_date: DataTypes.DATE,
    description: DataTypes.TEXT,
});

module.exports = Repair;