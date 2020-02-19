const db = require("../models");
const bcrypt = require("bcryptjs")
const passportL = require("passport-local");

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
            .then(dbUser => res.json(dbUser)
            )
            .catch(err => res.status(422).json(err))
    },
    findByUser: function (req, res) {
        db.User
            .findOne({
                userName: req.body.userName
            })
            .then(user => {
                if (user) {
                }
            })
    },
    putInCart: function (req, res) {
        db.User
            .findOne({ _id: req.params.id })
            .then(dbUser => {
                dbUser.cart = req.body
                return dbUser.save()
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    pullFromCart: function (req, res) {
        db.User
            .findOne({ _id: req.params.id })
            .then(dbUser => {
                return dbUser.cart
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    emptyCart: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, { $set: { cart: [] } })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
    // remove: function(req, res) {
    //     db.User
    //       .findById({ _id: req.params.id })
    //       .then(dbUser => {
    //           dbUser.cart.splice(req.params.index, 1)
    //           return dbUser.save()
    //       })
    //       .then(dbUser => res.json(dbUser))
    //       .catch(err => res.status(422).json(err));
    //   }
};