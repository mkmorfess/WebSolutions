var connection = require("../connections/connection.js");

var clients = {

	addClient: function(fname, lname, email, phone, message, cb) {
	connection.query("INSERT INTO clients (fname, lname, email, phone, message) VALUES ?", [fname, lname, email, phone, message], function(err,data){
		if (err) throw err;
		cb(data);

	})
}
}
module.exports = clients;