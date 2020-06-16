const express = require('express');
const router = express.Router();

const actividadProyectoController = require('../controllers/actividadProyectoController');

router.get('/', actividadProyectoController.list); 

router.post('/actProyect', actividadProyectoController.save);

// router.get('/actProyectD/:id', actividadProyectoController.delete); // el /:id se le conoce como parametro de la ruta

// router.get('/actProyectE/:id', actividadProyectoController.edit);

// router.post('/actProyectU/:id', actividadProyectoController.update);

module.exports = router;