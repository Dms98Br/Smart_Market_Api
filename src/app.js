const express = require('express');
const mongoose = require('mongoose');
const config = require('./configure/keyaccess');
const bodyParser = require('body-parser');
const customerRoute = require('./route/customer-route');
const listRoute = require('./route/list-route');
const productRoute = require('./route/product-route');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect(config.connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));

// db.once("open", function() {
//   console.log("Connection Successful!");
// });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/customers', customerRoute);
app.use('/lists', listRoute);
app.use('/product', productRoute);

module.exports = app;