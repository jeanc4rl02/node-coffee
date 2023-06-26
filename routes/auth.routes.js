const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { login } = require('../controllers/auth.controller');

  const router = Router();

  router.post('/login', [
    check('email', 'Email is required.').notEmpty(),
    check('email', 'Email is not valid.').isEmail(),
    check('password', 'Password is required.').notEmpty(),
  ], 
  validateFields, 
  login);

  module.exports = router;