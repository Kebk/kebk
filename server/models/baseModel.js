/**
 * 给所有的 Model 扩展功能
 * http://mongoosejs.com/docs/plugins.html
 */
const moment = require('moment')
moment.locale('zh-cn')

module.exports = function(schema) {
  schema.add({
    createTime: {
      type: Date,
      default: Date.now,
      get: v => moment(v).format('YYYY-MM-DD HH:mm:ss')
    },
    modifyTime: {
      type: Date,
      default: Date.now,
      get: v => moment(v).format('YYYY-MM-DD HH:mm:ss')
    }
  })
}
