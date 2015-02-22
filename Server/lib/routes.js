var postfile = require('./post.js');

var data = postfile.post()
var data2 = postfile.img()

module.exports = function (app){
    
    app.get("/", function(req, res){
	console.log("Request For /")
	res.send(data)
    });

    app.get("/add", function(req, res){
    	console.log("Request For /add")
    	console.log("PK CODE IS: " + req.query.code)
    });

    app.get("/img", function(req, res){
    	console.log('request for /img')
    	res.send(data2);
    });

}
