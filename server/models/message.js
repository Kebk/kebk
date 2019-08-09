/* 短信验证码 */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema

const MessageSchema = new Schema(
  {
    phone: { type: String, required: true },
    code: { type: Number, required: true },
    isUsed: { type: Boolean, default: false }, // true 已经使用 false 未使用
    deadTime: { type: Date }
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

MessageSchema.plugin(BaseModel)
MessageSchema.index({ phone: 1, createTime: -1 })

const Message = mongoose.model('Message', MessageSchema)
