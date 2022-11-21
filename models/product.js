const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  allowNull: false,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  ImageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
