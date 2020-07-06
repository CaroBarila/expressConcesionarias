const fs = require ('fs'); 
const autos = require('./autosController');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))
const sucursales={
    index:(req,res)=>{ 
    res.set({'content-type':'text/plain;charset=utf-8'}),
    res.write('               ******************   SUCURSALES:   ******************\n\n'),
    res.write('   '),
    res.write('Visite nuestras sucursales ó contáctenos, un asesor lo estará esperando: \n\n'),
    dbConcesionarias.forEach(function(sucursales){
    res.write( '     # ' + sucursales.sucursal + '\n\n' +'            ' + sucursales.direccion +'\n\n'+'                                                         * ' + sucursales.telefono + '\n\n' )         
 })
     res.end();  
},
    id:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        let idSucursales = req.params.sucursal
        dbConcesionarias.forEach(function(sucursal){
        if(sucursal.sucursal==idSucursales){
            res.write('       Bienvenido a nuestra sucursal: '+ sucursal.sucursal+ '\n\n' + '    #' + sucursal.direccion +'\n\n' + '           ' +sucursal.telefono + '\n\n'),
            res.write('Estos son los vehiculos disponibles en esta sucursal:  \n\ '+ '\n Contamos con ' + sucursal.autos.length + ' unidades disponibles \n'),
            sucursal.autos.forEach(function(auto){             
            res.write('\n')
            res.write('   # Marca: ' + auto.marca)
            res.write('\n')
            res.write('    Modelo: ' + auto.modelo)
            res.write('\n')
            res.write('     Año: ' + auto.anio)
            res.write('\n')
            res.write('      Color: ' + auto.color)
            res.write('\n')
        })  
         res.end();
     }                 
        })
        res.send('Por favor ingrese una Sucursal válida, \n\n Le recordamos que nuestras Sucursales habilitadas son : 3 de Febrero, Pilar, Quilmes, Lanus y San Miguel')
    } 
    }


module.exports= sucursales
