const express = require('express');
const router = express.Router();

const ambientescontroller = require('../controllers/ambientescontroller');

router.get('/', ambientescontroller.list); 

router.post('/ambiente', ambientescontroller.save);

router.get('/ambienteD/:id', ambientescontroller.delete); 

router.get('/ambienteE/:id', ambientescontroller.edit);
router.post('/ambienteU/:id', ambientescontroller.update);

module.exports = router;