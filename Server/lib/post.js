var request = require("request");

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

var dataArray = [];
var qrArray = [];

module.exports = {
  post:function(){
    request("http://www.vam.ac.uk/api/json/museumobject/", function(error, response, body) {
      body = JSON.parse(body)
      for (i=0; i <= 10; i++){
        body1 = body.records
        var object = {
          "Name": body1[i].fields.object,
          "Date": body1[i].fields.year_start,
          "Location": body1[i].fields.location,
          "Latitude": body1[i].fields.latitude,
          "Longitude": body1[i].fields.longitude,
          "Place": body1[i].fields.Place,
          "pk": body1[i].pk,
          "image_id": body1[i].fields.primary_image_id
        }
        dataArray.push(object)
      }
    });
    return dataArray
  }, 

  qr:function(){
    request("http://www.vam.ac.uk/api/json/museumobject/", function(error, response, body) {
      body = JSON.parse(body)
      for(i = 0; i <= 14; i++){
      body1 = body.records;
        var object = {
          "QR_URL": "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + body1[i].pk,
          "Name": body1[i].fields.object
        }
        qrArray.push(object);
      }
    });
    return qrArray
  }
}