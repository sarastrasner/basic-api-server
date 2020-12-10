'use strict';

function validateRequest(req, res, next) {
  console.log(req.query)
  if(!req.query.id){
    res.status(500);
    next('500 Error!');
  }
  else {
    next();
  }
}

module.exports = validateRequest;
