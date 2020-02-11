const router = require("express").Router();
var passport = require("./passport");
console.log(passport.authenticate("local"))

router.post("/",
    req=>console.log("this far"),
//   passport.authenticate("local",
//   function(req, res) {
//     console.log("I'M IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//     res.json(req.user);
//   }
  
//   )
  )

module.exports = router;