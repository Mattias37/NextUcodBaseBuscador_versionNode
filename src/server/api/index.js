var express = require('express')
var path = require('path')
var Router = express.Router()

var base = express.static(path.join(__dirname, '../../client/index.html'))
console.log(base)
Router.all('/', function(req, res){
  res.sendFile('../src/client/index.html' , function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', base)
    }
  })
})

module.exports = Router

/*
(function(document, window, undefined, $){
  (function(){
    return info = {
      // el codigo
      apiURL: 'api/',
      $btnActivo: $('#checkPersonalizada'),
      $ciudad: $('#ciudad'),
      $tipo: $('#tipo'),
      $rangoPrecio: $('#rangoPrecio'),

      init: function(){
        var self = this
        this.fetchInfo(function(info){
          self.renderInfo(info)
        })
      },
      fetchInfo: function(){
        var self = this
        var endpoint = self.apiURl + 'data.json'
        self.ajaxRequest(endpoint, 'GET', {})
            .done(function(data){
              var i = data.current
              self.renderInfo(i)
            }).fail(function(err){
              console.log(err)
            })
      },
      ajaxRequest: function(url, type, data){
        return $.ajax({
          url: url,
          type: type,
          data: data
        })
      },
      renderInfo: function(){
        var self = this
        var lista = $('.info')
        var listaTemplate = '<p>Hola!!!</p>'


      }
    }
  })
})*/
