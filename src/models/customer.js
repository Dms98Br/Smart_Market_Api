const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{
    type: String,
    required: ['true', 'O nome é obrigatório'],
    trim: true
  },
  email:{
    type: String,
    required: ['true', 'O email é obrigatório'],
    trim: true
  },
  password:{
    type: String,
    required:['true', 'A senha é obrigatória'],
    trim: true
  },
  roles:[{
    type: String,
    required: true,
    enum:['user','admin'],
    default:'user'
  }],
  active:[{
    type: String,
    required: true,
    enum:['true','false'],
    default: 'true'
  }]
});

schema.methods.generateHash = function (password) {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
}

schema.methods.validPassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
}
module.exports = mongoose.model('consumers', schema);