module.exports = {
  configureWebpack: {
    resolve: {
      // '@': resolve('src'))
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views'
      }
    }
  },
  devServer: {
    port: 8600,
    https: false, // https:{type:Boolean}
    open: false // 配置自动启动浏览器
  }
}
