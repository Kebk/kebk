const MessageApi = require('../api/message')

module.exports = async (phone, code) => {
  const record = await MessageApi.findMessageByPhone(phone)
  if (new Date().getTime() > Date.parse(record.deadTime))
    return { code: 0, msg: '验证码过期，请重新发送' }
  if (record.isUsed) return { code: 0, msg: '验证码已被使用，请重新发送' }
  if (record.code !== Number(code)) {
    return { code: 0, msg: '验证码错误' }
  } else {
    await MessageApi.useMessageById(record._id)
    return { code: 200 }
  }
}
