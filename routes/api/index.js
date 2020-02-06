const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./signup");

// Book routes
router.use("/products", productRoutes);
router.use("/signup", userRoutes);

module.exports = router;
