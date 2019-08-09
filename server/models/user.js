/* 用户(买家) */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema(
  {
    phone: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    level: { type: Number, default: 0 },
    userType: { type: Number, default: 0 }, // 0:普通用户 1:代理 2:供应商  99:超级管理员
    sex: { type: Number, default: 0 }, // 0:保密 1:男 2:女
    avatar: { type: String },
    isLock: { type: Boolean, default: false },
    lockTime: { type: Date },
    agentId: { type: ObjectId, ref: 'Agent' },
    supplierId: { type: ObjectId, ref: 'Supplier' },
    status: { type: Number } // 审核成为代理 供应商的状态  0:审核中 -1:审核不通过 1:审核通过
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

UserSchema.plugin(BaseModel)

const User = mongoose.model('User', UserSchema)
