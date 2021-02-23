const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./configure/keyaccess');
const bodyParser = require('body-parser');
const customerRoute = require('./route/customer-route');
const registerRoute = require('./route/register-route');
const listRoute = require('./route/list-route');
const productRoute = require('./route/product-route');
const authRoute = require('./route/authenticate-route');

const app = express();
app.use(cors())
//Conecta ao banco
mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error', () => console.log('Erro ao conectar no banco'));
connection.on('open', () => console.log('Banco conectado'));


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/customers', customerRoute);
app.use('/register', registerRoute)
app.use('/lists', listRoute);
app.use('/product', productRoute);
app.use('/signin', authRoute);

module.exports = app;