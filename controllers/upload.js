/**
 * Created by youyue on 16/10/16.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
router.post('/', function(req, res) {

    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/../uploads/');
    form.on('fileBegin',function(name,file){
        file.path = form.uploadDir + file.name
    });
    // log any errors that occur
    form.on('error', function(err) {
        res.status(501).end('error');
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        res.end('success');
    });

    // parse the incoming request containing the form data
    form.parse(req);
});

module.exports = router;
