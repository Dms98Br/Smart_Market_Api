const jwt = require('jsonwebtoken');
const config = require('../configure/keyaccess')

exports.authorize = (req, res, next) => {
  var token = req.body.token || req.headers['x=access-token'];
  if (!token)
    return res.status(401).send({ auth: false, menssage: 'Acesso Restrito' });
  else {
    jwt.verify(token, config.SaltKey, (error, decode) => {
      if (error)
        res.status(401).json({ auth: false, message: 'Token inválido' });
      else {
        req.userId = decode.id;
        next();
      }
    });
  }
}