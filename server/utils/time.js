const moment = require('moment')

moment.locale('zh-cn')

/**
 * 时间格式化工具
 * moment.js - http://momentjs.cn/
 * @param {Object} params 对象参数
 * - date 日期(默认当前时间)
 * - format 格式化形式(默认:'YYYY-MM-DD HH:mm:ss')
 */
module.exports = params => {
  let { date = new Date(), format = 'YYYY-MM-DD HH:mm:ss' } = params
  return moment(date).format(format)
}
