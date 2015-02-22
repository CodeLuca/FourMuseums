var request = require("request");
var aBody, json;

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var finalarray = []; 
var finalarray2 = []; 
var ids = [];
var names = [];

module.exports = {
 post:function(){
request("http://www.vam.ac.uk/api/json/museumobject/", function(error, response, body) {
   
  body = JSON.parse(body)

    for (i=0; i <= 10; i++){
      body1 = body.records
      x = randomInt(0, body1.length)
      ids[i] = body1[x].pk;
      names[i] = body1[x].fields.object;
      var object = {
        "Name": body1[x].fields.object,
        "Location": body1[x].fields.location,
        "Latitude": body1[x].fields.latitude,
        "Longitude": body1[x].fields.longitude,
        "Place": body1[x].fields.Place,
        "pk": body1[x].pk,
        "image_id": body1[x].fields.primary_image_id
      }
      finalarray.push(object)
    }
});
return finalarray
}, 


img:function(){
request("http://www.vam.ac.uk/api/json/museumobject/", function(error, response, body) {
  body = JSON.parse(body)
   for(i = 0; i <= 10; i++){
       body1 = body.records;
    var object = {
        "QR_URL": "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + ids[i],
        "Name": names[i]
    }
        finalarray2.push(object);
    }
});
return finalarray2
}
}