const router = require("express").Router();
const productRoutes = require("./products");

// Book routes
router.use("/products", productRoutes);

module.exports = router;
