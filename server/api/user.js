const getTime = require('../utils/getTime')
const { UserModel } = require('../models')

/**
 * 查找用户 包括代理信息或者供应商信息
 * @param {Object} params 查找用户的参数
 */
exports.findUser = params => {
  return UserModel.findOne(params)
    .populate('agentId')
    .populate('supplierId')
}

/**
 * 创建用户
 * @param {Object} params 用户参数
 */
exports.createUser = params => {
  return UserModel.create(params)
}

/**
 * 获取用户列表
 * @param {Object} params queryList
 * - page 当前页数
 * - pageSize 每页的数量
 */
exports.userList = async params => {
  let { page = 1, pageSize = 10, userType, isLock } = params
  let options = {}
  if (userType) options.userType = userType
  if (isLock) options.isLock = isLock
  page = ~~page
  pageSize = ~~pageSize
  const list = await UserModel.find(options)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
  const total = await UserModel.countDocuments()
  return {
    listQuery: { page, pageSize, total },
    list
  }
}

/**
 * 封禁/解封用户
 * @param {Object} params 查找用户的参数
 * - _id user._id
 * - isLock true:封禁/false:解封
 * - time 封禁时间
 */
exports.lockUser = async params => {
  const { _id, isLock } = params
  return UserModel.findOneAndUpdate({ _id }, { isLock })
}

/**
 * 通过_id查找用户
 * @param {ObjectId} _id
 */
exports.findUserById = _id => {
  return UserModel.findOne({ _id })
}

/**
 * 通过_id查找用户
 * @param {Object} params 用户参数
 */
exports.updataUser = params => {
  const { _id, email, sex, avatar } = params
  return UserModel.updateOne({ _id }, { email, sex, avatar }, { new: true })
}

exports.getStatistics = async () => {
  const time = getTime()
  const beforeTime = new Date(time.beforeTime).getTime()
  const startTime = new Date(time.startTime).getTime()
  const endTime = new Date(time.endTime).getTime()
  const yesterday = await UserModel.countDocuments({
    createTime: { $gte: beforeTime, $lt: startTime }
  })
  const today = await UserModel.countDocuments({
    createTime: { $gte: startTime, $lt: endTime }
  })
  return { yesterday, today }
}
