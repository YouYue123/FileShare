var express = require('express')
var cfenv = require('cfenv')
var bodyParser = require('body-parser')
var fs = require('fs')
let wav = require('wav')
var rs = new require('stream').Readable();
var toBuffer = require('typedarray-to-buffer')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var voiceAuthen = require('./helpers/voiceAuthen.js')
var fileWriter = new wav.FileWriter('./uploads/test.wav');
var socketList = []
app.set('socket-io',io)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//voiceAuthen.voiceToText(rs)
io.on('connection',socket=>{
  console.log(socket.id + ' connected')
  socket.on('audioChunk', (data) => {
      //var bufView = new Uint8Array(data.voice)
      //wsstream.write(data.voice)
      console.log(data.voice)
      //const voiceData = new Float32Array(data.voice)
      // wav.encode(voiceData,{})
      // wsstream.write(voiceData.buffer)
      // //rs.push(data.data)
      // stream.pipe(fileWriter);
      // stream.on('end', function() {
      //   fileWriter.end();
      // });
      fileWriter.write(data.voice)
      //fileWriter.end()
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
