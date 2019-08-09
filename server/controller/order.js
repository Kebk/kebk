const Router = require('koa-router')
const router = new Router()
const OrderApi = require('../api/order')
const ProductApi = require('../api/product')

router.prefix('/order')

// router.post('/create', async ctx => {
//   const params = ctx.request.body
//   const getPrice = params.productList.map(async pro => {
//     let single = await ProductApi.findProductById(pro.proId)
//     return pro.number * single.price
//   })
//   return Promise.all(getPrice)
//     .then(res => {
//       let total = res.reduce((a, b) => {
//         return a + b
//       })
//       const data = OrderApi.createOrder({ ...params, total })
//       return data
//     })
//     .then(res => {
// setTimeout(async () => {
//   const order = await OrderApi.findOrderById(res._id)
//   if (order.status === 1) await OrderApi.cancelOrderById(res._id)
// }, 60 * 3600)
//       return (ctx.body = { code: 200, data: res })
//     })
// })

/* 创建订单 */
router.post('/create', async ctx => {
  const params = ctx.request.body
  const product = await ProductApi.findProductById(params.productId)
  if (product.storage <= 0) return (ctx.body = { code: 0, msg: '物品库存不足' })
  let total = product.salesPrice * params.number
  const data = await OrderApi.createOrder({ ...params, total })
  return (ctx.body = { code: 200, data })
})

/* 获取订单详情 */
router.get('/detail', async ctx => {
  const order = await OrderApi.findOrderById(ctx.request.query._id)
  return (ctx.body = { code: 200, data: order })
})

/* 支付订单 */
router.post('/pay', async ctx => {
  const params = ctx.request.body
  const order = await OrderApi.findOrderById(params._id)
  if (order.status === 1) {
    await OrderApi.payOrderById(params._id)
    return (ctx.body = { code: 200, msg: '支付成功' })
  } else {
    return (ctx.body = { code: 0, msg: '订单状态异常' })
  }
})

/* 订单发货 */
router.post('/delivery', async ctx => {
  const params = ctx.request.body
  const order = await OrderApi.findOrderById(params._id)
  if (order.status === 2) {
    await OrderApi.deliveryOrder(params)
    return (ctx.body = { code: 200, msg: '发货成功' })
  } else {
    return (ctx.body = { code: 0, msg: '订单状态异常' })
  }
})

/* 确认收货 */
router.post('/finish', async ctx => {
  const params = ctx.request.body
  const order = await OrderApi.findOrderById(params._id)
  if (order.status === 3) {
    await OrderApi.finishOrderById(params)
    return (ctx.body = { code: 200, msg: '确认收货' })
  } else {
    return (ctx.body = { code: 0, msg: '订单状态异常' })
  }
})

/* 取消订单 */
router.post('/cancel', async ctx => {
  const { _id } = ctx.request.body
  await OrderApi.cancelOrderById(_id)
  return (ctx.body = { code: 200 })
})

/* 获取订单列表 */
router.get('/list', async ctx => {
  const { page, pageSize, userId, status } = ctx.request.query
  const params = ~~status === 99 ? { page, pageSize, userId } : { page, pageSize, userId, status }
  const data = await OrderApi.getOrderList(params)
  return (ctx.body = { code: 200, data })
})

module.exports = router
