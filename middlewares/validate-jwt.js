const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user.models');

const validateJWT = async ( req = request, res = response, next) => {

  const token = req.header('x-token');
  if( !token ){
    return res.status(401).json({
      msg: 'Unauthorized, please check your access token.'
    })
  }

  try {

    const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

    const user = await User.findById(uid);
    
    if( !user ){
      return res.status(401).json({
        msg: 'User does not exist in the database.'
      })
    }

    if( !user.status ){
      return res.status(401).json({
        msg: 'User already deleted.'
      })
    }

    req.user = user; 
    next();

  } catch (error) {

    console.log(error);
    res.status(401).json({
      msg: 'Invalid token.'
    });
    
  }
  
}

module.exports = {
  validateJWT
}