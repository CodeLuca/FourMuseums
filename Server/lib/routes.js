var postfile = require('./post.js');

var mainData = postfile.post()
var qrData = postfile.qr()

module.exports = function (app){
    
    app.get("/", function(req, res){
	   console.log("Request For /")
	   res.send(mainData)
    });

    app.get("/add", function(req, res){
    	console.log("Request For /add")
    	console.log("PK CODE IS: " + req.query.code)
    });

    app.get("/qr", function(req, res){
    	console.log('Request for /qr')
    	res.send(qrData);
    });

}
