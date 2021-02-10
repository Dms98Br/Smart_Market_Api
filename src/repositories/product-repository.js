const mongoose = require('mongoose');
const products = mongoose.model('products');

exports.get = async () => {
  return await products.find();
}

exports.getById = async (_id) => {
  return await products.findById(_id);
}

exports.create = async (data) => {
  var res = new products(data);
  await res.save();
  return res;
}

exports.update = async (_id, data) => {
  await products
    .findByIdAndUpdate(_id, {
      $set: {
        nameProduct: data.nameProduct,
        brandProduct: data.brandProduct,
        quantity: data.quantity,
        typeUnity: data.typeUnity,
        id_list: data.id_list,
        status: data.status
      }
    });
}

exports.deleteForever = async (_id) => {
  await products
    .findByIdAndDelete(_id)
}