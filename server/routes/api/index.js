const router = require("express").Router();
const artist = require("./artistRoutes");
const customer = require("./customerRoutes");

router.use("/artist", artist);
router.use("/customer", customer);

module.exports = router;
