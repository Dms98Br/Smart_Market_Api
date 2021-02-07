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
// var schema = mongoose.Schema({
//   name: String,
//   age: Number
// });
// var Model = mongoose.model("model", schema, "myCollection");

// var doc1 = new Model({ name: "John", age: 21 });

// doc1.save(function(err, doc) {
//   if (err) return console.error(err);
//   console.log("Document inserted succussfully!");
// });
// Carrega os models
const Customer = require('./models/customer');

//Carregar as rotas
const customerRoute = require('./route/customer-route');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/customers', customerRoute);

module.exports = app;