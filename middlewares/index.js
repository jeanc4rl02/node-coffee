

const validFields = require('../middlewares/validate-fields');
const validJWT  = require('../middlewares/validate-jwt');
const validRoles = require('./validate-roles');

module.exports = {
  ...validFields,
  ...validJWT,
  ...validRoles,
}