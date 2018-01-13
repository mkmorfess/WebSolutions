var mysql = require("mysql");

var connection = mysql.createConnection({

	host: "localhost",
	user: "root",
	password: "root",
	database: "messages"

})

connection.connect(function(err){

	if (err) throw err;
	console.log("Connected");

});


module.exports = connection;