const config = require('../config')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')
const multer = require('koa-multer')
const OSS = require('ali-oss')

const client = new OSS({
  region: config.region,
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKeySecret,
  bucket: config.bucket
})

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../temp'), // 保存的路径
  filename: (req, file, cb) => {
    // 保存文件名设置为 当前时间.后缀名
    const fileFormat = file.originalname.split('.')
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})

const upload = multer({ storage })

router.post('/upload/:dir', upload.single('file'), async ctx => {
  const filename = ctx.req.file.filename
  const localPath = path.resolve(__dirname, '../temp/', filename)
  const result = await client.put(ctx.params.dir + '/' + filename, localPath) // 上传文件到阿里云oss
  await fs.unlinkSync(localPath) // 删除临时文件
  return (ctx.body = { code: 200, data: { url: result.url } })
})

router.post('/download', ctx => {
  // let result = await client.get('object-name')
  // console.log(result)
  // return result
})

module.exports = router
