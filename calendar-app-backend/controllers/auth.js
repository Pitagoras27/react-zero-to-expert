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
    const { email } = req.body;

    let user = await UserSchema.findOne({ email });
    if( user ) {
      res.status(400).json({
        ok: false, 
        msg: 'Mail already exists in database, try with other'
      })
    }

    user = new UserSchema(req.body);
    user.save();

    res.status(201).json({
      ok: true,
      uid: user._id,
      msg: 'register successful',
    });
  } catch (error) {
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