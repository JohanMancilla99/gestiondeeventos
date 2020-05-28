const express = require('express');
const router = express.Router();

const competenciascontroller = require('../controllers/competenciascontroller');

router.get('/', competenciascontroller.list); 

router.post('/add', competenciascontroller.save);

router.get('/delete/:id', competenciascontroller.delete); // el /:id se le conoce como parametro de la ruta

router.get('/update/:id', competenciascontroller.edit);
router.post('/update/:id', competenciascontroller.update);



module.exports = router;