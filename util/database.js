const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shop", "root", "98765", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
