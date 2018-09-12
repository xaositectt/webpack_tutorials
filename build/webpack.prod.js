const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const config = require('../config/index')

module.exports = merge(common, {
  mode: 'production',
  devtool: config.prod.devtool,
  output: {
    path: config.prod.assetsRoot,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js'
  }
})
