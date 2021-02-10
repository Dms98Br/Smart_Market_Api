const Product = require('../models/product');
const repository = require('../repositories/product-repository');

exports.create = async (req, res, body) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ menssagem: 'Produto foi criado e adicionado na lista selecionada' })
  } catch (e) {
    res.status(400).send({ menssagem: 'Erro ao criar produto' })
  }
}

exports.get = async (req, res) => {
  try {
    var data = await repository.get()
    res.status(200).send({
      data: data
    })
  } catch (e) {
    res.status(400).send({ menssagem: 'Erro na solicitação', e })
  }
}

exports.getById = async (req, res) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      menssagem: 'Erro na solicitação'
    })
  }
}

exports.update = async (req, res) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send('Produto foi atualizado')

  } catch (e) {
    res.status(400).send({ menssagem: 'Erro na solicitação', e })
  }
}

exports.deleteForever = async (req, res) => {
  try {
    await repository.deleteForever(req.params.id);
    res.status(200).send({ menssagem: 'Produto foi deletado' })
  } catch (e) {
    res.status(400).send({ menssage: 'Erro na solicitação', e });
  }
}