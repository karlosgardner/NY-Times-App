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

mongoose.connect("mongodb://heroku_j1llp71j:ssfdo1pcndsusapikaqcnf2lec@ds127892.mlab.com:27892/heroku_j1llp71j");

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