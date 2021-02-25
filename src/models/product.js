const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nameProduct: {
    type: String,
    required: ['true', 'O nome da lista é obrigatório'],
    trim: true
  },
  brandProduct: {
    type: String,
    trim: true
  },
  quantity: {
    type: String,
    trim: true
  },
  typeUnity: [{
    type: String,
    required: ['true', 'Unidade de medida é obrigatório'],
    trim: true
  }],
  id_list: {
    type: mongoose.Schema.Types.ObjectId,
    required: ['true', 'Id da lita é obrigatório'],
  },
  status: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('products', schema);