const { response } = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user.models');
const { generateJWT } = require('../helpers/generate-jwt');

const login = async (req, res = response) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({email});

    //Verify if user is correct and exists in the database
    if( !user ){
      return res.status(400).json({
        msg: 'Email or Password not found, please make sure that the email and password were typed correctly.'
      })
    }

    //Verify if user is active
    if ( !user.status ){
      return res.status(400).json({
        msg: 'User is not active.'
      })
    }

    //Verify password
    const validPassword = bcrypt.compareSync(password, user.password);
    if( !validPassword ){
      return res.status(400).json({
        msg: 'Invalid Email or Password, please make sure that the email and password were typed correctly.'
      })  
    }

    //Generate JWT
    const token = await generateJWT( user.id );

    res.json({
      user,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Internal server error.'
    })
  }
  
  
}

module.exports = {
  login
}