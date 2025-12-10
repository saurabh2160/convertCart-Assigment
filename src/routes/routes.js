const router = require("express").Router();
const { searchDish } = require("../controllers/search");

router.get("/search/dishes", searchDish);

module.exports = router;
