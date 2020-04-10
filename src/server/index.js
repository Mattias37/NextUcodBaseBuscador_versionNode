//modulos importados
var bodyParser = require('body-parser')
var http = require('http')
var express = require('express')
var path = require('path')
var Routing = require('./api/index.js')
var serveStatic = require('serve-static')


//Variables Globales
var PORT = PORT = process.env.PORT || 4200
var app = express()

var Server = http.createServer(app)

app.use('/', Routing)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//app.use(serveStatic(path.join(__dirname, '../client/index.html')))
var what = path.join(__dirname, '../client/index.html')

console.log(what)
Server.listen(PORT, function(){
  console.log('Ya esta disponible: '+ PORT)
})

//httpdispatcher
//module.exports = requestListener
