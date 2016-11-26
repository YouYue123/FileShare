var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
router.get('/',function(req,res){
	var uploadFolder = path.resolve(__dirname + '/../uploads/');

	fs.readdir(uploadFolder,(err,files) => {
		if(err){
			console.log(err);
			res.status(501).end();
		}
		res.send(files);
	});
});

module.exports = router;
