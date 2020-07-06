const fs = require ('fs'); 
const dbMarcas = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))
const marcas = {
    indexM:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write('     ****  ENCUENTRE SU VEHÍCULO EN NUESTRAS SUCURSALES:   ****\n\n Visite nuestras sucursales, su marca favorita los está esperando: \n\n')
  let marcas =[]
  dbMarcas.forEach(function(sucursal){
      sucursal.autos.forEach(function(auto){
          if(!marcas.includes(auto.marca)){
              marcas.push(auto.marca)
          }
      })
  })
    res.write('Su vehículo')
    res.write('\n\n')
    marcas.forEach(function(marcas){
    res.write('  ')
    res.write('   '+ '#' + ' '+ marcas +'\n')
    })
    res.end();

        },


    idM:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})
    let idMarcas = req.params.marca
    res.write('Autos de marca: ')
    dbMarcas.forEach(function(sucursal){
    sucursal.autos.forEach(function(auto){
    if(auto.marca == idMarcas){
    res.write('\n\n      *' + auto.marca + '\n          ' + auto.modelo + '\n          ' + auto.anio + '\n')
     }    
     }) 
     }) 
         res.end() 
        },
        
    }

module.exports= marcas

