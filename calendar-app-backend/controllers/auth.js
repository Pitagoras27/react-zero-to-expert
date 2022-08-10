const { response } = require('express');

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew Token'
  });
}

const loginUser = (req, res = response) => {
  const { body } = req;

  const { password, email } = body;

  res.status(201).json({
    ok: true,
    msg: 'user logued',
    password, email
  });
}

const createUser = (req, res = response) => {
  const { body } = req;

  const { name, password, email } = body;

  res.status(201).json({
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