const { ClassifyModel } = require('../models')

/**
 * 发布商品
 * @param {Object} params 商品类别参数
 * - name 类别名称
 */
exports.createClassify = params => {
  return ClassifyModel.create(params)
}

/**
 * 根据product._id查找订单
 * @param {Object} params 商品类别参数
 * - name 类别名称
 */
exports.findClassify = params => {
  return ClassifyModel.findOne(params)
}

/**
 * 修改类别信息
 * @param {Object} params 商品类别参数
 * - _id classify._id
 * - name 类别名称
 */
exports.modifyClassify = params => {
  const { _id, name } = params
  return ClassifyModel.findOneAndUpdate({ _id }, { name }, { new: true })
}

/**
 * 获取类别列表
 * @param {Object} params
 */
exports.getClassifyList = async params => {
  let { page = 1, pageSize = 10 } = params
  page = ~~page
  pageSize = ~~pageSize
  const list = await ClassifyModel.find()
    .skip(pageSize * (page - 1))
    .limit(pageSize)
  const total = await ClassifyModel.countDocuments()
  return {
    listQuery: { page, pageSize, total },
    list
  }
}

/**
 * 通过classify._id删除类别
 * @param {ObjectId} _id classify._id
 */
exports.deleteClassify = _id => {
  return ClassifyModel.deleteOne({ _id })
}

/**
 * 获取所有的类别
 */
exports.getAllClassifyList = () => {
  return ClassifyModel.find()
}
