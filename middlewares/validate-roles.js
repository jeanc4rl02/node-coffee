const { response } = require('express');

const validateAdminRole = ( req, res = response, next ) => {

  if( !req.user ){
    return res.status(500).json({
      msg: 'No token validation.'
    })
  }

  const { role, name } = req.user; 

  if(role != 'ADMIN_ROLE'){
    return res.status(401).json({
      msg: `User: ${name} is unauthorized. You need permissions to execute this action.`
    }) 
  }

  next();
  
}

const hasRole = ( ...roles ) => {
  return ( req, res = response, next) => {
    if( !req.user ){
      return res.status(500).json({
        msg: 'No token validation.'
      })
    }

    if( !roles.includes( req.user.role ) ) {
      return res.status(401).json({
        msg: `To perform this action, one of the following roles is required: ${roles}`
      })
    }
    next();
  }
}

module.exports = {
  validateAdminRole,
  hasRole
}