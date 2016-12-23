var express = require('express')
var router = express.Router()
var storage = {
  text: '',
  last_update_id : -1
}

router.get('/',(req,res) => {
  console.log('current Status -> ' + storage.text)
  res.send(storage).end()
})

router.post('/',(req,res) => {
  storage = {
    text: req.body.text,
    last_update_id : req.body.socket_id
  }
  console.log('current Status -> ' + storage.text)
  console.log('request client ID -> ' + storage.last_update_id)
  clients = Object.keys(req.app.get('socket-io').sockets.sockets)
  for(i=0; i< clients.length;i++){
    if(clients[i] != storage.last_update_id){
        console.log('emit for -> ' + clients[i])
        req.app.get('socket-io').to(clients[i]).emit('update-text-area',{text:storage.text})
    }
  }
  res.sendStatus(200)
})

module.exports = router
