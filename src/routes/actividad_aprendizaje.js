const express = require('express');
const router = express.Router();

const actividadAprendizajeController = require('../controllers/actividadAprendizajeController');

router.get('/', actividadAprendizajeController.list); 

router.post('/actAprend', actividadAprendizajeController.save);

// router.get('/actAprendD/:id', actividadAprendizajeController.delete); // el /:id se le conoce como parametro de la ruta

// router.get('/actAprendE/:id', actividadAprendizajeController.edit);

// router.post('/actAprendU/:id', actividadAprendizajeController.update);

module.exports = router;