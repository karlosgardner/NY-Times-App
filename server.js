var express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose");


var app = express(),
    PORT = process.env.PORT || 8080; 

app.use(express.static("./public"));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

mongoose.connect("mongodb://heroku_vbn9f4hg:4b4iaf53ug89v32sc8ffbnbhtc@ds037467.mlab.com:37467/heroku_vbn9f4hg");

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