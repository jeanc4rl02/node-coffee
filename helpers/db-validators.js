const Role = require('../models/role.models');
const User = require('../models/user.models');

const validateIfRoleExistsInDB = async (role = '') => {
    const roleExists = await Role.findOne({role});
    if( !roleExists ) {
      throw new Error(`Role ${role} does not exist in the database.`)
    }
}

const validateIfUserExistsInDB = async (id) => {
  const userExists = await User.findById(id);
  if( !userExists) {
    throw new Error(`Id ${id} doesn't exist in the database.`)
  }
}

const validateIfEmailExistsInDB = async (email = '') => {
  const findEmail = await User.findOne({email});
  if(findEmail){
    throw new Error(`Email is already in use.`)
  }
}

module.exports = {
  validateIfRoleExistsInDB,
  validateIfEmailExistsInDB,
  validateIfUserExistsInDB
}
