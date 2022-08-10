const { response } = require('express');
const bcrypt = require('bcryptjs');
const UserSchema = require('../models/user');
const { generateJwt } = require('../helpers/generateJwt')

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew Token'
  });
}

const loginUser = async (req, res = response) => {
  try {
    const { body } = req;
    const { password, email } = body;

    // UserSchema contains previsualization of Mongo
    const user = await UserSchema.findOne({ email });

    if(!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Email not exists!',
      });
    }

    const userPass = bcrypt.compareSync(password, user.password);

    if (!userPass) {
      return res.status(400).json({
        ok: false,
        msg: 'Password is not correct',
      });
    }

    const token = await generateJwt(user._id, user.name);

    res.status(201).json({
      ok: true,
      uid: userPass._id,
      msg: 'user logued',
      token
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'An error occurred, try later',
    });
  }
  
}

const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    let user = await UserSchema.findOne({ email });

    if( user ) {
      return res.status(400).json({
        ok: false, 
        msg: 'Mail already exists in database, try with other'
      })
    }

    user = new UserSchema(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    
    const token = await generateJwt(user._id, user.name);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user._id,
      msg: 'register successful',
      token
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