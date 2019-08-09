const config = require('../config')
const Router = require('koa-router')
const router = new Router()
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const UserApi = require('../api/user')
const MessageApi = require('../api/message')
const logUtil = require('../utils/log')
const JwtUtil = require('../utils/jwt')
const checkMessageUtil = require('../utils/checkMessage')

router.prefix('/user')

/* 注册 */
router.post('/register', async ctx => {
  const { phone, username, code, password, repassword } = ctx.request.body
  if (password !== repassword) return (ctx.body = { code: 0, msg: '两次密码不一致' }) // 判断两次密码
  if (!phone || !username || !password || !code) return (ctx.body = { code: 0 }) // 判断注册信息是否为空
  const phoneCheck = await UserApi.findUser({ phone })
  if (phoneCheck) return (ctx.body = { code: 0, msg: '该手机号码已被注册' })
  const usernameCheck = await UserApi.findUser({ phone })
  if (usernameCheck) return (ctx.body = { code: 0, msg: '该用户名已被注册' })
  const checkResult = await checkMessageUtil(phone, code)
  // 验证短信验证码
  if (checkResult.code === 0) return (ctx.body = { code: 0, msg: checkResult.msg })
  let HashPass = await bcrypt.hash(password, 5) // 加密密码
  const user = await UserApi.createUser({ phone, username, password: HashPass })
  logUtil('register', `用户 ${user.username} 注册成功!`, 1)
  const jwt = new JwtUtil(user)
  const token = jwt.generateToken()
  return (ctx.body = { code: 200, data: { user, token } })
})

/* 登录 */
router.post('/login', async ctx => {
  const { phone, username, code, password } = ctx.request.body
  let user
  if (phone) {
    user = await UserApi.findUser({ phone })
  } else if (username) {
    user = await UserApi.findUser({ username })
  }
  if (!user) {
    return (ctx.body = { code: 0, msg: '账号不存在' })
  }
  if (password) {
    if (await bcrypt.compare(password, user.password)) {
      const jwt = new JwtUtil(user)
      const token = jwt.generateToken()
      return (ctx.body = { code: 200, data: { user, token } })
    } else {
      return (ctx.body = { code: 0, msg: '密码错误' })
    }
  } else {
    const checkResult = await checkMessageUtil(phone, code)
    if (checkResult === 0) return (ctx.body = { code: 0, msg: checkResult.msg })
    const jwt = new JwtUtil(user)
    const token = jwt.generateToken()
    return (ctx.body = { code: 200, data: { user, token } })
  }
})

/* 用户是否注册验证(phone,username,email) */
router.post('/verify', async ctx => {
  const params = ctx.request.body
  const result = await UserApi.findUser(params)
  if (params.phone) {
    return (ctx.body = result ? { code: 0, msg: '该手机号已被注册' } : { code: 200, msg: '' })
  } else if (params.username) {
    return (ctx.body = result ? { code: 0, msg: '该用户名被占用' } : { code: 200, msg: '' })
  } else if (params.email) {
    return (ctx.body = result ? { code: 0, msg: '该邮箱已被注册' } : { code: 200, msg: '' })
  } else {
    return (ctx.body = { code: 200 })
  }
})

/* 用户列表 */
router.get('/list', async ctx => {
  let params = ctx.request.query
  const data = await UserApi.userList(params)
  return (ctx.body = { code: 200, data })
})

/* 用户详情 */
router.post('/detail', async ctx => {
  const user = await UserApi.findUserById(ctx.request.body)
  return (ctx.body = { code: 200, data: user })
})

/* 创建用户 */
router.post('/create', async ctx => {
  let params = ctx.request.body
  if (params.password) {
    params.password = await bcrypt.hash(params.password, 5) // 加密密码
  } else {
    params.password = await bcrypt.hash('123456', 5) // 加密密码
  }
  const user = await UserApi.createUser(params)
  logUtil('register', `用户 ${user.username} 注册成功!`, 1)
  return (ctx.body = { code: 200, data: { user } })
})

/* 封禁用户 */
router.post('/lock', async ctx => {
  const { _id, isLock } = ctx.request.body
  await UserApi.lockUser({ _id, isLock })
  return (ctx.body = { code: 200 })
})

/* 修改用户信息 */
router.post('/updata', async ctx => {
  const { _id, email, sex, avatar } = ctx.request.body
  await UserApi.updataUser({ _id, email, sex, avatar })
  return (ctx.body = { code: 200 })
})

module.exports = router
