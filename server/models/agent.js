/* 代理 */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

require('./user')

const AgentSchema = new Schema(
  {
    name: { type: String, required: true }, // 真实姓名
    idCard: { type: String, required: true }, // 身份证号码
    idCardFront: { type: String, required: true }, // 身份证正面照片
    idCardBehind: { type: String, required: true }, // 身份证背面照片
    level: { type: Number, default: 0 }, // 代理等级
    supplierId: { type: ObjectId, required: true }, // 供应商id
    reason: { type: String } // 审核成为代理失败的理由
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

AgentSchema.plugin(BaseModel)

const Agent = mongoose.model('Agent', AgentSchema)
