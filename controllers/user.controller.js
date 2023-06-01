const { response } = require('express');

  const getUsers = (req, res = response) => {

    const {page = 1, limit} = req.query;
    res.json ('pong');
  }

  const postUser = (req, res = response) => {
    const {nombre, apellido} = req.body;
    res.status(201).json(nombre);
  }

  const putUser = (req, res = response) => {
    const {id} = req.params;
    res.json (id);
  }

  const deleteUser = (req, res = response) => {
    res.json ('pong');
  }

  const patchUser =  (req, res = response) => {
    res.json ('pong');
  }

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  patchUser,
}