const express = require('express');
var router = express.Router();
const customerController = require('../controllers/customer-controllers');
const security = require('../services/authenticate-service');
//router.use(security.authorize);

router.get('/', customerController.get);
router.get('/:id', customerController.getById);
router.put('/:id', customerController.update);
router.put('/updatePassword/:id', customerController.updatePassword);
router.delete('/:id', customerController.deleteForever);

module.exports = router;