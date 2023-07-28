const Owner = require('./owner');
const OwnedCars = require('./ownedCars');
const Car = require('./car');
const Part = require('./part');
const Repair = require('./repair');
const Service = require('./service');
const CarsParts = require('./carsParts');

// Owner-Car relationship through owned_cars
Owner.belongsToMany(Car, { through: OwnedCars, foreignKey: 'owner_id', allowNull: false });
Car.belongsToMany(Owner, { through: OwnedCars, foreignKey: 'car_id', allowNull: false });

// Car-Parts relationship through cars_parts
Car.belongsToMany(Part, { through: CarsParts, foreignKey: 'car_id', allowNull: false });
Part.belongsToMany(Car, { through: CarsParts, foreignKey: 'part_id', allowNull: false });

// Car-Service relationship
Car.hasMany(Service, { foreignKey: 'car_id' });
Service.belongsTo(Car, { foreignKey: 'car_id' });

// Service-Repair relationship
Service.belongsTo(Repair, { foreignKey: 'service_id' });
Repair.hasOne(Service, { foreignKey: 'service_id' });

module.exports = {
  Owner, Car, OwnedCars, Part, Repair, Service, CarsParts
}
