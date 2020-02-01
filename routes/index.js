var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.export = router;