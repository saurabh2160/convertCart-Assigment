const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Dish = require("./dish");

const Order = sequelize.define("Order", {});

Dish.hasMany(Order, { foreignKey: "dishId" });
Order.belongsTo(Dish, { foreignKey: "dishId" });

module.exports = Order;
