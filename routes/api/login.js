const router = require("express").Router();
var passport = require("./passport");

router.post("/",
    passport.authenticate("local"),
  function(req, res) {
    console.log("I'M IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    res.json(req.user);
  });


module.exports = router;