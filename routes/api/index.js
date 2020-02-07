const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./signup");
const loginRoutes = require("./login");

// Book routes
router.use("/products", productRoutes);
router.use("/signup", userRoutes);
router.use("/login", loginRoutes);


module.exports = router;
