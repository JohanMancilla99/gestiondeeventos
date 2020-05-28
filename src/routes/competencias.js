const express = require('express');
const router = express.Router();

const competenciascontroller = require('../controllers/competenciascontroller');

router.get('/', competenciascontroller.list); 

router.post('/competencias', competenciascontroller.save);

router.get('/competenciasD/:id', competenciascontroller.delete); // el /:id se le conoce como parametro de la ruta

router.get('/competenciasE/:id', competenciascontroller.edit);
router.post('/competenciasU/:id', competenciascontroller.update);



module.exports = router;