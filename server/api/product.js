const getTime = require('../utils/getTime')
const { ProductModel, ClassifyModel } = require('../models')

/**
 * 发布商品
 * @param {Object} params 商品参数
 * - userId user._id
 * - name 商品名称
 * - image 商品图片
 * - price 成本价
 * - salesPrice 销售价
 * - classifyId 商品类型
 * - parameter(Array) 商品参数
 * - parameter[].name 参数名称
 * - parameter[].value 参数值
 */
exports.createProduct = params => {
  return ProductModel.create(params)
}

/**
 * 修改商品
 * @param {Object} params
 */
exports.editProduct = params => {
  return ProductModel.findOneAndUpdate({ _id: params._id }, params, { new: true })
}

/**
 * 根据product._id查找商品
 * @param {ObjectId} _id 商品的_id
 */
exports.findProductById = _id => {
  return ProductModel.findOne({ _id })
}

/**
 * 获取商品列表
 * @param {Object} params queryList
 * - page 当前页数
 * - pageSize 每页的数量
 */
exports.getProductList = async params => {
  let { page = 1, pageSize = 10, supplierId, isDelete, keywords } = params
  const options = {}
  if (supplierId) options.supplierId = supplierId
  if (isDelete !== '') options.isDelete = isDelete
  if (keywords) {
    options.$or = [{ name: { $regex: keywords, $options: '$i' } }]
  }
  page = ~~page
  pageSize = ~~pageSize
  const list = await ProductModel.find(options)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .populate('supplierId')
    .sort({ createTime: -1 })
  const total = await ProductModel.countDocuments()
  return {
    listQuery: { page, pageSize, total },
    list
  }
}

exports.getAllProductList = async params => {
  let { page = 1, pageSize = 10 } = params
  page = ~~page
  pageSize = ~~pageSize
  const list = await ProductModel.find({ isDelete: false, storage: { $gt: 0 } })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .populate('supplierId')
  const total = await ProductModel.countDocuments()
  return { listQuery: { page, pageSize, total }, list }
}

/**
 * 下架商品
 * @param {ObjectId} _id product._id
 */
exports.deleteProduct = _id => {
  return ProductModel.findOneAndUpdate({ _id }, { isDelete: true })
}

/**
 * 上架商品
 * @param {ObjectId} _id product._id
 */
exports.recoveryProduct = _id => {
  return ProductModel.findOneAndUpdate({ _id }, { isDelete: false })
}

exports.getStatistics = async () => {
  const time = getTime()
  const beforeTime = new Date(time.beforeTime).getTime()
  const startTime = new Date(time.startTime).getTime()
  const endTime = new Date(time.endTime).getTime()
  const yesterday = await ProductModel.countDocuments({
    createTime: { $gte: beforeTime, $lt: startTime }
  })
  const today = await ProductModel.countDocuments({
    createTime: { $gte: startTime, $lt: endTime }
  })
  return { yesterday, today }
}
