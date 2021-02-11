const express = require('express');
var router = express.Router();
const userController = require('../controllers/customer-controllers');

router.post('/create', userController.create);
router.get('/', userController.get);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.put('/updatePassword/:id', userController.updatePassword);
router.delete('/:id', userController.deleteForever);

module.exports = router;