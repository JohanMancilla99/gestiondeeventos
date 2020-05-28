const express = require('express')
const router = express.Router();

const proyectocontroller = require('../controllers/proyectocontroller');

router.get('/', proyectocontroller.list);

router.post('/proyecto', proyectocontroller.save);

// router.get('/proyectoD/:id', proyectocontroller.delete);

// router.get('/proyectoE/:id', proyectocontroller.edit);

// router.post('/proyectoU/:id', proyectocontroller.update);

module.exports = router;