module.exports = (sequelize, DataTypes) => {
    const OwnedCars = sequelize.define('ownedCars', {
      ownerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      carId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    });
  
    return OwnedCars;
  };
  