module.exports = {
  root: true,
  parserOptions: {
    // EsLint通过parserOptions，允许指定校验的ecma的版本，及ecma的一些特性
    ecmaVersion: 6, // 指定ECMAScript支持的版本，6为ES6
    sourceType: 'module', // 指定来源的类型，有两种”script”或”module”
    ecmaFeatures: {
      // ecmaFeatures指定你想使用哪些额外的语言特性
      experimentalObjectRestSpread: true
    }
  },
  parser: 'babel-eslint', // EsLint默认使用esprima做脚本解析，也可以切换成babel-eslint解析
  env: {
    // Environment可以预设好的其他环境的全局变量，如brower、node环境变量、es6环境变量、mocha环境变量等
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  plugins: [
    // EsLint允许使用第三方插件
    'html',
    'import',
    'promise'
  ],
  extends: 'standard', // Extends是EsLint默认推荐的验证你可以使用配置选择哪些校验是你所需要的
  rules: [
    // 自定义规则
  ],
  globals: {
    // 即插件在执行过程中用到的其它全局变量
  }
}
