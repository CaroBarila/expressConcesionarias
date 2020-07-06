let fs = require ('fs'); 
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))
const autos ={
    indexCar:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('**********Esta es la gama de todos nuestros Vehiculos en Stock: ************' + '\n\n')
        dbConcesionarias.forEach(function(sucursal){
        sucursal.autos.forEach(function(autos){
            res.write('    *Marca:'+ autos.marca + '\n'+ '      Modelo: '+ autos.modelo + '\n' + '       Año :'
+ autos.anio + '\n'+ '         Color: ' + autos.color + '\n\n\n')
        })
        })
     res.end()
    },
    idAutoMarca:(req,res)=>{
        res.send('Falta completar id Auto Marca')
    },
    dato:(req,res)=>{
        res.send('Falta completar dato Auto')
    }

};

module.exports = autos
