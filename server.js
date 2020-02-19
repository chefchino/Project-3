var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var passport = require("./routes/api/passport");
var session = require("express-session");
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "unique Key", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// console.log(routes)
app.use("/", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

mongoose.connect(process.env.MONGODB_URI || "mongodb://herokuCommerce:herokuCommerce1@ds263928.mlab.com:63928/heroku_t923rhsj")

app.listen(PORT, function () {
    console.log(`API Sever is listening on PORT ${PORT}!`)
});