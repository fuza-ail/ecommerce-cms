const jwt = require('jsonwebtoken');
const { Admin } = require('../models');
require('dotenv').config()

function authentication(req, res, next) {
  try {
    const token = req.headers.access_token;
    if (token) {
      decoded = jwt.verify(token, process.env.TOKEN_KEY)
      req.user = decoded
      Admin.findOne({ where: { email: decoded.UserEmail } })
        .then(admin => {
          if (admin) {
            next()
          }else{
            throw {
              status : 401,
              message: 'Invalid token'
            }
          }
        })
    } else {
      throw {
        status: 404,
        message: 'Token not found'
      }
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authentication