const { Router } = require('express');
const { getUsers, 
        postUser, 
        putUser, 
        deleteUser, 
        patchUser } = require('../controllers/user.controller');

const router = Router();

  router.get('/', getUsers);

  router.post('/', postUser);

  router.put('/:id', putUser);

  router.delete('/:id', deleteUser);

  router.patch('/:id', patchUser);

module.exports = router;