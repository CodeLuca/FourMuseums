var express = require("express");
var app = express()
var server = require("http").createServer(app)

var MongoClient = require("mongodb").MongoClient;


var routes = require("./lib/routes.js")(app)


var port = "80"
app.use(express.static('views'));
server.listen(port);
console.log("Listening at port %s", port)
