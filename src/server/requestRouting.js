//var dispacher = require('http-dispatcher')
//var http           = require('http');
//funcion que se ejecuten cuando haya una petición al servidor
//function requestListener(req,res){
//console.log('Hola')


//  dispacher.onGet('/users', function(req,res){
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Page One');
//  });

//    dispacher.onGet('/admin', function(req,res){
//      res.writeHead(200, {'Content-type':'text/plain'})
//      res.end('estas en el modulo de administradores')
//    })

//    dispacher.onGet('/dashboard', function(req,res){
//      res.writeHead(200, {'Content-type':'text/plain'})
//      res.end('estas en el modulo de info')
//    })
//    dispacher.onError( function(req,res){
//      res.writeHead(400, {'Content-type':'text/plain'})
//      res.end('No se encontro el ')
//    })

//    dispacher.dispatch(req, res)
//}

//module.exports = requestListener;


//Como usar Routing con express

var express = require('express')
var path = require('path')
var Router = express.Router()

var viewpath = path.join(__dirname, './') + 'public/'
var mom = path.join(viewpath, 'admin.html')

Router.get('/users', function(req, res){
  console.log(__dirname)
  var u = path.join(__dirname, './public', 'users.html')
  console.log(u)
  res.sendFile(path.join(__dirname, './public', 'users.html'));
  //res.end()
})

Router.get('/admin', function(req, res){
  console.log(viewpath)
  console.log(mom)
  res.sendFile(mom);
  res.end();
});

Router.get('/dashboard', function(req, res){
  res.send('estas en el el modulo dashboard')
  res.end()
})

Router.all('/*', function(req, res){
  res.send('No se encontro el recurso')
  res.end()
})

module.exports = Router
