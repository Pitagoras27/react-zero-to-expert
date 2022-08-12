const { response } = require('express');
const { verify } = require('jsonwebtoken');

const validateJwt = (req, res = response, next) => {
  try {
    const token = req.header('x-token');
    if(!token) {
      res.status(400).json({
        ok: false,
        msg: 'Unexist token'
      });
    }

    // payload from token
    const { name, uid, exp } = verify(token, process.env.SECRET_JWT)

    req.name = name;
    req.uid = uid;
    
  } catch (error) {
    return res.status(400).json({ 
      ok: false,
      msg: 'Couldn\'t retrive token'
    })
  }

  next();
}

module.exports = {
  validateJwt
}