const config = require('../config')
const chalk = require('chalk')
const mongoose = require('mongoose')
const logUtil = require('../utils/log')
const path = require('path')
const fs = require('fs')

const option = {
  useNewUrlParser: true
}

mongoose.connect(config.dbUrl, option, err => {
  if (err) {
    console.log(chalk.green('[databse]') + ' fail to connect to database  ' + config.dbUrl)
    console.log(chalk.green('[databse]') + ' error Product: ' + err.msg)
    logUtil('db', '连接数据库(' + config.dbUrl + ')失败: ' + err.msg)
  } else {
    console.log(chalk.green('[databse]') + ' successfully connect to database ' + config.dbUrl)
    // logUtil('db', '成功连接数据库: ' + config.dbUrl, 1)
  }
})

mongoose.set('useFindAndModify', false) // collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
mongoose.set('useCreateIndex', true)

require('./user')
require('./agent')
require('./supplier')
require('./message')
require('./product')
require('./classify')
require('./order')

exports.UserModel = mongoose.model('User')
exports.AgentModel = mongoose.model('Agent')
exports.SupplierModel = mongoose.model('Supplier')
exports.MessageModel = mongoose.model('Message')
exports.ProductModel = mongoose.model('Product')
exports.ClassifyModel = mongoose.model('Classify')
exports.OrderModel = mongoose.model('Order')

/* fs.readdir(__dirname, (err, files) => {
  if (err) throw err
  const filter = ['baseModel.js', 'index.js'] // 需要过滤的文件列表
  // 过滤文件
  const list = files.filter(file => {
    return filter.indexOf(file) === -1
  })
  // 遍历过滤厚的文件列表并且引入
  list.forEach(file => {
    let name = file.split('.')[0]
    let filename = name.charAt(0).toUpperCase() + name.slice(1)
    let modelname = filename + 'Model'
  })
}) */
