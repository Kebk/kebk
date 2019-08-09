const Router = require('koa-router')
const router = new Router()
const MessageApi = require('../api/message')
const UserApi = require('../api/user')
const ProductApi = require('../api/product')
const OrderApi = require('../api/order')
const JwtUtil = require('../utils/jwt')

router.prefix('/admin')

/* 后台登录 */
router.post('/login', async ctx => {
  const { phone, code } = ctx.request.body
  const user = await UserApi.findUser({ phone })
  // 用户无登录管理系统权限
  if (user.userType === 0) return (ctx.body = { code: 0, msg: '无权限，无法登陆' })
  const record = await MessageApi.findMessageByPhone(phone)
  // 验证码过期，请重新发送
  if (new Date().getTime() > Date.parse(record.deadTime))
    return (ctx.body = { code: 0, msg: '验证码过期，请重新发送' })
  // 验证码已经使用
  if (record.isUsed) return (ctx.body = { code: 0, msg: '验证码已被使用，请重新发送' })
  // 判断验证码是否正确
  if (record.code !== Number(code)) {
    return (ctx.body = { code: 0, msg: '验证码错误' })
  } else {
    // await MessageApi.useMessageById(record._id)
    const jwt = new JwtUtil(user)
    const token = jwt.generateToken()
    return (ctx.body = {
      code: 200,
      data: { user, token }
    })
  }
})

router.get('/statistics', async ctx => {
  const user = await UserApi.getStatistics()
  const product = await ProductApi.getStatistics()
  const order = await OrderApi.getStatistics()
  const data = { user, product,order }
  return (ctx.body = { code: 200, data })
})

module.exports = router
