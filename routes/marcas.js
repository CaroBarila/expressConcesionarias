const express = require('express');
const router =express.Router();

const marcasController =require('../controller/marcasController')

router.get('/',marcasController.indexM)
router.get("/:marca", marcasController.idM)


module.exports = router;