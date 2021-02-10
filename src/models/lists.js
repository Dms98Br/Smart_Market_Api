const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nameList: {
    type: String,
    required: ['true', 'O nome é obrigatório'],
    trim: true
  },
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    required: ['true', 'Id do usuário é obrigatório'],
  }
});

module.exports = mongoose.model('lists', schema);