/**
 * Created by youyue on 16/10/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
router.use('/upload',require('./upload.js'))
router.use('/files',require('./file.js'))
router.use('/text',require('./text.js'))
router.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


module.exports = router;
