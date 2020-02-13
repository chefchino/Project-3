const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./signup");
const loginRoutes = require("./login");
const cartRoutes = require("./cart");

router.use("/products", productRoutes);
router.use("/signup", userRoutes);
router.use("/login", loginRoutes);
router.use("/cart", cartRoutes);


module.exports = router;
