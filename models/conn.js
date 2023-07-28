//conn.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("garage", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
    logging: true,
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        sequelize.sync().then(async () => {
        // Populate DB with demo data
        // const populateDB = require('../populate');
        // await populateDB(sequelize);       
        });
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}

module.exports = {sequelize, testConnection}
