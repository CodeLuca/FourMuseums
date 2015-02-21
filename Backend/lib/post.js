var request = require("request");

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var finalarray = [{"Name":"Oil painting","Date":1838,"Location":"Prints & Drawings Study Room, room 315, case 22, shelf L","Latitude":"51.28903100","Longitude":"-1.05240700","Place":"Black Gang Chine","pk":"O80194","image_id":"2006AT9299"},{"Name":"Dessert knife","Date":1854,"Location":"British Galleries, room 125b, case 2","Latitude":"51.50632100","Longitude":"-0.12714000","Place":"London","pk":"O78482","image_id":"2006AM6757"},{"Name":"Ticket","Date":1823,"Location":"British Galleries, room 120, case 22","Latitude":"51.50632100","Longitude":"-0.12714000","Place":"London","pk":"O77528","image_id":"2006AM7094"},{"Name":"Cabinet","Date":1683,"Location":"British Galleries, room 56c, case 3","Latitude":"52.88328900","Longitude":"-1.97685000","Place":"England","pk":"O78993","image_id":"2006AU9519"},{"Name":"Box","Date":1880,"Location":"Korea, room 47g, case 2","Latitude":"38.28134700","Longitude":"127.09559400","Place":"Korea","pk":"O18993","image_id":"2006AU4401"},{"Name":"Mug","Date":1642,"Location":"British Galleries, room 56d, case 3","Latitude":"51.50659500","Longitude":"-0.08939800","Place":"Montague Close","pk":"O20966","image_id":"2006AV6984"},{"Name":"Jug","Date":1545,"Location":"Medieval and Renaissance, room 63, case 7","Latitude":"50.89857600","Longitude":"7.03086800","Place":"Siegburg","pk":"O117268","image_id":"2009CB7455"},{"Name":"Vase","Date":1750,"Location":"Making Ceramics, room 143, case 25, shelf 3","Latitude":"25.49810000","Longitude":"118.23532100","Place":"Dehua","pk":"O180904","image_id":"2008BR9185"}]



module.exports = {
 post:function(){
// request("http://www.vam.ac.uk/api/json/museumobject/", function(error, response, body) {
 	 var body = [{"Name":"Oil painting","Date":1838,"Location":"Prints & Drawings Study Room, room 315, case 22, shelf L","Latitude":"51.28903100","Longitude":"-1.05240700","Place":"Black Gang Chine","pk":"O80194","image_id":"2006AT9299"},{"Name":"Dessert knife","Date":1854,"Location":"British Galleries, room 125b, case 2","Latitude":"51.50632100","Longitude":"-0.12714000","Place":"London","pk":"O78482","image_id":"2006AM6757"},{"Name":"Ticket","Date":1823,"Location":"British Galleries, room 120, case 22","Latitude":"51.50632100","Longitude":"-0.12714000","Place":"London","pk":"O77528","image_id":"2006AM7094"},{"Name":"Cabinet","Date":1683,"Location":"British Galleries, room 56c, case 3","Latitude":"52.88328900","Longitude":"-1.97685000","Place":"England","pk":"O78993","image_id":"2006AU9519"},{"Name":"Box","Date":1880,"Location":"Korea, room 47g, case 2","Latitude":"38.28134700","Longitude":"127.09559400","Place":"Korea","pk":"O18993","image_id":"2006AU4401"},{"Name":"Mug","Date":1642,"Location":"British Galleries, room 56d, case 3","Latitude":"51.50659500","Longitude":"-0.08939800","Place":"Montague Close","pk":"O20966","image_id":"2006AV6984"},{"Name":"Jug","Date":1545,"Location":"Medieval and Renaissance, room 63, case 7","Latitude":"50.89857600","Longitude":"7.03086800","Place":"Siegburg","pk":"O117268","image_id":"2009CB7455"},{"Name":"Vase","Date":1750,"Location":"Making Ceramics, room 143, case 25, shelf 3","Latitude":"25.49810000","Longitude":"118.23532100","Place":"Dehua","pk":"O180904","image_id":"2008BR9185"}]


//   	for (i=0; i < 8; i++){
//   		body1 = body
// //  		x = randomInt(0, body1.length)
// 		x = i
// console.log(x)
// 		if (body1[x].location != "In Storage"){

//   		var object = {
//   			"Name": body1[x].object,
//   			"Date": body1[x].year_start,
//   			"Location": body1[x].location,
//   			"Latitude": body1[x].latitude,
//   			"Longitude": body1[x].longitude,
//   			"Place": body1[x].place,
//   			"pk": body1[x].object_number,
//   			"image_id": body1[x].primary_image_id}

//   		  		finalarray.push(object)
// 		}
//   	}
// });
return finalarray
}
}