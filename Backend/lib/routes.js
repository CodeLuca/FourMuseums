var data = {"Data1":1, "Data2":2, "Data3":3}

module.exports = function (app){
    
    app.get("/", function(req, res){
	console.log("Request For /")
	res.sendStatus(data)
    });

}
