const express = require('express');
const router = express.Router();

const instructorcontroller = require('../controllers/instructorcontroller');

router.get('/', instructorcontroller.list);

router.post('/instructor', instructorcontroller.save);

router.get('/instructorD/:id', instructorcontroller.delete);

router.get('/instructorE/:id', instructorcontroller.edit);
router.post('/instructorU/:id', instructorcontroller.update);


module.exports = router;