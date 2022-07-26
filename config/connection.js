// Import the Sequelize constructor from the library
const sequelize = require('sequelize');
require('dotenv').config();


module.exports = new sequelize(
    process.env.DATABAST_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        dialect: 'mysql'
    }
);

module.exports = sequelize;