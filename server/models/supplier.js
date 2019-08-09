/* 供应商 */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema

require('./user')

const SupplierSchema = new Schema(
  {
    name: { type: String, required: true }, // 供应商名称
    business: { type: String, required: true }, // 企业名称
    code: { type: String, required: true }, // 统一社会信用代码
    evidence: { type: String, required: true }, // 营业执照照片
    address: { type: String, required: true }, // 地址
    reason: { type: String } // 审核成为供应商失败的理由
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

SupplierSchema.plugin(BaseModel)

const Supplier = mongoose.model('Supplier', SupplierSchema)
