/* 订单 */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const OrderSchema = new Schema(
  {
    userId: { type: ObjectId, required: true, ref: 'User' },
    productId: { type: ObjectId, required: true, ref: 'Product' }, // 商品id
    number: { type: Number, required: true },
    addressId: { type: String }, // 地址
    total: { type: Number, required: true }, // 总价
    freight: { type: Number }, // 邮费
    status: { type: Number }, // 0:已取消 1:待付款 2:待发货 3:已发货 4:已完成
    expressCompany: { type: String }, // 快递公司
    expressNumber: { type: String }, // 物流单号
    isDeleted: { type: Boolean } // 物流单号
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

OrderSchema.plugin(BaseModel)

const Order = mongoose.model('Order', OrderSchema)
