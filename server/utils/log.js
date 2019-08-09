const fs = require('fs')
const path = require('path')
const timeUtil = require('./time')

/**
 * 添加日志文件
 * @param {String} file 文件名称
 * @param {String} info 日志信息
 * @param {Number} type 日志类型 0:错误(默认) 1:信息
 */
module.exports = (file = 'kebk', info = '', type = 0) => {
  let data = type ? '[INFO] ' : '[ERROR] '
  data = data + timeUtil({}) + '\n' + info + '\n----------------------------------------\n\n'
  const url = path.resolve(__dirname, '../log', file + '.log')
  fs.writeFile(url, data, { flag: 'a' }, err => {
    if (err) throw err
  })
}
