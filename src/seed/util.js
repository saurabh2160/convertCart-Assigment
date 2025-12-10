const { dishes } = require("../seed/data");

function getDishes(createdRestaurants) {
    const dishesToCreate = [];
    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];
        const restaurantIndex = i % createdRestaurants.length;
        const restaurant = createdRestaurants[restaurantIndex];

        dishesToCreate.push({
            name: dish.name,
            price: dish.price,
            restaurantId: restaurant.id
        });
    }
    return dishesToCreate;
}
function getOrders(createdDishes) {
    const ordersToCreate = [];
    for (const dish of createdDishes) {
        const numberOfOrders = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < numberOfOrders; i++) {
            ordersToCreate.push({ dishId: dish.id });
        }
    }
    return ordersToCreate;
}
module.exports = { getDishes, getOrders };