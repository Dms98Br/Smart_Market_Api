const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const schema = new Schema({
  nameList: {
    type: String,
    required: ['true', 'O nome é obrigatório'],
    trim: true
  }
});

module.exports = mongoose.model('lists', schema);