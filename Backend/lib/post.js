var request = require("request");

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var finalarray = []; 


module.exports = {
 post:function(){
request("http://www.vam.ac.uk/api/json/museumobject/", function(error, response, body) {
 	 
	body = JSON.parse(body)

  	for (i=0; i <= 11; i++){
  		body1 = body.records
//  		x = randomInt(0, body1.length)
		x = i

		if (body1[x].fields.location != "In Storage"){

  		var object = {
  			"Name": body1[x].fields.object,
  			"Date": body1[x].fields.year_start,
  			"Location": body1[x].fields.location,
  			"Latitude": body1[x].fields.latitude,
  			"Longitude": body1[x].fields.longitude,
  			"Place": body1[x].fields.place,
  			"pk": body1[x].fields.object_number,
  			"image_id": body1[x].fields.primary_image_id}

  		  		finalarray.push(object)
		}
  	}
});
return finalarray
}
}