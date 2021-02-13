const express = require('express');
var router = express.Router();
const registerController = require('../controllers/register-controller');

router.post('/', registerController.registerCustomer);

module.exports = router;