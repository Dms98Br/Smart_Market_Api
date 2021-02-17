const Customer = require('../models/customer');
const jwt = require('jsonwebtoken');
const config = require('../configure/keyaccess')

exports.authenticate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email }).select('+password');    
    if (!customer || !customer._id)
      res.status(400).send({ menssage: 'Usuário não foi encontrado' });

      if (customer.email !== email)
      res.status(400).send({ menssage: 'Email incorreto' });
      
      if (!customer.validPassword(password))
      res.status(400).send({ menssage: 'Senha incorreta' })
      
    const id = customer._id
    var token = ({ token: jwt.sign({ id }, config.SaltKey, { expiresIn: 86400 }), customer: customer })
    res.status(202).send({ token: token })

  } catch (err) {
    console.log(err);
    res.status(400).json({ error: { code: err.code, message: err.message } });
  }
}