const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  { // Configuration object for Sequelize
    host: process.env.DB_HOST, // Database host from environment variables
    port: process.env.DB_PORT, // Database port from environment variables
    dialect: "mysql", // Specify the database dialect as MySQL
    logging: false, // Disable logging SQL queries to the console
  }
);

module.exports = sequelize;
