const Restaurant = require("../models/restaurant");
const Dish = require("../models/dish");
const Order = require("../models/order");
const { Sequelize } = require("sequelize");

const searchDish = async (req, res) => {
    try {
        const { name, minPrice, maxPrice } = req.query;

        if (!name || !minPrice || !maxPrice) {
            return res.status(400).json({ error: "name, minPrice, maxPrice are required" });
        }

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

        const mapped = results
            .map(d => ({
                restaurantId: d.Restaurant.id,
                restaurantName: d.Restaurant.name,
                city: d.Restaurant.city,
                dishName: d.name,
                dishPrice: d.price,
                orderCount: d.Orders.length
            }))
            .sort((a, b) => b.orderCount - a.orderCount)
            .slice(0, 10);

        res.json({ restaurants: mapped });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { searchDish };
