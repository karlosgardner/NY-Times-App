/**
 * Created by esterlingaccime on 6/7/17.
 */
var express = require("express"),
    router = express.Router(),
    path = require("path");


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = router;