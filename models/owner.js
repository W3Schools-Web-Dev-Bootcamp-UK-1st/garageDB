const {DataTypes} = require('sequelize');
const {sequelize} = require('../models/conn');

const Owner = sequelize.define('owner', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        business: DataTypes.STRING,
        worth: DataTypes.INTEGER,
        registered_at: DataTypes.DATE,
      }, {
        timestamps: false
      }
      );

module.exports = Owner;