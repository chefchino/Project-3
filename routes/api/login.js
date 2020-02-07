const router = require("express").Router();
const userController = require("../../Controller/userController.js")

        
console.log("I AM IN HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        router.route("/")
        .post(userController.findByUser)
        module.exports = router;