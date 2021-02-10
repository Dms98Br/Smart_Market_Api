const mongoose = require('mongoose');
const list = mongoose.model('lists')

exports.get = async () => {
  const res = await list.find()
  return res;
}

exports.getById = async (id) => {
  const res = await list.findById(id);
  return res;
}

exports.create = async (data) => {
  var res = new list(data);
  return await res.save();
}

exports.update = async (_id, data) => {
  await list
    .findByIdAndUpdate(_id, {
      $set: {
        nameList: data.nameList
      }
    });
}

exports.deleteForever = async (_id) => {
  await list.findByIdAndDelete(_id);
}