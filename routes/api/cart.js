const router = require("express").Router();
const userController = require("../../Controller/userController");

router.route("/:id")
.get(userController.pullFromCart)
.post(userController.putInCart)
.delete(userController.emptyCart)
.delete(userController.remove)


module.exports = router;