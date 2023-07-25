module.exports = (sequelize, DataTypes) => {
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
    });
  
    Owner.associate = function(models) {
      Owner.belongsToMany(models.Car, { through: 'OwnedCars' });
    };
  
    return Owner;
  };
  