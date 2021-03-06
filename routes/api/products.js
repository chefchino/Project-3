const router = require("express").Router();
const productController = require("../../Controller/productController.js");

router.route("/")
  .get(productController.findAll)

router
  .route("/:id")
  .get(productController.findByTitle)
  .delete(productController.remove);

module.exports = router;
