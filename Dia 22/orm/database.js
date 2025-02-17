const { Sequelize } = require("sequelize");
require("dotenv").config();
console.log(process.env)
console.log(process.env.DATABASE_PASSWORD);
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: "postgres",
    }
);

module.exports = sequelize;
