const express = require('express');
const router = express.Router();

const fichascontroller = require('../controllers/fichascontroller');

router.get('/', fichascontroller.list); 

router.post('/add', fichascontroller.save);

router.get('/delete/:id', fichascontroller.delete); // el /:id se le conoce como parametro de la ruta

router.get('/update/:id', fichascontroller.edit);
router.post('/update/:id', fichascontroller.update);



module.exports = router;