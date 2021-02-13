const express = require('express');
var router = express.Router();
const productController = require('../controllers/product-controller');
const security = require('../services/authenticate-service');
//router.use(security.authorize);

router.post('/create', productController.create);
router.get('/', productController.get);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);
router.delete('/:id', productController.deleteForever);
module.exports = router;