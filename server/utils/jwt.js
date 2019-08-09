const fs = require('fs')
const path = require('path')
const jsonwebtoken = require('jsonwebtoken')

class Jwt {
  constructor(data) {
    this.data = data
  }

  // 生成token
  generateToken() {
    const data = this.data
    const created = Math.floor(Date.now() / 1000)
    const cert = fs.readFileSync(path.join(__dirname,'../pem/private_key.pem'))
    const token = jsonwebtoken.sign({ data, exp: created + 60 * 60 * 12 }, cert, {
      algorithm: 'RS256'
    })
    return token
  }

  // 检验token
  verifyToken() {
    const token = this.data
    const cert = fs.readFileSync(path.join(__dirname,'../pem/public_key.pem'))
    let res
    try {
      let result = jsonwebtoken.verify(token, cert, { algorithms: ['RS256'] }) || {}
      let { exp = 0 } = result,
        current = Math.floor(Date.now() / 1000)
      if (current <= exp) {
        res = result.data || {}
      }
    } catch (e) {
      res = 'error'
    }
    return res
  }
}

module.exports = Jwt
