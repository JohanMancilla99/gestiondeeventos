const express = require('express');
const router = express.Router();

const programaController = require('../controllers/programaController');

router.get('/', programaController.list);

router.post('/programa', programaController.save);

router.get('/programaD/:id', programaController.delete); // el /:id se le conoce como parametro de la ruta

router.get('/programaE/:id', programaController.edit);

router.post('/programaU/:id', programaController.update);

module.exports = router;