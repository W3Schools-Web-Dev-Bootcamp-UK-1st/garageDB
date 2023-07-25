module.exports = (sequelize, DataTypes) => {
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
  
    Part.associate = function(models) {
      Part.belongsToMany(models.Car, { through: 'CarsParts' });
    };
  
    return Part;
  };
  