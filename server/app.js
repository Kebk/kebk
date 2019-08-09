const config = require('./config')
const chalk = require('chalk')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const registerRouter = require('./controller')
const errorHandle = require('./utils/error')
const JwtUtil = require('./utils/jwt')

const app = new Koa()

app.use(bodyParser())

app.use(errorHandle)

// CORS
app.use(async function(ctx, next) {
  ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin)
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Max-Age', 3600 * 24)
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
  ctx.set(
    'Access-Control-Allow-Headers',
    'x-requested-with, accept, origin, content-type, authorization'
  )
  if (ctx.method === 'OPTIONS') {
    ctx.body = ''
  }
  await next()
})

// jwt
app.use(async (ctx, next) => {
  const globalApi = [
    '/admin/login', // 后台管理系统登录
    '/message', // 发送短信
    '/user/login', // 用户登录
    '/user/register', // 用户注册
    '/upload/idcard', // 上传身份证接口
    '/product/allList', // 商品列表
    '/product/detail' // 商品详情
  ] // 接口白名单
  const reqPath = ctx.request.path
  if (globalApi.indexOf(reqPath) !== -1) { // 不需要token的接口列表
    await next()
  } else {
    const token = ctx.request.header.authorization // 获取请求头中的token
    const jwt = new JwtUtil(token)
    const result = jwt.verifyToken() // 验证token
    if (result === 'error') {
      return (ctx.body = { code: 403, msg: '登陆已经过期，请重新登录' })
    }
    await next()
  }
})

// 路由注册
app.use(registerRouter())

// 异常处理
app.on('error', (err, ctx) => {
  console.error('[ERROR] ' + err)
})

app.listen(8700, () => {
  const u = 'http://' + config.host + ':' + config.port
  console.log(`${chalk.green('[service]')} successfully started at ${chalk.green.underline(u)}`)
})
