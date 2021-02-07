const mongoose = require('mongoose');
const customers = mongoose.model('consumers');

exports.get = async() => {
  const res = await customers
  .find();
  return res;
}

exports.getById = async(id) => {
  const res = await customers.findById(id);
  return res;
}

exports.create = async(data)=>{
  var res = new customers(data);
  await res.save();
  return res;
}

exports.update = async(_id, data)=>{
  await customers
  .findByIdAndUpdate(_id,{
    $set:{
      name: data.name,
      email: data.email,
      password: data.password
    }
  });
}

exports.deleteForever = async(_id)=>{
  await customers
  .findByIdAndDelete(_id);
}