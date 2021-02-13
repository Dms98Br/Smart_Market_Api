const List = require('../models/lists');

exports.create = async (req, res) => {
  const list = new List(req.body)
  try {
    const { nameList, id_user } = req.body
    if (id_user === undefined)
      return res.status(400).send({ menssage: 'Id do usuário não foi encontrado' });
    if (await List.findOne({ nameList }))
      return res.status(400).send({ menssage: 'Essa lista já existe' });
    else
      await list.save();
      res.status(201).send({ menssage: 'Lista criada com sucesso' });
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.get = async (req, res) => {
  try {
    var list = await List.find({})
    res.status(200).send(list)
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.getById = async (req, res) => {
  try {    
    return res.status(200).send(await List.findById(req.params.id));
  } catch (e) {
    res.status(500).send({
      menssage: 'Falha ao processar sua requisição'
    })
  }
}


exports.update = async (req, res) => {
  try {
    await List.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send('Nome da lista foi atualizado')
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.deleteForever = async (req, res) => {
  try {    
    await List.deleteOne({ _id: req.params.id });
    res.status(200).send({ menssage: 'Lista foi deletada !' })
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}