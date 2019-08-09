const Router = require('koa-router')
const router = new Router()
const ClassifyApi = require('../api/classify')

router.prefix('/classify')

/* 获取类别列表 */
router.get('/list', async ctx => {
  const params = ctx.request.query
  const data = await ClassifyApi.getClassifyList(params)
  return (ctx.body = { code: 200, data })
})

/* 获取所有的类别列表 */
router.get('/alllist', async ctx => {
  const data = await ClassifyApi.getAllClassifyList()
  return (ctx.body = { code: 200, data })
})

/* 新增类别 */
router.post('/create', async ctx => {
  const { name } = ctx.request.body
  const classify = await ClassifyApi.findClassify({ name })
  if (classify) return (ctx.body = { code: 0, msg: '该类别已存在' })
  const data = await ClassifyApi.createClassify({ name })
  return (ctx.body = { code: 200, data })
})

/* 删除类别 */
router.post('/delete', async ctx => {
  const { _id } = ctx.request.body
  await ClassifyApi.deleteClassify(_id)
  return (ctx.body = { code: 200 })
})

/* 编辑类别 */
router.post('/edit', async ctx => {
  const { _id, name } = ctx.request.body
  const classify = await ClassifyApi.findClassify({ name })
  if (classify) return (ctx.body = { code: 0, msg: '该类别已经存在' })
  const data = await ClassifyApi.modifyClassify({ _id, name })
  return (ctx.body = { code: 200, data })
})

module.exports = router
