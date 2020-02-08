const db = require("../models");
const bcrypt= require("bcryptjs")

module.exports = {
    create: function (req, res) {

        const {
            firstName,
            lastName,
            userName,
            passWord,
            email,
            street,
            city,
            state,
            zipcode
        } = req.body;
        db.User
            .create({
                firstName,
                lastName,
                userName,
                passWord,
                email,
                street,
                city,
                state,
                zipcode
            })
        .then(dbUser =>res.json(dbUser)
            )
        .catch(err =>res.status(422).json(err))
    },
    findByUser: function (req, res) {
        db.User
        .findOne({
            userName: req.body.userName
        })
        .then(user => {
            console.log("I'M IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", user)
            if (user) {
                if (bcrypt.validPassword(this.passWord)===user.passWord) {
                    res.json({
                        success: true,
                        message: "Login Successful!"
                    })
                }
            } else {
                res.json({
                    success: false,
                    message:"Error User Does NOT Exists"})
                }
            })
        }
}
