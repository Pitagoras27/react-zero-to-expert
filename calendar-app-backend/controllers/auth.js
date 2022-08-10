const { response } = require('express');
const UserSchema = require('../models/user');

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

const createUser = async(req, res = response) => {
  try {
    const { body } = req;

    const userInDB = new UserSchema(body);
    userInDB.save();

    res.status(201).json({
      ok: true,
      msg: 'register successful',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'An error occurred, try later',
    });
  }

}

module.exports = {
  renewToken,
  loginUser,
  createUser
}