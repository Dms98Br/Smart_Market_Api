const express = require('express');
var router = express.Router();
const controllers = require('../controllers/list-controllers');

router.post('/create', controllers.create);
router.get('/', controllers.get);
router.get('/:id', controllers.getById);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.deleteForever);
module.exports = router;