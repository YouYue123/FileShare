var express = require('express')
var cfenv = require('cfenv')
var path = require('path')
var bodyParser = require('body-parser')
var fs = require('fs')
let wav = require('wav')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var voiceAuthen = require('./helpers/voiceAuthen.js')
var socketList = []
app.set('socket-io',io)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var Stream = require('stream');
var stream = new Stream;
stream.readable = true;
voiceAuthen.voiceToText(stream)
io.on('connection',socket=>{
  console.log(socket.id + ' connected')
  socket.on('audioChunk', (data) => {
      stream.emit('data',data.voice)
    }
  )
})

app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*")
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
       next()
});
app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/uploads'))
app.use(require('./controllers'))
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv()
// start server on the specified port and binding host
server.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log(appEnv.name + " server starting on " + appEnv.url)
})
