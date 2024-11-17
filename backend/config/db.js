const { Sequelize } = require("sequelize");
require("dotenv").config(); // Carga variables del archivo .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Evita logs de Sequelize
  }
);

module.exports = sequelize;
