const express = require('express');
const router = express.Router();

const crearprogramaController = require('../controllers/crearprogramaController');

router.get('/', crearprogramaController.list); 

router.post('/add', crearprogramaController.save);

router.get('/delete/:id', crearprogramaController.delete); // el /:id se le conoce como parametro de la ruta

router.get('/update/:id', crearprogramaController.edit);
router.post('/update/:id', crearprogramaController.update);



module.exports = router;