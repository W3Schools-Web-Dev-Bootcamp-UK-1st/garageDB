module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('car', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      vin: DataTypes.STRING,
      brand: DataTypes.TEXT,
      description: DataTypes.TEXT,
      registered_at: DataTypes.DATE,
      parts_id: DataTypes.INTEGER,
      isrunning: DataTypes.BOOLEAN,
      underconstruction: DataTypes.BOOLEAN,
      manufactured: DataTypes.INTEGER,
      mileage: DataTypes.INTEGER,
    });
  
    Car.associate = function(models) {
      Car.belongsToMany(models.Owner, { through: 'OwnedCars' });
      Car.belongsToMany(models.Part, { through: 'CarsParts' });
    };
  
    return Car;
  };
  