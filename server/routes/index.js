const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Handle 404 error for all routes that reach this point
router.use((req, res) => {
  res.status(404).send("404 nerd");
});

module.exports = router;
