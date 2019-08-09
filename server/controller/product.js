const Router = require('koa-router')
const router = new Router()
const ProductApi = require('../api/product')
const UserApi = require('../api/user')

router.prefix('/product')

/* 发布商品 */
router.post('/publish', async ctx => {
  const params = ctx.request.body
  const user = await UserApi.findUserById(params.userId)
  if (user.userType !== 2 && user.userType !== 99) return (ctx.body = { code: 0, msg: '无权限' })
  let data
  if (params._id) {
    // 修改
    data = await ProductApi.editProduct(params)
  } else {
    // 新增
    data = await ProductApi.createProduct(params)
  }
  return (ctx.body = { code: 200, data })
})

/* 商品列表 */
router.get('/list', async ctx => {
  const { page, pageSize, isDelete, keywords, user } = ctx.request.query
  const options = { page, pageSize, isDelete, keywords }
  if (JSON.parse(user).userType !== 99) options.supplierId = JSON.parse(user).supplierId._id
  const data = await ProductApi.getProductList(options)
  return (ctx.body = { code: 200, data })
})

/* 获取所有商品列表 */
router.get('/allList', async ctx => {
  const params = ctx.request.query
  const data = await ProductApi.getAllProductList(params)
  return (ctx.body = { code: 200, data })
})

/* 获取商品详情 */
router.post('/detail', async ctx => {
  const product = await ProductApi.findProductById(ctx.request.body._id)
  return (ctx.body = { code: 200, data: product })
})

/* 下架商品 */
router.post('/delete', async ctx => {
  await ProductApi.deleteProduct(ctx.request.body)
  return (ctx.body = { code: 200 })
})

/* 上架商品 */
router.post('/recovery', async ctx => {
  await ProductApi.recoveryProduct(ctx.request.body)
  return (ctx.body = { code: 200 })
})

module.exports = router
