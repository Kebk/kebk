const base = require('./config.base')
const chalk = require('chalk')

if (process.env.NODE_ENV === 'production') {
  console.log(`${chalk.green('[enviroument]')} Service run at ${chalk.red('production')} enviroument`)
  module.exports = { ...base, ...require('./config.prod') }
} else if (process.env.NODE_ENV === 'testing') {
  console.log(`${chalk.green('[enviroument]')} Service run at ${chalk.blue('testing')} enviroument`)
  module.exports = { ...base, ...require('./config.test') }
} else {
  console.log(`${chalk.green('[enviroument]')} Service run at ${chalk.blue('development')} enviroument`)
  module.exports = { ...base, ...require('./config.dev') }
}
