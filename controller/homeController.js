const fs = require ('fs'); 

let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8')) 
const home={
    /*let cantidad= [];
    dbConcesionarias.forEach(function(sucursales){
        cantidad += sucursales.autos.length})*/
    
    /*let cantidad = 0;
    concesionarias.forEach(element => {
    cantidad += element.autos.length})*/

    index:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write('Bienvenido: \n\n Somos el primer megadealer del país que comercializa las principales marcas de vehículos 0km del mercado automotor a través de concesionarios propios.\n\n  ***SUCURSALES*** \n\n')
    
        dbConcesionarias.forEach(function(sucursales){
             res.write('  '+ '#' + ' '+sucursales.sucursal + '\n\n')
            })
       res.end();
    },
   
}


module.exports = home;