const router = require("express").Router();
const productController = require("../../Controller/productController.js");

// Matches with "/api/product"
router.route("/")
  .get(productController.findAll)
// Matches with "/api/product/:id"
router
  .route("/:id")
  .get(productController.findById)
  // .put(productController.update)
  .delete(productController.remove);

module.exports = router;
