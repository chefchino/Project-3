var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

router.use("/api", apiRoutes);

// router.get("/api", function(req, res) {
//     console.log("I'm IN")
//     res.json({roundtrip: true})
// })

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;