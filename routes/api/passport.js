var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../../models");

passport.use(new LocalStrategy(
  {
    usernameField: "userName",
    passwordField: "passWord"
  },
  function(userName, passWord, done) {
    console.log("trying", userName, passWord)
    db.User.findOne({
      userName: userName
    })
    .then(function(dbUser) {
      console.log(dbUser.validPassword(passWord))
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect userName."
        });
      }
      else if (!dbUser.validPassword(passWord)) {
        console.log("I'M IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!##$")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;