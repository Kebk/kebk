const Router = require('koa-router')
const router = new Router()
const config = require('../config')
const Core = require('@alicloud/pop-core')
const MessageApi = require('../api/message')
const logUtil = require('../utils/log')

const client = new Core({
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKeySecret,
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
})

let params = {
  RegionId: 'cn-hangzhou',
  PhoneNumbers: '',
  SignName: config.signName,
  TemplateCode: config.TemplateCode,
  TemplateParam: ''
}

router.post('/message', async ctx => {
  try {
    // 随机生成短信验证码
    let code = ''
    for (let i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 10)
    }
    params.TemplateParam = `{code:${code}}`
    params.PhoneNumbers = ctx.request.body.phone
    // 发送短信验证码
    const result = await client.request('SendSms', params, { method: 'POST' })
    await MessageApi.createMessage({ phone: params.PhoneNumbers, code })
    ctx.body = { code: 200, data: result }
  } catch (e) {
    logUtil('message', `手机号码:${params.PhoneNumbers}\n ${e}`)
    if (e.name === 'isv.BUSINESS_LIMIT_CONTROLError')
      ctx.body = { code: 0, msg: '请勿频繁发送验证码' }
  }
})

module.exports = router
