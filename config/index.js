const path = require('path')

module.exports = {
  prod: {
    port: 8080,
    devtool: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  dev: {
    devServerOpts : require('./devserver_opts'),
    devtool: 'inline-source-map',
  }
}
