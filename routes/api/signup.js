const router = require("express").Router();
const userController = require("../../Controller/userController.js")

        
        router.route("/")
        .post(userController.create)
        module.exports = router;