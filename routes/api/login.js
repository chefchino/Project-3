const router = require("express").Router();
const userController = require("../../Controller/userController.js")

router.route("/")
.post(userController.findByUser)

module.exports = router;