var fs = require('fs')
    path = require('path')


module.exports = {
  //Se guarda info a la base de datos.
  saveData: function(dataType,newData, data ){

  },
  //Se recoge la info. activo es si el boton mostrar más esta activdado.
  //p1 es precio inicial. p2 precio maximo. ciudad y tipo se explican solos.
  getData: function(activo, p1, p2, ciudad, tipo){
    //Se mete la ruta en una variable.
    var dataPath = __dirname + path.join(data.json)
    return new promise(function(resolve, reject){
        fs.readFile(dataPath, 'utf8', function(err, readData){
          if(err) reject(err)
          resolve(JSON.parse(readData))
        })
    })
  }
}
