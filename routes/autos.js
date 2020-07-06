const express = require('express');
const router = express.Router();

const autosController =require('../controller/autosController')
//acá va el código
router.get('/', autosController.indexCar);
router.get('/:marca',autosController.idAutoMarca);
router.get('/:marca/:dato?',autosController.dato);

module.exports = router;