const db = require("../models");
module.exports = {
  findAll:
   function(req, res) {
    db.Product
      .find(req.params.id)
      .sort({ date: -1 })
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
},
  findByTitle: function(req, res) {
    db.Product
      .find({$text: {$search: req.params.id}})
      .then(dbProduct =>{
        res.json(dbProduct)})
      .catch(err => {res.status(422).json(err)
      console.log(err)
      });
  },
  create: function(req, res) {
    db.Product
      .create(req.body)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbProduct => dbProduct.remove())
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  }
};
