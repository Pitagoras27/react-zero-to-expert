const { sign } = require('jsonwebtoken');

const generateJwt = (uid, name) => {
  return new Promise((resolve, reject) => {
    sign(
      { uid, name },
      process.env.SECRET_JWT,
      { expiresIn: '2h'},
      (err, token) => {
        if(err) {
          return reject(err)
        }
        resolve(token)
      }
    )
  })
}

module.exports = {
  generateJwt
}