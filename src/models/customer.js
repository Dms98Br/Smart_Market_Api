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

schema.pre('save', async function(next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;
  next();
})
module.exports = mongoose.model('consumers', schema);