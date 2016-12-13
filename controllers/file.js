var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var uploadFolder = path.resolve(__dirname + '/../uploads/');

router.get('/',function(req,res){

	fs.readdir(uploadFolder,(err,files) => {
		if(err){
			console.log(err);
			res.status(501).end();
		}
	 files = files.map((file) => {
			var fileInfo = fs.statSync(uploadFolder +'/'+file);
			return{
				name : file,
				time : fileInfo.ctime,
				size : fileInfo.size
			}
		}).sort((a,b) => b.time.getTime() - a.time.getTime());
		res.send(files).end();
	});
});
router.delete('/:fileName',function(req,res){
	 var fileName = req.params.fileName;
	 fs.unlink(uploadFolder + "/" +fileName,(err)=>{
		 if(err){
			 	res.sendStatus(501).end();
		 }
		 else{
			 	req.app.get('socket-io').emit('update-file-list')
			  res.sendStatus(200).end();
		 }
	 })
});


module.exports = router;
