const Customer = require("../models/customer");

exports.get = async(req, res)=>{
  try {
    const customer = await Customer.find({});
    res.status(200).send(customer)
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.getById = async(req, res)=>{
  try {
    return res.send(await Customer.findById(req.params.id))
   } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
   }
}

exports.update = async(req, res) =>{
  try {
    await Customer.updateOne({ _id: req.params.id }, req.body)
    res.status(200).send('Atualização realizada com sucesso!')
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
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
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}

exports.deleteForever = async(req, res)=>{
  try {    
    await Customer.deleteOne({ _id: req.params.id })
    res.status(200).send({menssage: 'Usuário deletado com sucesso !'})
  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}