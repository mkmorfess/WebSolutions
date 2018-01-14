var connection = require("../connections/connection.js");

var clients = {

	addClient: function(fname, lname, email, phone, message, callback) {
	connection.query("INSERT INTO clients (fname, lname, email, phone, message) VALUES (?, ?, ?, ?, ?)", [fname, lname, email, phone, message], function(err,data){
	console.log("This is in models.js " + fname, lname, email, phone, message)
		if (err) {
			throw err;
		} 
		callback(data);

		})
	}
}

module.exports = clients;