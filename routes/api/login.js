const router = require("express").Router();
const userController = require("../../Controller/userController.js")

        
router.route("/")
.post(userController.findByUser)
// console.log("I AM IN HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
module.exports = router;