const compose = require('koa-compose')
const glob = require('glob')
const path = require('path')

/* 引入controller目录下的路由文件 */
module.exports = () => {
  let routers = []
  glob
    .sync(path.resolve(__dirname, './', '**/*.js'))
    .filter(value => value.indexOf('index.js') === -1)
    .map(router => {
      routers.push(require(router).routes())
      routers.push(require(router).allowedMethods())
    })
  return compose(routers)
}
