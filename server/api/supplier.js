const { SupplierModel, UserModel } = require('../models')

/**
 * 创建供应商
 * @param {Object} params 参数
 * - userId user._id
 * - name 真实姓名
 * - business 企业名称
 * - code 统一社会信用代码
 * - evidence 营业执照照片
 * - address 地址
 * - reason 审核成为供应商失败的理由
 */
exports.createSupplier = async params => {
  const supplier = await SupplierModel.create(params)
  await UserModel.updateOne({ _id: params.userId }, { supplierId: supplier._id, status: 0 })
  return supplier
}

/**
 * 获取供应商列表
 * @param {Object} params queryList
 * - page 当前页数
 * - pageSize 每页的数量
 * - status 0:未经过审核 -1:审核不通过 1:通过审核
 */
exports.supplierList = async params => {
  let { page = 1, pageSize = 10, status } = params
  page = ~~page
  pageSize = ~~pageSize
  const list = await UserModel.find({ status, supplierId: { $exists: true } })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .populate('supplierId')
  const total = await UserModel.countDocuments({ status, supplierId: { $exists: true } })
  return {
    listQuery: { page, pageSize, total },
    list
  }
}

/**
 * 获取所有供应商
 */
exports.getAllSupplierList = () => {
  return UserModel.find({ status: 1, supplierId: { $exists: true } }).populate('supplierId')
}

/**
 * 审核供应商申请
 * @param {Object} params
 * - _id user._id
 * - status 0:审核中 -1:审核不通过 1:通过审核
 * - reason 拒接理由
 */
exports.verifySupplier = async params => {
  const { _id, status, reason } = params
  const user = await UserModel.findOneAndUpdate({ _id }, { status, userType: 2 })
  await SupplierModel.findByIdAndUpdate({ _id: user.supplierId }, { reason })
}
