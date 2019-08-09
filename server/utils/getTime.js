const moment = require('moment')

moment.locale('zh-cn')

module.exports = () => {
  let start = new Date()
  let before = new Date(start).getTime() - 1000 * 60 * 60 * 24
  let end = new Date(start).getTime() + 1000 * 60 * 60 * 24
  let beforeTime = moment(before)
    .format('YYYY-MM-DD HH:mm:ss')
    .split(' ')[0]
  let startTime = moment(start)
    .format('YYYY-MM-DD HH:mm:ss')
    .split(' ')[0]
  let endTime = moment(end)
    .format('YYYY-MM-DD HH:mm:ss')
    .split(' ')[0]
  return { beforeTime, startTime, endTime }
}
