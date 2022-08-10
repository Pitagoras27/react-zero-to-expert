/**
 * Routes for auth: host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { fieldsValidators } = require('../middlewares/fields-validators');

router.get(
  '/renew',
  renewToken
);

router.post(
  '/',
  [ // middlewares
    check('email', 'Email should have correct format').isEmail(),
    check('password', 'Password in not correct').isLength(6),
    fieldsValidators
  ],
  loginUser);

router.post(
  '/new',
  [ // middlewares
    check('name', 'Name is mandatory').not().isEmpty(),
    check('email', 'Email should have correct format').isEmail(),
    check('password', 'Password should be 6 characters minimun').isLength(6),
    fieldsValidators
  ],
  createUser);

module.exports = router;
