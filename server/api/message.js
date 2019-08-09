const { MessageModel } = require('../models')

/**
 * 保存验证码记录
 * @param {Number} phone 用户手机号码
 * @param {Number} code 随机生成的验证码
 */
exports.createMessage = params => {
  const { phone, code } = params
  let createTime = new Date()
  let afterTime = createTime.getTime() + 1000 * 60 * 30
  let deadTime = new Date(afterTime)
  return MessageModel.create({ phone, code, createTime, deadTime })
}

/**
 * 根据手机号码查找验证码记录
 * @param {Number} phone 用户手机号码
 */
exports.findMessageByPhone = phone => {
  return MessageModel.findOne({ phone }).sort({ createTime: -1 })
}

/**
 * 使用验证码
 * @param {ObjectId} _id 验证码的id
 */
exports.useMessageById = _id => {
  return MessageModel.findOneAndUpdate({ _id }, { isUsed: true })
}
