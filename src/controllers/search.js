const Restaurant = require("../models/restaurant");
const Dish = require("../models/dish");
const Order = require("../models/order");
const { Sequelize } = require("sequelize");

const searchDish = async (req, res) => {
    // Handle incoming request to search for dishes
    try {
        // Extract query parameters: name, minPrice, maxPrice
        const { name, minPrice, maxPrice } = req.query;

        // Validate required parameters
        if (!name || !minPrice || !maxPrice) {
            return res.status(400).json({ error: "name, minPrice, maxPrice are required" });
        }

        // Find dishes matching the criteria, including associated restaurant and orders
        const results = await Dish.findAll({
            where: {
                name: { [Sequelize.Op.like]: `%${name}%` },
                price: { [Sequelize.Op.between]: [minPrice, maxPrice] }
            },
            include: [
                { model: Restaurant },
                { model: Order }
            ]
        });

        // Map and transform the results into a desired format
        const mapped = results
            .map(d => ({
                restaurantId: d.Restaurant.id,
                restaurantName: d.Restaurant.name,
                city: d.Restaurant.city,
                dishName: d.name,
                dishPrice: d.price,
                orderCount: d.Orders.length
            }))
            // Sort by order count in descending order
            .sort((a, b) => b.orderCount - a.orderCount)
            // Limit to the top 10 results
            .slice(0, 10);

        // Send the mapped results as a JSON response
        res.json({ restaurants: mapped });
    } catch (err) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: err.message });
    }
};

module.exports = { searchDish };
