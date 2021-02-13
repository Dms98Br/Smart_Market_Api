const express = require('express');
var router = express.Router();
const authController = require('../controllers/autheticate-controller');

router.post('/', authController.authenticate);

module.exports = router;