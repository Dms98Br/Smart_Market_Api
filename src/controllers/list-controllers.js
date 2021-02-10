const List = require('../models/lists');
const repository = require('../repositories/list-repository');

exports.create = async (req, res) => {
  try {
    const { namelist, id_user } = req.body
    if (id_user === undefined)
      return res.status(400).send({ menssage: 'Id do usuário não foi encontrado' });
    if (await List.findOne({ namelist }))
      return res.status(400).send({ menssage: 'Essa lista já existe' });

    else
      await repository.create(req.body);
    res.status(201).send({ menssage: 'Lista criada com sucesso' });
  } catch (e) {
    res.status(400).send({ menssage: 'Erro ao criar lista de compras' }, e);
  }
}

exports.get = async (req, res) => {
  try {
    var data = await repository.get()
    res.status(200).send({
      data: data
    })
  } catch (e) {
    res.status(400).send({ menssage: 'Erro ao retornar as lista' })
  }
}

exports.getById = async (req, res) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      menssage: 'Falha ao processar sua requisição'
    })
  }
}

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    await repository.update(req.params.id, req.body);
    res.status(200).send('Nome da lista foi atualizado')
  } catch (e) {
    res.status(400).send({ menssage: 'Erro na solitação', e });
  }
}

exports.deleteForever = async (req, res) => {
  try {
    if (! await List.findOne({ _id: req.params.id })) {
      res.status(400).send({ menssage: 'Usuário não foi encontrado' });
      return false
    }
    var data = await repository.deleteForever(req.params.id);
    res.status(200).send({ menssage: 'Lista foi deletada !' })
  } catch (e) {
    res.status(400).send({ menssage: 'Erro na solicitação' })
  }
}