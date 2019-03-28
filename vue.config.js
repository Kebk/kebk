const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      // '@': resolve('src'))
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        utils: '@/utils'
      }
    }
  },
  devServer: {
    port: 8600,
    https: false, // https:{type:Boolean}
    open: false // 配置自动启动浏览器
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/css/variable.styl'),
        path.resolve(__dirname, './src/assets/css/common.styl')
      ]
    }
  }
}
