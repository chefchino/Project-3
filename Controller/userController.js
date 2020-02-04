const db = require("../models");


module.exports = {

    create: function(req, res) {
        db.User
        .create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
}