const Product = require('../models/product');

exports.create = async (req, res, body) => {
  try {
    const product = new Product(req.body)
    await product.save();
    res.status(201).send({ menssagem: 'Produto foi criado e adicionado na lista selecionada' })
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.get = async (req, res) => {
  try {
    res.status(200).send(await Product.find({}))
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.getById = async (req, res) => {
  try {
    res.status(200).send(await Product.findById(req.params.id));
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.update = async (req, res) => {
  try {
    await Product.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send('Produto foi atualizado')
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.deleteForever = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send({ menssagem: 'Produto foi deletado' })
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}