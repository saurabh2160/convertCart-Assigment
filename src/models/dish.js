const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Restaurant = require("./restaurant");

const Dish = sequelize.define("Dish", {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

Restaurant.hasMany(Dish, { foreignKey: "restaurantId" });
Dish.belongsTo(Restaurant, { foreignKey: "restaurantId" });

module.exports = Dish;
