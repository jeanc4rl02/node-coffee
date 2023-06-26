const { Router } = require('express');
const { check } = require('express-validator');

// const { validateFields } = require('../middlewares/validate-fields');
// const { validateJWT } = require('../middlewares/validate-jwt');
// const { validateAdminRole, hasRole } = require('../middlewares/validate-roles');
const {
  validateFields, 
  validateJWT, 
  hasRole} = require('../middlewares');

const { validateIfRoleExistsInDB, 
        validateIfEmailExistsInDB,
        validateIfUserExistsInDB } = require('../helpers/db-validators')
const { getUsers, 
        postUser, 
        putUser, 
        deleteUser} = require('../controllers/user.controller');



const router = Router();

  router.get('/', getUsers);

  router.post('/', [
  check('name', 'Name must be at least 3 char.').isLength({min: 3}),
  check('email', 'Email is not valid.').isEmail(),
  check('password', 'Password length must be at least 6 characters.').isLength({min: 6}),
  check('name', 'Name is required.').notEmpty(),
  check('role').custom( validateIfRoleExistsInDB ),
  check('email').custom( validateIfEmailExistsInDB )
],
  validateFields,
  postUser);

  router.put('/:id', [
  // validateJWT,
  check('id', `This is not a valid id.`).isMongoId(),
  check('id').custom( validateIfUserExistsInDB ),
  check('role').optional().custom( validateIfRoleExistsInDB ),
  check('email').optional().custom( validateIfEmailExistsInDB ),
  check('email', 'Email is not valid.').optional().isEmail(),
  check('password', 'Password length must be at least 6 characters.').optional().isLength({min: 6})
  ],
  validateFields,
  putUser);

  router.delete('/:id',[
    validateJWT,
    // validateAdminRole,
    hasRole('ADMIN_ROLE', 'SELLER_ROLE'),
    check('id', 'This is not a valid id.').isMongoId(),
    check('id').custom( validateIfUserExistsInDB ),
  ], 
  validateFields,
  deleteUser);

module.exports = router;