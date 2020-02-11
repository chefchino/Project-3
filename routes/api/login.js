const router = require("express").Router();
var passport = require("./passport");
console.log(passport.authenticate("local"))

// app.post("/api/login",
// passport.authenticate("local"),
// function(req, res) {
//   res.json(req.user);
// });
router.post("/",
    passport.authenticate("local"),
    // req=>console.log("this far"),
    // function (req, res, next) {
    //   // call passport authentication passing the "local" strategy name and a callback function
    //   passport.authenticate('local', function (error, user, info) {
    //     // this will execute in any case, even if a passport strategy will find an error
    //     // log everything to console
    //     console.log(error);
    //     console.log(user);
    //     console.log(info);
  
    //     if (error) {
    //       res.status(401).send(error);
    //     } else if (!user) {
    //       res.status(401).send(info);
    //     } else {
    //       next();
    //     }
  
    //     // res.status(401).send(info);
    //   })(req, res);
    // },
  function(req, res) {
    console.log("I'M IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    res.json(req.user);
  }
  
  )


module.exports = router;