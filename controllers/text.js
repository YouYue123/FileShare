var express = require('express')
var router = express.Router()
var storage = {
  text: ''
}

router.get('/',(req,res) => {
  console.log('current Status -> ' + storage.text)
  res.send(storage).end()
})

router.post('/',(req,res) => {
  storage = {
    text: req.body.text
  }
  console.log('current Status -> ' + storage.text)
  req.app.get('socket-io').emit('update-text-area',{text:storage.text})
  res.sendStatus(200)
})

module.exports = router
