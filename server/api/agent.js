const { AgentModel, UserModel } = require('../models')

/**
 * 创建代理
 * @param {Object} params
 * - userId user._id
 * - name 真实姓名
 * - idCard 身份证号码
 * - idCardFront 身份证正面照片
 * - idCardBehind 身份证背面照片
 */
exports.createAgent = async params => {
  const agent = await AgentModel.create(params)
  await UserModel.updateOne({ _id: params.userId }, { agentId: agent._id, status: 0 })
  return agent
}

/**
 * 获取代理列表
 * @param {Object} params queryList
 * - page 当前页数
 * - pageSize 每页的数量
 * - status 0:未经过审核 -1:审核不通过 1:通过审核
 */
exports.agentList = async params => {
  let { page = 1, pageSize = 10, status } = params
  page = ~~page
  pageSize = ~~pageSize
  const list = await UserModel.find({ status, agentId: { $exists: true } })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .populate('agentId')
  const total = await UserModel.countDocuments({ status, agentId: { $exists: true } })
  return {
    listQuery: { page, pageSize, total },
    list
  }
}

/**
 * 审核代理申请
 * @param {Object} params
 * - _id user._id
 * - status 0:审核中 -1:审核不通过 1:通过审核
 * - reason 拒接理由
 */
exports.verifyAgent = async params => {
  const { _id, status, reason } = params
  const user = await UserModel.findOneAndUpdate({ _id }, { status, userType: 1 })
  await AgentModel.findOneAndUpdate({ _id: user.agentId }, { reason })
}
