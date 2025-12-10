const sequelize = require("../config/database");
const Restaurant = require("../models/restaurant");
const Dish = require("../models/dish");
const Order = require("../models/order");
const { restaurantsData } = require("../seed/data");
const { getDishes, getOrders } = require("../seed/util");

async function seed() {
    await sequelize.sync({ force: true });

    const createdRestaurants = await Restaurant.bulkCreate(restaurantsData, { returning: true });

    const dishesToCreate = getDishes(createdRestaurants);
    const createdDishes = await Dish.bulkCreate(dishesToCreate, { returning: true });
    const ordersToCreate = getOrders(createdDishes);

    await Order.bulkCreate(ordersToCreate);

    console.log("Seeded Successfully");
    process.exit();
}
seed();

