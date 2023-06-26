const {Schema, model} = require('mongoose');
const { STRING } = require('sequelize');

const RoleSchema = Schema({
  rol: {
    type: String,
    required: [true, 'Rol is required.']
  }
});

module.exports = model('Role', RoleSchema);