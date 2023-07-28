const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const Part = sequelize.define('part', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  part_name: DataTypes.STRING,
  part_number: DataTypes.INTEGER,
  compatible_cars_id: DataTypes.INTEGER,
  part_description: DataTypes.TEXT,
});

module.exports = Part;