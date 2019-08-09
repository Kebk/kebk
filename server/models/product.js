/* 商品信息 */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ProductSchema = new Schema(
  {
    supplierId: { type: ObjectId, ref: 'Supplier' }, // 供应商id
    name: { type: String, required: true }, // 商品名称
    storage: { type: Number, required: true }, // 商品库存
    image: { type: String, required: true }, // 商品图片
    price: { type: Number, required: true }, // 成本价
    salesPrice: { type: Number, required: true }, // 销售价
    classifyId: { type: ObjectId, required: true }, // 商品类型
    parameter: { type: Array }, // 商品参数
    isDelete: { type: Boolean, default: false } // 是否下架 true:下架
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

ProductSchema.plugin(BaseModel)

const Product = mongoose.model('Product', ProductSchema)
