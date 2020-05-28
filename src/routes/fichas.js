const express = require('express');
const router = express.Router();

const fichascontroller = require('../controllers/fichascontroller');

router.get('/', fichascontroller.list); 

router.post('/fichas', fichascontroller.save);

router.get('/fichasD/:id', fichascontroller.delete); // el /:id se le conoce como parametro de la ruta

router.get('/fichasE/:id', fichascontroller.edit);
router.post('/fichasU/:id', fichascontroller.update);



module.exports = router;