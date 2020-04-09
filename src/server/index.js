var bodyParser = require('body-parser')
var http = require('http')
var express = require('express')
var Routing = require('./requestRouting.js')

var PORT = 4200
var app = express()

var Server = http.createServer(app)

app.use('/', Routing)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



Server.listen(PORT, function(){
  console.log('Ya esta disponible: '+ PORT)
})

//httpdispatcher
//module.exports = requestListener
