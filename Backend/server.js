var express = require("express");
var app = express()
var server = require("http").createServer(app)


var routes = require("./lib/routes.js")(app)


var port = process.env.PORT || 3000;
// var port = 3000;
app.use(express.static('views'));
server.listen(port);
console.log("Listening at port thing")
