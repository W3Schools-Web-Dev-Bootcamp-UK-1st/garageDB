module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('service', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      service_id: DataTypes.INTEGER,
      car_id: DataTypes.INTEGER,
    });
  
    Service.associate = function(models) {
      Service.belongsTo(models.Car);
      Service.belongsTo(models.Repair, { foreignKey: 'service_id', targetKey: 'id' });
    };
  
    return Service;
  };
  