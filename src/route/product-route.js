const express = require('express');
var router = express.Router();
const productController = require('../controllers/product-controller');

router.post('/create', productController.create);
router.get('/', productController.get);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);
router.delete('/:id', productController.deleteForever);
module.exports = router;