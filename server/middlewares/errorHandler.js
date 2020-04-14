function errorHandler(err,req,res,next){
  if(err.message){
    res.status(err.status).json({message:err.message})
  }
}

module.exports = errorHandler