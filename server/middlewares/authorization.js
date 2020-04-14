const { Product } = require('../models');

function authorization(req,res,next){
  Product.findByPk(req.body.params)
  .then(product=>{
    if(product){
      if(product.AdminId == req.user.UserId){
        next()
      }else{
        throw {
          status: 403,
          message: 'Not authorized'
        }
      }
    }else{
      throw {
        status: 404,
        message: 'Produt not found'
      }
    }
  })
  .catch(err=>{
    next(err)
  })
}

module.exports = authorization