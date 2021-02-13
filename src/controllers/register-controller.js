const Customer = require("../models/customer");

exports.registerCustomer = async (req, res, next) => {
  const customer = new Customer(req.body);
  const { email, password } = req.body;
  try {
    if (await Customer.findOne({ email }))
      return res.status(400).send({ message: 'E-mail já cadastrado ' })
    else
      customer.password = customer.generateHash(password)
    await customer.save();
    res.status(201).send({ menssage: 'Usuário criado com sucesso' });

  } catch (e) {
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}