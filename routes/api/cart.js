const router = require("express").Router();
const userController = require("../../Controller/userController");

router.route("/:id")
.get(userController.pullFromCart)
.post(userController.putInCart)
.delete(userController.emptyCart)
// router.route("/:id/index")
.put(userController.remove)


module.exports = router;