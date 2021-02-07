const express = require('express');
var router = express.Router();
const userController = require('../controllers/customer-controllers');

router.post('/create', userController.post);
router.get('/', userController.get);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.deleteForever);

module.exports = router;