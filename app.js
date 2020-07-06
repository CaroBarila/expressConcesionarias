const express = require('express'); //requiero el modulo

const app = express(); //tomo la ejecucion de express

app.listen(3030,()=>console.log("El servidor esta corriendo en el puerto 3030")) 

const rutaAuto = require('./routes/autos'); 

const rutaHome = require('./routes/home'); 

const rutaMarcas = require('./routes/marcas');

const rutaSucursales = require('./routes/sucursales');  


app.use('/',rutaHome);
app.use('/autos',rutaAuto);
app.use('/marcas',rutaMarcas);
app.use('/sucursales',rutaSucursales);

