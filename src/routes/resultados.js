const express = require('express');
const router = express.Router();

const resultadoscontroller = require('../controllers/resultadoscontroller');

router.get('/', resultadoscontroller.list); 

router.post('/resultado', resultadoscontroller.save);

router.get('/resultadoD/:id', resultadoscontroller.delete); 

router.get('/resultadoE/:id', resultadoscontroller.edit);
router.post('/resultadoU/:id', resultadoscontroller.update);

module.exports = router;