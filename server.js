var express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose");


var app = express(),
    PORT = 8080 || process.env.PORT;

app.use(express.static("./public"));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

mongoose.connect("mongodb://heroku_37k44qg7:2gj60hsv0cklugoq2dtofer9u9@ds131312.mlab.com:31312/heroku_37k44qg7");

var db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    console.log("Mongoose connection successful!!!");
});

var routes = require("./routes/routes");

app.use("/", routes);


app.listen(PORT, function () {
    console.log("App's listening at " + PORT);
});