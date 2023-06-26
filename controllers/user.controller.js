const { response } = require('express');
const User = require('../models/user.models')

const bcrypt = require('bcrypt');

  const getUsers = async (req, res = response) => {

    const {limit = 5, skip = 1} = req.query;
    const query = {status: true}

    const [total, users] = await Promise.all([
      User.countDocuments(query),
      User.find(query)
        .limit( limit )
        .skip( skip )
    ]);

    res.json ({
      total,
      users
    });
  }

  const postUser = async (req, res = response) => {

    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //Encrypt password.
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    //Save into DB.
    await user.save();
    
    res.status(201).json(user);
  }

  const putUser = async (req, res = response) => {
    const {id} = req.params;
    const {_id, password, google, email, ...rest} = req.body;

    if( password ){
      //Encrypt password.
      const salt = bcrypt.genSaltSync();
      rest.password = bcrypt.hashSync(password, salt);
    } 

    const user = await User.findByIdAndUpdate(id, rest);

    res.json (user);
  }

  const deleteUser = async (req, res = response) => {
    const {id} = req.params;
    const changeStatus = {status: false};

    const userDeleted = await User.findByIdAndUpdate(id, changeStatus);
    const autenticatedUser = req.user;
    res.json( {userDeleted, autenticatedUser} );
  }


module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser
}