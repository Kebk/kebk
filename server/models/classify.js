/* 商品类别 */
const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const Schema = mongoose.Schema

const ClassifySchema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'createTime', updatedAt: 'modifyTime' }
  }
)

ClassifySchema.plugin(BaseModel)

const Classify = mongoose.model('Classify', ClassifySchema)
