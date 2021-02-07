const User = require("../models/customer");
const bcrypt = require('bcryptjs');
const { response } = require("express");
const repository = require('../repositories/customer-repository');
exports.post = async(req, res, next)=>{
  //console.log(req.body)
  try {
    const { email } = req.body;
    if (await User.findOne({ email }))
        return res.status(400).send({ message: 'E-mail já cadastrado '})
    else
      await repository.create(req.body);
      res.status(201).send({ menssage: 'Usuário criado com sucesso'});
      
  } catch (e) {
    res.status(400).send({menssage: 'Erro ao cadastrar', e});
  }
}
exports.get = async(req, res)=>{
  try {
    var data = await repository.get()
    res.status(200).send({
      data: data
    })
  } catch (e) {
    res.status(400).send({menssage: 'Erro na solicitação', e});
  }
}
exports.getById = async(req, res)=>{
  try {
       var data = await repository.getById(req.params.id);
       res.status(200).send(data);
   } catch (e) {
       res.status(500).send({
           message: 'Falha ao processar sua requisição',
           error: e
       })
   }
}

exports.update = async(req, res) =>{
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send('Atualização realizada com sucesso!')
  } catch (e) {
    res.status(400).send({menssage: 'Erro na solicitação', e});
  }
}

exports.deleteForever = async(req, res)=>{
  try {
    if(! await User.findOne({_id: req.params.id}))
      {
        res.status(400).send({ menssage: 'Usuário não encontrado'});
        return false;
      }
    var data = await repository.deleteForever(req.params.id);
    res.status(200).send({menssage: 'Usuário deletado com sucesso !'})
  } catch (e) {
    console.log(e);
    res.status(400).send({menssage: 'Erro na solicitação', e});
  }
}