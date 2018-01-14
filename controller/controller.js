var express = require("express");

var router = express.Router();

var clients = require("../models/models.js");

router.get("/", function(req, res) {
	res.render("index");
})


router.post("/", function(req, res) {
	clients.addClient(req.body.fname, req.body.lname, req.body.email, req.body.phone, req.body.message, function(result){

    console.log("This is in controller " + "fname: " + req.body.fname + " lname: " + req.body.lname + " email: " + req.body.email + " phone: " + req.body.phone + " message: " + req.body.message)
   
    res.json({ id: result.insertId });
  });
});

	


module.exports = router;
