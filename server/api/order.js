const getTime = require('../utils/getTime')
const { OrderModel, ProductModel } = require('../models')

/**
 * 创建订单
 * @param {Object} params 商品参数
 * - userId user._id
 * - productList 商品列表
 * - productList[].proId 商品id
 * - productList[].number 商品数量
 * - addressId 地址id
 * - total 总价
 * - freight 邮费
 */
exports.createOrder = async params => {
  await ProductModel.updateOne({ _id: params.productId }, { $inc: { storage: -1 } })
  return OrderModel.create({ ...params, status: 1 })
}

/**
 * 根据order._id查找订单
 * @param {ObjectId} _id order._id
 */
exports.findOrderById = _id => {
  return OrderModel.findOne({ _id }).populate('productId')
}

/**
 * 根据order._id取消订单
 * @param {ObjectId} _id order._id
 */
exports.cancelOrderById = async _id => {
  const order = await OrderModel.findOneAndUpdate({ _id }, { status: 0 }, { new: true })
  await ProductModel.updateOne({ _id: order.productId }, { $inc: { storage: 1 } })
  return order
}

/**
 * 根据order._id支付订单
 * @param {ObjectId} _id order._id
 */
exports.payOrderById = _id => {
  return OrderModel.updateOne({ _id }, { status: 2 })
}

/**
 * 订单开始发货
 * @param {ObjectId} params 参数
 * - _id order._id
 * - expressCompany 物流公司
 * - expressNumber 物流单号
 */
exports.deliveryOrder = params => {
  const { _id, expressCompany, expressNumber } = params
  return OrderModel.updateOne({ _id }, { expressCompany, expressNumber, status: 3 })
}

/**
 * 收到货物 订单完成
 * @param {ObjectId} _id order._id
 */
exports.finishOrderById = _id => {
  return OrderModel.updateOne({ _id }, { status: 4 })
}

/**
 * 获取订单列表
 * @param {Object} params queryList
 * - page 当前页数
 * - pageSize 每页的数量
 */
exports.getOrderList = async params => {
  let { page = 1, pageSize = 10, status, userId } = params
  let options = {}
  if (status) options.status = status
  if (userId) options.userId = userId
  page = ~~page
  pageSize = ~~pageSize
  const list = await OrderModel.find(options)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .sort({ createTime: -1 })
    .populate('userId')
    .populate('productId')
  const total = await OrderModel.countDocuments()
  return {
    listQuery: { page, pageSize, total },
    list
  }
}

exports.getStatistics = async () => {
  const time = getTime()
  const beforeTime = new Date(time.beforeTime).getTime()
  const startTime = new Date(time.startTime).getTime()
  const endTime = new Date(time.endTime).getTime()
  const yesterday = await OrderModel.countDocuments({
    createTime: { $gte: beforeTime, $lt: startTime }
  })
  const today = await OrderModel.countDocuments({
    createTime: { $gte: startTime, $lt: endTime }
  })
  return { yesterday, today }
}
