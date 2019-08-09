const Router = require('koa-router')
const router = new Router()
const SupplierApi = require('../api/supplier')
const UserApi = require('../api/user')

router.prefix('/supplier')

/* 申请成为供应商 */
router.post('/apply', async ctx => {
  const params = ctx.request.body
  const user = await UserApi.findUser({ _id: params.userId })
  if (user.status === 0) {
    if (user.agentId) return (ctx.body = { code: 0, msg: '您已经申请成为代理,请耐心等待审核结果' })
    if (user.supplierId)
      return (ctx.body = { code: 0, msg: '您已经申请成为供应商,请耐心等待审核结果' })
  }
  if (user.status === 1) {
    if (user.agentId) return (ctx.body = { code: 0, msg: '您已经成为代理' })
    if (user.supplierId) return (ctx.body = { code: 0, msg: '您已经成为供应商' })
  }
  const data = await SupplierApi.createSupplier(params)
  return (ctx.body = { code: 200, data })
})

/* 供应商列表 */
router.get('/list', async ctx => {
  const params = ctx.request.query
  if (params.status === undefined) return (ctx.body = { code: 0, msg: '缺失参数：status' })
  const data = await SupplierApi.supplierList(params)
  return (ctx.body = { code: 200, data })
})

/* 全部供应商列表 */
router.get('/allList', async ctx => {
  const data = await SupplierApi.getAllSupplierList()
  return (ctx.body = { code: 200, data })
})

/* 审核申请供应商的信息 */
router.post('/verify', async ctx => {
  const { _id, status, reason } = ctx.request.body
  if (~~status === -1 && !reason) return (ctx.body = { code: 0, msg: '请输入拒绝理由' })
  await SupplierApi.verifySupplier({ _id, status, reason })
  return (ctx.body = { code: 200 })
})

module.exports = router
