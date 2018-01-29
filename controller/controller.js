var express = require("express");

var router = express.Router();

var clients = require("../models/models.js");

var nodemailer = require('nodemailer');

router.get("/", function(req, res) {
	res.render("index");
})


router.post("/", function(req, res) {
	clients.addClient(req.body.fname, req.body.lname, req.body.email, req.body.phone, req.body.message, function(result){

    console.log("This is in controller " + "fname: " + req.body.fname + " lname: " + req.body.lname + " email: " + req.body.email + " phone: " + req.body.phone + " message: " + req.body.message)


    var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'portfoliosite87@gmail.com',
	    pass: 'passmkm64'
	  }
	});

	var mailOptions = {
	  from: 'portfoliosite87@gmail.com',
	  to: 'mkmorfess@yahoo.com',
	  subject: 'New Potential Client - From Web Portfolio',
	  text: "Name: " + req.body.fname + " " + req.body.lname + 
	  "\nE-Mail: " + req.body.email + "\nPhone: " + req.body.phone + "\nMessage: " + req.body.message
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
   
    res.json({ id: result.insertId });
  });
});


module.exports = router;
