const secret = require('./secret')

const base = {
  host: 'localhost',
  port: '8700',
  /* 数据库配置 */
  // dbHost: '106.14.226.1',
  dbHost: 'localhost',
  dbPort: '27017',
  dbName: 'kebk',
  /* 阿里云账号配置 */
  ...secret
}

base.dbUrl = `mongodb://${base.dbHost}:${base.dbPort}/${base.dbName}`

module.exports = base
