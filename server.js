var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var app =express();
var PORT = process.env.PORT || 3001;

const db= require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(routes)
app.use("/",routes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productlist")

app.listen(PORT, function() {
    console.log(`API Sever is listening on PORT ${PORT}!`)
});