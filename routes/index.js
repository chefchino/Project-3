var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

router.use("/api", (req, res, next) => {
    console.log("Login", req.url)
    next()
}, apiRoutes);
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;