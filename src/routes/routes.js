const router = require("express").Router();
const { searchDish } = require("../controllers/search");

router.get("/search/dishes", searchDish);

router.get("/seed", async (req, res) => {
  const {seed} = require("../seed/seed");
  await seed();
  res.send("Seed completed!");
});

module.exports = router;
