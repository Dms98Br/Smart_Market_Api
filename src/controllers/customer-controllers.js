const Customer = require("../models/customer");

exports.create = async (req, res, next) => {
  const customer = new Customer(req.body);
  const { email, password } = req.body;
  try {
    if (await Customer.findOne({ email }))
      return res.status(400).send({ message: 'E-mail já cadastrado ' })
    else
      customer.password = customer.generateHash(password)
    await customer.save();
      res.status(201).send({ menssage: 'Usuário criado com sucesso'});
      
  } catch (e) {
    console.log(e);
    res.status(400).send({ menssage: 'Erro ao cadastrar' });
  }
}
exports.get = async(req, res)=>{
  try {
    const customer = await Customer.find({});
    res.status(200).send(customer)
  } catch (e) {
    res.status(400).send({menssage: 'Erro na solicitação', e});
  }
}
exports.getById = async(req, res)=>{
  try {
    return res.send(await Customer.findById(req.params.id))
   } catch (e) {
    console.log(e);   
    res.status(500).send({
           message: 'Falha ao processar sua requisição',
           error: e
       })
   }
}

exports.update = async(req, res) =>{
  try {
    await Customer.updateOne({ _id: req.params.id }, req.body)
    res.status(200).send('Atualização realizada com sucesso!')
  } catch (e) {
    res.status(400).send({ menssage: 'Erro na solicitação', e });
  }
}

exports.updatePassword = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const { password } = req.body;
    req.body.password = customer.generateHash(password)
    await Customer.updateOne({ _id: req.params.id }, req.body)
    res.status(200).send('Atualização realizada com sucesso!')
  } catch (e) {
    console.log(e);
    res.status(400).send({menssage: 'Erro na solicitação', e});
  }
}

exports.deleteForever = async(req, res)=>{
  try {    
    await Customer.deleteOne({ _id: req.params.id })
    res.status(200).send({menssage: 'Usuário deletado com sucesso !'})
  } catch (e) {
    console.log(e);
    res.status(400).send({menssage: 'Erro na solicitação', e});
  }
}