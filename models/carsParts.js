module.exports = (sequelize, DataTypes) => {
    const CarsParts = sequelize.define('carsparts', {
      carId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      partId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    });
  
    return CarsParts;
  };
  