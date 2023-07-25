const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize an instance of express
const app = express();

// Initialize an instance of Sequelize
const sequelize = new Sequelize('garage', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});



// Import models
const Owner = require('./models/owner')(sequelize, DataTypes);
const Car = require('./models/car')(sequelize, DataTypes);
const Part = require('./models/part')(sequelize, DataTypes);
const CarsParts = require('./models/carsParts')(sequelize, DataTypes);
const Repair = require('./models/repair')(sequelize, DataTypes);
const Service = require('./models/service')(sequelize, DataTypes);
const OwnedCars = require('./models/ownedCars')(sequelize, DataTypes);


// Associations
Owner.associate({ Car, OwnedCars });
Car.associate({ Owner, Part, OwnedCars, CarsParts });
Part.associate({ Car, CarsParts });
Service.associate({ Car, Repair });

app.use(express.json());

// Add routes here

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
  
  // Test connection
  sequelize.authenticate()
    .then(async () => {
      console.log('Database connected...');
    })
    .catch(err => console.log('Error: ' + err))

  // Sync all models that aren't already in the database
  sequelize.sync().then(async () => {
    // Populate DB with demo data
    const populateDB = require('./populate');
    await populateDB(sequelize);
  });
}); 
