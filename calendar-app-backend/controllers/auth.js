const { response } = require('express');
const { validationResult } = require('express-validator');

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew Token'
  });
}

const loginUser = (req, res = response) => {
  const { body } = req;
  const errors = validationResult(req);

  if( !errors.isEmpty()){
    return res.status(404).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  const { password, email } = body;

  res.json({
    ok: true,
    msg: 'user logued',
    password, email
  });
}

const createUser = (req, res = response) => {
  const { body } = req;
  const errors = validationResult( req );

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  const { name, password, email } = body;

  res.json({
    ok: true,
    msg: 'register',
    name, password, email
  });
}

module.exports = {
  renewToken,
  loginUser,
  createUser
}