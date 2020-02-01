var express = require("express");
var app =express();
var axios = require("axios");
var PORT = process.env.PORT || 3001;
var routes =


app.use(routes)



app.listen(PORT, function() {
    console.log(`API Sever is listening on PORT ${PORT}!`)
})