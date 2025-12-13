const router = require("express").Router();
const { searchDish } = require("../controllers/search");

// Define a GET route for searching dishes
// It uses the searchDish controller function to handle the request
router.get("/search/dishes", searchDish);


module.exports = router;
