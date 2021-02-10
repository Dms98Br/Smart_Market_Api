const express = require('express');
const mongoose = require('mongoose');
const config = require('./configure/keyaccess');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect(config.connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

// Carrega os models
const Customer = require('./models/customer');

//Carregar as rotas
const customerRoute = require('./route/customer-route');
const listRoute = require('./route/list-route');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/customers', customerRoute);
app.use('/lists', listRoute);

module.exports = app;