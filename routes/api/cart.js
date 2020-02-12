const router = require("express").Router();
const productController = require("../../Controller/productController.js");

router.route("/:id")
.get(productController.putInCart)


module.exports = router;